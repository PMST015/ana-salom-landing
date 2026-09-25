import { Reveal } from "@/components/reveal";
import { brand, companies } from "@/lib/site-content";

export function Companies() {
  const track = [...companies, ...companies];

  return (
    <section id="empresas" className="border-y border-border bg-secondary/20 py-14">
      <Reveal>
        <div className="mx-auto max-w-[1800px] px-6 text-center sm:px-12 lg:px-[100px]">
          <p className="font-heading text-xl text-foreground sm:text-2xl">
            {brand.trustStat}
          </p>
          <p className="mt-1 text-base text-muted-foreground">
            Empresas familiares con las que he trabajado
          </p>
        </div>
      </Reveal>

      <div className="group relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-secondary/40 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-secondary/40 to-transparent sm:w-32" />

        <div className="animate-marquee flex w-max gap-6 group-hover:[animation-play-state:paused]">
          {track.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex h-24 w-56 shrink-0 items-center justify-center rounded-xl border border-dashed border-border bg-background px-6 text-center"
            >
              <span className="text-sm text-muted-foreground">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
