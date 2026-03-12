"use client";

import { motion } from "framer-motion";
import { Target, Eye, Zap } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We believe every business deserves an AI workforce. Our mission is to make intelligent automation accessible to companies of all sizes.",
  },
  {
    icon: Eye,
    title: "Transparency First",
    description:
      "Your data is yours. We build with privacy at the core — self-hosted options, no third-party sharing, full control over your infrastructure.",
  },
  {
    icon: Zap,
    title: "Relentless Innovation",
    description:
      "AI moves fast, and so do we. We ship weekly, iterate constantly, and push the boundaries of what AI agents can do for your business.",
  },
];

const timeline = [
  { year: "2024", event: "PurrAgent founded with a vision to revolutionize office automation" },
  { year: "2024", event: "First AI agent framework developed and tested with beta partners" },
  { year: "2025", event: "CatPaW iOS app launched on the App Store" },
  { year: "2025", event: "50+ integrations available, serving businesses worldwide" },
  { year: "2026", event: "Enterprise self-hosted platform launched" },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHeader
        tag="About"
        title="Building the Future of Work"
        description="PurrAgent is on a mission to give every business an AI-powered office. We're replacing manual workflows with intelligent agents that think, act, and deliver."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-2xl border border-white/5 bg-surface-light p-6 transition-all hover:border-teal/20"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 border border-teal/20">
                  <value.icon size={20} className="text-teal" />
                </div>
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center sm:text-3xl"
          >
            Our Journey
          </motion.h2>
          <div className="mt-12 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-teal/40 via-teal/20 to-transparent sm:left-1/2" />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative mb-8 flex items-start gap-6 pl-12 sm:pl-0"
              >
                <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-teal bg-black sm:left-1/2 sm:-translate-x-1/2" />
                <div className="sm:w-1/2 sm:pr-12 sm:text-right">
                  <span className="font-mono text-xs text-teal">{item.year}</span>
                  <p className="mt-1 text-sm text-muted">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
