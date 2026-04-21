import type React from "react";
import { cn } from "@/lib/utils";

/* ─── Illustration scenes ─────────────────────────────── */

function CustomerPayingScene() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700">
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-teal-300/20 blur-3xl" />
      <div className="absolute inset-0 bg-dot-grid-light opacity-40" />
      {/* NFC rings */}
      {[90, 150, 210].map((size, i) => (
        <div key={i} className="absolute rounded-full border-2 border-white/15" style={{ width: size, height: size }} />
      ))}
      {/* Phone */}
      <div className="relative z-10">
        <div className="w-40 rounded-[2.5rem] bg-slate-900 p-2.5 shadow-2xl ring-4 ring-white/20">
          <div className="mx-auto mb-2 h-4 w-20 rounded-full bg-slate-800" />
          <div className="rounded-[2rem] bg-white p-4">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg">
                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">Payment Sent</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">$42.00</p>
              <div className="mt-2 rounded-xl bg-emerald-50 px-2 py-1.5">
                <p className="text-[9px] font-semibold text-emerald-700">via A&apos;Dash Wallet</p>
              </div>
              <div className="mt-3 flex gap-1 px-1">
                <div className="h-1.5 flex-1 rounded-full bg-emerald-400" />
                <div className="h-1.5 flex-1 rounded-full bg-emerald-300" />
                <div className="h-1.5 w-[30%] rounded-full bg-emerald-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Coins */}
      <div className="absolute top-8 left-12 flex h-11 w-11 items-center justify-center rounded-full bg-amber-400 text-lg font-bold text-white shadow-xl ring-4 ring-amber-300/40">$</div>
      <div className="absolute bottom-10 right-12 flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-white shadow-lg ring-4 ring-yellow-300/40">$</div>
      <div className="absolute top-1/2 right-8 flex h-7 w-7 items-center justify-center rounded-full bg-amber-300 text-xs font-bold text-white shadow-md">$</div>
      <div className="absolute top-5 right-20 text-xl text-yellow-200">✦</div>
      <div className="absolute bottom-8 left-20 text-2xl text-white/50">✦</div>
      <div className="absolute top-1/3 left-8 text-lg text-emerald-200">✦</div>
    </div>
  );
}

function MerchantSellingScene() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500">
      <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-yellow-300/30 blur-3xl" />
      <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-rose-300/25 blur-3xl" />
      <div className="absolute inset-0 bg-dot-grid-light opacity-30" />
      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Store front */}
        <div className="rounded-3xl bg-white/90 p-5 shadow-2xl backdrop-blur-sm">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Merchant</p>
              <p className="text-sm font-bold text-slate-800">Island Store</p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-md">
              <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          {/* QR code grid */}
          <div className="grid grid-cols-7 gap-0.5 rounded-xl bg-slate-50 p-3">
            {Array.from({ length: 49 }).map((_, i) => (
              <div key={i} className={cn("h-2.5 w-2.5 rounded-sm", [0,1,2,5,6,7,9,14,15,16,18,19,20,42,43,44,47,48,35,36,37,38,39,40,41].includes(i) ? "bg-slate-800" : "bg-transparent")} />
            ))}
          </div>
          <p className="mt-2 text-center text-[10px] font-medium text-slate-500">Scan to pay</p>
        </div>
        {/* Sale badge */}
        <div className="rounded-2xl bg-white/90 px-5 py-2.5 shadow-lg backdrop-blur-sm">
          <p className="text-xs font-bold text-slate-800">Latest sale: <span className="text-emerald-600">+$18.50</span></p>
        </div>
      </div>
      {/* Floating elements */}
      <div className="absolute top-8 right-12 rounded-xl bg-white/80 px-3 py-2 text-xs font-semibold text-slate-700 shadow-lg backdrop-blur-sm">
        📦 32 products
      </div>
      <div className="absolute bottom-10 left-10 text-2xl">🏪</div>
      <div className="absolute top-10 left-10 text-xl text-white/60">✦</div>
      <div className="absolute bottom-8 right-16 text-2xl text-white/40">✦</div>
    </div>
  );
}

function DashboardUIScene() {
  const bars = [65, 80, 45, 90, 70, 55, 85];
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-adash-navy">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="absolute inset-0 bg-dot-grid-light opacity-20" />
      <div className="relative z-10 w-72">
        {/* Browser frame */}
        <div className="overflow-hidden rounded-2xl bg-slate-800 shadow-2xl ring-1 ring-white/10">
          {/* Title bar */}
          <div className="flex items-center gap-2 bg-slate-700/80 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="mx-auto h-3 w-36 rounded-full bg-slate-600" />
          </div>
          {/* Dashboard content */}
          <div className="p-4">
            {/* Stats row */}
            <div className="mb-4 grid grid-cols-3 gap-2">
              {[
                { label: "Revenue", value: "$48.2K", color: "text-emerald-400" },
                { label: "Txns", value: "1,247", color: "text-violet-400" },
                { label: "Merchants", value: "89", color: "text-sky-400" }
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl bg-slate-700/60 p-2.5 text-center">
                  <p className={cn("text-sm font-bold", stat.color)}>{stat.value}</p>
                  <p className="mt-0.5 text-[9px] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
            {/* Bar chart */}
            <div className="rounded-xl bg-slate-700/40 p-3">
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-slate-400">Weekly volume</p>
              <div className="flex items-end gap-1 h-16">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm"
                    style={{
                      height: `${h}%`,
                      background: `linear-gradient(to top, ${["#10b981","#7c3aed","#0ea5e9","#10b981","#f59e0b","#7c3aed","#10b981"][i]}, ${["#14b8a6","#a855f7","#6366f1","#34d399","#fbbf24","#c084fc","#34d399"][i]})`
                    }}
                  />
                ))}
              </div>
              <div className="mt-1.5 flex justify-between">
                {["M","T","W","T","F","S","S"].map((d) => (
                  <p key={d} className="flex-1 text-center text-[8px] text-slate-500">{d}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-8 left-10 text-lg text-violet-400/60">✦</div>
      <div className="absolute bottom-10 right-12 text-xl text-emerald-400/50">✦</div>
    </div>
  );
}

function EventScene() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-violet-700 via-purple-800 to-indigo-900">
      <div className="absolute -top-16 left-1/4 h-64 w-64 rounded-full bg-rose-500/25 blur-3xl" />
      <div className="absolute -bottom-16 right-1/4 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl" />
      <div className="absolute inset-0 bg-dot-grid-light opacity-20" />
      {/* Stage spotlights */}
      <div className="absolute top-0 left-1/4 h-full w-24 origin-top -rotate-12 bg-gradient-to-b from-yellow-300/25 via-yellow-300/10 to-transparent blur-xl" />
      <div className="absolute top-0 right-1/4 h-full w-24 origin-top rotate-12 bg-gradient-to-b from-rose-400/25 via-rose-400/10 to-transparent blur-xl" />
      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Event card */}
        <div className="rounded-3xl bg-white/10 p-5 shadow-2xl backdrop-blur-md ring-1 ring-white/20">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 text-xl shadow-lg">
              🎉
            </div>
            <div>
              <p className="text-xs font-bold text-white">Party Pay</p>
              <p className="text-[10px] text-white/60">Event Commerce</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Vendors", value: "24", icon: "🏪" },
              { label: "Guests", value: "412", icon: "👥" },
              { label: "Sales", value: "$6.2K", icon: "💰" },
              { label: "Live", value: "Active", icon: "🔴" }
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-white/10 p-2.5 text-center backdrop-blur-sm">
                <span className="text-lg">{item.icon}</span>
                <p className="mt-0.5 text-sm font-bold text-white">{item.value}</p>
                <p className="text-[9px] text-white/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Music notes & confetti */}
        <div className="flex gap-3">
          {["🎵","🎶","🎸","⭐"].map((e) => (
            <div key={e} className="rounded-full bg-white/15 p-2 text-sm backdrop-blur-sm">{e}</div>
          ))}
        </div>
      </div>
      <div className="absolute top-8 right-10 text-2xl text-white/40">✦</div>
      <div className="absolute bottom-8 left-10 text-xl text-rose-300/60">✦</div>
    </div>
  );
}

function TouristScene() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-sky-400 via-teal-500 to-emerald-600">
      <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-teal-200/25 blur-3xl" />
      <div className="absolute inset-0 bg-dot-grid-light opacity-25" />
      {/* Sun */}
      <div className="absolute top-8 right-16 h-16 w-16 rounded-full bg-gradient-to-br from-yellow-300 to-amber-400 shadow-xl" />
      {/* Clouds */}
      <div className="absolute top-12 left-8 flex gap-1 opacity-70">
        <div className="h-6 w-12 rounded-full bg-white" />
        <div className="-ml-4 h-8 w-14 rounded-full bg-white" />
        <div className="-ml-3 h-5 w-10 rounded-full bg-white" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Tourist payment card */}
        <div className="rounded-3xl bg-white/90 p-5 shadow-2xl backdrop-blur-sm">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-teal-500 text-xl shadow-md">
              ✈️
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Tourist Wallet</p>
              <p className="text-[10px] text-slate-500">Caribbean Explorer</p>
            </div>
            <div className="ml-auto rounded-full bg-emerald-100 px-2 py-1">
              <p className="text-[9px] font-semibold text-emerald-700">Active</p>
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-r from-sky-500 to-teal-600 p-4 text-white shadow-lg">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-sky-100">Balance</p>
            <p className="text-2xl font-bold">$240.00</p>
            <p className="mt-1 text-[9px] text-sky-200">•••• •••• •••• 4821</p>
          </div>
          <div className="mt-3 flex justify-between text-center">
            {["🏖️ Beach", "🍹 Dining", "🛍️ Shopping"].map((item) => (
              <div key={item} className="rounded-xl bg-slate-50 px-2 py-1.5">
                <p className="text-[9px] font-medium text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Palm trees */}
      <div className="absolute bottom-0 left-4 text-5xl">🌴</div>
      <div className="absolute bottom-0 right-4 text-4xl">🌴</div>
      <div className="absolute top-8 left-1/3 text-lg text-white/50">✦</div>
    </div>
  );
}

function SocialSellerScene() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-700">
      <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-fuchsia-300/25 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-violet-300/20 blur-3xl" />
      <div className="absolute inset-0 bg-dot-grid-light opacity-25" />
      <div className="relative z-10 flex flex-col items-center gap-3">
        {/* Social seller card */}
        <div className="rounded-3xl bg-white/10 p-5 shadow-2xl backdrop-blur-md ring-1 ring-white/20">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-500 shadow-md" />
            <div>
              <p className="text-xs font-bold text-white">@islandcraft</p>
              <p className="text-[10px] text-white/60">Merchant Lite</p>
            </div>
            <div className="ml-auto rounded-full bg-emerald-400/20 px-2 py-1 ring-1 ring-emerald-400/40">
              <p className="text-[9px] font-semibold text-emerald-300">Verified</p>
            </div>
          </div>
          <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
            <p className="text-[10px] text-white/70">Payment link</p>
            <p className="text-sm font-bold text-white">adash.pay/islandcraft</p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl bg-white/10 p-2.5 text-center">
              <p className="text-sm font-bold text-white">$1.8K</p>
              <p className="text-[9px] text-white/60">This week</p>
            </div>
            <div className="rounded-xl bg-white/10 p-2.5 text-center">
              <p className="text-sm font-bold text-white">143</p>
              <p className="text-[9px] text-white/60">Sales</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          {["💜 Share","🔗 PayTag","📲 Link"].map((item) => (
            <div key={item} className="rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur-sm">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-8 left-10 text-xl text-white/40">✦</div>
      <div className="absolute bottom-10 right-10 text-2xl text-fuchsia-300/50">✦</div>
    </div>
  );
}

function GenericScene({ label }: { label: string }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-700 via-slate-800 to-adash-navy">
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl" />
      <div className="absolute inset-0 bg-dot-grid-light opacity-20" />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-2xl">
          <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
          </svg>
        </div>
        <div className="rounded-2xl bg-white/10 px-5 py-3 text-center backdrop-blur-md ring-1 ring-white/20">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/80">{label}</p>
          <p className="mt-1 text-xs text-white/50">A&apos;Dash Platform</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main component ──────────────────────────────────── */

const sceneMap: Record<string, () => React.ReactElement> = {
  "customer paying": () => <CustomerPayingScene />,
  "merchant selling": () => <MerchantSellingScene />,
  "dashboard ui": () => <DashboardUIScene />,
  "event scene": () => <EventScene />,
  "tourist payment": () => <TouristScene />,
  "social seller": () => <SocialSellerScene />
};

export function ImagePlaceholder({
  label,
  className
}: {
  label: string;
  className?: string;
}) {
  const key = label.toLowerCase();
  const SceneComponent = sceneMap[key];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] shadow-soft",
        "min-h-[280px]",
        className
      )}
    >
      {SceneComponent ? (
        <SceneComponent />
      ) : (
        <GenericScene label={label} />
      )}
    </div>
  );
}

