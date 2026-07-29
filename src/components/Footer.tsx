import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/claustrum-logo-mark.png";

const services = [
  "Custom Software Development",
  "AI & Machine Learning",
  "Cloud & DevOps",
  "Product Engineering",
  "Web Applications",
  "Mobile Applications",
  "Backend & APIs",
  "Technology Consulting",
];

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Why Us", href: "#why-claustrum" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#06060A]" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Claustrum Technologies Home"
            >
              <Image
                src={logo}
                alt="Claustrum Technologies"
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-zinc-500 leading-relaxed max-w-xs">
              Claustrum Technologies helps businesses design, build, modernize,
              and scale digital products through engineering excellence.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-zinc-500 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-zinc-500 hover:text-accent transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              <li>
                <a
                  href="mailto:contact@claustrum-tech.com"
                  className="text-sm text-zinc-500 hover:text-accent transition-colors"
                >
                  contact@claustrum-tech.com
                </a>
              </li>
              <li className="text-sm text-zinc-500">India</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800">
          <p className="text-sm text-zinc-600 text-center">
            &copy; {currentYear} Claustrum Technologies Private Limited. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
