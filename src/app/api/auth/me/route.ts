import { verifyToken } from '@/lib/auth';
import prisma from '../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

type AuthenticatedRequest = Request & { user?: { id: string } };

async function handler(request: AuthenticatedRequest) {



  if (request.method !== 'GET') {
    return NextResponse.json({ message: 'Método não permitido' }, { status: 405 });
  }

  const userId = request.user?.id;

  try {
    const user = await prisma.usuario.findUnique({
      where: { id: userId },
      select: {
        id: true,
        nome: true,
        email: true,
        tipo: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
    return NextResponse.json({ message: 'Erro interno do servidor ao buscar dados do usuário.' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {

  let token = request.cookies.get('token')?.value;
  if (!token) {
    const authHeader = request.headers.get('authorization');
    if (authHeader?.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
    }
  }

  if(!token) return NextResponse.json({ message: 'Não autorizado: Token não encontrado.' }, { status: 401 });

  const decoded = verifyToken(token);

  if (!decoded) {
    return NextResponse.json({ message: 'Não autorizado: Token inválido ou expirado.' }, { status: 401 });
  }

  request.user = decoded;

  return handler(request);
}