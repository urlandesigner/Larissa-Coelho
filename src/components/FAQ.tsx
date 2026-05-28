import { useState } from "react";
import { Plus } from "lucide-react";
import { config } from "@/config";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function FAQ() {
  const { faq } = config;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad">
      <div className="container-site max-w-3xl">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />

        <div className="mt-12 space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={0.05 * i}>
                <div
                  className={cn(
                    "overflow-hidden rounded-card border border-border bg-card transition-shadow duration-300",
                    isOpen && "shadow-card"
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg font-medium text-ink">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "flex size-8 shrink-0 items-center justify-center rounded-full bg-blush-soft text-mauve transition-transform duration-500",
                        isOpen && "rotate-45 bg-blush"
                      )}
                    >
                      <Plus className="size-4" />
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-500 ease-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-base leading-relaxed text-ink-soft">
                        {item.answer}
                      </p>
                    </div>
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
