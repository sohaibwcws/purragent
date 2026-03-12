"use client";

import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly, such as your name, email address, and company name when you create an account or contact us. When using PurrAgent, we collect usage data including feature interactions and performance metrics to improve our service.

For self-hosted deployments, your business data and AI agent interactions remain entirely on your infrastructure. PurrAgent has no access to data processed on self-hosted instances.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use collected information to:
- Provide, maintain, and improve PurrAgent services
- Process transactions and send related communications
- Respond to your requests, comments, and questions
- Send technical notices, updates, and security alerts
- Monitor and analyze usage trends to improve user experience
- Detect, prevent, and address technical issues and fraud`,
  },
  {
    title: "3. Data Storage & Security",
    content: `For cloud-hosted accounts, data is encrypted in transit (TLS 1.3) and at rest (AES-256). We use industry-standard security measures to protect your information.

Self-hosted customers maintain full control over their data storage, encryption, and security policies. We provide security best practices documentation for self-hosted deployments.`,
  },
  {
    title: "4. Third-Party Services",
    content: `PurrAgent integrates with third-party services (CRM, email, calendar, etc.) only at your direction. We do not sell, trade, or share your personal information with third parties for marketing purposes.

AI processing on our cloud platform uses models configured by you. On self-hosted deployments, AI processing happens entirely on your infrastructure using your chosen providers.`,
  },
  {
    title: "5. Data Retention & Deletion",
    content: `We retain your account information for as long as your account is active. You can request deletion of your account and associated data at any time by contacting us at privacy@purragent.com.

For self-hosted deployments, you have full control over data retention and deletion through the application settings.`,
  },
  {
    title: "6. Your Rights",
    content: `You have the right to:
- Access the personal data we hold about you
- Request correction of inaccurate data
- Request deletion of your data
- Export your data in a portable format
- Opt out of marketing communications
- Withdraw consent where processing is based on consent`,
  },
  {
    title: "7. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website and, where appropriate, by email. Your continued use of PurrAgent after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "8. Contact",
    content: `For questions about this Privacy Policy or our data practices, contact us at privacy@purragent.com.`,
  },
];

export default function PrivacyPage() {
  return (
    <PageLayout>
      <PageHeader
        tag="Legal"
        title="Privacy Policy"
        description="Your privacy matters. Here's how PurrAgent collects, uses, and protects your information."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-muted mb-10 text-center">
            Last updated: March 1, 2026
          </p>
          <div className="space-y-8">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="rounded-2xl border border-white/5 bg-surface-light p-6"
              >
                <h2 className="text-base font-semibold text-teal">
                  {section.title}
                </h2>
                <div className="mt-3 text-sm leading-relaxed text-muted whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
