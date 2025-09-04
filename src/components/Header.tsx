import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Bot className="h-6 w-6 text-indigo-400" />
            <span className="font-bold">BotBoxx</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">Características</a>
            <a href="#pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">Precios</a>
            <a href="#faq" className="transition-colors hover:text-foreground/80 text-foreground/60">FAQ</a>
          </nav>
          <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
            Probar Gratis
          </Button>
        </div>
      </div>
    </header>
  );
};