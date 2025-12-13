import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, MapPin, Phone } from "lucide-react";

const CTA = () => {
  const whatsappLink = "https://wa.me/573172441057?text=Hola%20TechClean,%20quiero%20cotizar...";

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Respuesta en menos de 30 minutos</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            ¿Listo para Renovar tus Muebles?
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Envíanos fotos por WhatsApp y recibe tu cotización personalizada en minutos.
            Sin compromisos.
          </p>

          {/* CTA Button */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="gap-3 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              aria-label="Cotizar servicio de limpieza por WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
              Cotizar Ahora por WhatsApp
            </Button>
          </a>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Popayán, Cauca</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Lunes a Sábado</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>WhatsApp Disponible</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
