import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="bg-[#080808] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#B7FF00] via-[#a3e600] to-[#88cc00] p-10 text-black shadow-[0_20px_50px_rgba(183,255,0,0.2)] md:p-16">
          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-black/80">
              Start Your Fitness Journey Today
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-8xl">
              READY TO BUILD YOUR STRONGEST SELF?
            </h2>
            <p className="mt-6 text-base font-semibold text-black/80 sm:text-lg">
              Join Hayatabad&apos;s elite fitness community today. Claim your membership or book a free trial pass now!
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/join" variant="secondary" size="lg" className="bg-black text-white hover:bg-neutral-900 border-none">
                JOIN NOW →
              </Button>
              <Button href="/join?tab=trial" variant="outline" size="lg" className="border-black/30 text-black hover:border-black hover:bg-black/10">
                BOOK A FREE TRIAL
              </Button>
            </div>
          </div>

          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/20 blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
