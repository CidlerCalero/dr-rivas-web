"use client";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-900/20 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
        >
          Estamos listos para ayudarte
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-blue-100 leading-relaxed"
        >
          Agenda tu cita o resuelve tus dudas a través de nuestros canales oficiales de atención.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactHero;