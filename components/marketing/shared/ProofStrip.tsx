interface ProofMetric {
  value: string;
  label: string;
}

export function ProofStrip({
  metrics,
  className
}: {
  metrics?: ProofMetric[];
  className?: string;
}) {
  const items =
    metrics ??
    [
      { value: "99.95%", label: "Service uptime target" },
      { value: "Real-time", label: "Ledger reconciliation" },
      { value: "Role-based", label: "Access and controls" },
      { value: "Multi-tenant", label: "Platform architecture" }
    ];

  return (
    <div className={className}>
      <div className="border-t border-slate-100 bg-gradient-to-r from-slate-50 via-white to-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-0 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col items-center py-6 text-center ${i < items.length - 1 ? "border-r border-slate-100" : ""}`}
            >
              <p className="text-xl font-bold text-adash-deep md:text-2xl">{item.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
