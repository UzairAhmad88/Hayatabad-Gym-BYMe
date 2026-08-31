import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const features = [
  {
    number: "01",
    title: "WORLD-CLASS EQUIPMENT",
    description:
      "Olympic power racks, calibrated steel plates, high-end cable towers, and specialized bumper plates engineered for raw physical output."
  },
  {
    number: "02",
    title: "CERTIFIED MASTER COACHES",
    description:
      "Train with certified coaches dedicated to form correction, injury prevention, and continuous progressive overload principles."
  },
  {
    number: "03",
    title: "DEDICATED LADIES HOURS",
    description:
      "Separate morning hours (10:00 AM – 01:00 PM) staffed by female coaches in a comfortable, empowering atmosphere."
  },
  {
    number: "04",
    title: "HIGH-ENERGY COMMUNITY",
    description:
      "Join Hayatabad's most supportive fitness community where lifters push each other toward peak performance every single day."
  }
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#060606] py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why HAYATABAD GYM"
          title="BUILT FOR SERIOUS RESULTS."
          subtitle="We don't offer generic workouts. We provide the infrastructure, coaching, and atmosphere required to build your strongest self."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <ScrollReveal key={feature.title} delay={idx * 0.1}>
              <div className="group h-full rounded-3xl border border-white/15 bg-[#101010] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#B7FF00] hover:shadow-[0_10px_35px_rgba(183,255,0,0.15)]">
                <span className="text-sm font-black text-[#B7FF00] bg-[#B7FF00]/10 px-3 py-1 rounded-full border border-[#B7FF00]/30">
                  {feature.number}
                </span>
                <h3 className="mt-6 text-xl font-black uppercase text-white group-hover:text-[#B7FF00] transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-[#E5E7EB]">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
