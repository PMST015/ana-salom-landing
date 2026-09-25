import { Reveal } from "@/components/reveal";
import { audiences } from "@/lib/site-content";

export function Audiences() {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-[1800px] px-6 sm:px-12 lg:px-[100px]">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              A quién acompaño
            </p>
            <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Personas y empresas familiares
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl bg-background p-8">
              <h3 className="font-heading text-xl font-medium text-foreground">
                {audiences.b2c.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {audiences.b2c.description}
              </p>
              <ul className="mt-6 space-y-2.5">
                {audiences.b2c.segments.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl bg-foreground p-8 text-background">
              <h3 className="font-heading text-xl font-medium">{audiences.b2b.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-background/75">
                {audiences.b2b.description}
              </p>
              <ul className="mt-6 space-y-2.5">
                {audiences.b2b.segments.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-background/75">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
