"use client";
import React from "react";
import { ArrowRight, Activity, Search, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Endoscopía Digestiva",
    desc: "Diagnóstico preciso del esófago, estómago y duodeno con tecnología avanzada.",
    icon: <Activity className="text-accent" />,
  },
  {
    title: "Video Colonoscopía",
    desc: "Detección temprana de enfermedades del colon y recto para prevención de cáncer.",
    icon: <Search className="text-accent" />,
  },
  {
    title: "Gastrostomía (GEP)",
    desc: "Procedimiento especializado para alimentación segura por sonda.",
    icon: <ShieldCheck className="text-accent" />,
  },
  // Agregaremos más en la página completa de servicios para no dejar fuera los demás servicios
];

const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Nuestros Servicios</h2>
          <p className="text-4xl font-extrabold text-darktext tracking-tight">
            Especialidades Gastroenterológicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl border border-gray-100 bg-neutralbg hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <button className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                Saber más <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;