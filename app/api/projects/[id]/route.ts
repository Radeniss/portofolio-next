// app/api/projects/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

interface Params {
  params: {
    id: string;
  };
}

// GET a single project
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const id = parseInt(params.id, 10);
    const project = await prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      return NextResponse.json({ message: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error(`Failed to fetch project #${params.id}:`, error);
    return NextResponse.json({ message: 'Failed to fetch project' }, { status: 500 });
  }
}

// UPDATE a project
export async function PUT(request: NextRequest, { params }: Params) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const id = parseInt(params.id, 10);
    const body = await request.json();
    const { 
      title, description, imageUrl, status, technologies, 
      stars, forks, githubUrl, liveUrl 
    } = body;

    // Basic validation
    if (!title || !description || !status || !technologies) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const updatedProject = await prisma.project.update({
      where: { id },
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

    return NextResponse.json(updatedProject);
  } catch (error) {
    console.error(`Failed to update project #${params.id}:`, error);
    return NextResponse.json({ message: 'Failed to update project' }, { status: 500 });
  }
}

// DELETE a project
export async function DELETE(request: NextRequest, { params }: Params) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const id = parseInt(params.id, 10);
    await prisma.project.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 }); // No Content
  } catch (error) {
    console.error(`Failed to delete project #${params.id}:`, error);
    return NextResponse.json({ message: 'Failed to delete project' }, { status: 500 });
  }
}
