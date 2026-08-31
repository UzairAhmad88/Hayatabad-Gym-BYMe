"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IntroSplash() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Automatically trigger slide-up exit after 3.5 seconds
    const timer = setTimeout(() => {
      setShow(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro-splash"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#060606] px-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.9)] select-none"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(183,255,0,0.15),transparent_60%)] pointer-events-none" />

          {/* Animated Content Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 max-w-4xl"
          >
            {/* Eyebrow Tag */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#B7FF00]/40 bg-[#B7FF00]/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#B7FF00] animate-pulse" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#B7FF00]">
                HAYATABAD GYM • PESHAWAR
              </span>
            </div>

            {/* Muhammad Ali Quote */}
            <blockquote className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.05] drop-shadow-2xl">
              &quot;I hated every minute of training, but I said, &apos;Don&apos;t quit. Suffer now and live the rest of your life as a champion.&apos;&quot;
            </blockquote>

            {/* Author Attribution */}
            <p className="mt-8 text-lg font-black uppercase tracking-[0.35em] text-[#B7FF00] text-glow">
              — MUHAMMAD ALI
            </p>

            {/* Interactive Enter / Skip Trigger */}
            <motion.button
              onClick={() => setShow(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-[#B7FF00] px-8 py-4 text-xs font-black uppercase tracking-widest text-black shadow-[0_0_30px_rgba(183,255,0,0.4)] transition hover:bg-[#a4e600] cursor-pointer"
            >
              <span>ENTER GYM</span>
              <span className="text-base">↓</span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
