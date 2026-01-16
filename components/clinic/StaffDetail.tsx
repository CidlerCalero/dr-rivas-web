"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Heart, Users, CheckCircle2 } from "lucide-react";

const team = [
  // --- FILA SUPERIOR (3 MIEMBROS) ---
  { 
    name: "Dr. René Rivas Contreras", 
    // CAMBIO AQUÍ: Uso de fragmento JSX para distribuir el texto en dos líneas estéticas
    role: (
      <>
        <span className="block mb-1">Especialidad Medicina Interna</span>
        <span className="block text-[0.65rem] sm:text-[0.7rem] leading-tight opacity-90">
          Sub Especialidad Gastroenterología y Endoscopía Digestiva
        </span>
      </>
    ), 
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
    experience: "20+ años",
    description: "Jefe de Enfermería y Administración de la unidad desde 2013.",
    skills: [
      "Enfermería en Endoscopía Digestiva",
      "Cuidados Intermedios e Intensivos",
      "Enfermería Comunitaria",
      "Diplomado en Investigación",
      "Diplomado Internacional TECH Global University",
      "Hospital de Diagnóstico (2006-2013)",
      "Administración de Unidades Médicas"
    ]
  },
  { 
    name: "Lic. Sergio Osorio", 
    role: "Licenciado en Anestesia", 
    image: "/images/staff-sergio.webp",
    badge: "Experto en Sedación",
    experience: "30+ años",
    description: "Garantiza tu comodidad y seguridad durante los procedimientos.",
    skills: [
      "Anestesia Obstétrica",
      "Anestesia General",
      "Sedoanalgesia",
      "Diplomado en Cuidados Respiratorios",
      "Diplomado en Docencia",
      "Curso de Terapia Respiratoria (2 años)",
      "Diplomado de Urgencias Obstétricas"
    ]
  },
  
  // --- FILA INFERIOR (4 MIEMBROS) ---
  { 
    name: "Srita. Wendy Ramírez", 
    role: "Asistente de Endoscopía", 
    image: "/images/staff-wendy.webp",
    badge: "Soporte Clínico",
    description: "Asistencia técnica precisa para garantizar el éxito de cada estudio."
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

  // Función para manejar el toggle en móvil
  const handleMobileToggle = (index: number) => {
    setFlipped(flipped === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-neutralbg relative overflow-hidden">
      
      {/* Decoración de fondo */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

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
            <p className="text-3xl font-black text-primary">7</p>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 justify-center">
          
          {team.map((member, i) => {
            const desktopColSpan = i < 3 ? "lg:col-span-4" : "lg:col-span-3";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setFlipped(i)}
                onMouseLeave={() => setFlipped(null)}
                onClick={() => handleMobileToggle(i)}
                className={`group perspective-1000 ${desktopColSpan} cursor-pointer lg:cursor-default`}
              >
                <div className={`
                  relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col
                  ${member.highlight ? 'ring-2 ring-primary ring-offset-4' : ''}
                `}>
                  
                  {/* BADGE DESTACADO */}
                  {member.highlight && (
                    <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 text-xs font-bold uppercase tracking-widest z-10">
                      ⭐ Director Médico
                    </div>
                  )}

                  {/* IMAGEN */}
                  <div className={`relative w-full aspect-[4/5] overflow-hidden ${member.highlight ? 'mt-8' : ''}`}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* OVERLAY CON INFO AL HOVER / TOUCH */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-t from-primary via-primary/95 to-primary/90
                      transition-opacity duration-500
                      ${flipped === i ? 'opacity-95' : 'opacity-0 pointer-events-none'}
                      flex flex-col items-center justify-center p-6 text-white overflow-y-auto
                    `}>
                      <div className="w-full max-h-full overflow-y-auto custom-scrollbar">
                        {/* Botón cerrar (solo móvil) */}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setFlipped(null);
                          }}
                          className="lg:hidden absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all z-20"
                          aria-label="Cerrar información"
                        >
                          ✕
                        </button>

                        {/* Descripción */}
                        <p className="text-sm leading-relaxed mb-4 font-medium text-center">
                          {member.description}
                        </p>

                        {/* Skills (solo si existen) */}
                        {member.skills && member.skills.length > 0 && (
                          <div className="mt-4 w-full">
                            <h4 className="text-xs font-black uppercase tracking-wider mb-3 text-accent text-center">
                              Especialidades
                            </h4>
                            <ul className="space-y-2">
                              {member.skills.map((skill, idx) => (
                                <li 
                                  key={idx}
                                  className="flex items-start gap-2 text-xs bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20"
                                >
                                  <CheckCircle2 size={14} className="text-accent flex-shrink-0 mt-0.5" />
                                  <span className="leading-tight">{skill}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Experiencia */}
                        {member.experience && (
                          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mt-4">
                            <p className="text-xs font-bold text-center">{member.experience} de experiencia</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* BADGE DE ROL + INDICADOR TÁCTIL */}
                    {flipped !== i && (
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                        <span className="inline-block bg-white/90 backdrop-blur-md text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
                          {member.badge}
                        </span>
                        {/* Indicador de toque (solo si tiene skills o descripción) */}
                        {(member.skills && member.skills.length > 0) && (
                          <span className="lg:hidden bg-white/90 backdrop-blur-md text-primary px-2 py-1.5 rounded-full shadow-sm border border-gray-100 text-[10px] font-bold">
                            Toca para ver más
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* INFO INFERIOR */}
                  <div className="p-6 flex-grow flex flex-col justify-end">
                    <h3 className="text-xl font-black text-primary mb-1 group-hover:text-accent transition-colors leading-tight">
                      {member.name}
                    </h3>
                    
                    <p className="text-secondary font-bold uppercase tracking-wider text-[10px] sm:text-xs mb-3">
                      {member.role}
                    </p>

                    {/* LÍNEA DECORATIVA */}
                    <div className="w-12 h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>

                </div>
              </motion.div>
            );
          })}
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
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </section>
  );
};

export default StaffDetail;