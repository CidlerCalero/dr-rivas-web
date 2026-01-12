"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";

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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3876.1169829453793!2d-89.210369!3d13.711364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633182cb702c53%3A0x239d72974f49a7d5!2sUnidad%20de%20Gastroenterolog%C3%ADa%20Rivas%20Torres!5e0!3m2!1ses-419!2sus!4v1768235648022!5m2!1ses-419!2sus"
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
                    href="https://ul.waze.com/ul?place=ChIJUyxwy4IxY48R1adJT5dynSM&ll=13.71136360%2C-89.21036910&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#33ccff] text-white px-8 py-4 rounded-2xl font-black text-sm hover:scale-105 transition-all shadow-lg shadow-blue-200"
                   >
                     <Image 
                       src="/images/waze-icon.svg"
                       alt="Waze"
                       width={20}
                       height={20}
                       className="w-5 h-5"
                     />
                     Cómo llegar con Waze
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