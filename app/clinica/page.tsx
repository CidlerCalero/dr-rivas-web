import ClinicHero from "../../components/clinic/ClinicHero";
import Facilities from "../../components/clinic/Facilities";
import StaffDetail from "../../components/clinic/StaffDetail";
import WhyUs from "../../components/clinic/WhyUs";

export default function ClinicaPage() {
  return (
    <div className="pt-20">
      <ClinicHero />
      <Facilities />
      <StaffDetail />
      <WhyUs />
    </div>
  );
}