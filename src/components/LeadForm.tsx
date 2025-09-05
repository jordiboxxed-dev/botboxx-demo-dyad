"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { showSuccess, showError, showLoading, dismissToast } from "@/utils/toast";

export const LeadForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      showError("Por favor, completá todos los campos.");
      return;
    }

    setLoading(true);
    const toastId = showLoading("Enviando tus datos...");

    const { error } = await supabase
      .from("leads")
      .insert([{ name, email, phone }]);

    dismissToast(toastId.toString()); // Convert to string to fix TypeScript error
    setLoading(false);

    if (error) {
      showError("Hubo un error al enviar tus datos. Intentá de nuevo.");
      console.error("Error inserting lead:", error);
    } else {
      showSuccess("¡Gracias! Te estamos redirigiendo...");
      setName("");
      setEmail("");
      setPhone("");
      
      // Redirigir al usuario
      window.location.href = "https://botboxx-demo.vercel.app/";
    }
  };

  return (
    <section id="lead-form" className="py-20 sm:py-32">
      <div className="container max-w-2xl mx-auto">
        <Card className="bg-white/5 border-white/10 text-white backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Recibí tu Agente IA Gratis</CardTitle>
            <CardDescription className="text-gray-300 pt-2">
              Completá el formulario y te damos acceso inmediato para que crees tu primer vendedor virtual.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre Completo</Label>
                <Input 
                  id="name" 
                  placeholder="Ej: Juan Pérez" 
                  className="bg-transparent" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="bg-transparent" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+54 9 11 1234-5678" 
                  className="bg-transparent" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-primary text-white text-lg font-bold py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-glow-primary" disabled={loading}>
                {loading ? "ENVIANDO..." : "QUIERO MI ACCESO GRATIS"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};