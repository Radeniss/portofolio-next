import { prisma } from "@/lib/prisma";
import { Portfolio, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getPortfolioItems(): Promise<Portfolio[]> {
  const items = await prisma.portfolioItem.findMany();
  
  return items.map(item => ({
    id: item.id,
    title: item.title,
    author: item.author,
    date: new Date(item.date).toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }),
  }));
}

export default async function AdminPortfolioPage() {
  const data = await getPortfolioItems();

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Portfolio Items</h1>
        <Link href="/admin/portfolio/new">
          <Button>Add New Item</Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
