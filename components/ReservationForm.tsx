"use client";

import { useState } from "react";
import { waLink } from "@/site.config";

const EVENTS = ["Mariage", "Fiançailles / Khotoba", "Aqiqa", "Henné", "Baby shower", "Anniversaire", "Autre"];
const CITIES = ["Casablanca", "Bouskoura", "Berrechid", "Environs"];

export default function ReservationForm({ defaultCity = "Casablanca" }: { defaultCity?: string }) {
  const [nom, setNom] = useState("");
  const [tel, setTel] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState(EVENTS[0]);
  const [ville, setVille] = useState(CITIES.includes(defaultCity) ? defaultCity : "Casablanca");
  const [msg, setMsg] = useState("");

  const send = () => {
    let t = "Bonjour OumEvents 👋\n\nJe souhaite réserver votre buffet :\n";
    t += `• Nom : ${nom || "—"}\n`;
    t += `• Téléphone : ${tel || "—"}\n`;
    t += `• Date : ${date || "à définir"}\n`;
    t += `• Événement : ${type}\n`;
    t += `• Ville : ${ville}\n`;
    if (msg) t += `• Message : ${msg}\n`;
    t += "\nMerci de me confirmer la disponibilité et le tarif 🌿";
    window.open(waLink(t), "_blank");
  };

  return (
    <div className="form-card">
      <div className="field">
        <label htmlFor="nom">Votre nom</label>
        <input id="nom" type="text" placeholder="Nom et prénom" value={nom} onChange={(e) => setNom(e.target.value)} />
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="tel">Téléphone</label>
          <input id="tel" type="tel" placeholder="06 00 00 00 00" value={tel} onChange={(e) => setTel(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="date">Date de l'événement</label>
          <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="type">Type d'événement</label>
          <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
            {EVENTS.map((x) => <option key={x}>{x}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="ville">Ville</label>
          <select id="ville" value={ville} onChange={(e) => setVille(e.target.value)}>
            {CITIES.map((x) => <option key={x}>{x}</option>)}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="msg">Message (optionnel)</label>
        <textarea id="msg" rows={3} placeholder="Précisez le lieu, l'horaire, ou toute demande particulière…" value={msg} onChange={(e) => setMsg(e.target.value)} />
      </div>
      <button className="btn btn-wa" type="button" onClick={send}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff" aria-hidden="true">
          <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.6-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6 2 .8 2.7.9 3.7.8.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
          <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 15.4 3.5 13.7 3.5 12 3.5 7.3 7.3 3.5 12 3.5S20.5 7.3 20.5 12 16.7 20 12 20z" />
        </svg>
        Envoyer ma demande sur WhatsApp
      </button>
      <p className="form-note">Réponse rapide · aucun paiement en ligne · devis gratuit</p>
    </div>
  );
}
