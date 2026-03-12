"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AppStoreBadge from "./AppStoreBadge";

const screens = [
  {
    src: "/screenshots/privacy.png",
    alt: "Data Privacy - Your server, your data",
    label: "Your Data, Your Rules",
    description:
      "Full transparency on how your data is handled. Self-hosted, no third-party sharing.",
  },
  {
    src: "/screenshots/ceo-chat.png",
    alt: "CEO Agent Chat Interface",
    label: "Chat with Your CEO",
    description:
      "A clean, powerful chat interface. Message your CEO agent and get things done instantly.",
  },
  {
    src: "/screenshots/agents.png",
    alt: "AI Agents Team - Atlas, Casey, Harper, Morgan, Jordan",
    label: "Your AI Workforce",
    description:
      "A full team of specialized agents — CEO, Support, SEO, Engineering, Sales — all working for you.",
  },
  {
    src: "/screenshots/conversation.png",
    alt: "Live conversation with CEO agent",
    label: "Real-Time Responses",
    description:
      "Send a message and your agents act immediately. Tasks delegated, progress reported in real-time.",
  },
];

export default function AppShowcase() {
  return (
    <section id="app" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-teal uppercase tracking-wider">
            The App
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            See It in Action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Available now on the App Store. A beautifully crafted experience to
            manage your entire AI office from your pocket.
          </p>
        </motion.div>

        {/* Phone showcase grid */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group flex flex-col items-center"
            >
              {/* Phone frame */}
              <div className="relative w-full max-w-[160px] sm:max-w-[220px] lg:max-w-[260px]">
                <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] border-2 border-white/10 bg-black shadow-2xl shadow-teal/5 transition-all duration-500 group-hover:border-teal/30 group-hover:shadow-teal/10">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 z-10 h-4 w-16 sm:h-5 sm:w-20 lg:h-6 lg:w-24 -translate-x-1/2 rounded-b-2xl bg-black" />

                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={460}
                    height={996}
                    className="w-full h-auto"
                    quality={90}
                  />
                </div>

                {/* Glow on hover */}
                <div className="absolute -inset-2 -z-10 rounded-[36px] bg-teal/0 blur-2xl transition-all duration-500 group-hover:bg-teal/8" />
              </div>

              {/* Label */}
              <div className="mt-3 sm:mt-6 text-center px-1">
                <h3 className="text-xs sm:text-sm lg:text-base font-semibold">
                  {screen.label}
                </h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted hidden sm:block">
                  {screen.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* App Store CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <p className="text-sm text-muted">Available now on iOS</p>
          <AppStoreBadge />
        </motion.div>
      </div>
    </section>
  );
}
