"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"nav" + (scrolled ? " scrolled" : "")}>
      <a href="/" aria-label="OumEvents — accueil">
        <Logo />
      </a>
      <nav className="nav-links" aria-label="Navigation principale">
        <a href="#buffet">Le buffet</a>
        <a href="#themes">Thèmes</a>
        <a href="#tarif">Tarif</a>
        <a href="#conditions">Conditions</a>
        <a href="#reserver">Réserver</a>
        <a href="#reserver" className="nav-cta">WhatsApp</a>
      </nav>
    </header>
  );
}
