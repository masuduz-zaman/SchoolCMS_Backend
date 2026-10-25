/*
  Warnings:

  - You are about to drop the column `passwordHash` on the `RegistrationRequest` table. All the data in the column will be lost.
  - Added the required column `password` to the `RegistrationRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RegistrationRequest" DROP COLUMN "passwordHash",
ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'STUDENT';
