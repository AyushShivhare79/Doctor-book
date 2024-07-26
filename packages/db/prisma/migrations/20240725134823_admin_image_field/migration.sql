/*
  Warnings:

  - You are about to drop the `image` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "image" TEXT;

-- DropTable
DROP TABLE "image";
