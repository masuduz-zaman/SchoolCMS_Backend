import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly AdmissionNotice: 'AdmissionNotice';
    readonly Class: 'Class';
    readonly ClassRoutine: 'ClassRoutine';
    readonly TeacherClass: 'TeacherClass';
    readonly RegistrationRequest: 'RegistrationRequest';
    readonly SchoolContent: 'SchoolContent';
    readonly Student: 'Student';
    readonly Subject: 'Subject';
    readonly Teacher: 'Teacher';
    readonly User: 'User';
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: 'ReadUncommitted';
    readonly ReadCommitted: 'ReadCommitted';
    readonly RepeatableRead: 'RepeatableRead';
    readonly Serializable: 'Serializable';
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AdmissionNoticeScalarFieldEnum: {
    readonly id: 'id';
    readonly title: 'title';
    readonly content: 'content';
    readonly isPublished: 'isPublished';
    readonly createdById: 'createdById';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type AdmissionNoticeScalarFieldEnum = (typeof AdmissionNoticeScalarFieldEnum)[keyof typeof AdmissionNoticeScalarFieldEnum];
export declare const ClassScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly description: 'description';
    readonly classTeacherId: 'classTeacherId';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum];
export declare const ClassRoutineScalarFieldEnum: {
    readonly id: 'id';
    readonly classId: 'classId';
    readonly subjectId: 'subjectId';
    readonly teacherId: 'teacherId';
    readonly day: 'day';
    readonly startTime: 'startTime';
    readonly endTime: 'endTime';
    readonly room: 'room';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type ClassRoutineScalarFieldEnum = (typeof ClassRoutineScalarFieldEnum)[keyof typeof ClassRoutineScalarFieldEnum];
export declare const TeacherClassScalarFieldEnum: {
    readonly id: 'id';
    readonly teacherId: 'teacherId';
    readonly classId: 'classId';
    readonly createdAt: 'createdAt';
};
export type TeacherClassScalarFieldEnum = (typeof TeacherClassScalarFieldEnum)[keyof typeof TeacherClassScalarFieldEnum];
export declare const RegistrationRequestScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly email: 'email';
    readonly phone: 'phone';
    readonly passwordHash: 'passwordHash';
    readonly requestType: 'requestType';
    readonly status: 'status';
    readonly classId: 'classId';
    readonly parentPhone: 'parentPhone';
    readonly reviewNote: 'reviewNote';
    readonly reviewedAt: 'reviewedAt';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type RegistrationRequestScalarFieldEnum = (typeof RegistrationRequestScalarFieldEnum)[keyof typeof RegistrationRequestScalarFieldEnum];
export declare const SchoolContentScalarFieldEnum: {
    readonly id: 'id';
    readonly headTeacherMessage: 'headTeacherMessage';
    readonly updatedById: 'updatedById';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type SchoolContentScalarFieldEnum = (typeof SchoolContentScalarFieldEnum)[keyof typeof SchoolContentScalarFieldEnum];
export declare const StudentScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly classId: 'classId';
    readonly parentPhone: 'parentPhone';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum];
export declare const SubjectScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly classId: 'classId';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum];
export declare const TeacherScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly email: 'email';
    readonly phone: 'phone';
    readonly passwordHash: 'passwordHash';
    readonly role: 'role';
    readonly status: 'status';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: 'asc';
    readonly desc: 'desc';
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: 'default';
    readonly insensitive: 'insensitive';
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: 'first';
    readonly last: 'last';
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map