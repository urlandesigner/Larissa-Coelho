import { config } from "@/config";
import { iconMap } from "@/lib/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Diferenciais() {
  const { differentials } = config;

  return (
    <section
      id="diferenciais"
      className="section-pad relative overflow-hidden bg-cream-deep/40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 size-[400px] rounded-full bg-mint/20 blur-3xl"
      />
      <div className="container-site relative">
        <SectionHeading
          eyebrow={differentials.eyebrow}
          title={differentials.title}
        />

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {differentials.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? iconMap.Award;
            return (
              <Reveal key={item.title} delay={0.08 * i}>
                <div className="flex gap-5">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white text-pine shadow-soft">
                    <Icon className="size-7" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-ink-soft">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
