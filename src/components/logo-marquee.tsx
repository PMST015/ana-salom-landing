"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import type { LogoItem } from "@/lib/site-content";

const SPEED_PX_PER_SEC = 34;
const DRAG_THRESHOLD = 4;

export function LogoMarquee({ items, imageDir }: { items: LogoItem[]; imageDir: string }) {
  const reduceMotion = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragMovedRef = useRef(false);
  const pointerStartX = useRef(0);
  const startScrollLeft = useRef(0);
  const setWidthRef = useRef(0);

  const track = [...items, ...items, ...items];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    function measure() {
      const w = scroller!.scrollWidth / 3;
      setWidthRef.current = w;
      scroller!.scrollLeft = w;
    }
    measure();
    window.addEventListener("resize", measure);

    function wrap() {
      const w = setWidthRef.current;
      if (w <= 0) return;
      if (scroller!.scrollLeft > w * 1.5) scroller!.scrollLeft -= w;
      else if (scroller!.scrollLeft < w * 0.5) scroller!.scrollLeft += w;
    }

    let raf = 0;
    let last = performance.now();

    function tick(now: number) {
      const dt = now - last;
      last = now;
      if (!pausedRef.current && !draggingRef.current && !reduceMotion) {
        scroller!.scrollLeft += (SPEED_PX_PER_SEC * dt) / 1000;
        wrap();
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    function setPaused(v: boolean) {
      pausedRef.current = v;
    }

    function onPointerDown(e: PointerEvent) {
      draggingRef.current = true;
      dragMovedRef.current = false;
      pointerStartX.current = e.clientX;
      startScrollLeft.current = scroller!.scrollLeft;
      scroller!.setPointerCapture(e.pointerId);
      setPaused(true);
    }
    function onPointerMove(e: PointerEvent) {
      if (!draggingRef.current) return;
      const dx = e.clientX - pointerStartX.current;
      if (Math.abs(dx) > DRAG_THRESHOLD) dragMovedRef.current = true;
      scroller!.scrollLeft = startScrollLeft.current - dx;
      wrap();
    }
    function endDrag(e: PointerEvent) {
      draggingRef.current = false;
      try {
        scroller!.releasePointerCapture(e.pointerId);
      } catch {
        // pointer capture may already be released
      }
      if (e.pointerType === "touch") {
        setPaused(false);
        return;
      }
      // Mouse: stay paused only if the pointer is still actually over the
      // marquee — releasing a drag outside its bounds should resume autoplay
      // right away instead of waiting on a mouseleave that already fired.
      const rect = scroller!.getBoundingClientRect();
      const stillInside =
        e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
      if (!stillInside) setPaused(false);
    }
    function onClickCapture(e: MouseEvent) {
      if (dragMovedRef.current) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
    function onMouseEnter() {
      setPaused(true);
    }
    function onMouseLeave() {
      if (!draggingRef.current) setPaused(false);
    }

    scroller.addEventListener("pointerdown", onPointerDown);
    scroller.addEventListener("pointermove", onPointerMove);
    scroller.addEventListener("pointerup", endDrag);
    scroller.addEventListener("pointercancel", endDrag);
    scroller.addEventListener("click", onClickCapture, true);
    scroller.addEventListener("mouseenter", onMouseEnter);
    scroller.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      scroller.removeEventListener("pointerdown", onPointerDown);
      scroller.removeEventListener("pointermove", onPointerMove);
      scroller.removeEventListener("pointerup", endDrag);
      scroller.removeEventListener("pointercancel", endDrag);
      scroller.removeEventListener("click", onClickCapture, true);
      scroller.removeEventListener("mouseenter", onMouseEnter);
      scroller.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [reduceMotion]);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-secondary/40 to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-secondary/40 to-transparent sm:w-32" />

      <div
        ref={scrollerRef}
        className="flex cursor-grab gap-6 overflow-x-auto [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
        style={{ touchAction: "none" }}
      >
        {track.map((item, index) => {
          const content = (
            <img
              src={`${imageDir}/${item.slug}.webp`}
              alt={item.name}
              draggable={false}
              loading="lazy"
              className="max-h-16 max-w-[75%] select-none object-contain sm:max-h-20"
            />
          );

          return item.href ? (
            <a
              key={`${item.slug}-${index}`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              draggable={false}
              className="flex h-28 w-64 shrink-0 items-center justify-center rounded-xl border border-border bg-background px-6 transition-colors hover:border-primary"
            >
              {content}
            </a>
          ) : (
            <div
              key={`${item.slug}-${index}`}
              className="flex h-28 w-64 shrink-0 items-center justify-center rounded-xl border border-border bg-background px-6"
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
