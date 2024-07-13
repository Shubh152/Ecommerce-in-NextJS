/*
  Warnings:

  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `new_arrival` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subcategory` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `top_selling` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "brand" TEXT,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "new_arrival" BOOLEAN NOT NULL,
ADD COLUMN     "subcategory" TEXT NOT NULL,
ADD COLUMN     "top_selling" BOOLEAN NOT NULL;
