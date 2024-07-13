/*
  Warnings:

  - You are about to drop the column `coverId` on the `Product` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Product_coverId_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "coverId";
