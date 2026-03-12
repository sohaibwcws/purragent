"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Activity,
  Users,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Chat with Your CEO Agent",
    description:
      "Natural language commands. Just tell your AI CEO what you need and watch it delegate across your entire AI workforce.",
  },
  {
    icon: Activity,
    title: "Real-Time Team Monitoring",
    description:
      "See every agent working in real-time. Track task progress, completion rates, and performance metrics at a glance.",
  },
  {
    icon: Users,
    title: "AI Workforce Management",
    description:
      "Build custom agents for every role — marketing, sales, support, operations. Each one specialized for your business.",
  },
  {
    icon: Zap,
    title: "Instant Task Execution",
    description:
      "Send a message, and your agents work immediately. No waiting, no bottlenecks. Tasks completed while you sleep.",
  },
  {
    icon: Shield,
    title: "Self-Hosted & Secure",
    description:
      "Your data stays yours. Deploy on your own infrastructure with full control over privacy and security.",
  },
  {
    icon: Globe,
    title: "Custom Integrations",
    description:
      "Connect to any tool your business already uses. CRM, email, calendar, accounting — all unified through AI agents.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-teal uppercase tracking-wider">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Everything Your AI Office Needs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            A complete platform to integrate your entire business operations
            into intelligent AI agents.
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-16 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/5 bg-surface-light p-4 sm:p-6 transition-all hover:border-teal/20 hover:bg-surface-light/80"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 border border-teal/20 transition-colors group-hover:bg-teal/15">
                <feature.icon size={20} className="text-teal" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-teal/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
