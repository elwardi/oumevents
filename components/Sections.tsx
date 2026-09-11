import Image from "next/image";
import Link from "next/link";
import { site, cities } from "@/site.config";
import { included, conditions, faq, themes } from "@/data";
import ReservationForm from "./ReservationForm";
import Logo from "./Logo";

import aboutImg from "@/public/images/about.jpg";
import coranImg from "@/public/images/real-coran.jpg";
import tGaming from "@/public/images/theme-gaming.jpg";
import tBaby from "@/public/images/theme-baby.jpg";
import tWedding from "@/public/images/theme-wedding.jpg";
import tBirthday from "@/public/images/theme-birthday.jpg";

const themeImg: Record<string, any> = {
  gaming: tGaming,
  baby: tBaby,
  wedding: tWedding,
  birthday: tBirthday,
};

/* ---------- Notre décor ---------- */
export function About() {
  return (
    <section className="present" id="buffet">
      <div className="wrap present-grid">
        <div className="present-copy">
          <p className="locator">Notre décor</p>
          <h2>Une scène élégante, prête à sublimer votre événement</h2>
          <p>
            Ce buffet a été entièrement conçu et fabriqué à la main : trois arches cannelées, des colonnes
            assorties, une table console et une table basse, le tout rehaussé d'un éclairage LED chaud et
            d'accessoires dorés soigneusement choisis.
          </p>
          <p>
            Un décor épuré et raffiné qui met en valeur vos invités, vos photos et chaque instant de votre
            célébration — sans que vous ayez rien à installer.
          </p>
          <div className="occasions">
            <span className="chip">Mariage</span>
            <span className="chip">Fiançailles · Khotoba</span>
            <span className="chip">Aqiqa</span>
            <span className="chip">Henné</span>
            <span className="chip">Anniversaire</span>
            <span className="chip">Baby shower</span>
          </div>
        </div>
        <div className="arch-photo">
          <Image src={aboutImg} alt="Buffet OumEvents fait main : arches et colonnes cannelées blanches" sizes="(max-width: 820px) 90vw, 480px" style={{ objectFit: "cover" }} fill />
        </div>
      </div>
    </section>
  );
}

/* ---------- Ce qui est inclus ---------- */
export function Included() {
  return (
    <section className="included">
      <div className="wrap">
        <div className="sec-head">
          <div className="arch-mark" />
          <h2>Ce qui est inclus</h2>
          <p>Un ensemble complet, livré et installé par notre équipe.</p>
        </div>
        <div className="inc-grid">
          {included.map((it) => (
            <article className="inc-card" key={it.n}>
              <div className="n">{it.n}</div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Thèmes ---------- */
export function Themes() {
  const feature = themes[0];
  const rest = themes.slice(1);
  return (
    <section className="themes" id="themes">
      <div className="wrap">
        <div className="sec-head">
          <div className="arch-mark" />
          <h2>Un décor, mille ambiances</h2>
          <p>Le même buffet, habillé selon votre thème et vos couleurs. Voici quelques mises en scène possibles.</p>
        </div>
        <div className="theme-feature">
          <Image src={themeImg[feature.key]} alt={`Buffet décoré — ${feature.title}`} sizes="(max-width: 1120px) 92vw, 1072px" placeholder="empty" />
          <div className="cap">
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        </div>
        <div className="theme-row">
          {rest.map((t) => (
            <article className="theme-card" key={t.key}>
              <div className="frame">
                <Image src={themeImg[t.key]} alt={`Décor ${t.title}`} sizes="(max-width: 760px) 90vw, 340px" style={{ objectFit: "cover" }} fill />
              </div>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Galerie photos réelles ---------- */
export function Gallery() {
  return (
    <section className="gallery">
      <div className="wrap">
        <div className="sec-head">
          <div className="arch-mark" />
          <h2>Le buffet, en vrai</h2>
          <p>Des photos réelles de notre décor, prêt à être habillé selon votre thème.</p>
        </div>
        <div className="gal-grid">
          <div className="gal-item">
            <Image src={coranImg} alt="Décor OumEvents avec porte-Coran et accessoires dorés" sizes="(max-width: 760px) 90vw, 540px" style={{ objectFit: "cover" }} fill />
          </div>
          <div className="gal-item">
            <Image src={aboutImg} alt="Buffet blanc avec arches lumineuses et chandeliers dorés" sizes="(max-width: 760px) 90vw, 540px" style={{ objectFit: "cover" }} fill />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Tarif ---------- */
export function Pricing() {
  return (
    <section className="pricing" id="tarif">
      <div className="wrap">
        <div className="sec-head">
          <div className="arch-mark" />
          <h2>Tarif de location</h2>
          <p>Un prix clair à la journée. La livraison est ajustée selon votre ville.</p>
        </div>
        <div className="price-card">
          <p className="label">Location journalière</p>
          <div className="price-amount">{site.priceFrom} <span>{site.currency}</span></div>
          <p className="price-note">à partir de · par jour · hors frais de livraison</p>
          <ul className="price-list">
            <li><span className="tick">✦</span> Décor complet (arches, colonnes, tables, accessoires)</li>
            <li><span className="tick">✦</span> Livraison, installation et récupération</li>
            <li><span className="tick">✦</span> Éclairage d'ambiance inclus</li>
          </ul>
          <a className="btn btn-gold btn-wide" href="#reserver">Vérifier une date</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Conditions ---------- */
export function Conditions() {
  return (
    <section className="conditions" id="conditions">
      <div className="wrap">
        <div className="sec-head">
          <div className="arch-mark" />
          <h2>Conditions de location</h2>
          <p>Simple et transparent, pour une réservation en toute sérénité.</p>
        </div>
        <div className="cond-grid">
          {conditions.map((c) => (
            <div className="cond-item" key={c.n}>
              <div className="cn">{c.n}</div>
              <div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Zones desservies (liens internes vers pages villes) ---------- */
export function Zones() {
  return (
    <section className="zones">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 34 }}>
          <div className="arch-mark" />
          <h2>Où nous intervenons</h2>
          <p>Nous livrons et installons dans ces villes et leurs environs.</p>
        </div>
        <div className="zone-pills">
          {cities.map((c) => (
            <Link className="zone-pill" href={`/${c.slug}`} key={c.slug}>
              <strong>{c.name}</strong>
            </Link>
          ))}
          <span className="zone-pill">et environs</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function Faq() {
  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="sec-head">
          <div className="arch-mark" />
          <h2>Questions fréquentes</h2>
          <p>Tout ce qu'il faut savoir avant de réserver.</p>
        </div>
        <div className="faq-list">
          {faq.map((f, i) => (
            <details className="faq-item" key={i}>
              <summary>
                {f.q}
                <span className="plus" aria-hidden="true">+</span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Réservation ---------- */
export function Reservation({ defaultCity = "Casablanca" }: { defaultCity?: string }) {
  return (
    <section className="reserve" id="reserver">
      <div className="wrap">
        <div className="sec-head">
          <div className="arch-mark" />
          <h2>Réservez votre date</h2>
          <p>Remplissez ce formulaire — il ouvrira une conversation WhatsApp avec votre demande déjà rédigée.</p>
        </div>
        <ReservationForm defaultCity={defaultCity} />
      </div>
    </section>
  );
}

/* ---------- Réseaux ---------- */
export function Social() {
  return (
    <section className="social">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 30 }}>
          <div className="arch-mark" />
          <h2>Suivez nos décors</h2>
          <p>Retrouvez nos réalisations et nos disponibilités sur nos réseaux.</p>
        </div>
        <div className="social-links">
          <a className="social-btn ig" href={site.instagram} target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 4.9a4.9 4.9 0 100 9.8 4.9 4.9 0 000-9.8zm0 8.1a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.1-8.3a1.15 1.15 0 11-2.3 0 1.15 1.15 0 012.3 0z" /></svg>
            Instagram
          </a>
          <a className="social-btn tt" href={site.tiktok} target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 5.8c-.9-.6-1.5-1.5-1.7-2.6-.1-.3-.1-.6-.1-.9h-2.8v11.4c0 1.4-1.1 2.5-2.5 2.5S7 15.1 7 13.7s1.1-2.5 2.5-2.5c.3 0 .5 0 .8.1V8.4c-.3 0-.5-.1-.8-.1-3 0-5.4 2.4-5.4 5.4s2.4 5.4 5.4 5.4 5.4-2.4 5.4-5.4V8.3c1.1.8 2.5 1.3 3.9 1.3V6.8c-.8 0-1.5-.3-2.2-.7v-.3z" /></svg>
            TikTok
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pied de page ---------- */
export function SiteFooter() {
  return (
    <footer className="site">
      <Logo />
      <p className="fzone">Casablanca · Bouskoura · Berrechid &amp; environs</p>
      <p>Location de buffet &amp; décor événementiel fait main</p>
      <div className="flinks">
        {cities.map((c) => (
          <Link href={`/${c.slug}`} key={c.slug}>Buffet à {c.name}</Link>
        ))}
        <a href="#reserver">Réserver</a>
      </div>
      <div className="copy">© {new Date().getFullYear()} {site.name} · Tous droits réservés</div>
    </footer>
  );
}
