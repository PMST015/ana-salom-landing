"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappHref } from "@/lib/site-content";

export function Cta() {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <section className="mx-auto max-w-[1800px] px-6 pb-20 sm:px-12 lg:px-[100px]">
      <Reveal>
        <div
          ref={ref}
          onMouseMove={handleMouseMove}
          className="group relative overflow-hidden rounded-3xl bg-foreground px-8 py-14 text-center text-background sm:px-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), color-mix(in oklab, var(--primary) 55%, transparent), transparent 70%)",
            }}
          />
          <div className="relative transition-transform duration-500 ease-out group-hover:scale-105">
            <h2 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl">
              ¿Qué vida puedo contribuir a regenerar?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-background/75">
              Empecemos con una conversación breve para entender qué estás viviendo, qué necesitas
              y qué deseas transformar — como persona o como empresa familiar.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary px-7 text-base text-primary-foreground transition-transform duration-200 hover:scale-[1.03] hover:bg-primary/90 active:scale-[0.97]"
              >
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-4" />
                  Escríbeme por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
