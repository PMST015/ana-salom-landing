import { Reveal } from "@/components/reveal";
import { specialties } from "@/lib/site-content";

export function Specialties() {
  return (
    <section id="especialidades" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
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
              <div className="h-full rounded-2xl border border-border bg-background p-6">
                <h3 className="font-heading text-lg font-medium text-foreground">
                  {group.pillar}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
