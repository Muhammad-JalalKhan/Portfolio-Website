"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { services } from "@/lib/data";

export default function Services() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm font-medium text-muted tracking-widest uppercase mb-10 sm:mb-16"
        >
          / Services
        </motion.h2>

        {/* Accordion Rows */}
        <div className="border-t border-border">
          {services.map((service, index) => {
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border-b border-border"
              >
                <button
                  onClick={() =>
                    setExpandedId(isExpanded ? null : service.id)
                  }
                  className="group w-full flex items-center justify-between gap-2 py-5 sm:py-7 md:py-9 text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-6 min-w-0">
                    <span className="text-[10px] sm:text-xs font-mono text-muted-light w-5 sm:w-6 shrink-0">
                      {String(service.id).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-display font-bold text-foreground group-hover:tracking-tight transition-all duration-300 truncate sm:whitespace-normal">
                      {service.shortTitle}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <ArrowUpRight
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-muted transition-all duration-300 ${
                        isExpanded
                          ? "rotate-0 text-foreground"
                          : "group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      }`}
                    />
                    <ChevronDown
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 sm:pb-8 pl-8 sm:pl-10 md:pl-16 pr-2 sm:pr-4 md:pr-12">
                        <div className="bg-surface-hover rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-border/50">
                          <ul className="space-y-2.5 sm:space-y-3">
                            {service.bullets.map((bullet, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-muted"
                              >
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
