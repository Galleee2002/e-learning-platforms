import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: "EduPlatform",
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
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
