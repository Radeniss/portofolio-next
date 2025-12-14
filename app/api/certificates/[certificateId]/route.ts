import { NextResponse } from "next/server";
import * as z from "zod";
import { prisma } from "@/lib/prisma";

// Schema for PATCH validation
const certificateSchema = z.object({
  title: z.string().min(2),
  issuer: z.string().min(2),
  date: z.string(),
  description: z.string().min(10),
  skills: z.string(),
  credentialId: z.string().optional(),
  verifyUrl: z.string().url().optional().or(z.literal('')),
});

export async function PATCH(
  req: Request,
  { params }: { params: { certificateId: string } }
) {
  try {
    const body = await req.json();
    const validation = certificateSchema.safeParse(body);

    if (!validation.success) {
      return new NextResponse("Invalid data", { status: 400 });
    }

    const { title, issuer, date, description, skills, credentialId, verifyUrl } = validation.data;
    const skillsArray = skills.split(',').map(skill => skill.trim());

    const updatedCertificate = await prisma.certificate.update({
      where: {
        id: parseInt(params.certificateId),
      },
      data: {
        title,
        issuer,
        date: new Date(date),
        description,
        skills: skillsArray,
        credentialId: credentialId || "",
        verifyUrl: verifyUrl || null,
      },
    });

    return NextResponse.json(updatedCertificate);
  } catch (error) {
    console.error("[CERTIFICATE_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { certificateId: string } }
) {
  try {
    if (!params.certificateId) {
      return new NextResponse("Certificate ID is required", { status: 400 });
    }

    const certificate = await prisma.certificate.delete({
      where: {
        id: parseInt(params.certificateId),
      },
    });

    return NextResponse.json(certificate);
  } catch (error) {
    console.error("[CERTIFICATE_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
