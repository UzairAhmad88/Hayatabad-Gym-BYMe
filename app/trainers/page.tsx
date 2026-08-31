import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { trainersData } from "@/lib/data/trainers";
import { CTA } from "@/components/home/CTA";

export const metadata = {
  title: "Certified Trainers & Coaches | HAYATABAD GYM Peshawar",
  description: "Meet the elite, certified personal trainers and coaches at HAYATABAD GYM in Hayatabad, Peshawar."
};

export default function TrainersPage() {
  return (
    <>
      <section className="bg-[#080808] py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#B7FF00]">
              Certified Athletic Coaches
            </p>
            <h1 className="mt-4 text-5xl font-black uppercase tracking-tight text-white sm:text-7xl">
              GUIDED BY THE BEST IN PESHAWAR.
            </h1>
            <p className="mt-6 text-lg text-[#A5A5A5] leading-relaxed">
              Our trainers hold internationally recognized certifications and years of practical coaching experience. From strength powerlifting to ladies-only conditioning, you are in safe, experienced hands.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#121212] py-20 border-t border-white/10">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            {trainersData.map((trainer) => (
              <div
                key={trainer.id}
                className="flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#1B1B1B] p-8 transition-all duration-300 hover:border-[#B7FF00]/50"
              >
                <div>
                  <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src={trainer.image}
                      alt={trainer.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="mt-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B7FF00]">
                      {trainer.specialization}
                    </span>
                    <h2 className="mt-1 text-2xl font-black uppercase text-white">
                      {trainer.name}
                    </h2>
                    <p className="text-xs text-[#A5A5A5] font-semibold">{trainer.role} • {trainer.experience}</p>
                    <p className="mt-4 text-sm text-[#A5A5A5] leading-relaxed">{trainer.bio}</p>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#B7FF00]">
                      Certifications
                    </p>
                    <ul className="mt-2 space-y-1 text-xs text-[#A5A5A5]">
                      {trainer.certifications.map((cert, i) => (
                        <li key={i}>✓ {cert}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Button href="/join?tab=trial" variant="primary" size="sm" className="w-full">
                    BOOK SESSION WITH COACH →
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
