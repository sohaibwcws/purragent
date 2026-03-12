"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Building } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "For general inquiries and support.",
    action: "hello@purragent.com",
    href: "mailto:hello@purragent.com",
  },
  {
    icon: MessageSquare,
    title: "Sales",
    description: "Talk to our team about enterprise solutions.",
    action: "sales@purragent.com",
    href: "mailto:sales@purragent.com",
  },
  {
    icon: Building,
    title: "Partnerships",
    description: "Interested in integrating with PurrAgent?",
    action: "partners@purragent.com",
    href: "mailto:partners@purragent.com",
  },
];

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHeader
        tag="Contact"
        title="Get in Touch"
        description="Have a question, want a demo, or ready to get started? We'd love to hear from you."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 sm:gap-5 sm:grid-cols-3">
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.title}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-2xl border border-white/5 bg-surface-light p-4 sm:p-6 text-center transition-all hover:border-teal/20"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 border border-teal/20">
                  <method.icon size={22} className="text-teal" />
                </div>
                <h3 className="text-base font-semibold">{method.title}</h3>
                <p className="mt-1 text-sm text-muted">{method.description}</p>
                <p className="mt-3 text-sm font-medium text-teal group-hover:text-teal-light transition-colors">
                  {method.action}
                </p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 sm:mt-16 rounded-2xl border border-white/5 bg-surface-light p-5 sm:p-10"
          >
            <h2 className="text-xl font-bold text-center">Send Us a Message</h2>
            <p className="mt-2 text-sm text-muted text-center">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
            <form className="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-muted mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white placeholder:text-muted/50 outline-none transition-colors focus:border-teal/40"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white placeholder:text-muted/50 outline-none transition-colors focus:border-teal/40"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-muted mb-1.5">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white placeholder:text-muted/50 outline-none transition-colors focus:border-teal/40"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-muted mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your needs..."
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white placeholder:text-muted/50 outline-none transition-colors focus:border-teal/40 resize-none"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-teal px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-teal-light hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
