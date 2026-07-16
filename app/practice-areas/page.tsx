"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Briefcase, Scale, Heart, Globe, FileText, Users, ArrowRight, ChevronRight } from 'lucide-react';
import { practiceAreas, BRAND_NAME } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from "@/lib/motion";

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase size={28} />,
  Scale: <Scale size={28} />,
  Gavel: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m14 13-8.5 8.5a2.12 2.12 0 0 1-3-3L11 10" />
      <path d="m16 16 6-6" />
      <path d="m8 8 6-6" />
      <path d="m9 7 8 8" />
    </svg>
  ),
  Heart: <Heart size={28} />,
  Globe: <Globe size={28} />,
  FileText: <FileText size={28} />,
  Users: <Users size={28} />,
};

const cardHover: Variants = {
  rest: { y: 0, boxShadow: "0 1px 3px rgba(10,31,68,0.06), 0 8px 24px -8px rgba(10,31,68,0.10)" },
  hover: { y: -6, boxShadow: "0 4px 12px rgba(10,31,68,0.10), 0 20px 48px -12px rgba(10,31,68,0.22)" },
};

const arrowHover: Variants = {
  rest: { x: 0 },
  hover: { x: 5 },
};

const practiceDetails: Record<string, { tagline: string; expertise: string[] }> = {
  "corporate-commercial": {
    tagline: "Structuring deals and protecting business interests at every stage.",
    expertise: ["Business Formation", "M&A", "Commercial Contracts", "Corporate Governance"],
  },
  "mediation-arbitration": {
    tagline: "Resolving disputes efficiently, confidentially, and cost-effectively.",
    expertise: ["Commercial Mediation", "International Arbitration", "ADR Strategy", "Settlement Facilitation"],
  },
  "civil-criminal-litigation": {
    tagline: "Tenacious advocacy in courtrooms at every level of the judiciary.",
    expertise: ["Civil Claims", "Criminal Defence", "Appeals", "Injunctions & Enforcement"],
  },
  "family-law": {
    tagline: "Sensitive, strategic counsel through life's most personal legal challenges.",
    expertise: ["Divorce & Separation", "Child Custody", "Adoption", "Matrimonial Property"],
  },
  "public-international-law": {
    tagline: "Navigating treaties, trade, and diplomacy across borders.",
    expertise: ["Treaty Negotiation", "International Trade", "Diplomatic Immunity", "Cross-Border Disputes"],
  },
  "legislative-drafting": {
    tagline: "Crafting clear, enforceable laws and policy frameworks for institutions.",
    expertise: ["Bill Drafting", "Regulatory Frameworks", "Policy Analysis", "Statutory Interpretation"],
  },
  "employment-law": {
    tagline: "Balancing workplace rights, obligations, and compliance for all parties.",
    expertise: ["Employment Contracts", "Unfair Dismissal", "Workplace Disputes", "HR Compliance"],
  },
};

export default function PracticeAreasPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden">
        {/* Decorative mesh */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(201,168,76,0.10) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 10% 80%, rgba(255,255,255,0.04) 0%, transparent 60%)",
          }}
        />
        {/* Subtle grid overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--brand-accent) 1px, transparent 1px), linear-gradient(90deg, var(--brand-accent) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-3xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[var(--brand-accent)]" />
              <span className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em]">
                Our Expertise
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
            >
              Practice Areas
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="font-body text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10"
            >
              {BRAND_NAME} offers comprehensive legal services across seven distinct practice areas,
              delivering expert counsel to individuals, corporations, governments, and international
              organisations.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                About the Firm
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
      </section>

      {/* ── Intro strip ──────────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] mb-4">
                  Comprehensive Legal Services Under One Roof
                </h2>
                <p className="font-body text-[var(--brand-muted-foreground)] text-base leading-relaxed">
                  From corporate transactions to family matters, from international arbitration to legislative
                  drafting — {BRAND_NAME} brings deep specialization and cross-disciplinary insight to every
                  client engagement.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-colors duration-200"
                >
                  Contact Us
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Stat bar */}
          <Reveal delay={0.1}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "7", label: "Practice Areas" },
                { value: "20+", label: "Years of Excellence" },
                { value: "500+", label: "Matters Resolved" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-xl bg-[var(--brand-muted)] border border-[var(--brand-border)]"
                >
                  <p className="font-heading text-3xl font-bold text-[var(--brand-primary)] mb-1">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs text-[var(--brand-muted-foreground)] uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Practice Area Cards ───────────────────────────────────────────── */}
      <section className="bg-[var(--brand-background)] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em]">
                Seven Areas of Expertise
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] mt-3 mb-4">
                Explore Our Practice Areas
              </h2>
              <p className="font-body text-[var(--brand-muted-foreground)] max-w-2xl mx-auto">
                Each practice area is led by attorneys with deep domain expertise, ensuring you receive
                focused, authoritative counsel tailored to your specific legal needs.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, index) => {
              const details = practiceDetails[area.id] ?? {
                tagline: area.shortDescription,
                expertise: [],
              };
              return (
                <Reveal key={area.id} delay={index * 0.07}>
                  <motion.div
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="group bg-white rounded-2xl border border-[var(--brand-border)] overflow-hidden cursor-pointer h-full flex flex-col"
                  >
                    {/* Card top accent bar */}
                    <div className="h-1 w-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)]" />

                    <div className="p-7 flex flex-col flex-1">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-[var(--brand-primary)]/8 flex items-center justify-center text-[var(--brand-primary)] mb-5 group-hover:bg-[var(--brand-accent)]/10 group-hover:text-[var(--brand-accent)] transition-colors duration-300">
                        {iconMap[area.icon] ?? <Briefcase size={28} />}
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-xl font-bold text-[var(--brand-primary)] mb-2 leading-snug">
                        {area.title}
                      </h3>

                      {/* Tagline */}
                      <p className="font-body text-[var(--brand-accent)] text-xs font-semibold mb-3">
                        {details.tagline}
                      </p>

                      {/* Description */}
                      <p className="font-body text-[var(--brand-muted-foreground)] text-sm leading-relaxed mb-5">
                        {area.shortDescription}
                      </p>

                      {/* Expertise tags */}
                      {details.expertise.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {details.expertise.map((tag) => (
                            <span
                              key={tag}
                              className="font-body text-xs px-2.5 py-1 rounded-full bg-[var(--brand-muted)] text-[var(--brand-primary)] border border-[var(--brand-border)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* CTA link */}
                      <div className="mt-auto">
                        <Link
                          href={area.href}
                          className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-[var(--brand-primary)] hover:text-[var(--brand-accent)] transition-colors duration-200 group/link"
                          aria-label={`Learn more about ${area.title}`}
                        >
                          <span>Explore Practice Area</span>
                          <motion.span variants={arrowHover}>
                            <ChevronRight size={16} />
                          </motion.span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose MIT Legal ──────────────────────────────────────────── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <Reveal>
              <div>
                <span className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em]">
                  Why {BRAND_NAME}
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] mt-3 mb-6">
                  A Firm Built on Expertise,
                  <br />
                  Integrity & Results
                </h2>
                <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed mb-8">
                  Choosing the right legal counsel is one of the most important decisions you will make.
                  {BRAND_NAME} combines decades of experience, multidisciplinary expertise, and an
                  unwavering commitment to client outcomes across every practice area.
                </p>
                <ul className="space-y-4">
                  {[
                    "Deep specialization across seven distinct practice areas",
                    "Proven track record with individuals, corporations, and governments",
                    "Cross-border expertise spanning multiple jurisdictions",
                    "Strict confidentiality and the highest ethical standards",
                    "Responsive, client-centered service at every stage",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--brand-accent)]/15 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-[var(--brand-accent)]" />
                      </span>
                      <span className="font-body text-[var(--brand-foreground)] text-sm leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Right — decorative card stack */}
            <Reveal delay={0.15}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-[var(--brand-muted)] border border-[var(--brand-border)]" />
                <div className="relative bg-[var(--brand-primary)] rounded-2xl p-8 text-white">
                  <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-6">
                    Our Commitment
                  </p>
                  <blockquote className="font-heading text-xl font-medium leading-relaxed mb-8">
                    &ldquo;We do not just provide legal advice — we become trusted partners in our clients&rsquo;
                    success, delivering practical solutions that stand up in the real world.&rdquo;
                  </blockquote>
                  <div className="border-t border-white/20 pt-6">
                    <p className="font-body text-white/80 text-sm">
                      — The Partners, {BRAND_NAME}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <section className="bg-[var(--brand-primary)] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em]">
              Get Started
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3 mb-5">
              Ready to Discuss Your Legal Matter?
            </h2>
            <p className="font-body text-white/70 text-lg max-w-2xl mx-auto mb-10">
              Contact {BRAND_NAME} today to schedule a confidential consultation with one of our
              specialist attorneys.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Meet Our Attorneys
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
