"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionWrapper } from "@/components/marketing/shared/SectionWrapper";

interface UseCaseItem {
  value: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
}

export function UseCaseTabs({
  eyebrow,
  title,
  description,
  items
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: UseCaseItem[];
}) {
  return (
    <SectionWrapper eyebrow={eyebrow} title={title} description={description}>
      <Tabs defaultValue={items[0]?.value} className="w-full">
        <TabsList>
          {items.map((item) => (
            <TabsTrigger key={item.value} value={item.value}>
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {items.map((item) => (
          <TabsContent key={item.value} value={item.value}>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="grid gap-6 rounded-[2rem] border border-border bg-white p-8 shadow-card lg:grid-cols-[1.05fr_0.95fr]"
            >
              <div>
                <h3 className="text-3xl font-semibold text-adash-deep">{item.title}</h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
              <div className="grid gap-4">
                {item.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-3xl bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700">
                    {bullet}
                  </div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </SectionWrapper>
  );
}
