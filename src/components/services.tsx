import { Reveal } from "@/components/reveal";
import { services } from "@/lib/site-content";

const WIDTHS = [480, 800, 1200, 1600];

function srcSetFor(slug: string) {
  return WIDTHS.map((w) => `/images/services/${slug}-${w}.webp ${w}w`).join(", ");
}

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Servicios
          </p>
          <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Cinco formas de acompañar tu transformación
          </h2>
        </div>
      </Reveal>

      <div className="mt-14 space-y-16 sm:space-y-24">
        {services.map((service, index) => {
          const reversed = index % 2 === 1;
          return (
            <Reveal key={service.slug} delay={Math.min(index * 0.05, 0.15)}>
              <article
                id={service.slug}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-secondary shadow-lg shadow-primary/10">
                  <img
                    src={`/images/services/${service.slug}-800.webp`}
                    srcSet={srcSetFor(service.slug)}
                    sizes="(min-width: 1024px) 42vw, 90vw"
                    alt={service.alt}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={1000}
                    className="size-full object-cover"
                  />
                </div>

                <div>
                  <span className="font-heading text-sm text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xl leading-snug text-muted-foreground sm:text-2xl">
                    {service.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
