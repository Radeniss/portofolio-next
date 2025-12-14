import { NextResponse } from "next/server";
import * as z from "zod";
import { prisma } from "@/lib/prisma";

const portfolioSchema = z.object({
  title: z.string().min(2),
  author: z.string().min(2),
  date: z.string(),
  icon: z.string().min(1),
  images: z.string(),
  desc: z.string(),
});

export async function PATCH(
  req: Request,
  { params }: { params: { portfolioId: string } }
) {
  try {
    const body = await req.json();
    const validation = portfolioSchema.safeParse(body);

    if (!validation.success) {
      return new NextResponse("Invalid data", { status: 400 });
    }

    const { title, author, date, icon, images, desc } = validation.data;
    const imagesArray = images.split(',').map(item => item.trim());
    const descArray = desc.split(';').map(item => item.trim());

    const updatedItem = await prisma.portfolioItem.update({
      where: {
        id: parseInt(params.portfolioId),
      },
      data: {
        title,
        author,
        date: new Date(date),
        icon,
        images: imagesArray,
        desc: descArray,
      },
    });

    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error("[PORTFOLIO_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { portfolioId: string } }
) {
  try {
    if (!params.portfolioId) {
      return new NextResponse("Portfolio ID is required", { status: 400 });
    }

    const item = await prisma.portfolioItem.delete({
      where: {
        id: parseInt(params.portfolioId),
      },
    });

    return NextResponse.json(item);
  } catch (error) {
    console.error("[PORTFOLIO_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
