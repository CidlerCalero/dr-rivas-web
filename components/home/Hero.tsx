/// components/home/Hero.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MapPin, Award, Users, ArrowRight, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-32 pb-12 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      
      {/* Decoración de fondo */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* ========== LAYOUT MOBILE-FIRST ========== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* ========== COLUMNA IZQUIERDA: TEXTO (DESKTOP) ========== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 lg:space-y-6 order-2 lg:order-1"
          >
            {/* Badge superior */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs lg:text-sm font-bold">
                ⭐ 30+ Años de Experiencia
              </span>
            </motion.div>

            {/* Título principal */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-primary leading-tight text-center lg:text-left">
              Dr. René Ricardo <br />
              <span className="text-accent">Rivas Contreras</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary text-center lg:text-left">
              Gastroenterólogo e Internista
            </p>

            {/* Descripción - Solo desktop */}
            <p className="hidden lg:block text-lg text-gray-600 leading-relaxed max-w-lg">
              Más de 30 años combinando experiencia clínica, tecnología de vanguardia 
              y calidez humana para cuidar tu salud digestiva.
            </p>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2 lg:pt-4">
              <Link
                href="https://wa.me/50373271322?text=Hola,%20deseo%20agendar%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 lg:gap-3 bg-success text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-bold text-sm lg:text-base shadow-xl shadow-success/30 hover:shadow-2xl hover:shadow-success/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Calendar size={18} className="lg:w-5 lg:h-5" />
                Agendar Consulta
                <ArrowRight size={18} className="lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/dr-rivas-contreras"
                className="flex items-center justify-center gap-2 lg:gap-3 bg-white text-primary border-2 border-primary/20 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-bold text-sm lg:text-base hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
              >
                Conocer su Trayectoria
              </Link>
            </div>

            {/* Links sociales - Solo desktop */}
            <div className="hidden lg:flex items-center gap-4 pt-4 text-sm text-gray-500">
              <span className="font-semibold">Síguenos:</span>
              <a href="https://www.facebook.com/umgqes" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a>
              <a href="https://www.instagram.com/rener.rivas" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="opacity-40 cursor-not-allowed">YouTube</a>
            </div>
          </motion.div>

          {/* ========== COLUMNA DERECHA: IMAGEN + BADGES ========== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[450px] sm:h-[550px] lg:h-[700px] order-1 lg:order-2"
          >
            {/* Contenedor de la imagen principal */}
            <div className="relative z-0 h-full">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-1.5 lg:p-2 h-full">
              <Image
  src="/images/doctor-hero.webp"
  alt="Dr. René Ricardo Rivas Contreras - Gastroenterólogo"
  width={600}
  height={700}
  className="w-full h-full object-cover rounded-2xl object-[50%_25%] lg:object-[50%_30%]"  // ✅ Móvil: al top; Desktop: baja un 20%
  priority
/>
              </div>
            </div>

            {/* ========== BADGES FLOTANTES ========== */}

            {/* Badge: WhatsApp (superior derecha) */}
            <motion.a
              href="https://wa.me/50373271322"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-4 lg:top-8 -right-2 lg:-right-4 z-20 bg-white rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-xl lg:shadow-2xl hover:shadow-success/30 hover:scale-110 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="bg-success/10 p-2 lg:p-3 rounded-lg lg:rounded-xl group-hover:bg-success/20 transition-colors">
                  <Phone className="text-success w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div className="hidden lg:block">
                  <p className="text-xs text-gray-500 font-medium">Llámanos</p>
                  <p className="text-sm font-bold text-darktext">7327-1322</p>
                </div>
              </div>
            </motion.a>

            {/* Badge: Ubicación (centro derecha) */}
            <motion.a
              href="https://www.waze.com/ul?ll=13.711364,-89.210369&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute top-1/2 -translate-y-1/2 -right-2 lg:-right-4 z-20 bg-white rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-xl lg:shadow-2xl hover:shadow-accent/30 hover:scale-110 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="bg-accent/10 p-2 lg:p-3 rounded-lg lg:rounded-xl group-hover:bg-accent/20 transition-colors">
                  <MapPin className="text-accent w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div className="hidden lg:block">
                  <p className="text-xs text-gray-500 font-medium">Cómo llegar</p>
                  <p className="text-sm font-bold text-darktext">Ver en Waze</p>
                </div>
              </div>
            </motion.a>

            {/* Badge: Años Hospital Rosales (inferior izquierda) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute bottom-20 lg:bottom-24 -left-2 lg:-left-4 z-20 bg-white rounded-xl lg:rounded-2xl px-4 lg:px-5 py-3 lg:py-4 shadow-xl lg:shadow-2xl"
            >
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="bg-primary/10 p-1.5 lg:p-2 rounded-lg">
                  <Award className="text-primary w-4 h-4 lg:w-5 lg:h-5" />
                </div>
                <div>
                  <p className="text-xl lg:text-2xl font-black text-primary">25+</p>
                  <p className="text-[10px] lg:text-xs text-gray-600 font-medium whitespace-nowrap">Años H. Rosales</p>
                </div>
              </div>
            </motion.div>

            {/* Badge: Pacientes Atendidos (inferior derecha) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute bottom-4 lg:bottom-8 -right-2 lg:-right-4 z-20 bg-gradient-to-br from-success to-success/80 rounded-xl lg:rounded-2xl px-4 lg:px-6 py-3 lg:py-4 shadow-xl lg:shadow-2xl text-white"
            >
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="bg-white/20 p-1.5 lg:p-2 rounded-lg">
                  <Users className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-black">+10K</p>
                  <p className="text-[10px] lg:text-xs font-medium opacity-90">Pacientes</p>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* ========== DESCRIPCIÓN MOBILE (Debajo de foto) ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="lg:hidden mt-8 text-center"
        >
          <p className="text-base text-gray-600 leading-relaxed max-w-lg mx-auto px-4">
            Más de 30 años combinando experiencia clínica, tecnología de vanguardia 
            y calidez humana para cuidar tu salud digestiva.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;