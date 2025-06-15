"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TeacherDashboard() {
  const router = useRouter();

  useEffect(() => {
    // Verificar autenticación y rol
    const userRole = localStorage.getItem("userRole");
    if (userRole !== "teacher") {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Dashboard de Profesor
        </h1>
        {/* Contenido específico del profesor */}
      </div>
    </div>
  );
}
