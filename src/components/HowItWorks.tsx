import { Button } from "@/components/ui/button";

export const HowItWorks = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          3 Pasos Para Automatizar Tus Ventas
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Nunca fue tan fácil tener un equipo de ventas trabajando 24/7.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting lines */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2"></div>
          
          <div className="relative z-10 p-6 bg-slate-900 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 mb-4 bg-indigo-500 text-white font-bold text-xl rounded-full mx-auto">1</div>
            <h3 className="text-xl font-semibold text-white">Cargás tu Info</h3>
            <p className="mt-2 text-gray-400">Pegás texto, subís PDFs o importás desde tu web.</p>
          </div>
          <div className="relative z-10 p-6 bg-slate-900 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 mb-4 bg-indigo-500 text-white font-bold text-xl rounded-full mx-auto">2</div>
            <h3 className="text-xl font-semibold text-white">Se Entrena Solo</h3>
            <p className="mt-2 text-gray-400">La IA aprende tu negocio automáticamente en segundos.</p>
          </div>
          <div className="relative z-10 p-6 bg-slate-900 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 mb-4 bg-indigo-500 text-white font-bold text-xl rounded-full mx-auto">3</div>
            <h3 className="text-xl font-semibold text-white">Compartís y Vendés</h3>
            <p className="mt-2 text-gray-400">Lo publicás y empieza a trabajar para vos 24/7.</p>
          </div>
        </div>
        <div className="mt-12">
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-bold px-8 py-6">
            EMPEZAR AHORA GRATIS
          </Button>
        </div>
      </div>
    </section>
  );
};