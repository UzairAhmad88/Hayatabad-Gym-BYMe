"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { scheduleData, daysOfWeek } from "@/lib/data/schedule";
import { CTA } from "@/components/home/CTA";

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState<string>("Monday");

  const filteredSchedule = scheduleData.filter((item) => item.day === selectedDay);

  return (
    <>
      <section className="bg-[#080808] py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#B7FF00]">
              Class & Session Timetable
            </p>
            <h1 className="mt-4 text-5xl font-black uppercase tracking-tight text-white sm:text-7xl">
              WEEKLY CLASS SCHEDULE.
            </h1>
            <p className="mt-6 text-lg text-[#A5A5A5] leading-relaxed">
              Find scheduled strength blocks, functional HIIT circuits, and dedicated ladies-only training times.
            </p>
          </div>

          {/* Days Filter Tabs */}
          <div className="mt-12 flex flex-wrap gap-2 border-b border-white/10 pb-6 overflow-x-auto">
            {daysOfWeek.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`rounded-full px-6 py-3 text-xs font-black uppercase tracking-wider transition-all ${
                  selectedDay === day
                    ? "bg-[#B7FF00] text-black shadow-[0_0_20px_rgba(183,255,0,0.3)]"
                    : "bg-[#121212] text-[#A5A5A5] hover:text-white hover:bg-[#1B1B1B]"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Schedule Table / List */}
      <section className="bg-[#121212] py-16 border-t border-white/10">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-[#1B1B1B] overflow-hidden">
            <div className="p-6 bg-[#121212] border-b border-white/10 flex items-center justify-between">
              <h2 className="text-2xl font-black uppercase text-white">{selectedDay} Schedule</h2>
              <span className="text-xs font-bold text-[#B7FF00] uppercase tracking-wider">
                {filteredSchedule.length} Sessions Available
              </span>
            </div>

            {filteredSchedule.length === 0 ? (
              <div className="p-12 text-center text-[#A5A5A5]">
                No structured classes scheduled for {selectedDay}. Open gym lifting available all day!
              </div>
            ) : (
              <div className="divide-y divide-white/10">
                {filteredSchedule.map((session) => (
                  <div
                    key={session.id}
                    className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition hover:bg-[#121212]"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-black text-[#B7FF00]">{session.time}</span>
                        <span className="rounded-full bg-[#121212] px-3 py-1 text-xs font-bold text-[#A5A5A5]">
                          {session.duration}
                        </span>
                        <span className="rounded-full bg-[#B7FF00]/10 text-[#B7FF00] px-3 py-1 text-xs font-bold">
                          {session.level}
                        </span>
                      </div>
                      <h3 className="mt-3 text-2xl font-black uppercase text-white">
                        {session.program}
                      </h3>
                      <p className="mt-1 text-xs text-[#A5A5A5]">
                        Trainer: <strong className="text-white">{session.trainer}</strong> • Room: <strong className="text-white">{session.room}</strong>
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <Button href="/join?tab=trial" variant="primary" size="sm">
                        BOOK THIS SESSION →
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
