"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award, GraduationCap, Users, Calendar, ArrowRight } from "lucide-react";

const DrHeroProfile = () => {
  return (
    // He ajustado el pt-20 a pt-24 para que en móvil no choque con el navbar al ser el primer elemento la imagen
    <section className="relative pt-24 pb-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      
      {/* Decoración de fondo - Círculos */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* ========== COLUMNA TEXTO: Ahora order-2 en móvil, order-1 en Desktop ========== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:pr-8 order-2 lg:order-1"
          >
            {/* Badge Superior */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold">
                👨‍⚕️ Especialista Senior
              </span>
            </motion.div>

            {/* Saludo */}
            <div className="space-y-2 text-center lg:text-left">
              <p className="text-accent font-bold text-lg">Hola, soy el</p>
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black text-primary leading-tight">
                Dr. René Ricardo{" "}
                <span className="text-accent block">Rivas Contreras</span>
              </h1>
            </div>

            {/* Especialidad */}
            <p className="text-xl lg:text-2xl font-bold text-secondary text-center lg:text-left">
              Gastroenterólogo e Internista
            </p>

            {/* Descripción */}
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
              Con más de 30 años de experiencia, he dedicado mi carrera a brindar 
              atención médica de excelencia, combinando conocimiento científico con 
              un trato humano que marca la diferencia en la vida de cada paciente.
            </p>

            {/* Mini Stats Inline */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Calendar className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-2xl font-black text-primary">30+</p>
                  <p className="text-xs text-gray-500 font-medium">Años Experiencia</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-green-500/10 p-2 rounded-lg">
                  <Users className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-2xl font-black text-green-600">+10K</p>
                  <p className="text-xs text-gray-500 font-medium">Pacientes</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <Award className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-2xl font-black text-accent">+10</p>
                  <p className="text-xs text-gray-500 font-medium">Certificaciones</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="https://wa.me/50373271322?text=Hola,%20deseo%20agendar%20una%20consulta%20con%20el%20Dr.%20Rivas"
                target="_blank"
                className="group flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Calendar size={20} />
                Agendar Consulta
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#trayectoria"
                className="flex items-center justify-center gap-3 bg-white text-primary border-2 border-primary/20 px-8 py-4 rounded-xl font-bold text-base hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
              >
                <GraduationCap size={20} />
                Ver Trayectoria
              </a>
            </div>

          </motion.div>

          {/* ========== COLUMNA IMAGEN: Ahora order-1 en móvil, order-2 en Desktop ========== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative order-1 lg:order-2"
          >
            {/* Círculo de fondo grande */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] bg-gradient-to-br from-accent/20 to-primary/10 rounded-full blur-sm"></div>
            </div>

            {/* Contenedor de la imagen principal */}
            <div className="relative z-10 flex items-end justify-center">
              <Image
                src="/images/doctor-hero.png"
                alt="Dr. René Ricardo Rivas Contreras - Gastroenterólogo"
                width={600}
                height={700}
                className="relative z-10 w-full max-w-[400px] lg:max-w-[500px] h-auto object-center"
                priority
              />
            </div>

            {/* Badges flotantes ajustados para móvil */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-10 right-0 lg:right-8 bg-white rounded-2xl px-4 lg:px-6 py-3 lg:py-4 shadow-2xl z-20 scale-90 lg:scale-100"
            >
              <div className="flex items-center gap-2 lg:gap-3">
                <span className="text-2xl lg:text-3xl">⭐</span>
                <div>
                  <p className="text-xl lg:text-3xl font-black text-primary leading-none">30</p>
                  <p className="text-[10px] text-gray-600 font-medium uppercase">Años Exp.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-24 left-0 bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl px-4 lg:px-6 py-3 lg:py-4 shadow-2xl z-20 scale-90 lg:scale-100"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Award size={20} />
                </div>
                <div>
                  <p className="text-sm lg:text-lg font-black leading-tight">Hospital Rosales</p>
                  <p className="text-[10px] lg:text-xs opacity-90 uppercase">Staff 25+ años</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute bottom-4 right-0 lg:right-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl px-5 lg:px-6 py-3 lg:py-4 shadow-2xl z-20 scale-90 lg:scale-100"
            >
              <div className="text-center">
                <p className="text-xl lg:text-3xl font-black">+10K</p>
                <p className="text-[10px] opacity-90 font-medium uppercase">Pacientes</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Ondas decorativas al fondo */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default DrHeroProfile;