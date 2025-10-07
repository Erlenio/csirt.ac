import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET all files or a single file by ID
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    if (id) {
      const arquivo = await prisma.arquivo.findUnique({
        where: { id },
      });
      if (!arquivo) {
        return NextResponse.json({ message: 'Arquivo not found' }, { status: 404 });
      }
      return NextResponse.json(arquivo);
    } else {
      const arquivos = await prisma.arquivo.findMany();
      return NextResponse.json(arquivos);
    }
  } catch (error) {
    console.error('Error fetching arquivo(s):', error);
    return NextResponse.json({ message: 'Error fetching arquivo(s)', error }, { status: 500 });
  }
}

// POST a new file
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, tipo, caminho, tamanho, tipo_logico } = body;

    if (!nome || !tipo || !caminho || !tamanho) {
      return NextResponse.json({ message: 'Nome, Tipo, Caminho, and Tamanho are required' }, { status: 400 });
    }

    const newArquivo = await prisma.arquivo.create({
      data: {
        nome,
        tipo,
        caminho,
        tamanho,
        tipo_logico,
      },
    });
    return NextResponse.json(newArquivo, { status: 201 });
  } catch (error) {
    console.error('Error creating arquivo:', error);
    return NextResponse.json({ message: 'Error creating arquivo', error }, { status: 500 });
  }
}

// PUT (update) an existing file
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, nome, tipo, caminho, tamanho, tipo_logico } = body;

    if (!id) {
      return NextResponse.json({ message: 'ID is required for update' }, { status: 400 });
    }

    const updatedArquivo = await prisma.arquivo.update({
      where: { id },
      data: {
        nome,
        tipo,
        caminho,
        tamanho,
        tipo_logico,
      },
    });
    return NextResponse.json(updatedArquivo);
  } catch (error) {
    console.error('Error updating arquivo:', error);
    return NextResponse.json({ message: 'Error updating arquivo', error }, { status: 500 });
  }
}

// DELETE a file
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ message: 'ID is required for deletion' }, { status: 400 });
    }

    await prisma.arquivo.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Arquivo deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting arquivo:', error);
    return NextResponse.json({ message: 'Error deleting arquivo', error }, { status: 500 });
  }
}
