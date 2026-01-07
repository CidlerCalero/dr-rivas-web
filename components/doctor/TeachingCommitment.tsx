"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Users, Heart, BookOpen, Award } from "lucide-react";

const achievements = [
  {
    icon: <Users size={24} />,
    number: "100+",
    label: "Residentes Formados",
    description: "en los últimos 25 años"
  },
  {
    icon: <BookOpen size={24} />,
    label: "Formación Ad-Honorem",
    description: "Dedicación sin costo para las nuevas generaciones"
  },
  {
    icon: <Award size={24} />,
    label: "Hospital Nacional Rosales",
    description: "Centro de formación médica de excelencia"
  }
];

const TeachingCommitment = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-secondary text-white relative overflow-hidden">
      
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* BADGE SUPERIOR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold backdrop-blur-sm">
            👨‍🏫 Compromiso Educativo
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: CONTENIDO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Título principal */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/20 p-3 rounded-xl">
                  <GraduationCap className="text-accent" size={32} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-black leading-tight">
                  Formando a las Nuevas Generaciones
                </h2>
              </div>
            </div>

            {/* Quote destacada */}
            <blockquote className="text-2xl lg:text-3xl font-bold leading-tight border-l-4 border-accent pl-6 italic">
              &quot;Comprometido con la innovación y la preparación de nuevas generaciones de médicos&quot;
            </blockquote>

            {/* Descripción */}
            <p className="text-blue-100 text-lg leading-relaxed">
              Durante más de 25 años, el Dr. Rivas Contreras ha dedicado parte de su carrera 
              a la formación <span className="font-bold text-white">Ad-Honorem</span> de residentes 
              de Medicina Interna en el Hospital Nacional Rosales, transmitiendo su vasto conocimiento 
              y experiencia a las futuras generaciones de médicos salvadoreños.
            </p>

            {/* Cards de logros */}
            <div className="grid grid-cols-1 gap-4 pt-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 p-3 rounded-xl group-hover:bg-accent/30 transition-colors shrink-0">
                      {achievement.icon}
                    </div>
                    <div>
                      {achievement.number && (
                        <p className="text-3xl font-black mb-1">{achievement.number}</p>
                      )}
                      <p className="font-bold text-lg mb-1">{achievement.label}</p>
                      <p className="text-blue-200 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Firma decorativa */}
            <div className="flex items-center gap-4 pt-4">
              <div className="w-16 h-1 bg-accent"></div>
              <p className="text-sm font-bold">Dr. René Rivas Contreras</p>
            </div>

          </motion.div>

          {/* COLUMNA DERECHA: IMAGEN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Imagen principal */}
            <div className="relative h-[500px] lg:h-[600px] rounded-[3rem] overflow-hidden border-4 border-white/20 shadow-2xl">
              <Image 
                src="/images/doctor-teaching.jpg" 
                alt="Dr. Rivas Contreras formando residentes en Hospital Nacional Rosales" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>

              {/* Badge flotante en la imagen */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Heart className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-black text-primary text-lg">Formación Ad-Honorem</p>
                    <p className="text-sm text-gray-600">Hospital Nacional Rosales</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Elemento decorativo */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent/30 rounded-[3rem] -z-10"></div>
          </motion.div>

        </div>

        {/* SECCIÓN DE IMPACTO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-1 bg-accent"></div>
              <GraduationCap className="text-accent" size={32} />
              <div className="w-12 h-1 bg-accent"></div>
            </div>
            <p className="text-2xl lg:text-3xl font-bold leading-relaxed italic">
              &quot;La mejor manera de retribuir al sistema de salud es formando médicos 
              comprometidos con la excelencia y el servicio a la comunidad&quot;
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TeachingCommitment;