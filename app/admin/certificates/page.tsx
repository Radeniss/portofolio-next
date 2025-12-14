import { prisma } from "@/lib/prisma";
import { Certificate, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getCertificates(): Promise<Certificate[]> {
  const certificates = await prisma.certificate.findMany();
  
  return certificates.map(cert => ({
    id: cert.id,
    title: cert.title,
    issuer: cert.issuer,
    date: new Date(cert.date).toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }),
  }));
}

export default async function AdminCertificatesPage() {
  const data = await getCertificates();

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Certificates</h1>
        <Link href="/admin/certificates/new">
          <Button>Add New Certificate</Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
