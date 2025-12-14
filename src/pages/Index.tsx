import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TechClean Popayán",
    "image": "https://techclean.com.co/logo.png",
    "description": "Servicio profesional de limpieza y desinfección de muebles a domicilio en Popayán. Lavado de sofás, colchones, comedores y alfombras con secado acelerado garantizado.",
    "@id": "https://techclean.com.co",
    "url": "https://techclean.com.co",
    "telephone": "+573172441057",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Popayán",
      "addressRegion": "Cauca",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 2.4419,
      "longitude": -76.6064
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "$$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    },
    "areaServed": {
      "@type": "City",
      "name": "Popayán"
    },
    "serviceType": ["Limpieza de muebles", "Lavado de sofás", "Limpieza de colchones", "Lavado de alfombras"],
    "sameAs": [
      "https://www.facebook.com/TECHCLEAN8",
      "https://www.instagram.com/techclean_lavadodemuebles/"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Upholstery Cleaning",
    "name": "Limpieza de Tapicería a Domicilio",
    "description": "Servicio profesional de limpieza de tapicería con tecnología de inyección-succión y secado acelerado con turbinas. Incluye desinfección y tratamiento anti-olores.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TechClean Popayán",
      "@id": "https://techclean.com.co"
    },
    "areaServed": {
      "@type": "City",
      "name": "Popayán"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Limpieza de Tapicería",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Limpieza de Sofás" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Limpieza de Colchones" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Limpieza de Sillas de Comedor" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Limpieza de Alfombras" }}
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>TechClean Popayán | Limpieza de Muebles a Domicilio con Secado Garantizado</title>
        <meta 
          name="description" 
          content="Servicio profesional de limpieza de sofás, colchones y alfombras en Popayán. Secado acelerado en 6-8 horas. Especialistas en mascotas. Cotiza gratis por WhatsApp." 
        />
        <meta name="keywords" content="lavado de muebles popayan, limpieza de sofas popayan, lavado de colchones, limpieza tapiceria, desinfeccion muebles" />
        <link rel="canonical" href="https://techclean.com.co" />
        <meta property="og:title" content="TechClean Popayán | Limpieza de Muebles a Domicilio" />
        <meta property="og:description" content="Servicio profesional de limpieza de sofás, colchones y alfombras. Secado garantizado en 6-8 horas. Cotiza gratis." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techclean.com.co" />
        <meta property="og:locale" content="es_CO" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TechClean Popayán | Limpieza de Muebles a Domicilio" />
        <meta name="twitter:description" content="Servicio profesional de limpieza de sofás, colchones y alfombras. Secado garantizado en 6-8 horas." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <Benefits />
          <Process />
          <Testimonials />
          <FAQ />
          <CTA />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
