/*
  Warnings:

  - You are about to drop the column `category` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `experience` on the `Admin` table. All the data in the column will be lost.
  - Added the required column `emailId` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "category",
DROP COLUMN "experience",
ADD COLUMN     "emailId" TEXT NOT NULL,
ADD COLUMN     "middleName" TEXT;
