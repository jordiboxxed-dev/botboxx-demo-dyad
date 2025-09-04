import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Necesito conocimientos técnicos?",
    answer: "Absolutamente no. BotBoxx está diseñado para ser increíblemente fácil de usar. Si sabés copiar y pegar, ya tenés todo lo necesario para crear tu agente de IA en minutos."
  },
  {
    question: "¿Cuánto tiempo lleva configurarlo?",
    answer: "Menos de 5 minutos. El proceso es simple: cargás tu información, la IA se entrena automáticamente y tu agente está listo para ser compartido. Es así de rápido."
  },
  {
    question: "¿Se integra con mi CRM actual?",
    answer: "Sí, nuestro Plan Pro incluye integraciones automáticas con los CRMs más populares del mercado para que tus leads calificados lleguen directamente a tu equipo de ventas sin fricción."
  },
  {
    question: "¿Qué pasa si tengo problemas?",
    answer: "Ofrecemos soporte por email en todos los planes y soporte prioritario en el Plan Pro. Nuestro equipo está listo para ayudarte a sacar el máximo provecho de tu agente de IA."
  },
  {
    question: "¿Puedo personalizar las respuestas?",
    answer: "¡Claro! Tenés control total sobre la base de conocimiento de tu agente. Podés actualizar la información en cualquier momento para refinar sus respuestas y asegurarte de que siempre esté alineado con tu marca."
  }
];

export const Faq = () => {
  return (
    <section id="faq" className="py-20 sm:py-32">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Preguntas Frecuentes
        </h2>
        <Accordion type="single" collapsible className="w-full mt-8">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-white/20">
              <AccordionTrigger className="text-white text-left hover:no-underline text-lg">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};