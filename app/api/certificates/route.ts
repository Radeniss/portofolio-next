import { NextResponse } from "next/server";
import * as z from "zod";
import { prisma } from "@/lib/prisma";

const certificateSchema = z.object({
  title: z.string().min(2),
  issuer: z.string().min(2),
  date: z.string(), // Will be a string from the form, converted to Date
  description: z.string().min(10),
  skills: z.string(), // Comma-separated
  credentialId: z.string().optional(),
  verifyUrl: z.string().url().optional().or(z.literal('')),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validation = certificateSchema.safeParse(body);

    if (!validation.success) {
      console.error("Zod validation failed:", validation.error);
      return new NextResponse("Invalid data", { status: 400 });
    }

    const { title, issuer, date, description, skills, credentialId, verifyUrl } = validation.data;

    const skillsArray = skills.split(',').map(skill => skill.trim());

    const newCertificate = await prisma.certificate.create({
      data: {
        title,
        issuer,
        date: new Date(date),
        description,
        skills: skillsArray,
        credentialId: credentialId || "",
        verifyUrl: verifyUrl || null,
        // Default/nullable fields
        validUntil: null, 
        image: null,
        downloadUrl: null,
      },
    });

    return NextResponse.json(newCertificate, { status: 201 });
  } catch (error) {
    console.error("[CERTIFICATES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}