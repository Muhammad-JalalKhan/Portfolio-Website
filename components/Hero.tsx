"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code, Globe, Mail, FileText } from "lucide-react";
import { personal } from "@/lib/data";

const socialLinks = [
  {
    label: "GitHub",
    href: personal.github,
    icon: Code,
  },
  {
    label: "LinkedIn",
    href: personal.linkedin,
    icon: Globe,
  },
  {
    label: "Email",
    href: `mailto:${personal.email}`,
    icon: Mail,
  },
  {
    label: "Resume PDF",
    href: "/resume.pdf",
    icon: FileText,
    download: "Muhammad_Jalal_Resume.pdf",
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
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center pt-24 sm:pt-32 md:pt-36 pb-12 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.3] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        {/* Top row: role + social — stacked on mobile, side-by-side on md+ */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-10">
          {/* Left: Role + CTA */}
          <motion.div variants={itemVariants} className="max-w-sm sm:max-w-md">
            <p className="text-xs sm:text-sm font-medium text-muted uppercase tracking-widest mb-3">
              {personal.role}
            </p>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
              {personal.tagline}
            </p>
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-foreground text-background text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-foreground/90 transition-all hover:gap-3"
            >
              Explore Projects
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right: Social pills — horizontal wrap on mobile, vertical stack on md+ */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap md:flex-col gap-2"
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                {...(s.download ? { download: s.download } : {})}
                className="group inline-flex items-center gap-2 border border-border text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 sm:py-2.5 rounded-full hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
              >
                <s.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {s.label}
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Giant Name — fluid clamp sizing, zero overflow */}
        <motion.div variants={itemVariants} className="relative w-full max-w-full">
          <div className="flex flex-col items-center w-full">
            {/* MUHAMMAD — outlined / stroke text */}
            <span className="font-display font-black text-[clamp(2.5rem,7.5vw,9.5rem)] leading-[0.85] tracking-tight text-transparent [-webkit-text-stroke:1px_#171717] sm:[-webkit-text-stroke:2px_#171717] md:[-webkit-text-stroke:3px_#171717] select-none block max-w-full text-center">
              {personal.firstName}
            </span>

            {/* Avatar circle — responsive sizing with clean overlap */}
            <div className="relative -my-3 sm:-my-5 md:-my-8 z-20 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-full bg-foreground text-background border-4 border-background shadow-xl flex items-center justify-center">
                <span className="font-display font-bold text-xs sm:text-base md:text-xl tracking-tight">
                  MJ
                </span>
              </div>
            </div>

            {/* JALAL — solid */}
            <span className="font-display font-black text-foreground text-[clamp(2.5rem,8vw,10rem)] leading-[0.85] tracking-tight select-none block max-w-full text-center">
              {personal.lastName}
            </span>
          </div>
        </motion.div>

        {/* Bottom detail — wraps gracefully on all screens */}
        <motion.div
          variants={itemVariants}
          className="mt-10 sm:mt-12 flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs text-neutral-500 text-center px-4"
        >
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
            {personal.location}
          </span>
          <span>·</span>
          <span>NUST — BS Artificial Intelligence (CGPA 3.47)</span>
          <span>·</span>
          <span>FBISE Gold Medalist</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
