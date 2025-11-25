import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { portfolioItems } from '../lib/portfolioData';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log(`Start seeding ...`);

  for (const item of portfolioItems) {
    const portfolioItem = await prisma.portfolioItem.upsert({
      where: { id: item.id || -1 }, // Use a non-existent ID for creation
      update: {}, // No updates needed if it exists
      create: {
        id: item.id,
        title: item.title,
        author: item.author,
        date: new Date(item.date),
        icon: item.icon,
        images: {
          set: item.images,
        },
        desc: {
          set: item.desc,
        },
      },
    });
    console.log(`Upserted portfolio item with id: ${portfolioItem.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });