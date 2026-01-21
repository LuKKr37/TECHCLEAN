import { Wind, Heart, UserCheck, PawPrint, Wrench, Shield } from "lucide-react";

const benefits = [
  {
    icon: Wind,
    title: "Secado acelerado (6–8h)",
    description: "Turbinas industriales para que tus muebles queden listos el mismo día (Combo Full).",
  },
  {
    icon: Heart,
    title: "Honestidad total",
    description: "Te decimos desde el inicio qué manchas pueden salir y cuáles pueden quedar.",
  },
  {
    icon: UserCheck,
    title: "Personal de confianza",
    description: "Operaria fija y experta (sin rotación de desconocidos).",
  },
  {
    icon: PawPrint,
    title: "Pet friendly",
    description: "Tratamiento especial para orina y olores (con recargo según caso).",
  },
  {
    icon: Wrench,
    title: "Equipos profesionales",
    description: "Inyección–succión para lavado profundo sin dejar residuos.",
  },
  {
    icon: Shield,
    title: "Desinfección profunda",
    description: "Desinfección antibacterial en el lavado y opción Raycop para colchones (plan premium).",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            ¿Por Qué TechClean?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mt-3 mb-4">
            Porque en tu casa importan 3 cosas
          </h2>
          <p className="text-muted-foreground text-lg">
            Que se seque rápido, que sea seguro y que te digan la verdad.
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
