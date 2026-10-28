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
