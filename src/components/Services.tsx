import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sofa, BedDouble, Armchair, LayoutGrid, MessageCircle, Check } from "lucide-react";

const services = [
  {
    icon: Sofa,
    title: "Limpieza de Salas",
    description: "Sala en L, sofás de 2 y 3 puestos. Eliminamos manchas profundas y olores.",
    features: ["Desmanchado profesional", "Desinfección antibacterial", "Secado acelerado"],
    popular: true,
  },
  {
    icon: BedDouble,
    title: "Limpieza de Colchones",
    description: "Sencillo, doble, queen y king. Eliminamos ácaros, manchas y olores.",
    features: ["Tratamiento anti-ácaros", "Eliminación de olores", "Ideal para alergias"],
    popular: false,
  },
  {
    icon: Armchair,
    title: "Limpieza de Comedores",
    description: "Sillas tapizadas y bases acolchadas de tu comedor.",
    features: ["Precio por unidad", "Limpieza profunda", "Sin daño a la tela"],
    popular: false,
  },
  {
    icon: LayoutGrid,
    title: "Limpieza de Alfombras",
    description: "Alfombras pequeñas, medianas y grandes. Restauramos sus colores originales.",
    features: ["Precio por m²", "Remoción de manchas", "Restauración de color"],
    popular: false,
  },
];

const Services = () => {
  const whatsappLink = "https://wa.me/573001234567?text=Hola,%20quiero%20cotizar%20un%20servicio%20de%20limpieza";

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Limpieza Profesional a Domicilio
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos dos planes para adaptarnos a tu presupuesto:{" "}
            <strong className="text-foreground">Combo Full</strong> (con secado garantizado) y{" "}
            <strong className="text-foreground">Combo Económico</strong> (entrega semi-húmeda).
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                service.popular
                  ? "border-primary shadow-lg"
                  : "border-border"
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Más Popular
                </div>
              )}
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-card-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <MessageCircle className="w-5 h-5" />
              Solicitar Cotización Personalizada
            </Button>
          </a>
          <p className="text-muted-foreground text-sm mt-4">
            Envíanos fotos de tus muebles y te cotizamos en minutos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
