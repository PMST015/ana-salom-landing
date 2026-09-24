"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { brand, whatsappHref } from "@/lib/site-content";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 82% 8%, color-mix(in oklab, var(--primary) 22%, transparent) 0%, transparent 70%), radial-gradient(45% 40% at 5% 95%, color-mix(in oklab, var(--primary) 14%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-primary">
            {brand.pillars.join(" · ")}
          </p>

          <h1 className="font-heading text-4xl font-medium leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {brand.heroTitle}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {brand.heroSubtitle}
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {brand.heroLead}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary px-7 text-base text-primary-foreground hover:bg-primary/90"
            >
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-4" />
                Agenda una primera conversación
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border px-7 text-base"
            >
              <a href="#servicios">Conoce los servicios</a>
            </Button>
          </div>

          <div className="mt-10 border-t border-border pt-6">
            <p className="font-heading text-lg text-foreground sm:text-xl">
              {brand.trustStat}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Personas · Familias · Organizaciones · Comunidades — en contextos multiculturales
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, transform: "translateY(24px) scale(0.97)" }}
          animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE_OUT }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/25 via-secondary to-background" />
          <div className="absolute inset-6 rounded-[1.5rem] border border-primary/25" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
            <CedarMark className="h-24 w-24 text-foreground" />
            <p className="font-heading text-2xl italic text-foreground">
              {brand.name}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {brand.descriptor}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CedarMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M50 30c-9 3-16 6-22 6M50 30c9 3 16 6 22 6" />
        <path d="M50 40c-11 3-19 6-26 6M50 40c11 3 19 6 26 6" />
        <path d="M50 50c-13 3-22 6-30 6M50 50c13 3 22 6 30 6" />
      </g>
      <path d="M50 30v28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M50 58c0 6-6 8-6 14M50 58c0 6 6 8 6 14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
