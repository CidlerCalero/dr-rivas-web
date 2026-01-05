"use client";
import React from "react";
import { Phone, MessageCircle, Map as MapIcon, Navigation } from "lucide-react";

const ContactMap = () => {
  // Coordenadas aproximadas de la Clínica en San Salvador
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.132849504443!2d-89.20815!3d13.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6330960a349c25%3A0xc3c945143a59577!2sCalle%20Gabriela%20Mistral%20516%2C%20San%20Salvador!5e0!3m2!1ses!2ssv!4v1700000000000!5m2!1ses!2ssv";

  return (
    <section className="py-24 bg-neutralbg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* MAPA */}
          <div className="rounded-3xl overflow-hidden shadow-xl border-8 border-white min-h-[400px]">
            <iframe 
              src={mapUrl}
              className="w-full h-full grayscale-[0.3] contrast-[1.1]"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* INFO Y BOTONES */}
          <div className="flex flex-col justify-center">
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-3 italic">Ubicación Estratégica</h2>
            <h3 className="text-4xl font-extrabold text-darktext mb-6">Visítanos en San Salvador</h3>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Estamos ubicados en el Centro de Hemodiálisis y de Salud Renal. Un espacio diseñado para tu comodidad y seguridad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="https://wa.me/50373271322?text=Hola,%20deseo%20agendar%20una%20consulta%20con%20el%20Dr.%20Rivas"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-success text-white py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition-transform"
              >
                <MessageCircle size={24} /> WhatsApp Directo
              </a>
              <a 
                href="https://waze.com/ul?ll=13.71,-89.20815&navigate=yes"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-blue-500 text-white py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition-transform"
              >
                <Navigation size={24} /> Llegar con Waze
              </a>
            </div>

            <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary">
                <MapIcon size={24} />
              </div>
              <p className="text-sm font-medium text-gray-500">
                Calle Gabriela Mistral #516, <br />
                <span className="text-darktext font-bold uppercase">Urb. Buenos Aires, San Salvador</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactMap;