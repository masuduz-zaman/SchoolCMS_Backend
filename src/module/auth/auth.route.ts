import { Router } from "express";
import { authController } from "./auth.controller.js";

const router = Router();

router.post("/registration", authController.registrationRequest)
router.get("/login", authController.loginUser)



export const authRoute = router