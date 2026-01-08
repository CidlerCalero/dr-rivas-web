"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MessageCircle, Facebook, Instagram, Youtube, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Se activa el cambio después de 50px de scroll
      setIsScrolled(window.scrollY > 50);
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
    // CONTENEDOR MAESTRO: Animamos el Y para esconder la barra azul
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-transform duration-500 ease-in-out ${
        isScrolled ? "-translate-y-[40px]" : "translate-y-0"
      }`}
    >
      {/* TOP BAR: Altura fija de 40px */}
      <div className="bg-primary h-[40px] hidden lg:flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center text-[11px] font-bold text-white/90 uppercase tracking-widest">
          <div className="flex gap-6">
            <a href="tel:50322986100" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={12} className="text-accent" /> (503) 2298-6100
            </a>
            <a href="https://wa.me/50373271233" className="flex items-center gap-2 hover:text-accent transition-colors">
              <MessageCircle size={12} className="text-accent" /> (503) 7327-1233
            </a>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-4 border-r border-white/20 pr-6">
              <a href="#" className="hover:text-accent transition-colors"><Facebook size={14} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Instagram size={14} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Youtube size={14} /></a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-accent" /> San Salvador, El Salvador
            </div>
          </div>
        </div>
      </div>

      {/* MAIN BAR: Sube junto con el Top Bar */}
      <nav
        className={`bg-white transition-all duration-500 ${
          isScrolled ? "shadow-xl py-2 bg-white/95 backdrop-blur-md" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* LOGO */}
            <Link href="/" className="flex items-center transition-transform hover:scale-105">
              <div className="relative w-[180px] h-[50px] md:w-[220px] md:h-[60px]">
                <Image 
                  src="/images/logo.png" 
                  alt="Unidad de Gastroenterología Rivas Torres" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-[13px] font-black text-primary/70 hover:text-primary transition-all relative group uppercase"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-accent rounded-full group-hover:w-4 transition-all" />
                </Link>
              ))}
              <Link
                href="/contacto"
                className="ml-6 bg-primary text-white px-7 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-accent hover:scale-105 transition-all shadow-lg"
              >
                Cómo llegar
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-xl bg-neutralbg text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }} 
              animate={{ height: "auto", opacity: 1 }} 
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t border-neutralbg overflow-hidden"
            >
              <div className="px-6 py-10 space-y-6">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block text-2xl font-black text-primary">
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;