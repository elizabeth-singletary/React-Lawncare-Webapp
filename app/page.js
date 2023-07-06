import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import './globals.css';

export default function Home() {
  return (
    <section>
    <NavBar />
    <Hero />
    <AboutUs />
    <Services />
    <Pricing />
    <CallToAction />
    <Footer />
    </section>
  );
}
