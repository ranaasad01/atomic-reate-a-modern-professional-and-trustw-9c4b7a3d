"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Briefcase, FileText, Shield, GitBranch, Scale, AlertCircle, Phone, Mail, ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
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
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 80% 40%, rgba(201,168,76,0.12) 0%, transparent 65%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(255,255,255,0.04) 0%, transparent 60%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(var(--brand-accent) 1px, transparent 1px), linear-gradient(90deg, var(--brand-accent) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Breadcrumb */}
          <motion.nav
            variants={heroChild}
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-white/50 text-xs font-body mb-8"
          >
            <Link href="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/practice-areas" className="hover:text-white/80 transition-colors">
              Practice Areas
            </Link>
            <ChevronRight size={12} />
            <span className="text-[var(--brand-accent)]">Corporate &amp; Commercial Law</span>
          </motion.nav>

          <div className="max-w-3xl">
            <motion.div variants={heroChild} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/15 border border-[var(--brand-accent)]/30 flex items-center justify-center">
                <Briefcase size={20} className="text-[var(--brand-accent)]" />
              </div>
              <span className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest">
                Practice Area
              </span>
            </motion.div>

            <motion.h1
              variants={heroChild}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Corporate &amp; Commercial Law
            </motion.h1>

            <motion.p
              variants={heroChild}
              className="font-body text-white/70 text-lg leading-relaxed mb-10 max-w-2xl"
            >
              MIT Legal Consultants delivers comprehensive corporate and commercial legal services to
              businesses of every size — from start-ups navigating their first incorporation to
              multinationals executing complex cross-border transactions.
            </motion.p>

            <motion.div variants={heroChild} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-4">
                  Overview
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-6">
                  Strategic Legal Counsel for Business
                </h2>
                <div className="space-y-4 font-body text-[var(--brand-muted-foreground)] leading-relaxed">
                  <p>
                    MIT Legal Consultants provides end-to-end corporate and commercial legal support
                    to businesses operating across diverse sectors and jurisdictions. Our attorneys
                    combine deep transactional expertise with a practical, commercially-minded approach
                    that helps clients achieve their business objectives while managing legal risk.
                  </p>
                  <p>
                    From company formation and corporate governance to mergers, acquisitions, and
                    complex commercial contracts, MIT Legal Consultants acts as a trusted legal
                    partner at every stage of the business lifecycle. We understand that legal
                    decisions have real commercial consequences, and we structure our advice
                    accordingly.
                  </p>
                  <p>
                    Our team has advised listed companies, private equity funds, family-owned
                    businesses, start-ups, and government-linked entities across a wide range of
                    industries including banking, energy, real estate, technology, and manufacturing.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "200+", label: "Corporate Transactions Advised" },
                  { value: "15+", label: "Jurisdictions Covered" },
                  { value: "98%", label: "Client Retention Rate" },
                  { value: "20+", label: "Years of Experience" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[var(--brand-muted)] rounded-xl p-6 text-center"
                  >
                    <p className="font-heading text-3xl font-bold text-[var(--brand-primary)] mb-1">
                      {stat.value}
                    </p>
                    <p className="font-body text-xs text-[var(--brand-muted-foreground)] leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. Expertise Areas ───────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-3">
                Areas of Expertise
              </p>
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
                  className="bg-white rounded-xl p-7 border border-[var(--brand-border)] hover:border-[var(--brand-accent)]/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-[var(--brand-primary)]/8 flex items-center justify-center mb-5 group-hover:bg-[var(--brand-accent)]/10 transition-colors duration-300">
                    <Icon size={22} className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-300" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-3">
                Typical Matters
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight">
                Legal Matters We Handle
              </h2>
              <p className="font-body text-[var(--brand-muted-foreground)] mt-4 leading-relaxed">
                MIT Legal Consultants regularly advises on a broad range of corporate and commercial
                matters, including:
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            <Reveal>
              <ul className="space-y-3">
                {typicalMattersLeft.map((matter) => (
                  <li key={matter} className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5"
                    />
                    <span className="font-body text-sm text-[var(--brand-foreground)] leading-relaxed">
                      {matter}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="space-y-3 mt-3 md:mt-0">
                {typicalMattersRight.map((matter) => (
                  <li key={matter} className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5"
                    />
                    <span className="font-body text-sm text-[var(--brand-foreground)] leading-relaxed">
                      {matter}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. Why Choose MIT Legal Consultants ─────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--brand-primary)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-3">
                Why Choose Us
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
                The MIT Legal Consultants Advantage
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: "w1",
                title: "Commercial Acumen",
                body: "We understand that legal advice must serve business objectives. Our attorneys think commercially, not just legally.",
              },
              {
                id: "w2",
                title: "Cross-Border Capability",
                body: "With experience across multiple African and international jurisdictions, MIT Legal Consultants handles complex multi-jurisdictional transactions with confidence.",
              },
              {
                id: "w3",
                title: "Senior-Led Teams",
                body: "Every matter is led by a senior attorney. You receive experienced, partner-level attention from instruction through to completion.",
              },
              {
                id: "w4",
                title: "Sector Depth",
                body: "Our corporate team has deep sector knowledge in banking, energy, real estate, technology, and infrastructure — enabling faster, more relevant advice.",
              },
              {
                id: "w5",
                title: "Responsive Service",
                body: "We are accessible, responsive, and committed to keeping you informed at every stage. Deadlines are never missed.",
              },
              {
                id: "w6",
                title: "Confidentiality",
                body: "All matters are handled with absolute discretion. MIT Legal Consultants maintains the highest standards of client confidentiality.",
              },
            ].map((point) => (
              <Reveal key={point.id}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/8 transition-colors duration-300">
                  <h3 className="font-heading text-lg font-semibold text-white mb-3">
                    {point.title}
                  </h3>
                  <p className="font-body text-sm text-white/65 leading-relaxed">{point.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Related Practice Areas ────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-10">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-3">
                Related Services
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--brand-primary)]">
                Explore Related Practice Areas
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {relatedAreas.map((area) => (
              <Reveal key={area.id}>
                <Link
                  href={area.href}
                  className="group flex items-center justify-between bg-white border border-[var(--brand-border)] rounded-xl p-6 hover:border-[var(--brand-accent)]/50 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-1 group-hover:text-[var(--brand-accent)] transition-colors duration-200">
                      {area.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--brand-muted-foreground)]">
                      {area.description}
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-[var(--brand-muted-foreground)] group-hover:text-[var(--brand-accent)] group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 ml-4"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA ───────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="bg-[var(--brand-primary)] rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 80% at 80% 20%, rgba(201,168,76,0.12) 0%, transparent 60%)",
                }}
              />
              <p className="relative font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-4">
                Get Started
              </p>
              <h2 className="relative font-heading text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
                Ready to Discuss Your Corporate Legal Needs?
              </h2>
              <p className="relative font-body text-white/70 text-base leading-relaxed mb-8 max-w-xl mx-auto">
                Contact MIT Legal Consultants today to schedule a confidential consultation with one
                of our corporate and commercial law specialists.
              </p>
              <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
                >
                  Schedule a Consultation
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:+233300000000"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/25 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  <Phone size={16} />
                  Call Us Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
