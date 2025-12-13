import { Wind, Heart, UserCheck, PawPrint, Wrench, Shield } from "lucide-react";

const benefits = [
  {
    icon: Wind,
    title: "Secado Acelerado",
    description: "Turbinas industriales que secan tus muebles en 6-8 horas. Sin humedad residual.",
  },
  {
    icon: Heart,
    title: "Honestidad Total",
    description: "Precios justos y transparentes. Sin sorpresas ni cobros ocultos.",
  },
  {
    icon: UserCheck,
    title: "Personal de Confianza",
    description: "La misma operaria experta siempre. Sin rotación de desconocidos en tu hogar.",
  },
  {
    icon: PawPrint,
    title: "Pet Friendly",
    description: "Tratamiento especializado anti-orina. Productos seguros para tus mascotas.",
  },
  {
    icon: Wrench,
    title: "Equipos Profesionales",
    description: "Máquinas de inyección-succión de última generación para limpieza profunda.",
  },
  {
    icon: Shield,
    title: "Desinfección Profunda",
    description: "Eliminamos ácaros, bacterias y alérgenos. Garantía de olores incluida.",
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
            Los Pilares de TechClean
          </h2>
          <p className="text-muted-foreground text-lg">
            Entendemos lo que realmente importa: muebles secos, hogar libre de olores y personas de confianza en tu casa.
          </p>
        </div>

        {/* Benefits Grid - 2 columns mobile, 3 columns desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
