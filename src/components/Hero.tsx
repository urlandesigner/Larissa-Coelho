import { motion } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";
import { config } from "@/config";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Fundos decorativos suaves */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 size-[520px] rounded-full bg-blush/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 size-[420px] rounded-full bg-mint/30 blur-3xl"
      />

      <div className="container-site relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Texto */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-mauve/30 px-4 py-2 text-xs font-medium uppercase tracking-wider text-mauve"
          >
            <MapPin className="size-3.5" />
            {config.hero.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[clamp(2.6rem,6vw,4.5rem)] font-semibold leading-[1.05] text-ink"
          >
            {config.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            {config.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild size="lg" className="sm:min-w-[210px]">
              <a
                href={config.contact.whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                {config.hero.cta}
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="sm:min-w-[210px]">
              <a href="#tratamentos">{config.hero.secondaryCta}</a>
            </Button>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-visual bg-gradient-to-br from-blush via-blush-soft to-mint/60 shadow-card">
            <img
              src={config.hero.photo}
              alt={config.clinic.professional}
              className="absolute inset-0 size-full object-cover object-top"
            />
          </div>

          {/* Card flutuante de credencial */}
          <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white/90 px-5 py-4 shadow-card backdrop-blur-sm md:-left-8">
            <p className="font-display text-2xl font-semibold text-mauve">
              {config.hero.badge.stat}
            </p>
            <p className="text-xs leading-tight text-ink-soft whitespace-pre-line">
              {config.hero.badge.label}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
