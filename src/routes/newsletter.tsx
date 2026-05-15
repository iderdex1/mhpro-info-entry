import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/newsletter")({
  head: () => ({ meta: [{ title: "Newsletter — asufo" }, { name: "description", content: "Subscribe to the asufo newsletter." }] }),
  component: NewsletterPage,
});

function NewsletterPage() {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-5xl px-6 pt-14 pb-10">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{t("newsletter_title")}</h1>
        <p className="mt-3 text-muted-foreground">{t("newsletter_sub")}</p>
      </header>
      <div className="rounded-2xl overflow-hidden border border-border bg-card" style={{ boxShadow: "var(--shadow-card)" }}>
        <iframe src="https://sendfox.com/iderdex" title="Newsletter" className="w-full" style={{ height: "900px", border: 0 }} />
      </div>
    </div>
  );
}
