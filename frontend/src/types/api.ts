// src/types/api.ts

// Tipos de Usuario
export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  full_name: string;
  role: "student" | "teacher" | "admin";
  avatar_url?: string;
  bio?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// Tipos de Curso
export interface Course {
  id: number;
  title: string;
  description: string;
  short_description?: string;
  image_url?: string;
  price: number;
  level: "beginner" | "intermediate" | "advanced";
  duration_hours: number;
  instructor: User;
  category?: Category;
  is_published: boolean;
  average_rating: number;
  total_reviews: number;
  total_students: number;
  tags: Tag[];
  created_at: string;
  updated_at: string;
}

// Tipos de Categoría
export interface Category {
  id: number;
  name: string;
  description?: string;
  icon?: string;
  color?: string;
  courses_count: number;
  created_at: string;
}

// Tipos de Tag
export interface Tag {
  id: number;
  name: string;
  color?: string;
  created_at: string;
}

// Tipos de Request/Response
export interface LoginCredentials {
  username: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  role?: "student" | "teacher";
}

export interface AuthResponse {
  message: string;
  user: User;
  access_token: string;
  refresh_token: string;
}

export interface ProfileResponse {
  user: User;
}

export interface CoursesResponse {
  courses: Course[];
  pagination: {
    page: number;
    pages: number;
    per_page: number;
    total: number;
    has_next: boolean;
    has_prev: boolean;
  };
}

export interface CourseResponse {
  course: Course & {
    lessons?: Lesson[];
  };
}

export interface CategoriesResponse {
  categories: Category[];
}

export interface CourseFilters {
  page?: number;
  per_page?: number;
  search?: string;
  category_id?: number;
  level?: string;
  instructor_id?: number;
}

export interface CreateCourseData {
  title: string;
  description: string;
  short_description?: string;
  image_url?: string;
  price?: number;
  level?: "beginner" | "intermediate" | "advanced";
  duration_hours?: number;
  category_id?: number;
  is_published?: boolean;
}

export interface UpdateProfileData {
  first_name?: string;
  last_name?: string;
  bio?: string;
  avatar_url?: string;
  email?: string;
}

export interface DashboardStats {
  enrolled_courses: number;
  favorite_courses: number;
  completed_courses: number;
  total_hours: number;
  created_courses?: number;
  total_students?: number;
  published_courses?: number;
  total_users?: number;
  total_courses?: number;
  active_users?: number;
}

export interface DashboardStatsResponse {
  stats: DashboardStats;
}

export interface Lesson {
  id: number;
  title: string;
  content?: string;
  video_url?: string;
  duration_minutes: number;
  order: number;
  is_free: boolean;
  course_id: number;
  created_at: string;
}

export interface ApiError {
  error: string;
}
