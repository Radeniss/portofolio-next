// app/api/portfolio/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

export async function GET(request: NextRequest) {
  try {
    const portfolioItems = await prisma.portfolioItem.findMany({
      orderBy: {
        date: 'desc',
      },
    });
    return NextResponse.json(portfolioItems);
  } catch (error) {
    console.error('Failed to fetch portfolio items:', error);
    return NextResponse.json({ message: 'Failed to fetch portfolio items' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, author, date, icon, images, desc } = body;

    // Basic validation
    if (!title || !author || !date || !icon || !images || !desc) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const newItem = await prisma.portfolioItem.create({
      data: {
        title,
        author,
        date: new Date(date),
        icon,
        images,
        desc,
      },
    });

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error('Failed to create portfolio item:', error);
    return NextResponse.json({ message: 'Failed to create portfolio item' }, { status: 500 });
  }
}
