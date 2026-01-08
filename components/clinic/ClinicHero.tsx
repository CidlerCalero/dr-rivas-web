"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ClinicHero = () => {
  return (
    /* 
       CAMBIO CLAVE: 
       1. Quitamos pt-32.
       2. Agregamos mt-[80px] (móvil) y lg:mt-[120px] (desktop) para "esquivar" el Navbar.
       3. Ajustamos el h-[vh] para que no quede demasiado largo después del margen.
    */
    <section className="relative w-full h-[50vh] md:h-[70vh] flex items-end overflow-hidden bg-primary mt-[80px] lg:mt-[120px]">
      <Image 
        src="/images/staff-full.webp" 
        alt="Equipo Completo Unidad de Gastroenterología"
        fill
        /* 
           Ajustamos el foco al 30% (más arriba) para que 
           al bajar el cuadro, las caras queden centradas. 
        */
        className="object-cover object-[center_30%]" 
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