import { prisma } from "@/lib/prisma";
import { EditProjectClient } from "./edit-client";

interface EditProjectPageProps {
  params: {
    id: string;
  };
}

const EditProjectPage = async ({ params }: EditProjectPageProps) => {
  const project = await prisma.project.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <EditProjectClient project={project} />
    </div>
  );
};

export default EditProjectPage;
