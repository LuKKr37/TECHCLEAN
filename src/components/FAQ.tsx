import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto tarda en secarse?",
    answer: "Depende del plan: **Combo Full**: queda listo para usar el mismo día (6–8 horas). **Económico**: se entrega semi-húmedo y requiere secado natural (24–48h aprox.). En Económico no hay garantía por olor/humedad si no seca parejo.",
  },
  {
    question: "¿Qué diferencia hay entre Económico, Full y Full + Raycop?",
    answer: "**Económico**: lavado profundo, entrega semi-húmeda (más barato). **Full**: lavado + secado acelerado 6–8h + mayor tranquilidad. **Full + Raycop** (solo colchones): incluye el Full + un refuerzo premium anti-ácaros/alérgenos.",
  },
  {
    question: "¿Qué es Raycop y por qué solo para colchones?",
    answer: "Raycop es una tecnología diseñada para superficies de descanso (bedding). Combina UV+, pulsación y filtración HEPA para enfocarse en alérgenos comunes del hogar. Por eso lo ofrecemos solo como plan premium en lavado de colchones.",
  },
  {
    question: "¿Todas las manchas salen?",
    answer: "No. La mayoría mejora muchísimo, pero hay manchas antiguas o muy fijadas que pueden no desaparecer del todo. Nosotros te lo decimos con honestidad desde la cotización.",
  },
  {
    question: "¿Qué necesito tener listo para el servicio?",
    answer: "Acceso a energía y agua (nuestros equipos se conectan a los servicios del hogar). Espacio y, si es posible, techo/área adecuada para trabajar. Ideal: que el vehículo pueda parquear al frente, porque los equipos son pesados.",
  },
  {
    question: "¿Ustedes mueven los muebles?",
    answer: "Trabajamos en el lugar donde esté el mueble. Por seguridad y por el peso, evitamos mover muebles pesados. (Si necesitas mover algo, lo coordinamos contigo antes.)",
  },
  {
    question: "¿Qué pasa si mi mascota orinó el mueble?",
    answer: "Tenemos tratamiento especializado anti-orina y eliminación de olor. Puede aplicar un recargo según el caso (se confirma por WhatsApp).",
  },
  {
    question: "¿Cómo pago?",
    answer: "Pagas al finalizar el servicio por Nequi o efectivo. Sin anticipos, sin pasarelas, sin complicaciones.",
  },
  {
    question: "¿Emiten factura?",
    answer: "Somos persona natural y no emitimos factura. Si necesitas soporte, puedes pedir recibo en PDF y se envía por WhatsApp después del pago.",
  },
  {
    question: "¿Atienden zonas alejadas o Ciudad Verde?",
    answer: "Hay zonas donde no prestamos servicio. Algunas zonas tienen recargo de transporte (por ejemplo $15.000). En Parcelación Ciudad Verde hay cobertura, pero el cliente debe recoger y regresar a la operaria. Te confirmamos todo por WhatsApp antes de agendar.",
  },
  {
    question: "¿Qué pasa si se va la luz o el agua durante el servicio?",
    answer: "Si se interrumpe el agua o la energía, el resultado puede verse afectado y puede requerir una visita adicional. En ese caso, el transporte extra lo asume el cliente y está sujeto a disponibilidad de agenda.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mt-3 mb-4">
            Lo más importante, claro desde el inicio
          </h2>
          <p className="text-muted-foreground text-lg">
            Para que no pierdas tiempo y sepas qué esperar.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg border border-border px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4 font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
