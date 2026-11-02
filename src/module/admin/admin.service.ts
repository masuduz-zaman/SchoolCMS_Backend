import { Prisma, RequestStatus, RequestType, UserRole } from "@prisma/client";
import { prisma } from "../../lib/prisma.js";
import type {
  admissionPayload,
  category,
  classPayload,
  contentPayload,
  IUploadGalleryImage,
} from "./admin.interface.js";
import { cloudinary } from "../../lib/cloudinary.js";

const getRegisterRequestInDb = async (requestId: string) => {
  const requests = await prisma.$transaction(async (tx) => {
    const allRequests = await prisma.registrationRequest.findMany({
      where: {
        id: requestId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return allRequests;
  });
  return requests;
};

const approveRequest = async (
  requestId: string,
  adminId: string,
  status: RequestStatus,
) => {
  return prisma.$transaction(async (tx) => {
    // Verify admin
    const admin = await tx.user.findUnique({
      where: { id: adminId },
      select: { role: true },
    });

    if (!admin || admin.role !== UserRole.ADMIN) {
      throw new Error("Only admin can process requests");
    }

    // Allowed statuses
    const allowedStatuses: RequestStatus[] = [
      RequestStatus.APPROVED,
      RequestStatus.CANCELLED,
      RequestStatus.BLOCKED,
    ];

    if (!allowedStatuses.includes(status)) {
      throw new Error("Invalid request status");
    }

    // Find registration request
    const request = await tx.registrationRequest.findUnique({
      where: { id: requestId },
    });

    if (!request) {
      throw new Error("Registration request not found");
    }

    if (request.status !== RequestStatus.PENDING) {
      throw new Error("Request already processed");
    }

    // Create actual user only when approved
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

    // IMPORTANT: Do not delete the registration request.
    // Update its status so the applicant can track it.
    const updatedRequest = await tx.registrationRequest.update({
      where: { id: requestId },
      data: {
        status,
        reviewedAt: new Date(),
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        parentPhone: true,
        classId: true,
        classRoll: true,
        requestType: true,
        status: true,
        reviewNote: true,
        reviewedAt: true,
        createdAt: true,
        class: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return {
      message:
        status === RequestStatus.APPROVED
          ? "Request approved successfully"
          : `Request ${status.toLowerCase()} successfully`,
      request: updatedRequest,
    };
  });
};

const createClassInDb = async (payload: classPayload) => {
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

const getAllClassInDb = async () => {
  const allClass = await prisma.class.findMany({
    select: {
      id: true,
      name: true,
      description: true,

      students: {
        select: {
          id: true,
          parentPhone: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              phone: true,
            },
          },
        },
      },

      _count: {
        select: {
          students: true,
        },
      },
    },

    orderBy: {
      updatedAt: "desc",
    },
  });

  return allClass.map((classItem) => ({
    id: classItem.id,
    name: classItem.name,
    description: classItem.description,
    totalStudents: classItem._count.students,
    students: classItem.students,
  }));
};

const deleteUserInDb = async (id: string) => {
  const deleteUser = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!deleteUser) {
    throw new Error("User not found");
  }

  await prisma.student.deleteMany({
    where: {
      userId: id,
    },
  });
  await prisma.teacher.deleteMany({
    where: {
      userId: id,
    },
  });

  await prisma.profile.deleteMany({
    where: {
      userId: id,
    },
  });
  await prisma.user.delete({
    where: { id },
  });
  return {
    name: deleteUser?.name,
    email: deleteUser?.email,
  };
};

const createAdmissionNoticeInDb = async (
  payload: admissionPayload,
  adminId: string,
) => {
  const { title, content, publishDate, durationInDays } = payload;

  const now = new Date();

  const publishedAt = publishDate ? new Date(publishDate) : now;
  const isPublished = publishedAt <= now;

  let expiresAt: Date;

  if (durationInDays && durationInDays > 0) {
    expiresAt = new Date(publishedAt);
    expiresAt.setDate(expiresAt.getDate() + durationInDays);
  } else {
    expiresAt = new Date(publishedAt);
    expiresAt.setDate(expiresAt.getDate() + 30);
  }

  const newNotice = await prisma.admissionNotice.create({
    data: {
      title,
      content,
      isPublished,
      publishedAt,
      expiresAt,
      createdById: adminId,
    },
  });

  return newNotice;
};

const createContentInDb = async (payload: contentPayload) => {
  const { headTeacherMessage, updatedById } = payload;

  const admin = await prisma.user.findUnique({
    where: {
      id: updatedById,
    },
  });

  if (!admin || admin.role !== "ADMIN") {
    throw new Error("Admin not found");
  }

  const result = await prisma.schoolContent.create({
    data: {
      headTeacherMessage,
      updatedById,
    },
    include: {
      updateBy: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });

  return result;
};

const getContentInDb = async () => {
  const result = await prisma.schoolContent.findFirst({
    orderBy: {
      updatedAt: "desc",
    },
    include: {
      updateBy: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });

  return result;
};

const createCategoryInDb = async (payload: category) => {
  const { name, slug } = payload;
  const existingCategory = await prisma.galleryCategory.findFirst({
    where: {
      OR: [{ name }, { slug }],
    },
  });

  if (existingCategory) {
    throw new Error("Gallery category name or slug already exists");
  }

  const category = await prisma.galleryCategory.create({
    data: {
      name,
      slug,
    },
  });
  return category;
};

const uploadImageInDb = async (
  file: Express.Multer.File,
  payload: IUploadGalleryImage,
) => {
  if (!file) {
    throw new Error("Please select an image");
  }

  const category = await prisma.galleryCategory.findUnique({
    where: {
      id: payload.categoryId,
    },
  });

  if (!category) {
    throw new Error("Gallery category not found");
  }

  const uploadResult = await new Promise<{
    secure_url: string;
    public_id: string;
  }>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "school-gallery",
        resource_type: "image",
      },
      (error, result) => {
        if (error) return reject(error);

        if (!result) {
          return reject(new Error("Image upload failed"));
        }

        resolve({
          secure_url: result.secure_url,
          public_id: result.public_id,
        });
      },
    );

    stream.end(file.buffer);
  });

  const image = await prisma.galleryImage.create({
    data: {
      imageUrl: uploadResult.secure_url,
      title: payload.title,
      description: payload.description,
      categoryId: payload.categoryId,
    },
  });

  return image;
};

const getAllStudentsInDb = async () => {
  return prisma.student.findMany({
    select: {
      id: true,
      classRoll: true,
      parentPhone: true,
      class: {
        select: {
          id: true,
          name: true,
        },
      },
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          status: true,
          createdAt: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const getAllTeachersInDb = async () => {
  return prisma.teacher.findMany({
    select: {
      id: true,
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          status: true,
          createdAt: true,
        },
      },
      classesAsClassTeacher: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const updateUserStatusInDb = async (
  userId: string,
  status: "ACTIVE" | "SUSPENDED",
) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  if (user.role === UserRole.ADMIN) {
    throw new Error("Admin status cannot be changed here");
  }

  return prisma.user.update({
    where: { id: userId },
    data: { status },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
    },
  });
};

export const adminService = {
  getRegisterRequestInDb,
  approveRequest,
  createClassInDb,
  getAllClassInDb,
  deleteUserInDb,
  createAdmissionNoticeInDb,
  createContentInDb,
  getContentInDb,
  createCategoryInDb,
  uploadImageInDb,
  getAllStudentsInDb,
  getAllTeachersInDb,
  updateUserStatusInDb,
};
