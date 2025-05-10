/*
  Warnings:

  - You are about to drop the column `userId` on the `Agenda` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Agenda" DROP CONSTRAINT "Agenda_userId_fkey";

-- AlterTable
ALTER TABLE "Agenda" DROP COLUMN "userId";
