import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060606] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div>
            <Link href="/" className="text-3xl font-black tracking-tighter">
              HAYATABAD<span className="text-[#B7FF00] text-glow">GYM</span>
            </Link>
            <p className="mt-4 text-sm font-medium leading-relaxed text-[#E5E7EB]">
              {siteConfig.description}
            </p>
            <p className="mt-5 text-xs font-black uppercase tracking-widest text-[#B7FF00]">
              BUILD YOUR STRONGEST SELF.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-[#B7FF00]">
              Quick Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm font-bold text-[#E5E7EB]">
              <li>
                <Link href="/about" className="hover:text-[#B7FF00] transition">About Us</Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#B7FF00] transition">Programs & Workouts</Link>
              </li>
              <li>
                <Link href="/trainers" className="hover:text-[#B7FF00] transition">Certified Trainers</Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-[#B7FF00] transition">Membership Plans</Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-[#B7FF00] transition">Facility & Zones</Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-[#B7FF00] transition">Class Schedule</Link>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-[#B7FF00]">
              Operating Hours
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-[#E5E7EB]">
              <div>
                <li className="font-bold text-white uppercase text-xs tracking-wider">Monday – Saturday</li>
                <li className="text-sm font-semibold mt-0.5">{siteConfig.hours.monSat}</li>
              </div>
              <div>
                <li className="font-bold text-white uppercase text-xs tracking-wider">Sunday</li>
                <li className="text-sm font-semibold mt-0.5">{siteConfig.hours.sunday}</li>
              </div>
              <div>
                <li className="font-bold text-[#B7FF00] uppercase text-xs tracking-wider">Ladies Dedicated Hours</li>
                <li className="text-sm font-bold text-white mt-0.5">{siteConfig.hours.ladiesTime}</li>
              </div>
            </ul>
          </div>

          {/* Contact & Address */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-[#B7FF00]">
              Contact & Location
            </h3>
            <div className="mt-5 space-y-3 text-sm font-medium text-[#E5E7EB]">
              <p className="font-semibold text-white">{siteConfig.location.address}</p>
              <p>
                <strong className="text-white">Phone:</strong> {siteConfig.contact.phone}
              </p>
              <p>
                <strong className="text-white">Email:</strong> {siteConfig.contact.email}
              </p>
              <div className="pt-3">
                <Link
                  href="/admin/login"
                  className="text-xs font-bold text-[#B7FF00] hover:underline"
                >
                  Admin Management Portal →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-semibold text-[#E5E7EB] gap-4">
          <p>Developed By <a href="https://linkedin.com/in/uzair-ahmad-58007a266" target="_blank" rel="noopener noreferrer" className="text-[#B7FF00] hover:underline font-bold">Uzair Ahmad</a></p>
          <p>Hayatabad, Peshawar, KP, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
