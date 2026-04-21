import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { Button } from "@/components/ui/button";
import { GradientBackground } from "@/components/marketing/shared/GradientBackground";
import { ImagePlaceholder } from "@/components/marketing/shared/ImagePlaceholder";
import { ProofStrip } from "@/components/marketing/shared/ProofStrip";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  imageLabel,
  imageSrc,
  variant = "default"
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  imageLabel: string;
  imageSrc?: string;
  variant?: "default" | "event";
}) {
  return (
    <section
      className={`relative overflow-hidden pt-20 ${
        variant === "event" ? "bg-[linear-gradient(180deg,#f0fdf4_0%,#ffffff_55%,#f8fafc_100%)]" : ""
      }`}
    >
      <GradientBackground />
      <div className="mx-auto grid max-w-7xl gap-14 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
            {eyebrow}
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-adash-deep md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href={primaryCta.href as Route}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta ? (
              <Button asChild size="lg" variant="outline">
                <Link href={secondaryCta.href as Route}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
        {imageSrc ? (
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-100 via-white to-emerald-50 p-3 shadow-soft">
            <div className="overflow-hidden rounded-[1.6rem] bg-[#0d1725]">
              <Image
                src={imageSrc}
                alt={imageLabel}
                width={768}
                height={768}
                className="h-full min-h-[420px] w-full object-cover"
                priority
              />
            </div>
          </div>
        ) : (
          <ImagePlaceholder label={imageLabel} className="min-h-[420px]" />
        )}
      </div>
      <ProofStrip />
    </section>
  );
}
