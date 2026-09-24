import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappHref } from "@/lib/site-content";

export function Cta() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="rounded-3xl bg-foreground px-8 py-14 text-center text-background sm:px-16">
          <h2 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            ¿Qué vida puedo contribuir a regenerar?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-background/75">
            Empecemos con una conversación breve para entender qué estás viviendo, qué necesitas
            y qué deseas transformar — como persona o como empresa familiar.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary px-7 text-base text-primary-foreground transition-transform duration-200 hover:scale-[1.03] hover:bg-primary/90 active:scale-[0.97]"
            >
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-4" />
                Escríbeme por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
