"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <ProtectedRoute>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Configuración</h1>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center">
            <Settings className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              Configuración
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Funcionalidad en desarrollo
            </p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
