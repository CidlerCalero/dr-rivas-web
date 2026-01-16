"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Heart, Award, Users, X } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Dra. Mabel Flores",
    text: "Muchas gracias!! Infinitas gracias 🙏 Me brinda mucha paz los resultados... Eternamente agradecida!!! Por el horario en el seguro no me fue posible acompañarlo pero sé que está en las mejores manos!! Dios los bendiga!!!",
    role: "Paciente",
    highlight: "Paz y Confianza"
  },
  {
    id: 2,
    name: "Guillermo Díaz",
    text: "Su carisma y amor por su profesión brindan una paz y tranquilidad invaluables a quienes nos encontramos en momentos de angustia. Si existen ángeles en este mundo, usted y su equipo son una representación de ellos.",
    role: "Paciente Agradecido",
    highlight: "Ángeles en la Tierra"
  },
  {
    id: 3,
    name: "Familia Agradecida",
    text: "Quería darle las gracias por toda su fineza con el caso de mi madre, extensivo al Dr. Rivas por su claridad en todo lo que nos explicó. No dudamos que desde el Dr. Rivas y ustedes han sido ángeles que Dios nos ha puesto en el camino. Dios la bendiga, tiene una gran vocación y se siente el amor con el que realizan su trabajo.",
    role: "Familiar de Paciente",
    highlight: "Vocación y Amor"
  }
];

const specialStories = [
  {
    id: 1,
    title: "Familias por Más de 20 Años",
    subtitle: "Generaciones de Confianza",
    description: "Familias enteras que han confiado su salud digestiva en nuestras manos por más de dos décadas. Una relación médico-paciente que trasciende generaciones.",
    images: [
      "/images/familia-20anos-1.jpg",
      "/images/familia-20anos-2.jpg"
    ],
    icon: Users,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "104 Años de Vida Plena",
    subtitle: "Historia de Éxito",
    description: "Le realizamos una ETDS y hoy cumplió 104 años en excelente salud. Un testimonio vivo de nuestra dedicación y compromiso con el bienestar de cada paciente.",
    images: [
      "/images/paciente-104-1.jpg",
      "/images/paciente-104-2.jpg"
    ],
    icon: Award,
    color: "from-green-500 to-green-600"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{src: string, title: string} | null>(null);

  const nextStep = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-neutralbg to-white overflow-hidden relative">
      
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-4">
              ❤️ Testimonios Reales
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-primary mb-4 tracking-tight">
              Nuestros <span className="text-accent">Pacientes</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Historias reales de personas que confiaron en nosotros
            </p>
          </motion.div>
        </div>

        {/* TESTIMONIOS CAROUSEL */}
        <div className="relative max-w-5xl mx-auto mb-24">
          
          {/* Botones de navegación */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-20 z-10">
            <button 
              onClick={prevStep}
              className="p-4 rounded-full bg-white shadow-2xl text-primary hover:bg-primary hover:text-white transition-all border border-gray-100"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-20 z-10">
            <button 
              onClick={nextStep}
              className="p-4 rounded-full bg-white shadow-2xl text-primary hover:bg-primary hover:text-white transition-all border border-gray-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Card del testimonio */}
          <div className="bg-white rounded-[3rem] p-8 lg:p-16 shadow-2xl border border-gray-50 relative min-h-[450px] flex items-center">
            
            {/* Icono de comillas decorativo */}
            <div className="absolute top-8 left-8 lg:top-12 lg:left-12 text-primary/10">
              <Quote size={80} fill="currentColor" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center relative z-10"
              >
                {/* Estrellas */}
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Badge destacado */}
                <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-bold mb-6 uppercase tracking-wider">
                  {testimonials[index].highlight}
                </div>

                {/* Texto del testimonio */}
                <p className="text-xl lg:text-2xl text-gray-700 italic leading-relaxed mb-10 max-w-3xl mx-auto">
                  &quot;{testimonials[index].text}&quot;
                </p>

                {/* Autor */}
                <div>
                  <h4 className="text-2xl lg:text-3xl font-black text-primary mb-2">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-sm font-bold text-secondary uppercase tracking-widest">
                    {testimonials[index].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Indicadores de progreso */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "bg-primary w-12" : "bg-gray-200 w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* HISTORIAS ESPECIALES */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-black text-primary mb-4"
            >
              Historias que Nos <span className="text-accent">Inspiran</span>
            </motion.h3>
            <p className="text-gray-600 text-lg">
              Casos especiales que demuestran nuestro compromiso
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {specialStories.map((story, idx) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Header con gradiente */}
                <div className={`bg-gradient-to-r ${story.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 opacity-10">
                    <story.icon size={120} />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                        <story.icon size={28} />
                      </div>
                      <div>
                        <h4 className="text-2xl lg:text-3xl font-black">{story.title}</h4>
                        <p className="text-sm font-bold opacity-90">{story.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {story.description}
                  </p>

                 {/* Grid de imágenes - Formato vertical para celular */}
                  <div className="grid grid-cols-2 gap-4">
                    {story.images.map((img, imgIdx) => (
                      <div 
                        key={imgIdx}
                        onClick={() => setSelectedImage({src: img, title: `${story.title} - Imagen ${imgIdx + 1}`})}
                        className="relative aspect-[3/4] rounded-2xl overflow-hidden group/img cursor-pointer"
                      >
                        <Image
                          src={img}
                          alt={`${story.title} - Imagen ${imgIdx + 1}`}
                          fill
                          className={`object-cover transition-transform duration-500 group-hover/img:scale-110 ${
                            img.includes('paciente-104-1') ? 'object-[center_20%]' : ''
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                          <span className="text-white text-sm font-bold">Ver imagen</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Badge decorativo */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <Heart size={20} className="text-accent inline-block" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FRASE FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 lg:p-12 border border-primary/10">
            <Quote size={40} className="text-accent mx-auto mb-6" fill="currentColor" />
            <p className="text-2xl lg:text-3xl text-darktext font-medium italic leading-relaxed">
              Cada testimonio representa una vida que nos motiva a seguir brindando{" "}
              <span className="text-primary font-bold">excelencia médica</span> con{" "}
              <span className="text-accent font-bold">calidez humana</span>
            </p>
          </div>
        </motion.div>

      </div>

      {/* LIGHTBOX PARA VER IMÁGENES */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 cursor-pointer"
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-10"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Título de la imagen */}
            <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white font-bold text-sm">
              {selectedImage.title}
            </div>

            {/* Imagen ampliada */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl h-[85vh]"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Indicador de toque para cerrar */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white text-sm font-medium">
              Toca fuera de la imagen para cerrar
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;