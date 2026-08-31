"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";

interface JoinFormProps {
  defaultMembership?: string;
}

export function JoinForm({ defaultMembership = "PREMIUM PRO" }: JoinFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    membership: defaultMembership,
    goal: "Muscle Building",
    preferredTime: "Evening (05:00 PM – 09:00 PM)"
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit membership application");
      }

      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        membership: defaultMembership,
        goal: "Muscle Building",
        preferredTime: "Evening (05:00 PM – 09:00 PM)"
      });
    } catch (err: unknown) {
      const errorObj = err as Error;
      setStatus("error");
      setErrorMessage(errorObj.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-[#121212] p-6 sm:p-10 shadow-2xl">
      <h3 className="text-2xl font-black uppercase text-white">Membership Application</h3>
      <p className="mt-2 text-sm text-[#A5A5A5]">
        Fill out your details to initiate your HAYATABAD GYM membership.
      </p>

      {status === "success" ? (
        <div className="mt-8 rounded-2xl border border-[#B7FF00]/40 bg-[#B7FF00]/10 p-6 text-center">
          <div className="text-4xl text-[#B7FF00]">✓</div>
          <h4 className="mt-3 text-xl font-black uppercase text-white">Application Received!</h4>
          <p className="mt-2 text-sm text-[#A5A5A5]">
            Thank you for applying. Our gym advisor will contact you via WhatsApp/call shortly to confirm your membership card and welcome pass.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-xs font-bold text-[#B7FF00] underline"
          >
            Submit another application
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {status === "error" && (
            <div className="rounded-xl border border-red-500/50 bg-red-500/10 p-4 text-xs font-semibold text-red-400">
              {errorMessage}
            </div>
          )}

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#A5A5A5]">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Ahmed Shah"
              className="w-full rounded-2xl border border-white/10 bg-[#1B1B1B] px-5 py-4 text-sm text-white outline-none focus:border-[#B7FF00] focus:ring-1 focus:ring-[#B7FF00]"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#A5A5A5]">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="0300 1234567"
                className="w-full rounded-2xl border border-white/10 bg-[#1B1B1B] px-5 py-4 text-sm text-white outline-none focus:border-[#B7FF00] focus:ring-1 focus:ring-[#B7FF00]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#A5A5A5]">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="ahmed@example.com"
                className="w-full rounded-2xl border border-white/10 bg-[#1B1B1B] px-5 py-4 text-sm text-white outline-none focus:border-[#B7FF00] focus:ring-1 focus:ring-[#B7FF00]"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#A5A5A5]">
                Selected Membership Plan
              </label>
              <select
                value={formData.membership}
                onChange={(e) => setFormData({ ...formData, membership: e.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-[#1B1B1B] px-5 py-4 text-sm text-white outline-none focus:border-[#B7FF00] focus:ring-1 focus:ring-[#B7FF00]"
              >
                <option value="BASIC ATHLETE">BASIC ATHLETE (PKR 5,000/mo)</option>
                <option value="PREMIUM PRO">PREMIUM PRO (PKR 8,500/mo)</option>
                <option value="ELITE VIP">ELITE VIP (PKR 18,000/mo)</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#A5A5A5]">
                Primary Fitness Goal *
              </label>
              <select
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-[#1B1B1B] px-5 py-4 text-sm text-white outline-none focus:border-[#B7FF00] focus:ring-1 focus:ring-[#B7FF00]"
              >
                <option value="Muscle Building">Muscle Building & Hypertrophy</option>
                <option value="Weight Loss">Weight Loss & Fat Reduction</option>
                <option value="Strength">Powerlifting & Heavy Strength</option>
                <option value="General Fitness">General Health & Fitness</option>
                <option value="Athletic Training">Athletic Performance & Mobility</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#A5A5A5]">
              Preferred Workout Time
            </label>
            <select
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              className="w-full rounded-2xl border border-white/10 bg-[#1B1B1B] px-5 py-4 text-sm text-white outline-none focus:border-[#B7FF00] focus:ring-1 focus:ring-[#B7FF00]"
            >
              <option value="Morning (06:00 AM – 10:00 AM)">Morning (06:00 AM – 10:00 AM)</option>
              <option value="Ladies Special (10:00 AM – 01:00 PM)">Ladies Special (10:00 AM – 01:00 PM)</option>
              <option value="Afternoon (01:00 PM – 05:00 PM)">Afternoon (01:00 PM – 05:00 PM)</option>
              <option value="Evening (05:00 PM – 09:00 PM)">Evening (05:00 PM – 09:00 PM)</option>
              <option value="Night (09:00 PM – 11:00 PM)">Night (09:00 PM – 11:00 PM)</option>
            </select>
          </div>

          <Button
            type="submit"
            disabled={status === "submitting"}
            variant="primary"
            size="lg"
            className="w-full mt-4"
          >
            {status === "submitting" ? "SUBMITTING APPLICATION..." : "SUBMIT APPLICATION →"}
          </Button>
        </form>
      )}
    </div>
  );
}
