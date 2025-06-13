// src/components/providers/ClientProvider.tsx
"use client";

import { AuthProvider } from "@/hooks/useAuth";
import { ReactNode } from "react";

interface ClientProviderProps {
  children: ReactNode;
}

export default function ClientProvider({ children }: ClientProviderProps) {
  return <AuthProvider>{children}</AuthProvider>;
}
