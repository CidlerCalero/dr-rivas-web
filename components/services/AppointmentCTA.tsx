"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Phone, MapPin, Clock } from "lucide-react";

const AppointmentCTA = () => {
  return (
    <section className="py-24 bg-neutralbg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-gray-50 flex flex-col lg:flex-row items-stretch">
          
          {/* FOTO DEL DOCTOR */}
          <div className="lg:w-1/2 relative min-h-[400px]">
            <Image 
              src="/images/doctor-desk.jpg" 
              alt="Dr. Rivas Contreras en consulta"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXTO E INFO */}
          <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-4xl font-black text-primary mb-6 tracking-tight">Agenda tu cita</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Al pasar la consulta con el Dr. Rivas Contreras puedes describir tus síntomas y tu historial médico. Él te explicará de forma detallada tu padecimiento, así como la prescripción de una receta médica para su tratamiento.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-primary shrink-0 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Dirección</h4>
                  <p className="text-sm text-gray-500">Calle Gabriela Mistral #516, Urb. Buenos Aires, San Salvador.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-primary shrink-0 mt-1">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Horario</h4>
                  <p className="text-sm text-gray-500">Lun-Vie: 9:00 AM - 5:00 PM / Sáb: 9:00 AM - 12:00 M</p>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/50373271322"
              target="_blank"
              className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-5 rounded-2xl font-black text-lg hover:bg-accent transition-all shadow-xl"
            >
              <Calendar size={20} />
              Programar mi cita ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;