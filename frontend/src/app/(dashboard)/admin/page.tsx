"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    // Verificar autenticación y rol
    const userRole = localStorage.getItem("userRole");
    if (userRole !== "admin") {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Dashboard de Administrador
        </h1>
        {/* Contenido específico del admin */}
      </div>
    </div>
  );
}
