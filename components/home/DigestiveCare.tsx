"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, PlayCircle, FileText, ArrowRight, HeartPulse, ShieldCheck, Download } from "lucide-react";
import Link from "next/link";

const DigestiveCare = () => {
  return (
    <section className="relative bg-blue-50/30 overflow-hidden pt-12 pb-24 lg:pt-24 lg:pb-32">
      
      {/* ========== DECORACIÓN DE FONDO ========== */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/60 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* ========== COLUMNA IMAGEN ========== */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end lg:order-2 mb-[-60px] lg:mb-0 z-0 lg:z-10"
          >
            <div className="relative w-[320px] h-[380px] sm:w-[400px] sm:h-[450px] lg:w-[550px] lg:h-[650px]">
              
              {/* Círculo de fondo */}
              <div className="absolute inset-0 m-auto w-[280px] h-[280px] lg:w-[450px] lg:h-[450px] bg-gradient-to-tr from-blue-100 to-white rounded-full shadow-inner" />
              
              <Image 
                src="/images/staff-nurse.webp" 
                alt="Enfermera especialista"
                fill
                className="object-contain drop-shadow-2xl z-10"
                priority
              />

              {/* BADGE 1: PACIENTES FELICES */}
              {/* CAMBIO: En móvil (top-4 left-40) para no tapar cara. En desktop (top-20 right-10) */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 left 40 lg:top-20 lg:right-10 bg-white p-2.5 lg:p-3 rounded-2xl shadow-lg flex items-center gap-3 z-20 max-w-[140px] lg:max-w-[160px]"
              >
                <div className="bg-red-100 p-1.5 lg:p-2 rounded-full text-red-500">
                  <HeartPulse size={18} className="lg:w-5 lg:h-5" />
                </div>
                <div>
                  <p className="text-[10px] lg:text-xs text-gray-500 font-medium">Pacientes</p>
                  <p className="text-xs lg:text-sm font-bold text-gray-800">10k+ Felices</p>
                </div>
              </motion.div>

              {/* BADGE 2: ATENCIÓN SEGURA */}
              {/* CAMBIO: hidden en móvil para limpiar la vista. Visible solo en lg */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="hidden lg:flex absolute bottom-32 -left-8 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg items-center gap-3 z-20"
              >
                 <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <ShieldCheck size={20} />
                </div>
                <p className="text-sm font-bold text-primary">Atención Segura</p>
              </motion.div>
            </div>
          </motion.div>


          {/* ========== COLUMNA CONTENIDO ========== */}
          <div className="w-full lg:w-1/2 relative z-10 lg:pr-12 lg:order-1">
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none rounded-3xl p-6 sm:p-8 lg:p-0 shadow-xl lg:shadow-none border border-white/50 lg:border-none"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-bold text-xs tracking-wider uppercase mb-4">
                Educación al Paciente
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary leading-tight mb-6">
                Tu salud digestiva <br />
                <span className="text-accent relative inline-block">
                  es nuestra prioridad
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                No solo tratamos enfermedades, creamos bienestar. Nuestro equipo te brinda las herramientas y el conocimiento para mantener un sistema digestivo saludable todos los días.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Alimentación balanceada",
                  "Detección temprana",
                  "Hábitos saludables",
                  "Seguimiento continuo"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                    <span className="text-gray-700 font-medium text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              {/* Botones Principales */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contacto"
                  className="inline-flex justify-center items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 hover:scale-105 transition-all shadow-lg shadow-accent/20"
                >
                  Agendar Cita <ArrowRight size={18} />
                </Link>
                
                <Link 
                  href="/servicios"
                  className="inline-flex justify-center items-center gap-2 bg-white text-primary border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 hover:border-accent/50 transition-all"
                >
                  <PlayCircle size={18} className="text-accent" />
                  Ver Servicios
                </Link>
              </div>

              {/* RECURSOS ADICIONALES - PROTAGONISMO MEJORADO */}
              {/* Ahora es un grid de 2 tarjetas interactivas */}
              <div className="mt-8 pt-6 border-t border-gray-200/60 grid grid-cols-2 gap-4">
                
                {/* Botón Recurso 1: Guía */}
                <Link href="#" className="group flex items-center gap-4 p-3 rounded-2xl bg-purple-50/50 border border-purple-100 hover:bg-white hover:shadow-md hover:border-purple-200 transition-all cursor-pointer">
                  <div className="bg-purple-100 p-3 rounded-xl text-purple-600 group-hover:scale-110 transition-transform shadow-sm">
                    <FileText size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-purple-400 uppercase tracking-wider mb-0.5">PDF Gratis</span>
                    <span className="text-sm font-bold text-primary group-hover:text-purple-700 transition-colors leading-tight">
                      Guía de Salud
                    </span>
                  </div>
                </Link>

                {/* Botón Recurso 2: Video */}
                <Link href="#" className="group flex items-center gap-4 p-3 rounded-2xl bg-blue-50/50 border border-blue-100 hover:bg-white hover:shadow-md hover:border-blue-200 transition-all cursor-pointer">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600 group-hover:scale-110 transition-transform shadow-sm">
                    <PlayCircle size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-wider mb-0.5">Tutorial</span>
                    <span className="text-sm font-bold text-primary group-hover:text-blue-700 transition-colors leading-tight">
                      Consejos Rápidos
                    </span>
                  </div>
                </Link>

              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DigestiveCare;