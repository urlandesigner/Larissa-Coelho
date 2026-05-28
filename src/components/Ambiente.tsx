import { config } from "@/config";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function Ambiente() {
  const { ambiente } = config;

  return (
    <section id="ambiente" className="section-pad">
      <div className="container-site">
        <SectionHeading
          eyebrow={ambiente.eyebrow}
          title={ambiente.title}
          subtitle={ambiente.subtitle}
        />

        {/*
          Layout desktop (lg, 3 colunas):
          [ 1 (tall) ] [ 2 ] [ 3 ]
          [ 1 (tall) ] [   4    ]

          Layout tablet (sm, 2 colunas):
          [ 1 ] [ 1 ]
          [ 2 ] [ 3 ]
          [   4   ]

          Layout mobile: coluna única
        */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ambiente.images.map((img, i) => (
            <Reveal
              key={i}
              delay={0.08 * i}
              className={cn(
                i === 0 && "sm:col-span-2 lg:col-span-1 lg:row-span-2",
                i === 3 && "sm:col-span-2 lg:col-span-2"
              )}
            >
              <div
                className={cn(
                  "group relative overflow-hidden rounded-card bg-gradient-to-br from-blush-soft via-cream to-mint/40 shadow-card",
                  i === 0 ? "aspect-[4/3] lg:aspect-[3/4]" : "aspect-[4/3]"
                )}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
