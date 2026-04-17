"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const ContactHero = () => {
  const[isOpen, setIsOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [timeMessage, setTimeMessage] = useState("");

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours + minutes / 60;

      // Horario Lunes a Viernes
      const weekdayOpen = 9; // 9:00 AM
      const weekdayClose = 17; // 5:00 PM

      let open = false;
      let message = "";
      let time = "";

      // Lunes a Jueves (1-4)
      if (day >= 1 && day <= 4) {
        if (currentTime >= weekdayOpen && currentTime < weekdayClose) {
          open = true;
          message = "Abierto ahora";
          time = "Cierra 5:00 PM";
        } else if (currentTime < weekdayOpen) {
          message = "Cerrado ahora";
          time = "Abre hoy a las 9:00 AM";
        } else {
          message = "Cerrado ahora";
          time = "Abre mañana a las 9:00 AM";
        }
      }
      // Viernes (5) - Lógica especial para la tarde
      else if (day === 5) {
        if (currentTime >= weekdayOpen && currentTime < weekdayClose) {
          open = true;
          message = "Abierto ahora";
          time = "Cierra 5:00 PM";
        } else if (currentTime < weekdayOpen) {
          message = "Cerrado ahora";
          time = "Abre hoy a las 9:00 AM";
        } else {
          // Si es viernes después de las 5:00 PM, el próximo día hábil es el lunes
          message = "Cerrado ahora";
          time = "Abre el lunes a las 9:00 AM";
        }
      }
      // Fines de semana: Sábado (6) y Domingo (0)
      else {
        open = false;
        message = "Cerrado ahora";
        time = "Abre el lunes a las 9:00 AM";
      }

      setIsOpen(open);
      setStatusMessage(message);
      setTimeMessage(time);
    };

    // Verificar inmediatamente
    checkIfOpen();

    // Actualizar cada minuto
    const interval = setInterval(checkIfOpen, 60000);

    return () => clearInterval(interval);
  },[]);

  return (
    <section className="relative pt-20 pb-10 lg:pt-32 lg:pb-16 bg-white overflow-hidden">
      
      {/* Decoración de fondo minimalista */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* INDICADOR DE ESTADO EN TIEMPO REAL */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center items-center gap-3 mb-6"
        >
          <span 
            className={`flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] lg:text-xs font-black uppercase tracking-widest transition-all ${
              isOpen 
                ? "bg-success/10 border-success/20 text-success" 
                : "bg-gray-100 border-gray-300 text-gray-600"
            }`}
          >
            <span 
              className={`w-2 h-2 rounded-full ${
                isOpen ? "bg-success animate-pulse" : "bg-gray-400"
              }`}
            ></span>
            {statusMessage}
          </span>
          {timeMessage && (
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutralbg border border-gray-200 text-gray-500 text-[10px] lg:text-xs font-bold uppercase tracking-widest">
              <Clock size={14} />
              {timeMessage}
            </span>
          )}
        </motion.div>

        {/* TÍTULO PRINCIPAL */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-6xl font-black text-primary leading-tight tracking-tight mb-6"
        >
          Estamos para <span className="text-accent">Escucharte</span>
        </motion.h1>

        {/* DESCRIPCIÓN */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base lg:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
        >
          Agenda tu consulta o resuelve tus dudas a través de nuestros canales oficiales. 
          Atención inmediata y personalizada para tu salud digestiva.
        </motion.p>

        {/* LÍNEA DECORATIVA */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "60px" }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="h-1.5 bg-accent rounded-full mx-auto mt-10"
        />

      </div>
    </section>
  );
};

export default ContactHero;