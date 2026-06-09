"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const differentiators = [
  {
    title: "Engineering First",
    description:
      "Every solution is designed with long-term scalability, maintainability, and performance in mind. We write code that future engineers will thank you for.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.19A.6.6 0 015.75 11.5V3.49a.6.6 0 01.286-.48l5.384-3.19a.6.6 0 01.573 0l5.384 3.19a.6.6 0 01.286.48v8.01a.6.6 0 01-.286.48l-5.384 3.19a.6.6 0 01-.573 0z" />
      </svg>
    ),
  },
  {
    title: "AI Ready",
    description:
      "Practical AI implementation focused on business outcomes — not hype. We help you identify where AI creates real value and build systems that deliver it.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "Cloud Native",
    description:
      "Built on modern cloud architecture patterns — containerized, auto-scaling, and infrastructure-as-code from the ground up for reliability at any scale.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: "Business Focused",
    description:
      "Technology aligned with measurable business goals. We obsess over outcomes, not outputs — ensuring every line of code drives value for your organization.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    title: "Transparent Delivery",
    description:
      "Clear communication, predictable timelines, and full visibility into progress. No black boxes — you see exactly what's being built and why.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Security Conscious",
    description:
      "Security best practices woven into every layer — from secure coding standards and dependency management to infrastructure hardening and compliance.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export function WhyClaustrum() {
  return (
    <section
      id="why-claustrum"
      className="relative py-24 lg:py-32"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center max-w-3xl mx-auto">
          <h2
            id="why-heading"
            className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight"
          >
            Why Claustrum
          </h2>
          <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
            We combine deep engineering expertise with a pragmatic approach to
            technology — delivering solutions that work in the real world, not
            just in demos.
          </p>
        </FadeUp>

        <StaggerContainer className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item) => (
            <StaggerItem key={item.title}>
              <div className="relative bg-[#18181B] rounded-2xl p-8 ring-1 ring-zinc-800/60 hover:shadow-lg hover:shadow-accent/5 hover:ring-accent/30 transition-all duration-300 h-full">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-accent/10 text-accent">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white font-display">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
