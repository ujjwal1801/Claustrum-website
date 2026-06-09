"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const models = [
  {
    title: "Project-Based Delivery",
    description:
      "End-to-end project execution with defined scope, timeline, and deliverables. Ideal for new products, platform builds, and digital transformation initiatives.",
    features: [
      "Fixed scope and timeline",
      "Dedicated project manager",
      "Regular milestone reviews",
      "Full documentation and handoff",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: "Dedicated Development Teams",
    description:
      "An extension of your engineering organization. Skilled developers who integrate with your workflows, tools, and culture for sustained velocity.",
    features: [
      "Scalable team size",
      "Your tools and processes",
      "Daily standups and collaboration",
      "Long-term partnership model",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Technology Consulting",
    description:
      "Strategic advisory and architecture guidance for organizations navigating complex technology decisions, modernization, or scaling challenges.",
    features: [
      "Architecture reviews",
      "Technology audits",
      "Scaling strategy",
      "Vendor-neutral guidance",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
];

export function EngagementModels() {
  return (
    <section
      id="engagement"
      className="relative py-24 lg:py-32"
      aria-labelledby="engagement-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center max-w-3xl mx-auto">
          <h2
            id="engagement-heading"
            className="text-3xl sm:text-4xl font-bold text-navy font-display tracking-tight"
          >
            Flexible Engagement Models
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Choose the partnership model that fits your project requirements,
            timeline, and organizational needs.
          </p>
        </FadeUp>

        <StaggerContainer className="mt-16 grid lg:grid-cols-3 gap-8">
          {models.map((model) => (
            <StaggerItem key={model.title}>
              <div className="group relative bg-white rounded-2xl p-8 ring-1 ring-slate-200/60 hover:shadow-lg hover:ring-accent/20 transition-all duration-300 h-full flex flex-col">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-accent-light/60 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {model.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy font-display">
                  {model.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 flex-1">
                  {model.description}
                </p>
                <ul className="mt-6 space-y-2.5" role="list">
                  {model.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-slate-700"
                    >
                      <svg
                        className="h-4 w-4 text-accent flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
