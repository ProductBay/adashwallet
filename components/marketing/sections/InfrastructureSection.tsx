import { infrastructureFeatures } from "@/lib/data/site";
import { ImagePlaceholder } from "@/components/marketing/shared/ImagePlaceholder";
import { Reveal } from "@/components/marketing/shared/Reveal";
import { cn } from "@/lib/utils";

const cardGradients = [
  "from-violet-500 to-purple-600",
  "from-sky-400 to-indigo-500",
  "from-emerald-400 to-teal-500",
  "from-amber-400 to-orange-500"
];

export function InfrastructureSection() {
  return (
    <section className="relative overflow-hidden bg-adash-deep py-20 md:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 animate-blob rounded-full bg-emerald-500/[0.12] blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-96 w-96 animate-blob rounded-full bg-violet-500/[0.10] blur-3xl animation-delay-2000" />
        <div className="absolute inset-0 bg-dot-grid-light opacity-[0.06]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-violet-400">
            Infrastructure
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Trust is built into the system architecture.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-400 md:text-lg">
            A&apos;Dash Wallet translates deeper infrastructure into everyday simplicity by keeping controls, records, and movement logic aligned underneath the interface.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.92fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {infrastructureFeatures.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-700 bg-slate-800/80 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40">
                  <div className={cn(
                    "mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg",
                    cardGradients[index % cardGradients.length]
                  )}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <ImagePlaceholder label="dashboard UI" className="h-full min-h-[440px]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
