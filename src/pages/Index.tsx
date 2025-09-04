import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { VSL } from "@/components/VSL";
import { Problem } from "@/components/Problem";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";

const Index = () => {
  return (
    <div className="bg-slate-900 text-white">
      <Header />
      <main>
        <Hero />
        <VSL />
        <Problem />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <Faq />
        <FinalCTA />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;