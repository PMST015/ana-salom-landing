import Image from "next/image";
import { InstagramIcon, LinkedinIcon, WhatsAppIcon } from "@/components/icons";
import { brand, contact, whatsappHref } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1800px] px-6 py-12 sm:px-12 lg:px-[100px]">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="sm:w-[30%]">
            <Image
              src="/images/logo-negro.png"
              alt="Ana María Salom Reyes"
              width={600}
              height={263}
              className="h-auto w-52 sm:w-full"
            />
            <p className="mt-4 max-w-sm text-base text-muted-foreground">{brand.descriptor}</p>
            <p className="mt-3 text-base text-muted-foreground">{contact.city}</p>
          </div>

          <div className="flex gap-4">
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Ana María Salom Reyes"
              className="flex size-16 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <InstagramIcon className="size-7" />
            </a>
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Ana María Salom Reyes"
              className="flex size-16 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <LinkedinIcon className="size-7" />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escribir por WhatsApp"
              className="flex size-16 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <WhatsAppIcon className="size-7" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}. Todos los derechos reservados.</p>
          <p className="text-muted-foreground/70">
            Construido con Claude Web Builder por{" "}
            <a
              href="https://tododeia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              Tododeia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
