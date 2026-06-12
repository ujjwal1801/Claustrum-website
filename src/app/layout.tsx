import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Claustrum Technologies — Software Engineering, AI & Cloud Solutions",
    template: "%s | Claustrum Technologies",
  },
  description:
    "Claustrum Technologies helps businesses design, build, modernize, and scale digital products through software engineering, cloud infrastructure, AI solutions, and technology consulting.",
  keywords: [
    "Software Development Company",
    "AI Development Company",
    "Cloud Consulting Services",
    "Product Engineering Services",
    "Technology Consulting",
    "Custom Software Development",
    "Enterprise Software Solutions",
    "AI Solutions Company",
  ],
  authors: [{ name: "Claustrum Technologies Private Limited" }],
  creator: "Claustrum Technologies",
  metadataBase: new URL("https://claustrum.tech"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://claustrum.tech",
    siteName: "Claustrum Technologies",
    title:
      "Claustrum Technologies — Software Engineering, AI & Cloud Solutions",
    description:
      "Claustrum Technologies helps businesses build scalable software, modern cloud infrastructure, and AI-powered solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Claustrum Technologies — Software Engineering, AI & Cloud Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Claustrum Technologies — Software Engineering, AI & Cloud Solutions",
    description:
      "Claustrum Technologies helps businesses build scalable software, modern cloud infrastructure, and AI-powered solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Claustrum Technologies Private Limited",
  url: "https://claustrum.tech",
  description:
    "Claustrum Technologies helps businesses design, build, modernize, and scale digital products through software engineering, cloud infrastructure, AI solutions, and technology consulting.",
  foundingDate: "2024",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "contact@claustrum-tech.com",
  },
  offers: {
    "@type": "AggregateOffer",
    itemOffered: [
      {
        "@type": "Service",
        name: "Custom Software Development",
        description:
          "Scalable web platforms, SaaS products, and enterprise applications.",
      },
      {
        "@type": "Service",
        name: "AI & Machine Learning Solutions",
        description:
          "AI agents, automation, predictive systems, and intelligent workflows.",
      },
      {
        "@type": "Service",
        name: "Cloud & DevOps",
        description:
          "Cloud architecture, infrastructure automation, CI/CD, and cost optimization.",
      },
      {
        "@type": "Service",
        name: "Product Engineering",
        description: "End-to-end product development from idea to launch.",
      },
      {
        "@type": "Service",
        name: "Technology Consulting",
        description:
          "Architecture reviews, modernization, and scaling strategy.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
