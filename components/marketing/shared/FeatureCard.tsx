import Link from "next/link";
import type { Route } from "next";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  className?: string;
  colorVariant?: number;
}

const iconGradients = [
  "from-emerald-400 to-teal-500",
  "from-violet-500 to-purple-600",
  "from-sky-400 to-indigo-500",
  "from-amber-400 to-orange-500",
  "from-rose-400 to-pink-500",
  "from-lime-400 to-emerald-500"
];

const iconGlows = [
  "shadow-emerald-200",
  "shadow-violet-200",
  "shadow-sky-200",
  "shadow-amber-200",
  "shadow-rose-200",
  "shadow-lime-200"
];

export function FeatureCard({ title, description, icon: Icon, href, className, colorVariant = 0 }: FeatureCardProps) {
  const gradientClass = iconGradients[colorVariant % iconGradients.length];
  const glowClass = iconGlows[colorVariant % iconGlows.length];

  const content = (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-soft",
        className
      )}
    >
      {/* Subtle gradient top-right corner accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-bl-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle at top right, rgba(16,185,129,0.06), transparent 70%)` }}
      />
      <div className={cn(
        "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg",
        gradientClass,
        glowClass
      )}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-adash-deep">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
      {href ? (
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      ) : null}
    </div>
  );

  return href ? <Link href={href as Route}>{content}</Link> : content;
}

