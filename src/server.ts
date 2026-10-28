import app from "./app.js";
import config from "./config";
import { initNoticeScheduler } from "./cron/noticeScheduler";
import { prisma } from "./lib/prisma.js";

const PORT = config.port || 5000;

async function main() {
  try {
    await prisma.$connect();
    console.log("Connected to the database successfully.");
    initNoticeScheduler();
    console.log("Background Notice Scheduler initialized successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error starting the server:", error);
    process.exit(1);
  }
}

main();
