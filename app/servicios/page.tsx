import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios y Procedimientos Gastroenterológicos | Dr. Rivas Contreras",
  description: "Especialistas en Endoscopía Digestiva, Video Colonoscopía, Ligadura de Várices y Gastrostomía (GEP). Diagnóstico preciso con tecnología de vanguardia.",
  keywords: ["Endoscopía El Salvador", "Colonoscopía San Salvador", "Gastrostomía GEP", "Tratamiento de úlceras gástricas", "Ligadura de várices esofágicas"],
  openGraph: {
    title: "Especialidades en Gastroenterología | San Salvador",
    description: "Procedimientos diagnósticos y terapéuticos con sedoanalgesia y resultados el mismo día.",
    url: "https://drrivascontrerasgastro.com/servicios",
    images: ["/images/service-endoscopia.jpg"],
  },
};

import ServicesHero from "../../components/services/ServicesHero";
import ServiceCatalog from "../../components/services/ServiceCatalog";
import AppointmentCTA from "../../components/services/AppointmentCTA";

export default function ServiciosPage() {
  return (
    <div className="pt-20">
      <ServicesHero />
      <ServiceCatalog />
      <AppointmentCTA />
    </div>
  );
}