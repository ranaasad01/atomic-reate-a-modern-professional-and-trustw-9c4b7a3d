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

      {/* Practice Area Cards */}
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
              const details = practiceDetails[area.id];
              const icon = iconMap[area.icon] ?? <Briefcase size={28} />;
              return (
                <motion.div key={area.id} variants={fadeInUp}>
                  <motion.div
                    className="bg-white rounded-2xl p-8 h-full flex flex-col border border-[var(--brand-border)] cursor-pointer"
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-[var(--brand-primary)] text-[var(--brand-accent)] flex items-center justify-center mb-6 flex-shrink-0">
                      {icon}
                    </div>

                    {/* Title */}
                    <h2 className="font-heading text-xl font-bold text-[var(--brand-primary)] mb-2 leading-snug">
                      {area.title}
                    </h2>

                    {/* Tagline */}
                    {details && (
                      <p className="text-[var(--brand-accent)] text-sm font-body font-medium italic mb-3">
                        {details.tagline}
                      </p>
                    )}

                    {/* Short description */}
                    <p className="text-[var(--brand-muted-foreground)] text-sm font-body leading-relaxed mb-5">
                      {area.shortDescription}
                    </p>

                    {/* Expertise tags */}
                    {details && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {details.expertise.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-[var(--brand-muted)] text-[var(--brand-primary)] text-xs font-body font-medium rounded-full"
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
                        className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-body font-semibold text-sm hover:text-[var(--brand-accent)] transition-colors group"
                      >
                        Learn More
                        <motion.span variants={arrowHover}>
                          <ArrowRight size={16} />
                        </motion.span>
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[var(--brand-primary)] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Not Sure Which Practice Area Fits Your Needs?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/70 font-body text-lg mb-8">
              Our team will assess your situation and connect you with the right specialist. Schedule a
              confidential consultation today.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-base rounded-xl hover:bg-[var(--brand-accent)]/90 transition-all duration-200 shadow-lg"
            >
              Schedule a Consultation
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
