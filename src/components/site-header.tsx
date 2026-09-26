"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WhatsAppIcon } from "@/components/icons";
import { nav, whatsappHref } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-[100px]">
      <header className="mx-auto flex h-20 max-w-[1700px] items-center justify-between rounded-full border border-white/40 bg-background/75 px-4 shadow-lg shadow-black/5 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 sm:px-6">
        <Link
          href="#top"
          aria-label="Ana María Salom Reyes — inicio"
          className="ml-[30px] shrink-0"
        >
          <Image
            src="/images/logo-negro.webp"
            alt="Ana María Salom Reyes"
            width={600}
            height={263}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-full bg-primary px-5 text-base text-primary-foreground transition-transform duration-200 hover:scale-[1.03] hover:bg-primary/90 active:scale-[0.97]"
          >
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-4" />
              Escríbeme por WhatsApp
            </a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full md:hidden"
              aria-label="Abrir menú de navegación"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <SheetHeader>
              <SheetTitle className="font-heading">Ana María Salom Reyes</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {nav.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-md px-2 py-3 text-base text-foreground transition-colors hover:bg-muted"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-2 px-4">
              <Button
                asChild
                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-4" />
                  Escríbeme por WhatsApp
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}
