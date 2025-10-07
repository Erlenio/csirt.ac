// src/app/api/posts/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { mkdir, writeFile } from "fs/promises";
import { extname, join } from "path";
import slugify from "slugify";
import { randomUUID } from "crypto";
import { getUsuarioFromRequest } from "@/lib/auth";

interface PostData {
  titulo: string;
  slug: string;
  conteudo: string;
  resumo: string;
  categoria: { connect: { id: string } };
  autor: { connect: { id: string } };
  imagem_capa: { connect: { id: string } };
  status: "PUBLICADO" | "RASCUNHO";
  tags: {
    createMany: {
      data: { tag_id: string }[];
      skipDuplicates: boolean;
    };
  };
}

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    
    // Paginação simples
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const skip = (page - 1) * limit;


    const [posts, total] = await prisma.$transaction([
      prisma.post.findMany({
        where: { status: "PUBLICADO" },
        orderBy: { publicado_em: "desc" },
        skip,
        take: limit,
        include: {
          autor: { select: { id: true, nome: true, foto: true } },
          categoria: true,
          tags: { include: { tag: true } },
          imagem_capa: true
        },
      }),
      prisma.post.count({ where: { status: "PUBLICADO" } }),
    ]);

    return NextResponse.json({ page, limit, total, data: posts });
  } catch (err) {
    console.error("Erro no GET /api/posts:", err);
    return NextResponse.json({ erro: "Erro interno." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {

    const usuario = await getUsuarioFromRequest(request);
    if (!usuario || (usuario.tipo !== 'AUTOR' && usuario.tipo !== 'ADMIN')) {
      return NextResponse.json({ error: 'Acesso não autorizado' }, { status: 401 });
    }

    const formData = await request.formData();

    const titulo = formData.get("titulo")?.toString().trim();
    const resumo = formData.get("resumo")?.toString().trim() || null;
    const conteudo = formData.get("conteudo")?.toString();
    const categoriaNome = formData.get("categoria")?.toString().trim();
    const tagsRaw = formData.get("tags")?.toString();
    const tags: string[] = tagsRaw ? JSON.parse(tagsRaw) : [];
    const imagem = formData.get("imagem") as File | null;

    if (!titulo || !conteudo || !categoriaNome || !resumo) {
      return NextResponse.json(
        { error: "Título, conteúdo e categoria são obrigatórios." },
        { status: 400 }
      );
    }

    let caminhoImagem: string | null = null;
    let arquivoId: string | null = null;

    if (imagem && imagem.size > 0) {
      if (!ALLOWED_IMAGE_TYPES.includes(imagem.type)) {
        return NextResponse.json(
          { error: "Tipo de imagem inválido." },
          { status: 415 }
        );
      }
      if (imagem.size > MAX_IMAGE_SIZE) {
        return NextResponse.json(
          { error: "Imagem excede 5MB." },
          { status: 413 }
        );
      }

      const uploadDir = join(process.cwd(), "public", "uploads");
      await mkdir(uploadDir, { recursive: true });

      const filename = `${randomUUID()}${extname(imagem.name)}`;
      const filePath = join(uploadDir, filename);
      const buffer = Buffer.from(await imagem.arrayBuffer());
      await writeFile(filePath, buffer);

      caminhoImagem = `/uploads/${filename}`;
    }

    const slugBase = slugify(titulo, { lower: true, strict: true });
    let slug = slugBase;
    let counter = 1;
    while (await prisma.post.findUnique({ where: { slug } })) {
      slug = `${slugBase}-${counter++}`;
    }

    const result = await prisma.$transaction(async (tx) => {
      const categoria = await tx.categoria.upsert({
        where: { slug: slugify(categoriaNome, { lower: true, strict: true }) },
        update: {},
        create: {
          nome: categoriaNome,
          slug: slugify(categoriaNome, { lower: true, strict: true }),
        },
      });

      const tagIds: string[] = [];
      for (const nome of tags) {
        const tag = await tx.tag.upsert({
          where: { slug: slugify(nome, { lower: true, strict: true }) },
          update: {},
          create: {
            nome,
            slug: slugify(nome, { lower: true, strict: true }),
          },
        });
        tagIds.push(tag.id);
      }

      if (caminhoImagem) {
        const arquivo = await tx.arquivo.create({
          data: {
            nome: imagem!.name,
            tipo: imagem!.type,
            caminho: caminhoImagem,
            tamanho: imagem!.size,
            tipo_logico: "IMAGEM",
          },
        });
        arquivoId = arquivo.id;
      }

      if (!arquivoId) {
        return NextResponse.json(
          { error: "Erro ao processar a imagem." },
          { status: 500 }
        );
      }

      const postData: PostData = {
        titulo,
        slug,
        conteudo,
        resumo,
        categoria: { connect: { id: categoria.id } },
        autor: { connect: { id: usuario.id } },
        imagem_capa: { connect: { id:arquivoId}}, // ajuste conforme auth
        status: "PUBLICADO",
        tags: {
          createMany: {
            data: tagIds.map((tag_id) => ({ tag_id })),
            skipDuplicates: true,
          },
        },
      };

      const post = await tx.post.create({
        data: postData,
      });

      return post;
    });

    if (!result) {
      return NextResponse.json(
        { error: "Erro ao criar o artigo." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Artigo criado com sucesso."}, { status: 201 });
  } catch (err) {
    console.error("Erro no POST /api/posts:", err);
    const errorMessage = (err instanceof Error && err.message) ? err.message : "Erro interno.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
