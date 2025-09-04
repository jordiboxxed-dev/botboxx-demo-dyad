import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 sm:py-32 bg-white/5">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Empezá Gratis, Escalá Cuando Quieras
        </h2>
        <p className="mt-4 text-lg text-gray-400 text-center max-w-2xl mx-auto">
          Planes flexibles que crecen con tu negocio. Sin contratos, cancelá cuando quieras.
        </p>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="bg-white/5 border-white/10 text-white">
            <CardHeader>
              <CardTitle>Prueba Gratuita</CardTitle>
              <CardDescription className="text-gray-400">Probá todas las funciones sin límites.</CardDescription>
              <p className="text-4xl font-bold pt-4">GRATIS <span className="text-lg font-normal text-gray-400">/ 14 días</span></p>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Todas las funciones Pro</p>
              <p className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> 1 Agente IA</p>
              <p className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Soporte por email</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-indigo-500 hover:bg-indigo-600">
                <a href="#lead-form">Empezar Prueba</a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-white/10 border-indigo-500 text-white ring-2 ring-indigo-500">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Plan Pro</CardTitle>
                <div className="bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full">MÁS POPULAR</div>
              </div>
              <CardDescription className="text-gray-300">Para empresas que venden en serio.</CardDescription>
              <p className="text-4xl font-bold pt-4">$99 <span className="text-lg font-normal text-gray-400">/ mes</span></p>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Agentes IA ilimitados</p>
              <p className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Integración con CRM</p>
              <p className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Analíticas avanzadas</p>
              <p className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Soporte prioritario</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-600">
                <a href="#lead-form">Elegir Plan Pro</a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-white/5 border-white/10 text-white">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription className="text-gray-400">Soluciones a medida para grandes equipos.</CardDescription>
              <p className="text-4xl font-bold pt-4">Personalizado</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Todo lo del plan Pro</p>
              <p className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Manager de cuenta dedicado</p>
              <p className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> SLAs personalizadas</p>
              <p className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Onboarding y training</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full text-white border-white/20 hover:bg-white/10 hover:text-white">
                <a href="#lead-form">Contactar Ventas</a>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <p className="text-center mt-8 text-gray-400">Garantía de 30 días o te devolvemos el dinero.</p>
      </div>
    </section>
  );
};