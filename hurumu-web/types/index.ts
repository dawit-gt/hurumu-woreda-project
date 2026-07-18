// ─── Shared API response wrapper ─────────────────────────────────
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

export interface Paginated<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// ─── Domain types ─────────────────────────────────────────────────
export type Role = 'SUPER_ADMIN' | 'ADMIN' | 'DEPARTMENT_HEAD' | 'STAFF' | 'PUBLIC';

export interface User {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
  role: Role;
  isActive: boolean;
  avatarUrl?: string;
  departmentId?: string;
  department?: Pick<Department, 'id' | 'name'>;
  createdAt: string;
  updatedAt: string;
}

export interface Department {
  id: string;
  name: string;
  nameOromoo?: string;
  slug: string;
  description?: string;
  iconName?: string;
  headName?: string;
  phone?: string;
  email?: string;
  isActive: boolean;
  sortOrder: number;
  _count?: { users: number; services: number; news: number };
}

export interface Kebele {
  id: string;
  name: string;
  nameOromoo?: string;
  number: number;
  population?: number;
  area?: number;
  chairperson?: string;
  phone?: string;
}

export type NewsTag = 'ANNOUNCEMENT' | 'EVENT' | 'NOTICE' | 'PROJECT' | 'TENDER';
export type NewsStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';

export interface NewsItem {
  id: string;
  title: string;
  titleOromoo?: string;
  slug: string;
  excerpt: string;
  content: string;
  tag: NewsTag;
  status: NewsStatus;
  isUrgent: boolean;
  featuredImage?: string;
  publishedAt?: string;
  viewCount: number;
  author: Pick<User, 'id' | 'fullName'>;
  department?: Pick<Department, 'id' | 'name'>;
  createdAt: string;
}

export type ServiceCategory =
  | 'CIVIL_REGISTRATION' | 'LAND_ADMINISTRATION' | 'BUSINESS_LICENSE'
  | 'AGRICULTURE' | 'HEALTH' | 'EDUCATION' | 'INFRASTRUCTURE'
  | 'SOCIAL_SERVICES' | 'FINANCE' | 'OTHER';

export interface Service {
  id: string;
  name: string;
  nameOromoo?: string;
  slug: string;
  description: string;
  category: ServiceCategory;
  iconName?: string;
  fee?: number;
  processingDays?: number;
  requiredDocs: string[];
  steps: string[];
  isOnline: boolean;
  isActive: boolean;
  department?: Pick<Department, 'id' | 'name'>;
}

export type DocumentType =
  | 'BUDGET_REPORT' | 'PROCUREMENT_PLAN' | 'PERFORMANCE_REPORT'
  | 'POLICY' | 'GUIDELINE' | 'TENDER_DOCUMENT' | 'ANNUAL_PLAN' | 'OTHER';

export interface Document {
  id: string;
  title: string;
  description?: string;
  type: DocumentType;
  fileUrl: string;
  fileSize?: number;
  mimeType?: string;
  fiscalYear?: string;
  quarter?: number;
  isPublic: boolean;
  downloadCount: number;
  department?: Pick<Department, 'id' | 'name'>;
  createdAt: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}
