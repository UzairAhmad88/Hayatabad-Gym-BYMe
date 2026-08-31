import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { programsData } from "@/lib/data/programs";
import { CTA } from "@/components/home/CTA";

export const metadata = {
  title: "Training Programs | HAYATABAD GYM Peshawar",
  description: "Explore strength training, weight loss, functional fitness, personal training, and muscle hypertrophy programs at HAYATABAD GYM."
};

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-[#080808] py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#B7FF00]">
              Custom Training Paths
            </p>
            <h1 className="mt-4 text-5xl font-black uppercase tracking-tight text-white sm:text-7xl">
              TRAINING PROGRAMS DESIGNED FOR RESULTS.
            </h1>
            <p className="mt-6 text-lg text-[#A5A5A5] leading-relaxed">
              Every body is unique. Whether your goal is absolute raw strength, athletic conditioning, fat reduction, or physique symmetry, our specialized programs provide structured instruction.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#121212] py-20 border-t border-white/10">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programsData.map((program) => (
              <div
                key={program.slug}
                className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#1B1B1B] p-8 transition-all duration-300 hover:border-[#B7FF00]/50"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-[#B7FF00]">{program.number}</span>
                    <span className="rounded-full bg-[#121212] px-3 py-1 text-xs font-bold text-[#A5A5A5]">
                      {program.duration}
                    </span>
                  </div>

                  <div className="relative mt-6 h-52 w-full overflow-hidden rounded-2xl">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h2 className="mt-6 text-2xl font-black uppercase text-white group-hover:text-[#B7FF00]">
                    {program.title}
                  </h2>
                  <p className="mt-1 text-xs font-semibold text-[#B7FF00]">{program.subtitle}</p>
                  <p className="mt-3 text-sm text-[#A5A5A5]">{program.description}</p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Button href={`/programs/${program.slug}`} variant="outline" size="sm" className="w-full">
                    PROGRAM DETAILS & SCHEDULE →
                  </Button>
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
