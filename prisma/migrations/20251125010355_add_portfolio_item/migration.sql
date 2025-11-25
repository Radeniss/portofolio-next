-- CreateTable
CREATE TABLE "PortfolioItem" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "icon" TEXT NOT NULL,
    "images" TEXT[],
    "desc" TEXT[],

    CONSTRAINT "PortfolioItem_pkey" PRIMARY KEY ("id")
);
