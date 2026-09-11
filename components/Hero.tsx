"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { personal } from "@/lib/data";

const socialLinks = [
  {
    label: "GitHub",
    href: personal.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: personal.linkedin,
    icon: Linkedin,
  },
  {
    label: "Email",
    href: `mailto:${personal.email}`,
    icon: Mail,
  },
  {
    label: "Resume PDF",
    href: `mailto:${personal.email}?subject=Resume%20Request`,
    icon: FileText,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.3] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        {/* Top row: role + social */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-10">
          {/* Left: Role + CTA */}
          <motion.div variants={itemVariants} className="max-w-md">
            <p className="text-sm font-medium text-muted uppercase tracking-widest mb-3">
              {personal.role}
            </p>
            <p className="text-base text-muted leading-relaxed mb-6">
              {personal.tagline}
            </p>
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-foreground text-background text-sm font-semibold px-6 py-3 rounded-full hover:bg-foreground/90 transition-all hover:gap-3"
            >
              Explore Projects
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right: Social pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap lg:flex-col gap-2"
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-border text-sm font-medium px-4 py-2.5 rounded-full hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
              >
                <s.icon className="w-4 h-4" />
                {s.label}
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Giant Name */}
        <motion.div variants={itemVariants} className="relative">
          <div className="flex flex-col items-center">
            {/* MUHAMMAD — stroke */}
            <h1 className="text-stroke font-display font-black text-[clamp(3rem,12vw,11rem)] leading-[0.85] tracking-tighter select-none">
              {personal.firstName}
            </h1>

            {/* Avatar circle — overlapping the two name lines */}
            <div className="relative -my-6 md:-my-10 z-20 flex items-center justify-center">
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border-4 border-background bg-foreground flex items-center justify-center shadow-2xl shadow-foreground/10">
                <span className="text-background font-display font-black text-2xl md:text-4xl tracking-tight">
                  MJ
                </span>
              </div>
            </div>

            {/* JALAL — solid */}
            <h1 className="font-display font-black text-foreground text-[clamp(3rem,12vw,11rem)] leading-[0.85] tracking-tighter select-none">
              {personal.lastName}
            </h1>
          </div>
        </motion.div>

        {/* Bottom detail */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-muted"
        >
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
            {personal.location}
          </span>
          <span className="hidden sm:block">·</span>
          <span>NUST — BS Artificial Intelligence (CGPA 3.64)</span>
          <span className="hidden sm:block">·</span>
          <span>FBISE Gold Medalist</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
