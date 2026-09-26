import { Reveal } from "@/components/reveal";
import { allies } from "@/lib/site-content";

export function Allies() {
  const track = [...allies, ...allies];

  return (
    <section id="aliados" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-[1800px] px-6 sm:px-12 lg:px-[100px]">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Aliados
            </p>
            <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Proyectos sociales en los que participo
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Haz clic en cada logo para conocer el proyecto.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.08}>
        <div className="group relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-secondary/40 to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-secondary/40 to-transparent sm:w-32" />

          <div className="animate-marquee flex w-max gap-6 group-hover:[animation-play-state:paused]">
            {track.map((ally, index) => (
              <a
                key={`${ally.name}-${index}`}
                href={ally.href ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ally.name}
                className="flex h-24 w-56 shrink-0 items-center justify-center rounded-xl border border-dashed border-border bg-background px-6 text-center transition-colors hover:border-primary"
              >
                <span className="text-sm text-muted-foreground">{ally.name}</span>
              </a>
            ))}
          </div>
        </div>
        <p className="mx-auto mt-4 max-w-[1800px] px-6 text-xs text-muted-foreground sm:px-12 lg:px-[100px]">
          Espacio reservado para los logos reales — cada uno enlazará directamente a la página del
          proyecto aliado.
        </p>
      </Reveal>
    </section>
  );
}
