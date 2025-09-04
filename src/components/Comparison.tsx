import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Check } from "lucide-react";

const comparisonData = [
  {
    id: "before",
    title: "❌ SIN BotBoxx",
    metrics: [
      { label: "Tiempo de respuesta", value: "8 horas", negative: true },
      { label: "Leads perdidos", value: "60%", negative: true },
      { label: "Costo por lead", value: "$50", negative: true },
      { label: "Disponibilidad", value: "8 hrs/día", negative: true },
      { label: "Conversión", value: "2-3%", negative: true },
    ],
  },
  {
    id: "after",
    title: "✅ CON BotBoxx",
    metrics: [
      { label: "Tiempo de respuesta", value: "Instantáneo", negative: false },
      { label: "Leads perdidos", value: "5%", negative: false },
      { label: "Costo por lead", value: "$5", negative: false },
      { label: "Disponibilidad", value: "24/7", negative: false },
      { label: "Conversión", value: "12-15%", negative: false },
    ],
  },
];

export const Comparison = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          El Antes y Después de BotBoxx
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {comparisonData.map((item) => (
            <Card 
              key={item.id}
              className={`
                bg-white/5 border border-white/10 backdrop-blur-lg text-white
                transition-all duration-300 hover:shadow-glow-primary hover:border-indigo-500/50
                transform hover:-translate-y-2 overflow-hidden
                ${item.id === "after" ? "ring-2 ring-indigo-500/30" : ""}
              `}
            >
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {item.metrics.map((metric, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center py-3 border-b border-white/10 last:border-0"
                  >
                    <span className="text-gray-300">{metric.label}</span>
                    <span className={`font-bold ${metric.negative ? "text-red-400" : "text-emerald-400"}`}>
                      {metric.value}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};