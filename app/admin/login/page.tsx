"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Authentication failed");
      }

      router.push("/admin");
    } catch (err: unknown) {
      const errorObj = err as Error;
      setStatus("error");
      setErrorMessage(errorObj.message || "Invalid credentials");
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-[#080808] py-24">
      <Container size="sm">
        <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-[#121212] p-8 sm:p-10 shadow-2xl">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#B7FF00]">
              Management Portal
            </span>
            <h1 className="mt-2 text-3xl font-black uppercase text-white">
              ADMIN LOGIN
            </h1>
            <p className="mt-2 text-xs text-[#A5A5A5]">
              Protected portal for HAYATABAD GYM administrators.
            </p>
          </div>

          {status === "error" && (
            <div className="mt-6 rounded-xl border border-red-500/50 bg-red-500/10 p-4 text-xs font-semibold text-red-400">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#A5A5A5]">
                Username
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="w-full rounded-2xl border border-white/10 bg-[#1B1B1B] px-5 py-4 text-sm text-white outline-none focus:border-[#B7FF00] focus:ring-1 focus:ring-[#B7FF00]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#A5A5A5]">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
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
              {status === "submitting" ? "AUTHENTICATING..." : "LOG IN TO DASHBOARD →"}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
