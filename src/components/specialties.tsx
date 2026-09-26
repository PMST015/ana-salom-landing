"use client";

import { useState } from "react";
import { RotateCw } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { specialties } from "@/lib/site-content";

function FlipCard({
  pillar,
  slug,
  items,
}: {
  pillar: string;
  slug: string;
  items: string[];
}) {
  const [flipped, setFlipped] = useState(false);

  const canHover = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  return (
    <div
      className="h-[26rem] w-full [perspective:1500px] sm:h-[30rem]"
      onMouseEnter={() => canHover() && setFlipped(true)}
      onMouseLeave={() => canHover() && setFlipped(false)}
    >
      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        aria-label={`Ver especialidades de ${pillar}`}
        aria-pressed={flipped}
        className="relative h-full w-full cursor-pointer text-left transition-transform duration-700 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl bg-black [backface-visibility:hidden]"
        >
          <img
            src={`/images/specialties/${slug}-800.webp`}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 size-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
          <div className="relative flex h-full flex-col justify-end p-6">
            <h3 className="font-heading text-2xl font-medium text-white sm:text-3xl">
              {pillar}
            </h3>
          </div>
          <span className="absolute bottom-4 right-4 flex size-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
            <RotateCw className="size-4" />
          </span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col justify-center overflow-hidden rounded-2xl bg-foreground p-5 text-center [backface-visibility:hidden] sm:p-6 lg:justify-start lg:text-left"
          style={{ transform: "rotateY(180deg)" }}
        >
          <h3 className="font-heading text-xl font-medium text-background/70 lg:text-base">
            {pillar}
          </h3>
          <ul className="mt-3 flex flex-col items-center gap-2 lg:items-stretch">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center justify-center gap-2 text-lg leading-snug text-background lg:justify-start lg:text-sm"
              >
                <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </button>
    </div>
  );
}

export function Specialties() {
  return (
    <section id="especialidades" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-[1800px] px-6 sm:px-12 lg:px-[100px]">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-base font-medium uppercase tracking-[0.18em] text-primary">
              Especialidades
            </p>
            <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Cuatro territorios, una misma transformación
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((group, index) => (
            <Reveal key={group.pillar} delay={index * 0.06}>
              <FlipCard pillar={group.pillar} slug={group.slug} items={group.items} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
