import { Router } from "express";
import { publicController } from "./public.controller.js";
import { auth } from "../../middleware/auth.js";

const router = Router()

router.get("/me",auth("ADMIN","STUDENT","TEACHER"), publicController.getProfile)
router.put("/profile", auth("ADMIN","STUDENT","TEACHER"), publicController.updateProfile)
router.get("/notice", publicController.getNotice)
router.get("/gallery-albums", publicController.getGalleryAlbums)

export const publicRoute = router