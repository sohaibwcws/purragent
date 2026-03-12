"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Integrate Your Business",
    description:
      "Connect your tools, workflows, and data sources. We map your entire office into AI-ready processes.",
  },
  {
    step: "02",
    title: "Build Your AI Team",
    description:
      "Custom agents are created for each role — CEO, marketing, sales, support, operations. Each one trained on your business.",
  },
  {
    step: "03",
    title: "Send a Message",
    description:
      "Talk to your CEO agent like you'd talk to a real executive. Natural language, no learning curve.",
  },
  {
    step: "04",
    title: "Agents Execute",
    description:
      "Your AI workforce springs into action. Tasks are delegated, completed, and reported back to you in real-time.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-teal uppercase tracking-wider">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            From Message to Mission Complete
          </h2>
        </motion.div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line */}
          <div className="absolute top-16 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent lg:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-teal/30 bg-black text-teal font-mono text-sm font-bold">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
