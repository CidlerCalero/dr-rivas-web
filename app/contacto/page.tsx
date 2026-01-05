import ContactHero from "../../components/contact/ContactHero";
import ContactCards from "../../components/contact/ContactCards";
import ContactForm from "../../components/contact/ContactForm";

export default function ContactoPage() {
  return (
    <div className="pt-20">
      <ContactHero />
      <ContactCards />
      <ContactForm />
      
      {/* Sección de cierre con el mapa que ya tenemos */}
      <section className="bg-neutralbg py-10">
        <div className="max-w-7xl mx-auto px-4">
           <div className="rounded-[40px] overflow-hidden shadow-2xl h-[450px] border-8 border-white">
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.132849504443!2d-89.20815!3d13.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6330960a349c25%3A0xc3c945143a59577!2sCalle%20Gabriela%20Mistral%20516%2C%20San%20Salvador!5e0!3m2!1ses!2ssv!4v1700000000000!5m2!1ses!2ssv"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
           </div>
        </div>
      </section>
    </div>
  );
}