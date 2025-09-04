import { Card, CardContent } from "@/components/ui/card";
import { Mic, Volume2, FileText, Calendar, BarChart3, Globe, Palette, Plug } from "lucide-react";

const features = [
  {
    icon: <Mic className="h-6 w-6 text-indigo-400" />,
    title: "Reconocimiento de voz",
    description: "Comprende comandos de voz naturalmente"
  },
  {
    icon: <Volume2 className="h-6 w-6 text-indigo-400" />,
    title: "Síntesis de voz",
    description: "Responde con voz natural y personalizada"
  },
  {
    icon: <FileText className="h-6 w-6 text-indigo-400" />,
    title: "Procesa PDFs",
    description: "Lee y entiende documentos automáticamente"
  },
  {
    icon: <Calendar className="h-6 w-6 text-indigo-400" />,
    title: "Agendamiento",
    description: "Coordina citas automáticamente"
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-indigo-400" />,
    title: "Analíticas",
    description: "Reportes detallados de conversaciones"
  },
  {
    icon: <Globe className="h-6 w-6 text-indigo-400" />,
    title: "Integración web",
    description: "Importa desde URLs automáticamente"
  },
  {
    icon: <Palette className="h-6 w-6 text-indigo-400" />,
    title: "Marca personalizada",
    description: "100% tu imagen corporativa"
  },
  {
    icon: <Plug className="h-6 w-6 text-indigo-400" />,
    title: "CRM integrado",
    description: "Conecta con tus herramientas"
  }
];

export const FeaturesGrid = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Tecnología de Punta, <span className="text-gradient">Fácil de Usar</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="
                bg-white/5 border border-white/10 backdrop-blur-lg text-white
                transition-all duration-300 hover:shadow-glow-primary hover:border-indigo-500/50
                transform hover:-translate-y-1 overflow-hidden
                p-4 flex flex-col items-center text-center
              "
            >
              <div className="mb-3 bg-indigo-900/50 rounded-full p-2 w-fit">
                {feature.icon}
              </div>
              <CardContent className="p-0">
                <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};