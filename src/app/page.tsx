import { About } from "@/components/about";
import { Allies } from "@/components/allies";
import { Audiences } from "@/components/audiences";
import { Companies } from "@/components/companies";
import { Cta } from "@/components/cta";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Specialties } from "@/components/specialties";
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Specialties />
        <Services />
        <Audiences />
        <Companies />
        <Allies />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
      <WhatsAppFloatButton />
    </>
  );
}
