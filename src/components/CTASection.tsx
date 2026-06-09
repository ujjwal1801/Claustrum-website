"use client";

import { FadeUp } from "./AnimationWrapper";

export function CTASection() {
  return (
    <section
      className="relative py-24 lg:py-32 bg-navy overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight"
          >
            Ready to Build Something Exceptional?
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Let&apos;s discuss your next product, platform, or AI initiative.
            Our team is ready to help you turn ambitious ideas into
            production-grade software.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-accent-hover transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
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
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
