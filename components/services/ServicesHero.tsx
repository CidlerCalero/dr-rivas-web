"use client";
import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
      {/* Círculos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
        >
          Servicios Médicos Profesionales
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-blue-100 leading-relaxed"
        >
          Diagnóstico preciso y tratamiento avanzado para tu salud digestiva, respaldado por la experiencia del Dr. Rivas Contreras.
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesHero;