"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { audiences, contact } from "@/lib/site-content";

const WIDTHS = [480, 800, 1200, 1600];

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isDesktop;
}

function srcSetFor(slug: string) {
  return WIDTHS.map((w) => `/images/audiences/${slug}-${w}.webp ${w}w`).join(", ");
}

function AudienceCard({
  slug,
  data,
  fromSide,
  ctaMessage,
}: {
  slug: string;
  data: { title: string; description: string; segments: string[] };
  fromSide: "left" | "right";
  ctaMessage: string;
}) {
  const reduceMotion = useReducedMotion();
  const isDesktop = useIsDesktop();
  const offset = fromSide === "left" ? -90 : 90;
  const href = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(ctaMessage)}`;

  return (
    <motion.div
      initial={
        reduceMotion || !isDesktop
          ? { opacity: 1 }
          : { opacity: 0.3, filter: "blur(12px)", transform: `translateX(${offset}px)` }
      }
      whileInView={
        reduceMotion || !isDesktop
          ? { opacity: 1 }
          : { opacity: 1, filter: "blur(0px)", transform: "translateX(0px)" }
      }
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
      className="group relative min-h-[520px] overflow-hidden rounded-3xl shadow-lg shadow-primary/10 lg:min-h-[420px]"
    >
      <img
        src={`/images/audiences/${slug}-800.webp`}
        srcSet={srcSetFor(slug)}
        sizes="(min-width: 1024px) 45vw, 90vw"
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />

      <div className="relative flex h-full flex-col p-8">
        <h3 className="font-heading text-2xl font-medium text-white">{data.title}</h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-white/80">
          {data.description}
        </p>
        <ul className="mt-6 space-y-2.5">
          {data.segments.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm text-white/80">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-6 flex w-fit items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-primary-foreground transition-all duration-300 lg:absolute lg:bottom-6 lg:right-6 lg:mt-0 lg:max-h-0 lg:overflow-hidden lg:px-0 lg:py-0 lg:opacity-0 lg:group-hover:max-h-14 lg:group-hover:px-6 lg:group-hover:py-3.5 lg:group-hover:opacity-100 lg:group-focus-within:max-h-14 lg:group-focus-within:px-6 lg:group-focus-within:py-3.5 lg:group-focus-within:opacity-100"
        >
          <WhatsAppIcon className="size-4 shrink-0" />
          <span className="whitespace-nowrap text-sm font-medium">Conversemos</span>
        </a>
      </div>
    </motion.div>
  );
}

export function Audiences() {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-[1800px] px-6 sm:px-12 lg:px-[100px]">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              A quién acompaño
            </p>
            <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Personas y empresas familiares
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <AudienceCard
            slug="personas"
            data={audiences.b2c}
            fromSide="left"
            ctaMessage="Hola, vi la página web y quiero información sobre: acompañamiento para personas."
          />
          <AudienceCard
            slug="empresas"
            data={audiences.b2b}
            fromSide="right"
            ctaMessage="Hola, vi la página web y quiero información sobre: acompañamiento para empresas familiares."
          />
        </div>
      </div>
    </section>
  );
}
