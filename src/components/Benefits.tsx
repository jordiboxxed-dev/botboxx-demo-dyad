import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Zap, Target, TrendingUp, Settings, Infinity } from "lucide-react";

const benefits = [
  {
    icon: <Zap className="h-8 w-8 text-indigo-400" />,
    title: "Configuración Instantánea",
    description: "Pegás tu información y en 5 minutos tenés tu agente listo para vender.",
  },
  {
    icon: <Target className="h-8 w-8 text-indigo-400" />,
    title: "Califica Leads Automáticamente",
    description: "Solo pasa a tu equipo clientes que realmente están listos para comprar.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-indigo-400" />,
    title: "ROI Inmediato",
    description: "Reduce costos operativos mientras aumentás tus conversiones desde el primer día.",
  },
  {
    icon: <Settings className="h-8 w-8 text-indigo-400" />,
    title: "Cero Mantenimiento",
    description: "Se actualiza solo y funciona 24/7 sin necesidad de intervención humana.",
  },
  {
    icon: <Infinity className="h-8 w-8 text-indigo-400" />,
    title: "Escala Ilimitada",
    description: "Atiende a 1, 100 o 1000 clientes simultáneamente sin perder calidad.",
  },
];

export const Benefits = () => {
  return (
    <section id="features" className="py-20 sm:py-32 bg-white/5">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Por Qué las Empresas Eligen BotBoxx
        </h2>
        <p className="mt-4 text-lg text-gray-400 text-center max-w-2xl mx-auto">
          No es solo un chatbot. Es tu mejor vendedor, trabajando incansablemente para hacer crecer tu negocio.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-transparent border-0 shadow-none text-white">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-indigo-900/50 rounded-full p-3 w-fit">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};