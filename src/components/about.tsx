import { GradientBlobs } from "@/components/gradient-blobs";
import { Reveal } from "@/components/reveal";
import { bio, brand } from "@/lib/site-content";

export function About() {
  return (
    <section id="sobre-ana" className="relative overflow-hidden py-20">
      <GradientBlobs />
      <div className="relative mx-auto grid max-w-[1800px] gap-12 px-6 sm:px-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-[100px]">
        <Reveal>
          <div>
            <p className="text-base font-medium uppercase tracking-[0.18em] text-primary">
              Sobre mí
            </p>
            <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              {brand.name}
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">{brand.descriptor}</p>

            <div className="relative mt-8 mx-auto w-full max-w-[300px] overflow-hidden rounded-[1.75rem] bg-secondary sm:max-w-[340px]">
              <img
                src="/images/ana-about.webp"
                alt={brand.name}
                loading="lazy"
                className="w-full object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-5 pb-5 pt-14">
                <blockquote className="font-heading text-lg italic leading-snug text-white">
                  &ldquo;{brand.signature}&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="space-y-10">
          <Reveal delay={0.05}>
            <div className="space-y-5">
              {bio.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-lg leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h3 className="font-heading text-xl font-medium text-foreground">
                Formación y credenciales
              </h3>
              <ul className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {bio.credentials.map((item) => (
                  <li key={item} className="flex gap-2.5 text-base text-muted-foreground">
                    <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
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
