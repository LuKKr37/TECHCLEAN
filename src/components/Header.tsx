import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-header.webp";
import { WHATSAPP_LINK } from "@/lib/constants";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Servicios", id: "servicios" },
    { label: "Planes", id: "planes" },
    { label: "¿Por qué TechClean?", id: "beneficios" },
    { label: "Cómo funciona", id: "proceso" },
    { label: "Testimonios", id: "testimonios" },
    { label: "Preguntas frecuentes", id: "faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - No lazy loading since it's above the fold */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="TechClean - Limpieza de muebles Popayán" className="h-12 md:h-14 w-auto rounded-md" width={180} height={56} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" aria-label="Cotizar servicio de limpieza por WhatsApp">
                <MessageCircle className="w-4 h-4" />
                Cotizar por WhatsApp
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
            <nav className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium px-4 py-2 text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" aria-label="Cotizar servicio de limpieza por WhatsApp">
                    <MessageCircle className="w-4 h-4" />
                    Cotizar por WhatsApp
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
