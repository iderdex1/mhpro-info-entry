import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/imprint")({
  head: () => ({
    meta: [
      { title: "Imprint — MHPRO" },
      { name: "description", content: "Legal information and imprint for MHPRO." },
    ],
  }),
  component: ImprintPage,
});

function ImprintPage() {
  const { lang } = useI18n();
  const de = lang === "de";
  return (
    <article className="mx-auto max-w-3xl px-6 py-24 prose-neutral">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{de ? "Impressum" : "Imprint"}</h1>
      <div className="mt-10 space-y-6 text-foreground/90 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold">IDERDEX LLC</h2>
          <p className="mt-2 text-muted-foreground">
            1209 Mountain Road Pl NE, Ste N<br />
            87110 Albuquerque<br />
            United States
          </p>
        </div>
        <p className="text-muted-foreground">EIN: 32-0825858</p>
        <p className="text-muted-foreground">
          Phone US: <a className="text-foreground hover:underline" href="tel:+15054487229">+1 (505) 448 7229</a><br />
          Phone EU: <a className="text-foreground hover:underline" href="tel:+496938097959">+49 (69) 380 979597</a>
        </p>
        <p className="text-sm text-muted-foreground">
          {de
            ? "Inhaltlich verantwortlich für das Angebot von MHPRO gemäß § 18 Abs. 2 MStV: IDERDEX LLC, Anschrift wie oben. Für die Inhalte externer Links sind ausschließlich deren Betreiber verantwortlich."
            : "Responsible for the content of MHPRO pursuant to § 18 para. 2 MStV: IDERDEX LLC, address as above. The operators of external links are solely responsible for their content."}
        </p>
        <p className="text-sm text-muted-foreground">
          {de
            ? "Alle erwähnten Marken, Dienstleistungs- und Markennamen bleiben Eigentum ihrer jeweiligen Inhaber."
            : "All trademarks, service marks and brand names referenced on this site remain the property of their respective owners."}
        </p>
      </div>
    </article>
  );
}