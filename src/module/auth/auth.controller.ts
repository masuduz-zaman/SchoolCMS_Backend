import { catchAsync } from "../../utils/catchAsync.js";
import { Request, Response, NextFunction } from "express";
import { sendResponse } from "../../utils/sendResponse.js";
import { authService } from "./auth.service.js";

const registrationRequest = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.registrationRequestInDb(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Request submitted successfully",
    data: result,
  });
});

const loginUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;
    const { accessToken, refreshToken } =
      await authService.loginUserIntoDb(payload);

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 1000 * 60 * 60 * 24,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "User logged in successfully",
      data: {
        accessToken,
        refreshToken,
      },
    });
  },
);

export const logoutUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {

    res.clearCookie("accessToken", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    });

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    });

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "User logged out successfully",
      data: null,
    });
  },
);

export const authController = {
  registrationRequest,
  loginUser,
  logoutUser,
};
