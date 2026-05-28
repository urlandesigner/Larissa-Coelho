import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { config } from "@/config";
import { cn } from "@/lib/utils";

/** Botão flutuante de WhatsApp — aparece após rolar um pouco a página. */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={config.contact.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className={cn(
        "fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-sage text-white shadow-card transition-all duration-500 hover:bg-pine",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <MessageCircle className="size-7" />
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-sage/40" />
    </a>
  );
}
