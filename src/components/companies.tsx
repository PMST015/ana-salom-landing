import { Reveal } from "@/components/reveal";
import { LogoMarquee } from "@/components/logo-marquee";
import { brand, companies } from "@/lib/site-content";

export function Companies() {
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

      <div className="mt-8">
        <LogoMarquee items={companies} imageDir="/images/companies" />
      </div>
    </section>
  );
}
