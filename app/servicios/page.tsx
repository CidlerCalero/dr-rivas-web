import ServicesHero from "@/components/services/ServicesHero";
import ServiceCatalog from "@/components/services/ServiceCatalog";
import ContactCTA from "@/components/services/ContactCTA";

export default function ServiciosPage() {
  return (
    <div className="pt-20">
      <ServicesHero />
      <ServiceCatalog />
      <ContactCTA />
    </div>
  );
}