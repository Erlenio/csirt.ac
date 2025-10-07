import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET all categories or a single category by ID
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    if (id) {
      const categoria = await prisma.categoria.findUnique({
        where: { id },
        include: {
          posts: true,
        },
      });
      if (!categoria) {
        return NextResponse.json({ message: 'Categoria not found' }, { status: 404 });
      }
      return NextResponse.json(categoria);
    } else {
      const categorias = await prisma.categoria.findMany({
        include: {
          posts: true,
        },
      });
      return NextResponse.json(categorias);
    }
  } catch (error) {
    console.error('Error fetching categoria(s):', error);
    return NextResponse.json({ message: 'Error fetching categoria(s)', error }, { status: 500 });
  }
}

// POST a new category
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, slug, descricao } = body;

    if (!nome || !slug) {
      return NextResponse.json({ message: 'Nome and Slug are required' }, { status: 400 });
    }

    const newCategoria = await prisma.categoria.create({
      data: {
        nome,
        slug,
        descricao,
      },
    });
    return NextResponse.json(newCategoria, { status: 201 });
  } catch (error) {
    console.error('Error creating categoria:', error);
    return NextResponse.json({ message: 'Error creating categoria', error }, { status: 500 });
  }
}

// PUT (update) an existing category
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, nome, slug, descricao } = body;

    if (!id) {
      return NextResponse.json({ message: 'ID is required for update' }, { status: 400 });
    }

    const updatedCategoria = await prisma.categoria.update({
      where: { id },
      data: {
        nome,
        slug,
        descricao,
      },
    });
    return NextResponse.json(updatedCategoria);
  } catch (error) {
    console.error('Error updating categoria:', error);
    return NextResponse.json({ message: 'Error updating categoria', error }, { status: 500 });
  }
}

// DELETE a category
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ message: 'ID is required for deletion' }, { status: 400 });
    }

    await prisma.categoria.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Categoria deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting categoria:', error);
    return NextResponse.json({ message: 'Error deleting categoria', error }, { status: 500 });
  }
}
