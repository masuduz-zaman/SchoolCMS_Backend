import { Router } from "express";
import { authController } from "./auth.controller.js";

const router = Router();

router.post("/registration", authController.registrationRequest);
router.post("/login", authController.loginUser);
router.post("/logout", authController.logoutUser);

export const authRoute = router;
