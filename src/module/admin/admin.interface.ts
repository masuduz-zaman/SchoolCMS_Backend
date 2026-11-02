export interface admissionPayload {
  title: string;
  content: string;
  adminId: string;
  publishedAt:string;
  expiresAt?:string;
  publishDate?: string;
  durationInDays?: number;
}

export interface classPayload {
  name: string;
  description?: string;
}

export interface contentPayload {
  headTeacherMessage: string;
  updatedById: string;
}

export interface category {
  name:string,
  slug:string,
}

export interface IUploadGalleryImage {
  categoryId: string;
  title?: string;
  description?: string;
}