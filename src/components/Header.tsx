import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Bot className="h-6 w-6 text-indigo-400" />
            <span className="font-bold">BotBoxx</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#features" className="transition-colors text-gray-300 hover:text-white">Características</a>
            <a href="#pricing" className="transition-colors text-gray-300 hover:text-white">Precios</a>
            <a href="#faq" className="transition-colors text-gray-300 hover:text-white">FAQ</a>
          </nav>
          <Button asChild className="bg-gradient-primary text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-glow-primary">
            <a href="#lead-form">Probar Gratis</a>
          </Button>
        </div>
      </div>
    </header>
  );
};