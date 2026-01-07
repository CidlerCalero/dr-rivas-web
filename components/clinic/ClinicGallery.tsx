"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const mainGallery = [
  { src: "/images/gal-1.jpg", text: "Dr. Rivas Contreras" },
  { src: "/images/gal-2.webp", text: "Nuestro Staff" },
  { src: "/images/gal-3.webp", text: "Áreas Confortables" },
  { src: "/images/gal-4.jpg", text: "Salas Equipadas" },
  { src: "/images/gal-5.webp", text: "Profesionalismo" },
  { src: "/images/gal-6.webp", text: "Atención Especial" },
  { src: "/images/gal-7.webp", text: "Trato Humano" },
  { src: "/images/gal-8.webp", text: "Equipo Capaz" },
  { src: "/images/gal-9.webp", text: "Fácil de Llegar" },
  { src: "/images/gal-10.webp", text: "Te Cuidamos" },
];

const ClinicGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 520; // ancho de card + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-neutralbg to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-3">
            Recorrido Virtual
          </h2>
          <p className="text-4xl font-extrabold text-darktext tracking-tight mb-4">
            Conoce Nuestras Instalaciones
          </p>
          <p className="text-gray-500 text-lg italic">
            Desliza para explorar → 
          </p>
        </div>
      </div>

      {/* CONTENEDOR CON BOTONES DE NAVEGACIÓN */}
      <div className="relative">
        {/* BOTÓN IZQUIERDA */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-2xl p-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </button>

        {/* CAROUSEL */}
        <div 
          ref={scrollRef}
          className="flex gap-8 px-8 pb-12 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {mainGallery.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => setSelectedImage(i)}
              className="relative min-w-[500px] h-[350px] rounded-3xl overflow-hidden shadow-2xl group flex-shrink-0 cursor-pointer"
            >
              {/* IMAGEN */}
              <Image
                src={img.src}
                alt={img.text}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* OVERLAY CON GRADIENTE */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* TEXTO INFERIOR */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-3xl font-black mb-2">{img.text}</h3>
                <div className="w-16 h-1 bg-accent" />
              </div>

              {/* BADGE DE NÚMERO */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center font-black text-primary shadow-xl">
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTÓN DERECHA */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-2xl p-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* INDICADOR */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-400 font-medium">
          {mainGallery.length} imágenes • Click para ampliar
        </p>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            {/* BOTÓN CERRAR */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-10"
            >
              <X size={24} className="text-white" />
            </button>

            {/* CONTADOR */}
            <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white font-bold">
              {selectedImage + 1} / {mainGallery.length}
            </div>

            {/* IMAGEN GRANDE */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl h-[80vh]"
            >
              <Image
                src={mainGallery[selectedImage].src}
                alt={mainGallery[selectedImage].text}
                fill
                className="object-contain"
              />
              {/* TÍTULO EN MODAL */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-center">
                <h3 className="text-white text-3xl font-bold">
                  {mainGallery[selectedImage].text}
                </h3>
              </div>
            </motion.div>

            {/* NAVEGACIÓN EN MODAL */}
            {selectedImage > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage - 1);
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors"
              >
                <ChevronLeft size={32} className="text-white" />
              </button>
            )}

            {selectedImage < mainGallery.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage + 1);
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors"
              >
                <ChevronRight size={32} className="text-white" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS para ocultar scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ClinicGallery;