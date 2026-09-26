"use client";

import { useEffect, useRef } from "react";
import { WhatsAppIcon } from "@/components/icons";
import { contact, services } from "@/lib/site-content";

const WIDTHS = [480, 800, 1200, 1600];

function srcSetFor(slug: string) {
  return WIDTHS.map((w) => `/images/services/${slug}-${w}.webp ${w}w`).join(", ");
}

export function ServicesMobile() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let raf = 0;
    function update() {
      const rect = scroller!.getBoundingClientRect();
      const center = rect.left + rect.width / 2;

      for (const card of cardRefs.current) {
        if (!card) continue;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - center);
        const ratio = Math.min(distance / (rect.width / 2), 1);

        card.style.filter = `blur(${ratio * 6}px)`;
        card.style.transform = `scale(${1 - ratio * 0.12})`;
        card.style.opacity = `${1 - ratio * 0.45}`;
      }
      raf = 0;
    }

    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(update);
    }

    update();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="lg:hidden">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-[10%] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((service, index) => {
          const href = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
            `Hola Ana, me gustaría saber más sobre ${service.title}.`
          )}`;

          return (
            <div
              key={service.slug}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="relative aspect-[4/5] w-[80%] shrink-0 snap-center overflow-hidden rounded-3xl bg-secondary shadow-lg shadow-primary/10 transition-[filter,transform,opacity] duration-100 ease-out"
            >
              <img
                src={`/images/services/${service.slug}-800.webp`}
                srcSet={srcSetFor(service.slug)}
                sizes="80vw"
                alt={service.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="relative flex h-full flex-col justify-end p-5 pr-20">
                <span className="font-heading text-sm text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-heading text-xl font-medium tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-white/85">{service.blurb}</p>
              </div>

              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Escribir por WhatsApp sobre ${service.title}`}
                className="absolute bottom-5 right-5 flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
              >
                <WhatsAppIcon className="size-5" />
              </a>
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Desliza para ver los 5 servicios →
      </p>
    </div>
  );
}
