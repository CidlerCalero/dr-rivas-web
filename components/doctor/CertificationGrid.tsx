"use client";
import { motion } from "framer-motion";
import { Award, CheckCircle2, Globe, Calendar, MapPin, TrendingUp } from "lucide-react";

const certifications = [
  {
    title: "XXI CONGRESO CENTROAMERICANO DE GASTROENTEROLOGÍA Y ENDOSCOPIA DIGESTIVA",
    location: "El Salvador",
    type: "Congreso Internacional",
    icon: <Globe size={20} />,
    color: "from-primary to-primary/80"
  },
  {
    title: "CURSO: RIESGOS EN GASTROENTEROLOGÍA",
    location: "El Salvador",
    type: "Curso Especializado",
    icon: <TrendingUp size={20} />,
    color: "from-accent to-accent/80"
  },
  {
    title: "CURSO: CONTROVERSIAS Y CONSENSO EN GASTROENTEROLOGÍA",
    location: "El Salvador",
    type: "Curso Especializado",
    icon: <Award size={20} />,
    color: "from-secondary to-secondary/80"
  },
  {
    title: "XVI CONGRESO NACIONAL DE GASTROENTEROLOGÍA",
    location: "República Dominicana",
    type: "Congreso Internacional",
    icon: <Globe size={20} />,
    color: "from-primary to-primary/80",
    featured: true
  },
  {
    title: "CURSO DE ENDOSCOPIA TERAPÉUTICA",
    location: "El Salvador",
    type: "Curso Especializado",
    icon: <Award size={20} />,
    color: "from-success to-success/80"
  },
  {
    title: "ENCUENTRO INTERNACIONAL DE GASTROENTEREOLOGÍA",
    location: "El Salvador",
    type: "Encuentro Internacional",
    icon: <Globe size={20} />,
    color: "from-accent to-accent/80"
  },
  {
    title: "XX CONGRESO PANAMERICANO DE ENDOSCOPIA DIGESTIVA",
    location: "Ciudad de Panamá",
    type: "Congreso Panamericano",
    icon: <Globe size={20} />,
    color: "from-primary to-primary/80",
    featured: true
  }
];

const stats = [
  { number: "+10", label: "Certificaciones", icon: <Award size={24} /> },
  { number: "5", label: "Países", icon: <MapPin size={24} /> },
  { number: "25+", label: "Años Actualizándose", icon: <Calendar size={24} /> }
];

const CertificationGrid = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-neutralbg to-white relative overflow-hidden">
      
      {/* Decoración */}
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
              🏆 Actualización Constante
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-primary mb-4">
              Certificaciones Internacionales
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Preparado para ofrecer los tratamientos más efectivos y vanguardistas, 
              respaldado por formación continua en los principales congresos del mundo
            </p>
          </motion.div>
        </div>

        {/* STATS RÁPIDAS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                {stat.icon}
              </div>
              <p className="text-3xl font-black text-primary mb-1">{stat.number}</p>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* GRID DE CERTIFICACIONES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`
                relative p-8 rounded-3xl border-2 transition-all duration-300 group overflow-hidden
                ${cert.featured 
                  ? 'bg-white border-primary shadow-xl hover:shadow-2xl' 
                  : 'bg-white border-gray-100 hover:border-accent hover:shadow-xl'
                }
              `}
            >
              {/* Badge Featured */}
              {cert.featured && (
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    Destacado
                  </span>
                </div>
              )}

              {/* Gradiente de fondo sutil al hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Contenido */}
              <div className="relative z-10">
                {/* Ícono */}
                <div className={`
                  w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-all
                  ${cert.featured 
                    ? 'bg-gradient-to-br from-primary to-primary/80 text-white' 
                    : 'bg-neutralbg text-primary group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent/80 group-hover:text-white'
                  }
                `}>
                  {cert.icon}
                </div>

                {/* Título */}
                <h3 className="text-base font-bold text-primary leading-tight mb-4 min-h-[60px]">
                  {cert.title}
                </h3>

                {/* Info adicional */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin size={14} className="text-accent shrink-0" />
                    <span className="font-medium">{cert.location}</span>
                  </div>
                  <div className="inline-block">
                    <span className="text-xs font-bold bg-accent/10 text-accent px-3 py-1 rounded-full">
                      {cert.type}
                    </span>
                  </div>
                </div>

                {/* Badge verificado */}
                <div className="flex items-center gap-2 text-xs font-bold text-success uppercase tracking-wider pt-4 border-t border-gray-100">
                  <CheckCircle2 size={14} />
                  Certificado Verificado
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TEXTO DE CIERRE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Award className="text-primary" size={32} />
            </div>
            <p className="text-xl lg:text-2xl text-darktext font-medium italic leading-relaxed">
              &quot;La medicina avanza constantemente. Mi compromiso es mantenerme actualizado para 
              ofrecer siempre las mejores opciones de tratamiento a mis pacientes&quot;
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

export default CertificationGrid;