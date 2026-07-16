"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Heart, Users, Home, FileText, Shield, CheckCircle, ArrowRight, Phone, Mail, Scale, Baby, Handshake } from 'lucide-react';
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight, scaleIn } from "@/lib/motion";

const services = [
  {
    id: "divorce",
    icon: Scale,
    title: "Divorce & Separation",
    description:
      "We guide clients through contested and uncontested divorce proceedings with clarity and discretion, protecting your financial interests and emotional wellbeing throughout the process.",
    matters: [
      "Contested and uncontested divorce",
      "Legal separation agreements",
      "Division of matrimonial property",
      "Spousal maintenance and alimony",
      "Post-divorce modifications",
    ],
  },
  {
    id: "custody",
    icon: Baby,
    title: "Child Custody & Support",
    description:
      "Our attorneys prioritize the best interests of children while advocating firmly for your parental rights. We handle all aspects of custody arrangements and child support determinations.",
    matters: [
      "Sole and joint custody arrangements",
      "Parenting plans and visitation schedules",
      "Child support calculations and enforcement",
      "Relocation disputes",
      "Custody modification applications",
    ],
  },
  {
    id: "adoption",
    icon: Heart,
    title: "Adoption & Guardianship",
    description:
      "We assist families through domestic and international adoption processes, ensuring every legal requirement is met so you can focus on welcoming a new member into your family.",
    matters: [
      "Domestic infant and child adoption",
      "Step-parent and relative adoption",
      "International adoption compliance",
      "Legal guardianship applications",
      "Termination of parental rights",
    ],
  },
  {
    id: "prenuptial",
    icon: FileText,
    title: "Prenuptial & Postnuptial Agreements",
    description:
      "Protect your assets and define financial expectations before or during marriage with carefully drafted agreements that stand up to legal scrutiny.",
    matters: [
      "Prenuptial agreement drafting and review",
      "Postnuptial agreement negotiation",
      "Asset protection planning",
      "Business interest protection",
      "Inheritance and estate provisions",
    ],
  },
  {
    id: "domestic",
    icon: Shield,
    title: "Domestic Violence & Protection Orders",
    description:
      "We provide urgent, compassionate legal support to victims of domestic violence, helping secure protection orders and navigate the legal system safely.",
    matters: [
      "Emergency protection order applications",
      "Restraining and non-molestation orders",
      "Safety planning and legal strategy",
      "Representation at protection order hearings",
      "Coordination with law enforcement",
    ],
  },
  {
    id: "mediation",
    icon: Handshake,
    title: "Family Mediation",
    description:
      "Our trained family mediators help parties reach mutually acceptable agreements outside of court, reducing conflict, cost, and emotional strain for all involved.",
    matters: [
      "Divorce and separation mediation",
      "Co-parenting dispute resolution",
      "Property and financial mediation",
      "Elder care and inheritance disputes",
      "Family business succession mediation",
    ],
  },
];

const whyChooseItems = [
  {
    id: "compassion",
    icon: Heart,
    title: "Compassionate Representation",
    description:
      "We understand that family legal matters are deeply personal. Our attorneys combine legal expertise with genuine empathy to support you at every step.",
  },
  {
    id: "experience",
    icon: Scale,
    title: "Decades of Family Law Experience",
    description:
      "Our family law team has handled hundreds of cases across all family law disciplines, from straightforward agreements to complex multi-jurisdictional disputes.",
  },
  {
    id: "child-focus",
    icon: Baby,
    title: "Child-Centered Approach",
    description:
      "In matters involving children, we always prioritize their wellbeing and long-term interests, working toward outcomes that support healthy family dynamics.",
  },
  {
    id: "confidential",
    icon: Shield,
    title: "Strict Confidentiality",
    description:
      "All family matters are handled with the utmost discretion. Your privacy is protected throughout every stage of the legal process.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We begin with a confidential consultation to understand your situation, explain your legal options, and outline a clear path forward.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description:
      "Our attorneys develop a tailored legal strategy aligned with your goals, whether that means negotiation, mediation, or litigation.",
  },
  {
    step: "03",
    title: "Negotiation & Mediation",
    description:
      "Where possible, we seek amicable resolutions through skilled negotiation and mediation to minimize conflict and cost.",
  },
  {
    step: "04",
    title: "Court Representation",
    description:
      "When litigation is necessary, our experienced litigators provide vigorous, prepared representation at all court levels.",
  },
  {
    step: "05",
    title: "Resolution & Follow-Through",
    description:
      "We ensure all agreements and orders are properly documented, enforceable, and that you fully understand your rights going forward.",
  },
];

const stats = [
  { value: "500+", label: "Family Cases Resolved" },
  { value: "95%", label: "Client Satisfaction Rate" },
  { value: "20+", label: "Years of Experience" },
  { value: "3", label: "Certified Family Mediators" },
];

const hoverLift: Variants = {
  rest: { y: 0, boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -8px rgba(0,0,0,0.10)" },
  hover: { y: -4, boxShadow: "0 4px 8px rgba(0,0,0,0.06), 0 16px 40px -12px rgba(10,31,68,0.18)" },
};

export default function FamilyLawPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-primary)] to-[#0d2a5e]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--brand-accent)]/5 blur-3xl translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/3 blur-2xl -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--brand-accent)]/15 border border-[var(--brand-accent)]/30 flex items-center justify-center">
                <Heart size={20} className="text-[var(--brand-accent)]" />
              </div>
              <span className="text-[var(--brand-accent)] text-sm font-body font-semibold uppercase tracking-widest">
                {t("familyLaw.hero.eyebrow")}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance mb-6"
            >
              {t("familyLaw.hero.title")}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="font-body text-lg text-white/70 leading-relaxed mb-10 max-w-2xl text-pretty"
            >
              {t("familyLaw.hero.subtitle")}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                {t("familyLaw.hero.cta")}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {t("familyLaw.hero.secondaryCta")}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <Reveal>
        <section className="bg-[var(--brand-accent)] py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-3xl font-bold text-[var(--brand-primary)]">
                    {stat.value}
                  </p>
                  <p className="font-body text-sm text-[var(--brand-primary)]/70 mt-1 font-medium">
                    {t(`familyLaw.stats.${stat.label.toLowerCase().replace(/\s+/g, "_").replace(/%/g, "pct")}`, { defaultValue: stat.label })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Introduction ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
                <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4 block">
                  {t("familyLaw.intro.eyebrow")}
                </span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                  {t("familyLaw.intro.title")}
                </h2>
                <p className="font-body text-[var(--brand-text)]/70 leading-relaxed mb-5 text-pretty">
                  {t("familyLaw.intro.body1")}
                </p>
                <p className="font-body text-[var(--brand-text)]/70 leading-relaxed mb-8 text-pretty">
                  {t("familyLaw.intro.body2")}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-body font-semibold text-sm hover:text-[var(--brand-accent)] transition-colors duration-200 group"
                >
                  {t("familyLaw.intro.link")}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            </Reveal>

            <Reveal delay={0.15}>
              <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
                <div className="relative rounded-2xl overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.06),0_20px_60px_-12px_rgba(10,31,68,0.18)]">
                  <img
                    src="https://www.nctriallawyer.com/wp-content/webp-express/webp-images/uploads/2025/05/iStock-2199318939-768x405.jpg.webp"
                    alt={t("familyLaw.intro.imageAlt")}
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--brand-accent)]/15 flex items-center justify-center flex-shrink-0">
                          <Heart size={18} className="text-[var(--brand-accent)]" />
                        </div>
                        <div>
                          <p className="font-heading text-sm font-bold text-[var(--brand-primary)]">
                            {t("familyLaw.intro.badgeTitle")}
                          </p>
                          <p className="font-body text-xs text-[var(--brand-text)]/60">
                            {t("familyLaw.intro.badgeSubtitle")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-20 lg:py-28 bg-[var(--brand-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4 block">
                {t("familyLaw.services.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-4">
                {t("familyLaw.services.title")}
              </h2>
              <p className="font-body text-[var(--brand-text)]/60 leading-relaxed text-pretty">
                {t("familyLaw.services.subtitle")}
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.id} delay={i * 0.07}>
                  <motion.div
                    variants={hoverLift}
                    initial="rest"
                    whileHover="hover"
                    className="bg-white rounded-2xl p-7 border border-black/5 h-full flex flex-col cursor-default"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/8 flex items-center justify-center mb-5 flex-shrink-0">
                      <Icon size={22} className="text-[var(--brand-primary)]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[var(--brand-primary)] mb-3">
                      {t(`familyLaw.services.${service.id}.title`, { defaultValue: service.title })}
                    </h3>
                    <p className="font-body text-sm text-[var(--brand-text)]/65 leading-relaxed mb-5 flex-1">
                      {t(`familyLaw.services.${service.id}.description`, { defaultValue: service.description })}
                    </p>
                    <ul className="space-y-2">
                      {service.matters.map((matter) => (
                        <li key={matter} className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-[var(--brand-accent)] mt-0.5 flex-shrink-0" />
                          <span className="font-body text-xs text-[var(--brand-text)]/60 leading-relaxed">
                            {matter}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2">
              <Reveal>
                <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4 block">
                  {t("familyLaw.why.eyebrow")}
                </span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                  {t("familyLaw.why.title")}
                </h2>
                <p className="font-body text-[var(--brand-text)]/65 leading-relaxed mb-8 text-pretty">
                  {t("familyLaw.why.body")}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                >
                  {t("familyLaw.why.cta")}
                  <ArrowRight size={15} />
                </Link>
              </Reveal>
            </div>

            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
              {whyChooseItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.id} delay={i * 0.08}>
                    <div className="bg-[var(--brand-surface)] rounded-2xl p-6 border border-black/5">
                      <div className="w-11 h-11 rounded-xl bg-[var(--brand-accent)]/12 flex items-center justify-center mb-4">
                        <Icon size={20} className="text-[var(--brand-accent)]" />
                      </div>
                      <h3 className="font-heading text-base font-bold text-[var(--brand-primary)] mb-2">
                        {t(`familyLaw.why.${item.id}.title`, { defaultValue: item.title })}
                      </h3>
                      <p className="font-body text-sm text-[var(--brand-text)]/60 leading-relaxed">
                        {t(`familyLaw.why.${item.id}.description`, { defaultValue: item.description })}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="py-20 lg:py-28 bg-[var(--brand-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4 block">
                {t("familyLaw.process.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight text-balance mb-4">
                {t("familyLaw.process.title")}
              </h2>
              <p className="font-body text-white/60 leading-relaxed text-pretty">
                {t("familyLaw.process.subtitle")}
              </p>
            </div>
          </Reveal>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-white/10" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, i) => (
                <Reveal key={step.step} delay={i * 0.1}>
                  <div className="relative text-center lg:text-left">
                    <div className="inline-flex lg:flex items-center justify-center lg:justify-start mb-5">
                      <div className="w-16 h-16 rounded-full bg-[var(--brand-accent)]/15 border border-[var(--brand-accent)]/30 flex items-center justify-center">
                        <span className="font-heading text-lg font-bold text-[var(--brand-accent)]">
                          {step.step}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-heading text-base font-bold text-white mb-2">
                      {t(`familyLaw.process.step${step.step}.title`, { defaultValue: step.title })}
                    </h3>
                    <p className="font-body text-sm text-white/55 leading-relaxed">
                      {t(`familyLaw.process.step${step.step}.description`, { defaultValue: step.description })}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Typical Matters ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal delay={0.1}>
              <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
                <div className="relative rounded-2xl overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.06),0_20px_60px_-12px_rgba(10,31,68,0.18)]">
                  <img
                    src="https://www.andlaw.com/wp-content/uploads/2022/08/JMS_family-law-web.jpg"
                    alt={t("familyLaw.matters.imageAlt")}
                    className="w-full h-80 lg:h-[480px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/30 to-transparent" />
                </div>
              </motion.div>
            </Reveal>

            <Reveal>
              <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
                <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4 block">
                  {t("familyLaw.matters.eyebrow")}
                </span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                  {t("familyLaw.matters.title")}
                </h2>
                <p className="font-body text-[var(--brand-text)]/65 leading-relaxed mb-8 text-pretty">
                  {t("familyLaw.matters.body")}
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    t("familyLaw.matters.item1"),
                    t("familyLaw.matters.item2"),
                    t("familyLaw.matters.item3"),
                    t("familyLaw.matters.item4"),
                    t("familyLaw.matters.item5"),
                    t("familyLaw.matters.item6"),
                    t("familyLaw.matters.item7"),
                    t("familyLaw.matters.item8"),
                  ].map((matter) => (
                    <div key={matter} className="flex items-center gap-3 bg-[var(--brand-surface)] rounded-xl px-4 py-3 border border-black/5">
                      <CheckCircle size={15} className="text-[var(--brand-accent)] flex-shrink-0" />
                      <span className="font-body text-sm text-[var(--brand-text)]/70 font-medium">
                        {matter}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <Reveal>
        <section className="py-20 bg-gradient-to-br from-[var(--brand-primary)] to-[#0d2a5e]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-[var(--brand-accent)]/15 border border-[var(--brand-accent)]/30 flex items-center justify-center mx-auto mb-6">
              <Phone size={24} className="text-[var(--brand-accent)]" />
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight text-balance mb-4">
              {t("familyLaw.cta.title")}
            </h2>
            <p className="font-body text-white/65 leading-relaxed mb-10 max-w-2xl mx-auto text-pretty">
              {t("familyLaw.cta.subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                {t("familyLaw.cta.primaryButton")}
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <Phone size={16} />
                {t("familyLaw.cta.phoneButton")}
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Related Practice Areas ── */}
      <section className="py-20 lg:py-24 bg-[var(--brand-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-3 block">
                  {t("familyLaw.related.eyebrow")}
                </span>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight">
                  {t("familyLaw.related.title")}
                </h2>
              </div>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-body font-semibold text-sm hover:text-[var(--brand-accent)] transition-colors duration-200 group flex-shrink-0"
              >
                {t("familyLaw.related.viewAll")}
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                href: "/practice-areas/mediation-arbitration",
                icon: Scale,
                title: t("familyLaw.related.mediation.title"),
                desc: t("familyLaw.related.mediation.desc"),
              },
              {
                href: "/practice-areas/civil-criminal-litigation",
                icon: FileText,
                title: t("familyLaw.related.litigation.title"),
                desc: t("familyLaw.related.litigation.desc"),
              },
              {
                href: "/practice-areas/employment-law",
                icon: Users,
                title: t("familyLaw.related.employment.title"),
                desc: t("familyLaw.related.employment.desc"),
              },
            ].map((area, i) => {
              const Icon = area.icon;
              return (
                <Reveal key={area.href} delay={i * 0.08}>
                  <motion.div
                    variants={hoverLift}
                    initial="rest"
                    whileHover="hover"
                    className="bg-white rounded-2xl p-6 border border-black/5 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[var(--brand-primary)]/8 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-[var(--brand-primary)]" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-[var(--brand-primary)] mb-2">
                      {area.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--brand-text)]/60 leading-relaxed mb-4">
                      {area.desc}
                    </p>
                    <Link
                      href={area.href}
                      className="inline-flex items-center gap-1.5 text-[var(--brand-primary)] font-body font-semibold text-xs hover:text-[var(--brand-accent)] transition-colors duration-200 group-hover:gap-2"
                    >
                      {t("familyLaw.related.learnMore")}
                      <ArrowRight size={13} />
                    </Link>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}