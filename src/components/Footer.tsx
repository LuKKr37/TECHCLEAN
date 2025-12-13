import { MessageCircle, MapPin, Clock, Heart } from "lucide-react";
import logo from "@/assets/logo-techclean.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://wa.me/573172441057?text=Hola%20TechClean,%20quiero%20cotizar...";

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="TechClean - Limpieza de muebles Popayán" className="h-10 mb-4 brightness-0 invert" width={160} height={40} loading="lazy" />
            <p className="text-secondary-foreground/70 mb-4 max-w-md">
              Servicio profesional de limpieza y desinfección de muebles a domicilio en Popayán.
              Más de 5 años de experiencia cuidando los hogares de las familias del Cauca.
            </p>
            <div className="flex flex-col gap-2 text-secondary-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Popayán, Cauca - Colombia</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Lunes a Sábado: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("beneficios")}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  ¿Por qué elegirnos?
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("proceso")}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  Cómo funciona
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonios")}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  Testimonios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  Preguntas Frecuentes
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Contáctanos</h4>
            <p className="text-secondary-foreground/70 mb-4">
              ¿Tienes preguntas? Escríbenos por WhatsApp y te respondemos en minutos.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-4 py-2 rounded-lg transition-colors"
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>
              © {currentYear} TechClean Popayán. Todos los derechos reservados.
            </p>
            <p className="flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-destructive fill-destructive" /> en Popayán
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
