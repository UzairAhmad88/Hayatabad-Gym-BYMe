"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function TrialForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: new Date().toISOString().split("T")[0],
    time: "06:00 PM",
    goal: "General Fitness"
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to book free trial");
      }

      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: new Date().toISOString().split("T")[0],
        time: "06:00 PM",
        goal: "General Fitness"
      });
    } catch (err: unknown) {
      const errorObj = err as Error;
      setStatus("error");
      setErrorMessage(errorObj.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="rounded-3xl border border-[#B7FF00]/30 bg-[#121212] p-6 sm:p-10 shadow-2xl">
      <div className="inline-block rounded-full bg-[#B7FF00]/10 px-3 py-1 text-xs font-black text-[#B7FF00] uppercase tracking-wider mb-2">
        100% Free VIP Day Pass
      </div>
      <h3 className="text-2xl font-black uppercase text-white">Book A Free Trial Pass</h3>
      <p className="mt-2 text-sm text-[#A5A5A5]">
        Experience Hayatabad Gym for a full day with zero commitment.
      </p>

      {status === "success" ? (
        <div className="mt-8 rounded-2xl border border-[#B7FF00]/40 bg-[#B7FF00]/10 p-6 text-center">
          <div className="text-4xl text-[#B7FF00]">🎉</div>
          <h4 className="mt-3 text-xl font-black uppercase text-white">Trial Pass Reserved!</h4>
          <p className="mt-2 text-sm text-[#A5A5A5]">
            Your 1-Day Free Trial Pass is confirmed. Bring your gym shoes and show this confirmation at our reception desk.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-xs font-bold text-[#B7FF00] underline"
          >
            Book another trial session
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
              placeholder="e.g. Hamza Afridi"
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
                Email (Optional)
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="hamza@example.com"
                className="w-full rounded-2xl border border-white/10 bg-[#1B1B1B] px-5 py-4 text-sm text-white outline-none focus:border-[#B7FF00] focus:ring-1 focus:ring-[#B7FF00]"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#A5A5A5]">
                Preferred Date
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-[#1B1B1B] px-5 py-4 text-sm text-white outline-none focus:border-[#B7FF00] focus:ring-1 focus:ring-[#B7FF00]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#A5A5A5]">
                Preferred Time Slot
              </label>
              <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-[#1B1B1B] px-5 py-4 text-sm text-white outline-none focus:border-[#B7FF00] focus:ring-1 focus:ring-[#B7FF00]"
              >
                <option value="07:00 AM">07:00 AM – Morning</option>
                <option value="10:30 AM">10:30 AM – Ladies Special</option>
                <option value="03:00 PM">03:00 PM – Afternoon</option>
                <option value="06:00 PM">06:00 PM – Evening Prime</option>
                <option value="09:00 PM">09:00 PM – Late Night</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#A5A5A5]">
              Fitness Goal
            </label>
            <select
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
              className="w-full rounded-2xl border border-white/10 bg-[#1B1B1B] px-5 py-4 text-sm text-white outline-none focus:border-[#B7FF00] focus:ring-1 focus:ring-[#B7FF00]"
            >
              <option value="General Fitness">General Health & Fitness</option>
              <option value="Strength Training">Heavy Strength Training</option>
              <option value="Weight Loss">Weight Loss & Fat Burn</option>
              <option value="Personal Coaching">1-on-1 Personal Coaching</option>
            </select>
          </div>

          <Button
            type="submit"
            disabled={status === "submitting"}
            variant="primary"
            size="lg"
            className="w-full mt-4"
          >
            {status === "submitting" ? "RESERVING PASS..." : "CLAIM FREE TRIAL PASS →"}
          </Button>
        </form>
      )}
    </div>
  );
}
