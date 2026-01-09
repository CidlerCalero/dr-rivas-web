"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, HeartPulse, Microscope, ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";

// 1. Definimos la estructura de los pilares usando LucideIcon como tipo
interface Pillar {
  title: string;
  desc: string;
  icon: LucideIcon; // Pasamos el componente, no el elemento ya renderizado
}

const pillars: Pillar[] = [
  {
    title: "Tecnología de Punta",
    desc: "Contamos con equipos endoscópicos de última generación (2024) para diagnósticos rápidos y sin molestias.",
    icon: Microscope,
  },
  {
    title: "Trato Humanizado",
    desc: "Para nosotros, usted no es un número. Dedicamos el tiempo necesario para escuchar y explicar cada detalle.",
    icon: HeartPulse,
  },
  {
    title: "Trayectoria Comprobada",
    desc: "Más de 30 años de experiencia y miles de pacientes satisfechos respaldan nuestra ética profesional.",
    icon: Award,
  },
];

const Experience = () => {
  return (
    <section className="py-24 bg-neutralbg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* LADO IZQUIERDO: COMPOSICIÓN DE IMAGEN */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <Image 
                src="/images/doctor-office.jpg" 
                alt="Dr. Rivas en su clínica"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
             <div className="absolute bottom-10 right-10 bg-white p-6 rounded-3xl shadow-2xl border border-blue-50 flex items-center gap-4">
  <p className="text-4xl font-black text-primary leading-none">30</p>
  <div className="flex flex-col leading-tight">
    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Años de</p>
    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Excelencia</p>
  </div>
</div>
            </div>
          </motion.div>

          {/* LADO DERECHO: CONTENIDO Y PILARES */}
          <div className="lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-bold uppercase tracking-[0.2em] text-sm block mb-4"
            >
              Nuestra Experiencia
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-primary leading-tight mb-8"
            >
              Su salud digestiva en <br />
              <span className="text-accent">manos expertas</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-600 text-lg mb-12 leading-relaxed"
            >
              En la Unidad de Gastroenterología Rivas Torres, combinamos décadas de conocimiento clínico con la tecnología más avanzada para brindarle una atención integral y segura.
            </motion.p>

            <div className="space-y-8">
              {pillars.map((pillar, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  {/* 2. Ahora renderizamos el icono directamente como un componente */}
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-300">
                    <pillar.icon 
                      size={28} 
                      className="text-primary group-hover:text-white transition-colors" 
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-12"
            >
              <Link 
                href="/dr-rivas-contreras" 
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-accent transition-all shadow-lg hover:shadow-accent/30"
              >
                Conocer más del Doctor <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;