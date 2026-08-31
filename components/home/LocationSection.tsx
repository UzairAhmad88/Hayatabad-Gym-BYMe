import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function LocationSection() {
  return (
    <section className="border-t border-white/10 bg-[#060606] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#B7FF00]/40 bg-[#B7FF00]/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#B7FF00] animate-pulse" />
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#B7FF00]">
                Find Us In Hayatabad
              </span>
            </div>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight text-white sm:text-6xl leading-[0.92]">
              CONVENIENT LOCATION. EASY ACCESS.
            </h2>
            <p className="mt-5 text-base font-medium leading-relaxed text-[#F3F4F6] sm:text-lg">
              Located on Jamrud Road in Hayatabad, Peshawar. Convenient parking, spacious multi-zone layout, and accessible operating hours tailored for your busy routine.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/15 bg-[#101010] p-6 transition hover:border-[#B7FF00]/50">
                <h3 className="font-black text-[#B7FF00] uppercase text-xs tracking-wider">
                  Address
                </h3>
                <p className="mt-2 text-base font-bold text-white">
                  {siteConfig.location.address}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-[#101010] p-6 transition hover:border-[#B7FF00]/50">
                  <h3 className="font-black text-[#B7FF00] uppercase text-xs tracking-wider">
                    Operating Hours
                  </h3>
                  <p className="mt-2 text-sm font-bold text-white">Mon-Sat: {siteConfig.hours.monSat}</p>
                  <p className="text-sm font-bold text-white">Sun: {siteConfig.hours.sunday}</p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-[#101010] p-6 transition hover:border-[#B7FF00]/50">
                  <h3 className="font-black text-[#B7FF00] uppercase text-xs tracking-wider">
                    Ladies Dedicated Hours
                  </h3>
                  <p className="mt-2 text-sm font-bold text-white">{siteConfig.hours.ladiesTime}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href={siteConfig.location.googleMapsUrl}
                variant="primary"
                size="md"
              >
                GET DIRECTIONS ON MAPS →
              </Button>
              <Button href="/contact" variant="outline" size="md">
                CONTACT GYM
              </Button>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-white/20 bg-[#101010] shadow-2xl">
            <iframe
              title="HAYATABAD GYM Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13233.123456789!2d71.4391!3d33.9912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU5JzI4LjMiTiA3McKwMjYnMjAuOCJF!5e0!3m2!1sen!2spk!4v1620000000000!5m2!1sen!2spk"
              className="absolute inset-0 h-full w-full border-0 filter grayscale contrast-125 invert"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
