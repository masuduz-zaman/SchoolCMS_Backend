import { prisma } from "../../lib/prisma.js"
import bcrypt from "bcryptjs";


const getProfileInDb = async(userId: string)=>{
    const user = await prisma.user.findFirstOrThrow({
        where:{
            id:userId,
        },
        omit:{
            password:true
        },
        include:{
            student:true,
            profile:true,
            teacher:true,
        }
    })
    return user
}


const updateProfileIntoDb = async (
  userId: string,
  payload: any
) => {
  const {
    name,
    email,
    profilePhoto,
    bio,
    currentPassword,
    newPassword,
  } = payload;

  const updateData: any = {
    ...(name !== undefined && { name }),
    ...(email !== undefined && { email }),
  };

  // Password change
  if (newPassword) {
    if (!currentPassword) {
      throw new Error("Current password is required");
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { password: true },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordMatched = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isPasswordMatched) {
      throw new Error("Current password is incorrect");
    }

    updateData.password = await bcrypt.hash(newPassword, 12);
  }

  const updateUser = await prisma.user.update({
    where: { id: userId },
    data: {
      ...updateData,
      profile: {
        update: {
          profilePhoto,
          bio,
        },
      },
    },
    omit: {
      password: true,
    },
    include: {
      profile: true,
    },
  });

  return updateUser;
};

const getNoticeInDb = async () => {
  const now = new Date();

  const notice = await prisma.admissionNotice.findMany({
    where: {
      isPublished: true,
      publishedAt: {
        lte: now,
      },
      expiresAt: {
        gte: now,
      },
    },
    select: {
      id: true,
      title: true,
      content: true,
      publishedAt: true,
      expiresAt: true,
      createdBy: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      publishedAt: "desc",
    },
  });
  if(notice.length === 0){
        throw new Error("Notice not found")
    }

  return notice;
};

const getCategoryInDb = async(categoryId:string)=>{
  const category = await prisma.galleryCategory.findFirstOrThrow({
    where:{
      id:categoryId
    },
    include:{
      images:true
    }
  })
  return category
}

export const publicService ={
    getProfileInDb,
    updateProfileIntoDb,
    getNoticeInDb,
    getCategoryInDb
}