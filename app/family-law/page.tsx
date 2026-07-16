"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Users, Shield, Scale, Home, Baby, FileText, ChevronRight, Phone, Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight, scaleIn } from "@/lib/motion";

// ─── Inline mock data ────────────────────────────────────────────────────────

const matters = [
  {
    id: "divorce",
    icon: Scale,
    title: "Divorce & Separation",
    description:
      "We guide clients through contested and uncontested divorce proceedings with clarity and compassion, protecting your financial interests and emotional wellbeing throughout the process.",
    items: [
      "Contested and uncontested divorce",
      "Division of matrimonial assets",
      "Spousal maintenance and alimony",
      "Separation agreements",
      "Nullity of marriage proceedings",
    ],
  },
  {
    id: "custody",
    icon: Baby,
    title: "Child Custody & Access",
    description:
      "Our attorneys prioritize the best interests of children while advocating firmly for your parental rights. We handle both amicable arrangements and high-conflict custody disputes.",
    items: [
      "Sole and joint custody arrangements",
      "Parenting plans and schedules",
      "Relocation and international custody",
      "Modification of existing orders",
      "Emergency custody applications",
    ],
  },
  {
    id: "maintenance",
    icon: Home,
    title: "Maintenance & Financial Support",
    description:
      "Ensuring fair financial outcomes for all parties, including children. We calculate, negotiate, and enforce maintenance obligations with precision and legal authority.",
    items: [
      "Child maintenance assessments",
      "Spousal and partner support",
      "Enforcement of maintenance orders",
      "Variation of maintenance orders",
      "Lump sum and property settlements",
    ],
  },
  {
    id: "adoption",
    icon: Heart,
    title: "Adoption & Guardianship",
    description:
      "We assist families through the rewarding but legally complex process of adoption and guardianship, ensuring every step complies with national and international requirements.",
    items: [
      "Domestic adoption proceedings",
      "Inter-country adoption",
      "Step-parent adoption",
      "Legal guardianship applications",
      "Foster care legal support",
    ],
  },
  {
    id: "protection",
    icon: Shield,
    title: "Domestic Violence & Protection Orders",
    description:
      "We act swiftly to protect victims of domestic abuse, securing urgent protection orders and providing discreet, sensitive legal representation in all related proceedings.",
    items: [
      "Emergency protection orders",
      "Interim and final protection orders",
      "Restraining orders",
      "Breach of protection order proceedings",
      "Safety planning and legal advice",
    ],
  },
  {
    id: "estate",
    icon: FileText,
    title: "Matrimonial Property & Estates",
    description:
      "Navigating the intersection of family law and estate planning, we advise on prenuptial agreements, inheritance disputes, and the distribution of assets upon death or divorce.",
    items: [
      "Prenuptial and postnuptial agreements",
      "Inheritance and succession disputes",
      "Trusts and family wealth planning",
      "Cohabitation agreements",
      "Beneficial interest claims",
    ],
  },
];

const whyChooseUs = [
  {
    id: "compassion",
    icon: Heart,
    title: "Compassionate Representation",
    description:
      "We understand that family law matters are deeply personal. Our attorneys approach every case with empathy, discretion, and genuine care for your family's future.",
  },
  {
    id: "expertise",
    icon: Scale,
    title: "Deep Legal Expertise",
    description:
      "With decades of combined experience in family law, our team navigates complex legal frameworks to secure the best possible outcomes for our clients.",
  },
  {
    id: "resolution",
    icon: Users,
    title: "Resolution-Focused",
    description:
      "We pursue amicable resolutions wherever possible, reducing conflict, cost, and emotional strain — while remaining fully prepared to litigate when necessary.",
  },
  {
    id: "confidential",
    icon: Shield,
    title: "Absolute Confidentiality",
    description:
      "Your privacy is paramount. All family law matters are handled with the strictest confidentiality, protecting your reputation and your family's dignity.",
  },
];

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We begin with a confidential consultation to understand your situation, explain your legal options, and outline a clear strategy tailored to your needs.",
  },
  {
    step: "02",
    title: "Case Assessment",
    description:
      "Our attorneys conduct a thorough review of all relevant documents, agreements, and circumstances to build a comprehensive picture of your case.",
  },
  {
    step: "03",
    title: "Strategy & Negotiation",
    description:
      "We develop a targeted legal strategy and pursue negotiated settlements wherever possible to minimize conflict and protect your interests.",
  },
  {
    step: "04",
    title: "Resolution & Support",
    description:
      "Whether through mediation, court proceedings, or agreement, we see your matter through to resolution and provide ongoing support as needed.",
  },
];

const faqs = [
  {
    id: "faq-1",
    question: "How long does a divorce typically take?",
    answer:
      "The duration depends on whether the divorce is contested or uncontested, and the complexity of asset division and custody arrangements. Uncontested divorces can be finalized in a few months, while contested matters may take longer. We work to resolve matters as efficiently as possible.",
  },
  {
    id: "faq-2",
    question: "What factors determine child custody arrangements?",
    answer:
      "Courts prioritize the best interests of the child, considering factors such as each parent's ability to provide a stable environment, the child's existing relationships, schooling, and in some cases, the child's own preferences depending on age and maturity.",
  },
  {
    id: "faq-3",
    question: "Can I modify an existing custody or maintenance order?",
    answer:
      "Yes. If there has been a material change in circumstances — such as a change in income, relocation, or the child's needs — you may apply to vary an existing order. Our attorneys can advise on whether your situation qualifies and guide you through the process.",
  },
  {
    id: "faq-4",
    question: "Is mediation required before going to court?",
    answer:
      "In many jurisdictions, courts encourage or require parties to attempt mediation before litigation. We offer in-house mediation services and can represent you in external mediation, helping to reach fair agreements without the cost and stress of court proceedings.",
  },
  {
    id: "faq-5",
    question: "What is a prenuptial agreement and is it enforceable?",
    answer:
      "A prenuptial agreement is a legal contract entered into before marriage that outlines how assets and liabilities will be divided in the event of divorce or separation. When properly drafted and executed, prenuptial agreements are generally enforceable, though courts retain discretion to review their fairness.",
  },
];

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

function FaqItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[var(--brand-primary)]/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-[var(--brand-primary)]/[0.02] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-inset"
        aria-expanded={open}
      >
        <span className="font-heading text-[var(--brand-primary)] font-semibold text-base pr-4">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand-accent)]/10 flex items-center justify-center text-[var(--brand-accent)]"
        >
          <ChevronRight size={14} className={open ? "rotate-90" : ""} />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 pt-1 bg-[var(--brand-primary)]/[0.02] border-t border-[var(--brand-primary)]/10">
          <p className="text-[var(--brand-text-secondary)] font-body text-sm leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function FamilyLawPage() {
  return (
    <main className="bg-white">
      {/* ── Hero ── */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden min-h-[520px] flex items-center">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--brand-accent)]/5 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/3 blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/15 flex items-center justify-center">
                  <Heart size={20} className="text-[var(--brand-accent)]" />
                </div>
                <span className="text-[var(--brand-accent)] font-body text-sm font-semibold uppercase tracking-widest">
                  Practice Area
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance"
              >
                Family Law
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="font-body text-white/70 text-lg leading-relaxed max-w-2xl text-pretty"
              >
                Sensitive, skilled legal counsel for life's most personal
                challenges. We protect your family's interests with compassion,
                discretion, and unwavering legal expertise.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)] shadow-[0_4px_16px_rgba(201,168,76,0.3)]"
                >
                  Schedule a Consultation
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/practice-areas"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  All Practice Areas
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Breadcrumb ── */}
      <div className="bg-[var(--brand-primary)]/[0.03] border-b border-[var(--brand-primary)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm font-body">
            <Link href="/" className="text-[var(--brand-text-secondary)] hover:text-[var(--brand-primary)] transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-[var(--brand-text-secondary)]/50" />
            <Link href="/practice-areas" className="text-[var(--brand-text-secondary)] hover:text-[var(--brand-primary)] transition-colors">
              Practice Areas
            </Link>
            <ChevronRight size={14} className="text-[var(--brand-text-secondary)]/50" />
            <span className="text-[var(--brand-primary)] font-medium">Family Law</span>
          </nav>
        </div>
      </div>

      {/* ── Introduction ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p className="text-[var(--brand-accent)] font-body text-sm font-semibold uppercase tracking-widest mb-4">
                  Our Approach
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight mb-6 text-balance">
                  Protecting What Matters Most
                </h2>
                <div className="space-y-4 text-[var(--brand-text-secondary)] font-body text-base leading-relaxed">
                  <p>
                    Family law matters are among the most emotionally charged
                    legal challenges a person can face. At MIT Legal Consultants,
                    we combine rigorous legal expertise with genuine empathy to
                    guide you through divorce, custody disputes, adoption, and
                    every other family-related legal matter.
                  </p>
                  <p>
                    Our family law team understands that behind every case is a
                    family navigating uncertainty. We work tirelessly to achieve
                    outcomes that protect your rights, preserve your dignity, and
                    secure the best possible future for you and your children.
                  </p>
                  <p>
                    Whether your matter requires negotiation, mediation, or
                    courtroom advocacy, our attorneys bring the same level of
                    dedication and strategic thinking to every stage of your case.
                  </p>
                </div>
              </motion.div>
            </Reveal>

            <Reveal delay={0.15}>
              <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,31,68,0.15)]">
                    <img
                      src="https://www.nctriallawyer.com/wp-content/webp-express/webp-images/uploads/2025/05/iStock-2199318939-768x405.jpg.webp"
                      alt="Family law consultation at MIT Legal Consultants"
                      className="w-full h-80 object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.background = "linear-gradient(135deg, var(--brand-primary) 0%, #1a3a6e 100%)";
                          parent.style.height = "320px";
                          parent.style.display = "flex";
                          parent.style.alignItems = "center";
                          parent.style.justifyContent = "center";
                        }
                      }}
                    />
                  </div>
                  {/* Floating stat card */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-[0_4px_24px_rgba(10,31,68,0.12)] border border-[var(--brand-primary)]/8">
                    <p className="font-heading text-3xl font-bold text-[var(--brand-primary)]">20+</p>
                    <p className="font-body text-sm text-[var(--brand-text-secondary)] mt-0.5">Years of Family Law Experience</p>
                  </div>
                  {/* Accent bar */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-[var(--brand-accent)]/10 -z-10" />
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Practice Matters ── */}
      <section className="py-20 lg:py-28 bg-[var(--brand-primary)]/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[var(--brand-accent)] font-body text-sm font-semibold uppercase tracking-widest mb-3">
                Areas of Expertise
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance">
                Comprehensive Family Law Services
              </h2>
              <p className="mt-4 text-[var(--brand-text-secondary)] font-body text-base leading-relaxed">
                From divorce and custody to adoption and estate planning, our
                family law team covers every aspect of your legal needs.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matters.map((matter, i) => {
              const Icon = matter.icon;
              return (
                <Reveal key={matter.id} delay={i * 0.07}>
                  <motion.div
                    whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(10,31,68,0.12)" }}
                    transition={{ duration: 0.25 }}
                    className="bg-white rounded-2xl p-7 border border-[var(--brand-primary)]/8 shadow-[0_2px_12px_rgba(10,31,68,0.06)] h-full flex flex-col"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[var(--brand-accent)]/10 flex items-center justify-center mb-5 flex-shrink-0">
                      <Icon size={22} className="text-[var(--brand-accent)]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[var(--brand-primary)] mb-3">
                      {matter.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--brand-text-secondary)] leading-relaxed mb-5">
                      {matter.description}
                    </p>
                    <ul className="space-y-2 mt-auto">
                      {matter.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle
                            size={15}
                            className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5"
                          />
                          <span className="font-body text-sm text-[var(--brand-text-secondary)]">
                            {item}
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
                <p className="text-[var(--brand-accent)] font-body text-sm font-semibold uppercase tracking-widest mb-4">
                  Why MIT Legal
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight mb-6 text-balance">
                  Your Family Deserves the Best Representation
                </h2>
                <p className="font-body text-[var(--brand-text-secondary)] text-base leading-relaxed mb-8">
                  We combine legal excellence with a human-centered approach,
                  ensuring you feel supported, informed, and empowered at every
                  stage of your matter.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                >
                  Talk to an Attorney
                  <ArrowRight size={15} />
                </Link>
              </Reveal>
            </div>

            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
              {whyChooseUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.id} delay={i * 0.08}>
                    <div className="bg-[var(--brand-primary)]/[0.03] rounded-2xl p-6 border border-[var(--brand-primary)]/8 h-full">
                      <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/10 flex items-center justify-center mb-4">
                        <Icon size={20} className="text-[var(--brand-accent)]" />
                      </div>
                      <h3 className="font-heading text-base font-bold text-[var(--brand-primary)] mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm text-[var(--brand-text-secondary)] leading-relaxed">
                        {item.description}
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
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[var(--brand-accent)] font-body text-sm font-semibold uppercase tracking-widest mb-3">
                How We Work
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight text-balance">
                A Clear Path Through Complex Matters
              </h2>
              <p className="mt-4 text-white/60 font-body text-base leading-relaxed">
                We believe in transparency. Here is how we approach every family
                law matter from first contact to final resolution.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-7 h-full">
                  <div className="font-heading text-5xl font-bold text-[var(--brand-accent)]/20 leading-none mb-4 select-none">
                    {step.step}
                  </div>
                  <h3 className="font-heading text-base font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[var(--brand-accent)]/30 -translate-y-1/2" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <Reveal>
                <p className="text-[var(--brand-accent)] font-body text-sm font-semibold uppercase tracking-widest mb-4">
                  Common Questions
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight mb-6 text-balance">
                  Frequently Asked Questions
                </h2>
                <p className="font-body text-[var(--brand-text-secondary)] text-base leading-relaxed mb-8">
                  Family law can be complex and emotionally overwhelming. We have
                  answered some of the most common questions our clients ask.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+233000000000"
                    className="inline-flex items-center gap-3 text-[var(--brand-primary)] font-body font-medium text-sm hover:text-[var(--brand-accent)] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[var(--brand-accent)]/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-[var(--brand-accent)]" />
                    </div>
                    Call for a free initial consultation
                  </a>
                  <a
                    href="mailto:family@mitlegal.com"
                    className="inline-flex items-center gap-3 text-[var(--brand-primary)] font-body font-medium text-sm hover:text-[var(--brand-accent)] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[var(--brand-accent)]/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-[var(--brand-accent)]" />
                    </div>
                    Email our family law team
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-3 space-y-3">
              {faqs.map((faq, i) => (
                <Reveal key={faq.id} delay={i * 0.06}>
                  <FaqItem faq={faq} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Practice Areas ── */}
      <section className="py-16 bg-[var(--brand-primary)]/[0.03] border-t border-[var(--brand-primary)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <h2 className="font-heading text-2xl font-bold text-[var(--brand-primary)]">
                Related Practice Areas
              </h2>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-1.5 text-[var(--brand-accent)] font-body font-semibold text-sm hover:gap-2.5 transition-all duration-200"
              >
                View All Areas <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                href: "/practice-areas/mediation-arbitration",
                title: "Mediation & Arbitration",
                desc: "Resolve family disputes amicably through expert alternative dispute resolution.",
                icon: Scale,
              },
              {
                href: "/practice-areas/civil-criminal-litigation",
                title: "Civil & Criminal Litigation",
                desc: "Vigorous courtroom representation when family matters require litigation.",
                icon: FileText,
              },
              {
                href: "/practice-areas/employment-law",
                title: "Employment Law",
                desc: "Protecting your workplace rights during and after major life transitions.",
                icon: Users,
              },
            ].map((area, i) => {
              const Icon = area.icon;
              return (
                <Reveal key={area.href} delay={i * 0.08}>
                  <Link href={area.href} className="group block">
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white rounded-xl p-6 border border-[var(--brand-primary)]/8 shadow-[0_2px_8px_rgba(10,31,68,0.05)] hover:shadow-[0_8px_24px_rgba(10,31,68,0.1)] transition-shadow duration-300 h-full"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/10 flex items-center justify-center mb-4">
                        <Icon size={18} className="text-[var(--brand-accent)]" />
                      </div>
                      <h3 className="font-heading text-base font-bold text-[var(--brand-primary)] mb-2 group-hover:text-[var(--brand-accent)] transition-colors">
                        {area.title}
                      </h3>
                      <p className="font-body text-sm text-[var(--brand-text-secondary)] leading-relaxed">
                        {area.desc}
                      </p>
                    </motion.div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <Reveal>
        <section className="py-20 bg-[var(--brand-accent)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight mb-4 text-balance">
              Ready to Protect Your Family's Future?
            </h2>
            <p className="font-body text-[var(--brand-primary)]/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Our family law attorneys are ready to listen, advise, and advocate
              for you. Schedule a confidential consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-primary)] text-white font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] shadow-[0_4px_16px_rgba(10,31,68,0.25)]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[var(--brand-primary)]/20 text-[var(--brand-primary)] font-body font-semibold text-sm rounded-lg hover:bg-[var(--brand-primary)]/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
              >
                Meet Our Attorneys
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}