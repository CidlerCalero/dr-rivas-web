"use client";
import { motion } from "framer-motion";

const events = [
  { year: "1993", title: "Graduación UES", desc: "Obtiene el título de Doctor en Medicina de la Universidad Nacional de El Salvador." },
  { year: "1996", title: "Medicina Interna", desc: "Completa su especialidad en el Hospital Nacional Rosales." },
  { year: "1999", title: "Gastroenterología", desc: "Sub-especialización realizada en el Hospital Nacional de México." },
  { year: "1998-Hoy", title: "Staff Hosp. Rosales", desc: "Miembro vital del staff de Medicina Interna por más de 25 años." },
  { year: "Actualidad", title: "Unidad Rivas Torres", desc: "Liderando la salud digestiva con tecnología de vanguardia y calidez humana." }
];

const Timeline = () => {
  return (
    <section className="py-24 bg-neutralbg">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-primary">Una Trayectoria de Excelencia</h2>
          <p className="text-gray-500 mt-2">Más de 30 años de hitos profesionales</p>
        </div>

        {/* Línea central */}
        <div className="relative border-l-4 border-blue-100 ml-4 md:ml-0 md:left-1/2">
          {events.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative mb-16 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right md:left-[-50%]" : "md:pl-12 md:left-[50%]"}`}
            >
              {/* Punto en la línea (Aquí estaba el error, ya corregido) */}
              <div className={`absolute top-0 w-8 h-8 bg-accent rounded-full border-4 border-white shadow-md left-[-22px] md:left-auto md:right-[-20px] z-10 ${i % 2 !== 0 ? "md:left-[-20px]" : ""}`} />
              
              <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <span className="text-accent font-black text-2xl mb-1 block tracking-tighter">{event.year}</span>
                <h3 className="text-primary font-bold text-lg mb-2">{event.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;