/* ============================================================
   OUMEVENTS — CONFIGURATION CENTRALE
   Modifiez uniquement ce fichier pour vos infos réelles.
   ============================================================ */

export const site = {
  name: "OumEvents",
  tagline: "Location de buffet & décor événementiel",
  // Domaine final du site (sert au SEO, aux liens Open Graph et au sitemap)
  url: "https://oumevents.ma", // ← À REMPLACER par votre vrai domaine

  /* --- Contact (À REMPLACER) --- */
  whatsapp: "212600000000", // format international, sans + ni espaces
  phoneDisplay: "+212 6 00 00 00 00",
  email: "contact@oumevents.ma",
  instagram: "https://instagram.com/oumevents",
  tiktok: "https://tiktok.com/@oumevents",

  /* --- Tarif --- */
  priceFrom: 800,
  currency: "DH",

  /* --- Localisation de départ (À AJUSTER) --- */
  baseCity: "Casablanca",
  region: "Casablanca-Settat",
  country: "MA",
  geo: { lat: 33.5731, lng: -7.5898 }, // Casablanca (approx.) — mettez votre position réelle
} as const;

export type City = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  geo: { lat: number; lng: number };
};

/* Pages locales dédiées — clé du référencement GEO */
export const cities: City[] = [
  {
    slug: "location-buffet-casablanca",
    name: "Casablanca",
    title: "Location de buffet & décor événementiel à Casablanca | OumEvents",
    description:
      "Location d'un buffet et décor haut de gamme à Casablanca pour mariage, fiançailles, aqiqa, baby shower et anniversaire. Livraison et installation incluses. Réservez sur WhatsApp.",
    intro:
      "À Casablanca, OumEvents installe pour vous un décor de buffet raffiné, fait main, livré et monté par notre équipe. Idéal pour vos mariages, fiançailles, aqiqa et anniversaires dans toute la ville et ses quartiers.",
    geo: { lat: 33.5731, lng: -7.5898 },
  },
  {
    slug: "location-buffet-bouskoura",
    name: "Bouskoura",
    title: "Location de buffet & décor événementiel à Bouskoura | OumEvents",
    description:
      "Location de buffet et décor événementiel à Bouskoura : mariage, fiançailles, aqiqa, baby shower. Décor fait main, livraison et installation comprises. Réservation sur WhatsApp.",
    intro:
      "À Bouskoura et Ville Verte, OumEvents habille vos célébrations d'un décor élégant et lumineux. Nous livrons, installons et récupérons l'ensemble — vous n'avez qu'à profiter de votre événement.",
    geo: { lat: 33.4506, lng: -7.6494 },
  },
  {
    slug: "location-buffet-berrechid",
    name: "Berrechid",
    title: "Location de buffet & décor événementiel à Berrechid | OumEvents",
    description:
      "Location de buffet et décor pour événements à Berrechid : mariage, fiançailles, aqiqa, anniversaire. Décor haut de gamme fait main, livré et installé. Réservez dès maintenant sur WhatsApp.",
    intro:
      "À Berrechid, OumEvents apporte un décor de buffet soigné et sur mesure pour vos plus beaux moments. Livraison et installation assurées par notre équipe dans la ville et ses environs.",
    geo: { lat: 33.2655, lng: -7.5866 },
  },
];

/* Lien WhatsApp prêt à l'emploi */
export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
