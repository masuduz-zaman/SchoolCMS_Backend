import express from "express";
import type { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import config from "./config/index.js";
import { authRoute } from "./module/auth/auth.route.js";
import { notFound } from "./middleware/notFound.js";
import { globalErrorHandler } from "./middleware/globalError.js";
import { adminRoute } from "./module/admin/admin.route.js";

const app: Application = express();

app.use(cors({
    origin: config.app_url,
    credentials: true,
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/api/auth", authRoute)
app.use("/api/admin", adminRoute)

app.use(notFound)
app.use(globalErrorHandler)

export default app;