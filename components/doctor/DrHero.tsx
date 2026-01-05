"use client";
import { motion } from "framer-motion";
import { Award, GraduationCap, Microscope } from "lucide-react";

const DrHero = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <h1 className="text-5xl font-extrabold text-primary mb-6 leading-tight">
              Dr. René Ricardo <br /> Rivas Contreras
            </h1>
            <p className="text-xl text-secondary font-bold mb-8 uppercase tracking-widest">
              Gastroenterólogo e Internista
            </p>
            <p className="text-gray-600 leading-relaxed mb-10 text-lg">
              Con más de tres décadas de experiencia, el Dr. Rivas ha dedicado su carrera a la excelencia clínica en el Hospital Nacional Rosales y en su práctica privada, convirtiéndose en un referente de la salud digestiva en El Salvador.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <GraduationCap />, label: "Doctor en Medicina", sub: "UES 1993" },
                { icon: <Microscope />, label: "Gastroenterología", sub: "Hosp. México" },
                { icon: <Award />, label: "Especialista", sub: "Medicina Interna" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center p-4 bg-neutralbg rounded-2xl text-center">
                  <div className="text-accent mb-2">{item.icon}</div>
                  <div className="text-sm font-bold text-primary leading-tight">{item.label}</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-blue-50">
              <img src="/images/doctor-hero.webp" alt="Dr. Rivas" className="w-full h-auto" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DrHero;