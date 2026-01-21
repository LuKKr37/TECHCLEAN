import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sofa, BedDouble, Armchair, LayoutGrid, MessageCircle, Check, X, Star, Zap, Shield } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const services = [
  {
    icon: Sofa,
    title: "Limpieza de Salas",
    description: "Sala en L, sofás de 2 y 3 puestos. Removemos suciedad profunda y olores.",
    features: ["Desmanchado según tipo de tela", "Desinfección antibacterial", "Secado acelerado (Combo Full)"],
    popular: true,
  },
  {
    icon: BedDouble,
    title: "Limpieza de Colchones",
    description: "Sencillo, doble, queen y king. Ideal si hay manchas, olores, rinitis o alergias.",
    features: ["Tratamiento anti-ácaros y alérgenos", "Secado garantizado 6–8 horas (plan Full)", "Plan Full + Raycop (refuerzo premium, solo colchones)"],
    popular: false,
  },
  {
    icon: Armchair,
    title: "Limpieza de Sillas de Comedor",
    description: "Sillas tapizadas y bases acolchadas.",
    features: ["Precio por unidad", "Limpieza profunda", "Sin dañar la tela (según estado)"],
    popular: false,
  },
  {
    icon: LayoutGrid,
    title: "Limpieza de Alfombras",
    description: "Alfombras pequeñas, medianas y grandes.",
    features: ["Precio por m² (según medida)", "Remoción de manchas (según antigüedad)", "Recuperación de color (según material)"],
    popular: false,
  },
];

// Plans for Salas, Sillas, Alfombras (2 plans)
const plansSalasEtc = {
  economico: {
    name: "Económico",
    subtitle: "Semi-húmedo",
    features: [
      { name: "Lavado profundo", included: true },
      { name: "Desmanchado básico", included: true },
      { name: "Desinfección antibacterial", included: true },
      { name: "Entrega semi-húmeda (secado natural 24–48h)", included: true },
      { name: "Secado acelerado con turbinas", included: false },
      { name: "Garantía total de olores/humedad", included: false },
    ],
    note: "Sin garantía por olores, humedad o \"mapas\" si no seca parejo.",
  },
  full: {
    name: "Combo Full",
    subtitle: "Recomendado",
    features: [
      { name: "Lavado profundo", included: true },
      { name: "Desmanchado profesional", included: true },
      { name: "Desinfección antibacterial", included: true },
      { name: "Secado acelerado con turbinas", included: true },
      { name: "Garantía total de olores/humedad", included: true },
      { name: "Listo para usar el mismo día (6–8h)", included: true },
    ],
    note: "Usa tus muebles el mismo día con total tranquilidad.",
  },
};

// Plans for Colchones (3 plans)
const plansColchones = {
  economico: {
    name: "Económico",
    subtitle: "Semi-húmedo",
    features: [
      { name: "Lavado profundo", included: true },
      { name: "Entrega semi-húmeda (secado natural 24–48h)", included: true },
      { name: "Secado acelerado con turbinas", included: false },
      { name: "Garantía por olores/humedad", included: false },
    ],
    note: "Sin garantía por olores, humedad o \"mapas\".",
  },
  full: {
    name: "Full",
    subtitle: "Secado Garantizado",
    features: [
      { name: "Lavado profundo", included: true },
      { name: "Secado acelerado con turbinas (6–8h)", included: true },
      { name: "Listo para usar el mismo día", included: true },
      { name: "Refuerzo anti-ácaros Raycop", included: false },
    ],
    note: "Duerme en tu colchón el mismo día.",
  },
  fullRaycop: {
    name: "Full + Raycop",
    subtitle: "Anti-ácaros Premium",
    features: [
      { name: "Todo lo del plan Full", included: true },
      { name: "Secado acelerado con turbinas (6–8h)", included: true },
      { name: "Refuerzo especializado anti-ácaros y alérgenos", included: true },
      { name: "Ideal para alergias, rinitis y hogares con mascotas", included: true },
    ],
    note: "Máxima higiene para tu descanso.",
  },
};

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Limpieza profesional a domicilio
          </h2>
          <p className="text-muted-foreground text-lg">
            Limpieza profesional a domicilio con tecnología de inyección–succión y secado acelerado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                service.popular ? "border-primary shadow-lg" : "border-border"
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
                <h3 className="text-xl font-bold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-card-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Plans Section with Tabs */}
        <div id="planes" className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Elige el plan ideal para tu hogar
            </h3>
            <p className="text-muted-foreground">
              La diferencia no es solo precio: es secado, garantía y tranquilidad.
            </p>
          </div>

          <Tabs defaultValue="salas" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 h-auto">
              <TabsTrigger value="salas" className="py-3 text-sm md:text-base">
                Salas, Sillas y Alfombras
              </TabsTrigger>
              <TabsTrigger value="colchones" className="py-3 text-sm md:text-base">
                Colchones
              </TabsTrigger>
            </TabsList>

            {/* Tab 1: Salas, Sillas, Alfombras - 2 plans */}
            <TabsContent value="salas">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Plan Económico */}
                <Card className="border-border">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold text-card-foreground">
                      {plansSalasEtc.economico.name}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">{plansSalasEtc.economico.subtitle}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-6">
                      {plansSalasEtc.economico.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                          )}
                          <span className={feature.included ? "text-card-foreground" : "text-muted-foreground/60"}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-muted/30 rounded-lg p-3 text-center">
                      <p className="text-sm text-muted-foreground">{plansSalasEtc.economico.note}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Plan Combo Full */}
                <Card className="border-accent border-2 relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-0 right-0 bg-accent text-accent-foreground text-center py-2 font-semibold text-sm flex items-center justify-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    RECOMENDADO
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <CardHeader className="text-center pb-4 pt-12">
                    <CardTitle className="text-xl font-bold text-card-foreground flex items-center justify-center gap-2">
                      <Zap className="w-5 h-5 text-accent" />
                      {plansSalasEtc.full.name}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">{plansSalasEtc.full.subtitle}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-6">
                      {plansSalasEtc.full.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-card-foreground font-medium">{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 text-center">
                      <p className="text-sm text-foreground font-semibold">{plansSalasEtc.full.note}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CTA for Salas */}
              <div className="text-center">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                    aria-label="Cotizar Combo Full por WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Cotizar Combo Full por WhatsApp
                  </Button>
                </a>
              </div>
            </TabsContent>

            {/* Tab 2: Colchones - 3 plans */}
            <TabsContent value="colchones">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Plan Económico */}
                <Card className="border-border">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold text-card-foreground">
                      {plansColchones.economico.name}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">{plansColchones.economico.subtitle}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-6">
                      {plansColchones.economico.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                          )}
                          <span className={feature.included ? "text-card-foreground" : "text-muted-foreground/60"}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-muted/30 rounded-lg p-3 text-center">
                      <p className="text-sm text-muted-foreground">{plansColchones.economico.note}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Plan Full */}
                <Card className="border-primary border-2 relative overflow-hidden shadow-lg">
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 font-semibold text-sm flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4" />
                    SECADO GARANTIZADO
                  </div>
                  <CardHeader className="text-center pb-4 pt-12">
                    <CardTitle className="text-xl font-bold text-card-foreground flex items-center justify-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      {plansColchones.full.name}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">{plansColchones.full.subtitle}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-6">
                      {plansColchones.full.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                          )}
                          <span className={feature.included ? "text-card-foreground font-medium" : "text-muted-foreground/60"}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center">
                      <p className="text-sm text-foreground font-semibold">{plansColchones.full.note}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Plan Full + Raycop */}
                <Card className="border-accent border-2 relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-0 right-0 bg-accent text-accent-foreground text-center py-2 font-semibold text-sm flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4" />
                    ANTI-ÁCAROS PREMIUM
                  </div>
                  <CardHeader className="text-center pb-4 pt-12">
                    <CardTitle className="text-xl font-bold text-card-foreground flex items-center justify-center gap-2">
                      <Shield className="w-5 h-5 text-accent" />
                      {plansColchones.fullRaycop.name}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">{plansColchones.fullRaycop.subtitle}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-6">
                      {plansColchones.fullRaycop.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-card-foreground font-medium">{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 text-center">
                      <p className="text-sm text-foreground font-semibold">{plansColchones.fullRaycop.note}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CTA for Colchones */}
              <div className="text-center">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                    aria-label="Cotizar Colchón Full + Raycop por WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Cotizar Colchón Full + Raycop
                  </Button>
                </a>
                <p className="text-muted-foreground text-sm mt-4">
                  En WhatsApp se confirma el precio exacto según tamaño y estado del colchón.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Services;
