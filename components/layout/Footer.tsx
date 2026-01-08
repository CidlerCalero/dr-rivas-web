"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, Facebook, Instagram, Youtube, ArrowUp, MessageCircle, Award, ShieldCheck } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const socialLinks = [
    { 
      icon: <Facebook size={18} />, 
      href: "https://www.facebook.com/umgqes",
      label: "Facebook"
    },
    { 
      icon: <Instagram size={18} />, 
      href: "https://www.instagram.com/rener.rivas/",
      label: "Instagram"
    },
    { 
      icon: <Youtube size={18} />, 
      href: "#",
      label: "YouTube",
      disabled: true
    }
  ];

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/dr-rivas-contreras", label: "Dr. Rivas Contreras" },
    { href: "/servicios", label: "Servicios" },
    { href: "/clinica", label: "Clínica" },
    { href: "/contacto", label: "Contacto" }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-secondary text-white relative">
      
      {/* ========== CONTENEDOR DEL BOTÓN (FUERA DEL OVERFLOW) ========== */}
      <div className="relative z-50">
        <button 
          onClick={scrollToTop}
          className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent p-4 rounded-full shadow-2xl hover:bg-white hover:text-primary transition-all group border-4 border-white/10"
          aria-label="Volver arriba"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* ========== CONTENIDO CON OVERFLOW (PARA LUCES DE FONDO) ========== */}
      <div className="pt-20 pb-8 overflow-hidden relative">
        
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* ========== DESKTOP LAYOUT ========== */}
          <div className="hidden lg:grid grid-cols-4 gap-12 mb-16">
            
            {/* COL 1: LOGO E INFO */}
            <div className="space-y-6">
              <Link href="/" className="inline-block bg-white p-4 rounded-2xl shadow-xl hover:scale-105 transition-transform">
                <div className="relative w-[160px] h-[45px]">
                  <Image 
                    src="/images/logo.png" 
                    alt="Logo Unidad de Gastroenterología Rivas Torres" 
                    fill 
                    className="object-contain" 
                  />
                </div>
              </Link>
              
              <div>
                <h3 className="text-xl font-black mb-2">Dr. René Ricardo Rivas Contreras</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Más de 30 años de experiencia al servicio de tu salud digestiva.
                </p>
              </div>

              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  social.disabled ? (
                    <span key={index} className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center opacity-40 cursor-not-allowed">
                      {social.icon}
                    </span>
                  ) : (
                    <a 
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  )
                ))}
              </div>
            </div>

            {/* COL 2: NAVEGACIÓN */}
            <div>
              <h4 className="text-lg font-black mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-accent"></span>
                Navegación
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-blue-100 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-accent/50 rounded-full group-hover:bg-accent transition-all"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COL 3: CONTACTO */}
            <div>
              <h4 className="text-lg font-black mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-accent"></span>
                Contacto
              </h4>
              <ul className="space-y-5">
                <li className="flex gap-3 text-sm text-blue-100 leading-relaxed">
                  <MapPin className="text-accent shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="font-bold text-white mb-1">Unidad de Gastroenterología Rivas Torres</p>
                    <p>Calle Gabriela Mistral #516, San Salvador</p>
                  </div>
                </li>
                <li className="flex gap-3 text-sm">
                  <Phone className="text-accent shrink-0 mt-0.5" size={18} />
                  <div className="space-y-1">
                    <a href="tel:50322986100" className="block hover:text-white transition-colors">(503) 2298-6100</a>
                    <a href="https://wa.me/50373271322" target="_blank" className="block hover:text-white transition-colors">(503) 7327-1322</a>
                  </div>
                </li>
              </ul>
            </div>

            {/* COL 4: LICENCIA */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-accent" size={24} />
                <h4 className="text-lg font-black">Garantía</h4>
              </div>
              <div className="bg-white/10 rounded-2xl p-4 text-center border border-accent/30">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="text-accent" size={20} />
                  <p className="text-accent font-black text-sm uppercase">Licencia</p>
                </div>
                <p className="text-4xl font-black text-white">#91</p>
              </div>
            </div>
          </div>

          {/* ========== MOBILE LAYOUT ========== */}
          <div className="lg:hidden space-y-8 mb-12">
            <div className="text-center">
              <Link href="/" className="inline-block bg-white p-4 rounded-2xl shadow-xl">
                <div className="relative w-[140px] h-[40px]">
                  <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
                </div>
              </Link>
              <h3 className="text-lg font-black mt-4">Dr. René Ricardo Rivas Contreras</h3>
            </div>

            <div className="space-y-3">
              <a href="https://www.waze.com/ul?ll=13.711364,-89.210369&navigate=yes" target="_blank" className="flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white px-6 py-4 rounded-2xl font-bold text-sm w-full">
                <MapPin size={20} className="text-accent" /> Cómo Llegar
              </a>
              <a href="https://wa.me/50373271322" target="_blank" className="flex items-center justify-center gap-3 bg-green-600 text-white px-6 py-4 rounded-2xl font-bold text-sm w-full shadow-xl">
                <MessageCircle size={20} /> Citas: (503) 7327-1322
              </a>
            </div>

            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                !social.disabled && (
                  <a key={index} href={social.href} target="_blank" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent transition-all">
                    {social.icon}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* ========== COPYRIGHT BAR ========== */}
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-xs text-blue-200 font-medium">
              © 2026 Dr. René Ricardo Rivas Contreras - Todos los derechos reservados
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;