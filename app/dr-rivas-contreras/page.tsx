import DrHero from "../../components/doctor/DrHero";
import Timeline from "../../components/doctor/Timeline";
import Certifications from "../../components/doctor/Certifications";

export default function DoctorPage() {
  return (
    <div className="pt-20"> 
      <DrHero />
      <Timeline />
      <Certifications />
      
      <section className="py-20 bg-primary text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 italic">
            &quot;Mi compromiso es dedicar el tiempo que cada paciente necesita. La medicina es técnica, pero sobre todo es comprensión humana.&quot;
          </h2>
          <p className="text-blue-200 font-bold uppercase tracking-widest text-sm">— Dr. René Ricardo Rivas Contreras</p>
        </div>
      </section>
    </div>
  );
}