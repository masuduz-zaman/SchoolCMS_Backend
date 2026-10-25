import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { authService } from "./auth.service";
const registrationRequest = catchAsync(async (req, res) => {
    const result = await authService.registrationRequestInDb(req.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Request submitted successfully",
        data: result,
    });
});
const loginUser = catchAsync(async (req, res, next) => {
    const payload = req.body;
    const { accessToken, refreshToken } = await authService.loginUserIntoDb(payload);
    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24,
    });
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "User logged in successfully",
        data: {
            accessToken, refreshToken
        },
    });
});
export const authController = {
    registrationRequest,
    loginUser,
};
//# sourceMappingURL=auth.controller.js.map