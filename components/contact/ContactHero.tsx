"use client";
import { motion } from "framer-motion";
import { MessageSquare, Clock } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative pt-20 pb-10 lg:pt-32 lg:pb-16 bg-white overflow-hidden">
      
      {/* Decoración de fondo minimalista */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* INDICADOR DE ESTADO (Valor real directo) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center items-center gap-3 mb-6"
        >
          <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/20 text-success text-[10px] lg:text-xs font-black uppercase tracking-widest">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
            Abierto ahora
          </span>
          <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutralbg border border-gray-200 text-gray-500 text-[10px] lg:text-xs font-bold uppercase tracking-widest">
            <Clock size={14} />
            Cierra 5:00 PM
          </span>
        </motion.div>

        {/* TÍTULO PRINCIPAL (Tamaño optimizado) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-6xl font-black text-primary leading-tight tracking-tight mb-6"
        >
          Estamos para <span className="text-accent">Escucharte</span>
        </motion.h1>

        {/* DESCRIPCIÓN (Breve y directa) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base lg:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
        >
          Agenda tu consulta o resuelve tus dudas a través de nuestros canales oficiales. 
          Atención inmediata y personalizada para tu salud digestiva.
        </motion.p>

        {/* LÍNEA DECORATIVA */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "60px" }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="h-1.5 bg-accent rounded-full mx-auto mt-10"
        />

      </div>
    </section>
  );
};

export default ContactHero;