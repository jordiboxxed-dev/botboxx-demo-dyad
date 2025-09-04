import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          ¿Listo Para Automatizar Tus Ventas?
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Únete a cientos de empresas que ya están convirtiendo más leads y ahorrando miles de dólares con BotBoxx.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-gradient-primary text-white text-lg font-bold px-10 py-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-glow-primary">
            <a href="#lead-form">PROBAR GRATIS AHORA</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-indigo-400/50 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-white px-8 py-6 rounded-full transition-all duration-300">
            <a href="#lead-form">Ver Demo en Vivo</a>
          </Button>
        </div>
      </div>
    </section>
  );
};