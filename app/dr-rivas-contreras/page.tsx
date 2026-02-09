import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trayectoria y Formación | Dr. René Ricardo Rivas Contreras",
  description: "Conoce al Dr. Rivas Contreras, especialista formado en la UES y el Hospital Nacional de México, con más de 25 años de staff en el Hospital Rosales.",
  keywords: ["Trayectoria Dr. Rivas Contreras", "Especialista Gastroenterología El Salvador", "Médico Hospital Rosales", "Gastroenterólogo UES"],
  openGraph: {
    title: "Trayectoria y Experiencia | Dr. René Rivas Contreras",
    description: "Médico Gastroenterólogo e Internista con certificación internacional.",
    url: "https://drrivascontrerasgastro.com/dr-rivas-contreras",
    images: ["/images/doctor-hero.webp"],
  },
};

import DrHeroProfile from "../../components/doctor/DrHeroProfile";
import AcademicTrajectory from "../../components/doctor/AcademicTrajectory";
import TeachingCommitment from "../../components/doctor/TeachingCommitment";
import CertificationGrid from "../../components/doctor/CertificationGrid";
import Stats from "../../components/home/Stats"; // Reutilizamos tus números pro

export default function DoctorPage() {
  return (
    <div className="pt-20 bg-white">
      <DrHeroProfile />
      <Stats />
      <AcademicTrajectory />
      <TeachingCommitment />
      <CertificationGrid />
      
      {/* Cierre de página */}
      <section className="py-20 bg-neutralbg text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-primary font-black text-2xl italic leading-relaxed">
            &quot;Mi mayor satisfacción es ver la recuperación de mis pacientes y transmitir mi conocimiento a las nuevas generaciones de médicos.&quot;
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-8"></div>
        </div>
      </section>
    </div>
  );
}