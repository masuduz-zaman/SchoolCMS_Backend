/*
  Warnings:

  - Made the column `expiresAt` on table `AdmissionNotice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `publishedAt` on table `AdmissionNotice` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "AdmissionNotice" ALTER COLUMN "expiresAt" SET NOT NULL,
ALTER COLUMN "publishedAt" SET NOT NULL;
