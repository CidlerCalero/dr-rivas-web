"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, PlayCircle, ArrowRight, HeartPulse, ShieldCheck, Download, X, FileText, BookOpen } from "lucide-react";
import Link from "next/link";

interface Guide {
  id: string;
  title: string;
  description: string;
  // Clases base para la tarjeta
  bgColor: string;
  borderColor: string;
  hoverBorder: string;
  // Clases específicas (Mapeo para Tailwind JIT)
  iconBg: string;
  iconText: string;
  titleText: string;
  btnBg: string;
  btnHover: string;
  btnLight: string;
  btnLightText: string;
  headerGradient: string; // Nueva: para el fondo del modal
  images: { src: string; alt: string }[];
}

const guides: Guide[] = [
  {
    id: "colonoscopia",
    title: "Colonoscopía",
    description: "Preparación para Colonoscopía",
    bgColor: "bg-blue-50/50",
    borderColor: "border-blue-100",
    hoverBorder: "hover:border-blue-300",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    titleText: "text-blue-700",
    btnBg: "bg-blue-500",
    btnHover: "hover:bg-blue-600",
    btnLight: "bg-blue-50",
    btnLightText: "text-blue-600",
    headerGradient: "from-blue-500 to-blue-600",
    images: [
      { src: "/guias/colonoscopia-1.jpg", alt: "Preparación Colonoscopía - Paso 1" },
      { src: "/guias/colonoscopia-2.jpg", alt: "Preparación Colonoscopía - Paso 2" },
      { src: "/guias/colonoscopia-3.jpg", alt: "Preparación Colonoscopía - Paso 3" }
    ]
  },
  {
    id: "endoscopia",
    title: "Endoscopía",
    description: "Preparación para Endoscopía",
    bgColor: "bg-green-50/50",
    borderColor: "border-green-100",
    hoverBorder: "hover:border-green-300",
    iconBg: "bg-green-100",
    iconText: "text-green-600",
    titleText: "text-green-700",
    btnBg: "bg-green-500",
    btnHover: "hover:bg-green-600",
    btnLight: "bg-green-50",
    btnLightText: "text-green-600",
    headerGradient: "from-green-500 to-green-600",
    images: [
      { src: "/guias/endoscopia-1.jpg", alt: "Preparación Endoscopía - Paso 1" },
      { src: "/guias/endoscopia-2.jpg", alt: "Preparación Endoscopía - Paso 2" },
      { src: "/guias/endoscopia-3.jpg", alt: "Preparación Endoscopía - Paso 3" }
    ]
  },
  {
    id: "biopsias",
    title: "Biopsias",
    description: "¿Qué son las Biopsias?",
    bgColor: "bg-purple-50/50",
    borderColor: "border-purple-100",
    hoverBorder: "hover:border-purple-300",
    iconBg: "bg-purple-100",
    iconText: "text-purple-600",
    titleText: "text-purple-700",
    btnBg: "bg-purple-500",
    btnHover: "hover:bg-purple-600",
    btnLight: "bg-purple-50",
    btnLightText: "text-purple-600",
    headerGradient: "from-purple-500 to-purple-600",
    images: [
      { src: "/guias/biopsias-1.jpg", alt: "Información sobre Biopsias - Parte 1" },
      { src: "/guias/biopsias-2.jpg", alt: "Información sobre Biopsias - Parte 2" }
    ]
  }
];

const DigestiveCare = () => {
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  const handleDownloadImage = (imageSrc: string, imageName: string) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAll = (guide: Guide) => {
    guide.images.forEach((img, index) => {
      setTimeout(() => {
        const imageName = `${guide.id}-${index + 1}.jpg`;
        handleDownloadImage(img.src, imageName);
      }, index * 300);
    });
  };

  return (
    <section className="relative bg-blue-50/30 overflow-hidden pt-12 pb-24 lg:pt-24 lg:pb-32">
      
      {/* DECORACIÓN DE FONDO */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/60 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* COLUMNA IMAGEN */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end lg:order-2 mb-[-60px] lg:mb-0 z-0 lg:z-10"
          >
            <div className="relative w-[320px] h-[380px] sm:w-[400px] sm:h-[450px] lg:w-[550px] lg:h-[650px]">
              <div className="absolute inset-0 m-auto w-[280px] h-[280px] lg:w-[450px] lg:h-[450px] bg-gradient-to-tr from-blue-100 to-white rounded-full shadow-inner" />
              <Image 
                src="/images/staff-nurse.webp" 
                alt="Enfermera especialista"
                fill
                className="object-contain drop-shadow-2xl z-10"
                priority
              />
          {/* BADGE 1: PACIENTES FELICES */}
              {/* CAMBIO: En móvil (top-4 left-40) para no tapar cara. En desktop (top-20 right-10) */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 left 40 lg:top-20 lg:right-10 bg-white p-2.5 lg:p-3 rounded-2xl shadow-lg flex items-center gap-3 z-20 max-w-[140px] lg:max-w-[160px]"
              >
                <div className="bg-red-100 p-1.5 lg:p-2 rounded-full text-red-500">
                  <HeartPulse size={18} className="lg:w-5 lg:h-5" />
                </div>
                <div>
                  <p className="text-[10px] lg:text-xs text-gray-500 font-medium">Pacientes</p>
                  <p className="text-xs lg:text-sm font-bold text-gray-800">10k+ Felices</p>
                </div>
              </motion.div>

              {/* BADGE 2: ATENCIÓN SEGURA */}
              {/* CAMBIO: hidden en móvil para limpiar la vista. Visible solo en lg */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="hidden lg:flex absolute bottom-32 -left-8 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg items-center gap-3 z-20"
              >
                 <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <ShieldCheck size={20} />
                </div>
                <p className="text-sm font-bold text-primary">Atención Segura</p>
              </motion.div>
            </div>
          </motion.div>

          {/* COLUMNA CONTENIDO */}
          <div className="w-full lg:w-1/2 relative z-10 lg:pr-12 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none rounded-3xl p-6 sm:p-8 lg:p-0 shadow-xl lg:shadow-none border border-white/50 lg:border-none"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-bold text-xs tracking-wider uppercase mb-4">
                Educación al Paciente
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary leading-tight mb-6">
                Tu salud digestiva <br />
                <span className="text-accent relative inline-block">
                  es nuestra prioridad
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                No solo tratamos enfermedades, creamos bienestar. Nuestro equipo te brinda las herramientas para un sistema digestivo saludable.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {["Alimentación balanceada", "Detección temprana", "Hábitos saludables", "Seguimiento continuo"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                    <span className="text-gray-700 font-medium text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              {/* Botones Principales */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto" className="inline-flex justify-center items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 hover:scale-105 transition-all shadow-lg shadow-accent/20">
                  Agendar Cita <ArrowRight size={18} />
                </Link>
                <Link href="/servicios" className="inline-flex justify-center items-center gap-2 bg-white text-primary border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 hover:border-accent/50 transition-all">
                  <PlayCircle size={18} className="text-accent" />
                  Ver Servicios
                </Link>
              </div>

              {/* GUÍAS INSTRUCTIVAS */}
              <div className="mt-8 pt-6 border-t border-gray-200/60">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-black text-gray-500 uppercase tracking-wider">📚 Guías de Preparación</h3>
                  <span className="text-xs text-accent font-bold bg-accent/10 px-2 py-1 rounded-full">Gratis</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {guides.map((guide) => (
                    <button
                      key={guide.id}
                      onClick={() => setSelectedGuide(guide)}
                      className={`group relative flex flex-col items-center gap-4 p-5 rounded-2xl ${guide.bgColor} border-2 ${guide.borderColor} hover:bg-white hover:shadow-2xl ${guide.hoverBorder} transition-all cursor-pointer overflow-hidden`}
                    >
                      <div className={`absolute top-0 right-0 w-24 h-24 ${guide.iconBg} opacity-20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
                      
                      <div className={`${guide.iconBg} p-4 rounded-2xl ${guide.iconText} group-hover:scale-110 group-hover:rotate-3 transition-all shadow-md relative z-10`}>
                        <BookOpen size={32} strokeWidth={2.5} />
                      </div>
                      <div className="flex flex-col text-center relative z-10">
                        <span className={`text-base font-black ${guide.titleText} mb-2`}>
                          {guide.title}
                        </span>
                        <span className="text-xs text-gray-600 font-bold bg-white/80 px-3 py-1 rounded-full">
                          {guide.images.length} imágenes
                        </span>
                      </div>
                      <div className={`absolute bottom-3 right-3 ${guide.btnBg} text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}>
                        <ArrowRight size={16} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MODAL DE GUÍAS */}
      <AnimatePresence>
        {selectedGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGuide(null)}
            className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header del Modal con gradiente dinámico */}
              <div className={`bg-gradient-to-r ${selectedGuide.headerGradient} p-6 rounded-t-3xl text-white relative`}>
                <button
                  onClick={() => setSelectedGuide(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
                <h3 className="text-2xl font-black mb-1">{selectedGuide.description}</h3>
                <p className="text-sm opacity-90">{selectedGuide.images.length} imágenes disponibles</p>
              </div>

              <div className="p-6">
                <button
                  onClick={() => handleDownloadAll(selectedGuide)}
                  className={`w-full mb-6 flex items-center justify-center gap-2 ${selectedGuide.btnBg} ${selectedGuide.btnHover} text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg`}
                >
                  <Download size={20} />
                  Descargar Todas las Imágenes
                </button>

                <div className="space-y-6">
                  {selectedGuide.images.map((image, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                      <div className="relative aspect-[3/4] sm:aspect-video">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-contain bg-white"
                        />
                      </div>
                      <div className="p-4 flex items-center justify-between">
                        <div>
                          <p className="font-bold text-gray-800 text-sm">Imagen {index + 1}</p>
                          <p className="text-xs text-gray-500">{image.alt}</p>
                        </div>
                        <button
                          onClick={() => handleDownloadImage(image.src, `${selectedGuide.id}-${index + 1}.jpg`)}
                          className={`flex items-center gap-2 ${selectedGuide.btnLight} ${selectedGuide.btnLightText} px-4 py-2 rounded-lg font-bold text-sm hover:opacity-80 transition-all`}
                        >
                          <Download size={16} />
                          Descargar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DigestiveCare;