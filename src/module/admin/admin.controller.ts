import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { adminService } from "./admin.service.js";
import { UserRole } from "@prisma/client";

const getRegisterRequest = catchAsync(async (req: Request, res: Response) => {
  const result = await adminService.getRegisterRequestInDb(req.query.requestId as string);
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
  const adminId = req.user?.id
  const notice = await adminService.createAdmissionNoticeInDb(req.body, adminId as string);
  sendResponse(res,{
    statusCode:200,
    success:true,
    message:"Notice Created Successfully",
    data:notice
  });
})

const createContent = catchAsync(async(req,res)=>{
  const result = await adminService.createContentInDb(req.body)

  sendResponse(res,{
    success:true,
    statusCode:200,
    message:"content create successfully",
    data: result
  })
})

const getContent = catchAsync(async(req,res)=>{
  const result = await adminService.getContentInDb()

  sendResponse(res,{
    success:true,
    statusCode:200,
    message:"Content fetched successfully",
    data: result
  })
})

const deleteContent = catchAsync(async(req,res)=>{
  const result = await adminService.deleteContentInDb(req.params.id as string)

  sendResponse(res,{
    success:true,
    statusCode:200,
    message:"Content deleted successfully",
    data: result
  })
})

const createCategory = catchAsync(async(req,res)=>{
  const result = await adminService.createCategoryInDb(req.body)

  sendResponse(res,{
    success:true,
    statusCode:200,
    message:"Category create successfully",
    data: result
  })
})

const uploadImage = catchAsync(async (req, res) => {
  const result = await adminService.uploadImageInDb(
    req.file!,
    req.body
  );

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Gallery image uploaded successfully",
    data: result,
  });
});
const getAllCategories = catchAsync(async (req: Request, res: Response) => {
  const result = await adminService.getAllCategoriesInDb();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All Categories Fetched Successfully",
    data: result,
  });
});

const deleteImage = catchAsync(async (req: Request, res: Response) => {
  const result = await adminService.deleteImageInDb(req.params.id as string);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Image deleted successfully",
    data: result,
  });
});

const deleteCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await adminService.deleteCategoryInDb(req.params.id as string);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Category deleted successfully",
    data: result,
  });
});

const getAllStudents = catchAsync(async (req: Request, res: Response) => {
  const result = await adminService.getAllStudentsInDb();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All Students Fetched Successfully",
    data: result,
  });
});

const getAllTeachers = catchAsync(async (req: Request, res: Response) => {
  const result = await adminService.getAllTeachersInDb();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All Teachers Fetched Successfully",
    data: result,
  });
});

const updateUserStatus = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  const result = await adminService.updateUserStatusInDb(id as string, status);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "User status updated successfully",
    data: result,
  });
});

export const adminController = {
  getRegisterRequest,
  approveRequest,
  createClass,
  getAllClass,
  deleteUser,
  createAdmissionNotice,
  createContent,
  deleteContent,
  createCategory,
  uploadImage,
  getAllStudents,
  getAllTeachers,
  updateUserStatus,
  getContent,
  deleteImage,
  deleteCategory,
  getAllCategories,
};
