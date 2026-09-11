"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";
import { projects, filterCategories, type FilterCategory, type Project } from "@/lib/data";

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.filterTag === activeFilter);

  return (
    <section id="work" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with watermark */}
        <div className="relative mb-16">
          <span className="absolute -top-8 left-0 text-[clamp(4rem,10vw,9rem)] font-display font-black text-foreground/[0.03] leading-none select-none pointer-events-none">
            PORTFOLIO
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative text-sm font-medium text-muted tracking-widest uppercase"
          >
            / Selected Work
          </motion.h2>
        </div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-foreground/70 border-border hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer border border-border rounded-3xl p-6 md:p-8 hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/[0.02] transition-all duration-500 bg-surface"
                >
                  {/* Category badge */}
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-muted bg-surface-hover px-3 py-1 rounded-full mb-4">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3 group-hover:tracking-tight transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-foreground/60 border border-border px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom row */}
                  <div className="flex items-center justify-between">
                    {project.highlight && (
                      <span className="text-xs text-accent font-medium">
                        ✦ {project.highlight}
                      </span>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:text-accent transition-colors"
                      >
                        GitHub
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-surface rounded-3xl p-8 md:p-10 shadow-2xl border border-border max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface-hover transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-muted bg-surface-hover px-3 py-1 rounded-full mb-4">
                {selectedProject.category}
              </span>

              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-base text-muted leading-relaxed mb-6">
                {selectedProject.summary}
              </p>

              {selectedProject.highlight && (
                <div className="bg-accent/5 border border-accent/20 rounded-2xl px-5 py-4 mb-6">
                  <p className="text-sm font-medium text-accent">
                    ✦ {selectedProject.highlight}
                  </p>
                </div>
              )}

              <div className="mb-6">
                <p className="text-xs uppercase tracking-wider text-muted font-semibold mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-foreground border border-border px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground text-background text-sm font-semibold px-6 py-3 rounded-full hover:bg-foreground/90 transition-colors"
                >
                  View on GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
