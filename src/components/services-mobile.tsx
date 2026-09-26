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
  const ctaRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let raf = 0;

    function update() {
      const maxScroll = scroller!.scrollWidth - scroller!.clientWidth;
      const atStart = scroller!.scrollLeft <= 4;
      const atEnd = scroller!.scrollLeft >= maxScroll - 4;

      const rect = scroller!.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const cards = cardRefs.current;

      cards.forEach((card, i) => {
        if (!card) return;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        let distance = Math.abs(cardCenter - center);

        if ((i === 0 && atStart) || (i === cards.length - 1 && atEnd)) {
          distance = 0;
        }

        const ratio = Math.min(distance / (rect.width / 2), 1);
        card.style.filter = `blur(${ratio * 6}px)`;
        card.style.transform = `scale(${1.06 - ratio * 0.22})`;
        card.style.opacity = `${1 - ratio * 0.45}`;

        const cta = ctaRefs.current[i];
        if (cta) {
          const focused = ratio < 0.15;
          cta.style.opacity = focused ? "1" : "0";
          cta.style.transform = focused ? "translateY(0px) scale(1)" : "translateY(8px) scale(0.9)";
          cta.style.pointerEvents = focused ? "auto" : "none";
        }
      });

      raf = 0;
    }

    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(update);
    }

    for (const card of cardRefs.current) {
      if (card) card.style.transition = "transform 60ms linear, filter 60ms linear, opacity 60ms linear";
    }

    update();
    const settleTimer = window.setTimeout(update, 300);
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(settleTimer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="lg:hidden">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-proximity gap-4 overflow-x-auto px-[10%] py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
              className="relative aspect-[4/5] w-[80%] shrink-0 snap-center overflow-hidden rounded-3xl bg-secondary shadow-lg shadow-primary/10 will-change-[transform,filter]"
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
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10" />

              <div className="relative flex h-full flex-col justify-end p-5">
                <span className="font-heading text-sm text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-heading text-lg font-medium leading-tight tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-white/90">{service.summary}</p>

                <a
                  ref={(el) => {
                    ctaRefs.current[index] = el;
                  }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ opacity: 0, transform: "translateY(8px) scale(0.9)", pointerEvents: "none" }}
                  className="mt-3 flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-[opacity,transform] duration-300"
                >
                  <WhatsAppIcon className="size-4 shrink-0" />
                  Escríbeme
                </a>
              </div>
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
