import { config } from "@/config";
import { iconMap } from "@/lib/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Tratamentos() {
  const { treatments } = config;

  return (
    <section id="tratamentos" className="section-pad">
      <div className="container-site">
        <SectionHeading
          eyebrow={treatments.eyebrow}
          title={treatments.title}
          subtitle={treatments.subtitle}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? iconMap.Sparkles;
            return (
              <Reveal key={item.title} delay={0.08 * i}>
                <article className="group h-full rounded-card border border-border bg-card p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-blush-soft text-rose transition-colors duration-500 group-hover:bg-blush">
                    <Icon className="size-7" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
