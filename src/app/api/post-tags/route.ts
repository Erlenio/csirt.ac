import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET all PostTag entries or filter by post_id or tag_id
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get('postId');
  const tagId = searchParams.get('tagId');

  try {
    if (postId && tagId) {
      const postTag = await prisma.postTag.findUnique({
        where: { post_id_tag_id: { post_id: postId, tag_id: tagId } },
        include: {
          post: true,
          tag: true,
        },
      });
      if (!postTag) {
        return NextResponse.json({ message: 'PostTag association not found' }, { status: 404 });
      }
      return NextResponse.json(postTag);
    } else if (postId) {
      const postTags = await prisma.postTag.findMany({
        where: { post_id: postId },
        include: {
          post: true,
          tag: true,
        },
      });
      return NextResponse.json(postTags);
    } else if (tagId) {
      const postTags = await prisma.postTag.findMany({
        where: { tag_id: tagId },
        include: {
          post: true,
          tag: true,
        },
      });
      return NextResponse.json(postTags);
    } else {
      const postTags = await prisma.postTag.findMany({
        include: {
          post: true,
          tag: true,
        },
      });
      return NextResponse.json(postTags);
    }
  } catch (error) {
    console.error('Error fetching PostTag(s):', error);
    return NextResponse.json({ message: 'Error fetching PostTag(s)', error }, { status: 500 });
  }
}

// POST a new PostTag association
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { post_id, tag_id } = body;

    if (!post_id || !tag_id) {
      return NextResponse.json({ message: 'post_id and tag_id are required' }, { status: 400 });
    }

    const newPostTag = await prisma.postTag.create({
      data: {
        post_id,
        tag_id,
      },
    });
    return NextResponse.json(newPostTag, { status: 201 });
  } catch (error) {
    console.error('Error creating PostTag association:', error);
    return NextResponse.json({ message: 'Error creating PostTag association', error }, { status: 500 });
  }
}

// DELETE a PostTag association
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get('postId');
    const tagId = searchParams.get('tagId');

    if (!postId || !tagId) {
      return NextResponse.json({ message: 'post_id and tag_id are required for deletion' }, { status: 400 });
    }

    await prisma.postTag.delete({
      where: { post_id_tag_id: { post_id: postId, tag_id: tagId } },
    });
    return NextResponse.json({ message: 'PostTag association deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting PostTag association:', error);
    return NextResponse.json({ message: 'Error deleting PostTag association', error }, { status: 500 });
  }
}
