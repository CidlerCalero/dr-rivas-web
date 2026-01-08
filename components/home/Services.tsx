"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Activity, 
  Search, 
  Droplets, 
  Stethoscope, 
  ShieldAlert, 
  Scissors,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Endoscopía Digestiva",
    desc: "Diagnóstico preciso y efectivo de trastornos gastrointestinales mediante tecnología de imagen avanzada.",
    icon: <Activity size={24} />,
    image: "/images/service-endoscopia.jpg",
    slug: "endoscopia"
  },
  {
    title: "Video Colonoscopía",
    desc: "Detección temprana y prevención de enfermedades del colon mediante exploración visual detallada.",
    icon: <Search size={24} />,
    image: "/images/service-colonoscopia.png",
    slug: "colonoscopia"
  },
  {
    title: "Gastrostomía (GEP)",
    desc: "Eficaz procedimiento endoscópico para garantizar una alimentación adecuada por sonda en pacientes que lo requieren.",
    icon: <Droplets size={24} />,
    image: "/images/gastrostomia.jpg",
    slug: "gastrostomia"
  },
  {
    title: "Esclerosis de Úlceras",
    desc: "Procedimiento terapéutico especializado para cerrar úlceras gástricas y prevenir sangrados digestivos.",
    icon: <ShieldAlert size={24} />,
    image: "/images/service-esclerosis.jpg",
    slug: "esclerosis"
  },
  {
    title: "Clip Hemostático",
    desc: "Colocación de dispositivos mecánicos para cerrar vasos sanguíneos y detener hemorragias con precisión.",
    icon: <Scissors size={24} />,
    image: "/images/service-clip.jpg",
    slug: "clip-hemostatico"
  },
  {
    title: "Ligadura de Várices",
    desc: "Tratamiento efectivo para venas inflamadas en el esófago, reduciendo el riesgo de complicaciones graves.",
    icon: <Stethoscope size={24} />,
    image: "/images/service-ligadura.webp",
    slug: "ligadura"
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-accent font-bold uppercase tracking-[0.2em] text-sm block mb-4"
            >
              Especialidades Médicas
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-primary tracking-tight"
            >
              Nuestros Servicios <br /> en Gastroenterología
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              href="/servicios" 
              className="group flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors"
            >
              Ver todos los detalles 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Imagen del Servicio */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* OVERLAY CORREGIDO: items-end justify-end para mover el texto a la derecha */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-end p-8">
              <span 
  className="text-white font-bold text-sm flex items-center gap-2 mb-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
>
  Saber más <ArrowRight size={16} />
</span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 relative">
                {/* Icono Flotante */}
                <div className="absolute -top-10 left-8 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>
                
                <Link 
                  href={`/servicios#${service.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={service.title}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;