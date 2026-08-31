"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface StatsCounterProps {
  value: string;
  label: string;
}

export function StatsCounter({ value, label }: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericMatch = value.match(/\d+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const target = parseInt(numericMatch[0], 10);
    const suffix = value.replace(/\d+/g, "");
    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += Math.ceil(target / steps);
      if (current >= target) {
        setDisplayValue(`${target}${suffix}`);
        clearInterval(timer);
      } else {
        setDisplayValue(`${current}${suffix}`);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="border-r border-white/10 p-8 sm:p-10 last:border-r-0 text-center sm:text-left transition hover:bg-white/5">
      <div className="text-4xl font-black text-[#B7FF00] sm:text-5xl md:text-6xl text-glow">
        {displayValue}
      </div>
      <div className="mt-2 text-xs font-black uppercase tracking-widest text-white sm:text-sm">
        {label}
      </div>
    </div>
  );
}
