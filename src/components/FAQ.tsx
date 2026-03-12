"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What exactly is Purr?",
    answer:
      "Purr is an AI-powered office platform that lets you integrate your entire business into intelligent AI agents. You communicate with a CEO agent via chat, and it delegates tasks across your AI workforce — handling everything from emails and scheduling to reports and customer support.",
  },
  {
    question: "How does the CEO agent work?",
    answer:
      "Your CEO agent is the central hub. You send it natural language messages like you would a real executive. It understands context, delegates tasks to specialized agents (marketing, sales, support, etc.), and reports back with results in real-time.",
  },
  {
    question: "Can I self-host Purr?",
    answer:
      "Yes. Our Business and Enterprise plans include self-hosted deployment options. Your data stays on your own infrastructure with full control over security, privacy, and compliance.",
  },
  {
    question: "What integrations do you support?",
    answer:
      "We support 50+ integrations including CRM systems, email platforms, calendar tools, accounting software, project management tools, and more. Our Enterprise plan includes custom integration development.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Yes! Our iOS app is live on the App Store. Chat with your CEO agent, monitor team activity in real-time, and manage your AI workforce from anywhere.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most businesses are up and running within a week. We handle the integration process, build your custom agents, and train them on your specific workflows and data.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-teal uppercase tracking-wider">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="mt-12 space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-xl border border-white/5 bg-surface-light overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium transition-colors hover:text-teal"
              >
                {faq.question}
                <ChevronDown
                  size={16}
                  className={`shrink-0 text-muted transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-sm leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
