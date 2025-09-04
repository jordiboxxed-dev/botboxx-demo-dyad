import { Button } from "@/components/ui/button";
import { CheckCircle, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative w-full py-20 md:py-32 text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-950 bg-[radial-gradient(#4F46E5_1px,transparent_1px)] [background-size:48px_48px]"></div>
      <div className="container">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white">
          Creá tu <span className="text-gradient">Agente IA</span> en 5 Minutos y Automatizá tus <span className="text-gradient">Ventas 24/7</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
          La única plataforma que convierte tu información en un vendedor virtual que nunca duerme, califica leads automáticamente y llena tu agenda con clientes listos para comprar.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-gradient-primary text-white text-lg font-bold px-10 py-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-glow-primary">
            <a href="#lead-form">PROBAR GRATIS AHORA</a>
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-sm text-gray-300">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1">
            <Zap className="h-4 w-4 text-indigo-400" />
            <span>Listo en minutos</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1">
            <CheckCircle className="h-4 w-4 text-emerald-500" />
            <span>Sin instalaciones</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1">
            <CheckCircle className="h-4 w-4 text-emerald-500" />
            <span>100% Gratis para empezar</span>
          </div>
        </div>
      </div>
    </section>
  );
};