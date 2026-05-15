import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — asufo" }, { name: "description", content: "Get in touch with the asufo team." }] }),
  component: ContactPage,
});

function ContactPage() {
  const { lang, t } = useI18n();
  const { theme } = useTheme();
  const url = `https://contactform.blu7.eu/full_${theme}_${lang}`;
  return (
    <div className="mx-auto max-w-5xl px-6 pt-14 pb-10">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{t("contact_title")}</h1>
        <p className="mt-3 text-muted-foreground">{t("contact_sub")}</p>
      </header>
      <div className="rounded-2xl overflow-hidden border border-border bg-card" style={{ boxShadow: "var(--shadow-card)" }}>
        <iframe key={url} src={url} title="Contact form" className="w-full" style={{ height: "1100px", border: 0 }} />
      </div>
    </div>
  );
}
