import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { adminService } from "./admin.service.js";
import { UserRole } from "@prisma/client";

const getRegisterRequest = catchAsync(async (req: Request, res: Response) => {
  const result = await adminService.getRegisterRequestInDb(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All Registration Request fetched successfully",
    data: result,
  });
});

const approveRequest = catchAsync(async (req: Request, res: Response) => {
  const { requestId } = req.params;
  const { status } = req.body;

  if (typeof requestId !== "string") {
    throw new Error("Registration request ID is required");
  }

  const adminId = (req as Request & { user?: { id: string } }).user?.id;
  console.log("Admin user:", (req as any).user);

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

const createClass = catchAsync(async (req: Request, res: Response) => {
  const result = await adminService.createClassInDb(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "class added successfully",
    data: "",
  });
});

const getAllClass = catchAsync(async (req: Request, res: Response) => {
  const result = await adminService.getAllClassInDb();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All Class Fetched Successfully",
    data: result,
  });
});

const deleteUser = catchAsync(async(req:Request,res:Response)=>{
  const result = await adminService.deleteUserInDb(req.params.id as string )
  sendResponse(res,{
    success:true,
    statusCode: 200,
    message: `${result.name} deleted successfully`,
    data: result,
  })
});

const createAdmissionNotice = catchAsync(async(req,res)=>{
  const notice = await adminService.createAdmissionNoticeInDb(req.body);
  sendResponse(res,{
    statusCode:200,
    success:true,
    message:"Notice Created Successfully",
    data:notice
  });
})

export const adminController = {
  getRegisterRequest,
  approveRequest,
  createClass,
  getAllClass,
  deleteUser,
  createAdmissionNotice,
};
