import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import WhatsAppFab from "@/components/WhatsAppFab";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, faqSchema } from "@/schema";
import {
  About, Included, Themes, Gallery, Pricing, Conditions, Zones, Faq, Reservation, Social, SiteFooter,
} from "@/components/Sections";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema()} />
      <SiteHeader />
      <main>
        <Hero
          locator="Location de décor événementiel · Casablanca"
          title={<>Un buffet <em>d&apos;exception</em> pour vos plus beaux jours</>}
          tag="Décor fait main, arches lumineuses et touches dorées — pour un mariage, des fiançailles, une aqiqa ou un henné inoubliables."
        />
        <About />
        <Included />
        <Themes />
        <Gallery />
        <Pricing />
        <Conditions />
        <Zones />
        <Faq />
        <Reservation />
        <Social />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
