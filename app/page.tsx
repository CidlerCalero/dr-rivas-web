import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Services from "../components/home/Services";
import Staff from "../components/home/Staff";
import Testimonials from "../components/home/Testimonials"; // Importar
import ContactMap from "../components/home/ContactMap"; 

export default function Page() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Staff />
      <Testimonials />
      <ContactMap />
     
    </>
  );
}