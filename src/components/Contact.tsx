"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "./AnimationWrapper";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  details: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  details?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!data.details.trim()) errors.details = "Please describe your project";
  return errors;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    details: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-surface"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeUp>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-bold text-navy font-display tracking-tight"
            >
              Start a Conversation
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Tell us about your project or challenge. We&apos;ll respond within
              one business day with insights on how we can help.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-accent-light/60 flex items-center justify-center text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">Email</p>
                  <a
                    href="mailto:hello@claustrum.tech"
                    className="text-sm text-slate-600 hover:text-accent transition-colors"
                  >
                    hello@claustrum.tech
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-accent-light/60 flex items-center justify-center text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">Location</p>
                  <p className="text-sm text-slate-600">India</p>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-8 ring-1 ring-slate-200/60 text-center"
                  role="status"
                >
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-6">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-navy font-display">
                    Thank You
                  </h3>
                  <p className="mt-2 text-slate-600">
                    We&apos;ve received your message and will be in touch within
                    one business day.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 ring-1 ring-slate-200/60 space-y-6"
                  noValidate
                  aria-label="Contact form"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors ${
                        errors.name
                          ? "border-red-400 ring-1 ring-red-400"
                          : "border-slate-200"
                      }`}
                      placeholder="Your full name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="mt-1.5 text-xs text-red-500"
                        role="alert"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                      placeholder="Company name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full rounded-lg border px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors ${
                          errors.email
                            ? "border-red-400 ring-1 ring-red-400"
                            : "border-slate-200"
                        }`}
                        placeholder="you@company.com"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="mt-1.5 text-xs text-red-500"
                          role="alert"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="details"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none ${
                        errors.details
                          ? "border-red-400 ring-1 ring-red-400"
                          : "border-slate-200"
                      }`}
                      placeholder="Tell us about your project, goals, and timeline..."
                      aria-required="true"
                      aria-invalid={!!errors.details}
                      aria-describedby={
                        errors.details ? "details-error" : undefined
                      }
                    />
                    {errors.details && (
                      <p
                        id="details-error"
                        className="mt-1.5 text-xs text-red-500"
                        role="alert"
                      >
                        {errors.details}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white hover:bg-accent-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    {submitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
