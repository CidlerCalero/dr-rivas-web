"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "María López",
    text: "El Dr. Rivas Contreras me brindó una atención excelente. Su diagnóstico fue preciso y me explicó todo con mucha paciencia. Lo recomiendo totalmente.",
    date: "Paciente desde 2022"
  },
  {
    name: "Carlos Mendoza",
    text: "Excelente profesional. El procedimiento de endoscopía fue rápido y sin molestias. El staff de la clínica es muy amable y atento.",
    date: "Paciente desde 2023"
  },
  {
    name: "Elena de Guevara",
    text: "Me sentí en manos expertas desde la primera consulta. La calidez humana del Dr. Rivas y su equipo marca la diferencia.",
    date: "Paciente desde 2021"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Quote className="mx-auto text-accent/20 mb-4" size={48} />
          <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Testimonios</h2>
          <p className="text-4xl font-extrabold text-darktext tracking-tight">Voces de Confianza</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 rounded-3xl bg-neutralbg border border-gray-50 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed mb-6">&quot;{review.text}&quot;</p>
              </div>
              <div>
                <div className="font-bold text-primary">{review.name}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{review.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;