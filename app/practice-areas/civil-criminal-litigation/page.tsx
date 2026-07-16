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
  { id: "tm-3", category: "Civil", matter: "Professional negligence actions against lawyers, doctors, and accountants" },
  { id: "tm-4", category: "Civil", matter: "Debt recovery and enforcement proceedings" },
  { id: "tm-5", category: "Civil", matter: "Shareholder and partnership disputes" },
  { id: "tm-6", category: "Civil", matter: "Defamation and reputation management litigation" },
  { id: "tm-7", category: "Civil", matter: "Tortious liability and personal injury claims" },
  { id: "tm-8", category: "Civil", matter: "Injunctions and emergency relief applications" },
  { id: "tm-9", category: "Criminal", matter: "Defence in financial crime and fraud prosecutions" },
  { id: "tm-10", category: "Criminal", matter: "Representation in corruption and bribery cases" },
  { id: "tm-11", category: "Criminal", matter: "Criminal appeals and post-conviction relief" },
  { id: "tm-12", category: "Criminal", matter: "Bail applications and pre-trial detention challenges" },
  { id: "tm-13", category: "Criminal", matter: "Corporate criminal liability and regulatory offences" },
  { id: "tm-14", category: "Criminal", matter: "Extradition proceedings and mutual legal assistance" },
  { id: "tm-15", category: "Criminal", matter: "Asset forfeiture and proceeds of crime matters" },
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
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const heroChild: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CivilCriminalLitigationPage() {
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={heroChild} className="flex items-center gap-2 mb-6">
              <Link
                href="/practice-areas"
                className="text-white/50 hover:text-white/80 text-sm font-body transition-colors"
              >
                Practice Areas
              </Link>
              <ChevronRight size={14} className="text-white/30" />
              <span className="text-[var(--brand-accent)] text-sm font-body font-medium">
                Civil & Criminal Litigation
              </span>
            </motion.div>

            <motion.p
              variants={heroChild}
              className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            >
              {heroData.eyebrow}
            </motion.p>

            <motion.h1
              variants={heroChild}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              {heroData.title}
            </motion.h1>

            <motion.p
              variants={heroChild}
              className="font-body text-white/70 text-lg leading-relaxed mb-10 max-w-2xl"
            >
              {heroData.subtitle}
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
          </motion.div>
        </div>
      </section>

      {/* ── 2. Overview ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                  Overview
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-6">
                  Tenacious Advocacy at Every Court Level
                </h2>
                <div className="space-y-4">
                  {overviewParagraphs.map((para, idx) => (
                    <p
                      key={idx}
                      className="font-body text-[var(--brand-muted-foreground)] leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={heroData.image}
                    alt="Civil and criminal litigation courtroom"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-[var(--brand-primary)]/10" />
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 border border-[var(--brand-border)]">
                  <p className="font-heading text-3xl font-bold text-[var(--brand-primary)]">500+</p>
                  <p className="font-body text-xs text-[var(--brand-muted-foreground)] mt-1">
                    Cases Successfully Resolved
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. Expertise Tiles ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Areas of Expertise
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight">
                Our Litigation Capabilities
              </h2>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {expertiseTiles.map((tile) => (
              <motion.div
                key={tile.id}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-7 border border-[var(--brand-border)] hover:border-[var(--brand-accent)]/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/5 flex items-center justify-center text-[var(--brand-primary)] mb-5 group-hover:bg-[var(--brand-accent)]/10 group-hover:text-[var(--brand-accent)] transition-colors duration-300">
                  {tile.icon}
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

      {/* ── 4. Typical Matters ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Typical Matters
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight">
                What We Handle
              </h2>
              <p className="font-body text-[var(--brand-muted-foreground)] mt-4 leading-relaxed">
                MIT Legal Consultants handles a broad range of civil and criminal matters across all court levels.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Civil */}
            <Reveal>
              <div className="bg-[var(--brand-background)] rounded-2xl p-8 border border-[var(--brand-border)]">
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
                          className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5"
                        />
                        <span className="font-body text-sm text-[var(--brand-foreground)] leading-relaxed">
                          {m.matter}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </Reveal>

            {/* Criminal */}
            <Reveal delay={0.1}>
              <div className="bg-[var(--brand-background)] rounded-2xl p-8 border border-[var(--brand-border)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center">
                    <Shield size={16} className="text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[var(--brand-primary)]">
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
                          className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5"
                        />
                        <span className="font-body text-sm text-[var(--brand-foreground)] leading-relaxed">
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

      {/* ── 5. Why Choose MIT Legal Consultants ──────────────────────────── */}
      <section className="py-20 md:py-28 bg-[var(--brand-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                  Why Choose Us
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                  Why Clients Trust MIT Legal Consultants for Litigation
                </h2>
                <p className="font-body text-white/70 leading-relaxed mb-8">
                  When your freedom, assets, or reputation are at stake, you need litigators who combine
                  legal mastery with unwavering commitment. MIT Legal Consultants delivers both.
                </p>
                <ul className="space-y-4">
                  {[
                    "Deep procedural expertise across civil and criminal courts",
                    "Proven track record in high-value and high-profile matters",
                    "Transparent communication at every stage of proceedings",
                    "Strategic thinking that anticipates the opposing party's moves",
                    "Coordinated international counsel for cross-border matters",
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5"
                      />
                      <span className="font-body text-white/80 text-sm leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: "20+", label: "Years of Litigation Experience" },
                  { value: "500+", label: "Cases Successfully Resolved" },
                  { value: "All", label: "Court Levels Covered" },
                  { value: "98%", label: "Client Satisfaction Rate" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
                  >
                    <p className="font-heading text-3xl font-bold text-[var(--brand-accent)] mb-2">
                      {stat.value}
                    </p>
                    <p className="font-body text-xs text-white/60 leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6. Related Practice Areas ────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Related Services
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight">
                Explore Related Practice Areas
              </h2>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-3 gap-6"
          >
            {relatedAreas.map((area) => (
              <motion.div key={area.id} variants={fadeInUp}>
                <Link
                  href={area.href}
                  className="block bg-white rounded-2xl p-7 border border-[var(--brand-border)] hover:border-[var(--brand-accent)]/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-2 group-hover:text-[var(--brand-accent)] transition-colors">
                    {area.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[var(--brand-accent)] text-sm font-body font-semibold">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. CTA ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Get Started
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-6">
              Facing a Legal Dispute? MIT Legal Consultants Is Ready.
            </h2>
            <p className="font-body text-[var(--brand-muted-foreground)] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Contact MIT Legal Consultants today to schedule a confidential consultation with one of our
              experienced litigators. We will assess your matter and advise on the strongest path forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-primary)] text-white font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[var(--brand-border)] text-[var(--brand-primary)] font-body font-medium text-sm rounded-lg hover:bg-[var(--brand-muted)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
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
