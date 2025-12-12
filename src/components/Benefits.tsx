import { Droplets, PawPrint, UserCheck } from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "Lavado Profundo y Completamente Seco",
    description: "Nuestro sistema de turbinas industriales garantiza que tus muebles estén listos para usar en 6-8 horas. Olvídate de esperar días con muebles húmedos que generan mal olor y moho.",
    highlight: "Secado en 6-8 horas",
    details: [
      "Máquinas de inyección-succión profesionales",
      "Turbinas de secado industrial",
      "Sin humedad residual",
      "Sin riesgo de moho u hongos",
    ],
  },
  {
    icon: PawPrint,
    title: "Tratamiento Anti-Orina de Mascotas",
    description: "Sabemos que tus mascotas son parte de la familia. Eliminamos por completo los olores y manchas de orina de perros y gatos con tratamientos enzimáticos especializados.",
    highlight: "Garantía de olores",
    details: [
      "Tratamiento enzimático especializado",
      "Eliminación de manchas profundas",
      "Neutralización total de olores",
      "Productos seguros para mascotas",
    ],
  },
  {
    icon: UserCheck,
    title: "Personal de Confianza Certificado",
    description: "La misma operaria experta con más de 5 años de experiencia siempre. Sin rotación de desconocidos entrando a tu hogar. Tu tranquilidad y la de tu familia es nuestra prioridad.",
    highlight: "5 años de experiencia",
    details: [
      "Personal verificado y capacitado",
      "Sin rotación de técnicos",
      "Honestidad y transparencia total",
      "Trato profesional garantizado",
    ],
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            ¿Por Qué Elegirnos?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mt-3 mb-4">
            Los 3 Pilares de TechClean
          </h2>
          <p className="text-muted-foreground text-lg">
            Sofía, entendemos lo que realmente importa: muebles secos, hogar libre de olores 
            y personas de confianza en tu casa.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Highlight Badge */}
              <div className="inline-block bg-accent/10 text-accent text-sm font-semibold px-3 py-1.5 rounded-full mb-4">
                {benefit.highlight}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {benefit.description}
              </p>

              {/* Details List */}
              <ul className="space-y-2">
                {benefit.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;