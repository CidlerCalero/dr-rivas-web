"use client";
import { ShieldCheck, Snowflake, ParkingCircle, Activity } from "lucide-react";

const features = [
  { icon: <ShieldCheck size={32} />, title: "Licencia #91", desc: "Clínica certificada y regulada por el Ministerio de Salud." },
  { icon: <Activity size={32} />, title: "Equipo 2024", desc: "Tecnología endoscópica de última generación para diagnósticos precisos." },
  { icon: <Snowflake size={32} />, title: "Climatizado", desc: "Ambiente confortable y esterilizado para tu seguridad." },
  { icon: <ParkingCircle size={32} />, title: "Parqueo Amplio", desc: "Fácil acceso y seguridad para tu vehículo durante tu visita." },
];

const Facilities = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-3xl border border-gray-100 hover:bg-neutralbg transition-colors text-center">
              <div className="text-accent mb-6 flex justify-center">{f.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;