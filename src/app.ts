import express, { Application, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import config from './config';
import { authRoute } from './module/auth/auth.route';
import { notFound } from './middleware/notFound';
import { globalErrorHandler } from './middleware/globalError';
import { adminRoute } from './module/admin/admin.route';

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