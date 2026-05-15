import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} MHPRO.info — {t("footer_rights")}</p>
        <nav className="flex items-center gap-6">
          <Link to="/imprint" className="hover:text-foreground transition-colors">{t("nav_imprint")}</Link>
          <Link to="/privacy" className="hover:text-foreground transition-colors">{t("nav_privacy")}</Link>
          <Link to="/terms" className="hover:text-foreground transition-colors">{t("nav_terms")}</Link>
        </nav>
      </div>
    </footer>
  );
}
