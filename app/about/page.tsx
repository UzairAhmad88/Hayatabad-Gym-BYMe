import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { CTA } from "@/components/home/CTA";

export const metadata = {
  title: "About Us | HAYATABAD GYM Peshawar",
  description: "Learn about HAYATABAD GYM's training philosophy, mission, facilities, and fitness culture in Hayatabad, Peshawar."
};

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-[#080808] py-24">
        <Container>
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#B7FF00]">
              Our Mission & Heritage
            </p>
            <h1 className="mt-4 text-5xl font-black uppercase tracking-tight text-white sm:text-7xl">
              MORE THAN A GYM. A COMMUNITY OF STRENGTH.
            </h1>
            <p className="mt-6 text-lg text-[#A5A5A5] leading-relaxed">
              HAYATABAD GYM was built with a singular mission: to provide the people of Peshawar with a world-class athletic facility focused on heavy lifting, functional power, and authentic physical transformation.
            </p>
          </div>
        </Container>
      </section>

      {/* Story & Philosophy */}
      <section className="bg-[#121212] py-20 border-t border-white/10">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative h-[450px] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/images/hero/hero-bg.jpg"
                alt="HAYATABAD GYM power rack floor"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <SectionHeading
                eyebrow="Our Philosophy"
                title="BUILT ON DISCIPLINE."
                subtitle="We believe fitness should be grounded in progressive overload, movement mastery, and sustainable health."
              />
              <div className="space-y-4 text-sm text-[#A5A5A5] leading-relaxed">
                <p>
                  At HAYATABAD GYM, you won&apos;t find superficial gimmicks. We invest heavily in Olympic powerlifting racks, calibrated bumper plates, heavy dumbbells, and high-performance cardio equipment that delivers proven physical output.
                </p>
                <p>
                  Every member is treated with respect and supported by certified coaches who care deeply about safety, technique, and long-term health.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <Button href="/join" variant="primary" size="md">
                  JOIN OUR COMMUNITY →
                </Button>
                <Button href="/facilities" variant="outline" size="md">
                  EXPLORE FACILITIES
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="bg-[#080808] py-20 border-t border-white/10">
        <Container>
          <SectionHeading
            eyebrow="Our Values"
            title="THE HAYATABAD CODE."
            subtitle="The fundamental pillars guiding our coaching, environment, and member experience."
          />

          <div className="grid gap-6 sm:grid-cols-3 mt-10">
            <div className="rounded-3xl border border-white/10 bg-[#121212] p-8">
              <span className="text-3xl font-black text-[#B7FF00]">01</span>
              <h3 className="mt-4 text-xl font-black uppercase text-white">INTEGRITY & FORM</h3>
              <p className="mt-3 text-sm text-[#A5A5A5]">
                Correct technique precedes weight on the bar. Safety and mechanical efficiency come first in every program.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#121212] p-8">
              <span className="text-3xl font-black text-[#B7FF00]">02</span>
              <h3 className="mt-4 text-xl font-black uppercase text-white">RESPECT & COMMUNITY</h3>
              <p className="mt-3 text-sm text-[#A5A5A5]">
                A welcoming, high-energy environment free of ego, where beginners and elite lifters support each other.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#121212] p-8">
              <span className="text-3xl font-black text-[#B7FF00]">03</span>
              <h3 className="mt-4 text-xl font-black uppercase text-white">CONTINUOUS PROGRESS</h3>
              <p className="mt-3 text-sm text-[#A5A5A5]">
                Small, consistent improvements accumulate into extraordinary strength, energy, and physical transformation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
