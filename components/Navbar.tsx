"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { personal } from "@/lib/data";

const navLinks = [
  { label: "Work", count: "16", href: "#work" },
  { label: "Services", count: "04", href: "#services" },
  { label: "Experience", count: "05", href: "#experience" },
  { label: "Contact", count: null, href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] max-w-4xl transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 border border-neutral-200/70 bg-white/80 backdrop-blur-md backdrop-saturate-150 ${
          scrolled
            ? "shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
            : "shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Availability Badge */}
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-medium text-neutral-700 whitespace-nowrap">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="hidden sm:inline">Available for New Projects</span>
          </div>

          {/* Desktop Nav — hidden on mobile */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-xs sm:text-sm font-medium text-neutral-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-foreground transition-colors whitespace-nowrap"
              >
                {link.label}
                {link.count && (
                  <span className="ml-1 text-[10px] text-muted-light font-normal">
                    [{link.count}]
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold whitespace-nowrap hover:bg-foreground/90 transition-colors"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-full hover:bg-foreground/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.08 }}
                className="text-2xl font-display font-bold text-foreground"
              >
                {link.label}
                {link.count && (
                  <span className="ml-2 text-sm text-muted font-normal">
                    [{link.count}]
                  </span>
                )}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center gap-2 bg-foreground text-background text-sm font-semibold px-6 py-3 rounded-full"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <p className="mt-6 text-xs text-muted flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              {personal.badge}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
