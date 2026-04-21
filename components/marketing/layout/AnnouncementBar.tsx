export function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden border-b border-emerald-200/60 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid-light opacity-20" />
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-bold uppercase tracking-widest text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse-soft" />
          New
        </span>
        <p className="text-sm font-medium text-white">
          Caribbean-first fintech infrastructure for customers, merchants, events, and operators.
        </p>
        <span className="hidden text-white/70 sm:inline">→</span>
      </div>
    </div>
  );
}
