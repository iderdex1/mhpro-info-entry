import { Link } from "@tanstack/react-router";
import { Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useI18n } from "@/lib/i18n";

export function SiteHeader() {
  const { theme, toggle } = useTheme();
  const { lang, setLang, t } = useI18n();
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold text-base tracking-tight flex items-center gap-1.5">
          <span className="text-foreground">MHPRO</span>
          <span className="text-muted-foreground font-normal">.info</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }} className="hover:text-foreground transition-colors">{t("nav_home")}</Link>
          <Link to="/newsletter" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">{t("nav_newsletter")}</Link>
          <Link to="/contact" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">{t("nav_contact")}</Link>
          <Link to="/meeting" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">{t("nav_meeting")}</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "de" : "en")}
            className="flex items-center gap-1 h-9 px-3 rounded-full border border-border hover:bg-accent transition-colors text-sm font-medium"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" /> {lang.toUpperCase()}
          </button>
          <button
            onClick={toggle}
            className="h-9 w-9 grid place-items-center rounded-full border border-border hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
