import { Router } from "express";
import { adminController } from "./admin.controller";
import { auth } from "../../middleware/auth";
import { UserRole } from "@prisma/client";
const router = Router();
router.patch("/status/:requestId", auth(UserRole.ADMIN), adminController.approveRequest);
router.post("/add-class", auth("ADMIN"), adminController.createClass);
export const adminRoute = router;
//# sourceMappingURL=admin.route.js.map