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
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-bold px-8 py-6">
            PROBAR GRATIS AHORA
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 hover:text-white px-8 py-6">
            Ver Demo en Vivo
          </Button>
        </div>
      </div>
    </section>
  );
};