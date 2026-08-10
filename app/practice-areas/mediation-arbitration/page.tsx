"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Scale, CheckCircle, ArrowRight, Shield, Clock, Globe, Users, ChevronRight, FileText, Handshake, BarChart3, Zap } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { fadeInUp, staggerContainer, scaleIn, slideInLeft, slideInRight } from "@/lib/motion";
import { useTranslations } from "next-intl";

const expertiseTiles = [
  {
    id: "commercial-mediation",
    icon: Handshake,
    title: "Commercial Mediation",
    description: "Structured facilitation of commercial disputes between businesses, enabling parties to reach mutually acceptable settlements while preserving commercial relationships.",
  },
  {
    id: "international-arbitration",
    icon: Globe,
    title: "International Arbitration",
    description: "Expert representation and advisory in cross-border arbitration proceedings under ICC, UNCITRAL, LCIA, and ICSID rules, with experience across multiple jurisdictions.",
  },
  {
    id: "domestic-arbitration",
    icon: Scale,
    title: "Domestic Arbitration",
    description: "Efficient resolution of domestic disputes through binding arbitration, offering a private, expert-led alternative to lengthy court proceedings.",
  },
  {
    id: "investor-state",
    icon: BarChart3,
    title: "Investor-State Disputes",
    description: "Specialized counsel in investment treaty arbitration, protecting the rights of investors and states under bilateral investment treaties and multilateral frameworks.",
  },
  {
    id: "construction-disputes",
    icon: Shield,
    title: "Construction & Engineering",
    description: "ADR services tailored to complex construction and infrastructure disputes, including FIDIC-based claims, delay analysis, and quantum assessments.",
  },
  {
    id: "expedited-proceedings",
    icon: Zap,
    title: "Expedited Proceedings",
    description: "Fast-track mediation and arbitration procedures for time-sensitive matters, delivering enforceable outcomes without sacrificing procedural fairness.",
  },
];

const typicalMatters = [
  "Multi-party commercial contract disputes requiring neutral facilitation",
  "Cross-border trade and investment arbitration under ICC Rules",
  "UNCITRAL arbitration proceedings in international commercial matters",
  "Shareholder and joint venture disputes resolved through binding arbitration",
  "Construction project delays, defects, and cost overrun claims",
  "Intellectual property licensing and royalty disputes",
  "Employment and executive compensation disputes via confidential mediation",
  "Energy sector disputes including oil, gas, and renewable energy contracts",
  "Financial services and banking disputes requiring expert determination",
  "Post-M&A earn-out and warranty claim arbitrations",
  "Real estate and property development disputes",
  "Technology and software licensing disagreements",
];

const relatedAreas = [
  { title: "Corporate & Commercial Law", href: "/practice-areas/corporate-commercial-law", description: "Business formation, contracts, and commercial transactions." },
  { title: "Civil & Criminal Litigation", href: "/practice-areas/civil-criminal-litigation", description: "Vigorous court representation across all levels." },
  { title: "Public International Law", href: "/practice-areas/public-international-law", description: "Cross-border treaties, trade, and diplomatic matters." },
];

const adrProcessSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We assess the dispute, advise on the most suitable ADR mechanism, and outline the procedural roadmap tailored to your matter.",
  },
  {
    step: "02",
    title: "Procedure Selection",
    description: "We help parties agree on the applicable rules, seat, language, and appointment of a neutral mediator or arbitral tribunal.",
  },
  {
    step: "03",
    title: "Case Preparation",
    description: "Our team prepares comprehensive written submissions, evidence bundles, and witness statements to present your case compellingly.",
  },
  {
    step: "04",
    title: "Hearing & Resolution",
    description: "We represent you through hearings, negotiations, and deliberations, working toward a binding award or enforceable settlement agreement.",
  },
];

const heroVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const heroChild: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function MediationArbitrationPage() {
  const t = useTranslations();

  return (
    <main className="bg-white min-h-screen">
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, var(--brand-accent) 0%, transparent 60%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--brand-accent)]" aria-hidden="true" />

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24"
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
              <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-accent)]/15 text-[var(--brand-accent)] text-xs font-body font-semibold tracking-widest uppercase mb-5">
                Alternative Dispute Resolution
              </span>
            </motion.div>

            <motion.h1
              variants={heroChild}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              Mediation &amp; Arbitration
            </motion.h1>

            <motion.p
              variants={heroChild}
              className="font-body text-white/70 text-lg leading-relaxed max-w-2xl mb-10"
            >
              Resolving disputes efficiently, confidentially, and cost-effectively outside traditional court
              proceedings. Our ADR specialists guide parties to enforceable outcomes while preserving
              relationships and minimizing disruption.
            </motion.p>

            <motion.div variants={heroChild} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
              >
                Request a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-body font-medium text-sm rounded hover:border-white/60 hover:bg-white/5 transition-all duration-200"
              >
                All Practice Areas
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── 2. Overview ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                  Why Choose ADR
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-6">
                  A Smarter Path to Dispute Resolution
                </h2>
                <div className="space-y-4 font-body text-[var(--brand-muted-foreground)] leading-relaxed">
                  <p>
                    Litigation is not always the most effective or efficient route to resolving a dispute.
                    Mediation and arbitration offer parties greater control over the process, reduced costs,
                    faster timelines, and the ability to preserve important commercial and personal
                    relationships.
                  </p>
                  <p>
                    At MIT Legal Consultants, our ADR practice is led by experienced practitioners with
                    deep expertise in both domestic and international dispute resolution. We act as
                    advocates, advisors, and — where appropriate — as neutral mediators, bringing
                    impartiality and procedural expertise to every engagement.
                  </p>
                  <p>
                    Whether your dispute involves a complex multi-jurisdictional commercial contract, an
                    investor-state claim, or a sensitive employment matter, we tailor our approach to
                    deliver the most effective outcome for your specific circumstances.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, label: "Faster Resolution", body: "ADR proceedings typically conclude in a fraction of the time required for full court litigation." },
                  { icon: Shield, label: "Confidential Process", body: "All proceedings and outcomes remain strictly private, protecting sensitive commercial information." },
                  { icon: Users, label: "Party Autonomy", body: "Parties retain control over the choice of neutral, procedural rules, seat, and language." },
                  { icon: CheckCircle, label: "Enforceable Awards", body: "Arbitral awards are enforceable in over 160 countries under the New York Convention." },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-[var(--brand-muted)] rounded-xl p-5 border border-[var(--brand-border)]"
                  >
                    <item.icon size={22} className="text-[var(--brand-accent)] mb-3" />
                    <p className="font-heading text-sm font-semibold text-[var(--brand-primary)] mb-1.5">
                      {item.label}
                    </p>
                    <p className="font-body text-xs text-[var(--brand-muted-foreground)] leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. ADR Process Steps ────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-3">
                Our Process
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight">
                How We Guide You Through ADR
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {adrProcessSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.1}>
                <div className="relative bg-white rounded-xl p-6 border border-[var(--brand-border)] shadow-[0_1px_3px_rgba(10,31,68,0.06),0_8px_24px_-8px_rgba(10,31,68,0.10)] h-full">
                  <div className="text-4xl font-heading font-bold text-[var(--brand-accent)]/20 mb-4 leading-none">
                    {step.step}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Expertise Tiles ──────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-3">
                Areas of Expertise
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-4">
                Our ADR Capabilities
              </h2>
              <p className="font-body text-[var(--brand-muted-foreground)] max-w-2xl mx-auto leading-relaxed">
                From commercial mediation to complex international arbitration, our team brings specialized
                expertise across the full spectrum of alternative dispute resolution.
              </p>
            </div>
          </Reveal>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {expertiseTiles.map((tile) => (
              <motion.div
                key={tile.id}
                variants={fadeInUp}
                className="group bg-white border border-[var(--brand-border)] rounded-xl p-7 shadow-[0_1px_3px_rgba(10,31,68,0.06),0_8px_24px_-8px_rgba(10,31,68,0.10)] hover:shadow-[0_4px_12px_rgba(10,31,68,0.10),0_20px_48px_-12px_rgba(10,31,68,0.18)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--brand-primary)]/8 flex items-center justify-center mb-5 group-hover:bg-[var(--brand-accent)]/10 transition-colors duration-300">
                  <tile.icon size={24} className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-3">
                  {tile.title}
                </h3>
                <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed">
                  {tile.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. Typical Matters ──────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--brand-primary)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-3">
                Typical Matters
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
                Disputes We Resolve
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {typicalMatters.map((matter, index) => (
              <Reveal key={index} delay={index * 0.04}>
                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-4">
                  <CheckCircle size={16} className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-white/80 leading-relaxed">{matter}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Related Practice Areas ───────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-10">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-3">
                Related Services
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--brand-primary)]">
                Explore Related Practice Areas
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-5">
            {relatedAreas.map((area) => (
              <Reveal key={area.href}>
                <Link
                  href={area.href}
                  className="group block bg-[var(--brand-muted)] border border-[var(--brand-border)] rounded-xl p-6 hover:border-[var(--brand-primary)]/30 hover:shadow-[0_4px_12px_rgba(10,31,68,0.10)] transition-all duration-300"
                >
                  <h3 className="font-heading text-base font-semibold text-[var(--brand-primary)] mb-2 group-hover:text-[var(--brand-accent)] transition-colors">
                    {area.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[var(--brand-accent)] text-xs font-body font-semibold">
                    Learn More <ArrowRight size={13} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--brand-muted)]">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
              Get Started
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-5">
              Ready to Resolve Your Dispute?
            </h2>
            <p className="font-body text-[var(--brand-muted-foreground)] text-lg leading-relaxed mb-8">
              Contact our ADR specialists today for a confidential consultation. We will assess your matter
              and recommend the most effective path to resolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-primary)] text-white font-body font-bold text-sm rounded hover:bg-[#0d2a5e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[var(--brand-primary)] text-[var(--brand-primary)] font-body font-medium text-sm rounded hover:bg-[var(--brand-primary)]/5 transition-all duration-200"
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
