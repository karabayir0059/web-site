"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SplashScreenProps = {
  children: React.ReactNode;
};

export function SplashScreen({ children }: SplashScreenProps) {
  const [showSplash, setShowSplash] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark-section"
          >
            {/* Background glow orbs */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[120px]" />
              <div className="absolute bottom-1/4 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-white/8 blur-[100px]" />
            </div>

            {/* Grid overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden="true">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(hsl(var(--color-brand) / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--color-brand) / 0.4) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
            </div>

            {/* Logo animation */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Animated logo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="relative"
              >
                <svg
                  viewBox="0 0 120 120"
                  className="h-28 w-28 sm:h-36 sm:w-36"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="splash-flow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--color-brand))" />
                      <stop offset="35%" stopColor="hsl(var(--color-brand-hover))" />
                      <stop offset="70%" stopColor="hsl(var(--color-brand))" />
                      <stop offset="100%" stopColor="hsl(var(--color-brand-deep))" />
                    </linearGradient>
                    <radialGradient id="splash-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="hsl(var(--color-brand) / 0.3)" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                    <filter id="splash-glow-filter">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Glow behind logo */}
                  <circle cx="60" cy="58" r="55" fill="url(#splash-glow)">
                    <animate attributeName="r" values="50;60;50" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite" />
                  </circle>

                  {/* Stacked squares — Stack Overflow inspired */}
                  <motion.g
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    filter="url(#splash-glow-filter)"
                  >
                    {/* Bottom layer — Otomasyon */}
                    <rect x="17" y="58" width="46" height="46" rx="8" fill="url(#splash-flow)" />
                    {/* Middle layer — Mail */}
                    <rect x="35" y="40" width="46" height="46" rx="8" fill="url(#splash-flow)" opacity="0.85" />
                    {/* Top layer — Web */}
                    <rect x="53" y="22" width="46" height="46" rx="8" fill="url(#splash-flow)" opacity="0.7" />
                  </motion.g>
                </svg>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.8 }}
                className="mt-6 text-center"
              >
                <h1 className="font-heading text-2xl font-bold tracking-[-0.04em] text-white sm:text-3xl">
                  Web Site ve{" "}
                  <span className="text-white">Otomasyon</span>
                </h1>
                <p className="mt-2 text-sm tracking-[0.12em] text-white/50">
                  Web · Mail · Otomasyon
                </p>
              </motion.div>

              {/* Loading bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
                className="mt-10 h-[2px] w-32 origin-left rounded-full bg-gradient-to-r from-brand/40 via-brand to-brand/40"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <motion.div
        initial={showSplash ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
