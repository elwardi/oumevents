import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/site.config";
import "./globals.css";

const description =
  "OumEvents — location d'un buffet et décor événementiel haut de gamme, fait main, à Casablanca, Bouskoura, Berrechid et environs. Mariage, fiançailles, aqiqa, baby shower, anniversaire. Livraison et installation incluses. Réservez sur WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Location de buffet & décor événementiel à ${site.baseCity}`,
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: site.name,
  keywords: [
    "location buffet Casablanca",
    "décor événementiel Casablanca",
    "location buffet Bouskoura",
    "location buffet Berrechid",
    "décor mariage Maroc",
    "décor fiançailles",
    "décor aqiqa",
    "baby shower Casablanca",
    "location décor anniversaire",
    "buffet mariage Casablanca",
    "sweet table Maroc",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "events",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Location de buffet & décor événementiel`,
    description,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Buffet OumEvents décoré" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Location de buffet & décor événementiel`,
    description,
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
