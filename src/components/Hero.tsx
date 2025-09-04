import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative w-full py-20 md:py-32 text-center">
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-950 bg-[radial-gradient(#6366F1_1px,transparent_1px)] [background-size:32px_32px]"></div>
      <div className="container">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white">
          Creá tu Agente IA en 5 Minutos y Automatizá tus Ventas 24/7
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
          La única plataforma que convierte tu información en un vendedor virtual que nunca duerme, califica leads automáticamente y llena tu agenda con clientes listos para comprar.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-bold px-8 py-6 animate-pulse">
            <a href="#lead-form">PROBAR GRATIS AHORA</a>
          </Button>
        </div>
        <div className="mt-6 flex justify-center items-center space-x-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-emerald-500" />
            <span>Sin instalaciones</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-emerald-500" />
            <span>Listo en minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-emerald-500" />
            <span>100% Gratis para empezar</span>
          </div>
        </div>
        <p className="mt-10 text-sm text-gray-500">
          Más de 500 empresas ya automatizaron sus ventas con BotBoxx
        </p>
      </div>
    </section>
  );
};