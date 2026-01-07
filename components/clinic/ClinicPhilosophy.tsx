"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const miniGallery = [
  { src: "/images/mini-suero.webp", title: "Aplicación de Suero" },
  { src: "/images/mini-recuperacion.webp", title: "Sala de Recuperación" },
  { src: "/images/mini-endoscopia.webp", title: "Endoscopía Gástrica" },
  { src: "/images/mini-escritorio.webp", title: "Dr. Rivas Contreras" },
];

const ClinicPhilosophy = () => {
  const [selectedImg, setSelectedImg] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LADO IZQUIERDO: TEXTO Y MINI GALERÍA */}
          <div>
            <h2 className="text-4xl font-black text-primary mb-6">30 Años de Excelencia</h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Nuestra filosofía se centra en la transparencia y la seguridad del paciente. 
              Cada rincón de nuestra clínica está diseñado para que su experiencia sea cómoda, 
              profesional y con resultados garantizados.
            </p>

            {/* Mini Galería de 4 fotos con visor */}
            <div className="grid grid-cols-2 gap-4">
              {miniGallery.map((img, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedImg(i)}
                  className="group relative h-40 rounded-3xl overflow-hidden cursor-zoom-in border-4 border-white shadow-md"
                >
                  <Image src={img.src} alt={img.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <ZoomIn size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LADO DERECHO: CERTIFICACIÓN REAL */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[450px] aspect-[659/800] rounded-3xl overflow-hidden shadow-2xl border-8 border-neutralbg">
              <Image 
                src="/images/certificacion.webp" 
                alt="Certificación Ministerio de Salud" 
                fill 
                className="object-contain bg-white"
              />
            </div>
            {/* Badge decorativo */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-3xl shadow-xl font-bold text-center rotate-12">
              <p className="text-2xl italic">No. 91</p>
              <p className="text-[10px] uppercase">Licencia de Funcionamiento</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* VISOR DE IMÁGENES (LIGHTBOX) */}
      <AnimatePresence>
        {selectedImg !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-20"
          >
            <button onClick={() => setSelectedImg(null)} className="absolute top-10 right-10 text-white hover:text-accent transition-colors">
              <X size={40} />
            </button>
            
            <div className="relative w-full max-w-5xl aspect-video">
              <Image 
                src={miniGallery[selectedImg].src} 
                alt={miniGallery[selectedImg].title} 
                fill className="object-contain" 
              />
              <p className="absolute -bottom-12 left-0 right-0 text-center text-white text-xl font-bold tracking-wide">
                {miniGallery[selectedImg].title}
              </p>
            </div>

            {/* Navegación del Visor */}
            <div className="absolute bottom-10 flex gap-10">
              <button 
                onClick={() => setSelectedImg(selectedImg === 0 ? miniGallery.length - 1 : selectedImg - 1)}
                className="text-white hover:text-accent"
              >
                <ChevronLeft size={48} />
              </button>
              <button 
                onClick={() => setSelectedImg(selectedImg === miniGallery.length - 1 ? 0 : selectedImg + 1)}
                className="text-white hover:text-accent"
              >
                <ChevronRight size={48} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ClinicPhilosophy;