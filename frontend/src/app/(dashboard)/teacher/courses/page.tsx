"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { BookOpen, Plus } from "lucide-react";

export default function TeacherCoursesPage() {
  return (
    <ProtectedRoute requiredRole="teacher">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mis Cursos</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Crear Curso
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center">
            <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              Mis Cursos
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Aquí podrás gestionar todos tus cursos
            </p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
