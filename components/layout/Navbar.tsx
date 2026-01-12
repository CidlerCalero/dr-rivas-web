"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle, Facebook, Instagram, Youtube, MapPin, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
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

  const phoneNumbers = [
    { number: "(503) 2298-6100", tel: "50322986100", isWhatsApp: false },
    { number: "(503) 7327-1322", tel: "50373271322", isWhatsApp: true },
    { number: "(503) 7526-5861", tel: "50375265861", isWhatsApp: true }
  ];

  const socialLinks = [
    { 
      icon: <Facebook size={14} />, 
      href: "https://www.facebook.com/umgqes",
      label: "Facebook"
    },
    { 
      icon: <Instagram size={14} />, 
      href: "https://www.instagram.com/rener.rivas/",
      label: "Instagram"
    },
    { 
      icon: <Youtube size={14} />, 
      href: "#",
      label: "YouTube",
      disabled: true
    }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-transform duration-500 ease-in-out ${
        isScrolled ? "-translate-y-[44px]" : "translate-y-0"
      }`}
    >
      {/* ========== TOP BAR DESKTOP ========== */}
      <div className="bg-primary h-[44px] hidden lg:flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center text-[11px] font-bold text-white/90 uppercase tracking-wider">
          
          {/* Teléfonos */}
          <div className="flex gap-6">
            {phoneNumbers.map((phone, index) => (
              <a 
                key={index}
                href={phone.isWhatsApp ? `https://wa.me/${phone.tel}` : `tel:${phone.tel}`}
                target={phone.isWhatsApp ? "_blank" : undefined}
                rel={phone.isWhatsApp ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 hover:text-accent transition-colors group"
              >
                {phone.isWhatsApp ? (
                  <MessageCircle size={13} className="text-green-400 group-hover:scale-110 transition-transform" />
                ) : (
                  <Phone size={13} className="text-accent group-hover:scale-110 transition-transform" />
                )}
                {phone.number}
              </a>
            ))}
          </div>

          {/* Redes Sociales */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                social.disabled ? (
                  <span 
                    key={index}
                    className="opacity-40 cursor-not-allowed"
                    title="Próximamente"
                  >
                    {social.icon}
                  </span>
                ) : (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========== MAIN NAVBAR ========== */}
      <nav
        className={`bg-white transition-all duration-500 ${
          isScrolled ? "shadow-xl py-2 bg-white/95 backdrop-blur-md" : "py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* LOGO */}
            <Link href="/" className="flex items-center transition-transform hover:scale-105">
              <div className="relative w-[160px] h-[45px] md:w-[200px] md:h-[55px]">
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
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-[13px] font-black transition-all relative group uppercase tracking-wide ${
                    isActive(link.href) 
                      ? "text-accent" 
                      : "text-primary/70 hover:text-primary"
                  }`}
                >
                  {link.label}
                  <span 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-accent rounded-full transition-all ${
                      isActive(link.href) 
                        ? "w-5" 
                        : "w-0 group-hover:w-5"
                    }`} 
                  />
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}

              <a 
                href="https://wa.me/50373271322?text=Hola,%20deseo%20agendar%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-green-700 hover:scale-105 transition-all shadow-lg shadow-green-600/30"
              >
                <Calendar size={16} />
                Haz tu Cita
              </a>

              <a 
                href="https://ul.waze.com/ul?place=ChIJUyxwy4IxY48R1adJT5dynSM&ll=13.71136360%2C-89.21036910&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-accent hover:scale-105 transition-all shadow-lg shadow-primary/30"
              >
                <MapPin size={16} />
                Cómo Llegar
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden p-2.5 rounded-xl bg-gray-50 text-primary hover:bg-primary hover:text-white transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ========== MOBILE MENU ========== */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }} 
              animate={{ height: "auto", opacity: 1 }} 
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-8 space-y-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)} 
                    className={`block text-xl font-black transition-colors relative pl-4 ${
                      isActive(link.href)
                        ? "text-accent"
                        : "text-primary hover:text-accent"
                    }`}
                  >
                    {isActive(link.href) && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent rounded-full" />
                    )}
                    {link.label}
                  </Link>
                ))}

                <div className="border-t border-gray-200 my-6"></div>

                <div className="space-y-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Contacto</p>
                  {phoneNumbers.map((phone, index) => (
                    <a 
                      key={index}
                      href={phone.isWhatsApp ? `https://wa.me/${phone.tel}` : `tel:${phone.tel}`}
                      target={phone.isWhatsApp ? "_blank" : undefined}
                      rel={phone.isWhatsApp ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 text-sm font-bold text-primary hover:text-accent transition-colors"
                    >
                      <div className={phone.isWhatsApp ? "bg-green-500/10 p-2 rounded-lg" : "bg-primary/10 p-2 rounded-lg"}>
                        {phone.isWhatsApp ? (
                          <MessageCircle size={18} className="text-green-600" />
                        ) : (
                          <Phone size={18} className="text-primary" />
                        )}
                      </div>
                      {phone.number}
                    </a>
                  ))}
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Síguenos</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      social.disabled ? (
                        <span 
                          key={index}
                          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center opacity-40 cursor-not-allowed"
                        >
                          {social.icon}
                        </span>
                      ) : (
                        <a 
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                          aria-label={social.label}
                        >
                          {social.icon}
                        </a>
                      )
                    ))}
                  </div>
                </div>

                <a 
                  href="https://wa.me/50373271322?text=Hola,%20deseo%20agendar%20una%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-wide w-full shadow-xl shadow-green-600/30"
                >
                  <Calendar size={20} />
                  Haz tu Cita
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;