import { Bot } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <Bot className="h-6 w-6 text-indigo-400" />
          <span className="font-bold text-white">BotBoxx</span>
        </div>
        <p className="text-sm text-gray-500 mt-4 md:mt-0">
          © {new Date().getFullYear()} BotBoxx. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};