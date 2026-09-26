"use client";

import { useEffect, useRef } from "react";
import { WhatsAppIcon } from "@/components/icons";
import { contact, services } from "@/lib/site-content";

const WIDTHS = [480, 800, 1200, 1600];
const SNAP_DURATION = 220;

function srcSetFor(slug: string) {
  return WIDTHS.map((w) => `/images/services/${slug}-${w}.webp ${w}w`).join(", ");
}

function easeOutQuad(t: number) {
  return 1 - (1 - t) * (1 - t);
}

export function ServicesMobile() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let raf = 0;
    let snapRaf = 0;

    // Lightweight visual pass: only scale + a touch of opacity. No blur —
    // filter animations are expensive to composite on mobile GPUs.
    function updateVisuals() {
      const rect = scroller!.getBoundingClientRect();
      const center = rect.left + rect.width / 2;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - center);
        const ratio = Math.min(distance / (rect.width / 2), 1);

        card.style.transform = `scale(${1.05 - ratio * 0.08})`;
        card.style.opacity = `${1 - ratio * 0.25}`;

        const cta = ctaRefs.current[i];
        if (cta) {
          const focused = ratio < 0.2;
          cta.style.opacity = focused ? "1" : "0";
          cta.style.pointerEvents = focused ? "auto" : "none";
        }
      });
      raf = 0;
    }

    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(updateVisuals);
    }

    function nearestIndex() {
      const rect = scroller!.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      let best = 0;
      let bestDistance = Infinity;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - center);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = i;
        }
      });
      return best;
    }

    // Fully custom snap animation — we control the exact duration/easing
    // ourselves instead of relying on the browser's own scroll-snap engine,
    // which was the source of the earlier lag.
    function snapTo(index: number) {
      const card = cardRefs.current[index];
      const scrollerEl = scrollerRef.current;
      if (!card || !scrollerEl) return;

      const start = scrollerEl.scrollLeft;
      const target = card.offsetLeft - (scrollerEl.clientWidth - card.clientWidth) / 2;
      const delta = target - start;
      if (Math.abs(delta) < 1) return;

      const startTime = performance.now();
      cancelAnimationFrame(snapRaf);

      function step(now: number) {
        const t = Math.min((now - startTime) / SNAP_DURATION, 1);
        scrollerEl!.scrollLeft = start + delta * easeOutQuad(t);
        updateVisuals();
        if (t < 1) snapRaf = requestAnimationFrame(step);
      }
      snapRaf = requestAnimationFrame(step);
    }

    function onTouchEnd() {
      snapTo(nearestIndex());
    }

    updateVisuals();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    scroller.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      scroller.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      cancelAnimationFrame(snapRaf);
    };
  }, []);

  return (
    <div className="lg:hidden">
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto px-[10%] py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
              className="relative aspect-[4/5] w-[80%] shrink-0 overflow-hidden rounded-3xl bg-secondary shadow-lg shadow-primary/10"
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
                  style={{ opacity: 0, pointerEvents: "none" }}
                  className="mt-3 flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity duration-200"
                >
                  <WhatsAppIcon className="size-4 shrink-0" />
                  Escríbeme
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
