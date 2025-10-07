// src/app/api/posts/
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(
    request: NextRequest
) {
    try {
        
        const {slug} = await request.json();

        if (!slug) {
            return NextResponse.json({ error: "Slug não fornecido" }, { status: 400 });
        }
        

        if (!slug) {
            return NextResponse.json({ error: "Slug não fornecido" }, { status: 400 });
        }

        const post = await prisma.post.findFirst({
            where: { slug, status: "PUBLICADO" },
            include: {
                autor: true,
                categoria: true,
                tags: { include: { tag: true } },
                imagem_capa: true,
                comentarios: true
            },
        });

        if (!post) {
            return NextResponse.json({ error: "Post não encontrado" }, { status: 404 });
        }

        const ultimosPosts = await prisma.post.findMany({
            where: {
                slug: { not: slug },
                status: "PUBLICADO",
            },
            orderBy: {
                publicado_em: "desc", // ou createdAt, dependendo do seu modelo
            },
            take: 4,
            include: {
                autor: { select: { id: true, nome: true, foto: true } },
                categoria: true,
                tags: { include: { tag: true } },
                imagem_capa: true
            }
        });

        return NextResponse.json({ data: post, ultimos: ultimosPosts }, { status: 200 });

    } catch (err) {
        console.error("Erro no GET /api/posts:", err);
        const errorMessage = err instanceof Error ? err.message : "Erro interno.";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}