import { cn } from "@/lib/utils";

type Variant = "default" | "violet" | "amber" | "sky" | "coral" | "dark";

interface GradientBackgroundProps {
  className?: string;
  variant?: Variant;
}

const blobSets: Record<Variant, { color: string; size: string; position: string; delay: string }[]> = {
  default: [
    { color: "bg-emerald-400/[0.13]", size: "h-[700px] w-[700px]", position: "-top-64 -left-64", delay: "" },
    { color: "bg-violet-400/[0.09]", size: "h-[550px] w-[550px]", position: "-top-20 -right-40", delay: "animation-delay-2000" },
    { color: "bg-sky-400/[0.08]", size: "h-[400px] w-[400px]", position: "bottom-0 left-1/3", delay: "animation-delay-4000" }
  ],
  violet: [
    { color: "bg-violet-400/[0.15]", size: "h-[650px] w-[650px]", position: "-top-48 -right-32", delay: "" },
    { color: "bg-purple-400/[0.09]", size: "h-[450px] w-[450px]", position: "bottom-0 -left-24", delay: "animation-delay-2000" },
    { color: "bg-emerald-300/[0.07]", size: "h-[300px] w-[300px]", position: "top-1/2 right-1/4", delay: "animation-delay-3000" }
  ],
  amber: [
    { color: "bg-amber-400/[0.14]", size: "h-[600px] w-[600px]", position: "-top-40 -right-24", delay: "" },
    { color: "bg-orange-400/[0.09]", size: "h-[450px] w-[450px]", position: "bottom-0 -left-16", delay: "animation-delay-2000" },
    { color: "bg-emerald-400/[0.08]", size: "h-[350px] w-[350px]", position: "top-1/3 right-1/3", delay: "animation-delay-4000" }
  ],
  sky: [
    { color: "bg-sky-400/[0.14]", size: "h-[650px] w-[650px]", position: "-top-48 -left-24", delay: "" },
    { color: "bg-indigo-400/[0.09]", size: "h-[450px] w-[450px]", position: "bottom-0 -right-16", delay: "animation-delay-2000" },
    { color: "bg-teal-400/[0.08]", size: "h-[300px] w-[300px]", position: "top-1/2 left-1/2", delay: "animation-delay-3000" }
  ],
  coral: [
    { color: "bg-rose-400/[0.13]", size: "h-[600px] w-[600px]", position: "-top-40 -left-20", delay: "" },
    { color: "bg-pink-400/[0.09]", size: "h-[450px] w-[450px]", position: "bottom-0 -right-20", delay: "animation-delay-2000" },
    { color: "bg-amber-400/[0.08]", size: "h-[350px] w-[350px]", position: "top-1/2 right-1/4", delay: "animation-delay-4000" }
  ],
  dark: [
    { color: "bg-emerald-500/[0.18]", size: "h-[700px] w-[700px]", position: "-top-64 -left-48", delay: "" },
    { color: "bg-violet-500/[0.15]", size: "h-[500px] w-[500px]", position: "-top-20 right-0", delay: "animation-delay-2000" },
    { color: "bg-sky-500/[0.12]", size: "h-[400px] w-[400px]", position: "bottom-0 left-1/3", delay: "animation-delay-4000" }
  ]
};

export function GradientBackground({ className, variant = "default" }: GradientBackgroundProps) {
  const blobs = blobSets[variant];
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
      aria-hidden="true"
    >
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={cn(
            "absolute animate-blob blur-3xl",
            blob.color,
            blob.size,
            blob.position,
            blob.delay
          )}
        />
      ))}
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-60" />
      {/* Floating accent dots */}
      <div className="absolute top-1/4 right-[15%] h-4 w-4 rounded-full bg-emerald-400/50 animate-float-slow animation-delay-1000" />
      <div className="absolute top-2/3 left-[12%] h-3 w-3 rounded-full bg-violet-400/40 animate-float-slow animation-delay-2000" />
      <div className="absolute bottom-1/4 right-1/3 h-2 w-2 rounded-full bg-amber-400/50 animate-float-slow animation-delay-3000" />
    </div>
  );
}

