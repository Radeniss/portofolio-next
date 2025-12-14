import { prisma } from "@/lib/prisma";
import { EditPortfolioClient } from "./edit-client";

interface EditPortfolioPageProps {
  params: {
    id: string;
  };
}

const EditPortfolioPage = async ({ params }: EditPortfolioPageProps) => {
  const item = await prisma.portfolioItem.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <EditPortfolioClient item={item} />
    </div>
  );
};

export default EditPortfolioPage;
