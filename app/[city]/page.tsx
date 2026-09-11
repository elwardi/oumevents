import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities } from "@/site.config";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import WhatsAppFab from "@/components/WhatsAppFab";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, faqSchema, serviceSchema, breadcrumbSchema } from "@/schema";
import {
  About, Included, Themes, Pricing, Conditions, Zones, Faq, Reservation, Social, SiteFooter,
} from "@/components/Sections";

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const c = cities.find((x) => x.slug === params.city);
  if (!c) return {};
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: `/${c.slug}` },
    openGraph: {
      type: "website",
      locale: "fr_MA",
      url: `/${c.slug}`,
      title: c.title,
      description: c.description,
      images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: `Buffet OumEvents à ${c.name}` }],
    },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const c = cities.find((x) => x.slug === params.city);
  if (!c) notFound();

  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={serviceSchema(c)} />
      <JsonLd data={breadcrumbSchema(c)} />
      <JsonLd data={faqSchema()} />
      <SiteHeader />
      <main>
        <Hero
          city
          locator={`Location de buffet · ${c.name}`}
          title={<>Location de buffet à <em>{c.name}</em></>}
          tag={c.intro}
        />
        <About />
        <Included />
        <Themes />
        <Pricing />
        <Conditions />
        <Zones />
        <Faq />
        <Reservation defaultCity={c.name} />
        <Social />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
