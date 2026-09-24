import { Reveal } from "@/components/reveal";
import { allies } from "@/lib/site-content";

export function Allies() {
  return (
    <section id="aliados" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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

        <Reveal delay={0.08}>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {allies.map((ally) => (
              <a
                key={ally.name}
                href={ally.href ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ally.name}
                className="flex aspect-[3/2] items-center justify-center rounded-xl border border-dashed border-border bg-background px-4 text-center transition-colors hover:border-primary"
              >
                <span className="text-xs text-muted-foreground">{ally.name}</span>
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Espacio reservado para los logos reales — cada uno enlazará directamente a la página
            del proyecto aliado.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
