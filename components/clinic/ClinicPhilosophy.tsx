"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Award, FileCheck } from "lucide-react";

// Combinamos todo en un solo array para el visor (opcional, pero mejor para navegación)
const allImages = [
  { src: "/images/mini-suero.webp", title: "Aplicación de Suero" },
  { src: "/images/mini-recuperacion.webp", title: "Sala de Recuperación" },
  { src: "/images/mini-endoscopia.webp", title: "Endoscopía Gástrica" },
  { src: "/images/mini-escritorio.webp", title: "Dr. Rivas Contreras" },
  { src: "/images/diploma-conadem.webp", title: "Certificación CONADEM - Gastroenterología" },
  { src: "/images/certificacion.webp", title: "Licencia de Funcionamiento MINSAL" },
];

const ClinicPhilosophy = () => {
  const [selectedImg, setSelectedImg] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LADO IZQUIERDO: TEXTO Y MINI GALERÍA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-black text-primary mb-6 tracking-tight">
              30 Años de <span className="text-accent">Excelencia</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">
              Nuestra filosofía se centra en la transparencia y la seguridad del paciente.
              Cada rincón de nuestra clínica está diseñado para que su experiencia sea cómoda,
              profesional y con resultados garantizados.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {allImages.slice(0, 4).map((img, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  className="group relative h-40 rounded-3xl overflow-hidden cursor-zoom-in border-4 border-white shadow-md hover:shadow-xl transition-all"
                >
                  <Image src={img.src} alt={img.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <ZoomIn size={24} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* LADO DERECHO: CERTIFICACIONES (Efecto Stacked/Superpuesto) */}
          <div className="relative py-12 lg:py-0 h-[500px] flex items-center justify-center">
            
            {/* Diploma 1: CONADEM (Fondo/Izquierda) */}
            <motion.div
              initial={{ opacity: 0, rotate: -5, x: -20 }}
              whileInView={{ opacity: 1, rotate: -3, x: 0 }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImg(4)}
              className="absolute left-0 top-10 w-[75%] aspect-4/3 bg-white p-2 rounded-2xl shadow-2xl border border-gray-100 cursor-zoom-in transition-all z-10"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden border border-gray-50">
                <Image src={allImages[4].src} alt={allImages[4].title} fill className="object-contain" />
              </div>
              <div className="absolute top-4 left-4 bg-primary/90 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                ESPECIALIDAD MÉDICA
              </div>
            </motion.div>

            {/* Diploma 2: MINSAL (Frente/Derecha) */}
            <motion.div
              initial={{ opacity: 0, rotate: 5, x: 20 }}
              whileInView={{ opacity: 1, rotate: 3, x: 0 }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImg(5)}
              className="absolute right-0 bottom-10 w-[65%] aspect-[659/800] bg-white p-2 rounded-2xl shadow-2xl border border-gray-100 cursor-zoom-in transition-all z-20"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden border border-gray-50">
                <Image src={allImages[5].src} alt={allImages[5].title} fill className="object-contain" />
              </div>
              
              {/* Sello No. 91 mejorado */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-white p-4 rounded-3xl shadow-xl font-bold text-center rotate-12 group">
                <p className="text-2xl italic leading-none">No. 91</p>
                <p className="text-[9px] uppercase tracking-tighter mt-1">Licencia Oficial</p>
              </div>
            </motion.div>

            {/* Texto decorativo flotante */}
            <div className="absolute -top-4 right-10 flex items-center gap-2 text-gray-400">
               <FileCheck size={16} />
               <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Credenciales Verificadas</span>
            </div>
          </div>

        </div>
      </div>

      {/* VISOR DE IMÁGENES (LIGHTBOX) */}
      <AnimatePresence>
        {selectedImg !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-primary/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setSelectedImg(null)} 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full z-30"
            >
              <X size={32} />
            </button>

            <div className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center gap-6">
              <div className="relative w-full h-[70vh]">
                <Image
                  src={allImages[selectedImg].src}
                  alt={allImages[selectedImg].title}
                  fill className="object-contain px-4"
                />
              </div>
              <div className="text-center bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10">
                <p className="text-white text-lg md:text-xl font-bold tracking-wide">
                  {allImages[selectedImg].title}
                </p>
              </div>
            </div>

            {/* Navegación */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-10 pointer-events-none">
              <button 
                onClick={() => setSelectedImg(selectedImg === 0 ? allImages.length - 1 : selectedImg - 1)} 
                className="text-white/30 hover:text-white pointer-events-auto p-4 transition-all"
              >
                <ChevronLeft size={60} />
              </button>
              <button 
                onClick={() => setSelectedImg(selectedImg === allImages.length - 1 ? 0 : selectedImg + 1)} 
                className="text-white/30 hover:text-white pointer-events-auto p-4 transition-all"
              >
                <ChevronRight size={60} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ClinicPhilosophy;