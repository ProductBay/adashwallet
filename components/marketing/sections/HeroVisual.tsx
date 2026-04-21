"use client";

import { motion } from "framer-motion";

const floatingCards = [
  {
    label: "Customer",
    sublabel: "Payment sent",
    amount: "$42.00",
    icon: "💳",
    color: "from-emerald-400 to-teal-500",
    className: "absolute top-6 left-4 w-48",
    delay: 0
  },
  {
    label: "Merchant",
    sublabel: "Sale confirmed",
    amount: "+$18.50",
    icon: "🏪",
    color: "from-violet-500 to-purple-600",
    className: "absolute top-28 right-4 w-52",
    delay: 0.15
  },
  {
    label: "Party Pay",
    sublabel: "Event live",
    amount: "412 guests",
    icon: "🎉",
    color: "from-amber-400 to-orange-500",
    className: "absolute bottom-36 left-8 w-48",
    delay: 0.3
  }
];

export function HeroVisual() {
  return (
    <div className="relative min-h-[580px]">
      {/* Main card backdrop */}
      <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
        {/* Blobs inside visual */}
        <div className="absolute -top-16 -right-16 h-64 w-64 animate-blob rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-64 w-64 animate-blob rounded-full bg-violet-300/15 blur-3xl animation-delay-2000" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/50 rounded-[2.5rem]" />
        <div className="absolute inset-0 bg-dot-grid opacity-50 rounded-[2.5rem]" />
        <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-slate-200/80" />
      </div>

      {/* Central phone mockup */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-44 rounded-[2.5rem] bg-slate-900 p-2.5 shadow-2xl shadow-slate-900/30 ring-4 ring-white/80">
          {/* Notch */}
          <div className="mx-auto mb-2 h-4 w-20 rounded-full bg-slate-800" />
          {/* Screen */}
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-slate-50 to-white">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-4">
              <p className="text-[9px] font-semibold uppercase tracking-widest text-emerald-100">A&apos;Dash Wallet</p>
              <p className="mt-1 text-xl font-bold text-white">$1,284.50</p>
              <p className="text-[9px] text-emerald-200">Available balance</p>
            </div>
            {/* Transactions */}
            <div className="px-3 py-3 space-y-2">
              {[
                { icon: "🏪", label: "Merchant", amt: "-$18.50", color: "text-rose-500" },
                { icon: "👤", label: "Transfer", amt: "+$60.00", color: "text-emerald-600" },
                { icon: "🎉", label: "Event", amt: "-$25.00", color: "text-rose-500" }
              ].map((tx) => (
                <div key={tx.label} className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs">{tx.icon}</div>
                  <div className="flex-1">
                    <div className="h-1.5 w-12 rounded-full bg-slate-200" />
                    <div className="mt-1 h-1 w-8 rounded-full bg-slate-100" />
                  </div>
                  <p className={`text-[10px] font-bold ${tx.color}`}>{tx.amt}</p>
                </div>
              ))}
            </div>
            {/* Bottom nav */}
            <div className="flex items-center justify-around border-t border-slate-100 px-3 py-3">
              {["💳", "📊", "⚙️"].map((icon) => (
                <div key={icon} className="text-sm">{icon}</div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating role cards */}
      {floatingCards.map((card) => (
        <motion.div
          key={card.label}
          className={card.className}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: card.delay }}
          whileHover={{ y: -6, scale: 1.03 }}
        >
          <div className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-slate-100">
            <div className={`flex items-center gap-2.5 bg-gradient-to-r ${card.color} px-4 py-2.5`}>
              <span className="text-sm">{card.icon}</span>
              <p className="text-xs font-bold text-white">{card.label}</p>
            </div>
            <div className="px-4 py-3">
              <p className="text-[10px] text-slate-400">{card.sublabel}</p>
              <p className="mt-0.5 text-sm font-bold text-slate-800">{card.amount}</p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Bottom enterprise badge */}
      <motion.div
        className="absolute bottom-8 right-6 z-20 rounded-2xl border border-emerald-100 bg-white px-5 py-4 shadow-card"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500">
            <span className="text-sm">⚡</span>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Multi-role</p>
            <p className="text-sm font-semibold text-adash-deep">One engine. Many flows.</p>
          </div>
        </div>
      </motion.div>

      {/* Floating stats dot */}
      <motion.div
        className="absolute left-6 bottom-16 z-20 flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-card ring-1 ring-slate-100"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-soft" />
        <p className="text-xs font-semibold text-slate-600">Platform live</p>
      </motion.div>
    </div>
  );
}
