import { RequestType } from "@prisma/client";

export interface RegisterUserPayload {
    id: string;
    name: string;
    email: string;
    requestType: RequestType;
    classId: string;
    password: string;
    profileImage?: string;
}



export interface ILoginUser {
    email: string;
    password: string;
}