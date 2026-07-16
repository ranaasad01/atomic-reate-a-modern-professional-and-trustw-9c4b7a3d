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
  { id: "tm-4", category: "Civil", matter: "Shareholder and partnership disputes" },
  { id: "tm-5", category: "Civil", matter: "Defamation and reputational harm proceedings" },
  { id: "tm-6", category: "Civil", matter: "Debt recovery and insolvency-related litigation" },
  { id: "tm-7", category: "Criminal", matter: "Defence in fraud, corruption, and financial crime prosecutions" },
  { id: "tm-8", category: "Criminal", matter: "Regulatory investigations and white-collar criminal defence" },
  { id: "tm-9", category: "Criminal", matter: "Bail applications and pre-trial detention challenges" },
  { id: "tm-10", category: "Criminal", matter: "Sentencing mitigation and plea negotiations" },
  { id: "tm-11", category: "Criminal", matter: "Appeals against conviction and sentence" },
  { id: "tm-12", category: "Urgent", matter: "Ex parte injunctions and freezing orders" },
];

const relatedAreas = [
  {
    id: "corporate-commercial",
    title: "Corporate & Commercial Law",
    href: "/practice-areas/corporate-commercial-law",
    icon: <Briefcase size={20} />,
  },
  {
    id: "mediation-arbitration",
    title: "Mediation & Arbitration",
    href: "/practice-areas/mediation-arbitration",
    icon: <Scale size={20} />,
  },
  {
    id: "employment-law",
    title: "Employment Law",
    href: "/practice-areas/employment-law",
    icon: <Users size={20} />,
  },
  {
    id: "family-law",
    title: "Family Law",
    href: "/practice-areas/family-law",
    icon: <Heart size={20} />,
  },
];

const statsData = [
  { id: "s1", value: "500+", label: "Cases Litigated" },
  { id: "s2", value: "95%", label: "Success Rate" },
  { id: "s3", value: "25+", label: "Years Combined Experience" },
  { id: "s4", value: "All", label: "Court Levels Covered" },
];

// ─── Hover card variant ──────────────────────────────────────────────────────

const cardHover: Variants = {
  rest: { y: 0, boxShadow: "0 1px 3px rgba(10,31,68,0.08), 0 4px 16px -4px rgba(10,31,68,0.10)" },
  hover: { y: -4, boxShadow: "0 4px 24px -4px rgba(10,31,68,0.18), 0 1px 3px rgba(10,31,68,0.08)" },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function CivilCriminalLitigationPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden min-h-[520px] flex items-center">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.6) 39px,rgba(255,255,255,0.6) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.6) 39px,rgba(255,255,255,0.6) 40px)",
          }}
          aria-hidden="true"
        />
        {/* Radial glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--brand-accent) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4"
            >
              <ChevronRight size={14} />
              {heroData.eyebrow}
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance mb-6"
            >
              {heroData.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="font-body text-white/70 text-lg leading-relaxed max-w-xl mb-8"
            >
              {heroData.subtitle}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                {t("cta.scheduleConsultation")}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                {t("cta.allPracticeAreas")}
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.35)] border border-white/10 aspect-[4/3]">
              <img
                src={heroData.image}
                alt="Courtroom representing civil and criminal litigation"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-primary)]/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
              className="absolute -bottom-5 -left-5 bg-white rounded-xl px-5 py-3 shadow-[0_4px_24px_rgba(10,31,68,0.18)] border border-black/5"
            >
              <p className="font-heading text-[var(--brand-primary)] font-bold text-xl leading-none">500+</p>
              <p className="font-body text-[var(--brand-primary)]/60 text-xs mt-0.5">Cases Litigated</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <Reveal>
        <section className="bg-[var(--brand-primary)]/5 border-y border-[var(--brand-primary)]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {statsData.map((stat) => (
                <div key={stat.id} className="text-center">
                  <p className="font-heading text-3xl font-bold text-[var(--brand-primary)] tracking-tight">
                    {stat.value}
                  </p>
                  <p className="font-body text-[var(--brand-primary)]/60 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Service Overview ─────────────────────────────────────────────── */}
      <Reveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-3">
                {t("practiceArea.overviewLabel")}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                {t("litigation.overviewHeading")}
              </h2>
              <div className="space-y-4">
                {overviewParagraphs.map((para, i) => (
                  <p key={i} className="font-body text-[var(--brand-primary)]/70 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-[0_4px_32px_rgba(10,31,68,0.12)] border border-black/5 aspect-[4/3]">
                <img
                  src="https://www.uslegalsupport.com/wp-content/uploads/2025/06/legal-partners-and-team.jpg"
                  alt="Legal team preparing litigation strategy"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              {/* Accent block */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl bg-[var(--brand-accent)]/15 -z-10" aria-hidden="true" />
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Expertise Tiles ──────────────────────────────────────────────── */}
      <section className="bg-[var(--brand-primary)]/[0.03] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-3">
                {t("practiceArea.expertiseLabel")}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance">
                {t("litigation.expertiseHeading")}
              </h2>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {expertiseTiles.map((tile, i) => (
              <motion.div
                key={tile.id}
                variants={scaleIn}
                initial="rest"
                whileHover="hover"
                animate="rest"
                // @ts-expect-error framer-motion variants typing
                custom={i}
              >
                <motion.div
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="bg-white rounded-2xl p-7 border border-black/5 h-full cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/8 flex items-center justify-center text-[var(--brand-primary)] mb-5">
                    {tile.icon}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-3 leading-snug">
                    {tile.title}
                  </h3>
                  <p className="font-body text-[var(--brand-primary)]/65 text-sm leading-relaxed">
                    {tile.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Typical Matters ──────────────────────────────────────────────── */}
      <Reveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Heading col */}
            <div className="lg:col-span-2">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-3">
                {t("practiceArea.mattersLabel")}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-5">
                {t("litigation.mattersHeading")}
              </h2>
              <p className="font-body text-[var(--brand-primary)]/65 leading-relaxed mb-8">
                Our litigators have successfully handled a wide range of civil and criminal matters. Below is a representative sample of the cases we manage.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
              >
                {t("cta.discussYourCase")}
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Matters list col */}
            <div className="lg:col-span-3">
              {(["Civil", "Criminal", "Urgent"] as const).map((cat) => (
                <div key={cat} className="mb-8 last:mb-0">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wide ${
                        cat === "Civil"
                          ? "bg-blue-50 text-blue-700"
                          : cat === "Criminal"
                          ? "bg-red-50 text-red-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {cat}
                    </span>
                    <div className="flex-1 h-px bg-[var(--brand-primary)]/10" />
                  </div>
                  <ul className="space-y-3">
                    {typicalMatters
                      .filter((m) => m.category === cat)
                      .map((matter) => (
                        <li key={matter.id} className="flex items-start gap-3">
                          <CheckCircle
                            size={16}
                            className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5"
                          />
                          <span className="font-body text-[var(--brand-primary)]/75 text-sm leading-relaxed">
                            {matter.matter}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Why Choose Us strip ──────────────────────────────────────────── */}
      <Reveal>
        <section className="bg-[var(--brand-primary)] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              {[
                { id: "w1", heading: "Courtroom-Ready", body: "Our litigators are seasoned trial advocates with extensive experience arguing before judges and juries at every level." },
                { id: "w2", heading: "Strategic Preparation", body: "We invest heavily in pre-trial preparation, evidence analysis, and witness strategy to maximise your prospects of success." },
                { id: "w3", heading: "Transparent Communication", body: "You receive clear, honest advice on the merits of your case, realistic outcome assessments, and regular progress updates." },
              ].map((item) => (
                <div key={item.id} className="px-4">
                  <div className="w-10 h-0.5 bg-[var(--brand-accent)] mx-auto mb-5" />
                  <h3 className="font-heading text-white text-xl font-semibold mb-3">{item.heading}</h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── CTA Card ─────────────────────────────────────────────────────── */}
      <Reveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="relative rounded-3xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary)]/85 overflow-hidden px-8 py-14 sm:px-14 text-center shadow-[0_8px_48px_rgba(10,31,68,0.22)]">
            {/* Glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, var(--brand-accent) 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <span className="relative inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
              {t("cta.readyLabel")}
            </span>
            <h2 className="relative font-heading text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight text-balance mb-4 max-w-2xl mx-auto">
              {t("litigation.ctaHeading")}
            </h2>
            <p className="relative font-body text-white/65 leading-relaxed max-w-xl mx-auto mb-8">
              {t("litigation.ctaSubtext")}
            </p>
            <div className="relative flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                {t("cta.scheduleConsultation")}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {t("cta.meetOurTeam")}
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Related Areas ────────────────────────────────────────────────── */}
      <Reveal>
        <section className="border-t border-[var(--brand-primary)]/10 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-body text-[var(--brand-primary)]/50 text-xs uppercase tracking-widest font-semibold mb-8 text-center">
              {t("practiceArea.relatedLabel")}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedAreas.map((area) => (
                <motion.div
                  key={area.id}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Link
                    href={area.href}
                    className="flex items-center gap-3 p-4 rounded-xl border border-[var(--brand-primary)]/10 hover:border-[var(--brand-accent)]/40 hover:bg-[var(--brand-primary)]/[0.03] transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                  >
                    <span className="text-[var(--brand-accent)] flex-shrink-0">{area.icon}</span>
                    <span className="font-body text-[var(--brand-primary)] text-sm font-medium group-hover:text-[var(--brand-primary)] leading-snug">
                      {area.title}
                    </span>
                    <ChevronRight size={14} className="ml-auto text-[var(--brand-primary)]/30 group-hover:text-[var(--brand-accent)] transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}