import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { config } from "@/config";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Ambiente() {
  const { ambiente } = config;
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const slides = ambiente.images.map((img) => ({ src: img.src, alt: img.alt }));

  return (
    <section id="ambiente" className="section-pad">
      <div className="container-site">
        <SectionHeading
          eyebrow={ambiente.eyebrow}
          title={ambiente.title}
          subtitle={ambiente.subtitle}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[3fr_2fr] lg:items-start">
          {/* Fotos: grade 2×2 */}
          <div className="grid grid-cols-2 gap-4">
            {ambiente.images.map((img, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-card shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`Ampliar foto: ${img.alt}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width="640"
                    height="480"
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                </button>
              </Reveal>
            ))}
          </div>

          {/* Vídeo: sticky no desktop */}
          <Reveal delay={0.3} className="lg:sticky lg:top-24">
            <div className="relative aspect-[9/16] overflow-hidden rounded-card shadow-card bg-neutral-900">
              <video
                src="/tour-clinica.mp4"
                poster="/images/clinica1.jpg"
                controls
                muted
                playsInline
                preload="none"
                className="absolute inset-0 size-full object-cover"
                aria-label="Tour pela clínica Dra. Larissa Coelho"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
      />
    </section>
  );
}
