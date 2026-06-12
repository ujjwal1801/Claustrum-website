"use client";

import { StaggerContainer, StaggerItem } from "./AnimationWrapper";
import { FadeUp } from "./AnimationWrapper";

const capabilities = [
  {
    title: "Modern Tech Stack",
    description:
      "We leverage the latest frameworks and tools — selecting the best fit for each project — delivering solutions that are fast, maintainable, and future-proof.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    title: "Cloud Expertise",
    description:
      "From cloud architecture and container orchestration to CI/CD pipelines, we build and manage infrastructure that scales elastically with demand.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
      </svg>
    ),
  },
  {
    title: "AI Integration",
    description:
      "We implement practical AI solutions — from intelligent automation and predictive analytics to custom AI agents — that deliver measurable business outcomes.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
        />
      </svg>
    ),
  },
  {
    title: "Product Delivery",
    description:
      "End-to-end product engineering from concept to launch. We combine strategy, design, and engineering to build products your users will love.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
      </svg>
    ),
  },
];

export function Trust() {
  return (
    <section
      id="trust"
      className="relative py-24 lg:py-32 bg-surface"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center max-w-3xl mx-auto">
          <h2
            id="trust-heading"
            className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight"
          >
            Trusted Engineering for Modern Businesses
          </h2>
          <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
            We bring deep technical expertise across the full stack — from
            modern frontend frameworks and scalable backend systems to cloud
            infrastructure and applied AI.
          </p>
        </FadeUp>

        <StaggerContainer className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap) => (
            <StaggerItem key={cap.title}>
              <div className="group relative bg-[#18181B] rounded-2xl p-8 ring-1 ring-zinc-800/60 hover:shadow-lg hover:shadow-accent/5 hover:ring-accent/30 transition-all duration-300 h-full">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-[#09090B] transition-colors duration-300">
                  {cap.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white font-display">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {cap.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
