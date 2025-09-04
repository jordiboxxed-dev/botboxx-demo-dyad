"use client";

import { useState, useEffect, useRef } from "react";
import { Bot, X, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

interface Knowledge {
  id: string;
  question: string;
  answer: string;
}

interface Message {
  sender: "bot" | "user";
  text: string;
  options?: Knowledge[];
}

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [knowledgeBase, setKnowledgeBase] = useState<Knowledge[]>([]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchKnowledge = async () => {
      const { data, error } = await supabase
        .from("knowledge_base")
        .select("id, question, answer");
      
      if (error) {
        console.error("Error fetching knowledge base:", error);
      } else if (data) {
        setKnowledgeBase(data);
        setMessages([
          {
            sender: "bot",
            text: "¡Hola! Soy el agente de BotBoxx. ¿Cómo puedo ayudarte hoy?",
            options: data,
          },
        ]);
      }
    };
    fetchKnowledge();
  }, []);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleOptionClick = (option: Knowledge) => {
    setMessages(prev => [
      ...prev.map(msg => ({ ...msg, options: undefined })), // Remove options from previous messages
      { sender: "user", text: option.question },
      { sender: "bot", text: option.answer, options: knowledgeBase }
    ]);
  };

  return (
    <>
      <div className={cn("fixed bottom-4 right-4 z-50 transition-all duration-300", isOpen ? "opacity-0 scale-90" : "opacity-100 scale-100")}>
        <Button
          size="icon"
          className="rounded-full w-16 h-16 bg-gradient-primary shadow-lg shadow-indigo-500/50"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare className="h-8 w-8 text-white" />
        </Button>
      </div>

      <div className={cn("fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-sm transition-all duration-300", isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none")}>
        <Card className="h-[70vh] flex flex-col bg-slate-900/80 backdrop-blur-lg border-white/20 text-white">
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Bot className="h-6 w-6 text-indigo-400" />
              <CardTitle className="text-lg">Asistente BotBoxx</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10 hover:text-white">
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="p-0 flex-1 flex flex-col">
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className={cn("flex", msg.sender === "user" ? "justify-end" : "justify-start")}>
                    <div className={cn("max-w-[80%] rounded-lg px-4 py-2", msg.sender === "user" ? "bg-indigo-500 text-white" : "bg-slate-700 text-slate-200")}>
                      <p className="text-sm">{msg.text}</p>
                      {msg.options && (
                        <div className="mt-3 space-y-2">
                          {msg.options.map(opt => (
                            <Button key={opt.id} variant="outline" size="sm" className="w-full bg-transparent border-white/20 hover:bg-white/10" onClick={() => handleOptionClick(opt)}>
                              {opt.question}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </>
  );
};