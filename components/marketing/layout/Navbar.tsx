"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { marketingNav } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-all duration-300",
        scrolled
          ? "border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-white/70 backdrop-blur-lg"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center">
          <Image
            src="/adashpay-logo.png"
            alt="A'Dash Pay"
            width={240}
            height={64}
            priority
            className="h-11 w-auto transition-transform duration-200 group-hover:scale-[1.02] sm:h-12"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {marketingNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  active
                    ? "bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 ring-1 ring-emerald-200"
                    : "text-slate-600 hover:bg-slate-50 hover:text-adash-deep"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button
            asChild
            className="bg-gradient-to-r from-emerald-500 to-teal-500 shadow-md shadow-emerald-200 hover:from-emerald-600 hover:to-teal-600 hover:shadow-lg hover:shadow-emerald-200"
          >
            <Link href="/about">Book Demo</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <div className="mt-8 flex flex-col gap-4">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/adashpay-logo.png"
                    alt="A'Dash Pay"
                    width={220}
                    height={58}
                    priority
                    className="h-10 w-auto"
                  />
                </Link>
                <div className="mt-4 flex flex-col gap-1.5">
                  {marketingNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700"
                          : "text-slate-600 hover:bg-slate-50"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <Button
                  asChild
                  className="mt-4 bg-gradient-to-r from-emerald-500 to-teal-500"
                >
                  <Link href="/about">Book Demo</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
