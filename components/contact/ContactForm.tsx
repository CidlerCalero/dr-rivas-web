"use client";
import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-primary mb-4">Envíanos un mensaje</h2>
          <p className="text-gray-500">Completa el formulario y te contactaremos a la brevedad posible.</p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-2">Nombre Completo</label>
              <input type="text" placeholder="Ej. Juan Pérez" className="w-full px-6 py-4 rounded-2xl bg-neutralbg border-transparent focus:bg-white focus:border-accent focus:ring-0 transition-all outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-2">Teléfono / WhatsApp</label>
              <input type="tel" placeholder="Ej. 7000-0000" className="w-full px-6 py-4 rounded-2xl bg-neutralbg border-transparent focus:bg-white focus:border-accent focus:ring-0 transition-all outline-none" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-2">Motivo de consulta</label>
            <select className="w-full px-6 py-4 rounded-2xl bg-neutralbg border-transparent focus:bg-white focus:border-accent focus:ring-0 transition-all outline-none appearance-none">
              <option>Consulta General</option>
              <option>Cita para Endoscopía</option>
              <option>Cita para Colonoscopía</option>
              <option>Otro procedimiento</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-2">Mensaje (Opcional)</label>
            <textarea rows={4} placeholder="Escribe aquí tus dudas..." className="w-full px-6 py-4 rounded-2xl bg-neutralbg border-transparent focus:bg-white focus:border-accent focus:ring-0 transition-all outline-none resize-none"></textarea>
          </div>

          <button type="button" className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-accent transition-colors shadow-xl shadow-blue-100">
            <Send size={24} />
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;