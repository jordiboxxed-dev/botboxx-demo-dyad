import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { VSL } from "@/components/VSL";
import { Problem } from "@/components/Problem";
import { Benefits } from "@/components/Benefits";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { Comparison } from "@/components/Comparison";
import { BusinessTypes } from "@/components/BusinessTypes";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { ChatWidget } from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="bg-slate-900 text-white">
      <Header />
      <main>
        <Hero />
        <VSL />
        <Problem />
        <Benefits />
        <FeaturesGrid />
        <HowItWorks />
        <Comparison />
        <BusinessTypes />
        <Pricing />
        <Faq />
        <FinalCTA />
        <LeadForm />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;