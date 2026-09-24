import { Reveal } from "@/components/reveal";
import { bio, brand } from "@/lib/site-content";

export function About() {
  return (
    <section id="sobre-ana" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Sobre mí
            </p>
            <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              {brand.name}
            </h2>
            <p className="mt-3 text-base text-muted-foreground">{brand.descriptor}</p>
            <blockquote className="mt-8 border-l-2 border-primary pl-5 font-heading text-xl italic text-foreground">
              &ldquo;{brand.signature}&rdquo;
            </blockquote>
          </div>
        </Reveal>

        <div className="space-y-10">
          <Reveal delay={0.05}>
            <div className="space-y-5">
              {bio.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h3 className="font-heading text-lg font-medium text-foreground">
                Formación y credenciales
              </h3>
              <ul className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {bio.credentials.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
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
