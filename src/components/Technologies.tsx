"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./AnimationWrapper";

interface TechItem {
  name: string;
}

interface TechCategory {
  title: string;
  items: TechItem[];
}

const categories: TechCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Django" },
      { name: "Python" },
      { name: "Node.js" },
      { name: "FastAPI" },
    ],
  },
  {
    title: "Cloud",
    items: [
      { name: "AWS" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Terraform" },
    ],
  },
  {
    title: "Data",
    items: [
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "MongoDB" },
      { name: "Elasticsearch" },
    ],
  },
  {
    title: "AI",
    items: [
      { name: "OpenAI" },
      { name: "LangChain" },
      { name: "Vector DBs" },
      { name: "AI Agents" },
    ],
  },
];

export function Technologies() {
  return (
    <section
      id="technologies"
      className="relative py-24 lg:py-32 bg-surface"
      aria-labelledby="tech-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center max-w-3xl mx-auto">
          <h2
            id="tech-heading"
            className="text-3xl sm:text-4xl font-bold text-navy font-display tracking-tight"
          >
            Technologies We Work With
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            We choose the right tool for the job — not the trendiest. Our
            technology choices are driven by your requirements, team
            capabilities, and long-term maintainability.
          </p>
        </FadeUp>

        <StaggerContainer className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="bg-white rounded-2xl p-6 ring-1 ring-slate-200/60 h-full">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider font-display">
                  {category.title}
                </h3>
                <ul className="mt-4 space-y-3" role="list">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center gap-2.5 text-sm text-slate-700"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-accent/40 flex-shrink-0"
                        aria-hidden="true"
                      />
                      {item.name}
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
