import { Router } from "express";
import { adminController } from "./admin.controller";
import { auth } from "../../middleware/auth";
import { UserRole } from "@prisma/client";

const router = Router();

router.get("/all-requests", auth("ADMIN"),adminController.getRegisterRequest)
router.patch("/status/:requestId", auth(UserRole.ADMIN), adminController.approveRequest)
router.post("/add-class",auth("ADMIN"),adminController.createClass)
router.get("/all-class", adminController.getAllClass)


export const adminRoute = router