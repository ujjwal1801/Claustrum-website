"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We analyze your business goals, technical landscape, and user needs to define a clear project scope and success criteria.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We architect the optimal technical approach — selecting the right stack, defining system boundaries, and planning for scale.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We design intuitive interfaces and robust system architectures that balance user experience with engineering excellence.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Our engineering team builds your solution with clean code, comprehensive testing, and continuous integration from day one.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Rigorous quality assurance across automated tests, performance benchmarks, security audits, and user acceptance testing.",
  },
  {
    number: "06",
    title: "Deployment",
    description:
      "Zero-downtime deployments with infrastructure automation, monitoring, and rollback strategies for production confidence.",
  },
  {
    number: "07",
    title: "Growth",
    description:
      "Ongoing optimization, feature development, and technical support to evolve your product alongside your business.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative py-24 lg:py-32 bg-surface"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center max-w-3xl mx-auto">
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl font-bold text-navy font-display tracking-tight"
          >
            Our Engineering Process
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            A proven methodology that transforms complex requirements into
            reliable, production-grade software — with transparency at every
            stage.
          </p>
        </FadeUp>

        <div className="mt-16 relative">
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200"
            aria-hidden="true"
          />

          <StaggerContainer className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <StaggerItem key={step.number}>
                  <div
                    className={`relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center ${
                      index > 0 ? "lg:mt-12" : ""
                    }`}
                  >
                    <div
                      className="hidden lg:flex absolute left-1/2 -translate-x-1/2 h-10 w-10 items-center justify-center rounded-full bg-accent text-white text-sm font-bold font-display z-10 ring-4 ring-white"
                      aria-hidden="true"
                    >
                      {step.number}
                    </div>

                    <div
                      className={`${
                        isLeft
                          ? "lg:col-start-1 lg:text-right lg:pr-16"
                          : "lg:col-start-2 lg:pl-16"
                      }`}
                    >
                      <div className="bg-white rounded-2xl p-6 ring-1 ring-slate-200/60">
                        <div className="flex items-center gap-3 lg:hidden mb-3">
                          <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-accent text-white text-xs font-bold font-display">
                            {step.number}
                          </span>
                          <h3 className="text-lg font-semibold text-navy font-display">
                            {step.title}
                          </h3>
                        </div>
                        <h3 className="hidden lg:block text-lg font-semibold text-navy font-display">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {isLeft ? (
                      <div className="hidden lg:block lg:col-start-2" />
                    ) : (
                      <div className="hidden lg:block lg:col-start-1 lg:row-start-1" />
                    )}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
