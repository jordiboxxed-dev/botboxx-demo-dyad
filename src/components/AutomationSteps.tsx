import { Card, CardContent } from "@/components/ui/card";
import { FileText, Brain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AutomationSteps = () => {
  const steps = [
    {
      icon: <FileText className="h-8 w-8 text-indigo-400" />,
      title: "Cargás tu Info",
      description: "Pegás texto, subís PDFs o importás desde tu web en segundos"
    },
    {
      icon: <Brain className="h-8 w-8 text-indigo-400" />,
      title: "Se Entrena Solo",
      description: "La IA aprende tu negocio automáticamente, sin configuraciones complejas"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-indigo-400" />,
      title: "Compartís y Vendés",
      description: "Lo publicás en tu web y empieza a trabajar 24/7 generando leads"
    }
  ];

  return (
    <section className="py-20 sm:py-32">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          3 Pasos Para <span className="text-gradient">Automatizar Tus Ventas</span>
        </h2>
        <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Una solución completa que transforma tu información en un vendedor virtual
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="
                bg-white/5 border border-white/10 backdrop-blur-lg text-white
                transition-all duration-300 hover:shadow-glow-primary hover:border-indigo-500/50
                transform hover:-translate-y-2 overflow-hidden
              "
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-indigo-900/50 rounded-full p-3 w-fit">
                    {step.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-indigo-400 mb-2">0{index + 1}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-gradient-primary text-white text-lg font-bold px-10 py-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-glow-primary">
            <a href="#lead-form">EMPEZAR AHORA GRATIS</a>
          </Button>
        </div>
      </div>
    </section>
  );
};