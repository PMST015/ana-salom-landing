"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { brand, whatsappHref } from "@/lib/site-content";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden bg-secondary/30">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 45% at 88% 15%, color-mix(in oklab, var(--primary) 16%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[560px] max-w-[1800px] flex-col lg:min-h-[760px] lg:flex-row lg:items-center">
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: "translateY(22px)" }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, transform: "translateY(0px)" }}
          transition={reduceMotion ? { duration: 0.3 } : { type: "spring", bounce: 0, duration: 0.8 }}
          className="relative z-10 order-2 px-6 pb-16 pt-10 sm:px-12 lg:order-1 lg:w-[52%] lg:px-[100px] lg:py-24"
        >
          <p className="mb-5 text-base font-medium uppercase tracking-[0.18em] text-primary">
            {brand.pillars.join(" · ")}
          </p>

          <h1 className="font-heading text-5xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {brand.heroTitle}
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
            {brand.heroSubtitle}
          </p>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {brand.heroLead}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary px-7 py-6 text-lg text-primary-foreground transition-[transform,background-color] duration-200 hover:scale-[1.02] hover:bg-primary/90 active:scale-[0.97]"
            >
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-5" />
                Agenda una primera conversación
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border px-7 py-6 text-lg transition-transform duration-200 hover:scale-[1.02] active:scale-[0.97]"
            >
              <a href="#servicios">Conoce los servicios</a>
            </Button>
          </div>

        </motion.div>

        <motion.div
          initial={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, transform: "translateY(0px) scale(1.02)" }
          }
          animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
          transition={
            reduceMotion
              ? { duration: 0.3 }
              : { type: "spring", bounce: 0, duration: 0.9, delay: 0.1 }
          }
          className="relative order-1 h-[46vh] w-full sm:h-[54vh] lg:absolute lg:inset-y-0 lg:right-0 lg:order-2 lg:h-full lg:w-[54%]"
        >
          <Image
            src="/images/ana-banner-mobile.webp"
            alt={`${brand.name}, ${brand.descriptor}`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center lg:hidden"
          />
          <Image
            src="/images/ana-banner-desktop.webp"
            alt={`${brand.name}, ${brand.descriptor}`}
            fill
            priority
            sizes="54vw"
            className="hidden object-cover object-center lg:block"
          />
        </motion.div>
      </div>
    </section>
  );
}
