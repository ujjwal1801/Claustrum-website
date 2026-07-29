import { FadeUp } from "./AnimationWrapper";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-surface"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight"
          >
            Start a Conversation
          </h2>
          <p className="mt-4 text-lg text-zinc-400 leading-relaxed mx-auto max-w-xl">
            Tell us about your project or challenge. Reach out and we&apos;ll
            respond within one business day with insights on how we can help.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <a
              href="mailto:contact@claustrum-tech.com"
              className="group flex flex-col items-center gap-4 rounded-2xl bg-[#18181B] p-8 ring-1 ring-zinc-800/60 hover:ring-accent/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Email</p>
                <p className="mt-1 text-sm text-zinc-400 group-hover:text-accent transition-colors">
                  contact@claustrum-tech.com
                </p>
              </div>
            </a>

            <div className="flex flex-col items-center gap-4 rounded-2xl bg-[#18181B] p-8 ring-1 ring-zinc-800/60">
              <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
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
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Location</p>
                <p className="mt-1 text-sm text-zinc-400">India</p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
