import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import * as z from "zod";

const projectSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  status: z.string(),
  technologies: z.string(),
  githubUrl: z.string().url().optional().or(z.literal('')),
  liveUrl: z.string().url().optional().or(z.literal('')),
});

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const validation = projectSchema.safeParse(body);

    if (!validation.success) {
      return new NextResponse("Invalid data", { status: 400 });
    }

    const { title, description, status, technologies, githubUrl, liveUrl } = validation.data;

    const techArray = technologies.split(',').map(tech => tech.trim());

    const updatedProject = await prisma.project.update({
      where: {
        id: parseInt(params.id),
      },
      data: {
        title,
        description,
        status,
        technologies: techArray,
        githubUrl: githubUrl || null,
        liveUrl: liveUrl || null,
      },
    });

    return NextResponse.json(updatedProject);
  } catch (error) {
    console.error("[PROJECT_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id) {
      return new NextResponse("Project ID is required", { status: 400 });
    }

    const project = await prisma.project.delete({
      where: {
        id: parseInt(params.id),
      },
    });

    return NextResponse.json(project);
  } catch (error)
 {
    console.error("[PROJECT_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}