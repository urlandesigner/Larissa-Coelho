import { MessageCircle } from "lucide-react";
import { config } from "@/config";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CTAFinal() {
  const { ctaFinal, contact } = config;

  return (
    <section className="section-pad">
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden rounded-visual bg-gradient-to-br from-sage to-pine px-8 py-16 text-center shadow-card md:px-16 md:py-20">
            {/* Decorativos */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 -top-16 size-64 rounded-full bg-white/10 blur-2xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -right-10 size-72 rounded-full bg-blush/20 blur-3xl"
            />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-tight text-white">
                {ctaFinal.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/85">
                {ctaFinal.subtitle}
              </p>
              <div className="mt-9 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-mauve hover:bg-blush-soft hover:text-mauve"
                >
                  <a
                    href={contact.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle />
                    {ctaFinal.cta}
                  </a>
                </Button>
              </div>
              <p className="mt-5 text-sm text-white/70">
                {contact.whatsappDisplay} · {contact.addressShort}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
