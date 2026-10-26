import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { adminService } from "./admin.service";
const getRegisterRequest = catchAsync(async (req, res) => {
    const result = await adminService.getRegisterRequestInDb(req.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "All Registration Request fetched successfully",
        data: result,
    });
});
const approveRequest = catchAsync(async (req, res) => {
    const { requestId } = req.params;
    const { status } = req.body;
    if (typeof requestId !== "string") {
        throw new Error("Registration request ID is required");
    }
    const adminId = req.user?.id;
    console.log("Admin user:", req.user);
    if (!adminId) {
        throw new Error("Admin authentication required");
    }
    const result = await adminService.approveRequest(requestId, adminId, status);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: `Registration request ${status.toLowerCase()} successfully`,
        data: result,
    });
});
const createClass = catchAsync(async (req, res) => {
    const result = await adminService.createClassInDb(req.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "class added successfully",
        data: "",
    });
});
const getAllClass = catchAsync(async (req, res) => {
    const result = await adminService.getAllClassInDb(req.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "All Class Fetched Successfully",
        data: result,
    });
});
export const adminController = {
    getRegisterRequest,
    approveRequest,
    createClass,
    getAllClass,
};
//# sourceMappingURL=admin.controller.js.map