// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import ClientProvider from "@/components/providers/ClientProvider";

export const metadata: Metadata = {
  title: "EducAR",
  description: "Plataforma educativa digital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <ClientProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
        </ClientProvider>
      </body>
    </html>
  );
}
