"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award, GraduationCap, Users, Calendar, ArrowRight, Stethoscope } from "lucide-react";

const DrHeroProfile = () => {
  return (
    // Reducimos pt-32 a pt-24 en desktop para que no haya tanto hueco arriba
    <section className="relative pt-20 lg:pt-24 pb-12 lg:pb-32 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      
      {/* Decoración de fondo */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========== ENCABEZADO MÓVIL (Solo visible en < lg) ========== */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden text-center mb-6 space-y-2"
        >
          <p className="text-accent font-black text-sm uppercase tracking-widest">Hola, soy el</p>
          <h1 className="text-4xl font-black text-primary leading-tight">
            Dr. René Ricardo <br />
            <span className="text-accent">Rivas Contreras</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-secondary font-bold text-lg">
            <Stethoscope size={18} className="text-accent" />
            <p>Gastroenterólogo e Internista</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* ========== COLUMNA IMAGEN (order-1 en móvil para que esté arriba) ========== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative order-1 lg:order-2"
          >
            {/* Círculo de fondo que ahora se adapta mejor al tamaño */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[320px] h-[320px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-accent/20 to-primary/10 rounded-full blur-sm"></div>
            </div>

            {/* Contenedor de la imagen - Aumentamos el max-w en desktop */}
            <div className="relative z-10 flex items-end justify-center">
              <Image
                src="/images/doctor-hero.png"
                alt="Dr. René Ricardo Rivas Contreras - Gastroenterólogo"
                width={700}
                height={800}
                className="relative z-10 w-full max-w-[420px] lg:max-w-[580px] h-auto object-center transition-all duration-500"
                priority
              />
            </div>

            {/* Badges flotantes (Ajustados para no tapar tanto en móvil) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-10 right-0 lg:right-4 bg-white rounded-2xl px-4 lg:px-6 py-3 lg:py-4 shadow-2xl z-20 scale-90 lg:scale-110"
            >
              <div className="flex items-center gap-2 lg:gap-3">
                <span className="text-2xl lg:text-3xl">⭐</span>
                <div>
                  <p className="text-xl lg:text-3xl font-black text-primary leading-none">30</p>
                  <p className="text-[10px] text-gray-600 font-bold uppercase">Años Exp.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-28 lg:bottom-32 left-0 lg:-left-4 bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl px-4 lg:px-6 py-3 lg:py-4 shadow-2xl z-20 scale-90 lg:scale-100"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-sm lg:text-lg font-black leading-tight">Hospital Rosales</p>
                  <p className="text-[10px] lg:text-xs opacity-90 uppercase font-bold">Staff 25+ años</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute bottom-4 right-0 lg:right-8 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl px-5 lg:px-6 py-3 lg:py-4 shadow-2xl z-20 scale-90 lg:scale-100"
            >
              <div className="text-center">
                <p className="text-xl lg:text-3xl font-black">+10K</p>
                <p className="text-[10px] opacity-90 font-bold uppercase">Pacientes</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* ========== COLUMNA TEXTO (order-2 en móvil) ========== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:pr-8 order-2 lg:order-1"
          >
            {/* Títulos Desktop (Ocultos en móvil porque ya están arriba) */}
            <div className="hidden lg:block space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest">
                  👨‍⚕️ Especialista Senior
                </span>
              </motion.div>
              <p className="text-accent font-black text-xl uppercase tracking-widest">Hola, soy el</p>
              <h1 className="text-6xl xl:text-7xl font-black text-primary leading-tight">
                Dr. René Ricardo <br />
                <span className="text-accent">Rivas Contreras</span>
              </h1>
              <p className="text-2xl font-bold text-secondary flex items-center gap-3">
                <Stethoscope className="text-accent" />
                Gastroenterólogo e Internista
              </p>
            </div>

            {/* Descripción - Reducimos el mt en móvil */}
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed text-center lg:text-left mt-0 lg:mt-6">
              Con más de 30 años de experiencia, he dedicado mi carrera a brindar 
              atención médica de excelencia, combinando conocimiento científico con 
              un trato humano que marca la diferencia en la vida de cada paciente.
            </p>

            {/* Mini Stats Inline */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 pt-2">
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                <Calendar className="text-primary" size={24} />
                <div>
                  <p className="text-xl font-black text-primary leading-none">30+</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">Años Exp.</p>
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                <Users className="text-green-600" size={24} />
                <div>
                  <p className="text-xl font-black text-green-600 leading-none">+10K</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">Pacientes</p>
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                <Award className="text-accent" size={24} />
                <div>
                  <p className="text-xl font-black text-accent leading-none">+10</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">Certific.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="https://wa.me/50373271322?text=Hola,%20deseo%20agendar%20una%20consulta"
                target="_blank"
                className="group flex items-center justify-center gap-3 bg-success text-white px-8 py-4 rounded-xl font-black text-base shadow-xl shadow-success/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <Calendar size={20} />
                Agendar Consulta
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#trayectoria"
                className="flex items-center justify-center gap-3 bg-white text-primary border-2 border-primary/20 px-8 py-4 rounded-xl font-black text-base hover:bg-primary/5 transition-all duration-300 shadow-sm"
              >
                <GraduationCap size={20} />
                Ver Trayectoria
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Ondas decorativas al fondo */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default DrHeroProfile;