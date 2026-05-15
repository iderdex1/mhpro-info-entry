import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

export const Route = createFileRoute("/meeting")({
  head: () => ({ meta: [{ title: "Book a Meeting — asufo" }, { name: "description", content: "Book a strategy call with the asufo team." }] }),
  component: MeetingPage,
});

function MeetingPage() {
  const { lang, t } = useI18n();
  const { theme } = useTheme();
  const url = `https://tidycal.com/blu7/kore-strategy-call-${theme}-${lang}`;
  return (
    <div className="mx-auto max-w-5xl px-6 pt-14 pb-10">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{t("meeting_title")}</h1>
        <p className="mt-3 text-muted-foreground">{t("meeting_sub")}</p>
      </header>
      <div className="rounded-2xl overflow-hidden border border-border bg-card" style={{ boxShadow: "var(--shadow-card)" }}>
        <iframe key={url} src={url} title="Book a meeting" className="w-full" style={{ height: "1200px", border: 0 }} />
      </div>
    </div>
  );
}
