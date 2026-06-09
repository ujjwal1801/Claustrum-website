"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./AnimationWrapper";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Build scalable web platforms, SaaS products, and enterprise applications tailored to your business requirements and growth trajectory.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "AI & Machine Learning",
    description:
      "AI agents, intelligent automation, predictive systems, smart workflows, and seamless AI integrations that transform how your business operates.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: "Cloud & DevOps",
    description:
      "AWS architecture, infrastructure automation, CI/CD pipelines, container orchestration, and cloud cost optimization for peak efficiency.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: "Product Engineering",
    description:
      "End-to-end product development from ideation and architecture through launch and iteration — delivering products that resonate with users.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Web Applications",
    description:
      "Modern, performant web applications using Next.js, React, and TypeScript — optimized for speed, accessibility, and search engine visibility.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Mobile Applications",
    description:
      "Cross-platform and native mobile solutions that extend your digital presence, engage users, and drive business results on every device.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "Backend & APIs",
    description:
      "Robust API architectures, microservices, third-party integrations, and scalable backend systems built with Django, Node.js, and Python.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Technology Consulting",
    description:
      "Architecture reviews, technology audits, modernization roadmaps, and scaling strategies from experienced engineers who understand business context.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center max-w-3xl mx-auto">
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-bold text-navy font-display tracking-tight"
          >
            Comprehensive Technology Services
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            From initial concept to production deployment, we provide the
            engineering expertise your business needs to build, launch, and
            scale digital products.
          </p>
        </FadeUp>

        <StaggerContainer className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="group relative bg-white rounded-2xl p-6 ring-1 ring-slate-200/60 hover:shadow-lg hover:ring-accent/20 transition-all duration-300 h-full flex flex-col">
                <div className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-accent-light/60 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy font-display">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 flex-1">
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
