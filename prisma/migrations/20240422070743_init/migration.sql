-- CreateEnum
CREATE TYPE "Talle" AS ENUM ('SMALL', 'MEDIUM', 'LARGE', 'EXTRA_LARGE');

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" VARCHAR(250) NOT NULL,
    "activa" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "id_categoria" TEXT NOT NULL,
    "precio" DECIMAL(65,30) NOT NULL,
    "talle" "Talle" NOT NULL DEFAULT 'SMALL',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_codigo_key" ON "Product"("codigo");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
