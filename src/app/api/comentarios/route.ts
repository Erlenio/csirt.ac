import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET all comments or a single comment by ID, or comments by post_id
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const postId = searchParams.get('postId');

  try {
    if (id) {
      const comentario = await prisma.comentario.findUnique({
        where: { id },
        include: {
          post: true,
        },
      });
      if (!comentario) {
        return NextResponse.json({ message: 'Comentario not found' }, { status: 404 });
      }
      return NextResponse.json(comentario);
    } else if (postId) {
      const comentarios = await prisma.comentario.findMany({
        where: { post_id: postId },
        include: {
          post: true,
        },
      });
      return NextResponse.json(comentarios);
    } else {
      const comentarios = await prisma.comentario.findMany({
        include: {
          post: true,
        },
      });
      return NextResponse.json(comentarios);
    }
  } catch (error) {
    console.error('Error fetching comentario(s):', error);
    return NextResponse.json({ message: 'Error fetching comentario(s)', error }, { status: 500 });
  }
}

// POST a new comment
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { post_id, nome, email, mensagem } = body;

    if (!post_id || !nome || !email || !mensagem) {
      return NextResponse.json({ message: 'post_id, nome, email, and mensagem are required' }, { status: 400 });
    }

    const newComentario = await prisma.comentario.create({
      data: {
        post_id,
        nome,
        email,
        mensagem,
      },
    });
    return NextResponse.json(newComentario, { status: 201 });
  } catch (error) {
    console.error('Error creating comentario:', error);
    return NextResponse.json({ message: 'Error creating comentario', error }, { status: 500 });
  }
}

// PUT (update) an existing comment
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, nome, email, mensagem, aprovado } = body;

    if (!id) {
      return NextResponse.json({ message: 'ID is required for update' }, { status: 400 });
    }

    const updatedComentario = await prisma.comentario.update({
      where: { id },
      data: {
        nome,
        email,
        mensagem,
        aprovado,
      },
    });
    return NextResponse.json(updatedComentario);
  } catch (error) {
    console.error('Error updating comentario:', error);
    return NextResponse.json({ message: 'Error updating comentario', error }, { status: 500 });
  }
}

// DELETE a comment
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ message: 'ID is required for deletion' }, { status: 400 });
    }

    await prisma.comentario.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Comentario deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting comentario:', error);
    return NextResponse.json({ message: 'Error deleting comentario', error }, { status: 500 });
  }
}
