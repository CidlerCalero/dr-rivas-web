import { Metadata } from "next"; // Importante para el tipado
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Services from "../components/home/Services";
import Experience from "../components/home/Experience";
import DigestiveCare from "../components/home/DigestiveCare";
import Testimonials from "../components/home/Testimonials";
import ContactMap from "../components/home/ContactMap";

// 1. IMPLEMENTACIÓN DE METADATOS (SEO & Redes Sociales)
export const metadata: Metadata = {
  title: "Dr. René Ricardo Rivas Contreras | Gastroenterólogo en El Salvador",
  description: "Más de 30 años de experiencia en salud digestiva. Especialista en Endoscopía, Colonoscopía y tratamientos avanzados en San Salvador. ¡Agenda tu cita hoy!",
  keywords: ["Gastroenterólogo El Salvador", "Endoscopía San Salvador", "Dr. Rivas Contreras", "Colonoscopía El Salvador", "Salud Digestiva"],
  alternates: {
    canonical: "https://drrivascontrerasgastro.com",
  },
  openGraph: {
    title: "Dr. René Ricardo Rivas Contreras | Gastroenterólogo",
    description: "Especialista senior en Gastroenterología y Medicina Interna con tecnología de vanguardia.",
    url: "https://drrivascontrerasgastro.com",
    siteName: "Dr. Rivas Contreras Gastro",
    images: [
      {
        url: "/images/doctor-hero.webp", // Imagen que saldrá al compartir por WhatsApp/Facebook
        width: 1200,
        height: 630,
        alt: "Dr. René Ricardo Rivas Contreras",
      },
    ],
    locale: "es_SV",
    type: "website",
  },
};

export default function Page() {
  // 2. DATOS ESTRUCTURADOS (JSON-LD) - Esto le encanta a Google para SEO Local
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. René Ricardo Rivas Contreras",
    "image": "https://drrivascontrerasgastro.com/images/doctor-hero.webp",
    "description": "Gastroenterólogo e Internista con más de 30 años de experiencia.",
    "medicalSpecialty": "Gastroenterology",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Gabriela Mistral #516 Urb. Buenos Aires",
      "addressLocality": "San Salvador",
      "addressCountry": "SV"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.711364",
      "longitude": "-89.210369"
    },
    "telephone": "+50322986100",
    "url": "https://drrivascontrerasgastro.com",
    "openingHours": "Mo-Fr 09:00-17:00"
  };

  return (
    <>
      {/* Insertar el JSON-LD para que Google lo lea pero el usuario no lo vea */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Hero />
      <Stats />
      <Services />
      <Experience />
      <DigestiveCare />
      <Testimonials />
      <ContactMap />
    </>
  );
}