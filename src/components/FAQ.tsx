"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is PurrAgent?",
    answer:
      "PurrAgent is an AI-powered office platform that lets you integrate your entire business into intelligent AI agents. Communicate with a CEO agent via chat, and it delegates tasks across your AI workforce.",
    icon: "01",
  },
  {
    question: "How does the CEO agent work?",
    answer:
      "Your CEO agent is the central hub. Send it natural language messages. It understands context, delegates to specialized agents, and reports back with results in real-time.",
    icon: "02",
  },
  {
    question: "Can I self-host PurrAgent?",
    answer:
      "Yes. Deploy on your own infrastructure with full control over security, privacy, and compliance. Your data stays on your servers.",
    icon: "03",
  },
  {
    question: "What integrations are supported?",
    answer:
      "50+ integrations including CRM, email, calendar, accounting, and project management tools. Custom integrations available for enterprise.",
    icon: "04",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Yes! Our iOS app CatPaW is live on the App Store. Chat with your CEO agent, monitor activity, and manage your AI workforce from anywhere.",
    icon: "05",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most businesses are up and running within a week. We handle integration, build custom agents, and train them on your specific workflows.",
    icon: "06",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="mt-10 sm:mt-14 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-white/5 bg-surface-light p-4 sm:p-6 transition-all hover:border-teal/20"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-teal/10 border border-teal/20 text-teal font-mono text-xs font-bold">
                {faq.icon}
              </div>
              <h3 className="text-base font-semibold leading-snug">
                {faq.question}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {faq.answer}
              </p>

              <div className="absolute inset-0 -z-10 rounded-2xl bg-teal/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
