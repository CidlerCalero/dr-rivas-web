import { Metadata } from "next";
import ContactContent from "../../components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contacto y Citas | Agenda con el Dr. Rivas Contreras",
  description: "Reserve su consulta vía WhatsApp o teléfono. Ubicación estratégica en San Salvador, Centro de Hemodiálisis y Salud Renal.",
  keywords: ["Cita Gastroenterólogo El Salvador", "WhatsApp Dr. Rivas Contreras", "Dirección Dr. Rivas Contreras", "Gastroenterología Colonia Buenos Aires"],
  openGraph: {
    title: "Agendar Cita | Dr. René Rivas Contreras",
    description: "Atención personalizada de Lunes a Viernes. Contáctanos por el medio de tu preferencia.",
    url: "https://drrivascontrerasgastro.com/contacto",
    images: ["/images/contact-ubicacion.webp"],
  },
};

export default function ContactoPage() {
  return <ContactContent />;
}