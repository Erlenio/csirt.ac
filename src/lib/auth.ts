import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

// Definição de tipo para o payload do JWT
interface JwtPayload {
  id: string;
  email: string;
  tipo: string;
  exp?: number; // Expiration time
  iat?: number; // Issued at
}

// Definição de tipo para o objeto Request estendido pelo middleware
// Isso permite que `request.user` seja tipado corretamente após o middleware
declare module 'next/server' {
  interface NextRequest {
    user: JwtPayload;
  }
}

// Use uma chave secreta forte e armazene-a em variáveis de ambiente!
const JWT_SECRET = process.env.JWT_SECRET || 'sua_chave_secreta_muito_forte_e_aleatoria';
const JWT_EXPIRES_IN = '1h'; // Token expira em 1 hora

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export function generateToken(user: { id: string; email: string; tipo: string }): string {
  // Inclua apenas os dados necessários no token (evite dados sensíveis)
  const payload: JwtPayload = {
    id: user.id,
    email: user.email,
    tipo: user.tipo,
  };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

// Middleware de autenticação para API Routes do App Router
// Este middleware é projetado para ser usado *dentro* das funções GET/POST/etc. das rotas
// Ele retorna o payload decodificado ou um NextResponse de erro.
export function authenticateMiddleware(request: NextRequest): JwtPayload | NextResponse {
  let token = request.cookies.get('token')?.value;
  if (!token) {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Não autorizado: Token não fornecido ou formato inválido.' }, { status: 401 });
    }
    token = authHeader.split(' ')[1];
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    return decoded;
  } catch (error) {
    console.error("Erro ao verificar token:", error);
    return NextResponse.json({ message: 'Não autorizado: Token inválido ou expirado.' }, { status: 401 });
  }
}

export function verifyToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch (error) {
    console.error("Erro ao verificar token:", error); // Descomente para depuração
    return null; // Token inválido ou expirado
  }
}

export async function getUsuarioFromRequest(request: NextRequest) {
  const token = request.cookies.get('token')?.value ||
    request.headers.get('authorization')?.split(' ')[1];

  if (!token) return null;

  try {
    const payload = await jwt.verify(token, JWT_SECRET) as JwtPayload;
    if (typeof payload.id === 'string' && typeof payload.tipo === 'string') {
      return {
        id: payload.id,
        tipo: payload.tipo,
      };
    }
  } catch (error) {
    console.error('Erro ao verificar JWT:', error);
  }

  return null;
}