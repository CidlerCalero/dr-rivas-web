"use client";
import { Check } from "lucide-react";

const certs = [
  "XXI Congreso Centroamericano de Gastroenterología",
  "Curso Internacional de Endoscopía Terapéutica",
  "Congreso Panamericano de Gastroenterología (Panamá)",
  "XVI Congreso Nacional (República Dominicana)",
  "Actualización en Riesgos en Gastroenterología",
  "Certificación en Técnicas de Hemostasia Endoscópica"
];

const Certifications = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-primary mb-12">Formación Continua</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <div key={i} className="flex items-center gap-4 p-5 bg-neutralbg rounded-2xl border border-gray-50 text-left">
              <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center text-success shrink-0">
                <Check size={18} />
              </div>
              <span className="text-sm font-medium text-gray-700 leading-tight">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;