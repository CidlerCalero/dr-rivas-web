"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ClinicHero = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-end overflow-hidden bg-primary">
      <Image 
        src="/images/staff-full.webp" 
        alt="Equipo Completo Unidad de Gastroenterología"
        fill
        className="object-cover object-[center_40%]"
        priority
      />
      {/* Gradiente para que el texto resalte sobre la foto */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Nuestra <span className="text-accent">Clínica</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-50 mt-4 font-medium italic">
            &quot;Un equipo humano comprometido con su salud digestiva&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClinicHero;