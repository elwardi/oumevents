import { site, cities, type City } from "@/site.config";
import { faq } from "@/data";

const BUSINESS_ID = `${site.url}/#business`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: site.name,
    description:
      "Location d'un buffet et décor événementiel haut de gamme, fait main, pour mariages, fiançailles, aqiqa, baby shower et anniversaires. Livraison et installation incluses à Casablanca, Bouskoura, Berrechid et environs.",
    url: site.url,
    image: `${site.url}/images/og.jpg`,
    logo: `${site.url}/icon.svg`,
    telephone: site.phoneDisplay,
    email: site.email,
    priceRange: `à partir de ${site.priceFrom} ${site.currency}`,
    currenciesAccepted: "MAD",
    paymentAccepted: "Espèces, virement",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.baseCity,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: cities.map((c) => ({ "@type": "City", name: c.name })),
    sameAs: [site.instagram, site.tiktok],
    makesOffer: {
      "@type": "Offer",
      priceCurrency: "MAD",
      price: site.priceFrom,
      itemOffered: {
        "@type": "Service",
        name: "Location de buffet et décor événementiel",
      },
    },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Location de buffet et décor événementiel",
    provider: { "@type": "LocalBusiness", "@id": BUSINESS_ID, name: site.name },
    areaServed: { "@type": "City", name: city.name },
    url: `${site.url}/${city.slug}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "MAD",
      price: site.priceFrom,
    },
  };
}

export function breadcrumbSchema(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
      { "@type": "ListItem", position: 2, name: `Buffet à ${city.name}`, item: `${site.url}/${city.slug}` },
    ],
  };
}
