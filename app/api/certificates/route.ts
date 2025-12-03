// app/api/certificates/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/session';

// GET all certificates
export async function GET(request: NextRequest) {
  try {
    const certificates = await prisma.certificate.findMany({
      orderBy: {
        date: 'desc',
      },
    });
    return NextResponse.json(certificates);
  } catch (error) {
    console.error('Failed to fetch certificates:', error);
    return NextResponse.json({ message: 'Failed to fetch certificates' }, { status: 500 });
  }
}

// CREATE a new certificate
export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { 
      title, issuer, date, validUntil, credentialId, image, 
      description, skills, verifyUrl, downloadUrl 
    } = body;

    // Basic validation
    if (!title || !issuer || !date || !credentialId || !description || !skills) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const newCertificate = await prisma.certificate.create({
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

    return NextResponse.json(newCertificate, { status: 201 });
  } catch (error) {
    console.error('Failed to create certificate:', error);
    return NextResponse.json({ message: 'Failed to create certificate' }, { status: 500 });
  }
}
