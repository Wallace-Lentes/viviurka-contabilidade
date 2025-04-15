
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Trust from "@/components/Trust";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index = () => {
  return (
    <TooltipProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Trust />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </TooltipProvider>
  );
};

export default Index;
