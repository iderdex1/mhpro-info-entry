import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Brain, Users } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";
import bgIderdex from "@/assets/bg-iderdex.jpg";
import bgNixotec from "@/assets/bg-nixotec.jpg";
import bgAsfact from "@/assets/bg-asfact.jpg";
import bgFutodigital from "@/assets/bg-futodigital.jpg";
import bgVidvisions from "@/assets/bg-vidvisions.jpg";
import bgPagedreams from "@/assets/bg-pagedreams.jpg";
import bgAgilokr from "@/assets/bg-agilokr.jpg";
import bgSanzafit from "@/assets/bg-sanzafit.jpg";
import bgFitwasser from "@/assets/bg-fitwasser.jpg";
import bgVeroviva from "@/assets/bg-veroviva.jpg";
import bgDigiclaro from "@/assets/bg-digiclaro.jpg";
import bgEchtclever from "@/assets/bg-echtclever.jpg";
import bgKixpert from "@/assets/bg-kixpert.jpg";
import bgCoachigo from "@/assets/bg-coachigo.jpg";
import bgSocialpro24 from "@/assets/bg-socialpro24.jpg";
import bgAiCoach from "@/assets/bg-ai-coach.jpg";
import bgAgileCoach from "@/assets/bg-agile-coach.jpg";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

type Service = {
  name: string;
  url: string;
  descKey: string;
  image: string;
  langVariants?: { en: string; de: string };
};

const main: Service[] = [
  { name: "iderdex.com", url: "https://iderdex.com", descKey: "iderdex_d", image: bgIderdex },
  { name: "nixotec.com", url: "https://nixotec.com", descKey: "nixotec_d", image: bgNixotec },
  { name: "veroviva.com", url: "https://veroviva.com", descKey: "veroviva_d", image: bgVeroviva },
];
const magazine: Service[] = [
  { name: "asfact", url: "https://asfact.com", descKey: "asfact_d", image: bgAsfact, langVariants: { en: "https://asfact.com", de: "https://asfact.de" } },
  { name: "digiclaro", url: "https://digiclaro.com", descKey: "digiclaro_d", image: bgDigiclaro },
  { name: "echtclever", url: "https://echtclever.com", descKey: "echtclever_d", image: bgEchtclever },
];
const sub: Service[] = [
  { name: "futodigital.com", url: "https://futodigital.com", descKey: "futodigital_d", image: bgFutodigital },
  { name: "vidvisions.com", url: "https://vidvisions.com", descKey: "vidvisions_d", image: bgVidvisions },
  { name: "pagedreams.com", url: "https://pagedreams.com", descKey: "pagedreams_d", image: bgPagedreams },
  { name: "agilokr.com", url: "https://agilokr.com", descKey: "agilokr_d", image: bgAgilokr },
  { name: "kixpert.com", url: "https://kixpert.com", descKey: "kixpert_d", image: bgKixpert },
  { name: "coachigo.com", url: "https://coachigo.com", descKey: "coachigo_d", image: bgCoachigo },
];
const products: Service[] = [
  { name: "sanzafit.com", url: "https://sanzafit.com", descKey: "sanzafit_d", image: bgSanzafit },
  { name: "fitwasser.com", url: "https://fitwasser.com", descKey: "fitwasser_d", image: bgFitwasser },
  { name: "socialpro24", url: "https://socialpro24.com", descKey: "socialpro24_d", image: bgSocialpro24 },
];

function Card({ s, lang, t }: { s: Service; lang: Lang; t: ReturnType<typeof useI18n>["t"] }) {
  const href = s.langVariants ? s.langVariants[lang] : s.url;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative flex flex-col justify-between p-6 rounded-3xl border border-border hover:border-foreground/30 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden min-h-[240px] text-white"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <img src={s.image} alt="" loading="lazy" width={800} height={512} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
      <div className="relative flex items-start justify-between gap-3">
        <h3 className="font-semibold text-lg tracking-tight">{s.name}</h3>
        <ArrowUpRight className="h-5 w-5 opacity-80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <div className="relative mt-auto">
        <p className="text-sm text-white/85 leading-relaxed">{t(s.descKey as never)}</p>
        <span className="mt-3 inline-block text-xs font-medium text-white/95 uppercase tracking-wider">{t("visit")} →</span>
      </div>
    </a>
  );
}

function Section({ title, items }: { title: string; items: Service[] }) {
  const { lang, t } = useI18n();
  return (
    <section className="mt-24">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">{title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((s) => <Card key={s.name} s={s} lang={lang} t={t} />)}
      </div>
    </section>
  );
}

function Index() {
  const { t } = useI18n();
  const slides = [heroSlide1, heroSlide2, heroSlide3];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, [slides.length]);
  return (
    <div className="pb-24">
      {/* Hero — Apple-like, calm, centered */}
      <section className="relative w-full overflow-hidden bg-black">
        {/* Slides */}
        <div className="absolute inset-0">
          {slides.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              width={1920}
              height={1280}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ease-out ${i === active ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 pt-32 md:pt-44 pb-24 md:pb-32 text-center text-white">
          <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
            <Sparkles className="h-3 w-3" />
            {t("hero_eyebrow")}
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.02]">
            {t("hero_title_2")}
            <br />
            <span className="text-white/60">{t("hero_title")}</span>
          </h1>
          <p className="mt-7 max-w-2xl mx-auto text-lg md:text-xl text-white/75 leading-relaxed">{t("hero_sub")}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#partners" className="px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:opacity-90 transition-opacity">
              {t("cta_explore")}
            </a>
            <Link to="/meeting" className="px-6 py-3 rounded-full font-medium text-sm text-white border border-white/25 hover:bg-white/10 transition-colors inline-flex items-center gap-1">
              {t("cta_meeting")} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          {/* Slide indicators */}
          <div className="mt-14 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1 rounded-full transition-all ${i === active ? "w-8 bg-white" : "w-4 bg-white/30 hover:bg-white/60"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Coach cards — feature row */}
      <section className="mx-auto max-w-6xl px-6 mt-16">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: Brain, title: t("ai_coach"), desc: t("ai_coach_d"), href: "https://ai-coach.mhpro.info", image: bgAiCoach },
            { icon: Users, title: t("agile_coach"), desc: t("agile_coach_d"), href: "https://agile-coach.mhpro.info", image: bgAgileCoach },
          ].map((c) => (
            <a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col justify-between p-8 md:p-10 rounded-3xl border border-border hover:border-foreground/30 transition-all duration-300 min-h-[340px] overflow-hidden text-white"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <img src={c.image} alt="" loading="lazy" width={1280} height={800} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/40" />
              <div className="relative">
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">{t("coach_eyebrow")}</div>
                <c.icon className="mt-6 h-8 w-8 text-white" strokeWidth={1.5} />
                <h3 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-3 text-base text-white/80 leading-relaxed max-w-md">{c.desc}</p>
              </div>
              <div className="relative mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                {t("learn_more")}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <div id="partners" />
      <div className="mx-auto max-w-6xl px-6">
        <Section title={t("sec_main")} items={main} />
        <Section title={t("sec_magazine")} items={magazine} />
        <Section title={t("sec_sub")} items={sub} />
        <Section title={t("sec_products")} items={products} />
      </div>
    </div>
  );
}
