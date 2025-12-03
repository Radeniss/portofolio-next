// app/api/portfolio/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

interface Params {
  params: {
    id: string;
  };
}

// GET a single portfolio item
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const id = parseInt(params.id, 10);
    const item = await prisma.portfolioItem.findUnique({
      where: { id },
    });

    if (!item) {
      return NextResponse.json({ message: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json(item);
  } catch (error) {
    console.error(`Failed to fetch portfolio item #${params.id}:`, error);
    return NextResponse.json({ message: 'Failed to fetch item' }, { status: 500 });
  }
}

// UPDATE a portfolio item
export async function PUT(request: NextRequest, { params }: Params) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const id = parseInt(params.id, 10);
    const body = await request.json();
    const { title, author, date, icon, images, desc } = body;

    // Basic validation
    if (!title || !author || !date || !icon || !images || !desc) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const updatedItem = await prisma.portfolioItem.update({
      where: { id },
      data: {
        title,
        author,
        date: new Date(date),
        icon,
        images,
        desc,
      },
    });

    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error(`Failed to update portfolio item #${params.id}:`, error);
    return NextResponse.json({ message: 'Failed to update item' }, { status: 500 });
  }
}

// DELETE a portfolio item
export async function DELETE(request: NextRequest, { params }: Params) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const id = parseInt(params.id, 10);
    await prisma.portfolioItem.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 }); // No Content
  } catch (error) {
    console.error(`Failed to delete portfolio item #${params.id}:`, error);
    return NextResponse.json({ message: 'Failed to delete item' }, { status: 500 });
  }
}
