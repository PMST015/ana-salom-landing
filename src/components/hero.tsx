"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { brand, whatsappHref } from "@/lib/site-content";

export function Hero() {
  const reduceMotion = useReducedMotion();

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
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: "translateY(22px)" }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, transform: "translateY(0px)" }}
          transition={reduceMotion ? { duration: 0.3 } : { type: "spring", bounce: 0, duration: 0.8 }}
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
              className="rounded-full bg-primary px-7 text-base text-primary-foreground transition-[transform,background-color] duration-200 hover:scale-[1.02] hover:bg-primary/90 active:scale-[0.97]"
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
              className="rounded-full border-border px-7 text-base transition-transform duration-200 hover:scale-[1.02] active:scale-[0.97]"
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
          initial={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, transform: "translateY(26px) scale(0.97)" }
          }
          animate={
            reduceMotion
              ? { opacity: 1 }
              : { opacity: 1, transform: "translateY(0px) scale(1)" }
          }
          transition={
            reduceMotion
              ? { duration: 0.3 }
              : { type: "spring", bounce: 0, duration: 0.9, delay: 0.1 }
          }
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-secondary to-transparent blur-2xl"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-primary/20 bg-secondary shadow-xl shadow-primary/10">
            <Image
              src="/images/ana-maria-salom-reyes.webp"
              alt={`${brand.name}, ${brand.descriptor}`}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-4 -top-4 flex size-16 items-center justify-center rounded-full border border-border bg-background shadow-lg">
            <Image
              src="/images/isotipo-naranja.png"
              alt=""
              width={128}
              height={128}
              className="size-10"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-border bg-background/95 px-5 py-3 text-center shadow-lg backdrop-blur">
            <p className="font-heading text-base text-foreground">{brand.name}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{brand.trustStat}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
