import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — MHPRO" },
      { name: "description", content: "Terms and conditions for MHPRO." },
    ],
  }),
  component: TermsPage,
});

const sections = {
  de: [
    { h: "1. Geltungsbereich", b: "Diese AGB gelten für alle Verträge zwischen IDERDEX LLC (im Folgenden „MHPRO“) und den Kund:innen über Coaching, Akademie-Kurse und Beratungsleistungen." },
    { h: "2. Vertragsschluss", b: "Der Vertrag kommt durch deine Buchung und unsere schriftliche Bestätigung zustande. Angebote auf der Website sind unverbindlich." },
    { h: "3. Leistungsumfang", b: "Der konkrete Leistungsumfang ergibt sich aus der jeweiligen Programm- bzw. Kursbeschreibung sowie der individuellen Vereinbarung." },
    { h: "4. Vergütung & Zahlung", b: "Preise verstehen sich, soweit nicht anders angegeben, in Euro zzgl. der jeweils geltenden Steuern. Rechnungen sind innerhalb von 14 Tagen ohne Abzug fällig." },
    { h: "5. Widerruf", b: "Verbraucher haben ein gesetzliches Widerrufsrecht. Bei digitalen Inhalten erlischt das Widerrufsrecht mit deiner ausdrücklichen Zustimmung zur sofortigen Ausführung." },
    { h: "6. Haftung", b: "MHPRO haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit. Bei einfacher Fahrlässigkeit ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt." },
    { h: "7. Schlussbestimmungen", b: "Es gilt das Recht des Sitzstaates der IDERDEX LLC, soweit nicht zwingende verbraucherschützende Vorschriften entgegenstehen. Sollten einzelne Bestimmungen unwirksam sein, bleibt der Vertrag im Übrigen wirksam." },
  ],
  en: [
    { h: "1. Scope", b: "These terms apply to all contracts between IDERDEX LLC (hereinafter \"MHPRO\") and clients regarding coaching, academy courses and consulting services." },
    { h: "2. Conclusion of contract", b: "The contract is concluded through your booking and our written confirmation. Offers on the website are non-binding." },
    { h: "3. Scope of services", b: "The specific scope of services results from the respective program or course description and the individual agreement." },
    { h: "4. Fees & payment", b: "Unless otherwise stated, prices are in Euro plus applicable taxes. Invoices are due within 14 days without deduction." },
    { h: "5. Right of withdrawal", b: "Consumers have a statutory right of withdrawal. For digital content, the right of withdrawal expires upon your express consent to immediate execution." },
    { h: "6. Liability", b: "MHPRO is liable without limitation for intent and gross negligence. In the case of simple negligence, liability is limited to the typically foreseeable damage." },
    { h: "7. Final provisions", b: "The law of the state of incorporation of IDERDEX LLC applies, unless mandatory consumer protection provisions oppose. Should individual provisions be invalid, the contract remains otherwise effective." },
  ],
};

function TermsPage() {
  const { lang } = useI18n();
  const items = sections[lang];
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{lang === "de" ? "AGB" : "Terms & Conditions"}</h1>
      <div className="mt-10 space-y-8">
        {items.map((s) => (
          <section key={s.h}>
            <h2 className="text-xl font-semibold tracking-tight">{s.h}</h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">{s.b}</p>
          </section>
        ))}
      </div>
    </article>
  );
}