import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { programsData } from "@/lib/data/programs";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function Programs() {
  return (
    <section className="bg-[#060606] py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between sm:flex-row sm:items-end mb-12">
          <SectionHeading
            eyebrow="Training Programs"
            title="TRAIN WITH PURPOSE."
            subtitle="Explore our specialized programs engineered for raw strength, sustainable fat loss, athletic conditioning, and personal transformation."
          />
          <Link
            href="/programs"
            className="mb-12 inline-flex items-center text-sm font-black uppercase tracking-wider text-[#B7FF00] hover:underline gap-1 group"
          >
            <span>EXPLORE ALL PROGRAMS</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programsData.map((program, idx) => (
            <ScrollReveal key={program.slug} delay={idx * 0.1}>
              <Link
                href={`/programs/${program.slug}`}
                className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-[#101010] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#B7FF00] hover:shadow-[0_10px_35px_rgba(183,255,0,0.18)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-[#B7FF00] bg-[#B7FF00]/10 px-3 py-1 rounded-full border border-[#B7FF00]/30">
                      {program.number}
                    </span>
                    <span className="rounded-full bg-[#1A1A1A] px-3.5 py-1 text-xs font-bold text-white border border-white/10">
                      {program.intensity} Intensity
                    </span>
                  </div>

                  <div className="relative mt-6 h-52 w-full overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent opacity-80" />
                  </div>

                  <h3 className="mt-6 text-2xl font-black uppercase text-white group-hover:text-[#B7FF00] transition-colors">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#E5E7EB] line-clamp-2">
                    {program.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6 font-black text-sm uppercase tracking-wider text-white group-hover:text-[#B7FF00] transition-colors">
                  <span>Explore Program</span>
                  <span className="transition-transform group-hover:translate-x-2 text-[#B7FF00]">→</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
