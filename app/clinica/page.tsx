import ClinicHero from "../../components/clinic/ClinicHero";
import ClinicPhilosophy from "../../components/clinic/ClinicPhilosophy";
import ClinicGallery from "../../components/clinic/ClinicGallery";
import StaffDetail from "../../components/clinic/StaffDetail";
import WhyUs from "../../components/clinic/WhyUs";
import ContactCTA from "../../components/services/ContactCTA";

export default function ClinicaPage() {
  return (
    <div className="pt-20 bg-white">
      <ClinicHero />
      <ClinicPhilosophy />
      <ClinicGallery />
      <StaffDetail />
      <WhyUs />
      <ContactCTA />
    </div>
  );
}