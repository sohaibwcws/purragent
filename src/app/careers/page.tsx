"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

const perks = [
  "Remote-first culture",
  "Competitive equity packages",
  "Unlimited PTO",
  "Latest hardware & tools",
  "Learning & conference budget",
  "Health & wellness stipend",
];

const openings = [
  {
    title: "Senior AI/ML Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Full-Stack Engineer (Next.js / Swift)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "AI Agent Architect",
    department: "Research",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Developer Relations Engineer",
    department: "Growth",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Enterprise Account Executive",
    department: "Sales",
    location: "Remote (US)",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <PageLayout>
      <PageHeader
        tag="Careers"
        title="Build the Future With Us"
        description="We're a small, fast-moving team building AI that runs entire businesses. If you want to work on hard problems that matter, we'd love to hear from you."
      />

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-center">Why PurrAgent?</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {perks.map((perk, i) => (
              <motion.div
                key={perk}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center justify-center rounded-xl border border-white/5 bg-surface-light px-4 py-3 text-center text-xs sm:text-sm text-muted"
              >
                {perk}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-center">Open Positions</h2>
          <div className="mt-8 space-y-3">
            {openings.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="group flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-surface-light p-4 sm:p-5 transition-all hover:border-teal/20 cursor-pointer"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs sm:text-sm font-semibold group-hover:text-teal transition-colors">
                    {job.title}
                  </h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-muted">
                    <span className="rounded-full bg-teal/10 border border-teal/20 px-2 py-0.5 text-teal">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={10} />
                      {job.location}
                    </span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="shrink-0 text-muted transition-all group-hover:text-teal group-hover:translate-x-1"
                />
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center text-sm text-muted"
          >
            Don&apos;t see your role?{" "}
            <a
              href="/contact"
              className="text-teal hover:text-teal-light transition-colors"
            >
              Reach out anyway
            </a>{" "}
            — we&apos;re always looking for exceptional people.
          </motion.p>
        </div>
      </section>
    </PageLayout>
  );
}
