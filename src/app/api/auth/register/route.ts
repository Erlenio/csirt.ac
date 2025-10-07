
import prisma from '@/lib/prisma'; // Ajuste o caminho conforme a sua estrutura
import { hashPassword } from '@/lib/auth'; // Ajuste o caminho conforme a sua estrutura
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request : NextRequest) {
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
