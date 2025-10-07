
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req : NextRequest) {
  try {
    // Apenas aceita método POST
    if (req.method !== 'POST') {
      return NextResponse.json(
        { message: 'Método não permitido. Use POST.' },
        { status: 405 }
      );
    }

    // Cria a resposta
    const response = NextResponse.json(
      { message: 'Logout realizado com sucesso!' },
      { status: 200 }
    );

    // Apaga o cookie 'token' de forma segura
    response.cookies.set('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // HTTPS em produção
      sameSite: 'strict', // evita CSRF
      expires: new Date(0), // expira imediatamente
      path: '/', // precisa ser o mesmo path do login
    });

    return response;
  } catch (error) {
    console.error('Erro durante o logout:', error);

    // Caso ocorra algum erro inesperado
    return NextResponse.json(
      { message: 'Erro interno ao realizar logout.' },
      { status: 500 }
    );
  }
}
