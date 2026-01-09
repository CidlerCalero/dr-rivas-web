"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";

// 1. MOVEMOS EL COMPONENTE FUERA (Regla de oro de React)
const WazeLogo = () => (
  <svg width="20" height="20" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M437.5 281.3c0 74.4-60.3 134.7-134.7 134.7h-36.4c-5.8 19.3-23.7 33.3-44.9 33.3-25.8 0-46.7-21-46.7-46.7 0-3.3.4-6.6 1.1-9.7h-11c-65.7 0-119-53.3-119-119 0-4.6.4-9.2 1.1-13.7C24.4 246.6 8 221.7 8 194.2 8 152 42.4 117.7 84.7 117.7c11 0 21.4 2.3 30.9 6.5C146.4 86.6 195.4 64 250.2 64c92.8 0 168 75.2 168 168 0 17.1-2.5 33.6-7.3 49.3 16.5 0 26.6 0 26.6 0zm-187.3 13.7c15.1 0 27.4-12.3 27.4-27.4 0-15.1-12.3-27.4-27.4-27.4-15.1 0-27.4 12.3-27.4 27.4s12.3 27.4 27.4 27.4zm105.1 0c15.1 0 27.4-12.3 27.4-27.4 0-15.1-12.3-27.4-27.4-27.4s-27.4 12.3-27.4 27.4 12.3 27.4 27.4 27.4z" />
  </svg>
);

const ContactMap = () => {
  return (
    <section className="py-24 bg-neutralbg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            className="text-accent font-bold uppercase tracking-[0.2em] text-sm block mb-4"
          >
            Ubicación y Horarios
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-4xl lg:text-5xl font-black text-primary tracking-tight"
          >
            Visítanos en <span className="text-accent">San Salvador</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* ========== MAPA (Order 1 en Móvil, Order 2 en Desktop) ========== */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            className="order-1 lg:order-2 h-[350px] lg:h-[550px] rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white sticky top-24"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.132849504443!2d-89.20815!3d13.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6330960a349c25%3A0xc3c945143a59577!2sCalle%20Gabriela%20Mistral%20516%2C%20San%20Salvador!5e0!3m2!1ses!2ssv!4v1700000000000!5m2!1ses!2ssv"
              className="w-full h-full grayscale-[0.2] contrast-[1.1]"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* ========== BLOQUES DE INFORMACIÓN (Order 2 en Móvil, Order 1 en Desktop) ========== */}
          <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-xl border border-blue-50"
            >
              <h3 className="text-xl lg:text-2xl font-black text-primary mb-6 flex items-center gap-3">
                <MapPin className="text-accent" size={28} /> Dirección Exacta
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  UNIDAD DE GASTROENTEROLOGÍA RIVAS TORRES <br />
                  <span className="text-primary font-bold">En Centro de Hemodiálisis y de Salud Renal</span> <br />
                  Calle Gabriela Mistral #516 Urb. Buenos Aires, San Salvador.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                   <a 
                    href="https://waze.com/ul?ll=13.711364,-89.210369&navigate=yes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#33ccff] text-white px-8 py-4 rounded-2xl font-black text-sm hover:scale-105 transition-all shadow-lg shadow-blue-200"
                   >
                     <WazeLogo /> Cómo llegar con Waze
                   </a>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-50 flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-accent mb-6 shadow-sm">
                  <Clock size={32} />
                </div>
                <h4 className="font-black text-primary text-xl mb-3 tracking-tight">Horarios de Atención</h4>
                <div className="space-y-1 text-gray-500 font-medium">
                  <p>Lunes a Viernes: <br /><span className="text-primary font-bold">9:00 AM - 5:00 PM</span></p>
                  <p>Sábado: <br /><span className="text-primary font-bold">9:00 AM - 12:00 M</span></p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-primary p-8 rounded-[2.5rem] shadow-2xl text-white flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden group"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-accent mb-6 shadow-lg backdrop-blur-sm">
                  <MessageCircle size={32} />
                </div>
                <h4 className="font-black text-2xl mb-2 tracking-tight">¿Tienes una duda?</h4>
                <p className="text-blue-100/80 text-sm mb-6 font-medium">Escríbenos directamente al chat oficial para una respuesta rápida.</p>
                <a 
                  href="https://wa.me/50373271322" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-accent font-black text-lg hover:gap-4 transition-all"
                >
                  Hablar ahora <ArrowRight size={20}/>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;