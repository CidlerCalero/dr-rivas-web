"use client";
import { motion } from "framer-motion";

const ClinicHero = () => {
  return (
    <section className="py-20 bg-neutralbg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/2"
          >
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Instalaciones Modernas</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mt-4 mb-6 leading-tight">
              Un espacio diseñado para tu bienestar
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              En la Unidad de Gastroenterología Rivas Torres, combinamos la tecnología de vanguardia con un ambiente cálido y confortable. Estamos ubicados estratégicamente dentro del Centro de Hemodiálisis y Salud Renal.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/2 grid grid-cols-2 gap-4"
          >
            <div className="h-48 bg-blue-100 rounded-3xl overflow-hidden">
                <img src="/images/clinica-1.jpg" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=500"; }} />
            </div>
            <div className="h-48 bg-blue-200 rounded-3xl mt-8 overflow-hidden">
                <img src="/images/clinica-2.jpg" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=500"; }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClinicHero;