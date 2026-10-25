export declare const UserRole: {
    readonly ADMIN: 'ADMIN';
    readonly STUDENT: 'STUDENT';
    readonly TEACHER: 'TEACHER';
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const UserStatus: {
    readonly ACTIVE: 'ACTIVE';
    readonly SUSPENDED: 'SUSPENDED';
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const RequestType: {
    readonly STUDENT: 'STUDENT';
    readonly TEACHER: 'TEACHER';
};
export type RequestType = (typeof RequestType)[keyof typeof RequestType];
export declare const RequestStatus: {
    readonly PENDING: 'PENDING';
    readonly APPROVED: 'APPROVED';
    readonly REJECTED: 'REJECTED';
    readonly CANCELLED: 'CANCELLED';
    readonly BLOCKED: 'BLOCKED';
};
export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus];
export declare const WeekDay: {
    readonly SATURDAY: 'SATURDAY';
    readonly SUNDAY: 'SUNDAY';
    readonly MONDAY: 'MONDAY';
    readonly TUESDAY: 'TUESDAY';
    readonly WEDNESDAY: 'WEDNESDAY';
    readonly THURSDAY: 'THURSDAY';
    readonly FRIDAY: 'FRIDAY';
};
export type WeekDay = (typeof WeekDay)[keyof typeof WeekDay];
//# sourceMappingURL=enums.d.ts.map