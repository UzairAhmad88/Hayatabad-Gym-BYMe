import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { facilitiesData } from "@/lib/data/facilities";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function FacilitiesPreview() {
  const previewItems = facilitiesData.slice(0, 3);

  return (
    <section className="bg-[#080808] py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between sm:flex-row sm:items-end mb-12">
          <SectionHeading
            eyebrow="Facilities & Equipment"
            title="PREMIUM ATHLETIC INFRASTRUCTURE."
            subtitle="Designed for maximum training performance, clean atmosphere, and safety."
          />
          <Link
            href="/facilities"
            className="mb-12 inline-flex items-center text-sm font-black uppercase text-[#B7FF00] hover:underline"
          >
            VIEW ALL FACILITIES →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {previewItems.map((facility, idx) => (
            <ScrollReveal key={facility.id} delay={idx * 0.1}>
              <Link
                href="/facilities"
                className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-[#121212] transition-all duration-300 hover:border-[#B7FF00]/50"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-[#B7FF00] px-3 py-1 text-xs font-black text-black">
                    {facility.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black uppercase text-white group-hover:text-[#B7FF00]">
                    {facility.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#A5A5A5] line-clamp-2">
                    {facility.description}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
