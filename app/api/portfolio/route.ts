import { NextResponse } from "next/server";
import * as z from "zod";
import { prisma } from "@/lib/prisma";

const portfolioSchema = z.object({
  title: z.string().min(2),
  author: z.string().min(2),
  date: z.string(),
  icon: z.string().min(1),
  images: z.string(), // Comma-separated
  desc: z.string(),   // Semicolon-separated for descriptions
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validation = portfolioSchema.safeParse(body);

    if (!validation.success) {
      console.error("Zod validation failed:", validation.error);
      return new NextResponse("Invalid data", { status: 400 });
    }

    const { title, author, date, icon, images, desc } = validation.data;

    const imagesArray = images.split(',').map(item => item.trim());
    const descArray = desc.split(';').map(item => item.trim()); // Using semicolon for separation

    const newPortfolioItem = await prisma.portfolioItem.create({
      data: {
        title,
        author,
        date: new Date(date),
        icon,
        images: imagesArray,
        desc: descArray,
      },
    });

    return NextResponse.json(newPortfolioItem, { status: 201 });
  } catch (error) {
    console.error("[PORTFOLIO_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}