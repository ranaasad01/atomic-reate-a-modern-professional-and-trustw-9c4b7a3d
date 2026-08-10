"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Briefcase, FileText, Shield, GitBranch, Scale, AlertCircle, ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from "@/lib/motion";

const heroVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const heroChild: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const expertiseAreas = [
  {
    id: "ma",
    icon: Briefcase,
    title: "Mergers & Acquisitions",
    description:
      "End-to-end advisory on domestic and cross-border M&A transactions, including due diligence, structuring, negotiation, and post-merger integration support.",
  },
  {
    id: "contracts",
    icon: FileText,
    title: "Contract Drafting & Review",
    description:
      "Precision drafting and critical review of commercial agreements, supply contracts, service-level agreements, and bespoke transactional documents.",
  },
  {
    id: "governance",
    icon: Shield,
    title: "Corporate Governance",
    description:
      "Advising boards, directors, and shareholders on governance frameworks, fiduciary duties, board composition, and compliance with corporate statutes.",
  },
  {
    id: "regulatory",
    icon: AlertCircle,
    title: "Regulatory Compliance",
    description:
      "Guiding businesses through sector-specific regulatory landscapes, licensing requirements, and ongoing compliance obligations across multiple jurisdictions.",
  },
  {
    id: "jv",
    icon: GitBranch,
    title: "Joint Ventures & Partnerships",
    description:
      "Structuring and documenting joint ventures, strategic alliances, and partnership agreements that protect your interests and align commercial objectives.",
  },
  {
    id: "disputes",
    icon: Scale,
    title: "Commercial Disputes",
    description:
      "Robust representation in commercial contract disputes, shareholder conflicts, and business tort claims through negotiation, mediation, or litigation.",
  },
];

const typicalMattersLeft = [
  "Incorporation and company formation across multiple jurisdictions",
  "Drafting and negotiating shareholders' agreements and articles of association",
  "Advising on share purchase and asset purchase transactions",
  "Structuring private equity and venture capital investments",
  "Preparing and reviewing distribution and agency agreements",
  "Advising on corporate restructuring and business reorganizations",
  "Drafting franchise agreements and licensing arrangements",
  "Advising on director duties and board-level governance matters",
];

const typicalMattersRight = [
  "Conducting legal due diligence for acquisitions and investments",
  "Negotiating and drafting technology and IP licensing agreements",
  "Advising on competition and antitrust compliance",
  "Preparing commercial lease and property transaction documents",
  "Advising on data protection and privacy law compliance",
  "Drafting employment contracts and executive service agreements",
  "Advising on insolvency, winding-up, and creditor rights",
  "Representing clients in commercial arbitration and mediation proceedings",
];

const relatedAreas = [
  {
    id: "mediation",
    title: "Mediation & Arbitration",
    description: "Efficient dispute resolution outside the courtroom.",
    href: "/practice-areas/mediation-arbitration",
  },
  {
    id: "employment",
    title: "Employment Law",
    description: "Workplace rights, contracts, and compliance advisory.",
    href: "/practice-areas/employment-law",
  },
];

export default function CorporateCommercialLawPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ── 1. Hero ────────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 right-0 h-px bg-[var(--brand-accent)]/30" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 70% 40%, var(--brand-accent) 0%, transparent 55%), radial-gradient(circle at 20% 80%, #ffffff 0%, transparent 45%)",
            }}
          />
        </div>

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-3xl">
            <motion.div variants={heroChild}>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-1.5 text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-6 hover:opacity-80 transition-opacity"
              >
                <ChevronRight size={14} className="rotate-180" />
                Practice Areas
              </Link>
            </motion.div>

            <motion.div variants={heroChild}>
              <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-accent)]/15 text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-5">
                Corporate & Commercial
              </span>
            </motion.div>

            <motion.h1
              variants={heroChild}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              Corporate &amp; Commercial Law
            </motion.h1>

            <motion.p
              variants={heroChild}
              className="font-body text-white/70 text-lg leading-relaxed max-w-2xl mb-10"
            >
              Strategic legal counsel for businesses at every stage — from formation and financing through
              to complex cross-border transactions, governance, and commercial dispute resolution.
            </motion.p>

            <motion.div variants={heroChild} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 text-white font-body font-medium text-sm rounded hover:border-white/50 hover:bg-white/5 transition-all duration-200"
              >
                All Practice Areas
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── 2. Overview ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <div>
                <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                  Practice Overview
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-6">
                  Comprehensive Legal Support for Business
                </h2>
                <div className="space-y-4 text-[var(--brand-muted-foreground)] font-body leading-relaxed">
                  <p>
                    MIT Legal Consultants' Corporate &amp; Commercial Law practice serves as a trusted legal
                    partner to businesses ranging from early-stage startups to established multinationals.
                    We provide end-to-end legal support across the full business lifecycle.
                  </p>
                  <p>
                    Our attorneys combine deep transactional expertise with a practical, commercial mindset.
                    We understand that legal advice must be actionable, timely, and aligned with your
                    business objectives — not just technically correct.
                  </p>
                  <p>
                    Whether you are structuring a complex acquisition, negotiating a high-value commercial
                    contract, or navigating a regulatory investigation, our team brings the experience and
                    judgment to guide you to the best possible outcome.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="bg-[var(--brand-muted)] rounded-2xl p-8 border border-[var(--brand-border)]">
                <h3 className="font-heading text-xl font-semibold text-[var(--brand-primary)] mb-6">
                  Why Businesses Choose Us
                </h3>
                <ul className="space-y-4">
                  {[
                    "Commercially focused advice that supports your business goals",
                    "Deep expertise across seven complementary practice areas",
                    "Cross-border capability spanning multiple jurisdictions",
                    "Responsive, partner-led service on every matter",
                    "Transparent fee structures with no hidden costs",
                    "Strict confidentiality and professional discretion",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5"
                      />
                      <span className="font-body text-sm text-[var(--brand-foreground)] leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. Expertise Tiles ───────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-3">
                Areas of Expertise
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight">
                What We Do
              </h2>
            </div>
          </Reveal>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {expertiseAreas.map((area) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.id}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-7 border border-[var(--brand-border)] shadow-[0_1px_3px_rgba(10,31,68,0.05),0_8px_24px_-8px_rgba(10,31,68,0.08)] hover:shadow-[0_4px_12px_rgba(10,31,68,0.10),0_20px_48px_-12px_rgba(10,31,68,0.16)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--brand-primary)]/8 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[var(--brand-primary)]" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-3">
                    {area.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 4. Typical Matters ───────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--brand-primary)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-3">
                Typical Matters
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
                Legal Matters We Handle
              </h2>
              <p className="font-body text-white/60 mt-4 max-w-2xl mx-auto text-base">
                A representative sample of the corporate and commercial matters our attorneys manage
                for clients across industries and jurisdictions.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            <Reveal delay={0.05}>
              <ul className="space-y-3">
                {typicalMattersLeft.map((matter) => (
                  <li
                    key={matter}
                    className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-4"
                  >
                    <ChevronRight
                      size={16}
                      className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5"
                    />
                    <span className="font-body text-sm text-white/80 leading-relaxed">{matter}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="space-y-3">
                {typicalMattersRight.map((matter) => (
                  <li
                    key={matter}
                    className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-4"
                  >
                    <ChevronRight
                      size={16}
                      className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5"
                    />
                    <span className="font-body text-sm text-white/80 leading-relaxed">{matter}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. Related Areas ─────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-[var(--brand-primary)] mb-8">
              Related Practice Areas
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {relatedAreas.map((area) => (
              <Reveal key={area.id}>
                <Link
                  href={area.href}
                  className="group flex items-center justify-between bg-white rounded-xl px-6 py-5 border border-[var(--brand-border)] shadow-[0_1px_3px_rgba(10,31,68,0.05)] hover:shadow-[0_4px_16px_rgba(10,31,68,0.12)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div>
                    <p className="font-heading text-base font-semibold text-[var(--brand-primary)] mb-1">
                      {area.title}
                    </p>
                    <p className="font-body text-sm text-[var(--brand-muted-foreground)]">
                      {area.description}
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-[var(--brand-accent)] flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA ───────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
              Get Started
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-5">
              Ready to Discuss Your Corporate Legal Needs?
            </h2>
            <p className="font-body text-[var(--brand-muted-foreground)] text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Our corporate and commercial attorneys are available for a confidential consultation.
              Contact us today to discuss how we can support your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--brand-primary)] text-white font-body font-bold text-sm rounded hover:bg-[#0d2a5e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[var(--brand-border)] text-[var(--brand-primary)] font-body font-medium text-sm rounded hover:border-[var(--brand-primary)]/40 hover:bg-[var(--brand-muted)] transition-all duration-200"
              >
                View All Practice Areas
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
