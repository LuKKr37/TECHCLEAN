import { Badge } from "@/components/ui/badge";
import equipoLavado from "@/assets/equipo-lavado.webp";
import turbinasSecado from "@/assets/turbina-secado.webp";
import raycop from "@/assets/raycop.webp";

const equipos = [
  {
    imagen: equipoLavado,
    titulo: "Sistema de Inyección y Extracción",
    descripcion:
      "Máquina profesional que inyecta solución limpiadora a presión y succiona la suciedad en un solo paso. Limpieza profunda sin dejar residuos.",
    alt: "Máquina de lavado profesional para limpieza de muebles en Popayán",
  },
  {
    imagen: turbinasSecado,
    titulo: "Turbinas de Secado Profesional",
    descripcion:
      "Secado acelerado garantizado en 6–8 horas (Combo Full). Sin olor a humedad. Tus muebles listos para usar el mismo día.",
    alt: "Turbina de secado profesional para secado rápido de muebles en Popayán",
    badge: "Únicos en Popayán",
  },
  {
    imagen: raycop,
    titulo: "Raycop (UV+ para Colchones)",
    descripcion:
      "Refuerzo premium para colchones con tecnología UV+ + pulsación + filtración HEPA, diseñada para ayudar a reducir ácaros y alérgenos en superficies de descanso. Solo disponible en el plan Full + Raycop.",
    alt: "Raycop tecnología UV para limpieza de colchones anti-ácaros en Popayán",
    badge: "Premium Anti-ácaros",
  },
];

const Equipment = () => {
  return (
    <section id="equipos" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Tecnología que <span className="text-primary">sí se nota</span>
          </h2>
          <p className="text-secondary/70 max-w-2xl mx-auto text-lg">
            No es "agüita y jabón". Usamos equipos profesionales para resultados reales 
            (y para colchones, una opción premium anti-ácaros).
          </p>
        </div>

        {/* Equipment Cards - 3 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {equipos.map((equipo, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl shadow-lg overflow-hidden border border-border/50 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-muted/50 p-4 flex items-center justify-center">
                {equipo.imagen ? (
                  <img
                    src={equipo.imagen}
                    alt={equipo.alt}
                    width={400}
                    height={400}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  // Placeholder for Raycop
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
                    <div className="text-center p-4">
                      <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg 
                          className="w-10 h-10 text-accent" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="5" />
                          <line x1="12" y1="1" x2="12" y2="3" />
                          <line x1="12" y1="21" x2="12" y2="23" />
                          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                          <line x1="1" y1="12" x2="3" y2="12" />
                          <line x1="21" y1="12" x2="23" y2="12" />
                          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">Tecnología UV+</p>
                    </div>
                  </div>
                )}
                {equipo.badge && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground font-semibold px-3 py-1">
                    {equipo.badge}
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {equipo.titulo}
                </h3>
                <p className="text-secondary/70 leading-relaxed text-sm">
                  {equipo.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
