import { ILoginUser, RegisterUserPayload } from "./auth.interface";
declare const registrationRequestInDb: (payload: RegisterUserPayload) => Promise<{
    id: string;
    name: string;
    email: string;
    phone: string | null;
    password: string;
    classRoll: string | null;
    requestType: import(".prisma/client").$Enums.RequestType;
    status: import(".prisma/client").$Enums.RequestStatus;
    classId: string | null;
    parentPhone: string | null;
    reviewNote: string | null;
    reviewedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const loginUserIntoDb: (payload: ILoginUser) => Promise<{
    accessToken: string;
    refreshToken: string;
}>;
export declare const authService: {
    registrationRequestInDb: typeof registrationRequestInDb;
    loginUserIntoDb: typeof loginUserIntoDb;
};
export {};
//# sourceMappingURL=auth.service.d.ts.map