import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { programsData } from "@/lib/data/programs";
import { trainersData } from "@/lib/data/trainers";
import { CTA } from "@/components/home/CTA";

export async function generateStaticParams() {
  return programsData.map((p) => ({
    slug: p.slug
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProgramDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const program = programsData.find((p) => p.slug === resolvedParams.slug);

  if (!program) {
    notFound();
  }

  const assignedTrainer = trainersData.find((t) =>
    t.programs.includes(program.title)
  ) || trainersData[0];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#080808] py-24 border-b border-white/10">
        <Container>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A5A5A5] mb-6">
            <Link href="/programs" className="hover:text-white">Programs</Link>
            <span>/</span>
            <span className="text-[#B7FF00]">{program.title}</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-black text-[#B7FF00]">{program.number}</span>
              <h1 className="mt-2 text-4xl font-black uppercase text-white sm:text-6xl lg:text-7xl">
                {program.title}
              </h1>
              <p className="mt-4 text-xl font-bold text-[#B7FF00]">{program.subtitle}</p>
              <p className="mt-6 text-base text-[#A5A5A5] leading-relaxed">
                {program.fullDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/join" variant="primary" size="md">
                  ENROLL IN THIS PROGRAM →
                </Button>
                <Button href="/join?tab=trial" variant="outline" size="md">
                  BOOK FREE TRIAL PASS
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Program Details Overview & Benefits */}
      <section className="bg-[#121212] py-20 border-b border-white/10">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Key Benefits */}
            <div className="rounded-3xl border border-white/10 bg-[#1B1B1B] p-8">
              <h3 className="text-2xl font-black uppercase text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {program.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#A5A5A5]">
                    <span className="text-[#B7FF00] font-bold">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Training Methods */}
            <div className="rounded-3xl border border-white/10 bg-[#1B1B1B] p-8">
              <h3 className="text-2xl font-black uppercase text-white mb-6">Training Method</h3>
              <ul className="space-y-4">
                {program.method.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#A5A5A5]">
                    <span className="text-[#B7FF00] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Who It's For */}
          <div className="mt-12 rounded-3xl border border-[#B7FF00]/30 bg-[#1B1B1B] p-8">
            <h3 className="text-xl font-black uppercase text-white">Who This Program Is For</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {program.whoItIsFor.map((target, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-[#121212] p-5">
                  <span className="text-xs font-bold text-[#B7FF00]">0{idx + 1}</span>
                  <p className="mt-2 text-sm font-semibold text-white">{target}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Trainer & Schedule */}
      <section className="bg-[#080808] py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Lead Coach"
                title="GUIDED BY EXPERTS."
                subtitle="This program is supervised by certified coaches who focus on form accuracy and safety."
              />
              <div className="flex items-center gap-6 rounded-3xl border border-white/10 bg-[#121212] p-6">
                <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-[#B7FF00]">
                  <Image
                    src={assignedTrainer.image}
                    alt={assignedTrainer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-black text-white">{assignedTrainer.name}</h4>
                  <p className="text-xs font-bold text-[#B7FF00]">{assignedTrainer.role}</p>
                  <p className="mt-1 text-xs text-[#A5A5A5]">{assignedTrainer.specialization}</p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Session Timing"
                title="SCHEDULE & TIMETABLE."
                subtitle="Flexible weekly training sessions accommodating work and student schedules."
              />
              <div className="rounded-3xl border border-white/10 bg-[#121212] p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-[#B7FF00]">
                  Regular Class Times
                </p>
                <p className="mt-2 text-2xl font-black text-white">{program.schedulePreview}</p>
                <p className="mt-4 text-xs text-[#A5A5A5]">
                  Intensity Level: <strong className="text-white">{program.intensity}</strong> • Session Duration: <strong className="text-white">{program.duration}</strong>
                </p>
                <div className="mt-6">
                  <Button href="/schedule" variant="outline" size="sm" className="w-full">
                    VIEW FULL WEEKLY SCHEDULE →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
