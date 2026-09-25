"use client";

import { motion, useReducedMotion } from "motion/react";
import { WhatsAppIcon } from "@/components/icons";
import { contact, services } from "@/lib/site-content";

const WIDTHS = [480, 800, 1200, 1600];

function srcSetFor(slug: string) {
  return WIDTHS.map((w) => `/images/services/${slug}-${w}.webp ${w}w`).join(", ");
}

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const reduceMotion = useReducedMotion();
  const href = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    `Hola Ana, me gustaría saber más sobre ${service.title}.`
  )}`;

  return (
    <motion.div
      id={service.slug}
      initial={
        reduceMotion
          ? { opacity: 0 }
          : { opacity: 0.35, filter: "blur(10px)", transform: "scale(0.9)" }
      }
      whileInView={
        reduceMotion
          ? { opacity: 1 }
          : { opacity: 1, filter: "blur(0px)", transform: "scale(1)" }
      }
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1], delay: Math.min(index * 0.04, 0.12) }}
      className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-secondary shadow-md shadow-primary/10 transition-transform duration-300 hover:scale-[1.03]"
    >
      <img
        src={`/images/services/${service.slug}-800.webp`}
        srcSet={srcSetFor(service.slug)}
        sizes="(min-width: 1024px) 32vw, (min-width: 640px) 46vw, 90vw"
        alt={service.alt}
        loading="lazy"
        decoding="async"
        width={800}
        height={1067}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

      <div className="relative flex h-full flex-col justify-end p-5 sm:p-6">
        <span className="font-heading text-sm text-primary">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-1 font-heading text-2xl font-medium tracking-tight text-white sm:text-3xl">
          {service.title}
        </h3>
        <p className="mt-1.5 text-base text-white/85 sm:text-lg">{service.summary}</p>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex max-h-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-300 group-hover:max-h-14 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:max-h-14 group-focus-within:opacity-100 sm:translate-y-2 sm:py-3.5 sm:text-base sm:font-medium"
        >
          <WhatsAppIcon className="size-4" />
          Hablar por WhatsApp
        </a>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-[1800px] px-6 py-20 sm:px-12 lg:px-[100px]">
      <div className="max-w-2xl">
        <p className="text-base font-medium uppercase tracking-[0.18em] text-primary">
          Servicios
        </p>
        <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Cinco formas de acompañar tu transformación
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.slug} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
