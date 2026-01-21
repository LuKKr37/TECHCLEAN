import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, ShieldCheck, Phone } from "lucide-react";
import heroImage from "@/assets/hero-cleaning-blanca.webp";
import { WHATSAPP_LINK } from "@/lib/constants";

const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Servicio profesional de limpieza de muebles a domicilio en Popayán"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Servicio a domicilio en Popayán</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
            Limpieza profesional de muebles con{" "}
            <span className="text-primary">secado garantizado en 6–8 horas</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
            Lavado profundo de sofá, colchón, sillas y alfombras. Eliminamos suciedad, malos olores y alérgenos.{" "}
            <span className="text-accent font-semibold">Con el Combo Full tus muebles quedan listos para usar el mismo día.</span>
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-col gap-3 mb-8">
            <div className="flex items-center gap-2 text-secondary-foreground/90">
              <Clock className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">Secado acelerado con turbinas (6–8 horas)</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/90">
              <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">Personal fijo y de confianza en tu hogar</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/90">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">Cotización rápida por WhatsApp (envía fotos)</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                aria-label="Cotizar servicio de limpieza por WhatsApp"
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
              aria-label="Ver servicios de limpieza"
            >
              Ver Servicios
            </Button>
          </div>

          {/* Microcopy note */}
          <p className="text-sm text-secondary-foreground/70 italic">
            ¿Tienes colchón con alergias o rinitis? Pregunta por el plan Full + Raycop (solo colchones).
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
