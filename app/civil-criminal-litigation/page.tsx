"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight, scaleIn } from "@/lib/motion";
import { Scale, Shield, Users, FileText, CheckCircle, ArrowRight, Phone, Mail, ChevronRight, AlertCircle, Gavel, BookOpen, Clock, Star } from 'lucide-react';

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

const civilMatters = [
  "Contract disputes and breach of contract claims",
  "Property and real estate litigation",
  "Debt recovery and enforcement proceedings",
  "Tortious liability and negligence claims",
  "Shareholder and partnership disputes",
  "Defamation and reputational harm",
  "Insurance disputes and indemnity claims",
  "Injunctions and urgent interim relief",
];

const criminalMatters = [
  "White-collar crime and financial fraud",
  "Corruption and anti-bribery defence",
  "Cybercrime and digital offences",
  "Drug-related offences",
  "Assault, battery, and violent crime",
  "Theft, robbery, and property offences",
  "Regulatory and compliance prosecutions",
  "Appeals and post-conviction relief",
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We begin with a thorough assessment of your matter, reviewing all available facts, documents, and evidence to understand the full scope of your legal position.",
  },
  {
    step: "02",
    title: "Case Strategy",
    description:
      "Our litigators develop a tailored strategy aligned with your objectives, identifying the strongest legal arguments and anticipating opposing positions.",
  },
  {
    step: "03",
    title: "Pre-Trial Preparation",
    description:
      "We handle all pleadings, discovery, witness preparation, and procedural steps to ensure your case is meticulously prepared before entering the courtroom.",
  },
  {
    step: "04",
    title: "Courtroom Advocacy",
    description:
      "Our experienced advocates present your case with precision and persuasion, cross-examining witnesses and making compelling submissions on your behalf.",
  },
  {
    step: "05",
    title: "Judgment & Enforcement",
    description:
      "Following judgment, we advise on enforcement options, appeals, and any post-trial remedies to ensure you achieve the best possible outcome.",
  },
];

const whyChoosePoints = [
  {
    icon: Gavel,
    title: "Courtroom Experience",
    description:
      "Our litigators have appeared at every level of the court hierarchy, from magistrate courts to appellate tribunals, with a strong track record of successful outcomes.",
  },
  {
    icon: Shield,
    title: "Robust Defence",
    description:
      "We mount vigorous, evidence-based defences, leaving no stone unturned in protecting your rights, liberty, and reputation.",
  },
  {
    icon: BookOpen,
    title: "Deep Legal Knowledge",
    description:
      "Our team stays current with evolving case law, procedural rules, and legislative changes to give you the most informed representation available.",
  },
  {
    icon: Clock,
    title: "Responsive & Timely",
    description:
      "Litigation is time-sensitive. We act swiftly on urgent matters, meet all deadlines, and keep you informed at every stage of proceedings.",
  },
  {
    icon: Users,
    title: "Client-Centred Approach",
    description:
      "We understand the stress of legal proceedings. Our team provides clear, honest advice and compassionate support throughout your case.",
  },
  {
    icon: Star,
    title: "Proven Results",
    description:
      "Our litigation record speaks for itself. We have secured favourable verdicts, negotiated advantageous settlements, and successfully defended clients across a wide range of matters.",
  },
];

const stats = [
  { value: "500+", label: "Cases Handled" },
  { value: "95%", label: "Success Rate" },
  { value: "20+", label: "Years Experience" },
  { value: "All", label: "Court Levels" },
];

const cardHover: Variants = {
  rest: { y: 0, boxShadow: "0 1px 3px rgba(10,31,68,0.08)" },
  hover: {
    y: -4,
    boxShadow: "0 12px 32px rgba(10,31,68,0.14)",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export default function CivilCriminalLitigationPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, var(--brand-accent) 0%, transparent 60%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 50%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-primary)] to-[#0d2a5e]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <motion.nav
              variants={heroChild}
              aria-label={t("litigation.breadcrumbAriaLabel")}
              className="flex items-center gap-2 text-white/50 text-sm font-body mb-8"
            >
              <Link href="/" className="hover:text-[var(--brand-accent)] transition-colors duration-200">
                {t("litigation.breadcrumbHome")}
              </Link>
              <ChevronRight size={14} className="flex-shrink-0" />
              <Link href="/practice-areas" className="hover:text-[var(--brand-accent)] transition-colors duration-200">
                {t("litigation.breadcrumbPractice")}
              </Link>
              <ChevronRight size={14} className="flex-shrink-0" />
              <span className="text-white/80">{t("litigation.breadcrumbCurrent")}</span>
            </motion.nav>

            {/* Eyebrow */}
            <motion.div variants={heroChild} className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/20 border border-[var(--brand-accent)]/30 flex items-center justify-center">
                <Scale size={20} className="text-[var(--brand-accent)]" />
              </div>
              <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest">
                {t("litigation.eyebrow")}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={heroChild}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance mb-6"
            >
              {t("litigation.heroTitle")}
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={heroChild}
              className="font-body text-lg text-white/70 leading-relaxed max-w-2xl mb-10"
            >
              {t("litigation.heroSubtext")}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={heroChild} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                {t("litigation.heroCta1")}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-body font-medium text-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                {t("litigation.heroCta2")}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="text-center md:px-8"
                >
                  <p className="font-heading text-3xl font-bold text-[var(--brand-accent)]">
                    {stat.value}
                  </p>
                  <p className="font-body text-sm text-white/60 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4 block">
                  {t("litigation.overviewEyebrow")}
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                  {t("litigation.overviewTitle")}
                </h2>
                <p className="font-body text-[var(--brand-text-muted)] leading-relaxed mb-5">
                  {t("litigation.overviewP1")}
                </p>
                <p className="font-body text-[var(--brand-text-muted)] leading-relaxed mb-8">
                  {t("litigation.overviewP2")}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-body font-semibold text-sm hover:text-[var(--brand-accent)] transition-colors duration-200 group"
                >
                  {t("litigation.overviewLink")}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,31,68,0.15)]">
                  <img
                    src="https://www.trustwelllaw.com/wp-content/uploads/2019/09/civil-versus-criminal-law.png"
                    alt={t("litigation.overviewImageAlt")}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background =
                          "linear-gradient(135deg, var(--brand-primary) 0%, #0d2a5e 100%)";
                        parent.innerHTML =
                          '<div class="w-full h-full flex items-center justify-center"><svg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'rgba(201,168,76,0.5)\' stroke-width=\'1\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><path d=\'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\'/></svg></div>';
                      }
                    }}
                  />
                </div>
                {/* Floating accent card */}
                <div className="absolute -bottom-6 -left-6 bg-[var(--brand-accent)] rounded-xl p-5 shadow-[0_8px_24px_rgba(201,168,76,0.3)]">
                  <p className="font-heading text-2xl font-bold text-[var(--brand-primary)]">20+</p>
                  <p className="font-body text-xs text-[var(--brand-primary)]/80 font-medium mt-0.5">
                    {t("litigation.floatingCardLabel")}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Civil & Criminal Matters ── */}
      <section className="py-20 md:py-28 bg-[var(--brand-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4 block">
                {t("litigation.mattersEyebrow")}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-4">
                {t("litigation.mattersTitle")}
              </h2>
              <p className="font-body text-[var(--brand-text-muted)] leading-relaxed">
                {t("litigation.mattersSubtext")}
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Civil Matters */}
            <Reveal delay={0.05}>
              <div className="bg-white rounded-2xl p-8 border border-black/5 shadow-[0_1px_3px_rgba(10,31,68,0.06),0_8px_24px_-8px_rgba(10,31,68,0.1)] h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center">
                    <FileText size={20} className="text-[var(--brand-primary)]" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[var(--brand-primary)]">
                    {t("litigation.civilTitle")}
                  </h3>
                </div>
                <p className="font-body text-sm text-[var(--brand-text-muted)] leading-relaxed mb-6">
                  {t("litigation.civilDesc")}
                </p>
                <ul className="space-y-3">
                  {civilMatters.map((matter) => (
                    <li key={matter} className="flex items-start gap-3">
                      <CheckCircle
                        size={16}
                        className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5"
                      />
                      <span className="font-body text-sm text-[var(--brand-text)]">{matter}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Criminal Matters */}
            <Reveal delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-black/5 shadow-[0_1px_3px_rgba(10,31,68,0.06),0_8px_24px_-8px_rgba(10,31,68,0.1)] h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/15 flex items-center justify-center">
                    <AlertCircle size={20} className="text-[var(--brand-accent)]" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[var(--brand-primary)]">
                    {t("litigation.criminalTitle")}
                  </h3>
                </div>
                <p className="font-body text-sm text-[var(--brand-text-muted)] leading-relaxed mb-6">
                  {t("litigation.criminalDesc")}
                </p>
                <ul className="space-y-3">
                  {criminalMatters.map((matter) => (
                    <li key={matter} className="flex items-start gap-3">
                      <CheckCircle
                        size={16}
                        className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5"
                      />
                      <span className="font-body text-sm text-[var(--brand-text)]">{matter}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4 block">
                {t("litigation.processEyebrow")}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-4">
                {t("litigation.processTitle")}
              </h2>
              <p className="font-body text-[var(--brand-text-muted)] leading-relaxed">
                {t("litigation.processSubtext")}
              </p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[var(--brand-primary)]/15 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, i) => (
                <Reveal key={step.step} delay={i * 0.08}>
                  <motion.div
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    className="relative bg-white rounded-2xl p-6 border border-black/5 text-center cursor-default"
                  >
                    <div className="w-12 h-12 rounded-full bg-[var(--brand-primary)] text-white font-heading font-bold text-sm flex items-center justify-center mx-auto mb-4 shadow-[0_4px_12px_rgba(10,31,68,0.2)]">
                      {step.step}
                    </div>
                    <h3 className="font-heading text-base font-bold text-[var(--brand-primary)] mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-xs text-[var(--brand-text-muted)] leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 md:py-28 bg-[var(--brand-primary)] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 30%, var(--brand-accent) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4 block">
                {t("litigation.whyEyebrow")}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight text-balance mb-4">
                {t("litigation.whyTitle")}
              </h2>
              <p className="font-body text-white/60 leading-relaxed">
                {t("litigation.whySubtext")}
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <Reveal key={point.title} delay={i * 0.07}>
                  <motion.div
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    className="bg-white/5 border border-white/10 rounded-2xl p-7 cursor-default"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[var(--brand-accent)]/15 border border-[var(--brand-accent)]/25 flex items-center justify-center mb-5">
                      <Icon size={20} className="text-[var(--brand-accent)]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white mb-3">
                      {point.title}
                    </h3>
                    <p className="font-body text-sm text-white/60 leading-relaxed">
                      {point.description}
                    </p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Expertise Highlight ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal delay={0.1}>
              <div className="relative order-2 lg:order-1">
                <div className="bg-[var(--brand-surface)] rounded-2xl p-8 border border-black/5">
                  <div className="flex items-center gap-3 mb-6">
                    <Scale size={22} className="text-[var(--brand-accent)]" />
                    <h3 className="font-heading text-lg font-bold text-[var(--brand-primary)]">
                      {t("litigation.expertiseCardTitle")}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: t("litigation.expertiseItem1"), pct: 95 },
                      { label: t("litigation.expertiseItem2"), pct: 90 },
                      { label: t("litigation.expertiseItem3"), pct: 88 },
                      { label: t("litigation.expertiseItem4"), pct: 92 },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between mb-1.5">
                          <span className="font-body text-sm text-[var(--brand-text)]">
                            {item.label}
                          </span>
                          <span className="font-body text-sm font-semibold text-[var(--brand-primary)]">
                            {item.pct}%
                          </span>
                        </div>
                        <div className="h-1.5 bg-[var(--brand-primary)]/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-[var(--brand-accent)] rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="order-1 lg:order-2">
              <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4 block">
                  {t("litigation.expertiseEyebrow")}
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                  {t("litigation.expertiseTitle")}
                </h2>
                <p className="font-body text-[var(--brand-text-muted)] leading-relaxed mb-5">
                  {t("litigation.expertiseP1")}
                </p>
                <p className="font-body text-[var(--brand-text-muted)] leading-relaxed mb-8">
                  {t("litigation.expertiseP2")}
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    t("litigation.tag1"),
                    t("litigation.tag2"),
                    t("litigation.tag3"),
                    t("litigation.tag4"),
                    t("litigation.tag5"),
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-[var(--brand-primary)]/8 text-[var(--brand-primary)] font-body text-xs font-semibold rounded-full border border-[var(--brand-primary)]/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <Reveal>
        <section className="py-20 bg-[var(--brand-surface)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-[var(--brand-primary)] rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-[0_16px_48px_rgba(10,31,68,0.2)]">
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 80% 20%, var(--brand-accent) 0%, transparent 50%)",
                }}
              />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-[var(--brand-accent)]/20 border border-[var(--brand-accent)]/30 flex items-center justify-center mx-auto mb-6">
                  <Gavel size={26} className="text-[var(--brand-accent)]" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight text-balance mb-4">
                  {t("litigation.ctaTitle")}
                </h2>
                <p className="font-body text-white/65 leading-relaxed max-w-xl mx-auto mb-10">
                  {t("litigation.ctaSubtext")}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-xl hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
                  >
                    {t("litigation.ctaButton1")}
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="tel:+1234567890"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-body font-medium text-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    <Phone size={16} />
                    {t("litigation.ctaButton2")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Related Practice Areas ── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--brand-primary)] tracking-tight">
                {t("litigation.relatedTitle")}
              </h2>
              <Link
                href="/practice-areas"
                className="hidden sm:inline-flex items-center gap-1.5 text-[var(--brand-primary)] font-body text-sm font-semibold hover:text-[var(--brand-accent)] transition-colors duration-200 group"
              >
                {t("litigation.relatedViewAll")}
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: t("litigation.related1Title"),
                desc: t("litigation.related1Desc"),
                href: "/practice-areas/mediation-arbitration",
                icon: Scale,
              },
              {
                title: t("litigation.related2Title"),
                desc: t("litigation.related2Desc"),
                href: "/practice-areas/corporate-commercial-law",
                icon: FileText,
              },
              {
                title: t("litigation.related3Title"),
                desc: t("litigation.related3Desc"),
                href: "/practice-areas/employment-law",
                icon: Users,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <motion.div
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    className="group"
                  >
                    <Link
                      href={item.href}
                      className="block bg-[var(--brand-surface)] rounded-2xl p-7 border border-black/5 h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--brand-accent)]/15 transition-colors duration-200">
                        <Icon size={18} className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-200" />
                      </div>
                      <h3 className="font-heading text-base font-bold text-[var(--brand-primary)] mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm text-[var(--brand-text-muted)] leading-relaxed mb-4">
                        {item.desc}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[var(--brand-accent)] font-body text-xs font-semibold group-hover:gap-2 transition-all duration-200">
                        {t("litigation.relatedLearnMore")}
                        <ChevronRight size={13} />
                      </span>
                    </Link>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-8 sm:hidden">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-1.5 text-[var(--brand-primary)] font-body text-sm font-semibold hover:text-[var(--brand-accent)] transition-colors duration-200 group"
            >
              {t("litigation.relatedViewAll")}
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}