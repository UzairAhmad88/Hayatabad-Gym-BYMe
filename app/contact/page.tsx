import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { LocationSection } from "@/components/home/LocationSection";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Contact Us | HAYATABAD GYM Peshawar",
  description: "Get in touch with HAYATABAD GYM in Hayatabad, Peshawar. Phone, WhatsApp, opening hours, and location directions."
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#080808] py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#B7FF00]">
                Get In Touch
              </p>
              <h1 className="mt-4 text-5xl font-black uppercase tracking-tight text-white sm:text-7xl">
                WE ARE HERE TO HELP YOU GO FURTHER.
              </h1>
              <p className="mt-6 text-lg text-[#A5A5A5] leading-relaxed">
                Have questions regarding memberships, personal coaching, or ladies hours? Contact our team or drop by our facility in Hayatabad.
              </p>

              <div className="mt-10 space-y-6">
                <div className="rounded-2xl border border-white/10 bg-[#121212] p-6">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#B7FF00]">
                    Phone & WhatsApp
                  </h3>
                  <p className="mt-2 text-xl font-bold text-white">{siteConfig.contact.phone}</p>
                  <p className="text-xs text-[#A5A5A5]">Available Monday through Saturday 06:00 AM – 11:00 PM</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#121212] p-6">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#B7FF00]">
                    Email Inquiries
                  </h3>
                  <p className="mt-2 text-xl font-bold text-white">{siteConfig.contact.email}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#121212] p-6">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#B7FF00]">
                    Address
                  </h3>
                  <p className="mt-2 text-base font-semibold text-white">{siteConfig.location.address}</p>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <LocationSection />
    </>
  );
}
