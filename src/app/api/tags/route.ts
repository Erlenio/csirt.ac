import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET all tags or a single tag by ID
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    if (id) {
      const tag = await prisma.tag.findUnique({
        where: { id },
        include: {
          posts: true, // Include related posts if needed
        },
      });
      if (!tag) {
        return NextResponse.json({ message: 'Tag not found' }, { status: 404 });
      }
      return NextResponse.json(tag);
    } else {
      const tags = await prisma.tag.findMany({
        include: {
          posts: true, // Include related posts if needed
        },
      });
      return NextResponse.json(tags);
    }
  } catch (error) {
    console.error('Error fetching tag(s):', error);
    return NextResponse.json({ message: 'Error fetching tag(s)', error }, { status: 500 });
  }
}

// POST a new tag
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, slug } = body;

    if (!nome || !slug) {
      return NextResponse.json({ message: 'Nome and Slug are required' }, { status: 400 });
    }

    const newTag = await prisma.tag.create({
      data: {
        nome,
        slug,
      },
    });
    return NextResponse.json(newTag, { status: 201 });
  } catch (error) {
    console.error('Error creating tag:', error);
    return NextResponse.json({ message: 'Error creating tag', error }, { status: 500 });
  }
}

// PUT (update) an existing tag
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, nome, slug } = body;

    if (!id) {
      return NextResponse.json({ message: 'ID is required for update' }, { status: 400 });
    }

    const updatedTag = await prisma.tag.update({
      where: { id },
      data: {
        nome,
        slug,
      },
    });
    return NextResponse.json(updatedTag);
  } catch (error) {
    console.error('Error updating tag:', error);
    return NextResponse.json({ message: 'Error updating tag', error }, { status: 500 });
  }
}

// DELETE a tag
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ message: 'ID is required for deletion' }, { status: 400 });
    }

    await prisma.tag.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Tag deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting tag:', error);
    return NextResponse.json({ message: 'Error deleting tag', error }, { status: 500 });
  }
}
