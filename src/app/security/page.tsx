"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Server,
  Eye,
  RefreshCw,
  FileCheck,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

const features = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "All data in transit is encrypted with TLS 1.3. Data at rest is encrypted with AES-256. Your communications with AI agents are always protected.",
  },
  {
    icon: Server,
    title: "Self-Hosted Option",
    description:
      "Deploy PurrAgent entirely on your own infrastructure. Your data never leaves your servers. Full control over your security posture.",
  },
  {
    icon: Eye,
    title: "Zero Third-Party Access",
    description:
      "PurrAgent does not share your data with third parties. On self-hosted deployments, even PurrAgent has no access to your data or AI interactions.",
  },
  {
    icon: Shield,
    title: "SOC 2 Compliant",
    description:
      "Our cloud infrastructure follows SOC 2 Type II controls for security, availability, and confidentiality. Regular third-party audits ensure compliance.",
  },
  {
    icon: RefreshCw,
    title: "Automatic Backups",
    description:
      "Cloud deployments include automated daily backups with point-in-time recovery. Self-hosted customers can configure backup policies to their requirements.",
  },
  {
    icon: FileCheck,
    title: "Audit Logging",
    description:
      "Complete audit trail of all actions, agent activities, and system access. Exportable logs for compliance and security review.",
  },
];

const practices = [
  "All code reviewed and tested before deployment",
  "Regular penetration testing by independent firms",
  "Bug bounty program for responsible disclosure",
  "Role-based access control (RBAC) throughout",
  "Multi-factor authentication (MFA) supported",
  "Automated vulnerability scanning on all builds",
  "Incident response plan with 4-hour SLA",
  "Employee security training and background checks",
];

export default function SecurityPage() {
  return (
    <PageLayout>
      <PageHeader
        tag="Security"
        title="Security at PurrAgent"
        description="We build security into everything we do. Your data protection is not a feature — it's our foundation."
      />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group rounded-2xl border border-white/5 bg-surface-light p-4 sm:p-6 transition-all hover:border-teal/20"
              >
                <div className="mb-3 sm:mb-4 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-teal/10 border border-teal/20">
                  <feature.icon className="text-teal w-[18px] h-[18px] sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center"
          >
            Security Practices
          </motion.h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {practices.map((practice, i) => (
              <motion.div
                key={practice}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-xl border border-white/5 bg-surface-light px-4 py-3"
              >
                <Shield size={14} className="shrink-0 mt-0.5 text-teal" />
                <span className="text-sm text-muted">{practice}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl border border-teal/20 bg-teal/5 p-6 text-center"
          >
            <h3 className="text-base font-semibold">
              Report a Vulnerability
            </h3>
            <p className="mt-2 text-sm text-muted">
              Found a security issue? We take all reports seriously. Contact our
              security team at{" "}
              <a
                href="mailto:security@purragent.com"
                className="text-teal hover:text-teal-light transition-colors"
              >
                security@purragent.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
