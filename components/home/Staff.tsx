"use client";
import React from "react";
import { motion } from "framer-motion";

const team = [
  { name: "Dr. René Rivas", role: "Gastroenterólogo e Internista", img: "/images/doctor-hero.jpg" },
  { name: "Licda. Marta Torres", role: "Enfermera Jefe de Endoscopía", img: "/images/staff-1.jpg" },
  { name: "Lic. Sergio Osorio", role: "Anestesiología", img: "/images/staff-2.jpg" },
  { name: "Sra. Roxana de Abarca", role: "Atención al Paciente", img: "/images/staff-3.jpg" },
];

const Staff = () => {
  return (
    <section className="py-24 bg-neutralbg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Nuestro Equipo</h2>
          <p className="text-4xl font-extrabold text-darktext tracking-tight">Compromiso Humano y Profesional</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-4 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="aspect-square rounded-2xl bg-blue-50 overflow-hidden mb-6">
                 {/* Aquí irán las fotos del staff. Si no las tienes aún, se verá el fondo azul */}
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" 
                     onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=" + member.name + "&background=EBF2FF&color=1E40AF"; }} />
              </div>
              <h3 className="text-lg font-bold text-primary text-center">{member.name}</h3>
              <p className="text-sm text-gray-500 text-center mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;