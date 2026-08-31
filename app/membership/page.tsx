import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { membershipPlans, membershipFaqs } from "@/lib/data/membership";
import { CTA } from "@/components/home/CTA";

export const metadata = {
  title: "Membership Plans | HAYATABAD GYM Peshawar",
  description: "Transparent membership pricing for HAYATABAD GYM. Basic, Premium Pro, and Elite VIP plans with no hidden fees."
};

export default function MembershipPage() {
  return (
    <>
      <section className="bg-[#080808] py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#B7FF00]">
              Transparent Membership
            </p>
            <h1 className="mt-4 text-5xl font-black uppercase tracking-tight text-white sm:text-7xl">
              INVEST IN YOUR STRENGTH.
            </h1>
            <p className="mt-6 text-lg text-[#A5A5A5] leading-relaxed">
              Straightforward pricing with zero hidden maintenance fees. All memberships grant access to our clean, high-performance athletic facility.
            </p>
          </div>
        </Container>
      </section>

      {/* Plan Cards (Mobile & Desktop) */}
      <section className="bg-[#121212] py-20 border-t border-white/10">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {membershipPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex h-full flex-col justify-between rounded-3xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? "border-[#B7FF00] bg-[#1B1B1B] shadow-[0_0_40px_rgba(183,255,0,0.15)]"
                    : "border-white/10 bg-[#1B1B1B]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#B7FF00] px-4 py-1 text-xs font-black uppercase text-black">
                    MOST POPULAR
                  </span>
                )}
                <div>
                  <h2 className="text-2xl font-black uppercase text-white">{plan.name}</h2>
                  <p className="mt-2 text-xs text-[#A5A5A5]">{plan.description}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-[#B7FF00]">{plan.price}</span>
                    <span className="text-xs text-[#A5A5A5]">{plan.period}</span>
                  </div>

                  <ul className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm text-[#A5A5A5]">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <span className="text-[#B7FF00] font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <Button
                    href="/join"
                    variant={plan.popular ? "primary" : "outline"}
                    size="md"
                    className="w-full"
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Feature Comparison Matrix */}
          <div className="mt-20 hidden lg:block">
            <SectionHeading
              eyebrow="Plan Details"
              title="FEATURE COMPARISON."
              subtitle="Compare membership benefits side by side."
            />

            <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[#1B1B1B]">
              <table className="w-full text-left text-sm text-[#A5A5A5]">
                <thead className="border-b border-white/10 bg-[#121212] text-xs font-black uppercase tracking-wider text-white">
                  <tr>
                    <th className="p-6">Feature</th>
                    <th className="p-6 text-center">Basic Athlete</th>
                    <th className="p-6 text-center text-[#B7FF00]">Premium Pro</th>
                    <th className="p-6 text-center">Elite VIP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="p-6 font-semibold text-white">Heavy Weight Floor Access</td>
                    <td className="p-6 text-center text-[#B7FF00]">✓</td>
                    <td className="p-6 text-center text-[#B7FF00]">✓</td>
                    <td className="p-6 text-center text-[#B7FF00]">✓</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-white">Functional Turf Arena</td>
                    <td className="p-6 text-center text-red-400">✕</td>
                    <td className="p-6 text-center text-[#B7FF00]">✓</td>
                    <td className="p-6 text-center text-[#B7FF00]">✓</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-white">Group HIIT Classes</td>
                    <td className="p-6 text-center text-red-400">✕</td>
                    <td className="p-6 text-center text-[#B7FF00]">✓</td>
                    <td className="p-6 text-center text-[#B7FF00]">✓</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-white">Dedicated 1-on-1 Personal Training</td>
                    <td className="p-6 text-center text-red-400">✕</td>
                    <td className="p-6 text-center text-[#A5A5A5]">1 Check-in / mo</td>
                    <td className="p-6 text-center text-[#B7FF00]">8 Sessions / mo</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-white">Monthly Body Fat Analysis</td>
                    <td className="p-6 text-center text-red-400">✕</td>
                    <td className="p-6 text-center text-[#B7FF00]">✓</td>
                    <td className="p-6 text-center text-[#B7FF00]">Weekly</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="bg-[#080808] py-20 border-t border-white/10">
        <Container>
          <SectionHeading
            eyebrow="Questions"
            title="MEMBERSHIP FAQS."
            subtitle="Everything you need to know before getting started."
          />

          <div className="grid gap-6 sm:grid-cols-2 mt-8">
            {membershipFaqs.map((faq, i) => (
              <div key={i} className="rounded-3xl border border-white/10 bg-[#121212] p-8">
                <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm text-[#A5A5A5] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
