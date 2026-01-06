"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Navigation, Clock, ArrowRight } from "lucide-react";
const ContactMap = () => {
  return (
    <section className="py-24 bg-neutralbg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-accent font-bold uppercase tracking-widest text-sm block mb-4">Ubicación y Horarios</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl font-black text-primary">Visítanos en San Salvador</motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* INFO DE CONTACTO */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                <MapPin className="text-accent" /> Dirección Exacta
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                UNIDAD DE GASTROENTEROLOGÍA RIVAS TORRES <br />
                EN CENTRO DE HEMODIÁLISIS Y DE SALUD RENAL <br />
                Calle Gabriela Mistral #516 Urb. Buenos Aires, San Salvador.
              </p>
              <div className="flex flex-wrap gap-4">
                 <a href="https://waze.com/ul?ll=13.71,-89.20815&navigate=yes" target="_blank" className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:scale-105 transition-transform">
                   <Navigation size={18} /> Ir con Waze
                 </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50 text-center md:text-left">
                <Clock className="text-accent mx-auto md:mx-0 mb-4" size={32} />
                <h4 className="font-bold text-primary mb-2">Horarios</h4>
                <p className="text-sm text-gray-500">Lun-Vie: 9:00 AM - 5:00 PM <br /> Sáb: 9:00 AM - 12:00 M</p>
              </div>
              <div className="bg-primary p-8 rounded-[2.5rem] shadow-xl text-white text-center md:text-left">
                <MessageCircle className="text-accent mx-auto md:mx-0 mb-4" size={32} />
                <h4 className="font-bold mb-2 text-xl">¿Tienes una duda?</h4>
                <p className="text-sm text-blue-100 mb-4">Escríbenos directamente</p>
                <a href="https://wa.me/50373271322" target="_blank" className="text-accent font-bold flex items-center gap-2 justify-center md:justify-start">7327-1322 <ArrowRight size={16}/></a>
              </div>
            </div>
          </motion.div>

          {/* MAPA */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white min-h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.132849504443!2d-89.20815!3d13.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6330960a349c25%3A0xc3c945143a59577!2sCalle%20Gabriela%20Mistral%20516%2C%20San%20Salvador!5e0!3m2!1ses!2ssv!4v1700000000000!5m2!1ses!2ssv"
              className="w-full h-full grayscale-[0.2]"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;