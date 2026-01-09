"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { HelpCircle, CheckCircle2, Clock } from "lucide-react";
import ContactHero from "../../components/contact/ContactHero";
import ContactChannels from "../../components/contact/ContactChannels";
import ContactForm from "../../components/contact/ContactForm";
import ContactMap from "../../components/home/ContactMap";

const faqs = [
  { q: "¿Necesito cita previa?", a: "Sí, para garantizarle el tiempo y la atención que su caso merece." },
  { q: "¿Debo venir en ayunas?", a: "Solo si su procedimiento (Endoscopía/Colonoscopía) lo requiere. Para consulta general no es necesario." },
  { q: "¿Hay parqueo disponible?", a: "Sí, contamos con estacionamiento privado y seguro dentro del edificio." }
];

export default function ContactoPage() {
  return (
    <div className="pt-20 bg-white">
      <ContactHero />
      <ContactChannels />
      
      <div className="py-24 bg-neutralbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* FORMULARIO: El protagonista a la izquierda */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
            
            {/* SIDEBAR DE VALOR: Información útil a la derecha */}
            <div className="space-y-8">
              
              {/* CARD DE ATENCIÓN INMEDIATA (Alta Prioridad) */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-primary p-8 md:p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-accent rounded-full"></span>
                  Atención Inmediata
                </h3>
                <p className="text-blue-100 mb-8 leading-relaxed font-medium">
                  Si presenta una emergencia digestiva o desea agendar para el mismo día, 
                  le recomendamos contactarnos vía telefónica.
                </p>
                
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                   <Clock className="text-accent" size={24} />
                   <div>
                     <p className="text-[10px] uppercase font-black tracking-widest text-accent">Disponibilidad</p>
                     <p className="font-bold text-lg">Lunes a Sábado</p>
                   </div>
                </div>
              </motion.div>
              
              {/* BLOQUE DE PREGUNTAS RÁPIDAS (Utilidad Real) */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 md:p-10 rounded-[3rem] border border-gray-100 shadow-xl"
              >
                <h3 className="text-xl font-black text-primary mb-8 flex items-center gap-3">
                  <HelpCircle className="text-accent" size={24} />
                  Información Útil
                </h3>
                
                <div className="space-y-6">
                  {faqs.map((faq, i) => (
                    <div key={i} className="group">
                      <p className="font-bold text-primary mb-2 flex items-start gap-2">
                        <CheckCircle2 className="text-success mt-1 shrink-0" size={16} />
                        {faq.q}
                      </p>
                      <p className="text-sm text-gray-500 ml-6 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* IMAGEN DE LA CLÍNICA (Mantiene la ventana visual) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="rounded-[3rem] overflow-hidden shadow-xl border-4 border-white h-56 relative group"
              >
                <Image 
                  src="/images/clinica-recepcion.jpg" 
                  alt="Instalaciones Dr. Rivas" 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-6">
                  <p className="text-white font-bold text-sm tracking-tight italic">Ambientes diseñados para su comodidad</p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
      
      <ContactMap />
    </div>
  );
}