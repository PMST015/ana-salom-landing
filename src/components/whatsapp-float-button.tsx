"use client";

import { motion } from "motion/react";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappHref } from "@/lib/site-content";

export function WhatsAppFloatButton() {
  return (
    <motion.a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      initial={{ opacity: 0, transform: "translateY(12px) scale(0.95)" }}
      animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
      transition={{ duration: 0.5, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
      whileTap={{ transform: "scale(0.97)" }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90 sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="size-5" />
      <span className="hidden text-sm font-medium sm:inline">Escríbeme</span>
    </motion.a>
  );
}
