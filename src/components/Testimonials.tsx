import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "María Fernanda G.",
    location: "Bosques del Marqués",
    rating: 5,
    text: "Mi perro había orinado el sofá y el olor era insoportable. Llegó la señora Blanca, muy profesional, y en pocas horas el sofá quedó impecable. ¡Sin rastro de olor!",
    service: "Limpieza de Sala + Tratamiento Mascota",
  },
  {
    name: "Carolina M.",
    location: "Prados del Norte",
    rating: 5,
    text: "Tenía visita el fin de semana y mi sala estaba llena de manchas. Me respondieron rapidísimo por WhatsApp, vinieron al día siguiente y pude recibir a mi familia con los muebles como nuevos.",
    service: "Combo Full - Sala en L",
  },
  {
    name: "Andrés P.",
    location: "Centro Histórico",
    rating: 5,
    text: "Llevaba meses con rinitis y resulta que era el colchón lleno de ácaros. Después del lavado duermo mejor que nunca. Muy honestos con el precio, sin sorpresas.",
    service: "Limpieza de Colchón Queen",
  },
  {
    name: "Juliana R.",
    location: "Ciudad Verde",
    rating: 5,
    text: "Me explicaron que algunas manchas viejas no saldrían completamente y así fue, pero el sofá quedó 80% mejor. Valoro mucho que sean honestos desde el principio.",
    service: "Combo Económico - Sofá 3 puestos",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mt-3 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-secondary-foreground/70 text-lg">
            Familias de Popayán confían en nosotros. Lee sus experiencias reales.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/10 backdrop-blur-sm border-secondary-foreground/10 hover:bg-card/20 transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/40 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-secondary-foreground/90 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-secondary-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-secondary-foreground/60 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                    {testimonial.service}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-12">
          <p className="text-secondary-foreground/60 text-sm">
            ⭐ Más de 500 familias satisfechas en Popayán
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
