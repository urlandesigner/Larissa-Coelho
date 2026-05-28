import { motion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** deslocamento vertical inicial em px (default 24) */
  y?: number;
}

/**
 * Wrapper de animação sutil: fade + leve translateY ao entrar na viewport.
 * Segue creative-direction.md — motion lento, discreto, quase imperceptível.
 * Respeita prefers-reduced-motion automaticamente (motion desativa transform).
 */
export function Reveal({ children, delay = 0, className, y = 24 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
