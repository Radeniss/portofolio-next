import { prisma } from "@/lib/prisma";
import { EditCertificateClient } from "./edit-client";

interface EditCertificatePageProps {
  params: {
    id: string;
  };
}

const EditCertificatePage = async ({ params }: EditCertificatePageProps) => {
  const certificate = await prisma.certificate.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!certificate) {
    return <div>Certificate not found</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <EditCertificateClient certificate={certificate} />
    </div>
  );
};

export default EditCertificatePage;
