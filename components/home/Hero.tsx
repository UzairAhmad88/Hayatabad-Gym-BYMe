import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#060606] py-24 sm:py-32">
      {/* Dynamic Background Image & Atmospheric Radial Glow */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="HAYATABAD GYM high performance athletic power racks"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 filter contrast-125 brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/65 to-[#060606]/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(183,255,0,0.18),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="down" delay={0.1}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B7FF00]/50 bg-[#101010]/90 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(183,255,0,0.2)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#B7FF00] animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#B7FF00]">
              {siteConfig.location.area} • {siteConfig.location.city}
            </span>
          </div>
        </ScrollReveal>

        <div className="mt-8 max-w-5xl">
          <AnimatedText
            text="BUILD YOUR STRONGEST SELF."
            el="h1"
            className="text-5xl font-black uppercase leading-[0.88] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl drop-shadow-2xl"
          />
        </div>

        <ScrollReveal delay={0.25}>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-[#F3F4F6] sm:text-2xl drop-shadow">
            Train stronger. Move better. Live healthier. Experience Peshawar&apos;s premier athletic environment built around heavy compound lifting, functional power, and certified master coaches.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/join" variant="primary" size="lg">
              {siteConfig.cta.primary} →
            </Button>
            <Button href="/join?tab=trial" variant="outline" size="lg">
              {siteConfig.cta.secondary}
            </Button>
          </div>
        </ScrollReveal>

        {/* Feature Badges */}
        <ScrollReveal delay={0.45}>
          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-[#101010]/80 p-4 backdrop-blur-md">
              <p className="text-xs font-black uppercase tracking-wider text-[#B7FF00]">Equipment</p>
              <p className="mt-1 text-sm font-bold text-white">Power Racks & Bumper Plates</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#101010]/80 p-4 backdrop-blur-md">
              <p className="text-xs font-black uppercase tracking-wider text-[#B7FF00]">Ladies Hours</p>
              <p className="mt-1 text-sm font-bold text-white">10:00 AM – 01:00 PM</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#101010]/80 p-4 backdrop-blur-md">
              <p className="text-xs font-black uppercase tracking-wider text-[#B7FF00]">Coaching</p>
              <p className="mt-1 text-sm font-bold text-white">Certified Master Trainers</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#101010]/80 p-4 backdrop-blur-md">
              <p className="text-xs font-black uppercase tracking-wider text-[#B7FF00]">Community</p>
              <p className="mt-1 text-sm font-bold text-white">500+ Active Members</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
