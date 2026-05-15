import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "de";

type Dict = Record<string, { en: string; de: string }>;

export const dict: Dict = {
  nav_home: { en: "Home", de: "Start" },
  nav_newsletter: { en: "Newsletter", de: "Newsletter" },
  nav_contact: { en: "Contact", de: "Kontakt" },
  nav_meeting: { en: "Book a Meeting", de: "Termin buchen" },
  hero_eyebrow: { en: "The Asufo Universe", de: "Das Asufo Universum" },
  hero_title: { en: "Many possibilities.", de: "Viele Möglichkeiten." },
  hero_title_2: { en: "One ecosystem.", de: "Ein Ökosystem." },
  hero_sub: {
    en: "Coaching, platforms, brands and products — engineered with precision to move people, teams and ideas forward.",
    de: "Coaching, Plattformen, Marken und Produkte — präzise gestaltet, um Menschen, Teams und Ideen voranzubringen.",
  },
  coach_eyebrow: { en: "Coaching", de: "Coaching" },
  ai_coach: { en: "AI Coach", de: "AI Coach" },
  ai_coach_d: { en: "Personal guidance for AI workflows, automation and high-leverage decisions.", de: "Persönliche Begleitung für KI-Workflows, Automatisierung und wirkungsvolle Entscheidungen." },
  agile_coach: { en: "Agile Coach", de: "Agile Coach" },
  agile_coach_d: { en: "Coaching for teams and leaders — OKRs, agility and sustainable execution.", de: "Coaching für Teams und Führungskräfte — OKRs, Agilität und nachhaltige Umsetzung." },
  learn_more: { en: "Learn more", de: "Mehr erfahren" },
  hero_stat_1: { en: "Partners", de: "Partner" },
  hero_stat_2: { en: "Brands", de: "Marken" },
  hero_stat_3: { en: "Products", de: "Produkte" },
  hero_stat_4: { en: "Languages", de: "Sprachen" },
  cta_explore: { en: "Explore services", de: "Services entdecken" },
  cta_meeting: { en: "Book a call", de: "Gespräch buchen" },
  sec_main: { en: "Partners", de: "Partner" },
  sec_magazine: { en: "Online Magazine", de: "Online-Magazine" },
  sec_sub: { en: "Brands & Offerings", de: "Marken & Angebote" },
  sec_products: { en: "Products", de: "Produkte" },
  visit: { en: "Visit", de: "Besuchen" },
  newsletter_title: { en: "Join our newsletter", de: "Newsletter abonnieren" },
  newsletter_sub: { en: "Insights, updates and stories from the Asufo ecosystem.", de: "Einblicke, Updates und Geschichten aus dem Asufo-Ökosystem." },
  contact_title: { en: "Get in touch", de: "Kontakt aufnehmen" },
  contact_sub: { en: "We'd love to hear from you.", de: "Wir freuen uns von dir zu hören." },
  meeting_title: { en: "Book a strategy call", de: "Strategiegespräch buchen" },
  meeting_sub: { en: "Pick a time that works for you.", de: "Wähle einen passenden Termin." },
  footer_rights: { en: "All rights reserved.", de: "Alle Rechte vorbehalten." },
  iderdex_d: { en: "Our flagship digital platform.", de: "Unsere führende digitale Plattform." },
  nixotec_d: { en: "Technology, engineered.", de: "Technologie, neu gedacht." },
  veroviva_d: { en: "Lifestyle & wellness, naturally.", de: "Lifestyle & Wellness, natürlich." },
  asfact_d: { en: "Our editorial magazine.", de: "Unser Magazin." },
  digiclaro_d: { en: "Digital clarity, simplified.", de: "Digitale Klarheit, einfach gemacht." },
  echtclever_d: { en: "Smart ideas, plainly told.", de: "Clevere Ideen, klar erzählt." },
  futodigital_d: { en: "Digital growth services.", de: "Digitale Wachstumsservices." },
  vidvisions_d: { en: "Video & visual storytelling.", de: "Video & visuelles Storytelling." },
  pagedreams_d: { en: "Web design that converts.", de: "Webdesign, das wirkt." },
  agilokr_d: { en: "Agile OKR coaching.", de: "Agiles OKR-Coaching." },
  kixpert_d: { en: "Expertise, on demand.", de: "Expertise auf Abruf." },
  coachigo_d: { en: "Coaching that moves you forward.", de: "Coaching, das dich weiterbringt." },
  sanzafit_d: { en: "Wellness in motion.", de: "Wellness in Bewegung." },
  fitwasser_d: { en: "Hydration, reimagined.", de: "Hydration neu gedacht." },
  socialpro24_d: { en: "Social media, professionalized.", de: "Social Media, professionalisiert." },
  nav_imprint: { en: "Imprint", de: "Impressum" },
  nav_privacy: { en: "Privacy", de: "Datenschutz" },
  nav_terms: { en: "Terms", de: "AGB" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof dict) => string };
const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const stored = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang)) || null;
    if (stored === "en" || stored === "de") setLangState(stored);
    else if (typeof navigator !== "undefined" && navigator.language.startsWith("de")) setLangState("de");
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };
  const t = (k: keyof typeof dict) => dict[k][lang];
  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n outside provider");
  return ctx;
}
