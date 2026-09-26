"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { brand, whatsappHref } from "@/lib/site-content";

function HeroCopy({ light = false }: { light?: boolean }) {
  return (
    <>
      <p className="mb-5 text-base font-medium uppercase tracking-[0.18em] text-primary">
        {brand.pillars.join(" · ")}
      </p>

      <h1 className="font-heading text-5xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
        {brand.heroTitle}
      </h1>

      <p
        className={`mt-6 max-w-xl text-xl leading-relaxed sm:text-2xl ${light ? "text-foreground/80" : "text-muted-foreground"}`}
      >
        {brand.heroSubtitle}
      </p>

      <p
        className={`mt-4 max-w-xl text-lg leading-relaxed ${light ? "text-foreground/70" : "text-muted-foreground"}`}
      >
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
            <span className="lg:hidden">Hablar con Ana María</span>
            <span className="hidden lg:inline">Agenda una primera conversación</span>
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="rounded-full border-border bg-background/70 px-7 py-6 text-lg backdrop-blur-sm transition-transform duration-200 hover:scale-[1.02] active:scale-[0.97]"
        >
          <a href="#servicios">Conoce los servicios</a>
        </Button>
      </div>
    </>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden bg-secondary/30">
      {/* Mobile: photo band on top, text below in normal flow */}
      <div className="lg:hidden">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 1, transform: "scale(1.02)" }}
          animate={{ opacity: 1, transform: "scale(1)" }}
          transition={reduceMotion ? { duration: 0.3 } : { type: "spring", bounce: 0, duration: 0.9 }}
          className="relative h-[50vh] w-full"
        >
          <Image
            src="/images/ana-banner-mobile-v2.webp"
            alt={`${brand.name}, ${brand.descriptor}`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </motion.div>

        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 1, transform: "translateY(22px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={reduceMotion ? { duration: 0.3 } : { type: "spring", bounce: 0, duration: 0.8 }}
          className="px-6 pb-16 pt-10 sm:px-12"
        >
          <HeroCopy />
        </motion.div>
      </div>

      {/* Desktop: full-bleed photo, text overlaid on top */}
      <div className="relative hidden min-h-[85vh] w-full lg:block">
        <Image
          src="/images/ana-banner-fullbleed.webp"
          alt={`${brand.name}, ${brand.descriptor}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent" />

        <div className="relative mx-auto flex h-full min-h-[85vh] max-w-[1800px] items-center">
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 1, transform: "translateY(22px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={reduceMotion ? { duration: 0.3 } : { type: "spring", bounce: 0, duration: 0.8 }}
            className="max-w-2xl px-6 pb-16 pt-40 lg:px-[100px]"
          >
            <HeroCopy light />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
