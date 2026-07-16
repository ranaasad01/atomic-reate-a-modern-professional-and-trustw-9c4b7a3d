"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Users, Shield, FileText, Scale, CheckCircle, ArrowRight, Phone, Mail, Briefcase, AlertCircle, Award, Clock } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from "@/lib/motion";

// ─── Inline mock data ────────────────────────────────────────────────────────

const heroData = {
  eyebrow: "Practice Area",
  title: "Employment Law",
  subtitle:
    "Protecting the rights and interests of employers and employees across every stage of the employment relationship — from hiring to separation and beyond.",
  image: "https://www.accurateinvestigationservices.com/wp-content/uploads/2022/10/employment-law.jpg",
};

const overviewParagraphs = [
  "Employment law governs the complex and evolving relationship between employers and employees. At MIT Legal Consultants, our employment law practice provides strategic, practical counsel to both businesses and individuals navigating the full spectrum of workplace legal matters.",
  "Whether you are an employer seeking to build compliant HR frameworks, or an employee whose rights have been violated, our attorneys bring deep expertise and a results-driven approach to every engagement. We understand that employment disputes carry significant financial, reputational, and personal stakes — and we are committed to achieving the best possible outcome for our clients.",
  "Our team stays current with the latest legislative developments, tribunal decisions, and regulatory guidance, ensuring that the advice we provide is not only legally sound but commercially and personally relevant.",
];

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    id: "contracts",
    icon: <FileText size={22} />,
    title: "Employment Contracts & Policies",
    description:
      "Drafting, reviewing, and negotiating employment agreements, non-compete clauses, confidentiality provisions, and comprehensive workplace policy handbooks.",
  },
  {
    id: "disputes",
    icon: <Scale size={22} />,
    title: "Workplace Disputes & Tribunal Representation",
    description:
      "Representing clients before employment tribunals and courts in unfair dismissal, wrongful termination, constructive dismissal, and breach of contract claims.",
  },
  {
    id: "discrimination",
    icon: <Shield size={22} />,
    title: "Discrimination & Harassment",
    description:
      "Advising on and litigating claims involving unlawful discrimination based on race, gender, age, disability, religion, or national origin, and workplace harassment matters.",
  },
  {
    id: "redundancy",
    icon: <Briefcase size={22} />,
    title: "Redundancy & Restructuring",
    description:
      "Guiding employers through lawful redundancy processes, collective consultation obligations, and advising employees on their entitlements during organizational restructuring.",
  },
  {
    id: "compliance",
    icon: <CheckCircle size={22} />,
    title: "Regulatory Compliance & HR Advisory",
    description:
      "Helping businesses achieve and maintain compliance with labor laws, health and safety regulations, minimum wage requirements, and data protection obligations in the employment context.",
  },
  {
    id: "executive",
    icon: <Award size={22} />,
    title: "Executive Compensation & Severance",
    description:
      "Negotiating executive service agreements, bonus structures, equity arrangements, and separation packages for senior leaders and C-suite executives.",
  },
  {
    id: "whistleblower",
    icon: <AlertCircle size={22} />,
    title: "Whistleblower Protection",
    description:
      "Advising and representing employees who have made protected disclosures, and helping employers establish robust whistleblowing frameworks that meet statutory requirements.",
  },
  {
    id: "collective",
    icon: <Users size={22} />,
    title: "Collective Labor Relations",
    description:
      "Advising on trade union recognition, collective bargaining agreements, industrial action, and the legal framework governing employee representative bodies.",
  },
];

interface TypicalMatter {
  id: string;
  matter: string;
  forWhom: "Employer" | "Employee" | "Both";
}

const typicalMatters: TypicalMatter[] = [
  { id: "m1", matter: "Unfair or wrongful dismissal claims", forWhom: "Both" },
  { id: "m2", matter: "Drafting and enforcing restrictive covenants", forWhom: "Employer" },
  { id: "m3", matter: "Sexual harassment investigations and claims", forWhom: "Both" },
  { id: "m4", matter: "TUPE / business transfer employee rights", forWhom: "Both" },
  { id: "m5", matter: "Collective redundancy consultation processes", forWhom: "Employer" },
  { id: "m6", matter: "Disability discrimination and reasonable adjustments", forWhom: "Employee" },
  { id: "m7", matter: "Executive exit negotiations and settlement agreements", forWhom: "Both" },
  { id: "m8", matter: "Workplace investigation and disciplinary procedures", forWhom: "Employer" },
  { id: "m9", matter: "Equal pay audits and claims", forWhom: "Both" },
  { id: "m10", matter: "Immigration compliance for international hires", forWhom: "Employer" },
];

interface StatItem {
  id: string;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { id: "s1", value: "500+", label: "Employment matters handled" },
  { id: "s2", value: "95%", label: "Client satisfaction rate" },
  { id: "s3", value: "20+", label: "Years of combined expertise" },
  { id: "s4", value: "Both", label: "Employer & employee representation" },
];

interface WhyItem {
  id: string;
  title: string;
  body: string;
}

const whyItems: WhyItem[] = [
  {
    id: "w1",
    title: "Dual-Perspective Expertise",
    body: "We represent both employers and employees, giving us a uniquely balanced understanding of workplace dynamics and the strongest arguments on each side.",
  },
  {
    id: "w2",
    title: "Commercial Pragmatism",
    body: "We combine rigorous legal analysis with practical business sense, helping clients resolve disputes efficiently and avoid unnecessary litigation costs.",
  },
  {
    id: "w3",
    title: "Proactive Risk Management",
    body: "Beyond dispute resolution, we help clients build compliant, resilient employment frameworks that prevent costly problems before they arise.",
  },
  {
    id: "w4",
    title: "Confidential & Sensitive Handling",
    body: "Employment matters are deeply personal. We handle every case with the discretion, empathy, and professionalism our clients deserve.",
  },
];

const cardHover: Variants = {
  rest: { y: 0, boxShadow: "0 1px 3px rgba(10,31,68,0.06), 0 8px 24px -8px rgba(10,31,68,0.10)" },
  hover: { y: -4, boxShadow: "0 4px 16px rgba(10,31,68,0.10), 0 20px 40px -12px rgba(10,31,68,0.18)" },
};

// ─── Page Component ───────────────────────────────────────────────────────────

export default function EmploymentLawPage() {
  const t = useTranslations();

  return (
    <main className="bg-white min-h-screen">
      {/* ── Hero ── */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, var(--brand-accent) 0%, transparent 60%), radial-gradient(circle at 20% 80%, #ffffff 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-accent)]/15 border border-[var(--brand-accent)]/30 text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-5"
              >
                <Users size={12} />
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
                className="font-body text-white/70 text-lg leading-relaxed mb-8 text-pretty max-w-xl"
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
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-body font-medium text-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  {t("cta.allPracticeAreas")}
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: image */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.35)] border border-white/10">
                <img
                  src={heroData.image}
                  alt="Employment law professionals in consultation"
                  className="w-full h-80 object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/60 to-transparent" />
                {/* Stat overlay */}
                <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3">
                  {stats.slice(0, 2).map((s) => (
                    <div
                      key={s.id}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center"
                    >
                      <p className="font-heading text-2xl font-bold text-[var(--brand-accent)]">
                        {s.value}
                      </p>
                      <p className="font-body text-white/80 text-xs mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Breadcrumb ── */}
      <div className="bg-[var(--brand-primary)]/5 border-b border-[var(--brand-primary)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-body text-[var(--brand-primary)]/50">
            <Link href="/" className="hover:text-[var(--brand-primary)] transition-colors">
              {t("nav.home")}
            </Link>
            <span>/</span>
            <Link href="/practice-areas" className="hover:text-[var(--brand-primary)] transition-colors">
              {t("nav.practiceAreas")}
            </Link>
            <span>/</span>
            <span className="text-[var(--brand-primary)] font-medium">{t("practiceAreas.employmentLaw.title")}</span>
          </nav>
        </div>
      </div>

      {/* ── Overview ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <span className="inline-block text-[var(--brand-accent)] font-body font-semibold text-xs uppercase tracking-widest mb-4">
                  {t("practiceAreas.overview.eyebrow")}
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                  {t("practiceAreas.employmentLaw.overviewHeading")}
                </h2>
                <div className="space-y-4">
                  {overviewParagraphs.map((para, i) => (
                    <p key={i} className="font-body text-[var(--brand-primary)]/70 leading-relaxed text-pretty">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Stats grid */}
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <motion.div
                    key={s.id}
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    className="bg-[var(--brand-primary)]/4 border border-[var(--brand-primary)]/10 rounded-2xl p-6 text-center cursor-default"
                  >
                    <p className="font-heading text-3xl font-bold text-[var(--brand-accent)] mb-1">
                      {s.value}
                    </p>
                    <p className="font-body text-[var(--brand-primary)]/60 text-sm leading-snug">
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 lg:py-28 bg-[var(--brand-primary)]/3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-[var(--brand-accent)] font-body font-semibold text-xs uppercase tracking-widest mb-4">
                {t("practiceAreas.services.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance">
                {t("practiceAreas.employmentLaw.servicesHeading")}
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((svc, i) => (
              <Reveal key={svc.id} delay={i * 0.07}>
                <motion.div
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                  className="bg-white border border-[var(--brand-primary)]/8 rounded-2xl p-6 h-full flex flex-col gap-4 cursor-default transition-colors duration-200 hover:border-[var(--brand-accent)]/30"
                >
                  <div className="w-11 h-11 rounded-xl bg-[var(--brand-primary)] flex items-center justify-center text-[var(--brand-accent)] flex-shrink-0">
                    {svc.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-[var(--brand-primary)] mb-2 leading-snug">
                      {svc.title}
                    </h3>
                    <p className="font-body text-[var(--brand-primary)]/60 text-sm leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Typical Matters ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14 items-start">
            {/* Left: heading + context */}
            <Reveal className="lg:col-span-2">
              <div className="lg:sticky lg:top-28">
                <span className="inline-block text-[var(--brand-accent)] font-body font-semibold text-xs uppercase tracking-widest mb-4">
                  {t("practiceAreas.matters.eyebrow")}
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-5">
                  {t("practiceAreas.employmentLaw.mattersHeading")}
                </h2>
                <p className="font-body text-[var(--brand-primary)]/65 leading-relaxed mb-8 text-pretty">
                  {t("practiceAreas.employmentLaw.mattersBody")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(["Employer", "Employee", "Both"] as const).map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs font-body font-semibold border ${
                        tag === "Employer"
                          ? "bg-[var(--brand-primary)]/8 border-[var(--brand-primary)]/15 text-[var(--brand-primary)]"
                          : tag === "Employee"
                          ? "bg-[var(--brand-accent)]/10 border-[var(--brand-accent)]/25 text-[var(--brand-primary)]"
                          : "bg-white border-[var(--brand-primary)]/15 text-[var(--brand-primary)]/70"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="font-body text-[var(--brand-primary)]/40 text-xs self-center ml-1">
                    {t("practiceAreas.matters.legend")}
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Right: matter list */}
            <div className="lg:col-span-3 space-y-3">
              {typicalMatters.map((m, i) => (
                <Reveal key={m.id} delay={i * 0.05}>
                  <div className="flex items-center justify-between gap-4 bg-white border border-[var(--brand-primary)]/8 rounded-xl px-5 py-4 hover:border-[var(--brand-accent)]/30 hover:shadow-[0_2px_12px_rgba(10,31,68,0.07)] transition-all duration-200">
                    <div className="flex items-center gap-3">
                      <CheckCircle
                        size={16}
                        className="text-[var(--brand-accent)] flex-shrink-0"
                      />
                      <span className="font-body text-[var(--brand-primary)] text-sm font-medium">
                        {m.matter}
                      </span>
                    </div>
                    <span
                      className={`flex-shrink-0 px-2.5 py-0.5 rounded-full text-xs font-body font-semibold border ${
                        m.forWhom === "Employer"
                          ? "bg-[var(--brand-primary)]/8 border-[var(--brand-primary)]/15 text-[var(--brand-primary)]"
                          : m.forWhom === "Employee"
                          ? "bg-[var(--brand-accent)]/10 border-[var(--brand-accent)]/25 text-[var(--brand-primary)]"
                          : "bg-white border-[var(--brand-primary)]/15 text-[var(--brand-primary)]/60"
                      }`}
                    >
                      {m.forWhom}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 lg:py-28 bg-[var(--brand-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-[var(--brand-accent)] font-body font-semibold text-xs uppercase tracking-widest mb-4">
                {t("practiceAreas.why.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight text-balance">
                {t("practiceAreas.employmentLaw.whyHeading")}
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyItems.map((w, i) => (
              <Reveal key={w.id} delay={i * 0.08}>
                <motion.div
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full cursor-default hover:bg-white/8 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/15 border border-[var(--brand-accent)]/25 flex items-center justify-center mb-4">
                    <Clock size={18} className="text-[var(--brand-accent)]" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-white mb-2 leading-snug">
                    {w.title}
                  </h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed">
                    {w.body}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-[var(--brand-accent)] font-body font-semibold text-xs uppercase tracking-widest mb-4">
                {t("practiceAreas.process.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance">
                {t("practiceAreas.employmentLaw.processHeading")}
              </h2>
            </div>
          </Reveal>

          <div className="relative">
            {/* Connector line */}
            <div
              className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-[var(--brand-primary)]/10"
              aria-hidden="true"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: t("practiceAreas.process.step1Title"),
                  body: t("practiceAreas.process.step1Body"),
                },
                {
                  step: "02",
                  title: t("practiceAreas.process.step2Title"),
                  body: t("practiceAreas.process.step2Body"),
                },
                {
                  step: "03",
                  title: t("practiceAreas.process.step3Title"),
                  body: t("practiceAreas.process.step3Body"),
                },
                {
                  step: "04",
                  title: t("practiceAreas.process.step4Title"),
                  body: t("practiceAreas.process.step4Body"),
                },
              ].map((p, i) => (
                <Reveal key={p.step} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[var(--brand-primary)] border-4 border-white shadow-[0_0_0_1px_var(--brand-primary)] flex items-center justify-center mx-auto mb-5">
                      <span className="font-heading text-[var(--brand-accent)] font-bold text-lg">
                        {p.step}
                      </span>
                    </div>
                    <h3 className="font-heading text-base font-semibold text-[var(--brand-primary)] mb-2">
                      {p.title}
                    </h3>
                    <p className="font-body text-[var(--brand-primary)]/60 text-sm leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <Reveal>
        <section className="py-16 bg-[var(--brand-accent)]/8 border-y border-[var(--brand-accent)]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--brand-primary)] tracking-tight text-balance mb-2">
                  {t("practiceAreas.employmentLaw.ctaHeading")}
                </h2>
                <p className="font-body text-[var(--brand-primary)]/65 leading-relaxed text-pretty max-w-xl">
                  {t("practiceAreas.employmentLaw.ctaBody")}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-primary)] text-white font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                >
                  {t("cta.scheduleConsultation")}
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg border border-[var(--brand-primary)]/15 hover:border-[var(--brand-primary)]/30 hover:shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                >
                  <Phone size={16} />
                  {t("cta.callUs")}
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Related Practice Areas ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--brand-primary)] tracking-tight">
                {t("practiceAreas.related.heading")}
              </h2>
              <Link
                href="/practice-areas"
                className="hidden sm:inline-flex items-center gap-1.5 text-[var(--brand-accent)] font-body font-semibold text-sm hover:gap-2.5 transition-all duration-200"
              >
                {t("practiceAreas.related.viewAll")}
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                href: "/practice-areas/civil-criminal-litigation",
                title: t("practiceAreas.civilLitigation.title"),
                desc: t("practiceAreas.civilLitigation.shortDesc"),
                icon: <Scale size={20} />,
              },
              {
                href: "/practice-areas/mediation-arbitration",
                title: t("practiceAreas.mediationArbitration.title"),
                desc: t("practiceAreas.mediationArbitration.shortDesc"),
                icon: <Shield size={20} />,
              },
              {
                href: "/practice-areas/corporate-commercial-law",
                title: t("practiceAreas.corporateCommercial.title"),
                desc: t("practiceAreas.corporateCommercial.shortDesc"),
                icon: <Briefcase size={20} />,
              },
            ].map((rel, i) => (
              <Reveal key={rel.href} delay={i * 0.08}>
                <Link href={rel.href} className="group block">
                  <motion.div
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    className="bg-white border border-[var(--brand-primary)]/8 rounded-2xl p-6 h-full flex flex-col gap-4 transition-colors duration-200 group-hover:border-[var(--brand-accent)]/30"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[var(--brand-primary)] flex items-center justify-center text-[var(--brand-accent)]">
                      {rel.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-base font-semibold text-[var(--brand-primary)] mb-1.5 leading-snug group-hover:text-[var(--brand-accent)] transition-colors duration-200">
                        {rel.title}
                      </h3>
                      <p className="font-body text-[var(--brand-primary)]/55 text-sm leading-relaxed">
                        {rel.desc}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[var(--brand-accent)] font-body font-semibold text-xs group-hover:gap-2 transition-all duration-200">
                      {t("practiceAreas.related.learnMore")}
                      <ArrowRight size={13} />
                    </span>
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-1.5 text-[var(--brand-accent)] font-body font-semibold text-sm"
              >
                {t("practiceAreas.related.viewAll")}
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contact Strip ── */}
      <Reveal>
        <section className="py-14 bg-[var(--brand-primary)]/4 border-t border-[var(--brand-primary)]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--brand-primary)] flex items-center justify-center">
                  <Phone size={18} className="text-[var(--brand-accent)]" />
                </div>
                <div>
                  <p className="font-body text-[var(--brand-primary)]/50 text-xs uppercase tracking-widest mb-0.5">
                    {t("contact.callUs")}
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="font-heading text-[var(--brand-primary)] font-semibold text-base hover:text-[var(--brand-accent)] transition-colors duration-200"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--brand-primary)] flex items-center justify-center">
                  <Mail size={18} className="text-[var(--brand-accent)]" />
                </div>
                <div>
                  <p className="font-body text-[var(--brand-primary)]/50 text-xs uppercase tracking-widest mb-0.5">
                    {t("contact.emailUs")}
                  </p>
                  <a
                    href="mailto:info@mitlegal.com"
                    className="font-heading text-[var(--brand-primary)] font-semibold text-base hover:text-[var(--brand-accent)] transition-colors duration-200"
                  >
                    info@mitlegal.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--brand-primary)] flex items-center justify-center">
                  <Clock size={18} className="text-[var(--brand-accent)]" />
                </div>
                <div>
                  <p className="font-body text-[var(--brand-primary)]/50 text-xs uppercase tracking-widest mb-0.5">
                    {t("contact.officeHours")}
                  </p>
                  <p className="font-heading text-[var(--brand-primary)] font-semibold text-base">
                    {t("contact.hoursValue")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}