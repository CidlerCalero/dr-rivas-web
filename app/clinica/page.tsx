import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestra Clínica e Instalaciones | Unidad Rivas Torres",
  description: "Visite nuestras modernas instalaciones autorizadas por el MINSAL (Licencia #91). Contamos con equipo tecnológico 2024 y staff altamente capacitado.",
  keywords: ["Clínica Gastroenterología San Salvador", "Unidad Rivas Torres", "Instalaciones Médicas autorizadas", "Seguridad del paciente gastroenterología"],
  openGraph: {
    title: "Instalaciones de la Unidad de Gastroenterología Rivas Torres",
    description: "Ambientes confortables y tecnología médica avanzada en la Colonia Buenos Aires, San Salvador.",
    url: "https://drrivascontrerasgastro.com/clinica",
    images: ["/images/staff-full.webp"],
  },
};

import ClinicHero from "../../components/clinic/ClinicHero";
import ClinicPhilosophy from "../../components/clinic/ClinicPhilosophy";
import ClinicGallery from "../../components/clinic/ClinicGallery";
import StaffDetail from "../../components/clinic/StaffDetail";
import WhyUs from "../../components/clinic/WhyUs";
import AppointmentCTA from "../../components/services/AppointmentCTA";

export default function ClinicaPage() {
  return (
    <div className="bg-white">
      <ClinicHero />
      <ClinicPhilosophy />
      <ClinicGallery />
      <StaffDetail />
      <WhyUs />
      <AppointmentCTA />
    </div>
  );
}