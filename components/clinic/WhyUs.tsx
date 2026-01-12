"use client";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Más de 30 años de experiencia comprobada.",
  "Atención personalizada y sin prisas.",
  "Ubicación céntrica y segura en San Salvador.",
  "Staff altamente capacitado y con calidad humana.",
  "Estudios y exámenes de acuerdo a tu necesidad.",
  "Seguimiento constante post-procedimiento."
];

const WhyUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[40px] p-8 md:p-16 text-white overflow-hidden relative">
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                ¿Por qué confiar su salud en nosotros?
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Entendemos que un procedimiento digestivo puede generar dudas. Por eso, nuestra filosofía se basa en la transparencia, la seguridad y el trato digno.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reasons.map((reason, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent shrink-0" size={20} />
                    <span className="text-sm font-medium">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="aspect-square bg-blue-500/20 rounded-full flex items-center justify-center p-8">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center">
                  <div className="text-5xl font-black text-accent mb-2">+10k</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-blue-100">
                    Pacientes Satisfechos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;