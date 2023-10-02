-- CreateTable
CREATE TABLE "Mythology" (
    "id" SERIAL NOT NULL,
    "code_name" TEXT NOT NULL,

    CONSTRAINT "Mythology_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Area" (
    "id" SERIAL NOT NULL,
    "code_name" TEXT NOT NULL,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Power" (
    "id" SERIAL NOT NULL,
    "code_name" TEXT NOT NULL,

    CONSTRAINT "Power_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "God" (
    "id" SERIAL NOT NULL,
    "code_name" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "mythologyId" INTEGER NOT NULL,
    "areaId" INTEGER NOT NULL,
    "powerId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "God_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "God" ADD CONSTRAINT "God_mythologyId_fkey" FOREIGN KEY ("mythologyId") REFERENCES "Mythology"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "God" ADD CONSTRAINT "God_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "God" ADD CONSTRAINT "God_powerId_fkey" FOREIGN KEY ("powerId") REFERENCES "Power"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
