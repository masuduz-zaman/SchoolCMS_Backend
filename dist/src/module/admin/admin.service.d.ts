import { RequestStatus } from "@prisma/client";
declare const getRegisterRequestInDb: (requestId: string) => Promise<{
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
}[]>;
declare const approveRequest: (requestId: string, adminId: string, status: RequestStatus) => Promise<{
    message: string;
    status: import(".prisma/client").$Enums.RequestStatus;
}>;
declare const createClassInDb: (payload: {
    name: string;
    description?: string;
}) => Promise<{
    id: string;
    name: string;
    description: string | null;
    classTeacherId: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const getAllClassInDb: (classId: string) => Promise<{
    id: string;
    name: string;
    description: string | null;
    classTeacherId: string | null;
    createdAt: Date;
    updatedAt: Date;
}[]>;
declare const getStudentByClassInDb: (classId: string, studentId: string) => Promise<{
    id: string;
    name: string;
    description: string | null;
    classTeacherId: string | null;
    createdAt: Date;
    updatedAt: Date;
}[]>;
export declare const adminService: {
    getRegisterRequestInDb: typeof getRegisterRequestInDb;
    approveRequest: typeof approveRequest;
    createClassInDb: typeof createClassInDb;
    getAllClassInDb: typeof getAllClassInDb;
    getStudentByClassInDb: typeof getStudentByClassInDb;
};
export {};
//# sourceMappingURL=admin.service.d.ts.map