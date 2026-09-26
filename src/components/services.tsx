"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { GradientBlobs } from "@/components/gradient-blobs";
import { WhatsAppIcon } from "@/components/icons";
import { contact, services } from "@/lib/site-content";

const WIDTHS = [480, 800, 1200, 1600];
const LAYOUT: { area: string; size: "small" | "large"; aspect: string; extra: string }[] = [
  { area: "d", size: "large", aspect: "aspect-[3/4]", extra: "" }, // Psicoterapia Integral — big portrait, featured
  {
    area: "b",
    size: "small",
    aspect: "aspect-[4/3]",
    extra: "lg:w-4/5 lg:justify-self-center",
  }, // Acompañamiento Familiar — wide landscape, 20% smaller
  {
    area: "a",
    size: "small",
    aspect: "aspect-square",
    extra: "lg:w-[110%] lg:justify-self-end lg:self-end",
  }, // Cuidado de Cuidadores — small square, 10% bigger, bottom-aligned with b
  { area: "c", size: "small", aspect: "aspect-square", extra: "" }, // Propósito Vivo — small square
  { area: "e", size: "small", aspect: "aspect-square", extra: "" }, // Trabajo Biográfico — small square
];

function srcSetFor(slug: string) {
  return WIDTHS.map((w) => `/images/services/${slug}-${w}.webp ${w}w`).join(", ");
}

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

function ServiceCard({
  service,
  index,
  area,
  size,
  aspect,
  extra,
  isDesktop,
}: {
  service: (typeof services)[number];
  index: number;
  area: string;
  size: "small" | "large";
  aspect: string;
  extra: string;
  isDesktop: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const large = size === "large";
  const href = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    `Hola Ana, me gustaría saber más sobre ${service.title}.`
  )}`;

  return (
    <div
      id={service.slug}
      style={{ gridArea: isDesktop ? area : undefined }}
      className={`group relative ${aspect} w-full cursor-pointer overflow-hidden rounded-3xl bg-secondary shadow-lg shadow-primary/10 transition-[transform,box-shadow] duration-300 ease-out hover:z-10 hover:scale-[1.04] hover:shadow-2xl hover:shadow-primary/30 ${extra}`}
    >
      <motion.div
        initial={
          reduceMotion
            ? { opacity: 1 }
            : { opacity: 0.35, filter: "blur(10px)", transform: "scale(0.9)" }
        }
        whileInView={
          reduceMotion
            ? { opacity: 1 }
            : { opacity: 1, filter: "blur(0px)", transform: "scale(1)" }
        }
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1], delay: Math.min(index * 0.04, 0.12) }}
        className="absolute inset-0"
      >
        <img
          src={`/images/services/${service.slug}-800.webp`}
          srcSet={srcSetFor(service.slug)}
          sizes="(min-width: 1024px) 45vw, 90vw"
          alt={service.alt}
          loading="lazy"
          decoding="async"
          width={800}
          height={800}
          className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        <div className={`relative flex h-full flex-col justify-end ${large ? "p-5 sm:p-7" : "p-4"}`}>
          <h3
            className={`font-heading font-medium tracking-tight text-white ${large ? "text-2xl sm:text-4xl" : "text-lg"}`}
          >
            {service.title}
          </h3>

          <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100 group-focus-within:max-h-40 group-focus-within:opacity-100">
            <p className={`mt-2 leading-snug text-white/85 ${large ? "text-base sm:text-lg" : "text-sm"}`}>
              {service.blurb}
            </p>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary text-primary-foreground transition-transform hover:scale-[1.02] ${large ? "px-6 py-3.5 text-base" : "px-3 py-2.5 text-xs"} font-medium`}
            >
              <WhatsAppIcon className="size-4 shrink-0" />
              Escríbeme
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Services() {
  const isDesktop = useIsDesktop();

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

        <div className="services-grid mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-7">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={index}
              area={LAYOUT[index].area}
              size={LAYOUT[index].size}
              aspect={LAYOUT[index].aspect}
              extra={LAYOUT[index].extra}
              isDesktop={isDesktop}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
