import { Clock, ShieldCheck, Users, Heart, Award, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Secado Acelerado",
    description: "Usa tus muebles el mismo día. Nuestro sistema garantiza secado completo en 6-8 horas, no 24 como la competencia.",
    highlight: "6-8 horas",
  },
  {
    icon: ShieldCheck,
    title: "Honestidad Radical",
    description: "Te decimos desde el inicio qué manchas saldrán y cuáles no. Sin falsas promesas, solo resultados reales.",
    highlight: "Sin sorpresas",
  },
  {
    icon: Users,
    title: "Personal de Confianza",
    description: "Operaria experta con 5 años de experiencia. La misma persona siempre, sin rotación de desconocidos.",
    highlight: "5 años",
  },
  {
    icon: Heart,
    title: "Especialistas en Mascotas",
    description: "Tratamiento profesional para orina, pelos y olores de perros y gatos. Tu mascota es parte de la familia.",
    highlight: "Pet-Friendly",
  },
  {
    icon: Award,
    title: "Equipos Profesionales",
    description: "Máquinas de inyección-succión profesionales y turbinas de secado industrial. Resultados de lavandería en tu casa.",
    highlight: "Alta tecnología",
  },
  {
    icon: Sparkles,
    title: "Desinfección Incluida",
    description: "Eliminamos ácaros, bacterias y alérgenos. Ideal para personas con problemas respiratorios o alergias.",
    highlight: "Anti-ácaros",
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
            La Diferencia TechClean
          </h2>
          <p className="text-muted-foreground text-lg">
            No solo lavamos muebles. Restauramos la tranquilidad de tu hogar con tecnología,
            honestidad y compromiso.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full mb-2">
                    {benefit.highlight}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
