"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    description: "For small teams getting started with AI automation.",
    features: [
      "Up to 5 AI agents",
      "CEO agent included",
      "Basic integrations",
      "Email & chat support",
      "Mobile app access",
      "5,000 tasks/month",
    ],
    cta: "Start Free Trial",
    featured: false,
  },
  {
    name: "Business",
    price: "$1,499",
    period: "/month",
    description: "For growing businesses ready to fully automate.",
    features: [
      "Up to 25 AI agents",
      "All agent roles",
      "Custom integrations",
      "Priority support",
      "Advanced analytics",
      "Unlimited tasks",
      "Self-hosted option",
      "API access",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with complex automation needs.",
    features: [
      "Unlimited AI agents",
      "Custom agent development",
      "Dedicated success manager",
      "On-premise deployment",
      "SLA guarantee",
      "White-label option",
      "Custom training",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-teal uppercase tracking-wider">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Invest in Your AI Workforce
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Choose the plan that fits your business. All plans include our iOS
            app and 14-day free trial.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-6 sm:p-8 transition-all ${
                plan.featured
                  ? "border-teal/30 bg-teal/5"
                  : "border-white/5 bg-surface-light hover:border-white/10"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal px-3 py-1 text-xs font-semibold text-black">
                  Most Popular
                </div>
              )}

              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted">{plan.period}</span>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="shrink-0 text-teal" />
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold transition-all ${
                  plan.featured
                    ? "bg-teal text-black hover:bg-teal-light hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                    : "border border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </button>

              {plan.featured && (
                <div className="absolute -inset-1 -z-10 rounded-2xl bg-teal/10 blur-xl" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
