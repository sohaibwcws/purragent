"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl border border-teal/20 bg-gradient-to-b from-teal/10 to-transparent p-8 sm:p-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Build Your
            <br />
            <span className="text-teal">AI Workforce?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Join businesses that are already running their operations with
            intelligent AI agents. Start your 14-day free trial today.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:hello@purragent.com"
              className="group flex items-center gap-2 rounded-xl bg-teal px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-teal-light hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]"
            >
              Get Started Free
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="mailto:hello@purr.ai"
              className="text-sm text-muted transition-colors hover:text-white"
            >
              Or contact sales
            </a>
          </div>

          {/* Background glow */}
          <div className="absolute inset-0 -z-10 rounded-2xl bg-teal/5 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
