import Link from "next/link";
import type { Route } from "next";
import { ArrowUpRight } from "lucide-react";

interface ActionItem {
  href: string;
  label: string;
}

export function PageActionRail({
  title = "Next Step",
  subtitle = "Move from evaluation to execution with a focused action.",
  actions
}: {
  title?: string;
  subtitle?: string;
  actions: ActionItem[];
}) {
  return (
    <aside className="fixed right-6 top-1/2 z-30 hidden w-64 -translate-y-1/2 2xl:block">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-soft backdrop-blur-md">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-50">Action Rail</p>
          <p className="mt-1 text-sm font-semibold text-white">{title}</p>
        </div>
        <div className="px-4 py-4">
          <p className="text-xs leading-6 text-slate-500">{subtitle}</p>
          <div className="mt-4 flex flex-col gap-2">
            {actions.map((action) => (
              <Link
                key={action.href}
                href={action.href as Route}
                className="group flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition-all hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
              >
                {action.label}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
