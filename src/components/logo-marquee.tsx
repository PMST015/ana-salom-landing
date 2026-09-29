"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import type { LogoItem } from "@/lib/site-content";

const SPEED_PX_PER_SEC = 34;
const DRAG_THRESHOLD = 4;
// Bump this when regenerating logo images so browsers/CDNs that cached the
// old bytes at the same filename fetch the new ones instead of stale ones.
const ASSET_VERSION = "4";

export function LogoMarquee({
  items,
  imageDir,
  imageScale = 1,
}: {
  items: LogoItem[];
  imageDir: string;
  imageScale?: number;
}) {
  const reduceMotion = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragMovedRef = useRef(false);
  const pointerStartX = useRef(0);
  const startPos = useRef(0);
  const setWidthRef = useRef(0);
  // Our own floating-point scroll position. `Element.scrollLeft` rounds to
  // an integer pixel on read, so accumulating a sub-1px-per-frame speed by
  // reading it back each tick would round the fractional part away every
  // time and the track would never actually move — this ref is the source
  // of truth instead, and scrollLeft is only ever written from it.
  const posRef = useRef(0);

  const track = [...items, ...items, ...items];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    function wrap(pos: number) {
      const w = setWidthRef.current;
      if (w <= 0) return pos;
      if (pos > w * 1.5) return pos - w;
      if (pos < w * 0.5) return pos + w;
      return pos;
    }

    function setPos(pos: number) {
      posRef.current = wrap(pos);
      scroller!.scrollLeft = posRef.current;
    }

    function measure() {
      setWidthRef.current = scroller!.scrollWidth / 3;
      setPos(setWidthRef.current);
    }
    measure();
    window.addEventListener("resize", measure);

    let raf = 0;
    let last = performance.now();
    // Reduced-motion users still get the marquee (it's already user-pausable
    // via hover/touch, satisfying WCAG 2.2.2 Pause/Stop/Hide) but slower —
    // "gentler, not zero".
    const speed = reduceMotion ? SPEED_PX_PER_SEC * 0.4 : SPEED_PX_PER_SEC;

    function tick(now: number) {
      const dt = now - last;
      last = now;
      if (!pausedRef.current && !draggingRef.current) {
        setPos(posRef.current + (speed * dt) / 1000);
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
      startPos.current = posRef.current;
      setPaused(true);
      // Deliberately NOT calling setPointerCapture here. Capturing on every
      // pointerdown -- even a plain click with zero movement -- makes the
      // browser target the resulting "click" event at the capturing element
      // (this scroller) instead of whatever was actually under the pointer,
      // so a click on a logo's <a> never reaches the anchor and never
      // navigates. Capture is acquired lazily below, only once real drag
      // movement is confirmed.
    }
    function onPointerMove(e: PointerEvent) {
      if (!draggingRef.current) return;
      const dx = e.clientX - pointerStartX.current;
      if (Math.abs(dx) > DRAG_THRESHOLD && !dragMovedRef.current) {
        dragMovedRef.current = true;
        scroller!.setPointerCapture(e.pointerId);
      }
      setPos(startPos.current - dx);
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
        className="flex cursor-grab gap-4 overflow-x-auto [scrollbar-width:none] active:cursor-grabbing sm:gap-6 [&::-webkit-scrollbar]:hidden"
        style={{ touchAction: "none" }}
      >
        {track.map((item, index) => {
          const scale = (item.scale ?? 1) * imageScale;
          const content = (
            <img
              src={`${imageDir}/${item.slug}.webp?v=${ASSET_VERSION}`}
              alt={item.name}
              draggable={false}
              loading="lazy"
              className="h-full w-full select-none object-contain p-5 sm:p-6"
              style={scale !== 1 ? { transform: `scale(${scale})` } : undefined}
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
              className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl border border-border bg-background transition-colors hover:border-primary sm:h-28 sm:w-64"
            >
              {content}
            </a>
          ) : (
            <div
              key={`${item.slug}-${index}`}
              className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl border border-border bg-background sm:h-28 sm:w-64"
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
