import Image from "next/image"; // ✅ IMPORTANTE: Agregar este import
import ContactHero from "../../components/contact/ContactHero";
import ContactChannels from "../../components/contact/ContactChannels";
import ContactForm from "../../components/contact/ContactForm";
import ContactMap from "../../components/home/ContactMap";

export default function ContactoPage() {
  return (
    <div className="pt-20 bg-white">
      <ContactHero />
      <ContactChannels />
      
      <div className="py-24 bg-neutralbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* FORMULARIO */}
            <ContactForm />
            
            {/* SIDEBAR */}
            <div className="space-y-8">
              
              {/* CARD DE ATENCIÓN */}
              <div className="bg-primary p-10 rounded-[3rem] text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Atención Inmediata</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Si presenta una emergencia digestiva o desea agendar para el mismo día, 
                  le recomendamos contactarnos vía telefónica o WhatsApp.
                </p>
                <div className="space-y-4">
                  <p className="flex items-center gap-3 font-bold text-lg italic text-accent">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                    Disponibilidad: Lun - Sáb
                  </p>
                </div>
              </div>
              
              {/* IMAGEN DECORATIVA - CORREGIDA */}
              <div className="rounded-[3rem] overflow-hidden shadow-xl border-4 border-white h-64 relative">
                <Image 
                  src="/images/contact-ubicacion.webp" 
                  alt="Ubicación Clínica" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <ContactMap />
    </div>
  );
}