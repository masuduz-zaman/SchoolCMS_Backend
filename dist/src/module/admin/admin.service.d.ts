import { RequestStatus } from "@prisma/client";
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
export declare const adminService: {
    approveRequest: typeof approveRequest;
    createClassInDb: typeof createClassInDb;
};
export {};
//# sourceMappingURL=admin.service.d.ts.map