"use client";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    servicio: "",
    mensaje: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido";
    } else if (!/^[0-9-]{8,}$/.test(formData.telefono.replace(/\s/g, ""))) {
      newErrors.telefono = "Formato de teléfono inválido";
    }

    if (!formData.servicio) {
      newErrors.servicio = "Selecciona un servicio";
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "Describe tu consulta";
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "Mensaje muy corto (mínimo 10 caracteres)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");

    // Simular envío (aquí conectarías tu backend o servicio de email)
    setTimeout(() => {
      // Redirigir a WhatsApp con el mensaje
      const whatsappMessage = `
Hola, me gustaría agendar una consulta:

*Nombre:* ${formData.nombre}
*Teléfono:* ${formData.telefono}
*Servicio:* ${formData.servicio}
*Consulta:* ${formData.mensaje}
      `.trim();

      const whatsappURL = `https://wa.me/50373271322?text=${encodeURIComponent(whatsappMessage)}`;
      
      setStatus("success");
      
      // Abrir WhatsApp después de 1.5s
      setTimeout(() => {
        window.open(whatsappURL, "_blank");
        // Reset form
        setFormData({ nombre: "", telefono: "", servicio: "", mensaje: "" });
        setStatus("idle");
      }, 1500);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-blue-100 border border-gray-50 relative overflow-hidden">
      
      {/* Decoración sutil */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-0"></div>

      <div className="relative z-10">
        <div className="mb-8">
          <h2 className="text-3xl lg:text-4xl font-black text-primary mb-3 tracking-tight">
            Envíanos un Mensaje
          </h2>
          <p className="text-gray-500">
            Completa el formulario y te contactaremos a la brevedad
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* NOMBRE */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-4 flex items-center gap-2">
              Nombre Completo
              <span className="text-red-500">*</span>
            </label>
            <input 
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej. Juan Pérez" 
              className={`w-full px-6 py-4 rounded-2xl bg-neutralbg border-2 transition-all outline-none font-medium
                ${errors.nombre 
                  ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100" 
                  : "border-transparent focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10"
                }
              `}
            />
            <AnimatePresence>
              {errors.nombre && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-red-500 text-sm ml-4 flex items-center gap-1"
                >
                  <AlertCircle size={14} />
                  {errors.nombre}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* TELÉFONO */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-4 flex items-center gap-2">
              Teléfono / WhatsApp
              <span className="text-red-500">*</span>
            </label>
            <input 
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Ej. 7000-0000" 
              className={`w-full px-6 py-4 rounded-2xl bg-neutralbg border-2 transition-all outline-none font-medium
                ${errors.telefono 
                  ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100" 
                  : "border-transparent focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10"
                }
              `}
            />
            <AnimatePresence>
              {errors.telefono && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-red-500 text-sm ml-4 flex items-center gap-1"
                >
                  <AlertCircle size={14} />
                  {errors.telefono}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          
          {/* SERVICIO */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-4 flex items-center gap-2">
              Servicio de Interés
              <span className="text-red-500">*</span>
            </label>
            <select
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
              className={`w-full px-6 py-4 rounded-2xl bg-neutralbg border-2 transition-all outline-none appearance-none font-medium
                ${errors.servicio 
                  ? "border-red-300 focus:border-red-500" 
                  : "border-transparent focus:bg-white focus:border-accent"
                }
                ${!formData.servicio ? "text-gray-400" : "text-gray-700"}
              `}
            >
              <option value="">Selecciona un servicio...</option>
              <option value="Consulta General">Consulta General</option>
              <option value="Endoscopía Digestiva">Endoscopía Digestiva</option>
              <option value="Video Colonoscopía">Video Colonoscopía</option>
              <option value="Gastrostomía (GEP)">Gastrostomía (GEP)</option>
              <option value="Ligadura de Várices">Ligadura de Várices Esofágicas</option>
              <option value="Esclerosis de Úlceras">Esclerosis de Úlceras</option>
              <option value="Clip Hemostático">Colocación de Clip Hemostático</option>
              <option value="Otro">Otro procedimiento</option>
            </select>
            <AnimatePresence>
              {errors.servicio && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-red-500 text-sm ml-4 flex items-center gap-1"
                >
                  <AlertCircle size={14} />
                  {errors.servicio}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* MENSAJE */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-4 flex items-center gap-2">
              Describe tu Consulta
              <span className="text-red-500">*</span>
            </label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={4} 
              placeholder="Cuéntanos sobre tus síntomas o dudas..." 
              className={`w-full px-6 py-4 rounded-2xl bg-neutralbg border-2 transition-all outline-none resize-none font-medium
                ${errors.mensaje 
                  ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100" 
                  : "border-transparent focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10"
                }
              `}
            ></textarea>
            <AnimatePresence>
              {errors.mensaje && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-red-500 text-sm ml-4 flex items-center gap-1"
                >
                  <AlertCircle size={14} />
                  {errors.mensaje}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* BOTÓN SUBMIT */}
          <button 
            type="submit"
            disabled={status === "loading" || status === "success"}
            className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95
              ${status === "loading" || status === "success"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary text-white hover:bg-accent shadow-blue-200 hover:shadow-accent/30"
              }
            `}
          >
            {status === "loading" && (
              <>
                <Loader2 size={24} className="animate-spin" />
                Enviando...
              </>
            )}
            {status === "success" && (
              <>
                <CheckCircle size={24} />
                ¡Enviado! Abriendo WhatsApp...
              </>
            )}
            {status === "idle" && (
              <>
                <Send size={24} />
                Enviar Consulta
              </>
            )}
            {status === "error" && (
              <>
                <AlertCircle size={24} />
                Intentar de Nuevo
              </>
            )}
          </button>

          {/* NOTA DE PRIVACIDAD */}
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            Al enviar este formulario, serás redirigido a WhatsApp para confirmar tu consulta. 
            Tus datos están protegidos y solo serán usados para contactarte.
          </p>

        </form>
      </div>

    </div>
  );
};

export default ContactForm;