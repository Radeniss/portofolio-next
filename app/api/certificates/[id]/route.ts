// app/api/certificates/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

interface Params {
  params: {
    id: string;
  };
}

// GET a single certificate
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const id = parseInt(params.id, 10);
    const certificate = await prisma.certificate.findUnique({
      where: { id },
    });

    if (!certificate) {
      return NextResponse.json({ message: 'Certificate not found' }, { status: 404 });
    }

    return NextResponse.json(certificate);
  } catch (error) {
    console.error(`Failed to fetch certificate #${params.id}:`, error);
    return NextResponse.json({ message: 'Failed to fetch certificate' }, { status: 500 });
  }
}

// UPDATE a certificate
export async function PUT(request: NextRequest, { params }: Params) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const id = parseInt(params.id, 10);
    const body = await request.json();
    const { 
      title, issuer, date, validUntil, credentialId, image, 
      description, skills, verifyUrl, downloadUrl 
    } = body;

    // Basic validation
    if (!title || !issuer || !date || !credentialId || !description || !skills) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const updatedCertificate = await prisma.certificate.update({
      where: { id },
      data: {
        title,
        issuer,
        date: new Date(date),
        validUntil,
        credentialId,
        image,
        description,
        skills,
        verifyUrl,
        downloadUrl,
      },
    });

    return NextResponse.json(updatedCertificate);
  } catch (error) {
    console.error(`Failed to update certificate #${params.id}:`, error);
    return NextResponse.json({ message: 'Failed to update certificate' }, { status: 500 });
  }
}

// DELETE a certificate
export async function DELETE(request: NextRequest, { params }: Params) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const id = parseInt(params.id, 10);
    await prisma.certificate.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 }); // No Content
  } catch (error) {
    console.error(`Failed to delete certificate #${params.id}:`, error);
    return NextResponse.json({ message: 'Failed to delete certificate' }, { status: 500 });
  }
}
