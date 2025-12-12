import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda en secarse el mueble?",
    answer: "Con nuestro Combo Full, garantizamos secado completo en 6-8 horas gracias a nuestras turbinas profesionales. Puedes usar tus muebles el mismo día. El Combo Económico se entrega semi-húmedo y puede tardar 12-24 horas en secar completamente.",
  },
  {
    question: "¿Todas las manchas salen?",
    answer: "Somos honestos: la mayoría de manchas desaparecen o mejoran significativamente, pero algunas manchas muy antiguas o de ciertos químicos pueden dejar sombras. Te informamos antes del servicio qué esperar de cada mancha.",
  },
  {
    question: "¿Qué necesito tener listo para el servicio?",
    answer: "Solo necesitas tener acceso a agua (una llave cerca) y electricidad para conectar nuestros equipos. También es ideal tener un espacio techado o bajo sombra. No necesitas mover muebles pesados, nosotros nos encargamos.",
  },
  {
    question: "¿Qué pasa si mi mascota orinó el mueble?",
    answer: "¡Es nuestra especialidad! Tenemos tratamiento específico para orina de perros y gatos que elimina tanto la mancha como el olor. Tiene un costo adicional de $10.000 a $20.000 dependiendo del área afectada.",
  },
  {
    question: "¿Cómo pago el servicio?",
    answer: "Aceptamos pago al finalizar el servicio por transferencia Nequi o efectivo directo a nuestra operaria. Sin anticipos, sin pasarelas complicadas.",
  },
  {
    question: "¿Atienden zonas alejadas de Popayán?",
    answer: "Cubrimos todo el casco urbano de Popayán. Para zonas periféricas como La María, Vereda Calibío o sectores alejados del norte/sur, aplicamos un recargo de transporte de aproximadamente $15.000.",
  },
  {
    question: "¿Cuál es la diferencia entre Combo Full y Combo Económico?",
    answer: "El Combo Full incluye lavado profundo + desinfección + secado con turbinas + garantía de olores. El Combo Económico es solo lavado profundo con entrega semi-húmeda, ideal si tienes presupuesto ajustado pero sin garantía de olores ni secado acelerado.",
  },
  {
    question: "¿Quién realiza el servicio?",
    answer: "Nuestra operaria Blanca, con más de 5 años de experiencia. Siempre la misma persona de confianza, no enviamos desconocidos a tu hogar.",
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
            Resolvemos Tus Dudas
          </h2>
          <p className="text-muted-foreground text-lg">
            Todo lo que necesitas saber antes de contratar nuestro servicio.
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
