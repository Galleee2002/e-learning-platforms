"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function StudentDashboard() {
  const router = useRouter();

  useEffect(() => {
    // Verificar autenticación y rol
    const userRole = localStorage.getItem("userRole");
    if (userRole !== "student") {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Dashboard de Estudiante
        </h1>
        {/* Contenido específico del estudiante */}
      </div>
    </div>
  );
}
