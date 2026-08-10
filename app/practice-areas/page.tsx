"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Briefcase, Scale, Heart, Globe, FileText, Users, ArrowRight } from 'lucide-react';
import { practiceAreas } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/motion";

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
      {/* Hero */}
      <section className="bg-[var(--brand-primary)] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--brand-accent)]/20 text-[var(--brand-accent)] text-xs font-body font-semibold tracking-widest uppercase mb-6">
              Our Expertise
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Practice Areas
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/70 text-lg font-body leading-relaxed max-w-2xl mx-auto">
              Seven distinct areas of legal expertise, each staffed by specialists committed to delivering
              strategic, results-driven counsel for individuals, businesses, and institutions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Practice Area Cards Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {practiceAreas.map((area) => {
              const details = practiceDetails[area.id] ?? {
                tagline: area.shortDescription,
                expertise: [],
              };
              return (
                <motion.div key={area.id} variants={fadeInUp}>
                  <motion.div
                    className="group bg-white rounded-2xl border border-[var(--brand-border)] overflow-hidden cursor-pointer h-full flex flex-col"
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* Card top accent bar */}
                    <div className="h-1 w-full bg-[var(--brand-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="p-8 flex flex-col flex-1">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-[var(--brand-primary)]/8 flex items-center justify-center text-[var(--brand-primary)] mb-6 group-hover:bg-[var(--brand-accent)]/10 group-hover:text-[var(--brand-accent)] transition-colors duration-300">
                        {iconMap[area.icon] ?? <Briefcase size={28} />}
                      </div>

                      {/* Title */}
                      <h2 className="font-heading text-xl font-semibold text-[var(--brand-primary)] mb-3 leading-snug">
                        {area.title}
                      </h2>

                      {/* Tagline */}
                      <p className="font-body text-[var(--brand-muted-foreground)] text-sm leading-relaxed mb-6">
                        {details.tagline}
                      </p>

                      {/* Expertise tags */}
                      {details.expertise.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {details.expertise.map((tag) => (
                            <span
                              key={tag}
                              className="inline-block px-3 py-1 rounded-full bg-[var(--brand-muted)] text-[var(--brand-primary)] text-xs font-body font-medium"
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
                          className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-body font-semibold text-sm hover:text-[var(--brand-accent)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] rounded"
                          aria-label={`Learn more about ${area.title}`}
                        >
                          Learn More
                          <motion.span variants={arrowHover}>
                            <ArrowRight size={16} />
                          </motion.span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--brand-primary)] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Not Sure Which Practice Area Fits Your Needs?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/70 font-body text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Our attorneys will assess your situation and connect you with the right specialist. Schedule a confidential consultation today.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[#b8922e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-body font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                About Our Firm
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
