"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Heart } from "lucide-react";
import { personal } from "@/lib/data";

const footerLinks = [
  { label: "GitHub", href: personal.github, icon: Github },
  { label: "LinkedIn", href: personal.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${personal.email}`, icon: Mail },
];

export default function Footer() {
  return (
    <footer id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium text-muted border border-border px-4 py-2 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Available for New Projects &amp; Roles
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-foreground tracking-tight mb-6"
        >
          HAVE A PROJECT
          <br />
          IN MIND?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg text-muted leading-relaxed max-w-xl mx-auto mb-10"
        >
          Looking for production-grade AI development, agentic workflows, or
          campus ambassadorship leadership? Let&apos;s build something exceptional.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 bg-foreground text-background text-sm font-semibold px-8 py-4 rounded-full hover:bg-foreground/90 hover:gap-3 transition-all duration-300 shadow-xl shadow-foreground/10"
          >
            Contact Me
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-3 mb-16"
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-border text-sm font-medium px-4 py-2.5 rounded-full hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
            >
              <link.icon className="w-4 h-4" />
              {link.label}
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>
            © {new Date().getFullYear()} Muhammad Jalal. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with
            <Heart className="w-3 h-3 text-accent fill-accent" />
            in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
