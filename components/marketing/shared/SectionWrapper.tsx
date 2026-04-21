import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  eyebrow?: string;
  eyebrowColor?: string;
  title: string;
  titleClassName?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export function SectionWrapper({
  eyebrow,
  eyebrowColor,
  title,
  titleClassName,
  description,
  children,
  className,
  contentClassName
}: SectionWrapperProps) {
  return (
    <section className={cn("relative overflow-hidden py-20 md:py-28", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className={cn(
              "mb-4 text-sm font-semibold uppercase tracking-[0.24em]",
              eyebrowColor ?? "text-emerald-600"
            )}>
              {eyebrow}
            </p>
          ) : null}
          <h2 className={cn(
            "text-3xl font-semibold tracking-tight text-adash-deep md:text-5xl",
            titleClassName
          )}>
            {title}
          </h2>
          {description ? (
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{description}</p>
          ) : null}
        </div>
        <div className={cn("mt-12", contentClassName)}>{children}</div>
      </div>
    </section>
  );
}
