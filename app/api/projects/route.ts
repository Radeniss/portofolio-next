import { NextResponse } from "next/server";
import * as z from "zod";
import { prisma } from "@/lib/prisma";

// Schema for validation, should match the form's schema
const projectSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  status: z.string(),
  technologies: z.string(), // Received as a comma-separated string
  githubUrl: z.string().url().optional().or(z.literal('')),
  liveUrl: z.string().url().optional().or(z.literal('')),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validation = projectSchema.safeParse(body);

    if (!validation.success) {
      return new NextResponse("Invalid data", { status: 400 });
    }

    const { title, description, status, technologies, githubUrl, liveUrl } = validation.data;

    // Convert comma-separated string to array of strings
    const techArray = technologies.split(',').map(tech => tech.trim());

    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        status,
        technologies: techArray,
        githubUrl: githubUrl || null,
        liveUrl: liveUrl || null,
        // These fields have defaults or are not required by the form
        imageUrl: null, 
        stars: 0,
        forks: 0,
      },
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error("[PROJECTS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}