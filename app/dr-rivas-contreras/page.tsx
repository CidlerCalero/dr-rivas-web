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