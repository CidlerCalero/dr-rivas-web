"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para cambiar el estilo al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Dr. Rivas", href: "/dr-rivas-contreras" },
    { name: "Servicios", href: "/servicios" },
    { name: "Clínica", href: "/clinica" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <div className="flex-shrink-0 flex flex-col">
            <span className="text-xl font-bold text-primary leading-tight">
              DR. RIVAS CONTRERAS
            </span>
            <span className="text-[10px] tracking-[0.2em] text-secondary font-semibold uppercase">
              Unidad de Gastroenterología
            </span>
          </div>

          {/* LINKS DESKTOP */}
          <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
  <Link
    key={link.name}
    href={link.href}
    className="text-sm font-medium text-darktext hover:text-primary transition-colors"
  >
    {link.name}
  </Link>
))}
            
            {/* BOTÓN CTA */}
            <Link
              href="/contacto"
              className="flex items-center gap-2 bg-accent hover:bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-accent/30"
            >
              <Calendar size={16} />
              Agendar Cita
            </Link>
          </div>

          {/* BOTÓN MÓVIL */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-text hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in fade-in slide-in-from-top-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-dark-text hover:bg-gray-50 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2">
               <Link
                href="/contacto"
                className="flex items-center justify-center gap-2 bg-accent text-white w-full py-4 rounded-xl font-bold"
              >
                <Calendar size={18} />
                Agendar Cita
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;