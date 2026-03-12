"use client";

import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using PurrAgent's services, website, or mobile applications (collectively, the "Service"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.`,
  },
  {
    title: "2. Description of Service",
    content: `PurrAgent provides an AI-powered office automation platform that enables businesses to create, manage, and deploy AI agents for various business functions. The Service includes cloud-hosted and self-hosted deployment options, mobile applications, and related tools and APIs.`,
  },
  {
    title: "3. Account Responsibilities",
    content: `You are responsible for:
- Maintaining the security of your account credentials
- All activities that occur under your account
- Ensuring your use of the Service complies with applicable laws
- Providing accurate and complete registration information
- Notifying us immediately of any unauthorized access to your account`,
  },
  {
    title: "4. Acceptable Use",
    content: `You agree not to:
- Use the Service for illegal purposes or to violate any laws
- Attempt to gain unauthorized access to the Service or related systems
- Interfere with or disrupt the Service or servers
- Use the Service to generate harmful, abusive, or misleading content
- Reverse engineer, decompile, or disassemble the Service
- Resell or redistribute the Service without authorization`,
  },
  {
    title: "5. Intellectual Property",
    content: `The Service, including its original content, features, and functionality, is owned by PurrAgent and is protected by international copyright, trademark, and other intellectual property laws. Your data and content remain yours — we claim no ownership over data you process through the Service.`,
  },
  {
    title: "6. Service Availability",
    content: `We strive for 99.9% uptime but do not guarantee uninterrupted access to the Service. We may perform scheduled maintenance with advance notice. We are not liable for any downtime, data loss, or service interruptions caused by factors beyond our reasonable control.`,
  },
  {
    title: "7. Limitation of Liability",
    content: `To the maximum extent permitted by law, PurrAgent shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Service.`,
  },
  {
    title: "8. Termination",
    content: `We may suspend or terminate your access to the Service at our discretion if you violate these Terms. Upon termination, your right to use the Service ceases immediately. You may terminate your account at any time by contacting us. Provisions that by their nature should survive termination will survive.`,
  },
  {
    title: "9. Changes to Terms",
    content: `We reserve the right to modify these Terms at any time. Material changes will be communicated via email or in-app notification at least 30 days before taking effect. Continued use after changes constitutes acceptance.`,
  },
  {
    title: "10. Contact",
    content: `For questions about these Terms, contact us at legal@purragent.com.`,
  },
];

export default function TermsPage() {
  return (
    <PageLayout>
      <PageHeader
        tag="Legal"
        title="Terms of Service"
        description="The terms governing your use of PurrAgent's platform, services, and applications."
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
