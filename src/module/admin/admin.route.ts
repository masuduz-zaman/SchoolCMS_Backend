import { Router } from "express";
import { adminController } from "./admin.controller.js";
import { auth } from "../../middleware/auth.js";
import { UserRole } from "@prisma/client";
import { upload } from "../../middleware/upload.js";

const router = Router();

router.get("/all-requests", auth("ADMIN"),adminController.getRegisterRequest)
router.patch("/status/:requestId", auth(UserRole.ADMIN), adminController.approveRequest)
router.post("/add-class",auth("ADMIN"),adminController.createClass)
router.get("/all-class", adminController.getAllClass)
router.delete("/delete/:id", auth("ADMIN"), adminController.deleteUser)
router.post("/create-notice",auth("ADMIN"), adminController.createAdmissionNotice)
router.post("/create-content", auth("ADMIN"), adminController.createContent)
router.post("/category", auth("ADMIN"), adminController.createCategory)
router.post("/image", auth("ADMIN"), upload.single("image"), adminController.uploadImage)
router.get("/all-students", auth("ADMIN"), adminController.getAllStudents)
router.get("/all-teachers", auth("ADMIN"), adminController.getAllTeachers)
router.patch("/user-status/:id", auth("ADMIN"), adminController.updateUserStatus)
router.get("/content", adminController.getContent)

export const adminRoute = router