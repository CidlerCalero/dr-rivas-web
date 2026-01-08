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