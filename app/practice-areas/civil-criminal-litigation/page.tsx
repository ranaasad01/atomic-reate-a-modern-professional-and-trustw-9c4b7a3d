"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Scale, Shield, FileText, Users, ChevronRight, ArrowRight, CheckCircle, Gavel, Globe, Briefcase, Heart } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { fadeInUp, staggerContainer, scaleIn, slideInLeft, slideInRight } from "@/lib/motion";
import { useTranslations } from "next-intl";

// ─── Inline data ────────────────────────────────────────────────────────────

const heroData = {
  eyebrow: "Practice Area",
  title: "Civil & Criminal Litigation",
  subtitle:
    "Vigorous, strategic representation in civil disputes and criminal matters at every court level. We defend your rights and pursue justice with precision and tenacity.",
  image: "https://www.trustwelllaw.com/wp-content/uploads/2019/09/civil-versus-criminal-law.png",
};

const overviewParagraphs = [
  "MIT Legal Consultants provides comprehensive litigation services across the full spectrum of civil and criminal proceedings. Our litigators combine deep procedural knowledge with persuasive advocacy to protect our clients' interests in the most complex and high-stakes disputes.",
  "Whether you are a corporation facing a multi-party commercial dispute, an individual defending against criminal charges, or a party seeking urgent injunctive relief, our team brings the same commitment to thorough preparation, strategic thinking, and courtroom excellence.",
  "We appear before magistrate courts, high courts, courts of appeal, and specialised tribunals, and we coordinate with international counsel where cross-border enforcement or extradition matters arise.",
];

interface ExpertiseTile {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const expertiseTiles: ExpertiseTile[] = [
  {
    id: "civil-disputes",
    icon: <Scale size={28} />,
    title: "Civil Disputes & Commercial Claims",
    description:
      "Breach of contract, tortious liability, property disputes, debt recovery, and multi-party commercial litigation handled from pleadings through to judgment and enforcement.",
  },
  {
    id: "criminal-defence",
    icon: <Shield size={28} />,
    title: "Criminal Defence",
    description:
      "Robust defence representation for individuals and corporate entities facing charges ranging from white-collar financial crimes to serious criminal offences, at all court levels.",
  },
  {
    id: "appeals",
    icon: <FileText size={28} />,
    title: "Appeals & Judicial Review",
    description:
      "Skilled appellate advocacy challenging erroneous decisions, procedural irregularities, and misapplications of law before courts of appeal and supreme courts.",
  },
  {
    id: "injunctions",
    icon: <Gavel size={28} />,
    title: "Injunctions & Urgent Relief",
    description:
      "Swift applications for interim injunctions, freezing orders, and other urgent equitable remedies to preserve your position while substantive proceedings are resolved.",
  },
  {
    id: "class-actions",
    icon: <Users size={28} />,
    title: "Class Actions & Group Claims",
    description:
      "Coordination and management of multi-claimant proceedings, including consumer class actions, shareholder derivative suits, and mass tort litigation.",
  },
  {
    id: "enforcement",
    icon: <CheckCircle size={28} />,
    title: "Judgment Enforcement",
    description:
      "Post-judgment asset tracing, garnishment, writ of execution, and cross-border enforcement of domestic and foreign judgments to ensure you actually recover what you are owed.",
  },
];

interface TypicalMatter {
  id: string;
  category: string;
  matter: string;
}

const typicalMatters: TypicalMatter[] = [
  { id: "tm-1", category: "Civil", matter: "Breach of contract claims between commercial parties" },
  { id: "tm-2", category: "Civil", matter: "Property boundary and title disputes" },
  { id: "tm-3", category: "Civil", matter: "Professional negligence actions against advisors and contractors" },
  { id: "tm-4", category: "Civil", matter: "Debt recovery and enforcement of judgments" },
  { id: "tm-5", category: "Civil", matter: "Shareholder and partnership disputes" },
  { id: "tm-6", category: "Civil", matter: "Defamation and reputational harm claims" },
  { id: "tm-7", category: "Civil", matter: "Injunctions to restrain breach of contract or IP infringement" },
  { id: "tm-8", category: "Civil", matter: "Insurance coverage disputes and subrogation claims" },
  { id: "tm-9", category: "Criminal", matter: "Defence in financial crime and fraud prosecutions" },
  { id: "tm-10", category: "Criminal", matter: "Representation in corruption and bribery investigations" },
  { id: "tm-11", category: "Criminal", matter: "Criminal defence in assault, theft, and serious offence matters" },
  { id: "tm-12", category: "Criminal", matter: "Bail applications and pre-trial detention hearings" },
  { id: "tm-13", category: "Criminal", matter: "Appeals against conviction and sentence" },
  { id: "tm-14", category: "Criminal", matter: "Corporate criminal liability and regulatory investigations" },
  { id: "tm-15", category: "Criminal", matter: "Extradition proceedings and mutual legal assistance requests" },
  { id: "tm-16", category: "Criminal", matter: "Cybercrime and digital evidence matters" },
];

const relatedAreas = [
  {
    id: "mediation",
    title: "Mediation & Arbitration",
    description: "Efficient dispute resolution outside the courtroom.",
    href: "/practice-areas/mediation-arbitration",
  },
  {
    id: "corporate",
    title: "Corporate & Commercial Law",
    description: "Business formation, contracts, and commercial transactions.",
    href: "/practice-areas/corporate-commercial-law",
  },
  {
    id: "employment",
    title: "Employment Law",
    description: "Workplace rights, contracts, and compliance advisory.",
    href: "/practice-areas/employment-law",
  },
];

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

export default function CivilCriminalLitigationPage() {
  const t = useTranslations();

  return (
    <main className="bg-white min-h-screen">

      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 70% 50%, var(--brand-accent) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--brand-accent)]" aria-hidden="true" />

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pb-28"
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

            <motion.span
              variants={heroChild}
              className="inline-block px-3 py-1 rounded-full bg-[var(--brand-accent)]/15 text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-5"
            >
              {heroData.eyebrow}
            </motion.span>

            <motion.h1
              variants={heroChild}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              {heroData.title}
            </motion.h1>

            <motion.p
              variants={heroChild}
              className="font-body text-white/70 text-lg leading-relaxed max-w-2xl mb-10"
            >
              {heroData.subtitle}
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
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-body font-medium text-sm rounded hover:border-white/60 hover:bg-white/5 transition-all duration-200"
              >
                All Practice Areas
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── 2. Overview ──────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                  Practice Overview
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-8">
                  Tenacious Advocacy at Every Court Level
                </h2>
                <div className="space-y-5">
                  {overviewParagraphs.map((para, i) => (
                    <p key={i} className="font-body text-[var(--brand-muted-foreground)] leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative">
                <img
                  src={heroData.image}
                  alt="Civil and Criminal Litigation"
                  className="w-full rounded-2xl shadow-[0_4px_24px_rgba(10,31,68,0.12)] object-cover aspect-[4/3]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Decorative accent border */}
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-[var(--brand-accent)]/20 -z-10" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. Expertise Tiles ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                Areas of Expertise
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight">
                Comprehensive Litigation Services
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
            {expertiseTiles.map((tile) => (
              <motion.div
                key={tile.id}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-7 border border-[var(--brand-border)] shadow-[0_1px_3px_rgba(10,31,68,0.06),0_8px_24px_-8px_rgba(10,31,68,0.10)] hover:shadow-[0_4px_12px_rgba(10,31,68,0.10),0_20px_48px_-12px_rgba(10,31,68,0.18)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/8 flex items-center justify-center text-[var(--brand-primary)] mb-5">
                  {tile.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-3">
                  {tile.title}
                </h3>
                <p className="font-body text-[var(--brand-muted-foreground)] text-sm leading-relaxed">
                  {tile.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. Typical Matters ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-14">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                Typical Matters
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight max-w-2xl">
                Matters We Handle
              </h2>
              <p className="font-body text-[var(--brand-muted-foreground)] mt-4 max-w-2xl leading-relaxed">
                Our litigation team has experience across a broad range of civil and criminal matters. Below is a representative sample of the types of cases we handle.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Civil Matters */}
            <Reveal>
              <div className="bg-[var(--brand-muted)] rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center">
                    <Scale size={16} className="text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[var(--brand-primary)]">
                    Civil Matters
                  </h3>
                </div>
                <ul className="space-y-3">
                  {typicalMatters
                    .filter((m) => m.category === "Civil")
                    .map((m) => (
                      <li key={m.id} className="flex items-start gap-3">
                        <CheckCircle
                          size={16}
                          className="text-[var(--brand-accent)] mt-0.5 flex-shrink-0"
                        />
                        <span className="font-body text-sm text-[var(--brand-foreground)] leading-relaxed">
                          {m.matter}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </Reveal>

            {/* Criminal Matters */}
            <Reveal delay={0.1}>
              <div className="bg-[var(--brand-primary)] rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-[var(--brand-accent)] flex items-center justify-center">
                    <Shield size={16} className="text-[var(--brand-primary)]" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white">
                    Criminal Matters
                  </h3>
                </div>
                <ul className="space-y-3">
                  {typicalMatters
                    .filter((m) => m.category === "Criminal")
                    .map((m) => (
                      <li key={m.id} className="flex items-start gap-3">
                        <CheckCircle
                          size={16}
                          className="text-[var(--brand-accent)] mt-0.5 flex-shrink-0"
                        />
                        <span className="font-body text-sm text-white/80 leading-relaxed">
                          {m.matter}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. Related Practice Areas ────────────────────────────────────── */}
      <section className="py-16 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-[var(--brand-primary)] mb-8">
              Related Practice Areas
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {relatedAreas.map((area) => (
              <Reveal key={area.id}>
                <Link
                  href={area.href}
                  className="group block bg-white rounded-xl p-6 border border-[var(--brand-border)] hover:border-[var(--brand-accent)]/40 hover:shadow-[0_4px_20px_rgba(10,31,68,0.10)] transition-all duration-300"
                >
                  <h3 className="font-heading text-base font-semibold text-[var(--brand-primary)] mb-2 group-hover:text-[var(--brand-accent)] transition-colors">
                    {area.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-wide">
                    Learn More <ArrowRight size={12} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--brand-accent)]/15 text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-6">
              Get Legal Help Today
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              Facing a Civil or Criminal Matter?
            </h2>
            <p className="font-body text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Our litigation team is ready to assess your case, advise on your options, and build a strategy designed to achieve the best possible outcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-body font-medium text-sm rounded hover:border-white/60 hover:bg-white/5 transition-all duration-200"
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
