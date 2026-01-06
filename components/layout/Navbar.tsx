"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/dr-rivas-contreras", label: "Dr. Rivas Contreras" },
    { href: "/servicios", label: "Servicios" },
    { href: "/clinica", label: "Clínica" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg h-16"
          : "bg-white/80 backdrop-blur-sm h-20"
      } flex items-center`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex flex-col group">
            <span className="text-xl font-black text-primary group-hover:text-accent transition-colors leading-none">
              DR. RIVAS
            </span>
            <span className="text-[9px] uppercase tracking-widest font-bold text-secondary">
              Gastroenterología
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-darktext hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            <a
              href="https://wa.me/50373271322"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-success text-white px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-all shadow-lg"
            >
              <Phone size={16} />
              Agendar Cita
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-semibold text-darktext hover:text-primary py-2 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/50373271322"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-success text-white px-6 py-3 rounded-full font-bold text-sm w-full"
              >
                <Phone size={16} />
                Agendar Cita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;