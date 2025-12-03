import prisma from "@/lib/prisma";
import { EditProjectClient } from "./edit-client";

interface EditProjectPageProps {
  params: {
    projectId: string;
  };
}

const EditProjectPage = async ({ params }: EditProjectPageProps) => {
  const project = await prisma.project.findUnique({
    where: {
      id: parseInt(params.projectId),
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
