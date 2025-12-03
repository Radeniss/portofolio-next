// app/api/projects/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

// GET all projects
export async function GET(request: NextRequest) {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return NextResponse.json({ message: 'Failed to fetch projects' }, { status: 500 });
  }
}

// CREATE a new project
export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { 
      title, description, imageUrl, status, technologies, 
      stars, forks, githubUrl, liveUrl 
    } = body;

    // Basic validation
    if (!title || !description || !status || !technologies) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        imageUrl,
        status,
        technologies,
        stars: Number(stars) || 0,
        forks: Number(forks) || 0,
        githubUrl,
        liveUrl,
      },
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error('Failed to create project:', error);
    return NextResponse.json({ message: 'Failed to create project' }, { status: 500 });
  }
}
