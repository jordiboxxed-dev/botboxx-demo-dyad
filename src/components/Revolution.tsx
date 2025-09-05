import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const beforeData = [
  { emoji: "🔥", title: "Perdían 60% de leads nocturnos", description: "Los clientes se iban a la competencia" },
  { emoji: "💸", title: "$15,000/mes en personal", description: "Solo para responder lo básico" },
  { emoji: "⏰", title: "4+ horas de respuesta", description: "Los leads ya habían decidido" },
  { emoji: "😵", title: "Equipo saturado y estresado", description: "Burnout y alta rotación" },
];

const afterData = [
  { emoji: "✅", title: "95% de leads capturados 24/7", description: "Nunca más pierden una oportunidad" },
  { emoji: "💰", title: "$500/mes total", description: "97% menos en costos operativos" },
  { emoji: "⚡", title: "Respuesta inmediata", description: "Los leads no tienen tiempo de irse" },
  { emoji: "😎", title: "Equipo enfocado en ventas", description: "Solo atienden leads calificados" },
];

const resultsData = [
    { emoji: "📈", value: "+847%", label: "Incremento en leads calificados", company: '"TechSolutions Argentina"' },
    { emoji: "💎", value: "$180k", label: "Ahorrado en primer año", company: '"Marketing Pro LATAM"' },
    { emoji: "⚡", value: "2 min", label: "Tiempo promedio de respuesta", company: '"Consultoría Empresarial"' },
];

export const Revolution = () => {
  return (
    <section className="py-20 sm:py-32 overflow-hidden">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white">
          La <span className="text-gradient">Revolución</span> Que Está Cambiando Todo
        </h2>
        <p className="mt-4 text-lg text-gray-300 text-center max-w-3xl mx-auto">
          Mientras tus competidores siguen perdiendo clientes por la noche, empresas inteligentes ya están generando ventas mientras duermen.
        </p>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-slate-900/50 border border-red-500/30 p-8 rounded-2xl">
            <div className="text-center">
              <span className="text-5xl">😰</span>
              <h3 className="mt-4 text-2xl font-bold">El Caos de Antes</h3>
            </div>
            <ul className="mt-8 space-y-6">
              {beforeData.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="bg-slate-900/50 border border-emerald-500/30 p-8 rounded-2xl ring-2 ring-emerald-500/50 shadow-glow-primary">
             <div className="text-center">
              <span className="text-5xl">🚀</span>
              <h3 className="mt-4 text-2xl font-bold">La Transformación</h3>
            </div>
            <ul className="mt-8 space-y-6">
              {afterData.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="my-16 flex flex-col items-center justify-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <ArrowRight className="h-6 w-6 text-indigo-400 transform rotate-90" />
            </div>
            <span className="text-sm font-bold text-indigo-400 tracking-widest border border-indigo-400/30 bg-indigo-900/30 px-3 py-1 rounded-full">
                TRANSFORMACIÓN COMPLETA
            </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {resultsData.map((item, index) => (
                <Card key={index} className="bg-white/5 border border-white/10 backdrop-blur-lg text-white p-6 text-center transition-all duration-300 hover:shadow-glow-primary hover:border-indigo-500/50 transform hover:-translate-y-2">
                    <span className="text-4xl">{item.emoji}</span>
                    <p className="mt-4 text-4xl font-bold text-emerald-400">{item.value}</p>
                    <p className="mt-2 text-gray-300">{item.label}</p>
                    <p className="mt-4 text-sm text-gray-500 italic">{item.company}</p>
                </Card>
            ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
            <Card className="bg-slate-900/50 border border-indigo-500/30 p-8 rounded-2xl text-center shadow-2xl shadow-indigo-500/20">
                <h3 className="text-3xl font-bold text-white">¿Seguirás Perdiendo Ventas Esta Noche?</h3>
                <p className="mt-4 text-gray-300">
                    Mientras lees esto, tus competidores ya están capturando leads que podrían ser tuyos. Cada minuto que pasa sin BotBoxx es dinero que se va de tus manos.
                </p>
                <Button asChild size="lg" className="mt-8 w-full sm:w-auto bg-gradient-primary text-white text-lg font-bold px-10 py-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-glow-primary">
                    <a href="#lead-form">BASTA DE PERDER VENTAS - EMPEZAR AHORA <ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
                <p className="mt-4 text-xs text-gray-500">
                    ⏰ Configuración en 5 minutos • 🆓 Prueba completamente gratis
                </p>
            </Card>
        </div>
      </div>
    </section>
  );
};