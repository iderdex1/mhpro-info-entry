import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — MHPRO" },
      { name: "description", content: "Privacy policy for MHPRO." },
    ],
  }),
  component: PrivacyPage,
});

const sections = {
  de: [
    { h: "Verantwortlicher", b: "IDERDEX LLC, 1209 Mountain Road Pl NE, Ste N, 87110 Albuquerque, United States. EIN 32-0825858. Kontakt: per Kontaktformular auf dieser Website." },
    { h: "Verarbeitete Daten", b: "Beim Besuch dieser Website werden technisch erforderliche Daten (IP, User-Agent, Zeitstempel) verarbeitet. Bei Nutzung von Kontaktformular, Newsletter oder Terminbuchung werden die von dir freiwillig übermittelten Daten (Name, E-Mail, Nachricht) verarbeitet." },
    { h: "Drittanbieter", b: "Für Kontaktformulare nutzen wir blu7.eu, für Terminbuchungen TidyCal und für den Newsletter SendFox. Diese Anbieter verarbeiten Daten in eigener Verantwortung gemäß ihrer Datenschutzerklärungen." },
    { h: "Rechtsgrundlagen", b: "Verarbeitung auf Basis von Art. 6 Abs. 1 lit. b und f DSGVO sowie deiner Einwilligung (lit. a) für Newsletter und optionale Inhalte." },
    { h: "Deine Rechte", b: "Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch. Beschwerden kannst du bei einer Aufsichtsbehörde einreichen." },
    { h: "Speicherdauer", b: "Wir speichern Daten nur so lange, wie es für die jeweilige Verarbeitung erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen." },
  ],
  en: [
    { h: "Controller", b: "IDERDEX LLC, 1209 Mountain Road Pl NE, Ste N, 87110 Albuquerque, United States. EIN 32-0825858. Contact: via the contact form on this website." },
    { h: "Processed data", b: "When visiting this website, technically required data (IP, user agent, timestamp) is processed. When using the contact form, newsletter or booking, the data you voluntarily submit (name, email, message) is processed." },
    { h: "Third parties", b: "We use blu7.eu for contact forms, TidyCal for bookings and SendFox for the newsletter. These providers process data on their own responsibility according to their privacy policies." },
    { h: "Legal basis", b: "Processing is based on Art. 6(1) lit. b and f GDPR as well as your consent (lit. a) for newsletter and optional content." },
    { h: "Your rights", b: "You have the right to information, correction, deletion, restriction, data portability and objection at any time. Complaints can be filed with a supervisory authority." },
    { h: "Retention", b: "We store data only for as long as is necessary for the respective processing or as required by statutory retention obligations." },
  ],
};

function PrivacyPage() {
  const { lang } = useI18n();
  const items = sections[lang];
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{lang === "de" ? "Datenschutz" : "Privacy"}</h1>
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