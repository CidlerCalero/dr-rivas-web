"use client";
import { motion } from "framer-motion";
import { Activity, Search, ShieldCheck, Zap, Droplets, Scissors } from "lucide-react";

const allServices = [
  {
    title: "Endoscopía Digestiva Superior",
    desc: "Examen visual del esófago, estómago y duodeno para detectar gastritis, úlceras o hernias.",
    icon: <Activity />,
    color: "bg-blue-50"
  },
  {
    title: "Video Colonoscopía",
    desc: "Procedimiento vital para la detección temprana y prevención del cáncer de colon.",
    icon: <Search />,
    color: "bg-indigo-50"
  },
  {
    title: "Gastrostomía Endoscópica (GEP)",
    desc: "Colocación de sonda de alimentación de forma mínimamente invasiva.",
    icon: <ShieldCheck />,
    color: "bg-cyan-50"
  },
  {
    title: "Esclerosis de Úlceras",
    desc: "Tratamiento endoscópico para detener sangrados activos en el sistema digestivo.",
    icon: <Droplets />,
    color: "bg-red-50"
  },
  {
    title: "Ligadura de Várices Esofágicas",
    desc: "Procedimiento preventivo y terapéutico para pacientes con hipertensión portal.",
    icon: <Zap />,
    color: "bg-amber-50"
  },
  {
    title: "Colocación de Clip Hemostático",
    desc: "Técnica avanzada para el cierre de lesiones y control de hemorragias.",
    icon: <Scissors />,
    color: "bg-emerald-50"
  }
];

const ServiceCatalog = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all flex flex-col items-start text-left"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-primary mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 leading-tight">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="mt-auto pt-4 border-t border-gray-50 w-full text-xs font-bold text-accent uppercase tracking-widest">
                Procedimiento Especializado
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCatalog;