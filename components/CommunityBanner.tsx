"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";

export default function CommunityBanner() {
  // Duplicate list for seamless infinite scroll
  const items = [...achievements, ...achievements];

  return (
    <section className="py-12 border-y border-border overflow-hidden bg-surface">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex animate-marquee marquee-track w-max">
          {items.map((a, i) => (
            <div
              key={`${a.id}-${i}`}
              className="flex items-center gap-4 px-6 shrink-0"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {a.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
