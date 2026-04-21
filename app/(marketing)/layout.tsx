import type { ReactNode } from "react";
import { AnnouncementBar } from "@/components/marketing/layout/AnnouncementBar";
import { Footer } from "@/components/marketing/layout/Footer";
import { Navbar } from "@/components/marketing/layout/Navbar";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
