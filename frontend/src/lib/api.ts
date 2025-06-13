// src/lib/api.ts
import {
  User,
  Course,
  LoginCredentials,
  RegisterData,
  AuthResponse,
  ProfileResponse,
  CoursesResponse,
  CourseResponse,
  CategoriesResponse,
  CourseFilters,
  CreateCourseData,
  UpdateProfileData,
  DashboardStatsResponse,
  ApiError,
} from "@/types/api";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

class ApiClient {
  private baseURL: string;
  private token: string | null = null;

  constructor() {
    this.baseURL = API_BASE_URL;

    if (typeof window !== "undefined") {
      this.token = localStorage.getItem("access_token");
    }
  }

  setToken(token: string): void {
    this.token = token;
    if (typeof window !== "undefined") {
      localStorage.setItem("access_token", token);
    }
  }

  removeToken(): void {
    this.token = null;
    if (typeof window !== "undefined") {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    if (options.headers) {
      if (options.headers instanceof Headers) {
        options.headers.forEach((value, key) => {
          headers.set(key, value);
        });
      } else if (Array.isArray(options.headers)) {
        options.headers.forEach(([key, value]) => {
          headers.set(key, value);
        });
      } else {
        Object.entries(options.headers).forEach(([key, value]) => {
          if (typeof value === "string") {
            headers.set(key, value);
          }
        });
      }
    }

    if (this.token) {
      headers.set("Authorization", `Bearer ${this.token}`);
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (response.status === 401 && this.token) {
        const refreshed = await this.refreshToken();
        if (refreshed) {
          headers.set("Authorization", `Bearer ${this.token}`);
          const retryResponse = await fetch(url, {
            ...options,
            headers,
          });
          return this.handleResponse<T>(retryResponse);
        }
      }

      return this.handleResponse<T>(response);
    } catch (error) {
      console.error("API Request failed:", error);
      throw new Error("Error de conexión con el servidor");
    }
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    let data: any;

    try {
      data = await response.json();
    } catch {
      data = {};
    }

    if (!response.ok) {
      const errorData = data as ApiError;
      throw new Error(errorData.error || `HTTP Error: ${response.status}`);
    }

    return data as T;
  }

  private async refreshToken(): Promise<boolean> {
    const refresh_token =
      typeof window !== "undefined"
        ? localStorage.getItem("refresh_token")
        : null;

    if (!refresh_token) return false;

    try {
      const response = await fetch(`${this.baseURL}/auth/refresh`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${refresh_token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data: { access_token: string } = await response.json();
        this.setToken(data.access_token);
        return true;
      }
    } catch (error) {
      console.error("Token refresh failed:", error);
    }

    this.removeToken();
    return false;
  }

  async register(userData: RegisterData): Promise<AuthResponse> {
    const response = await this.request<AuthResponse>("/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
    });

    if (response.access_token) {
      this.setToken(response.access_token);
      if (typeof window !== "undefined") {
        localStorage.setItem("refresh_token", response.refresh_token);
      }
    }

    return response;
  }

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await this.request<AuthResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });

    if (response.access_token) {
      this.setToken(response.access_token);
      if (typeof window !== "undefined") {
        localStorage.setItem("refresh_token", response.refresh_token);
      }
    }

    return response;
  }

  logout(): void {
    this.removeToken();
  }

  async getProfile(): Promise<ProfileResponse> {
    return this.request<ProfileResponse>("/auth/profile");
  }

  async updateProfile(userData: UpdateProfileData): Promise<ProfileResponse> {
    return this.request<ProfileResponse>("/auth/profile", {
      method: "PUT",
      body: JSON.stringify(userData),
    });
  }

  async getCourses(params: CourseFilters = {}): Promise<CoursesResponse> {
    const queryString = new URLSearchParams(
      Object.entries(params).reduce((acc, [key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          acc[key] = String(value);
        }
        return acc;
      }, {} as Record<string, string>)
    ).toString();

    const endpoint = queryString ? `/courses/?${queryString}` : "/courses/";
    return this.request<CoursesResponse>(endpoint);
  }

  async getCourse(id: number): Promise<CourseResponse> {
    return this.request<CourseResponse>(`/courses/${id}`);
  }

  async createCourse(
    courseData: CreateCourseData
  ): Promise<{ message: string; course: Course }> {
    return this.request<{ message: string; course: Course }>("/courses/", {
      method: "POST",
      body: JSON.stringify(courseData),
    });
  }

  async updateCourse(
    id: number,
    courseData: Partial<CreateCourseData>
  ): Promise<{ message: string; course: Course }> {
    return this.request<{ message: string; course: Course }>(`/courses/${id}`, {
      method: "PUT",
      body: JSON.stringify(courseData),
    });
  }

  async getCategories(): Promise<CategoriesResponse> {
    return this.request<CategoriesResponse>("/courses/categories");
  }

  async getDashboardStats(): Promise<DashboardStatsResponse> {
    return this.request<DashboardStatsResponse>("/users/dashboard/stats");
  }

  async getUser(id: number): Promise<{ user: User }> {
    return this.request<{ user: User }>(`/users/${id}`);
  }
}

export const apiClient = new ApiClient();

export const {
  register,
  login,
  logout,
  getProfile,
  updateProfile,
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  getCategories,
  getDashboardStats,
  getUser,
} = apiClient;
