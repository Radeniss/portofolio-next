import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const totalProjects = await prisma.project.count();
    const totalCertificates = await prisma.certificate.count();
    const recentProjects = await prisma.project.findMany({
      take: 3,
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      totalProjects,
      totalCertificates,
      recentProjects,
    });
  } catch (error) {
    console.error("[ADMIN_STATS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
