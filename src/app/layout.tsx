import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google"; // Importamos las fuentes
import "./globals.css";

// Configuración de Poppins para Títulos
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins", // Definimos una variable CSS
  display: "swap",
});

// Configuración de Inter para Texto Base
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter", // Definimos una variable CSS
  display: "swap",
});

export const metadata: Metadata = {
  title: "ConsultaEduca | Innovación Pedagógica y Transformación Digital",
  description: "Consultoría especializada en ingeniería pedagógica, desarrollo de software educativo (EdTech) y analítica escolar.",
  // ... (puedes mantener el resto de tus metadatos OpenGraph aquí)
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Aplicamos las variables de fuente al HTML
    <html lang="es" className={`${poppins.variable} ${inter.variable} scroll-smooth`}>
      {/* Aplicamos la fuente Inter como base y la paleta de fondo */}
      <body className="font-inter antialiased bg-brand-bg text-brand-dark/90">
        {children}
      </body>
    </html>
  );
}