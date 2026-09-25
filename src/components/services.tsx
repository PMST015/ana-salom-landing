"use client";

import { motion, useReducedMotion } from "motion/react";
import { GradientBlobs } from "@/components/gradient-blobs";
import { WhatsAppIcon } from "@/components/icons";
import { contact, services } from "@/lib/site-content";

const WIDTHS = [480, 800, 1200, 1600];
const GRID_AREAS = ["top", "left", "center", "right", "bottom"];

function srcSetFor(slug: string) {
  return WIDTHS.map((w) => `/images/services/${slug}-${w}.webp ${w}w`).join(", ");
}

function ServiceCard({
  service,
  index,
  area,
}: {
  service: (typeof services)[number];
  index: number;
  area: string;
}) {
  const reduceMotion = useReducedMotion();
  const href = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    `Hola Ana, me gustaría saber más sobre ${service.title}.`
  )}`;

  return (
    <motion.div
      id={service.slug}
      style={{ gridArea: area }}
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
      className="group relative mx-auto aspect-square w-full max-w-[340px] overflow-hidden rounded-2xl bg-secondary shadow-md shadow-primary/10 transition-transform duration-300 hover:scale-[1.03]"
    >
      <img
        src={`/images/services/${service.slug}-800.webp`}
        srcSet={srcSetFor(service.slug)}
        sizes="(min-width: 1024px) 340px, 90vw"
        alt={service.alt}
        loading="lazy"
        decoding="async"
        width={800}
        height={800}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

      <div className="relative flex h-full flex-col justify-end p-5">
        <h3 className="font-heading text-xl font-medium tracking-tight text-white sm:text-2xl">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-snug text-white/85 sm:text-base">{service.blurb}</p>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex max-h-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-300 group-hover:max-h-14 group-hover:opacity-100 group-focus-within:max-h-14 group-focus-within:opacity-100 sm:py-3 sm:text-sm sm:font-medium"
        >
          <WhatsAppIcon className="size-4 shrink-0" />
          Escríbeme para hablar más de este proceso
        </a>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden py-20">
      <GradientBlobs />
      <div className="mx-auto max-w-[1800px] px-6 sm:px-12 lg:px-[100px]">
        <div className="max-w-2xl">
          <p className="text-base font-medium uppercase tracking-[0.18em] text-primary">
            Servicios
          </p>
          <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Cinco formas de acompañar tu transformación
          </h2>
        </div>

        <div className="services-grid mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={index}
              area={GRID_AREAS[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
