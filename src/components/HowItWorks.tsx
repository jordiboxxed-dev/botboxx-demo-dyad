import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, BrainCircuit, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: <FileText className="h-8 w-8 text-indigo-400" />,
    title: "Cargás tu Info",
    emoji: "📝",
    description: "Pegás texto, subís PDFs o importás desde tu web en segundos.",
    color: "bg-indigo-500",
    shadow: "hover:shadow-indigo-500/40"
  },
  {
    number: 2,
    icon: <BrainCircuit className="h-8 w-8 text-purple-400" />,
    title: "Se Entrena Solo",
    emoji: "🤖",
    description: "La IA aprende tu negocio automáticamente, sin configuraciones complejas.",
    color: "bg-purple-500",
    shadow: "hover:shadow-purple-500/40"
  },
  {
    number: 3,
    icon: <Sparkles className="h-8 w-8 text-emerald-400" />,
    title: "Compartís y Vendés",
    emoji: "🚀",
    description: "Lo publicás en tu web y empieza a trabajar 24/7 generando leads.",
    color: "bg-emerald-500",
    shadow: "hover:shadow-emerald-500/40"
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 sm:py-32">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          3 Pasos Para <span className="text-gradient">Automatizar Tus Ventas</span>
        </h2>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className={`bg-white/5 border-white/10 backdrop-blur-lg text-white text-center p-8 transition-all duration-300 hover:-translate-y-2 relative hover:border-indigo-500/50 ${step.shadow}`}
            >
              <div className={`absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${step.color}`}>
                {step.number}
              </div>
              <CardContent className="pt-8">
                <div className="mx-auto bg-slate-800 rounded-full p-4 w-fit mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.emoji} {step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-gradient-primary text-white text-lg font-bold px-10 py-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-glow-primary">
            <a href="#lead-form">
              EMPEZAR AHORA GRATIS <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};