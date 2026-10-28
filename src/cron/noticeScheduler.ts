// src/app/cron/noticeScheduler.ts
import cron from 'node-cron';
import { prisma } from '../lib/prisma';


export const initNoticeScheduler = () => {
  cron.schedule('0 * * * *', async () => {
    const now = new Date();

    try {
      console.log('--- Running Notice Scheduler Task ---');

      await prisma.admissionNotice.updateMany({
        where: {
          isPublished: false,
          publishedAt: { lte: now }
        },
        data: {
          isPublished: true
        }
      });

      await prisma.admissionNotice.deleteMany({
        where: {
          expiresAt: { lte: now }
        }
      });

    } catch (error) {
      console.error('Error running notice scheduler:', error);
    }
  });
};
