import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const LeadForm = () => {
  return (
    <section id="lead-form" className="py-20 sm:py-32">
      <div className="container max-w-2xl mx-auto">
        <Card className="bg-white/5 border-white/10 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Recibí tu Agente IA Gratis</CardTitle>
            <CardDescription className="text-gray-300 pt-2">
              Completá el formulario y te damos acceso inmediato para que crees tu primer vendedor virtual.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre Completo</Label>
                <Input id="name" placeholder="Ej: Juan Pérez" className="bg-transparent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="tu@email.com" className="bg-transparent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" type="tel" placeholder="+54 9 11 1234-5678" className="bg-transparent" />
              </div>
              <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-lg font-bold py-6">
                QUIERO MI ACCESO GRATIS
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};