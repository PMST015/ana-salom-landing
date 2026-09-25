"use client";

import { useRef } from "react";
import { useReducedMotion } from "motion/react";

export function GradientBlobs() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.setProperty("--mx", `${x * 50}px`);
    ref.current.style.setProperty("--my", `${y * 50}px`);
  }

  function handleMouseLeave() {
    ref.current?.style.setProperty("--mx", "0px");
    ref.current?.style.setProperty("--my", "0px");
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{ ["--mx" as string]: "0px", ["--my" as string]: "0px" }}
    >
      {/* Parallax layer (mouse) wraps a separately-animated float layer */}
      <div
        className="absolute -left-[10%] -top-[20%] size-[60%]"
        style={{ transform: "translate(var(--mx), var(--my))", transition: "transform 0.5s ease-out" }}
      >
        <div
          className={`size-full rounded-full opacity-50 blur-3xl ${
            reduceMotion ? "" : "animate-[blob-a_18s_ease-in-out_infinite]"
          }`}
          style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
        />
      </div>

      <div
        className="absolute -bottom-[25%] right-[-5%] size-[55%]"
        style={{
          transform: "translate(calc(var(--mx) * -1), calc(var(--my) * -1))",
          transition: "transform 0.5s ease-out",
        }}
      >
        <div
          className={`size-full rounded-full opacity-40 blur-3xl ${
            reduceMotion ? "" : "animate-[blob-b_22s_ease-in-out_infinite]"
          }`}
          style={{ background: "radial-gradient(circle, #C7906A 0%, transparent 70%)" }}
        />
      </div>

      <div
        className="absolute left-[35%] top-[30%] size-[35%]"
        style={{ transform: "translate(var(--mx), var(--my))", transition: "transform 0.5s ease-out" }}
      >
        <div
          className={`size-full rounded-full opacity-30 blur-3xl ${
            reduceMotion ? "" : "animate-[blob-a_26s_ease-in-out_infinite_reverse]"
          }`}
          style={{ background: "radial-gradient(circle, var(--secondary) 0%, transparent 70%)" }}
        />
      </div>
    </div>
  );
}
