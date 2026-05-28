import { MapPin, Phone, Instagram } from "lucide-react";
import { config } from "@/config";

export function Footer() {
  const { clinic, contact, footer, nav } = config;

  return (
    <footer className="border-t border-border bg-cream-deep/50">
      <div className="container-site pt-16 pb-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1.4fr]">
          {/* Marca */}
          <div>
            <img
              src="/logo.svg"
              alt={`${clinic.name} — ${clinic.tagline}`}
              className="h-16 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-soft">
              {footer.description}
            </p>
            <p className="mt-4 text-xs text-ink-soft">{clinic.cro}</p>
          </div>

          {/* Navegação + contato */}
          <div>
            <h3 className="font-display text-lg font-semibold text-ink">
              {footer.navLabel}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-soft transition-colors hover:text-mauve"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-3">
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-ink-soft transition-colors hover:text-mauve"
              >
                <Phone className="size-4 text-pine" />
                {contact.whatsappDisplay}
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-ink-soft transition-colors hover:text-mauve"
              >
                <Instagram className="size-4 text-pine" />
                {contact.instagramHandle}
              </a>
              <a
                href={contact.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2.5 text-sm text-ink-soft transition-colors hover:text-mauve"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-pine" />
                <span className="max-w-[14rem]">{contact.address}</span>
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-ink">
              {footer.locationLabel}
            </h3>
            <div className="overflow-hidden rounded-card border border-border shadow-soft">
              <iframe
                title={footer.locationLabel}
                src={contact.mapsEmbed}
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-ink-soft sm:flex-row">
          <p>
            © {new Date().getFullYear()} {clinic.name}. {footer.rightsText}
          </p>
          <div className="flex flex-col items-center gap-1 sm:items-end">
            <p>{clinic.tagline} · {contact.city}</p>
            <p>
              Desenvolvido por{" "}
              <a
                href={footer.developer.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-mauve/70 transition-colors hover:text-mauve"
              >
                {footer.developer.name}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
