import { Check } from "lucide-react";
import { config } from "@/config";
import { Reveal } from "@/components/ui/reveal";

export function Sobre() {
  const { about } = config;

  return (
    <section id="sobre" className="section-pad bg-cream-deep/40">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Visual */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-visual shadow-card">
              <img
                src={config.about.photo}
                alt={config.clinic.professional}
                className="absolute inset-0 size-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="absolute -right-4 -top-4 rounded-2xl bg-white/90 px-5 py-4 text-center shadow-card backdrop-blur-sm">
              <p className="font-display text-lg font-semibold text-mauve">
                {config.clinic.cro}
              </p>
              <p className="text-xs text-ink-soft">{config.about.credentialLabel}</p>
            </div>
          </div>
        </Reveal>

        {/* Texto */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-eyebrow">{about.eyebrow}</span>
            <h2 className="mt-3 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight text-ink">
              {about.title}
            </h2>
          </Reveal>

          <div className="mt-6 space-y-4">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)}>
                <p className="text-lg leading-relaxed text-ink-soft">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {about.credentials.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-3 rounded-input bg-white/60 px-4 py-3"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-sage/20 text-pine">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-sm font-medium text-ink">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
