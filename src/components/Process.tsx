import { MessageCircle, Camera, Calendar, Sparkles, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Contáctanos",
    description: "Escríbenos por WhatsApp. Cuéntanos qué muebles necesitas lavar.",
  },
  {
    icon: Camera,
    step: "02",
    title: "Envía Fotos",
    description: "Mándanos fotos de tus muebles y las medidas aproximadas.",
  },
  {
    icon: Calendar,
    step: "03",
    title: "Recibe Cotización",
    description: "Te enviamos precio exacto y opciones: Combo Full o Económico.",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "Agendamos Visita",
    description: "Elegimos fecha y hora. Nuestra operaria llegará puntualmente.",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "¡Listo!",
    description: "Realizamos el servicio. Pagas al finalizar por Nequi o efectivo.",
  },
];

const Process = () => {
  return (
    <section id="proceso" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Proceso Simple
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-muted-foreground text-lg">
            En 5 pasos simples, tus muebles quedarán como nuevos. Sin complicaciones.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="text-center group">
                  {/* Icon Circle */}
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors relative z-10">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                      {item.step.slice(-1)}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow (Mobile & Tablet) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block lg:hidden absolute top-16 -right-4 transform">
                    <div className="w-8 h-0.5 bg-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
