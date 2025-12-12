import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, ShieldCheck, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

const Hero = () => {
  const whatsappLink = "https://wa.me/573001234567?text=Hola,%20quiero%20cotizar%20un%20servicio%20de%20limpieza";

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Servicio profesional de limpieza de muebles a domicilio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Servicio a Domicilio en Popayán</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
            Limpieza Profesional de Muebles con{" "}
            <span className="text-primary">Secado Garantizado</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
            Eliminamos manchas, olores y ácaros de tu sofá, colchón y tapicería.{" "}
            <strong className="text-secondary-foreground">Usa tus muebles el mismo día</strong> con nuestro 
            sistema de secado acelerado en 6-8 horas.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-secondary-foreground/90">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Secado en 6-8 horas</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/90">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">5 años de experiencia</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Cotizar por WhatsApp
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-primary-foreground/50 bg-secondary-foreground/10 text-primary-foreground hover:bg-secondary-foreground/20 font-semibold text-lg px-8 py-6"
              onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
