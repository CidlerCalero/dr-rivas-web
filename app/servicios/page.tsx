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