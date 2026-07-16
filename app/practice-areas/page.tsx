"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Briefcase, Scale, Heart, Globe, FileText, Users, ArrowRight, ChevronRight } from 'lucide-react';
import { practiceAreas, BRAND_NAME } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from "@/lib/motion";
import type { Metadata } from "next";

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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeInUp}
              className="inline-flex items-center gap-2 text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-[0.18em] mb-5"
            >
              <span className="w-6 h-px bg-[var(--brand-accent)]" />
              MIT Legal Consultants
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight text-balance mb-6"
            >
              Comprehensive Legal Services{" "}
              <span className="text-[var(--brand-accent)]">Across Every Domain</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="font-body text-white/70 text-lg leading-relaxed max-w-2xl"
            >
              From corporate transactions to family matters, from international treaties to employment disputes — our seven practice areas cover the full spectrum of legal need with depth, precision, and unwavering commitment.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white font-body text-sm font-medium transition-colors duration-200"
              >
                About the Firm
                <ChevronRight size={15} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.06))" }}
        />
      </section>

      {/* ── Intro paragraph ──────────────────────────────────────────────── */}
      <Reveal>
        <section className="bg-white border-b border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-[0.18em] mb-4">
                  Our Breadth of Expertise
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-5">
                  One Firm. Seven Disciplines. Uncompromising Standards.
                </h2>
                <p className="font-body text-[var(--brand-text)]/70 text-base leading-relaxed mb-4">
                  MIT Legal Consultants was founded on the belief that clients deserve more than narrow specialisation — they deserve a firm capable of seeing the full legal landscape and advising accordingly. Our seven practice areas are not siloed departments; they are interconnected disciplines staffed by attorneys who collaborate across boundaries to deliver holistic, strategically coherent counsel.
                </p>
                <p className="font-body text-[var(--brand-text)]/70 text-base leading-relaxed">
                  Whether you are a multinational corporation navigating a cross-border acquisition, a government agency requiring bespoke legislative drafting, or an individual facing a family dispute, our teams bring the same rigour, ethical commitment, and client-first philosophy to every matter we handle.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "20+", label: "Years of Practice" },
                    { value: "7", label: "Practice Areas" },
                    { value: "500+", label: "Matters Resolved" },
                    { value: "98%", label: "Client Satisfaction" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-[var(--brand-primary)]/[0.03] border border-[var(--brand-primary)]/8 rounded-xl p-5 text-center"
                    >
                      <p className="font-heading text-3xl font-bold text-[var(--brand-primary)] leading-none mb-1">
                        {stat.value}
                      </p>
                      <p className="font-body text-xs text-[var(--brand-text)]/60 uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Seven-card grid ───────────────────────────────────────────────── */}
      <section className="bg-[#F7F8FA] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-[0.18em] mb-3">
                Practice Areas
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance">
                Explore Our Legal Services
              </h2>
              <p className="font-body text-[var(--brand-text)]/60 text-base mt-4 leading-relaxed">
                Select a practice area to learn about our expertise, the matters we handle, and how we can assist you.
              </p>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {practiceAreas.map((area, index) => {
              const details = practiceDetails[area.id] ?? {
                tagline: area.shortDescription,
                expertise: [],
              };
              const isLast = index === practiceAreas.length - 1;

              return (
                <motion.div
                  key={area.id}
                  variants={fadeInUp}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className={isLast ? "md:col-span-2 md:max-w-[calc(50%-12px)]" : ""}
                >
                  <motion.article
                    variants={cardHover}
                    className="group h-full bg-white rounded-2xl border border-black/[0.06] p-7 flex flex-col cursor-pointer"
                    style={{ willChange: "transform, box-shadow" }}
                  >
                    {/* Icon + title row */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[var(--brand-primary)]/[0.06] flex items-center justify-center text-[var(--brand-primary)] group-hover:bg-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-all duration-300">
                        {iconMap[area.icon] ?? <Briefcase size={28} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading text-xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight mb-1">
                          {area.title}
                        </h3>
                        <p className="font-body text-[var(--brand-accent)] text-xs font-semibold leading-snug">
                          {details.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-body text-[var(--brand-text)]/65 text-sm leading-relaxed mb-5 flex-1">
                      {area.shortDescription}
                    </p>

                    {/* Expertise tags */}
                    {details.expertise.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {details.expertise.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block px-3 py-1 bg-[var(--brand-primary)]/[0.05] text-[var(--brand-primary)] text-xs font-body font-medium rounded-full border border-[var(--brand-primary)]/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* CTA link */}
                    <Link
                      href={area.href}
                      className="inline-flex items-center gap-2 text-[var(--brand-accent)] font-body font-semibold text-sm hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] rounded"
                      aria-label={`Learn more about ${area.title}`}
                    >
                      Learn More
                      <motion.span variants={arrowHover}>
                        <ArrowRight size={15} />
                      </motion.span>
                    </Link>
                  </motion.article>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Why choose us strip ───────────────────────────────────────────── */}
      <Reveal>
        <section className="bg-white border-y border-black/5 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "⚖️",
                  title: "Ethical Practice",
                  body: "Every engagement is governed by the highest standards of professional ethics and client confidentiality.",
                },
                {
                  icon: "🌍",
                  title: "Global Reach",
                  body: "Our international law capabilities extend your legal protection across jurisdictions and borders.",
                },
                {
                  icon: "🤝",
                  title: "Client-First Approach",
                  body: "We listen before we advise. Your objectives shape our strategy from the first consultation.",
                },
                {
                  icon: "📋",
                  title: "Proven Track Record",
                  body: "Decades of successful outcomes across commercial, civil, and public law matters speak for themselves.",
                },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <span className="text-3xl" role="img" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[var(--brand-primary)] leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-body text-[var(--brand-text)]/65 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Bottom CTA banner ─────────────────────────────────────────────── */}
      <Reveal>
        <section className="bg-[var(--brand-primary)] relative overflow-hidden">
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 90% 50%, rgba(201,168,76,0.12) 0%, transparent 65%)",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-[0.18em] mb-4">
                Ready to Get Started?
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight text-balance mb-5">
                Schedule Your Consultation Today
              </h2>
              <p className="font-body text-white/65 text-base leading-relaxed mb-8 max-w-xl mx-auto">
                Our attorneys are ready to assess your matter, explain your options, and chart the most effective path forward. Reach out for a confidential, no-obligation consultation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)] shadow-[0_4px_20px_rgba(201,168,76,0.35)]"
                >
                  Book a Consultation
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-body font-semibold text-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Meet Our Attorneys
                  <ChevronRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}