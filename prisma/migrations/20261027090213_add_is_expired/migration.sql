-- DropIndex
DROP INDEX "AdmissionNotice_isPublished_createdAt_idx";

-- AlterTable
ALTER TABLE "AdmissionNotice" ADD COLUMN     "expiresAt" TIMESTAMP(3),
ADD COLUMN     "isExpired" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "publishedAt" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "AdmissionNotice_isPublished_isExpired_createdAt_idx" ON "AdmissionNotice"("isPublished", "isExpired", "createdAt");
