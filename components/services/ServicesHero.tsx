"use client";
import { motion } from "framer-motion";
import { Activity, Shield, Clock, Award, TrendingUp, Users } from "lucide-react";

const highlights = [
  {
    icon: <Activity size={20} />,
    text: "Tecnología de Vanguardia"
  },
  {
    icon: <Shield size={20} />,
    text: "Protocolos de Seguridad"
  },
  {
    icon: <Clock size={20} />,
    text: "Atención Personalizada"
  }
];

const stats = [
  {
    icon: <Award className="text-accent" size={28} />,
    number: "6",
    label: "Procedimientos Especializados"
  },
  {
    icon: <Users className="text-success" size={28} />,
    number: "+10K",
    label: "Pacientes Tratados"
  },
  {
    icon: <TrendingUp className="text-primary" size={28} />,
    number: "30+",
    label: "Años de Experiencia"
  }
];

const ServicesHero = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-primary via-primary to-secondary text-white overflow-hidden">
      
      {/* Decoración de fondo - Círculos blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"></div>
      
      {/* Patrón de puntos decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* BADGE SUPERIOR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold backdrop-blur-sm">
            💼 Nuestros Servicios
          </span>
        </motion.div>

        {/* TÍTULO PRINCIPAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
            Servicios Médicos
            <br />
            <span className="text-accent">Especializados</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Diagnóstico preciso y tratamiento avanzado para tu salud digestiva, 
            respaldado por 30 años de experiencia del{" "}
            <span className="font-bold text-white">Dr. René Rivas Contreras</span>
          </p>
        </motion.div>

        {/* HIGHLIGHTS EN LÍNEA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
            >
              <div className="text-accent">
                {highlight.icon}
              </div>
              <span className="font-bold text-sm">{highlight.text}</span>
            </div>
          ))}
        </motion.div>

        {/* STATS CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all group text-center"
            >
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                {stat.icon}
              </div>
              <p className="text-4xl font-black mb-2">{stat.number}</p>
              <p className="text-blue-100 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-blue-200 text-sm font-medium mb-3">
            Explora nuestros procedimientos especializados
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

      {/* Onda decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default ServicesHero;