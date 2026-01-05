"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Fondo con gradiente médico */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-70"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* TEXTO IZQUIERDA */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary text-sm font-bold mb-6">
              ⭐ 30+ Años de Experiencia
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-primary leading-tight mb-6 tracking-tight">
              Cuidando de tu <br />
              <span className="text-accent">Salud Digestiva</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              El Dr. René Ricardo Rivas Contreras combina experiencia clínica y calidez humana para brindarte el mejor diagnóstico y tratamiento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-200 hover:scale-105 transition-transform">
                Agendar Consulta
                <ArrowRight size={20} />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white text-primary border-2 border-blue-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors">
                Ver Servicios
              </button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-success" /> Atencion Personalizada
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-success" /> Tecnología Moderna
              </div>
            </div>
          </motion.div>

          {/* IMAGEN DERECHA */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/images/doctor-hero.webp" 
                alt="Dr. René Ricardo Rivas Contreras"
                className="w-full h-auto object-cover aspect-[4/5]"
                // Si la imagen no carga, se verá el fondo azul de abajo
              />
            </div>
            {/* Decoración detrás de la foto */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-accent/20 rounded-3xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;