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
      {/* ── 1. Hero ─────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, var(--brand-accent) 0%, transparent 60%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <motion.nav variants={heroChild} aria-label="Breadcrumb" className="flex items-center gap-2 mb-8">
              <Link
                href="/"
                className="text-white/50 hover:text-white/80 text-xs font-body uppercase tracking-widest transition-colors duration-200"
              >
                Home
              </Link>
              <ChevronRight size={12} className="text-white/30" aria-hidden="true" />
              <Link
                href="/practice-areas"
                className="text-white/50 hover:text-white/80 text-xs font-body uppercase tracking-widest transition-colors duration-200"
              >
                Practice Areas
              </Link>
              <ChevronRight size={12} className="text-white/30" aria-hidden="true" />
              <span className="text-[var(--brand-accent)] text-xs font-body uppercase tracking-widest">
                Corporate &amp; Commercial
              </span>
            </motion.nav>

            {/* Gold accent rule */}
            <motion.div
              variants={heroChild}
              className="w-14 h-1 bg-[var(--brand-accent)] rounded-full mb-6"
              aria-hidden="true"
            />

            <motion.h1
              variants={heroChild}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance mb-6"
            >
              Corporate &amp; Commercial Law
            </motion.h1>

            <motion.p
              variants={heroChild}
              className="font-body text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mb-10"
            >
              Strategic legal counsel for businesses at every stage. From incorporation to complex cross-border transactions, we protect your commercial interests with precision and expertise.
            </motion.p>

            <motion.div variants={heroChild} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)] shadow-[0_4px_14px_rgba(201,168,76,0.35)]"
              >
                Speak to an Expert
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                All Practice Areas
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent" aria-hidden="true" />
      </section>

      {/* ── 2. Service Overview ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
                <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                  Practice Overview
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                  Comprehensive Legal Support for Every Business Need
                </h2>
                <div className="w-12 h-0.5 bg-[var(--brand-accent)] mb-8" aria-hidden="true" />
                <p className="font-body text-[var(--brand-text-secondary)] leading-relaxed mb-5">
                  Our Corporate and Commercial Law practice is the cornerstone of MIT Legal Consultants. We advise a diverse client base spanning start-ups, established enterprises, multinational corporations, and financial institutions on the full spectrum of corporate and commercial legal matters.
                </p>
                <p className="font-body text-[var(--brand-text-secondary)] leading-relaxed mb-5">
                  Whether you are structuring a new business venture, negotiating a complex acquisition, or navigating the regulatory requirements of a new market, our team brings deep technical knowledge and commercial acumen to every engagement. We understand that legal advice must be practical, timely, and aligned with your business objectives.
                </p>
                <p className="font-body text-[var(--brand-text-secondary)] leading-relaxed">
                  With experience spanning multiple jurisdictions and industries, we are equipped to handle the most sophisticated transactions and provide clear, actionable guidance that enables confident decision-making at every level of your organisation.
                </p>
              </motion.div>
            </Reveal>

            <Reveal delay={0.15}>
              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,31,68,0.15)]">
                  <img
                    src="https://worklifelaw.org/wp-content/uploads/2017/03/group-of-lawyers-business-people-at-conference-table.jpg"
                    alt="Corporate law professionals in a boardroom meeting"
                    className="w-full h-80 lg:h-96 object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-primary)]/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
                      <p className="font-heading text-white text-lg font-semibold mb-1">
                        20+ Years of Experience
                      </p>
                      <p className="font-body text-white/70 text-sm">
                        Trusted by businesses across Africa, Europe, and beyond.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Decorative accent */}
                <div
                  className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-[var(--brand-accent)]/10 -z-10"
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-4 -left-4 w-20 h-20 rounded-xl bg-[var(--brand-primary)]/5 -z-10"
                  aria-hidden="true"
                />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. Expertise Highlights ─────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[var(--brand-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                Areas of Expertise
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-4">
                What We Do Best
              </h2>
              <p className="font-body text-[var(--brand-text-secondary)] leading-relaxed">
                Our corporate and commercial team delivers specialist expertise across six core disciplines, providing integrated advice that addresses every dimension of your business legal needs.
              </p>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {expertiseAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.id}
                  variants={fadeInUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-7 border border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(10,31,68,0.12)] transition-shadow duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/8 flex items-center justify-center mb-5 group-hover:bg-[var(--brand-accent)]/15 transition-colors duration-300">
                    <Icon
                      size={22}
                      className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-3 leading-snug">
                    {area.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--brand-text-secondary)] leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 4. Typical Matters + 5. CTA Sidebar ────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Typical Matters — spans 2 cols */}
            <div className="lg:col-span-2">
              <Reveal>
                <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                  Typical Matters
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-4">
                  Matters We Handle
                </h2>
                <div className="w-12 h-0.5 bg-[var(--brand-accent)] mb-8" aria-hidden="true" />
                <p className="font-body text-[var(--brand-text-secondary)] leading-relaxed mb-10">
                  Our corporate and commercial practice handles a broad range of matters for clients across industries. Below is a representative selection of the work we undertake on a regular basis.
                </p>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-0">
                <Reveal delay={0.05}>
                  <ul className="space-y-4" role="list">
                    {typicalMattersLeft.map((matter, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle
                          size={17}
                          className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="font-body text-sm text-[var(--brand-text-secondary)] leading-relaxed">
                          {matter}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={0.1}>
                  <ul className="space-y-4 mt-4 sm:mt-0" role="list">
                    {typicalMattersRight.map((matter, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle
                          size={17}
                          className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="font-body text-sm text-[var(--brand-text-secondary)] leading-relaxed">
                          {matter}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>

            {/* ── 5. CTA Sidebar ──────────────────────────────────── */}
            <div className="lg:col-span-1">
              <Reveal delay={0.2}>
                <div className="sticky top-28">
                  {/* Primary CTA card */}
                  <div className="bg-[var(--brand-primary)] rounded-2xl p-8 shadow-[0_8px_40px_rgba(10,31,68,0.2)] mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[var(--brand-accent)]/20 flex items-center justify-center mb-5">
                      <Briefcase size={20} className="text-[var(--brand-accent)]" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3 leading-snug">
                      Speak to a Corporate Law Expert
                    </h3>
                    <p className="font-body text-white/65 text-sm leading-relaxed mb-7">
                      Our corporate and commercial team is ready to advise on your specific situation. Reach out for a confidential consultation.
                    </p>

                    <div className="space-y-4 mb-7">
                      <a
                        href="tel:+233302000000"
                        className="flex items-center gap-3 group"
                        aria-label="Call our corporate law team"
                      >
                        <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-accent)]/20 transition-colors duration-200">
                          <Phone size={15} className="text-[var(--brand-accent)]" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-white/40 text-xs font-body uppercase tracking-wider leading-none mb-0.5">
                            Phone
                          </p>
                          <p className="text-white text-sm font-body font-medium group-hover:text-[var(--brand-accent)] transition-colors duration-200">
                            +233 30 200 0000
                          </p>
                        </div>
                      </a>

                      <a
                        href="mailto:corporate@mitlegal.com"
                        className="flex items-center gap-3 group"
                        aria-label="Email our corporate law team"
                      >
                        <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-accent)]/20 transition-colors duration-200">
                          <Mail size={15} className="text-[var(--brand-accent)]" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-white/40 text-xs font-body uppercase tracking-wider leading-none mb-0.5">
                            Email
                          </p>
                          <p className="text-white text-sm font-body font-medium group-hover:text-[var(--brand-accent)] transition-colors duration-200">
                            corporate@mitlegal.com
                          </p>
                        </div>
                      </a>
                    </div>

                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-xl hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
                    >
                      Send an Enquiry
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>

                  {/* Confidentiality note */}
                  <div className="bg-[var(--brand-surface)] rounded-xl p-5 border border-black/5">
                    <div className="flex items-start gap-3">
                      <Shield size={16} className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="font-body text-xs text-[var(--brand-text-secondary)] leading-relaxed">
                        All enquiries are treated with strict confidentiality. Initial consultations are obligation-free.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Related Practice Areas ───────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--brand-surface)] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-3">
                  Related Services
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight">
                  Related Practice Areas
                </h2>
              </div>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-1.5 text-[var(--brand-primary)] font-body font-semibold text-sm hover:text-[var(--brand-accent)] transition-colors duration-200 group flex-shrink-0"
              >
                View All Areas
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {relatedAreas.map((area, i) => (
              <motion.div key={area.id} variants={fadeInUp}>
                <Link
                  href={area.href}
                  className="group flex items-center justify-between gap-6 bg-white rounded-2xl p-7 border border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(10,31,68,0.12)] hover:border-[var(--brand-accent)]/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
                >
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-2 group-hover:text-[var(--brand-accent)] transition-colors duration-200">
                      {area.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--brand-text-secondary)] leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[var(--brand-primary)]/6 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-accent)]/15 transition-colors duration-300">
                    <ArrowRight
                      size={18}
                      className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] group-hover:translate-x-0.5 transition-all duration-200"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}