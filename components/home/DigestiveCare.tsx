"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Play, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

const DigestiveCare = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* TEXTO E INFO (IZQUIERDA) */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-bold uppercase tracking-[0.2em] text-sm block mb-4"
            >
              Educación para el Paciente
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-primary leading-tight mb-8"
            >
              Conoce cómo Cuidar <br />
              <span className="text-accent">tu Sistema Digestivo</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-600 text-lg mb-8 leading-relaxed"
            >
              La prevención es la mejor medicina. Nuestro equipo no solo trata enfermedades, sino que te brinda las herramientas necesarias para mantener un colon y estómago saludables día a día.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                "Alimentación balanceada",
                "Hidratación constante",
                "Detección temprana",
                "Hábitos de vida saludables"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-success" size={20} />
                  <span className="font-semibold text-primary">{item}</span>
                </div>
              ))}
            </div>

            {/* Mini-cards interactivas (como en el diseño original) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 p-6 bg-neutralbg rounded-3xl border border-gray-100 group hover:border-accent transition-colors">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                  <Play size={24} fill="currentColor" />
                </div>
                <h4 className="font-bold text-primary mb-2">Video Tutorial</h4>
                <p className="text-xs text-gray-400">Consejos prácticos en 2 minutos</p>
              </div>
              <div className="flex-1 p-6 bg-neutralbg rounded-3xl border border-gray-100 group hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <FileText size={24} />
                </div>
                <h4 className="font-bold text-primary mb-2">Guía de Salud</h4>
                <p className="text-xs text-gray-400">Descarga nuestro PDF informativo</p>
              </div>
            </div>
          </div>

          {/* IMAGEN DEL PERSONAL (DERECHA) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 order-1 lg:order-2 relative"
          >
            {/* Círculo decorativo azul detrás */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full -z-10 blur-3xl opacity-50"></div>
            
            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl">
              <Image 
                src="/images/staff-nurse.webp" 
                alt="Personal de enfermería y atención"
                width={600}
                height={750}
                className="w-full h-auto object-cover"
              />
              {/* Overlay suave inferior */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DigestiveCare;