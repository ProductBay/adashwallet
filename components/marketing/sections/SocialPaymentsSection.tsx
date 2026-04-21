import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Send, Split } from "lucide-react";
import { Reveal } from "@/components/marketing/shared/Reveal";
import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";

const splitHighlights = [
  "Split dinner, drinks, tabs, and event spend in a few taps",
  "Reduce awkward back-and-forth when groups are paying together",
  "Keep shared moments moving at restaurants, bars, and live events"
];

const walletHighlights = [
  "Send money directly between A'Dash wallets",
  "Share funds quickly with friends and family when plans change",
  "Make personal transfers feel as simple as the rest of the wallet"
];

export function SocialPaymentsSection() {
  return (
    <SectionWrapper
      eyebrow="Social Payments"
      eyebrowColor="text-indigo-600"
      title="Split bills and share money between wallets without the usual friction."
      description="A'Dash Wallet is built for the social side of spending too, from group tabs and shared bills to quick wallet-to-wallet transfers between friends and family."
      className="bg-gradient-to-br from-indigo-50/60 via-white to-cyan-50/40"
    >
      <div className="grid gap-8 xl:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col rounded-[2rem] border border-indigo-100 bg-white p-4 shadow-soft">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-indigo-50 to-sky-50 px-3 py-1.5 ring-1 ring-indigo-200">
              <Split className="h-4 w-4 text-indigo-500" />
              <span className="text-xs font-semibold text-indigo-700">Bill Splitting</span>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] bg-[#19152d]">
              <Image
                src="/split-bills-home.png"
                alt="Split bills between friends promotional artwork"
                width={768}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 flex flex-1 flex-col">
              <h3 className="text-2xl font-semibold text-adash-deep">
                Make group payments feel easy instead of messy.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Split shared spending neatly when friends are out together, traveling, or paying across fast-moving social moments.
              </p>
              <ul className="mt-6 space-y-3">
                {splitHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-500" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex h-full flex-col rounded-[2rem] border border-cyan-100 bg-white p-4 shadow-soft">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-cyan-50 to-emerald-50 px-3 py-1.5 ring-1 ring-cyan-200">
              <Send className="h-4 w-4 text-cyan-600" />
              <span className="text-xs font-semibold text-cyan-700">Wallet Sharing</span>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] bg-[#181923]">
              <Image
                src="/send-money-home.png"
                alt="Send money to friends and family promotional artwork"
                width={768}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 flex flex-1 flex-col">
              <h3 className="text-2xl font-semibold text-adash-deep">
                Share funds between wallets in a few taps.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Send and receive money quickly inside the ecosystem so personal transfers feel just as smooth as merchant payments.
              </p>
              <ul className="mt-6 space-y-3">
                {walletHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-500" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/customers"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition-colors hover:text-cyan-700"
              >
                Explore customer features
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
