"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "María Eugenia López",
    text: "El Dr. Rivas Contreras me brindó una atención excelente. Su diagnóstico fue preciso y me explicó todo con mucha paciencia. Me sentí en confianza desde el primer momento.",
    specialty: "Paciente de Endoscopía"
  },
  {
    id: 2,
    name: "Carlos Roberto Mendoza",
    text: "Excelente profesional. El procedimiento fue rápido y sin molestias. El equipo que lo acompaña es muy humano y atento. Definitivamente el mejor en su área.",
    specialty: "Control Gastroenterológico"
  },
  {
    id: 3,
    name: "Elena de Guevara",
    text: "Llevaba meses con problemas de salud y solo el Dr. Rivas logró encontrar la causa. Su experiencia de 30 años se nota en el trato y en la seguridad que transmite.",
    specialty: "Paciente de Colonoscopía"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextStep = () => {
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl text-accent mb-6"
          >
            <Quote size={32} fill="currentColor" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight">
            Lo que dicen <br /> <span className="text-accent">nuestros pacientes</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Sistema de Navegación (Botones) */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-20 z-10">
            <button 
              onClick={prevStep}
              className="p-4 rounded-full bg-white shadow-xl text-primary hover:bg-primary hover:text-white transition-all border border-gray-100"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-20 z-10">
            <button 
              onClick={nextStep}
              className="p-4 rounded-full bg-white shadow-xl text-primary hover:bg-primary hover:text-white transition-all border border-gray-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Área del Testimonio con Animación */}
          <div className="bg-neutralbg rounded-[3rem] p-8 md:p-16 border border-gray-50 relative min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full text-center"
              >
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-gray-600 italic leading-relaxed mb-10">
                  &quot;{reviews[index].text}&quot;
                </p>

                <div>
                  <h4 className="text-2xl font-bold text-primary mb-1">
                    {reviews[index].name}
                  </h4>
                  <p className="text-sm font-bold text-accent uppercase tracking-widest">
                    {reviews[index].specialty}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Indicadores de progreso (Dots) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === index ? "bg-primary w-8" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;