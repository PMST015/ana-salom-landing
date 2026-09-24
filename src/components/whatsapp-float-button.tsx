"use client";

import { motion, useReducedMotion } from "motion/react";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappHref } from "@/lib/site-content";

export function WhatsAppFloatButton() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7">
      {!reduceMotion && (
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full bg-primary"
          animate={{ scale: [1, 1.55, 1], opacity: [0.35, 0, 0.35] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <motion.a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        initial={{ opacity: 0, transform: "translateY(12px) scale(0.95)" }}
        animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
        transition={{ type: "spring", bounce: 0, duration: 0.6, delay: 0.6 }}
        whileHover={reduceMotion ? undefined : { transform: "scale(1.04)" }}
        whileTap={{ transform: "scale(0.97)" }}
        className="relative flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
      >
        <WhatsAppIcon className="size-5" />
        <span className="hidden text-sm font-medium sm:inline">Escríbeme</span>
      </motion.a>
    </div>
  );
}
