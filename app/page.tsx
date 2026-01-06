import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Services from "../components/home/Services";
import Experience from "../components/home/Experience";
import DigestiveCare from "../components/home/DigestiveCare"; // Nuevo
import Testimonials from "../components/home/Testimonials"; // Importar
import ContactMap from "../components/home/ContactMap";     // Nuevo


export default function Page() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Experience />
      <DigestiveCare />
      <Testimonials /> {/* Añadido aquí */}
      <ContactMap />
     
    </>
  );
}