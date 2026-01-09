"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, GraduationCap, Microscope, Stethoscope, Star } from "lucide-react";

const DrHero = () => {
  return (
    <section className="py-12 lg:py-24 bg-white overflow-hidden relative">
      
      {/* ========== TEXTURA DE FONDO (Mejora Visual) ========== */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-50/50 skew-x-12 translate-x-20"></div>
        <div className="absolute left-10 bottom-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        {/* Patrón de puntos sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-0 lg:gap-16">
          
          {/* ========== COLUMNA 2: IMAGEN (Mobile: Order 1) ========== */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 order-1 lg:order-2 relative mb-[-40px] lg:mb-0" // Margen negativo en móvil para el solapamiento
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Marco decorativo detrás */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-[30px] lg:rounded-[50px] rotate-3 scale-105 z-0"></div>
              
              {/* Contenedor de la Imagen */}
              <div className="relative rounded-[30px] lg:rounded-[50px] overflow-hidden shadow-2xl border-4 border-white z-10 aspect-[4/5] lg:aspect-square object-cover">
                <Image 
                  src="/images/doctor-hero.webp" 
                  alt="Dr. René Ricardo Rivas Contreras" 
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* BADGE ANIMADO FLOTANTE (Nuevo) */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-4 lg:bottom-10 lg:-left-10 z-20"
              >
                <div className="bg-white p-4 rounded-2xl shadow-xl border border-blue-50 flex items-center gap-4 max-w-[200px]">
                  <div className="bg-accent text-white p-3 rounded-xl shadow-lg shadow-accent/30">
                    <Star fill="currentColor" size={24} />
                  </div>
                  <div>
                    <p className="text-3xl font-black text-primary leading-none">30+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-tight">Años de Exp.</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* ========== COLUMNA 1: TEXTO (Mobile: Order 2) ========== */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 order-2 lg:order-1 relative z-20"
          >
            {/* Tarjeta contenedora en móvil (efecto glass) - Transparente en Desktop */}
            <div className="bg-white/90 backdrop-blur-xl lg:bg-transparent lg:backdrop-blur-none rounded-t-[2.5rem] lg:rounded-none p-8 lg:p-0 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] lg:shadow-none mt-4 lg:mt-12 border-t border-white/50 lg:border-none">
              
              {/* Etiqueta Superior */}
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-[10px] lg:text-xs font-black uppercase tracking-widest flex items-center gap-1">
                  <Award size={14} className="text-accent" /> Certificado
                </span>
                <div className="h-px w-10 bg-blue-200"></div>
              </div>

              <h1 className="text-4xl lg:text-6xl font-extrabold text-primary mb-4 leading-tight">
                Dr. René Ricardo <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-800 to-accent">
                  Rivas Contreras
                </span>
              </h1>
              
              <h2 className="text-lg lg:text-xl text-secondary font-bold mb-6 flex items-center gap-2">
                <Stethoscope size={20} className="text-accent" />
                Gastroenterólogo e Internista
              </h2>

              <p className="text-gray-600 leading-relaxed mb-10 text-base lg:text-lg border-l-4 border-accent/20 pl-4 lg:pl-0 lg:border-none">
                Con más de tres décadas de trayectoria, el Dr. Rivas ha consolidado su práctica en la excelencia clínica. Su experiencia en el <strong className="text-primary">Hospital Nacional Rosales</strong> y su consulta privada lo posicionan como un referente de confianza para la salud digestiva en El Salvador.
              </p>
              
              {/* GRID DE CREDENCIALES (Animación Stagger) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { 
                    icon: <GraduationCap size={22} />, 
                    label: "Doctorado", 
                    sub: "UES 1993",
                    color: "bg-blue-50 text-blue-600"
                  },
                  { 
                    icon: <Microscope size={22} />, 
                    label: "Gastro", 
                    sub: "Hosp. México",
                    color: "bg-purple-50 text-purple-600"
                  },
                  { 
                    icon: <Award size={22} />, 
                    label: "Internista", 
                    sub: "Especialista",
                    color: "bg-teal-50 text-teal-600"
                  },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex flex-row sm:flex-col items-center sm:items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
                  >
                    <div className={`p-3 rounded-xl ${item.color} group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-bold text-primary">{item.label}</div>
                      <div className="text-xs text-gray-500 font-semibold mt-0.5">{item.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DrHero;