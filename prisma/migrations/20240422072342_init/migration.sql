-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_id_categoria_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "id_categoria" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
