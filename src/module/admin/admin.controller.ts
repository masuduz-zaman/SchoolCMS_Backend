import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { adminService } from "./admin.service";
import { UserRole } from "@prisma/client";

const approveRequest = catchAsync(
  async (req: Request, res: Response) => {
    const { requestId } = req.params;
    const { status } = req.body;

    if (typeof requestId !== "string") {
      throw new Error("Registration request ID is required");
    }

    const adminId = (
      req as Request & { user?: { id: string } }
    ).user?.id;
    console.log("Admin user:", (req as any).user);

    if (!adminId) {
      throw new Error("Admin authentication required");
    }

    const result = await adminService.approveRequest(
      requestId,
      adminId,
      status,
    );

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: `Registration request ${status.toLowerCase()} successfully`,
      data: result,
    });
  },
);

const createClass = catchAsync(
  async(req:Request, res:Response)=>{

    
    const result = await adminService.createClassInDb(req.body);
    

    sendResponse(res,{
      success:true,
      statusCode:200,
      message:"class added successfully",
      data:""
    })
  }
)



export const adminController = {
    approveRequest,
    createClass,
}