import { Reveal } from "@/components/reveal";
import { services } from "@/lib/site-content";

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Servicios
          </p>
          <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Cinco formas de acompañar una misma transformación
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Mi historia → mi sanación → mi cuidado → mis vínculos → mi propósito. Cada servicio
            responde a un momento distinto de ese recorrido.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 divide-y divide-border border-t border-border">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={Math.min(index * 0.05, 0.2)}>
            <article
              id={service.slug}
              className="grid gap-4 py-10 lg:grid-cols-[0.8fr_2.2fr] lg:gap-10"
            >
              <div>
                <span className="font-heading text-sm text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-heading text-2xl font-medium tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.summary}</p>
              </div>
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <p className="text-sm leading-relaxed text-foreground/80">
                  <span className="font-medium text-foreground">Ideal para: </span>
                  {service.idealFor}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
