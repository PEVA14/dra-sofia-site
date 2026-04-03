import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Contact />
        <About />
        <Services />
        <WhyChoose />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
