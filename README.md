# OumEvents — Site Next.js

Site vitrine pour la location de buffet & décor événementiel (Casablanca, Bouskoura, Berrechid).
Next.js 14 (App Router), TypeScript, SEO technique + SEO local (GEO), réservation via WhatsApp.

## 1. Démarrer en local

Il faut Node.js 18.17+ (idéalement 20 ou 22).

```bash
npm install
npm run dev
```

Ouvrez http://localhost:3000

## 2. Personnaliser (le plus important)

Tout se règle dans **un seul fichier : `site.config.ts`**
- `whatsapp` : votre numéro au format international sans + ni espaces (ex. `2126XXXXXXXX`)
- `instagram`, `tiktok` : les liens de vos comptes
- `email`, `phoneDisplay`
- `priceFrom` : votre tarif journalier
- `url` : votre domaine final (ex. `https://oumevents.ma`)
- `geo` : votre position réelle (latitude/longitude)

Les photos sont dans `public/images/`. Pour changer une image, remplacez le fichier en gardant le même nom.

Le contenu (prestations, conditions, FAQ, thèmes) se modifie dans `data.ts`.

## 3. Mettre en ligne (gratuit et rapide)

Le plus simple est **Vercel** :
1. Créez un compte sur vercel.com
2. Poussez ce dossier sur un dépôt GitHub
3. « Import Project » → Vercel détecte Next.js et déploie tout seul
4. Ajoutez votre nom de domaine dans Vercel (Settings → Domains)

Le site fonctionne aussi sur Netlify ou tout hébergeur Node.

## 4. Checklist SEO / GEO (pour être trouvé sur Google)

- [ ] Renseigner le vrai `url` dans `site.config.ts` **avant** le déploiement (sinon Open Graph et sitemap seront faux)
- [ ] Créer une fiche **Google Business Profile** (Google Maps) — c'est le levier n°1 du référencement local
- [ ] Inscrire le site sur **Google Search Console** et soumettre `https://votre-domaine/sitemap.xml`
- [ ] Vérifier les données structurées avec le test des résultats enrichis de Google
- [ ] Publier régulièrement sur Instagram/TikTok avec le lien du site en bio
- [ ] Demander des avis Google à vos clients (renforce fortement le référencement local)

## Ce qui est déjà en place côté SEO

- Balises `title`/`description` uniques par page + Open Graph + Twitter Card
- Données structurées JSON-LD : `LocalBusiness` (avec zones desservies + coordonnées GPS), `FAQPage`, `Service` et `BreadcrumbList` par ville
- Pages locales dédiées : `/location-buffet-casablanca`, `/location-buffet-bouskoura`, `/location-buffet-berrechid`
- `sitemap.xml` et `robots.txt` générés automatiquement
- URLs contenant les mots-clés, HTML sémantique, images avec texte alternatif, version mobile

## Structure

```
app/
  layout.tsx          Métadonnées globales + polices
  page.tsx            Accueil
  [city]/page.tsx     Pages villes (SEO local)
  sitemap.ts robots.ts
  icon.svg globals.css
components/            Header, Hero, Sections, Formulaire, etc.
site.config.ts        ← vos infos
data.ts               ← contenus
schema.ts             Données structurées JSON-LD
public/images/        Photos
```
