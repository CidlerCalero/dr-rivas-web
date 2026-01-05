import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar"; // IMPORTAMOS EL NAVBAR
import Footer from "../components/layout/Footer"; 

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Dr. René Ricardo Rivas Contreras | Gastroenterólogo",
  description: "Especialista en salud digestiva con más de 30 años de experiencia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-neutral-bg text-dark-text antialiased`}>
        <Navbar /> {/* COLOCAMOS EL NAVBAR AQUÍ */}
        <main>
          {children}
        </main>
         <Footer /> 
      </body>
    </html>
  );
}