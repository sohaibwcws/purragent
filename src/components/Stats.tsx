"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10,000+", label: "Tasks Completed Daily" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "50+", label: "Integration Partners" },
  { value: "3min", label: "Avg. Task Completion" },
];

export default function Stats() {
  return (
    <section className="relative border-y border-white/5 bg-surface-light/50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-2xl font-bold text-teal sm:text-3xl lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
