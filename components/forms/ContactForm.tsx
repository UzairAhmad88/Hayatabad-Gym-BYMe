"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send contact message");
      }

      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: ""
      });
    } catch (err: unknown) {
      const errorObj = err as Error;
      setStatus("error");
      setErrorMessage(errorObj.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-[#121212] p-6 sm:p-10 shadow-2xl">
      <h3 className="text-2xl font-black uppercase text-white">Send Us A Message</h3>
      <p className="mt-2 text-sm text-[#A5A5A5]">
        Have questions about memberships, timing, or coaching? Drop us a line.
      </p>

      {status === "success" ? (
        <div className="mt-8 rounded-2xl border border-[#B7FF00]/40 bg-[#B7FF00]/10 p-6 text-center">
          <div className="text-4xl text-[#B7FF00]">💬</div>
          <h4 className="mt-3 text-xl font-black uppercase text-white">Message Sent!</h4>
          <p className="mt-2 text-sm text-[#A5A5A5]">
            Thank you for reaching out to HAYATABAD GYM. We will respond via WhatsApp or email shortly.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-xs font-bold text-[#B7FF00] underline"
          >
            Send another message
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
              Your Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Tariq Khan"
              className="w-full rounded-2xl border border-white/10 bg-[#1B1B1B] px-5 py-4 text-sm text-white outline-none focus:border-[#B7FF00] focus:ring-1 focus:ring-[#B7FF00]"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#A5A5A5]">
                Phone Number (WhatsApp)
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="0300 1234567"
                className="w-full rounded-2xl border border-white/10 bg-[#1B1B1B] px-5 py-4 text-sm text-white outline-none focus:border-[#B7FF00] focus:ring-1 focus:ring-[#B7FF00]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#A5A5A5]">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tariq@example.com"
                className="w-full rounded-2xl border border-white/10 bg-[#1B1B1B] px-5 py-4 text-sm text-white outline-none focus:border-[#B7FF00] focus:ring-1 focus:ring-[#B7FF00]"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#A5A5A5]">
              Your Message *
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="How can we help you build your strongest self?"
              className="w-full rounded-2xl border border-white/10 bg-[#1B1B1B] px-5 py-4 text-sm text-white outline-none focus:border-[#B7FF00] focus:ring-1 focus:ring-[#B7FF00]"
            />
          </div>

          <Button
            type="submit"
            disabled={status === "submitting"}
            variant="primary"
            size="lg"
            className="w-full mt-4"
          >
            {status === "submitting" ? "SENDING MESSAGE..." : "SEND MESSAGE →"}
          </Button>
        </form>
      )}
    </div>
  );
}
