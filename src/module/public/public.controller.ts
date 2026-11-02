import { catchAsync } from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { publicService } from "./public.service.js";

const getProfile = catchAsync(async(req, res)=>{
    const profile = await publicService.getProfileInDb(req.user?.id as string);
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"profile fetch successfully",
        data:profile
    })
})

const updateProfile = catchAsync(async(req,res)=>{
    const userId = req.user?.id as string;
    const payload = req.body;
    const updatedProfile = await publicService.updateProfileIntoDb(userId, payload);
    
    sendResponse(res,{
        success:true,
        statusCode: 200,
        message: "Profile updated successfully",
        data: updatedProfile
    })
});

const getNotice = catchAsync(async(req,res)=>{
    const result = await publicService.getNoticeInDb();
    
    sendResponse(res,{
        success:true,
        statusCode: 200,
        message: "Notice fetch successfully",
        data: result
    })
})

const getCategory = catchAsync(async(req,res)=>{
    const result = await publicService.getCategoryInDb(req.body);

    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"Category fetch successfully",
        data:result
    })
})

export const publicController = {
    getProfile,
    updateProfile,
    getNotice,
    getCategory
}