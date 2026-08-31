"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { JoinForm } from "@/components/forms/JoinForm";
import { TrialForm } from "@/components/forms/TrialForm";
import { CTA } from "@/components/home/CTA";

function JoinContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"membership" | "trial">("membership");

  useEffect(() => {
    if (searchParams) {
      const tabParam = searchParams.get("tab");
      if (tabParam === "trial") {
        setActiveTab("trial");
      } else {
        setActiveTab("membership");
      }
    }
  }, [searchParams]);

  return (
    <>
      <section className="bg-[#080808] py-20">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#B7FF00]">
              Start Your Transformation
            </p>
            <h1 className="mt-4 text-5xl font-black uppercase tracking-tight text-white sm:text-7xl">
              JOIN HAYATABAD GYM.
            </h1>
            <p className="mt-4 text-base text-[#A5A5A5] sm:text-lg">
              Apply for full gym membership or claim your 100% free 1-day trial pass.
            </p>

            {/* Tab Switcher */}
            <div className="mt-10 inline-flex rounded-full border border-white/10 bg-[#121212] p-1.5">
              <button
                type="button"
                onClick={() => setActiveTab("membership")}
                className={`rounded-full px-8 py-3 text-xs font-black uppercase tracking-wider transition-all ${
                  activeTab === "membership"
                    ? "bg-[#B7FF00] text-black shadow-[0_0_20px_rgba(183,255,0,0.3)]"
                    : "text-[#A5A5A5] hover:text-white"
                }`}
              >
                MEMBERSHIP APPLICATION
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("trial")}
                className={`rounded-full px-8 py-3 text-xs font-black uppercase tracking-wider transition-all ${
                  activeTab === "trial"
                    ? "bg-[#B7FF00] text-black shadow-[0_0_20px_rgba(183,255,0,0.3)]"
                    : "text-[#A5A5A5] hover:text-white"
                }`}
              >
                BOOK FREE TRIAL PASS
              </button>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            {activeTab === "membership" ? <JoinForm /> : <TrialForm />}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}

export default function JoinPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-white">Loading Application Form...</div>}>
      <JoinContent />
    </Suspense>
  );
}
