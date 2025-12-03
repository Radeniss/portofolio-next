// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createSession } from '@/lib/session';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { password } = body;

  const adminPassword = process.env.ADMIN_PASSWORD;

  // Basic validation
  if (!adminPassword || adminPassword.length < 8) {
    console.error('ADMIN_PASSWORD is not set or is too short.');
    return NextResponse.json({ message: 'Server configuration error.' }, { status: 500 });
  }

  if (password === adminPassword) {
    // For simplicity, we'll use a static user ID for the admin session
    await createSession('admin-user');
    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  }

  return NextResponse.json({ message: 'Invalid password' }, { status: 401 });
}
