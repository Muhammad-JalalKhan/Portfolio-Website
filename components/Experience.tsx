"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-6 bg-card-dark text-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium text-muted-light tracking-widest uppercase mb-4">
            / Experience
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Startup Founder", "AI Intern", "Community Fellow"].map(
              (badge) => (
                <span
                  key={badge}
                  className="text-xs font-medium text-muted-light border border-border-dark px-3 py-1.5 rounded-full"
                >
                  {badge}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border-dark" />

          <div className="space-y-2">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-[11px] md:left-[19px] top-8 w-2.5 h-2.5 rounded-full border-2 border-border-dark bg-card-dark group-hover:border-accent group-hover:bg-accent transition-colors duration-300" />

                <div className="bg-card-dark-secondary border border-border-dark rounded-2xl p-6 md:p-8 hover:border-muted/30 transition-all duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-display font-bold text-background">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-muted-light font-medium">
                        {exp.company}
                      </p>
                    </div>

                    <span className="flex items-center gap-1.5 text-xs text-muted-light shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Tech badges */}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium text-muted-light/80 border border-border-dark px-2.5 py-1 rounded-full group-hover:border-muted/40 group-hover:text-muted-light transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
