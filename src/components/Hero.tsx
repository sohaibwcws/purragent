"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import AppStoreBadge from "./AppStoreBadge";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-teal/5 blur-[120px]" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-[15%] w-2 h-2 rounded-full bg-teal/40 animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute top-40 right-[20%] w-1.5 h-1.5 rounded-full bg-teal/30 animate-[float_8s_ease-in-out_infinite_1s]" />
      <div className="absolute bottom-40 left-[25%] w-1 h-1 rounded-full bg-teal/50 animate-[float_7s_ease-in-out_infinite_2s]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/5 px-4 py-1.5 text-xs text-teal">
            <Sparkles size={14} />
            <span>Now live on the App Store</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          Your AI-Powered
          <br />
          <span className="bg-gradient-to-r from-teal via-teal-light to-teal bg-clip-text text-transparent">
            Office at Your Fingertips
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg leading-relaxed"
        >
          Send a message. Your AI agents handle the rest. Integrate your entire
          office into intelligent agents that work, update, and complete tasks
          autonomously.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#app"
            className="group flex items-center gap-2 rounded-xl bg-teal px-6 py-3.5 text-sm font-semibold text-black transition-all hover:bg-teal-light hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]"
          >
            Start Building Your AI Office
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition-all hover:border-white/20 hover:bg-white/10"
          >
            See How It Works
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 flex justify-center"
        >
          <AppStoreBadge />
        </motion.div>

        {/* Mock UI preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mx-auto mt-16 max-w-3xl"
        >
          <div className="rounded-2xl border border-white/10 bg-surface-light p-1 shadow-2xl shadow-teal/5">
            <div className="rounded-xl bg-surface p-4 sm:p-6">
              {/* Top bar */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-muted font-mono">
                  purragent://ceo-agent
                </span>
              </div>

              {/* Chat messages */}
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="h-8 w-8 shrink-0 rounded-lg bg-teal/10 flex items-center justify-center border border-teal/20">
                    <span className="text-teal text-xs font-bold">CEO</span>
                  </div>
                  <div className="rounded-lg bg-white/5 border border-white/5 px-4 py-2.5 text-sm text-muted">
                    Good morning! 3 tasks completed overnight. Revenue report is
                    ready, and I&apos;ve scheduled your meetings for today.
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="rounded-lg bg-teal/10 border border-teal/20 px-4 py-2.5 text-sm text-teal-light">
                    Send the revenue report to the board and reschedule
                    the 2pm meeting to tomorrow.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-8 w-8 shrink-0 rounded-lg bg-teal/10 flex items-center justify-center border border-teal/20">
                    <span className="text-teal text-xs font-bold">CEO</span>
                  </div>
                  <div className="rounded-lg bg-white/5 border border-white/5 px-4 py-2.5 text-sm text-muted">
                    <span className="text-teal">Done.</span> Report sent to 5
                    board members. 2pm meeting moved to tomorrow 2pm. Anything
                    else?
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glow effect behind card */}
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-teal/5 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
