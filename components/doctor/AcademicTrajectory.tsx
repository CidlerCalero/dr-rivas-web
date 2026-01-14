"use client";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, MapPin, Award, TrendingUp } from "lucide-react";

const timeline = [
  {
    year: "1991",
    title: "Doctor en Medicina",
    institution: "Universidad Nacional de El Salvador",
    icon: <GraduationCap size={20} />,
    color: "bg-primary"
  },
  {
    year: "1991-1993",
    title: "Especialidad en Medicina Interna",
    institution: "Hospital Nacional Rosales",
    icon: <Briefcase size={20} />,
    color: "bg-secondary"
  },
  {
    year: "1993-1995",
    title: "Sub-Especialidad en Gastroenterología",
    institution: "Hospital Nacional de México",
    location: "Ciudad de México",
    icon: <Award size={20} />,
    color: "bg-accent"
  },
  {
    year: "1995-2001",
    title: "Staff del ISSS Gastroenterología",
    institution: "Servicio de Gastroenterología del ISSS",
    icon: <Briefcase size={20} />,
    color: "bg-success"
  },
  {
    year: "1996-2025",
    title: "Staff Hospital Rosales",
    institution: "Medicina Interna - Hospital Nacional Rosales",
    highlight: true,
    icon: <TrendingUp size={20} />,
    color: "bg-primary"
  }
];

const experience = [
  {
    number: "30+",
    label: "Años de Experiencia",
    description: "en gastroenterología y medicina interna",
    icon: <Calendar className="text-primary" size={24} />
  },
  {
    number: "25+",
    label: "Años en Hospital Rosales",
    description: "como miembro del staff de medicina interna",
    icon: <MapPin className="text-accent" size={24} />
  },
  {
    number: "7",
    label: "Años en ISSS",
    description: "Servicio de Gastroenterología (1995-2002)",
    icon: <Briefcase className="text-success" size={24} />
  }
];

const AcademicTrajectory = () => {
  return (
    <section id="trayectoria" className="py-24 bg-gradient-to-b from-white to-neutralbg relative overflow-hidden">
      
      {/* Decoración */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
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
              🎓 Formación Profesional
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-primary mb-4">
              Trayectoria Académica
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Más de tres décadas de formación continua y experiencia clínica al servicio de la salud
            </p>
          </motion.div>
        </div>

        {/* TIMELINE VERTICAL */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Línea central */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-success"></div>

            {/* Items del timeline */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Círculo con ícono */}
                  <div className={`absolute left-0 w-16 h-16 ${item.color} text-white rounded-2xl flex items-center justify-center shadow-xl`}>
                    {item.icon}
                  </div>

                  {/* Contenido */}
                  <div className={`
                    bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4
                    ${item.highlight ? 'border-primary ring-2 ring-primary/20' : 'border-gray-100'}
                  `}>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-accent font-black text-sm bg-accent/10 px-3 py-1 rounded-full">
                            {item.year}
                          </span>
                         
                        </div>
                        <h3 className="text-xl font-black text-primary mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 font-medium">
                          {item.institution}
                        </p>
                        {item.location && (
                          <p className="text-sm text-gray-400 flex items-center gap-1 mt-1">
                            <MapPin size={14} />
                            {item.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* EXPERIENCIA DESTACADA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-primary mb-3">
              Experiencia Clínica
            </h3>
            <p className="text-gray-600">
              Números que respaldan décadas de dedicación profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-neutralbg w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                  {item.icon}
                </div>
                <p className="text-4xl font-black text-primary mb-2">
                  {item.number}
                </p>
                <p className="font-bold text-darktext mb-2">
                  {item.label}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* QUOTE DESTACADA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 border border-primary/10 text-center">
            <p className="text-xl lg:text-2xl text-darktext font-medium italic">
              &quot;La formación continua y la experiencia clínica son fundamentales para 
              brindar la mejor atención a nuestros pacientes&quot;
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="w-12 h-1 bg-accent"></div>
              <p className="text-sm text-gray-500 font-bold">Dr. René Rivas Contreras</p>
              <div className="w-12 h-1 bg-accent"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AcademicTrajectory;