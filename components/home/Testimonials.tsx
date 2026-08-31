import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const testimonials = [
  {
    name: "Usman Khan",
    role: "Powerlifting Member",
    goal: "Added 40kg to Deadlift",
    rating: 5,
    quote:
      "HAYATABAD GYM is in a league of its own in Peshawar. The power racks and coaching from Captain Ahmed completely fixed my squat form.",
    image: "/images/trainers/trainer-male.jpg"
  },
  {
    name: "Sana Mahmood",
    role: "Weight Loss Member",
    goal: "Lost 14kg in 5 Months",
    rating: 5,
    quote:
      "The dedicated ladies morning hours are incredible. Coach Zara's functional circuits kept me accountable and energized every week.",
    image: "/images/trainers/trainer-female.jpg"
  },
  {
    name: "Hamza Afridi",
    role: "Executive Member",
    goal: "Rebuilt Core & Posture",
    rating: 5,
    quote:
      "The atmosphere here drives performance. Super clean facility, top-notch heavy dumbbells, and a welcoming high-energy community.",
    image: "/images/trainers/trainer-male.jpg"
  }
];

export function Testimonials() {
  return (
    <section className="bg-[#101010] py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Member Stories"
          title="REAL PEOPLE. REAL STRENGTH."
          subtitle="Hear directly from members who transformed their performance, health, and mindset at HAYATABAD GYM."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <ScrollReveal key={item.name} delay={idx * 0.15}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-white/15 bg-[#181818] p-8 transition-all duration-300 hover:border-[#B7FF00]/60 hover:shadow-[0_10px_30px_rgba(183,255,0,0.15)]">
                <div>
                  <div className="flex items-center gap-1 text-[#B7FF00]">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                  <p className="mt-6 text-base font-medium italic text-white leading-relaxed">
                    &quot;{item.quote}&quot;
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4 border-t border-white/15 pt-6">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[#B7FF00] shadow-[0_0_15px_rgba(183,255,0,0.4)]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-base">{item.name}</h4>
                    <p className="text-xs font-bold text-[#B7FF00]">{item.goal}</p>
                    <p className="text-xs font-medium text-[#E5E7EB]">{item.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
