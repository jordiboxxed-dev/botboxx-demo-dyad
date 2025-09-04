import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, ZapOff, DollarSign } from "lucide-react";

const painPoints = [
  {
    icon: <Clock className="h-8 w-8 text-purple-400" />,
    title: "Perdés ventas mientras dormís",
    description: "No hay nadie para responder a tus clientes potenciales fuera del horario laboral.",
  },
  {
    icon: <Users className="h-8 w-8 text-purple-400" />,
    title: "Equipo saturado",
    description: "Tu equipo pierde tiempo valioso respondiendo las mismas preguntas una y otra vez.",
  },
  {
    icon: <ZapOff className="h-8 w-8 text-purple-400" />,
    title: "Leads que se enfrían",
    description: "Los clientes se van a la competencia por la falta de una respuesta inmediata.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-purple-400" />,
    title: "Costos operativos altos",
    description: "Gastás una fortuna en personal para tareas repetitivas que un bot puede hacer.",
  },
];

export const Problem = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          ¿Te Suena Familiar?
        </h2>
        <p className="mt-4 text-lg text-gray-400 text-center max-w-2xl mx-auto">
          Tu negocio tiene un potencial increíble, pero estos problemas te están frenando todos los días.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-lg text-white text-center transition-all duration-300 hover:shadow-glow-primary hover:border-indigo-500/50 hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-purple-900/50 rounded-full p-3 w-fit">
                  {point.icon}
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold">{point.title}</h3>
                <p className="mt-2 text-gray-400">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};