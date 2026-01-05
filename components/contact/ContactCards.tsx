"use client";
import { Phone, MessageCircle, Navigation, Mail } from "lucide-react";

const contacts = [
  { 
    title: "Llámanos", 
    info: "(503) 2298-6100", 
    sub: "Atención inmediata", 
    icon: <Phone />, 
    color: "bg-blue-600",
    link: "tel:50322986100"
  },
  { 
    title: "WhatsApp", 
    info: "7327-1322", 
    sub: "Agendar por chat", 
    icon: <MessageCircle />, 
    color: "bg-success",
    link: "https://wa.me/50373271322"
  },
  { 
    title: "Waze", 
    info: "Cómo llegar", 
    sub: "Urb. Buenos Aires", 
    icon: <Navigation />, 
    color: "bg-blue-400",
    link: "https://waze.com/ul?ll=13.71,-89.20815&navigate=yes"
  },
  { 
    title: "Correo", 
    info: "umgastroquirurgica@hotmail.com", 
    sub: "Consultas generales", 
    icon: <Mail />, 
    color: "bg-primary",
    link: "mailto:umgastroquirurgica@hotmail.com"
  },
];

const ContactCards = () => {
  return (
    <section className="py-16 bg-white relative -mt-10 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((c, i) => (
            <a 
              href={c.link} 
              key={i}
              target="_blank"
              className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all border border-gray-50 text-center"
            >
              <div className={`w-16 h-16 ${c.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                {c.icon}
              </div>
              <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">{c.title}</h3>
              <p className="text-primary font-bold text-lg mb-1 break-all">{c.info}</p>
              <span className="text-gray-400 text-xs font-medium italic">{c.sub}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCards;