import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMNA 1: LOGO E INFO */}
          <div>
            <h3 className="text-xl font-bold mb-6">DR. RIVAS CONTRERAS</h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Más de 30 años brindando salud digestiva con excelencia médica y compromiso humano en El Salvador.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-accent transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-accent transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-accent transition-colors"><Youtube size={18} /></a>
            </div>
          </div>

          {/* COLUMNA 2: HORARIOS */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Clock size={20} className="text-accent" /> Horarios
            </h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex justify-between"><span>Lunes - Viernes:</span> <span className="font-bold text-white">9AM - 5PM</span></li>
              <li className="flex justify-between"><span>Sábado:</span> <span className="font-bold text-white">9AM - 12M</span></li>
              <li className="flex justify-between"><span>Domingo:</span> <span className="text-gray-400 italic">Cerrado</span></li>
            </ul>
          </div>

          {/* COLUMNA 3: CONTACTO RÁPIDO */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Phone size={20} className="text-accent" /> Contacto
            </h4>
            <ul className="space-y-4 text-sm text-blue-100">
              <li className="flex items-start gap-3">
                <MapPin size={24} className="text-accent shrink-0" />
                <span>Calle Gabriela Mistral #516, Urb. Buenos Aires, San Salvador.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <span>(503) 2298-6100</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <span>umgastroquirurgica@hotmail.com</span>
              </li>
            </ul>
          </div>

          {/* COLUMNA 4: LICENCIA */}
          <div className="flex flex-col items-center justify-center bg-blue-800/50 p-6 rounded-3xl border border-blue-700 text-center">
            <span className="text-accent font-bold text-xs uppercase tracking-widest mb-2">Clínica Certificada</span>
            <div className="text-3xl font-black mb-2 italic">#91</div>
            <p className="text-[10px] text-blue-200">Licencia del Ministerio de Salud</p>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-800 text-center text-xs text-blue-300">
          <p>© 2026 Dr. René Ricardo Rivas Contreras. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;