import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { hashPassword } from '@/lib/auth';

// GET all users or a single user by ID
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    if (id) {
      const usuario = await prisma.usuario.findUnique({
        where: { id },
      });
      if (!usuario) {
        return NextResponse.json({ message: 'Usuario not found' }, { status: 404 });
      }
      // Do not return senha_hash for security reasons
      const { ...result } = usuario;

      return NextResponse.json(result);
    } else {
      const usuarios = await prisma.usuario.findMany({
        // Do not return senha_hash for security reasons
        select: {
          id: true,
          nome: true,
          email: true,
          tipo: true,
          criado_em: true, // Assuming 'criado_em' exists based on other models, if not, remove
        },
      });
      return NextResponse.json(usuarios);
    }
  } catch (error) {
    console.error('Error fetching usuario(s):', error);
    return NextResponse.json({ message: 'Error fetching usuario(s)', error }, { status: 500 });
  }
}

// POST a new user
export async function POST(request: Request) {
  try {
    const { nome, email, senha } = await request.json();

    if (!nome || !email || !senha) {
      return NextResponse.json({ message: 'Nome, email e senha são obrigatórios.' }, { status: 400 });
    }

    // Verificar se o email já está em uso
    const existingUser = await prisma.usuario.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ message: 'Email já registrado.' }, { status: 409 });
    }

    const hashedPassword = await hashPassword(senha);

    const newUser = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha_hash: hashedPassword,
        // tipo: 'LEITOR', // Opcional: defina um tipo padrão se não for enviado
      },
      select: {
        id: true,
        nome: true,
        email: true,
        tipo: true,
      },
    });

    return NextResponse.json({ message: 'Usuário registrado com sucesso!', user: newUser }, { status: 201 });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    return NextResponse.json({ message: 'Erro interno do servidor ao registrar usuário.' }, { status: 500 });
  }
}

// PUT (update) an existing user
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, nome, email, senha_hash, tipo } = body;

    if (!id) {
      return NextResponse.json({ message: 'ID is required for update' }, { status: 400 });
    }

    const updatedUsuario = await prisma.usuario.update({
      where: { id },
      data: {
        nome,
        email,
        senha_hash,
        tipo,
      },
    });
    // Do not return senha_hash for security reasons
    const { ...result } = updatedUsuario;
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error updating usuario:', error);
    return NextResponse.json({ message: 'Error updating usuario', error }, { status: 500 });
  }
}

// DELETE a user
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ message: 'ID is required for deletion' }, { status: 400 });
    }

    await prisma.usuario.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Usuario deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting usuario:', error);
    return NextResponse.json({ message: 'Error deleting usuario', error }, { status: 500 });
  }
}
