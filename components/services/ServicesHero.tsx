"use client";
import { motion } from "framer-motion";
import { Activity, Shield, Clock, Award, TrendingUp, Users } from "lucide-react";

const highlights = [
  { icon: <Activity size={20} />, text: "Tecnología de Vanguardia" },
  { icon: <Shield size={20} />, text: "Protocolos de Seguridad" },
  { icon: <Clock size={20} />, text: "Atención Personalizada" }
];

const stats = [
  {
    icon: <Award className="text-accent" size={24} />, // Reducido para móvil
    number: "6",
    label: "Procedimientos"
  },
  {
    icon: <Users className="text-success" size={24} />,
    number: "+10K",
    label: "Pacientes"
  },
  {
    icon: <TrendingUp className="text-primary" size={24} />,
    number: "30+",
    label: "Experiencia"
  }
];

const ServicesHero = () => {
  return (
    <section className="relative py-16 lg:py-32 bg-gradient-to-br from-primary via-primary to-secondary text-white overflow-hidden">
      
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* BADGE SUPERIOR - Más pequeño en móvil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 lg:mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs lg:text-sm font-bold backdrop-blur-sm">
            💼 Servicios Profesionales
          </span>
        </motion.div>

        {/* TÍTULO PRINCIPAL - Ajuste de tamaño responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-6 lg:mb-8"
        >
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4 lg:mb-6 leading-tight tracking-tight">
            Servicios Médicos <br className="hidden lg:block" />
            <span className="text-accent">Especializados</span>
          </h1>
          <p className="text-base lg:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto px-4 lg:px-0">
            Diagnóstico preciso y tratamiento avanzado respaldado por el <span className="font-bold text-white">Dr. René Rivas Contreras</span>.
          </p>
        </motion.div>

        {/* HIGHLIGHTS - Ocultos en móvil para brevedad */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden md:flex flex-wrap justify-center gap-6 mb-16"
        >
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
            >
              <div className="text-accent">{highlight.icon}</div>
              <span className="font-bold text-sm">{highlight.text}</span>
            </div>
          ))}
        </motion.div>

        {/* STATS CARDS - Diseño compacto en móvil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-3 md:gap-6 max-w-4xl mx-auto" // 3 columnas siempre
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl lg:rounded-3xl p-3 lg:p-8 border border-white/20 text-center"
            >
              <div className="bg-white/20 w-10 h-10 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-2 lg:mb-4">
                <div className="scale-75 lg:scale-100">{stat.icon}</div>
              </div>
              <p className="text-xl lg:text-4xl font-black mb-0.5 lg:mb-2">{stat.number}</p>
              <p className="text-blue-100 text-[10px] lg:text-sm font-bold uppercase lg:capitalize tracking-tighter lg:tracking-normal">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* SCROLL INDICATOR - Oculto en móvil */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="hidden lg:block text-center mt-16"
        >
          <p className="text-blue-200 text-sm font-medium mb-3">
            Explora nuestros procedimientos
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="inline-block"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-12 lg:h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default ServicesHero;