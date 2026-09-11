import Image from "next/image";
import type { ReactNode } from "react";
import hero from "@/public/images/hero.jpg";

type Props = {
  locator: string;
  title: ReactNode;
  tag: string;
  city?: boolean;
};

export default function Hero({ locator, title, tag, city }: Props) {
  return (
    <section className={"hero" + (city ? " hero-city" : "")} id="top">
      <div className="hero-img">
        <Image
          src={hero}
          alt="Buffet OumEvents entièrement décoré avec arches lumineuses, fleurs et accessoires dorés"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero-scrim" />
      <div className="hero-inner reveal">
        <p className="locator">{locator}</p>
        <h1>{title}</h1>
        <p className="tag">{tag}</p>
        <div className="hero-cta">
          <a className="btn btn-gold" href="#reserver">Réserver sur WhatsApp</a>
          <a className="btn btn-ghost" href="#tarif">Voir le tarif</a>
        </div>
      </div>
    </section>
  );
}
