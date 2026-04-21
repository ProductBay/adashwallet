import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";

const explore = [
  { href: "/platform", label: "Platform" },
  { href: "/customers", label: "Customers" },
  { href: "/merchants", label: "Merchants" },
  { href: "/party-pay", label: "Party Pay" },
  { href: "/merchant-lite", label: "Merchant Lite" },
  { href: "/tourist", label: "Tourist" }
];

const company = [
  { href: "/about", label: "About" },
  { href: "/security", label: "Security" },
  { href: "/faq", label: "FAQ" }
];

const legal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" }
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-adash-deep">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 animate-blob rounded-full bg-emerald-500/[0.08] blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-96 w-96 animate-blob rounded-full bg-violet-500/[0.08] blur-3xl animation-delay-2000" />
        <div className="absolute inset-0 bg-dot-grid-light opacity-[0.06]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr_0.6fr_0.6fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/adashpay-logo.png"
                alt="A'Dash Pay"
                width={260}
                height={70}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              A Caribbean fintech and commerce platform developed by{" "}
              <Link
                href="https://adash.technology"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-emerald-400 transition-colors hover:text-emerald-300"
              >
                A&apos;Dash Technologies Group
              </Link>{" "}
              for customers, merchants, events, tourists, and platform operators.
            </p>
            <div className="mt-6 flex gap-3">
              {["🇹🇹", "🇯🇲", "🇧🇧", "🇬🇾"].map((flag) => (
                <span key={flag} className="text-lg" title="Caribbean">{flag}</span>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Explore</p>
            <ul className="mt-5 flex flex-col gap-3">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href as Route}
                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Company</p>
            <ul className="mt-5 flex flex-col gap-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href as Route}
                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Legal</p>
            <ul className="mt-5 flex flex-col gap-3">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href as Route}
                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-slate-700/60 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} A&apos;Dash Technologies Group. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-soft" />
            <p className="text-sm text-slate-500">Platform operational</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
