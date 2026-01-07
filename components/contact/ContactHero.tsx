"use client";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      
      {/* Decoración de fondo */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* BADGE SUPERIOR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold">
            📞 Canales de Contacto
          </span>
        </motion.div>

        {/* TÍTULO PRINCIPAL */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-black text-center text-primary leading-tight mb-6"
        >
          Estamos Listos para{" "}
          <span className="text-accent">Atenderte</span>
        </motion.h1>

        {/* DESCRIPCIÓN */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-12"
        >
          Elige el canal de tu preferencia para agendar tu consulta, resolver dudas 
          o recibir atención inmediata. Estamos aquí para cuidar de tu salud digestiva.
        </motion.p>

        {/* QUICK INFO CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {/* UBICACIÓN */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <MapPin className="text-primary" size={24} />
            </div>
            <h3 className="font-bold text-primary text-sm mb-2">Ubicación</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Urb. Buenos Aires, San Salvador
            </p>
          </div>

          {/* HORARIO */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
            <div className="bg-success/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-success/20 transition-colors">
              <Clock className="text-success" size={24} />
            </div>
            <h3 className="font-bold text-success text-sm mb-2">Horario</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lun-Vie: 9AM-5PM<br/>
              Sáb: 9AM-12M
            </p>
          </div>

          {/* ATENCIÓN RÁPIDA */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
            <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <Phone className="text-accent" size={24} />
            </div>
            <h3 className="font-bold text-accent text-sm mb-2">Respuesta Rápida</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              WhatsApp disponible de inmediato
            </p>
          </div>
        </motion.div>

        {/* INDICADOR DE SCROLL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-400 font-medium mb-2">
            Desliza para ver todas las opciones de contacto
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="inline-block"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactHero;