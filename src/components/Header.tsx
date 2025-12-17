import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-header.webp";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const whatsappLink = "https://wa.me/573172441057?text=Hola%20TechClean,%20quiero%20cotizar...";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="TechClean - Limpieza de muebles Popayán" className="h-12 md:h-14 w-auto rounded-md" loading="lazy" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              ¿Por qué elegirnos?
            </button>
            <button
              onClick={() => scrollToSection("proceso")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Cómo funciona
            </button>
            <button
              onClick={() => scrollToSection("testimonios")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" aria-label="Cotizar servicio de limpieza por WhatsApp">
                <MessageCircle className="w-4 h-4" />
                Cotizar Ahora
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú de navegación"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border pb-4 animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-4 pt-4">
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium px-4 py-2 text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("beneficios")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium px-4 py-2 text-left"
              >
                ¿Por qué elegirnos?
              </button>
              <button
                onClick={() => scrollToSection("proceso")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium px-4 py-2 text-left"
              >
                Cómo funciona
              </button>
              <button
                onClick={() => scrollToSection("testimonios")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium px-4 py-2 text-left"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium px-4 py-2 text-left"
              >
                FAQ
              </button>
              <div className="px-4 pt-2">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" aria-label="Cotizar servicio de limpieza por WhatsApp">
                    <MessageCircle className="w-4 h-4" />
                    Cotizar Ahora
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
