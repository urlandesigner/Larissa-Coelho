import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { config } from "@/config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-cream/85 shadow-soft backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="container-site flex h-20 items-center justify-between">
          <a href="#top" className="flex items-center" aria-label={config.clinic.name}>
            <img
              src="/logo-horizontal.svg"
              alt={`${config.clinic.name} — ${config.clinic.tagline}`}
              className="h-14 w-auto md:h-16"
            />
          </a>

          {/* Nav desktop */}
          <nav className="hidden items-center gap-8 lg:flex">
            {config.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-mauve"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild size="sm">
              <a href={config.contact.whatsappLink} target="_blank" rel="noreferrer">
                {config.hero.cta}
              </a>
            </Button>
          </div>

          {/* Toggle mobile */}
          <button
            className="flex size-11 items-center justify-center rounded-full text-ink lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMenuOpen(false)}
        aria-hidden
      />

      {/* Drawer lateral */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-3/4 max-w-xs flex-col bg-cream shadow-xl transition-transform duration-300 ease-out lg:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Cabeçalho do drawer */}
        <div className="flex h-20 items-center justify-between border-b border-border px-6">
          <img
            src="/logo-horizontal.svg"
            alt={config.clinic.name}
            className="h-10 w-auto"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="flex size-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-blush-soft"
            aria-label="Fechar menu"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Links de navegação */}
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
          {config.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-input px-4 py-3 text-[17px] font-medium text-ink transition-colors hover:bg-blush-soft"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA fixo no rodapé do drawer */}
        <div className="border-t border-border p-4">
          <Button asChild size="lg" className="w-full">
            <a
              href={config.contact.whatsappLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              {config.hero.cta}
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
