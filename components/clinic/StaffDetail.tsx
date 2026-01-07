"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Heart, Users, Mail, Phone } from "lucide-react";
import { useState } from "react";

const team = [
  { 
    name: "Dr. René Rivas Contreras", 
    role: "Gastroenterólogo e Internista", 
    image: "/images/doctor-rivas.webp",
    badge: "Director Médico",
    experience: "30+ años",
    description: "Líder del equipo con más de 30 años de experiencia en gastroenterología.",
    highlight: true
  },
  { 
    name: "Licda. Marta Torres", 
    role: "Enfermera Jefe de Endoscopía", 
    image: "/images/staff-marta.webp",
    badge: "Líder del Equipo",
    experience: "15+ años",
    description: "Experta en procedimientos endoscópicos y cuidado especializado."
  },
  { 
    name: "Lic. Sergio Osorio", 
    role: "Anestesiólogo", 
    image: "/images/staff-sergio.webp",
    badge: "Experto en Sedación",
    experience: "12+ años",
    description: "Garantiza tu comodidad y seguridad durante los procedimientos."
  },
  { 
    name: "Srita. Fátima Torres", 
    role: "Asistente de Endoscopía", 
    image: "/images/staff-fatima.webp",
    badge: "Soporte Técnico",
    description: "Especialista en el manejo de equipos endoscópicos de vanguardia."
  },
  { 
    name: "Srita. Jazmín Somoza", 
    role: "Asistente de Endoscopía", 
    image: "/images/staff-jazmin.webp",
    badge: "Atención Especializada",
    description: "Cuidado pre y post procedimiento con dedicación y profesionalismo."
  },
  { 
    name: "Sra. Roxana de Abarca", 
    role: "Atención al Paciente", 
    image: "/images/staff-roxana.webp",
    badge: "Primera Impresión",
    description: "Tu primer contacto con nuestra clínica, siempre con una sonrisa."
  },
];

const StaffDetail = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-neutralbg relative overflow-hidden">
      
      {/* Decoración de fondo */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-4">
              👥 Nuestro Equipo
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-primary mb-4">
              Profesionales que Cuidan de Ti
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Un equipo multidisciplinario comprometido con tu bienestar y recuperación
            </p>
          </motion.div>
        </div>

        {/* STATS RÁPIDOS */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Users className="text-primary" size={28} />
            </div>
            <p className="text-3xl font-black text-primary">6</p>
            <p className="text-sm text-gray-500 font-medium">Profesionales</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="bg-success/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Award className="text-success" size={28} />
            </div>
            <p className="text-3xl font-black text-success">60+</p>
            <p className="text-sm text-gray-500 font-medium">Años Experiencia</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Heart className="text-accent" size={28} />
            </div>
            <p className="text-3xl font-black text-accent">100%</p>
            <p className="text-sm text-gray-500 font-medium">Compromiso</p>
          </motion.div>
        </div>

        {/* GRID DEL EQUIPO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setFlipped(i)}
              onMouseLeave={() => setFlipped(null)}
              className="group perspective-1000"
            >
              <div className={`
                relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full
                ${member.highlight ? 'ring-2 ring-primary ring-offset-4' : ''}
              `}>
                
                {/* BADGE DESTACADO (solo para el doctor) */}
                {member.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 text-xs font-bold uppercase tracking-widest z-10">
                    ⭐ Director Médico
                  </div>
                )}

                {/* IMAGEN */}
                <div className={`relative aspect-[3/4] overflow-hidden ${member.highlight ? 'mt-8' : ''}`}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* OVERLAY CON INFO AL HOVER */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/60
                    transition-opacity duration-500
                    ${flipped === i ? 'opacity-95' : 'opacity-0'}
                    flex flex-col items-center justify-center p-6 text-center text-white
                  `}>
                    <p className="text-sm leading-relaxed mb-4">
                      {member.description}
                    </p>
                    {member.experience && (
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <p className="text-xs font-bold">{member.experience} de experiencia</p>
                      </div>
                    )}
                  </div>

                  {/* BADGE DE EXPERIENCIA (visible siempre) */}
                  {member.experience && flipped !== i && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-xl"
                    >
                      <p className="text-primary font-black text-xs">{member.experience}</p>
                    </motion.div>
                  )}

                  {/* BADGE DE ROL (visible siempre) */}
                  {flipped !== i && (
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-accent/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        {member.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* INFO INFERIOR */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-primary mb-1 group-hover:text-accent transition-colors">
                    {member.name}
                  </h3>
                  
                  <p className="text-secondary font-bold uppercase tracking-wider text-xs mb-4">
                    {member.role}
                  </p>

                  {/* LÍNEA DECORATIVA */}
                  <div className="w-12 h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* FRASE FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 border border-primary/10">
            <p className="text-xl lg:text-2xl text-darktext font-medium italic">
              &quot;Trabajamos como un solo equipo, unidos por el{" "}
              <span className="text-primary font-bold">compromiso</span> de devolverte tu{" "}
              <span className="text-accent font-bold">bienestar digestivo</span>&quot;
            </p>
          </div>
        </motion.div>

      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default StaffDetail;