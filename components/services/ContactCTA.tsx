import { MessageCircle } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-20 bg-neutralbg">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="bg-white p-12 rounded-[40px] shadow-2xl shadow-blue-100 border border-blue-50">
          <h2 className="text-3xl font-extrabold text-primary mb-6">¿Necesitas un procedimiento específico?</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
            Si tienes dudas sobre algún examen o deseas consultar disponibilidad, nuestro equipo está listo para orientarte de inmediato.
          </p>
          <a 
            href="https://wa.me/50373271322"
            target="_blank"
            className="inline-flex items-center gap-3 bg-success text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-lg"
          >
            <MessageCircle size={24} />
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;