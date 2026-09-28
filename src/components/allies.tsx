import { Reveal } from "@/components/reveal";
import { LogoMarquee } from "@/components/logo-marquee";
import { allies } from "@/lib/site-content";

export function Allies() {
  return (
    <section id="aliados" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-[1800px] px-6 sm:px-12 lg:px-[100px]">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Aliados y Proyectos
            </p>
            <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Redes aliadas y proyectos sociales
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Organizaciones y redes con las que colaboro, y proyectos sociales en los que
              participo activamente. Haz clic en cada logo para conocer más.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.08}>
        <div className="mt-10">
          <LogoMarquee items={allies} imageDir="/images/allies" />
        </div>
      </Reveal>
    </section>
  );
}
