import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import config from "../../config";
import { RequestType } from "@prisma/client";
import { jwtUtils } from "../../utils/jwtUtils";
// const registeredUserIntoDb = async (payload: RegisterUserPayload) => {
//   const { name, email, password, profileImage } = payload;
//   const isUserAlreadyExist = await prisma.user.findUnique({
//     where:{
//       email,
//     }
//   })
//   if (isUserAlreadyExist) {
//     throw new Error("User already exist with this email");
//   }
//   const hashedPassword = await bcrypt.hash(
//     password,
//     Number(config.salt_rounds),
//   );
//   const createUser = await prisma.user.create({
//     data: {
//       name,
//       email,
//       password: hashedPassword,
//       profile:{
//         create:{
//           profilePhoto:profileImage,
//         },
//       },
//     },
//   });
//   const user = await prisma.user.findUnique({
//     where: {
//       id: createUser.id,
//       email: createUser.email,
//     },
//     omit: {
//       password: true,
//     },
//     include: {
//       profile:true
//     },
//   });
//   return user;
// };
const registrationRequestInDb = async (payload) => {
    const { name, email, password, classId } = payload;
    const isUserExist = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (isUserExist) {
        throw new Error("User already exist with this email");
    }
    const pendingRequest = await prisma.registrationRequest.findFirst({
        where: {
            email,
            status: "PENDING",
        },
    });
    if (pendingRequest) {
        throw new Error("Your registration request is pending");
    }
    const hashedPassword = await bcrypt.hash(password, Number(config.salt_rounds));
    const request = await prisma.registrationRequest.create({
        data: {
            name,
            email,
            password: hashedPassword,
            classId,
            requestType: RequestType.STUDENT || RequestType.TEACHER,
        },
    });
    return request;
};
const loginUserIntoDb = async (payload) => {
    const { email, password } = payload;
    const user = await prisma.user.findUniqueOrThrow({
        where: {
            email,
        },
    });
    if (user.status === "SUSPENDED") {
        throw new Error("Your account has been suspended. Please contact support for assistance.");
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
        throw new Error("Password does not match");
    }
    const jwtPayload = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
    };
    const accessToken = jwtUtils.createToken(jwtPayload, config.jwt_access_secret, config.jwt_access_expiration);
    const refreshToken = jwtUtils.createToken(jwtPayload, config.jwt_refresh_secret, config.jwt_refresh_expiration);
    return {
        accessToken,
        refreshToken,
    };
};
export const authService = {
    // registeredUserIntoDb,
    registrationRequestInDb,
    loginUserIntoDb,
};
//# sourceMappingURL=auth.service.js.map