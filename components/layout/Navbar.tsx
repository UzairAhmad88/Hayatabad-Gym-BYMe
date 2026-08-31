"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Trainers", href: "/trainers" },
  { name: "Membership", href: "/membership" },
  { name: "Facilities", href: "/facilities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Schedule", href: "/schedule" },
  { name: "Contact", href: "/contact" }
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/15 bg-[#060606]/95 py-3.5 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-gradient-to-b from-[#060606]/95 via-[#060606]/50 to-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="flex flex-shrink-0 items-center gap-1.5 text-2xl font-black tracking-tighter text-white sm:text-3xl mr-8 xl:mr-16 group"
        >
          <span className="group-hover:text-white transition-colors">HAYATABAD</span>
          <span className="text-[#B7FF00] text-glow group-hover:scale-105 transition-transform">GYM</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-black uppercase tracking-widest transition-all duration-200 relative ${
                  isActive
                    ? "text-[#B7FF00]"
                    : "text-white/80 hover:text-white hover:scale-105"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#B7FF00] rounded-full shadow-[0_0_10px_#B7FF00]" />
                )}
              </Link>
            );
          })}
          <Button href="/join" variant="primary" size="sm" className="shadow-[0_0_20px_rgba(183,255,0,0.4)] ml-2">
            {siteConfig.cta.primary}
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <Button href="/join" variant="primary" size="sm" className="py-2 px-4 text-xs font-black">
            JOIN
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#121212] text-white focus:outline-none focus:ring-2 focus:ring-[#B7FF00]"
          >
            {mobileMenuOpen ? (
              <span className="text-xl font-black">✕</span>
            ) : (
              <span className="text-xl font-black">☰</span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[68px] z-40 bg-[#060606]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-6 overflow-y-auto border-t border-white/10">
          <div className="flex flex-col space-y-4 pt-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xl font-black uppercase tracking-wider py-3 border-b border-white/10 flex items-center justify-between ${
                    isActive ? "text-[#B7FF00]" : "text-white hover:text-[#B7FF00]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="text-[#B7FF00]">●</span>}
                </Link>
              );
            })}
          </div>

          <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
            <Button href="/join" variant="primary" size="lg" className="w-full">
              {siteConfig.cta.primary}
            </Button>
            <Button href="/join?tab=trial" variant="outline" size="lg" className="w-full">
              {siteConfig.cta.secondary}
            </Button>
            <div className="text-center text-xs font-semibold text-[#E5E7EB] pt-2">
              {siteConfig.location.address}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
