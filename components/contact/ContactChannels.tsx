"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // Importamos Image
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const channels = [
  { 
    title: "WhatsApp", 
    info: "7327-1322", 
    subtitle: "Respuesta inmediata",
    link: "https://wa.me/50373271322?text=Hola,%20deseo%20agendar%20una%20consulta", 
    icon: (
      <div className="relative w-9 h-9">
        <Image 
          src="/images/WhatsApp.svg" 
          alt="WhatsApp" 
          fill 
          className="object-contain" // Si quieres que sea blanco puro agrega: brightness-0 invert
        />
      </div>
    ), 
    color: "bg-success",
    gradient: "from-success to-success/80"
  },
  { 
    title: "Teléfono", 
    info: "2298-6100", 
    subtitle: "Línea directa",
    link: "tel:50322986100", 
    icon: <Phone size={32} />, 
    color: "bg-blue-600",
    gradient: "from-blue-600 to-blue-500"
  },
  { 
    title: "Waze", 
    info: "Cómo Llegar", 
    subtitle: "Navegación GPS",
    link: "https://ul.waze.com/ul?place=ChIJUyxwy4IxY48R1adJT5dynSM&ll=13.71136360%2C-89.21036910&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location", 
    // CAMBIO AQUÍ: Usamos Image con un contenedor para mantener proporción
    icon: (
      <div className="relative w-9 h-9">
        <Image 
          src="/images/waze-icon.svg" 
          alt="Waze" 
          fill 
          className="object-contain" // Si quieres que sea blanco puro agrega: brightness-0 invert
        />
      </div>
    ), 
    color: "bg-blue-400",
    gradient: "from-blue-400 to-cyan-400"
  },
  { 
    title: "Correo", 
    info: "Enviar Email", 
    subtitle: "Respuesta en 24hrs",
    link: "mailto:umgastroquirurgica@hotmail.com", 
    icon: <Mail size={32} />, 
    color: "bg-primary",
    gradient: "from-primary to-primary/80"
  },
];

const ContactChannels = () => {
  return (
    <section className="pb-24 px-4 bg-white relative">
      
      {/* TÍTULO DE SECCIÓN */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-black text-primary mb-3">
            Elige tu Canal Preferido
          </h2>
          <p className="text-gray-500">
            Todas nuestras vías de contacto están disponibles para ti
          </p>
        </motion.div>
      </div>

      {/* GRID DE CANALES */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {channels.map((c, i) => (
          <motion.a
            key={i}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative flex flex-col items-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-transparent group overflow-hidden"
          >
            {/* BACKGROUND GRADIENT ON HOVER */}
            <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

            {/* ÍCONO */}
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className={`relative w-20 h-20 ${c.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-all z-10`}
            >
              {c.icon}
              {/* PULSE EFFECT */}
              <div className={`absolute inset-0 ${c.color} rounded-2xl animate-ping opacity-20 group-hover:opacity-40`}></div>
            </motion.div>

            {/* INFO */}
            <div className="text-center space-y-2 relative z-10">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">
                {c.title}
              </p>
              <p className="text-primary font-black text-xl group-hover:text-accent transition-colors">
                {c.info}
              </p>
              <p className="text-gray-500 text-sm">
                {c.subtitle}
              </p>
            </div>

            {/* FLECHA INDICADORA */}
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
              className="absolute bottom-4 right-4 text-accent"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.a>
        ))}
      </div>

      {/* INFO ADICIONAL */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-16"
      >
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            
            {/* HORARIO */}
            <div className="flex-1">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Clock className="text-primary" size={20} />
                </div>
                <h3 className="font-bold text-primary">Horario de Atención</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="font-semibold">Lunes a Viernes:</span> 9:00 AM - 5:00 PM<br/>
                <span className="font-semibold">Sábado:</span> 9:00 AM - 12:00 M<br/>
                <span className="text-gray-400 italic">Domingo: Cerrado</span>
              </p>
            </div>

            {/* SEPARADOR */}
            <div className="hidden md:block w-px h-20 bg-gray-200"></div>

            {/* DIRECCIÓN */}
            <div className="flex-1">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <MapPin className="text-accent" size={20} />
                </div>
                <h3 className="font-bold text-accent">Nuestra Dirección</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Calle Gabriela Mistral #516<br/>
                Urb. Buenos Aires<br/>
                San Salvador, El Salvador
              </p>
            </div>

          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default ContactChannels;