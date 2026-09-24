import { Reveal } from "@/components/reveal";
import { companies } from "@/lib/site-content";

export function Companies() {
  return (
    <section id="empresas" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Empresas familiares
          </p>
          <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Empresas con las que he trabajado
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex aspect-[3/2] items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 px-4 text-center"
            >
              <span className="text-xs text-muted-foreground">{company.name}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Espacio reservado para los logos reales — se reemplazan al recibir el material de cada
          empresa.
        </p>
      </Reveal>
    </section>
  );
}
