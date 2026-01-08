"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white pt-24 pb-12 relative overflow-hidden">
      {/* Botón Volver Arriba */}
      <button 
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent p-4 rounded-full shadow-2xl hover:bg-white hover:text-accent transition-all group"
      >
        <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* COL 1: LOGO E INFO */}
          <div className="space-y-8">
          <Link href="/" className="inline-block bg-white p-4 rounded-2xl shadow-xl hover:scale-105 transition-transform">
  <div className="relative w-[160px] h-[45px]">
    <Image 
      src="/images/logo.png" 
      alt="Logo Unidad de Gastroenterología" 
      fill 
      className="object-contain" 
    />
  </div>
</Link>
<p className="text-blue-100/70 text-sm leading-relaxed mt-8">
  Dr. René Ricardo Rivas Contreras: Más de 30 años de experiencia al servicio de su salud digestiva con ética y tecnología de vanguardia.
</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent transition-all"><Youtube size={18} /></a>
            </div>
          </div>

          {/* COL 2: ENLACES */}
          <div>
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-accent italic">Navegación</h4>
            <ul className="space-y-4">
              {["Inicio", "Dr. Rivas Contreras", "Servicios", "Clínica", "Contacto"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Inicio" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-sm text-blue-100/60 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-accent rounded-full group-hover:w-3 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: CONTACTO */}
          <div>
            <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-accent italic">Visítanos</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-accent shrink-0" size={20} />
                <p className="text-sm text-blue-100/70 leading-relaxed">
                  Calle Gabriela Mistral #516, Urb. Buenos Aires, San Salvador. <br />
                  <span className="font-bold text-white">Centro de Hemodiálisis y Salud Renal.</span>
                </p>
              </li>
              <li className="flex gap-4">
                <Phone className="text-accent shrink-0" size={20} />
                <div className="text-sm text-blue-100/70 space-y-1">
                  <p>(503) 2298-6100</p>
                  <p>(503) 7327-1233</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="text-accent shrink-0" size={20} />
                <p className="text-sm text-blue-100/70">Lun-Vie: 9AM-5PM <br /> Sáb: 9AM-12M</p>
              </li>
            </ul>
          </div>

          {/* COL 4: LICENCIA Y CREDENCIALES */}
          <div className="bg-white/5 p-8 rounded-[3rem] border border-white/10 text-center flex flex-col items-center justify-center">
            <div className="text-accent font-black text-4xl mb-2 italic">#91</div>
            <p className="text-[10px] uppercase font-black tracking-[0.3em] mb-6 opacity-60">Licencia MINSAL</p>
            <div className="h-px w-12 bg-accent/30 mb-6"></div>
            <p className="text-xs text-blue-100/50 leading-relaxed">
              Clínica debidamente autorizada y registrada ante las autoridades de salud de El Salvador.
            </p>
          </div>
        </div>

        {/* COPYRIGHT BAR */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/30">
          <p>© 2026 Dr. René Ricardo Rivas Contreras - Gastroenterólogo</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white">Aviso de Privacidad</Link>
            <Link href="#" className="hover:text-white">Términos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;