import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { facilitiesData } from "@/lib/data/facilities";
import { CTA } from "@/components/home/CTA";

export const metadata = {
  title: "Facilities & Equipment | HAYATABAD GYM Peshawar",
  description: "Explore the state-of-the-art power racks, cardio deck, functional turf track, and amenities at HAYATABAD GYM."
};

export default function FacilitiesPage() {
  return (
    <>
      <section className="bg-[#060606] py-24">
        <Container>
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#B7FF00]/40 bg-[#B7FF00]/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#B7FF00] animate-pulse" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#B7FF00]">
                State-of-the-Art Infrastructure
              </span>
            </div>
            <h1 className="mt-2 text-5xl font-black uppercase tracking-tight text-white sm:text-7xl leading-[0.92]">
              BUILT FOR HEAVY TRAINING.
            </h1>
            <p className="mt-6 text-xl font-medium text-[#E5E7EB] leading-relaxed">
              From Olympic bumper plates to high-end cable stations and executive locker amenities, explore the physical environment engineered to fuel your gains.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#101010] py-20 border-t border-white/10">
        <Container>
          <div className="space-y-20">
            {facilitiesData.map((facility, idx) => (
              <div
                key={facility.id}
                className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
                  idx % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                  <span className="rounded-full bg-[#B7FF00] px-3.5 py-1 text-xs font-black text-black">
                    {facility.category}
                  </span>
                  <h2 className="mt-4 text-3xl font-black uppercase text-white sm:text-5xl leading-[0.95]">
                    {facility.title}
                  </h2>
                  <p className="mt-5 text-base font-medium text-[#E5E7EB] leading-relaxed sm:text-lg">
                    {facility.description}
                  </p>

                  <ul className="mt-6 space-y-3 text-sm text-[#E5E7EB]">
                    {facility.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="text-[#B7FF00] font-black text-base">✓</span>
                        <span className="text-white font-bold">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`relative h-[400px] overflow-hidden rounded-3xl border border-white/15 shadow-2xl ${
                    idx % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
