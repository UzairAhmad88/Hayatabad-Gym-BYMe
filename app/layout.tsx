import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { IntroSplash } from "@/components/ui/IntroSplash";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Premium Fitness & Training in Peshawar`,
  description: siteConfig.description,
  keywords: [
    "Gym in Hayatabad",
    "Gym in Peshawar",
    "Fitness center Hayatabad",
    "Personal trainer Hayatabad",
    "Strength training Peshawar",
    "Powerlifting Peshawar",
    "Bodybuilding Hayatabad"
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} | BUILD YOUR STRONGEST SELF.`,
    description: siteConfig.description,
    url: "https://hayatabadgym.pk",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className="min-h-screen bg-[#060606] font-sans text-white antialiased selection:bg-[#B7FF00] selection:text-black">
        <IntroSplash />
        <Navbar />
        <main className="pt-16 sm:pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
