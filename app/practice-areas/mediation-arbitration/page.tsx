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
    title: "Agreement & Appointment",
    description: "Parties agree on the ADR process, applicable rules, and the appointment of a neutral mediator or arbitral tribunal.",
  },
  {
    step: "03",
    title: "Proceedings & Advocacy",
    description: "Our team prepares submissions, manages evidence, and advocates vigorously on your behalf throughout the proceedings.",
  },
  {
    step: "04",
    title: "Settlement or Award",
    description: "We guide parties to a binding settlement agreement or enforce the arbitral award in the relevant jurisdiction.",
  },
];

export default function MediationArbitrationPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, var(--brand-accent) 0%, transparent 60%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 50%)" }} />
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
              <Link
                href="/practice-areas"
                className="text-white/50 hover:text-white/80 text-sm font-body transition-colors duration-200"
              >
                {t("practiceAreas.breadcrumbRoot")}
              </Link>
              <ChevronRight size={14} className="text-white/30" />
              <span className="text-[var(--brand-accent)] text-sm font-body font-medium">
                {t("mediationArbitration.breadcrumb")}
              </span>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[var(--brand-accent)]/20 border border-[var(--brand-accent)]/30 flex items-center justify-center flex-shrink-0">
                <Scale size={28} className="text-[var(--brand-accent)]" />
              </div>
              <span className="text-[var(--brand-accent)] text-xs font-body font-bold uppercase tracking-widest">
                {t("mediationArbitration.practiceLabel")}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance mb-6"
            >
              {t("mediationArbitration.heroTitle")}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="font-body text-lg text-white/70 leading-relaxed mb-10 max-w-2xl text-pretty"
            >
              {t("mediationArbitration.heroSubtitle")}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                {t("mediationArbitration.heroCta")}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-body font-medium text-sm rounded-lg hover:bg-white/20 border border-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                {t("mediationArbitration.heroSecondary")}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust signals bar */}
        <div className="relative border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {trustSignals.map((signal, i) => (
                <motion.div
                  key={signal.label}
                  variants={fadeInUp}
                  custom={i}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/15 flex items-center justify-center flex-shrink-0">
                    <signal.icon size={18} className="text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <p className="font-heading text-xl font-bold text-white leading-none">{signal.value}</p>
                    <p className="font-body text-xs text-white/50 mt-0.5">{signal.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-bold uppercase tracking-widest mb-4">
                  {t("mediationArbitration.overviewLabel")}
                </span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                  {t("mediationArbitration.overviewTitle")}
                </h2>
                <div className="space-y-4 font-body text-[var(--brand-text)]/70 leading-relaxed">
                  <p>{t("mediationArbitration.overviewP1")}</p>
                  <p>{t("mediationArbitration.overviewP2")}</p>
                  <p>{t("mediationArbitration.overviewP3")}</p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                  >
                    {t("mediationArbitration.overviewCta")}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_40px_-12px_rgba(10,31,68,0.25)]">
                  <img
                    src="https://www.erlawyers.com/wp-content/uploads/2026/03/Mediation-vs-Arbitration-901x1024.webp"
                    alt="Mediation and arbitration proceedings at MIT Legal Consultants"
                    className="w-full h-80 lg:h-96 object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background = "linear-gradient(135deg, var(--brand-primary) 0%, #1a3a6b 100%)";
                        parent.style.minHeight = "320px";
                        parent.style.display = "flex";
                        parent.style.alignItems = "center";
                        parent.style.justifyContent = "center";
                      }
                    }}
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[var(--brand-accent)] rounded-xl p-5 shadow-[0_8px_24px_rgba(201,168,76,0.35)]">
                  <p className="font-heading text-3xl font-bold text-[var(--brand-primary)]">20+</p>
                  <p className="font-body text-xs text-[var(--brand-primary)]/80 font-semibold mt-0.5">Years of ADR Experience</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ADR Process Steps */}
      <section className="py-20 lg:py-28 bg-[var(--brand-primary)]/3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-bold uppercase tracking-widest mb-4">
                {t("mediationArbitration.processLabel")}
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance">
                {t("mediationArbitration.processTitle")}
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {adrProcessSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative bg-white rounded-2xl p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(10,31,68,0.10)] border border-black/5 h-full"
                >
                  <div className="font-heading text-5xl font-bold text-[var(--brand-primary)]/8 leading-none mb-4 select-none">
                    {step.step}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[var(--brand-primary)] mb-3">{step.title}</h3>
                  <p className="font-body text-sm text-[var(--brand-text)]/65 leading-relaxed">{step.description}</p>
                  {i < adrProcessSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ChevronRight size={20} className="text-[var(--brand-accent)]" />
                    </div>
                  )}
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Tiles */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl mb-14">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-bold uppercase tracking-widest mb-4">
                {t("mediationArbitration.expertiseLabel")}
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance">
                {t("mediationArbitration.expertiseTitle")}
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseTiles.map((tile, i) => (
              <Reveal key={tile.id} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 16px 40px -12px rgba(10,31,68,0.18)" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group bg-white rounded-2xl p-7 border border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(10,31,68,0.08)] h-full flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/8 group-hover:bg-[var(--brand-accent)]/15 flex items-center justify-center mb-5 transition-colors duration-300">
                    <tile.icon size={22} className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[var(--brand-primary)] mb-3">{tile.title}</h3>
                  <p className="font-body text-sm text-[var(--brand-text)]/65 leading-relaxed flex-1">{tile.description}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Matters */}
      <section className="py-20 lg:py-28 bg-[var(--brand-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14 items-start">
            <Reveal className="lg:col-span-2">
              <div>
                <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-bold uppercase tracking-widest mb-4">
                  {t("mediationArbitration.mattersLabel")}
                </span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight text-balance mb-6">
                  {t("mediationArbitration.mattersTitle")}
                </h2>
                <p className="font-body text-white/60 leading-relaxed mb-8">
                  {t("mediationArbitration.mattersSubtitle")}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
                >
                  {t("mediationArbitration.mattersCta")}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-3">
              <ul className="space-y-3">
                {typicalMatters.map((matter, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
                    className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4"
                  >
                    <CheckCircle size={16} className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-white/80 leading-relaxed">{matter}</span>
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Card */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--brand-primary)] via-[#0d2a5e] to-[#1a3a6b] p-10 lg:p-16 text-center">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, var(--brand-accent) 0%, transparent 55%)" }} />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-[var(--brand-accent)]/20 border border-[var(--brand-accent)]/30 flex items-center justify-center mx-auto mb-6">
                  <Scale size={30} className="text-[var(--brand-accent)]" />
                </div>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight text-balance mb-4 max-w-2xl mx-auto">
                  {t("mediationArbitration.ctaTitle")}
                </h2>
                <p className="font-body text-white/65 leading-relaxed mb-8 max-w-xl mx-auto">
                  {t("mediationArbitration.ctaSubtitle")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
                  >
                    {t("mediationArbitration.ctaButton")}
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/team"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-body font-medium text-sm rounded-lg hover:bg-white/20 border border-white/20 transition-all duration-300"
                  >
                    {t("mediationArbitration.ctaSecondary")}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related Areas */}
      <section className="py-16 bg-[var(--brand-primary)]/3 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-body text-xs font-bold uppercase tracking-widest text-[var(--brand-accent)] mb-8">
              {t("mediationArbitration.relatedLabel")}
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {relatedAreas.map((area, i) => (
              <Reveal key={area.href} delay={i * 0.08}>
                <Link href={area.href} className="group block bg-white rounded-xl p-6 border border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_12px_-4px_rgba(10,31,68,0.08)] hover:shadow-[0_8px_24px_-8px_rgba(10,31,68,0.18)] hover:border-[var(--brand-accent)]/30 transition-all duration-300">
                  <h3 className="font-heading text-base font-bold text-[var(--brand-primary)] mb-2 group-hover:text-[var(--brand-accent)] transition-colors duration-200">{area.title}</h3>
                  <p className="font-body text-sm text-[var(--brand-text)]/60 leading-relaxed mb-4">{area.description}</p>
                  <span className="inline-flex items-center gap-1 text-[var(--brand-accent)] text-xs font-body font-semibold">
                    {t("mediationArbitration.relatedLearnMore")} <ArrowRight size={12} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}