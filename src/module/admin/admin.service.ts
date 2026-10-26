import { Prisma, RequestStatus, RequestType, UserRole } from "@prisma/client";
import { prisma } from "../../lib/prisma";

const getRegisterRequestInDb = async (requestId: string) => {
  const requests = await prisma.$transaction(async (tx) => {
    const allRequests = await prisma.registrationRequest.findMany({
      where: {
        id: requestId,
      },
      orderBy:{
        createdAt:"desc"
      }
    });
    return allRequests
  });
  return requests
};
const approveRequest = async (
  requestId: string,
  adminId: string,
  status: RequestStatus,
) => {
  return prisma.$transaction(async (tx) => {
    const admin = await tx.user.findUnique({
      where: { id: adminId },
      select: { role: true },
    });

    if (!admin || admin.role !== UserRole.ADMIN) {
      throw new Error("Only admin can process requests");
    }

    const allowedStatuses: RequestStatus[] = [
      RequestStatus.APPROVED,
      RequestStatus.REJECTED,
      RequestStatus.CANCELLED,
      RequestStatus.BLOCKED,
    ];

    if (!allowedStatuses.includes(status)) {
      throw new Error("Invalid request status");
    }

    const request = await tx.registrationRequest.findUnique({
      where: { id: requestId },
    });

    if (!request) {
      throw new Error("Registration request not found");
    }

    if (request.status !== RequestStatus.PENDING) {
      throw new Error("Request already processed");
    }

    if (status === RequestStatus.APPROVED) {
      const existingUser = await tx.user.findUnique({
        where: { email: request.email },
      });

      if (existingUser) {
        throw new Error("User already exists with this email");
      }

      const user = await tx.user.create({
        data: {
          name: request.name,
          email: request.email,
          phone: request.phone,
          password: request.password,
          role:
            request.requestType === RequestType.STUDENT
              ? UserRole.STUDENT
              : UserRole.TEACHER,
        },
      });

      if (request.requestType === RequestType.STUDENT) {
        // if (!request.parentPhone) {
        //   throw new Error("Parent phone is required for student");
        // }

        await tx.student.create({
          data: {
            userId: user.id,
            parentPhone: request.parentPhone,
            classId: request.classId,
          },
        });
      } else if (request.requestType === RequestType.TEACHER) {
        await tx.teacher.create({
          data: {
            userId: user.id,
          },
        });
      } else {
        throw new Error("Invalid registration request type");
      }
    }

    await tx.registrationRequest.delete({
      where: { id: requestId },
    });

    return {
      message:
        status === RequestStatus.APPROVED
          ? "Request approved successfully"
          : `Request ${status.toLowerCase()} successfully`,
      status,
    };
  });
};

const createClassInDb = async (payload: {
  name: string;
  description?: string;
}) => {
  const existingClass = await prisma.class.findUniqueOrThrow({
    where: {
      name: payload.name,
    },
  });
  if (existingClass) {
    throw new Error("Already have a same class");
  }
  const result = prisma.class.create({
    data: {
      name: payload.name,
      description: payload.description,
    },
  });
  return result;
};

const getAllClassInDb = async (classId:string)=>{
  const result = await prisma.$transaction(async(tx)=>{
    const allClass = await prisma.class.findMany({
      where:{
        id:classId,
      },
      orderBy:{
        updatedAt:"desc"
      }
    })
    return allClass
  })
  return result
}

const getStudentByClassInDb = async(classId:string, studentId:string)=>{
  const transactionByClassStudent = await prisma.$transaction(async(tx)=>{
    const result = await prisma.class.findMany({
      where:{
        id:classId,
        students:{
          some:{
            id:studentId,
          }
        }
      },
    })
    return result
  })
  return transactionByClassStudent
}

export const adminService = {
  getRegisterRequestInDb,
  approveRequest,
  createClassInDb,
  getAllClassInDb,
  getStudentByClassInDb
};
