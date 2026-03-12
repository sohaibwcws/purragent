"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

const posts = [
  {
    date: "Mar 10, 2026",
    tag: "Product",
    title: "Introducing PurrAgent Enterprise: Self-Hosted AI for Your Organization",
    excerpt:
      "Deploy your entire AI workforce on your own infrastructure. Full control, full privacy, zero compromise.",
    readTime: "5 min read",
  },
  {
    date: "Feb 28, 2026",
    tag: "Engineering",
    title: "How We Built Real-Time Agent Monitoring",
    excerpt:
      "A deep dive into the architecture behind our live agent status system — from WebSocket streams to the iOS dashboard.",
    readTime: "8 min read",
  },
  {
    date: "Feb 15, 2026",
    tag: "AI Research",
    title: "Multi-Agent Delegation: Teaching AI Teams to Collaborate",
    excerpt:
      "How our CEO agent breaks down complex tasks and delegates them across specialized agents for maximum efficiency.",
    readTime: "6 min read",
  },
  {
    date: "Jan 30, 2026",
    tag: "Case Study",
    title: "How a 10-Person Startup Runs Like a 50-Person Company",
    excerpt:
      "One of our early customers shares how PurrAgent transformed their operations, handling support, marketing, and sales automatically.",
    readTime: "4 min read",
  },
  {
    date: "Jan 12, 2026",
    tag: "Product",
    title: "CatPaW iOS App: Your AI Office in Your Pocket",
    excerpt:
      "We launched our iOS app on the App Store. Here's the story behind building a mobile-first AI management experience.",
    readTime: "5 min read",
  },
  {
    date: "Dec 20, 2025",
    tag: "Security",
    title: "Our Approach to Data Privacy and Self-Hosting",
    excerpt:
      "Why we built PurrAgent with a privacy-first architecture and how our self-hosted model keeps your data entirely under your control.",
    readTime: "7 min read",
  },
];

const tagColors: Record<string, string> = {
  Product: "bg-teal/10 text-teal border-teal/20",
  Engineering: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "AI Research": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Case Study": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Security: "bg-red-500/10 text-red-400 border-red-500/20",
};

export default function BlogPage() {
  return (
    <PageLayout>
      <PageHeader
        tag="Blog"
        title="Insights & Updates"
        description="Engineering deep dives, product launches, AI research, and stories from the teams using PurrAgent to transform their businesses."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex flex-col rounded-2xl border border-white/5 bg-surface-light p-4 sm:p-6 transition-all hover:border-teal/20 cursor-pointer"
              >
                <div className="flex items-center gap-3 text-xs">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 font-medium ${
                      tagColors[post.tag] || "bg-white/5 text-muted border-white/10"
                    }`}
                  >
                    {post.tag}
                  </span>
                  <span className="text-muted">{post.date}</span>
                </div>
                <h3 className="mt-4 text-base font-semibold leading-snug group-hover:text-teal transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-muted">{post.readTime}</span>
                  <span className="flex items-center gap-1 text-teal opacity-0 transition-opacity group-hover:opacity-100">
                    Read more <ArrowRight size={12} />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
