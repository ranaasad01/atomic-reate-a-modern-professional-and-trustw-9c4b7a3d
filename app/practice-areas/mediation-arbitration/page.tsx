"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Scale, CheckCircle, ArrowRight, Shield, Clock, Globe, Award, Users, ChevronRight, FileText, Handshake, BarChart3, Zap } from 'lucide-react';
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

const trustSignals = [
  { icon: Award, label: "ICC Certified Arbitrators", value: "3" },
  { icon: Globe, label: "Jurisdictions Covered", value: "25+" },
  { icon: Clock, label: "Average Resolution Time", value: "4 Months" },
  { icon: CheckCircle, label: "Successful Settlements", value: "94%" },
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
    description: "We help parties agree on the appropriate rules, seat, language, and appointment of a neutral mediator or arbitral tribunal.",
  },
  {
    step: "03",
    title: "Case Preparation",
    description: "Our team prepares comprehensive written submissions, evidence bundles, and witness statements to present your case with maximum persuasive force.",
  },
  {
    step: "04",
    title: "Hearing & Advocacy",
    description: "We represent you throughout mediation sessions or arbitral hearings, deploying skilled oral advocacy and strategic negotiation techniques.",
  },
  {
    step: "05",
    title: "Award & Enforcement",
    description: "We secure the award or settlement agreement and, where necessary, pursue enforcement through domestic courts or under the New York Convention.",
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
      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(201,168,76,0.10) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 10% 80%, rgba(255,255,255,0.04) 0%, transparent 60%)",
          }}
        />
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
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/practice-areas" className="hover:text-white/80 transition-colors">Practice Areas</Link>
            <ChevronRight size={12} />
            <span className="text-[var(--brand-accent)]">Mediation &amp; Arbitration</span>
          </motion.nav>

          <div className="max-w-3xl">
            <motion.div variants={heroChild} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)]/15 border border-[var(--brand-accent)]/30 flex items-center justify-center">
                <Scale size={24} className="text-[var(--brand-accent)]" />
              </div>
              <span className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest">
                Practice Area
              </span>
            </motion.div>

            <motion.h1
              variants={heroChild}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Mediation &amp; Arbitration
            </motion.h1>

            <motion.p
              variants={heroChild}
              className="font-body text-white/70 text-lg leading-relaxed mb-10 max-w-2xl"
            >
              MIT Legal Consultants delivers expert alternative dispute resolution services — helping individuals, businesses, and governments resolve complex disputes efficiently, confidentially, and cost-effectively outside traditional court proceedings.
            </motion.p>

            <motion.div variants={heroChild} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                Request a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                All Practice Areas
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── 2. Trust Signals Bar ─────────────────────────────────────────── */}
      <section className="bg-[var(--brand-primary)]/95 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div key={signal.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-white leading-none">{signal.value}</p>
                    <p className="font-body text-white/55 text-xs mt-0.5">{signal.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Overview ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-4">
                  Overview
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] mb-6 leading-tight">
                  Resolving Disputes Without the Courtroom
                </h2>
                <div className="space-y-4 font-body text-[var(--brand-muted-foreground)] leading-relaxed">
                  <p>
                    MIT Legal Consultants offers a full suite of alternative dispute resolution (ADR) services designed to help parties resolve conflicts efficiently, privately, and on terms they can live with. Our ADR practice spans commercial mediation, domestic and international arbitration, and specialist dispute resolution across a wide range of sectors.
                  </p>
                  <p>
                    We understand that litigation is not always the right answer. Court proceedings can be costly, time-consuming, and damaging to business relationships. MIT Legal Consultants provides a sophisticated alternative — combining procedural expertise, neutral facilitation, and strategic advocacy to deliver outcomes that protect your interests and preserve what matters most.
                  </p>
                  <p>
                    Our arbitrators and mediators are accredited under leading international institutions and bring decades of combined experience to every engagement. Whether you are a multinational corporation, a government entity, or an individual party, MIT Legal Consultants has the expertise to guide you to resolution.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-4">
                {[
                  { title: "Confidential Process", body: "All ADR proceedings are conducted in strict confidence, protecting sensitive commercial information and reputational interests." },
                  { title: "Cost-Effective Resolution", body: "ADR typically costs a fraction of full litigation, with faster timelines and greater control over the outcome." },
                  { title: "Enforceable Outcomes", body: "Arbitral awards are enforceable in over 170 countries under the New York Convention, providing genuine international reach." },
                  { title: "Preserved Relationships", body: "Mediation in particular enables parties to reach mutually acceptable solutions that preserve ongoing commercial relationships." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-5 rounded-xl bg-[var(--brand-muted)] border border-[var(--brand-border)]"
                  >
                    <CheckCircle size={20} className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-heading text-base font-semibold text-[var(--brand-primary)] mb-1">{item.title}</p>
                      <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. Expertise Tiles ───────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-3">
                Areas of Expertise
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] mb-4">
                Our ADR Capabilities
              </h2>
              <p className="font-body text-[var(--brand-muted-foreground)] max-w-2xl mx-auto">
                MIT Legal Consultants provides specialist ADR services across a broad range of dispute types and institutional frameworks.
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
            {expertiseTiles.map((tile) => {
              const Icon = tile.icon;
              return (
                <motion.div
                  key={tile.id}
                  variants={scaleIn}
                  className="bg-white rounded-2xl p-7 border border-[var(--brand-border)] hover:border-[var(--brand-accent)]/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/8 flex items-center justify-center mb-5 group-hover:bg-[var(--brand-accent)]/10 transition-colors duration-300">
                    <Icon size={24} className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-3">{tile.title}</h3>
                  <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed">{tile.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 5. ADR Process ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-3">
                Our Process
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] mb-4">
                How MIT Legal Consultants Handles Your Dispute
              </h2>
              <p className="font-body text-[var(--brand-muted-foreground)] max-w-2xl mx-auto">
                A structured, transparent approach from initial assessment through to final resolution.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Connector line */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-8 left-[calc(10%+1.5rem)] right-[calc(10%+1.5rem)] h-px bg-[var(--brand-border)]"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {adrProcessSteps.map((step) => (
                <Reveal key={step.step}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[var(--brand-primary)] text-white font-heading font-bold text-lg flex items-center justify-center mx-auto mb-5 relative z-10">
                      {step.step}
                    </div>
                    <h3 className="font-heading text-base font-semibold text-[var(--brand-primary)] mb-2">{step.title}</h3>
                    <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Typical Matters ───────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-3">
                Typical Matters
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Disputes We Resolve
              </h2>
              <p className="font-body text-white/60 max-w-2xl mx-auto">
                MIT Legal Consultants has successfully handled ADR proceedings across a wide range of industries and dispute types.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {typicalMatters.map((matter) => (
              <Reveal key={matter}>
                <div className="flex items-start gap-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors duration-200">
                  <CheckCircle size={18} className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-white/80 leading-relaxed">{matter}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Related Practice Areas ────────────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-10">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-3">
                Related Services
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--brand-primary)]">
                Explore Related Practice Areas
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {relatedAreas.map((area) => (
              <Reveal key={area.href}>
                <Link
                  href={area.href}
                  className="group block p-6 bg-white rounded-2xl border border-[var(--brand-border)] hover:border-[var(--brand-accent)]/40 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-heading text-base font-semibold text-[var(--brand-primary)] mb-2 group-hover:text-[var(--brand-accent)] transition-colors duration-200">
                    {area.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[var(--brand-accent)] text-xs font-body font-semibold">
                    Learn More <ArrowRight size={12} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="bg-[var(--brand-primary)] rounded-3xl p-12 md:p-16 relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-4">
                  Get Started
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-5">
                  Ready to Resolve Your Dispute?
                </h2>
                <p className="font-body text-white/65 text-base leading-relaxed mb-8 max-w-xl mx-auto">
                  Contact MIT Legal Consultants today to discuss your matter with one of our ADR specialists. We will assess your situation and recommend the most effective path to resolution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
                  >
                    Schedule a Consultation
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/practice-areas"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200"
                  >
                    View All Practice Areas
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
