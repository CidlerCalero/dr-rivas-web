"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Pacientes Atendidos", value: "+10,000" },
  { label: "Años de Experiencia", value: "30+" },
  { label: "Años en Hosp. Rosales", value: "25" },
  { label: "Certificaciones", value: "+10" },
];

const Stats = () => {
  return (
    <section className="py-12 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;