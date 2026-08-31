"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface Metrics {
  totalMembers: number;
  newApplications: number;
  trialBookings: number;
  unreadMessages: number;
  upcomingSessions: number;
}

interface AppData {
  applications: Array<{ id: string; name: string; phone: string; membership?: string; goal?: string; createdAt: string }>;
  trials: Array<{ id: string; name: string; phone: string; date?: string; goal?: string; createdAt: string }>;
  contacts: Array<{ id: string; name: string; phone?: string; message: string; createdAt: string }>;
}

export default function AdminDashboardPage() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [data, setData] = useState<AppData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"applications" | "trials" | "messages">("applications");
  const router = useRouter();

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const res = await fetch("/api/admin/dashboard");
        if (!res.ok) {
          router.push("/admin/login");
          return;
        }
        const json = await res.json();
        setMetrics(json.metrics);
        setData(json.data);
      } catch (err) {
        console.error(err);
        router.push("/admin/login");
      } finally {
        setLoading(false);
      }
    }
    fetchDashboard();
  }, [router]);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#080808] text-[#B7FF00] font-black uppercase text-xl">
        Loading Admin Platform...
      </div>
    );
  }

  return (
    <section className="bg-[#080808] py-16 min-h-[85vh]">
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-8 gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#B7FF00]">
              Management Platform
            </span>
            <h1 className="mt-1 text-3xl font-black uppercase text-white sm:text-4xl">
              HAYATABAD GYM DASHBOARD
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Button href="/" variant="outline" size="sm">
              VIEW WEBSITE
            </Button>
            <Button onClick={handleLogout} variant="secondary" size="sm">
              LOG OUT
            </Button>
          </div>
        </div>

        {/* Metrics Grid */}
        {metrics && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-2xl border border-white/10 bg-[#121212] p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[#A5A5A5]">Total Members</p>
              <p className="mt-2 text-3xl font-black text-[#B7FF00]">{metrics.totalMembers}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#121212] p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[#A5A5A5]">New Applications</p>
              <p className="mt-2 text-3xl font-black text-white">{metrics.newApplications}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#121212] p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[#A5A5A5]">Trial Bookings</p>
              <p className="mt-2 text-3xl font-black text-white">{metrics.trialBookings}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#121212] p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[#A5A5A5]">Unread Messages</p>
              <p className="mt-2 text-3xl font-black text-white">{metrics.unreadMessages}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#121212] p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[#A5A5A5]">Upcoming Sessions</p>
              <p className="mt-2 text-3xl font-black text-[#B7FF00]">{metrics.upcomingSessions}</p>
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="mt-12 flex gap-3 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab("applications")}
            className={`rounded-full px-6 py-2.5 text-xs font-black uppercase tracking-wider transition ${
              activeTab === "applications"
                ? "bg-[#B7FF00] text-black"
                : "bg-[#121212] text-[#A5A5A5] hover:text-white"
            }`}
          >
            Applications ({data?.applications.length || 0})
          </button>
          <button
            onClick={() => setActiveTab("trials")}
            className={`rounded-full px-6 py-2.5 text-xs font-black uppercase tracking-wider transition ${
              activeTab === "trials"
                ? "bg-[#B7FF00] text-black"
                : "bg-[#121212] text-[#A5A5A5] hover:text-white"
            }`}
          >
            Trial Bookings ({data?.trials.length || 0})
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`rounded-full px-6 py-2.5 text-xs font-black uppercase tracking-wider transition ${
              activeTab === "messages"
                ? "bg-[#B7FF00] text-black"
                : "bg-[#121212] text-[#A5A5A5] hover:text-white"
            }`}
          >
            Contact Messages ({data?.contacts.length || 0})
          </button>
        </div>

        {/* Data Tables */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-[#121212] overflow-hidden">
          {activeTab === "applications" && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-[#A5A5A5]">
                <thead className="border-b border-white/10 bg-[#1B1B1B] text-xs font-black uppercase text-white">
                  <tr>
                    <th className="p-4">Name</th>
                    <th className="p-4">Phone</th>
                    <th className="p-4">Plan</th>
                    <th className="p-4">Goal</th>
                    <th className="p-4">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {data?.applications.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-[#A5A5A5]">
                        No membership applications submitted yet.
                      </td>
                    </tr>
                  ) : (
                    data?.applications.map((app) => (
                      <tr key={app.id}>
                        <td className="p-4 font-bold text-white">{app.name}</td>
                        <td className="p-4">{app.phone}</td>
                        <td className="p-4 text-[#B7FF00] font-semibold">{app.membership || "General"}</td>
                        <td className="p-4">{app.goal || "-"}</td>
                        <td className="p-4 text-xs">{new Date(app.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "trials" && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-[#A5A5A5]">
                <thead className="border-b border-white/10 bg-[#1B1B1B] text-xs font-black uppercase text-white">
                  <tr>
                    <th className="p-4">Name</th>
                    <th className="p-4">Phone</th>
                    <th className="p-4">Preferred Date</th>
                    <th className="p-4">Goal</th>
                    <th className="p-4">Booked At</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {data?.trials.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-[#A5A5A5]">
                        No trial bookings submitted yet.
                      </td>
                    </tr>
                  ) : (
                    data?.trials.map((trial) => (
                      <tr key={trial.id}>
                        <td className="p-4 font-bold text-white">{trial.name}</td>
                        <td className="p-4">{trial.phone}</td>
                        <td className="p-4 text-[#B7FF00] font-semibold">{trial.date || "Flexible"}</td>
                        <td className="p-4">{trial.goal || "-"}</td>
                        <td className="p-4 text-xs">{new Date(trial.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "messages" && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-[#A5A5A5]">
                <thead className="border-b border-white/10 bg-[#1B1B1B] text-xs font-black uppercase text-white">
                  <tr>
                    <th className="p-4">Name</th>
                    <th className="p-4">Phone</th>
                    <th className="p-4">Message</th>
                    <th className="p-4">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {data?.contacts.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-[#A5A5A5]">
                        No contact messages received yet.
                      </td>
                    </tr>
                  ) : (
                    data?.contacts.map((msg) => (
                      <tr key={msg.id}>
                        <td className="p-4 font-bold text-white">{msg.name}</td>
                        <td className="p-4">{msg.phone || "-"}</td>
                        <td className="p-4 text-white max-w-xs truncate">{msg.message}</td>
                        <td className="p-4 text-xs">{new Date(msg.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
