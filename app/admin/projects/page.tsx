import { prisma } from "@/lib/prisma";
import { Project, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getProjects(): Promise<Project[]> {
  const projects = await prisma.project.findMany();
  // The 'data-table' columns expect a specific 'Project' type.
  // We need to format the data to match, especially the date.
  return projects.map(p => ({
    id: p.id,
    title: p.title,
    status: p.status,
    createdAt: p.createdAt.toISOString(), // Convert Date to string
  }));
}

export default async function AdminProjectsPage() {
  const data = await getProjects();

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Projects</h1>
        <Link href="/admin/projects/new">
          <Button>Add New Project</Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}