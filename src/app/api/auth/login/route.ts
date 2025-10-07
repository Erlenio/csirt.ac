import prisma from '@/lib/prisma';
import { verifyPassword, generateToken } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, senha } = await request.json();

    if (!email || !senha) {
      return NextResponse.json({ message: 'Email e senha são obrigatórios.' }, { status: 400 });
    }

    const user = await prisma.usuario.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 401 });
    }

    const isValidPassword = await verifyPassword(senha, user.senha_hash);

    if (!isValidPassword) {
      return NextResponse.json({ message: 'Credenciais inválidas.' }, { status: 401 });
    }

    const token = generateToken(user);
    console.log("Usuário logado:", user);
    
    const response = NextResponse.json(
      { message: 'Login bem-sucedido!', token, user: { id: user.id, nome: user.nome, email: user.email, tipo: user.tipo } },
      { status: 200 }
    );

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: false,//process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 2, // 2 horas
      path: '/',
    })

    return response;

  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return NextResponse.json({ message: 'Erro interno do servidor ao fazer login.' }, { status: 500 });
  }
}
