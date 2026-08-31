import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { Programs } from "@/components/home/Programs";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FacilitiesPreview } from "@/components/home/FacilitiesPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";
import { LocationSection } from "@/components/home/LocationSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { trainersData } from "@/lib/data/trainers";
import { membershipPlans } from "@/lib/data/membership";
import { galleryItems } from "@/lib/data/gallery";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Statistics */}
      <Stats />

      {/* 3. About ("MORE THAN A GYM") */}
      <section className="bg-[#080808] py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.35em] text-[#B7FF00]">
                  More Than A Gym
                </p>
                <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-6xl lg:text-7xl">
                  DISCIPLINE. STRENGTH. COMMUNITY.
                </h2>
                <p className="mt-6 text-base text-[#A5A5A5] leading-relaxed sm:text-lg">
                  HAYATABAD GYM was founded to replace generic commercial fitness with a serious, results-driven athletic sanctuary. Whether you are deadlifting for personal records or starting your weight loss journey, our culture is built around dedication and mutual support.
                </p>
                <p className="mt-4 text-base text-[#A5A5A5] leading-relaxed">
                  Equipped with competition-grade power racks, specialized cardio units, and certified coaches, we provide the ultimate environment in Peshawar for real human progress.
                </p>
                <div className="mt-8">
                  <Button href="/about" variant="outline" size="md">
                    OUR PHILOSOPHY & STORY →
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
                <Image
                  src="/images/hero/hero-bg.jpg"
                  alt="Athletic training environment at HAYATABAD GYM"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#080808]/80 p-5 backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#B7FF00]">
                    The Hayatabad Standard
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Heavy lifting platforms, certified coaches, and dedicated ladies hours.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Programs */}
      <Programs />

      {/* 5. Why HAYATABAD GYM */}
      <WhyChooseUs />

      {/* 6. Facilities */}
      <FacilitiesPreview />

      {/* 7. Trainers */}
      <section className="bg-[#121212] py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between sm:flex-row sm:items-end mb-12">
            <SectionHeading
              eyebrow="Expert Coaching"
              title="MEET OUR MASTER TRAINERS."
              subtitle="Certified fitness professionals committed to guiding your form, programming, and mindset."
            />
            <Link
              href="/trainers"
              className="mb-12 inline-flex items-center text-sm font-black uppercase text-[#B7FF00] hover:underline"
            >
              VIEW ALL COACHES →
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {trainersData.map((trainer, idx) => (
              <ScrollReveal key={trainer.id} delay={idx * 0.1}>
                <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#1B1B1B] p-6 transition-all duration-300 hover:border-[#B7FF00]/50">
                  <div className="relative h-72 w-full overflow-hidden rounded-2xl">
                    <Image
                      src={trainer.image}
                      alt={trainer.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B7FF00]">
                      {trainer.specialization}
                    </span>
                    <h3 className="mt-1 text-2xl font-black uppercase text-white">
                      {trainer.name}
                    </h3>
                    <p className="mt-1 text-xs text-[#A5A5A5]">{trainer.role} • {trainer.experience}</p>
                    <p className="mt-3 text-sm text-[#A5A5A5] line-clamp-2">{trainer.bio}</p>
                    <div className="mt-6">
                      <Button href="/join?tab=trial" variant="outline" size="sm" className="w-full text-xs">
                        BOOK SESSION WITH COACH
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Membership */}
      <section className="bg-[#080808] py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Membership Plans"
            title="TRANSPARENT VALUE. NO HIDDEN FEES."
            subtitle="Choose the membership plan that matches your training frequency and coaching goals."
            align="center"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {membershipPlans.map((plan, idx) => (
              <ScrollReveal key={plan.id} delay={idx * 0.15}>
                <div
                  className={`relative flex h-full flex-col justify-between rounded-3xl p-8 border transition-all duration-300 ${
                    plan.popular
                      ? "border-[#B7FF00] bg-[#121212] shadow-[0_0_30px_rgba(183,255,0,0.15)]"
                      : "border-white/10 bg-[#121212]"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#B7FF00] px-4 py-1 text-xs font-black uppercase text-black">
                      MOST POPULAR
                    </span>
                  )}
                  <div>
                    <h3 className="text-xl font-black uppercase text-white">{plan.name}</h3>
                    <p className="mt-2 text-xs text-[#A5A5A5]">{plan.description}</p>
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-4xl font-black text-[#B7FF00]">{plan.price}</span>
                      <span className="text-xs text-[#A5A5A5]">{plan.period}</span>
                    </div>

                    <ul className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm text-[#A5A5A5]">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <span className="text-[#B7FF00] font-bold">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10">
                    <Button
                      href="/join"
                      variant={plan.popular ? "primary" : "outline"}
                      size="md"
                      className="w-full"
                    >
                      {plan.ctaText}
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. Gallery Preview */}
      <section className="bg-[#080808] py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between sm:flex-row sm:items-end mb-12">
            <SectionHeading
              eyebrow="Inside The Gym"
              title="ATMOSPHERE & ENERGY."
              subtitle="Take a look at our training floors, power racks, cardio deck, and active community."
            />
            <Link
              href="/gallery"
              className="mb-12 inline-flex items-center text-sm font-black uppercase text-[#B7FF00] hover:underline"
            >
              VIEW FULL GALLERY →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.slice(0, 6).map((item, idx) => (
              <ScrollReveal key={item.id} delay={idx * 0.08}>
                <div className="group relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-[#121212]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="rounded-full bg-[#B7FF00] px-2.5 py-0.5 text-[10px] font-black text-black">
                      {item.category}
                    </span>
                    <h4 className="mt-2 text-base font-bold text-white">{item.title}</h4>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CTA */}
      <CTA />

      {/* 12. Location / Map */}
      <LocationSection />
    </>
  );
}
