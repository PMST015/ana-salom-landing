import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { GA_MEASUREMENT_ID, SITE_URL, brand, contact, faqs } from "@/lib/site-content";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const title =
  "Ana María Salom Reyes — Psicoterapia Integral y Acompañamiento a Empresas Familiares en Bogotá";
const description =
  "Psicóloga, psicoterapeuta integral y coach de propósito con +35 años de experiencia. Acompañamiento terapéutico individual y consultoría para empresas familiares: sanación, cuidado de cuidadores, terapia familiar y propósito de vida, en Bogotá y online.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s · Ana María Salom Reyes",
  },
  description,
  keywords: [
    "psicóloga Bogotá",
    "psicoterapia integral",
    "terapia familiar Bogotá",
    "acompañamiento empresas familiares",
    "cuidado de cuidadores",
    "coach de propósito",
    "trabajo biográfico",
    "terapia de duelo Bogotá",
    "consultoría empresas familiares Colombia",
  ],
  authors: [{ name: brand.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: brand.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: brand.name,
      description,
      url: SITE_URL,
      telephone: `+${contact.whatsappNumber}`,
      priceRange: "$$",
      areaServed: [
        { "@type": "City", name: "Bogotá" },
        { "@type": "Country", name: "Colombia" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bogotá",
        addressCountry: "CO",
      },
      sameAs: [contact.instagramUrl, contact.linkedinUrl],
      founder: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: brand.name,
      jobTitle: brand.descriptor,
      description: brand.heroLead,
      url: SITE_URL,
      nationality: ["Colombia", "Líbano"],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Universidad de los Andes",
      },
      sameAs: [contact.instagramUrl, contact.linkedinUrl],
      knowsAbout: [
        "Psicoterapia integral",
        "Terapia familiar",
        "Cuidado de cuidadores",
        "Trabajo biográfico",
        "Coaching de propósito",
        "Transformación organizacional",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
