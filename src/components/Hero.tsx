"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroVisualization } from "./HeroVisualization";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const animate = !shouldReduceMotion;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      aria-label="Introduction"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#09090B] via-[#09090B] to-[#0A1A2A]"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-950/10 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={animate ? { opacity: 0, y: 20 } : {}}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent ring-1 ring-accent/20">
                Software Engineering &amp; AI Solutions
              </span>
            </motion.div>

            <motion.h1
              className="mt-8 text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white font-display leading-[1.1]"
              initial={animate ? { opacity: 0, y: 20 } : {}}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              Building Intelligent Software That Drives Business Growth
            </motion.h1>

            <motion.p
              className="mt-6 text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-xl"
              initial={animate ? { opacity: 0, y: 20 } : {}}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              Claustrum Technologies helps businesses build scalable software,
              modern cloud infrastructure, and AI-powered solutions.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              initial={animate ? { opacity: 0, y: 20 } : {}}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-[#09090B] shadow-[0_0_20px_rgba(54,158,234,0.25)] hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(54,158,234,0.35)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B]"
              >
                Schedule a Consultation
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-800 px-6 py-3.5 text-base font-semibold text-zinc-200 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B]"
              >
                View Services
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:block relative"
            initial={animate ? { opacity: 0, scale: 0.95 } : {}}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <div className="relative w-full aspect-[4/3]">
              <HeroVisualization />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
