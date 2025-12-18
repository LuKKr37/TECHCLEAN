import { Badge } from "@/components/ui/badge";
import equipoLavado from "@/assets/equipo-lavado.webp";
import turbinasSecado from "@/assets/turbina-secado.webp";

const equipos = [
  {
    imagen: equipoLavado,
    titulo: "Sistema de Inyección y Extracción",
    descripcion:
      "Máquina profesional Mytee que inyecta solución limpiadora a presión y succiona la suciedad en un solo paso. Limpieza profunda sin dejar residuos.",
    alt: "Máquina de lavado profesional Mytee para limpieza de muebles en Popayán",
  },
  {
    imagen: turbinasSecado,
    titulo: "Turbinas de Secado Profesional",
    descripcion:
      "Secado acelerado garantizado en 6-8 horas. Sin olor a humedad. Tus muebles listos para usar el mismo día.",
    alt: "Turbina de secado profesional Monsoon para secado rápido de muebles en Popayán",
    badge: "Únicos en Popayán",
  },
];

const Equipment = () => {
  return (
    <section id="equipos" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Equipos Profesionales <span className="text-primary">Exclusivos</span>
          </h2>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto text-lg">
            Somos los únicos en Popayán con tecnología de secado acelerado. 
            Por eso podemos garantizar que tus muebles estarán listos el mismo día, sin olor a humedad.
          </p>
        </div>

        {/* Equipment Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {equipos.map((equipo, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl shadow-lg overflow-hidden border border-border/50 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-white p-4">
                <img
                  src={equipo.imagen}
                  alt={equipo.alt}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
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
                <p className="text-secondary-foreground/70 leading-relaxed">
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
