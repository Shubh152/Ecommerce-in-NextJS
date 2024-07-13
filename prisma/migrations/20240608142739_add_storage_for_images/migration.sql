/*
  Warnings:

  - You are about to drop the `Cover` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[cover]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cover` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cover" DROP CONSTRAINT "Cover_productId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_productId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "cover" TEXT NOT NULL,
ADD COLUMN     "images" TEXT[];

-- DropTable
DROP TABLE "Cover";

-- DropTable
DROP TABLE "Image";

-- CreateIndex
CREATE UNIQUE INDEX "Product_cover_key" ON "Product"("cover");
