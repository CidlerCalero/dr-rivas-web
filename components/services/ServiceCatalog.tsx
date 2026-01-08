"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Activity, Search, ShieldCheck, 
  Droplets, Scissors, Stethoscope, MessageCircle,
  LucideIcon // Importamos el tipo para TypeScript
} from "lucide-react";

// Definimos la interfaz para que TypeScript esté feliz
interface ServiceItem {
  id: number;
  title: string;
  shortDesc: string;
  icon: LucideIcon; // El tipo correcto para componentes de Lucide
  image: string;
  modalImage: string;
  content: React.ReactNode;
  slug: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Endoscopía Digestiva",
    shortDesc: "Diagnóstico preciso y efectivo de trastornos gastrointestinales.",
    icon: Activity, // CAMBIO: Pasamos el componente directamente
    image: "/images/service-1.webp",
    modalImage: "/images/service-1-detail.jpg",
    slug: "endoscopia",
    content: (
      <>
        <h4 className="text-xl font-bold text-primary mb-4">¿Qué es una Endoscopía Digestiva?</h4>
        <p className="text-gray-600 mb-6">Una endoscopía digestiva es un procedimiento médico en el cual se introduce un tubo delgado y flexible a través de la boca para examinar el tracto digestivo superior, que incluye el esófago, el estómago y la primera parte del intestino delgado. Permite visualizar y diagnosticar posibles problemas como úlceras, inflamación o tumores, además de realizar biopsias y tratamientos.</p>
        <h4 className="text-xl font-bold text-primary mb-4">¿En qué casos se recomienda?</h4>
        <ul className="space-y-4 text-gray-600">
          <li><strong>Investigar síntomas:</strong> Ayuda a encontrar la causa de náuseas, vómitos, dolor abdominal o dificultad para tragar.</li>
          <li><strong>Diagnosticar:</strong> Permite tomar muestras de tejido para detectar anemia, inflamación o cáncer.</li>
          <li><strong>Tratar:</strong> El médico puede detener sangrados, dilatar el esófago o extraer pólipos.</li>
        </ul>
      </>
    )
  },
  {
    id: 2,
    title: "Video Colonoscopía",
    shortDesc: "Detección temprana de enfermedades del colon.",
    icon: Search,
    image:  "/images/service-2.jpg",
    modalImage:  "/images/service-2-detail.jpg",
    slug: "colonoscopia",
    content: (
      <>
        <h4 className="text-xl font-bold text-primary mb-4">¿Qué es una Video Colonoscopía?</h4>
        <p className="text-gray-600 mb-6">Es un procedimiento médico en el que se examina el interior del colon con un tubo delgado y flexible llamado colonoscopio. Se busca detectar pólipos o inflamación bajo sedación para mayor comodidad.</p>
        <div className="bg-blue-50 p-6 rounded-2xl mb-6">
          <p className="text-primary font-bold">Importante para la detección temprana de enfermedades como el cáncer colorrectal.</p>
        </div>
        <h4 className="text-xl font-bold text-primary mb-4">¿Cómo contribuye a la prevención?</h4>
        <p className="text-gray-600">Permite tanto la obtención de imágenes como la extirpación de pólipos pre-cancerosos durante el mismo examen.</p>
      </>
    )
  },
  {
    id: 3,
    title: "Gastrostomía Endoscópica (GEP)",
    shortDesc: "Eficaz procedimiento para una alimentación adecuada por sonda.",
    icon: ShieldCheck,
    image: "/images/service-3.webp",
    modalImage: "/images/service-3-detail.webp",
    slug: "gastrostomia",
    content: (
      <>
        <p className="text-gray-600 mb-6">Es un procedimiento médico para insertar un tubo de alimentación directamente en el estómago mediante un endoscopio, evitando cirugía abierta.</p>
        <h4 className="text-xl font-bold text-primary mb-4">¿Cuál es la preparación?</h4>
        <p className="text-gray-600 mb-6">Presentarse 15 minutos antes, ayuno completo de 8 horas y venir acompañado, ya que se realiza bajo sedoanalgesia.</p>
        <h4 className="text-xl font-bold text-primary mb-4">Ventajas</h4>
        <p className="text-gray-600">Ofrece menos complicaciones locales que una sonda nasogástrica y un menor impacto psicológico al estar cubierta por la ropa.</p>
      </>
    )
  },
  {
    id: 4,
    title: "Esclerosis de Úlceras",
    shortDesc: "Procedimiento para cerrar úlceras gástricas y prevenir el sangrado.",
    icon: Droplets,
    image: "/images/service-4.jpg",
    modalImage:  "/images/service-4-detail.jpg",
    slug: "esclerosis",
    content: (
      <>
        <h4 className="text-xl font-bold text-primary mb-4">¿Cómo se realiza?</h4>
        <p className="text-gray-600 mb-6">Se inyecta una sustancia esclerosante mediante un endoscopio en las úlceras gástricas o esofágicas para cerrarlas de forma inmediata.</p>
        <h4 className="text-xl font-bold text-primary mb-4">Duración</h4>
        <p className="text-gray-600">Dura de 20 a 30 minutos. Tras 45 minutos de recuperación, el paciente puede ir a casa con una dieta blanda.</p>
      </>
    )
  },
  {
    id: 5,
    title: "Clip Hemostático",
    shortDesc: "Dispositivo para cerrar vasos sanguíneos y detener hemorragias.",
    icon: Scissors,
    image: "/images/service-5.jpg",
    modalImage: "/images/service-5-detail.jpg",
    slug: "clip-hemostatico",
    content: (
      <>
        <p className="text-gray-600 mb-6">Procedimiento para detener sangrados internos utilizando un dispositivo en forma de clip para cerrar vasos sanguíneos o conductos.</p>
        <h4 className="text-xl font-bold text-primary mb-4">Recuperación</h4>
        <p className="text-gray-600">Tiempo total estimado de 45 min (incluyendo recuperación). Dieta blanda sin irritantes por 24 horas.</p>
      </>
    )
  },
  {
    id: 6,
    title: "Ligadura de Várices",
    shortDesc: "Procedimiento para tratar las venas inflamadas del esófago.",
    icon: Stethoscope,
    image: "/images/service-6.jpg",
    modalImage: "/images/service-6-detail.png",
    slug: "ligadura",
    content: (
      <>
        <p className="text-gray-600 mb-6">Tratamiento para venas dilatadas en el esófago, comúnmente causadas por enfermedades hepáticas como cirrosis.</p>
        <h4 className="text-xl font-bold text-primary mb-4">Instrucciones</h4>
        <p className="text-gray-600 mb-6">Ayuno total de 12 horas. Debe estar acompañado para la sedoanalgesia.</p>
        <h4 className="text-xl font-bold text-primary mb-4">Post-procedimiento</h4>
        <p className="text-gray-600">Dieta líquida y fría inicialmente. Evitar alimentos sólidos por 72 horas si hay molestias.</p>
      </>
    )
  }
];

const ServiceCatalog = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedService]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 tracking-tight">
            Conoce cómo podemos ayudarte
          </h2>
          <p className="text-gray-500 text-lg italic">Haga clic en un servicio para ver información detallada.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:bg-white group-hover:text-primary transition-colors">
                      {/* CAMBIO CLAVE: Renderizamos el icono como componente */}
                      <service.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold leading-tight">{service.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-500 text-sm leading-relaxed">{service.shortDesc}</p>
                <div className="mt-6 flex items-center text-accent font-bold text-sm">
                  Ver detalles <X className="ml-2 rotate-45" size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-primary/40 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3rem] shadow-2xl no-scrollbar"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="relative h-64 md:h-80 w-full">
                <Image src={selectedService.modalImage} alt={selectedService.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
              </div>

              <div className="p-8 md:p-16">
                <h3 className="text-4xl md:text-5xl font-black text-primary mb-8 tracking-tighter">
                  {selectedService.title}
                </h3>
                
                <div className="prose prose-lg max-w-none">
                  {selectedService.content}
                </div>

                <div className="mt-12 flex justify-center">
                  <a 
                    href="https://wa.me/50373271322" 
                    target="_blank"
                    className="flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-black text-xl hover:bg-accent transition-all shadow-xl shadow-blue-100"
                  >
                    <MessageCircle size={24} />
                    Haz tu cita
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServiceCatalog;