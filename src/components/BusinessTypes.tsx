import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const businessTypes = [
  {
    emoji: "🏪",
    title: "Retail",
    description: "Consultas de productos, verificación de stock, precios actualizados y recomendaciones personalizadas"
  },
  {
    emoji: "🏗️",
    title: "Construcción",
    description: "Presupuestos automáticos, especificaciones técnicas, plazos de obra y seguimiento de proyectos"
  },
  {
    emoji: "💄",
    title: "Servicios",
    description: "Reserva de citas, consultas especializadas, calificación de clientes y seguimiento personalizado"
  },
  {
    emoji: "🍕",
    title: "Restaurantes",
    description: "Reservas automáticas, consultas de menú, pedidos de delivery y recomendaciones gastronómicas"
  },
  {
    emoji: "📚",
    title: "Educación",
    description: "Inscripciones a cursos, información académica, horarios y soporte estudiantil 24/7"
  },
  {
    emoji: "⚕️",
    title: "Salud",
    description: "Citas médicas, consultas preliminares, recordatorios de tratamiento y triaje inteligente"
  }
];

export const BusinessTypes = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Perfecto Para <span className="text-gradient">Todo Tipo de Negocio</span>
        </h2>
        <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Descubrí cómo BotBoxx transforma cada industria con soluciones personalizadas
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessTypes.map((business, index) => (
            <Card 
              key={index}
              className="
                bg-white/5 border border-white/10 backdrop-blur-lg text-white
                transition-all duration-300 hover:shadow-glow-primary hover:border-indigo-500/50
                transform hover:-translate-y-2 overflow-hidden
              "
            >
              <CardHeader className="pb-3">
                <div className="text-4xl mb-3">{business.emoji}</div>
                <CardTitle className="text-xl font-bold">{business.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{business.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};