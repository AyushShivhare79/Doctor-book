/*
  Warnings:

  - Added the required column `address` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `experience` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fees` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "experience" INTEGER NOT NULL,
ADD COLUMN     "fees" INTEGER NOT NULL;
