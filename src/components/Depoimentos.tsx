import { Quote } from "lucide-react";
import { config } from "@/config";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Depoimentos() {
  const { testimonials } = config;

  return (
    <section
      id="depoimentos"
      className="section-pad relative overflow-hidden bg-cream-deep/40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 size-[400px] rounded-full bg-blush/30 blur-3xl"
      />
      <div className="container-site relative">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <figure className="flex h-full flex-col rounded-card border border-border bg-card p-8 shadow-card">
                <Quote className="size-8 text-blush" />
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-display text-lg font-semibold text-mauve">
                    {t.author}
                  </p>
                  <p className="text-sm text-ink-soft">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
