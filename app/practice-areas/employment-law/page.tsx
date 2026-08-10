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
    id: "investigations",
    icon: <Users size={22} />,
    title: "Workplace Investigations",
    description:
      "Conducting independent, thorough investigations into workplace misconduct, grievances, and disciplinary matters, delivering findings that withstand legal scrutiny.",
  },
];

const typicalMatters = [
  "Drafting and reviewing employment contracts and executive service agreements",
  "Representing employees in unfair dismissal and wrongful termination claims",
  "Advising employers on lawful redundancy and collective consultation procedures",
  "Handling discrimination and harassment complaints before employment tribunals",
  "Negotiating settlement agreements and compromise agreements",
  "Advising on TUPE (Transfer of Undertakings) obligations during business transfers",
  "Drafting non-compete, non-solicitation, and garden leave provisions",
  "Conducting workplace investigations into misconduct and grievance matters",
  "Advising on minimum wage compliance and working time regulations",
  "Representing clients in whistleblower retaliation claims",
  "Advising on data protection obligations in the employment context",
  "Structuring executive compensation, bonus, and equity incentive plans",
];

const relatedAreas = [
  {
    id: "corporate",
    title: "Corporate & Commercial Law",
    description: "Business formation, contracts, and commercial transactions.",
    href: "/practice-areas/corporate-commercial-law",
  },
  {
    id: "litigation",
    title: "Civil & Criminal Litigation",
    description: "Vigorous court representation across all levels of the judiciary.",
    href: "/practice-areas/civil-criminal-litigation",
  },
  {
    id: "mediation",
    title: "Mediation & Arbitration",
    description: "Efficient dispute resolution outside the courtroom.",
    href: "/practice-areas/mediation-arbitration",
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
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function EmploymentLawPage() {
  const t = useTranslations();

  return (
    <main className="bg-white min-h-screen">
      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)] via-[#0d2a5e] to-[#0A1F44]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-[var(--brand-accent)]/30" />
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--brand-accent)]/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/[0.02] blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={heroChild}>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-6 hover:text-[var(--brand-accent)]/80 transition-colors"
              >
                <span>←</span> Practice Areas
              </Link>
            </motion.div>

            <motion.div variants={heroChild}>
              <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-accent)]/15 text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-5">
                {heroData.eyebrow}
              </span>
            </motion.div>

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
                Schedule a Consultation <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+233300000000"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 text-white font-body font-medium text-sm rounded hover:border-white/50 hover:bg-white/5 transition-all duration-200"
              >
                <Phone size={16} /> Call Us Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Overview ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                  Practice Overview
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-6">
                  Comprehensive Employment Law Counsel
                </h2>
                <div className="w-12 h-0.5 bg-[var(--brand-accent)] mb-8" />
                <div className="space-y-4">
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
                <div className="absolute -inset-4 bg-[var(--brand-muted)] rounded-2xl" aria-hidden="true" />
                <img
                  src={heroData.image}
                  alt="Employment law attorneys at MIT Legal Consultants"
                  className="relative rounded-xl w-full object-cover aspect-[4/3] shadow-[0_4px_24px_rgba(10,31,68,0.12)] border border-[var(--brand-border)]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute -bottom-5 -left-5 bg-[var(--brand-primary)] text-white rounded-xl px-6 py-4 shadow-lg">
                  <p className="font-heading text-2xl font-bold text-[var(--brand-accent)]">10+</p>
                  <p className="font-body text-xs text-white/70 mt-0.5">Years of Employment Law Practice</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. Services Grid ─────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-3">
                Areas of Expertise
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight">
                Our Employment Law Services
              </h2>
              <div className="w-12 h-0.5 bg-[var(--brand-accent)] mx-auto mt-5" />
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 border border-[var(--brand-border)] shadow-[0_1px_3px_rgba(10,31,68,0.06),0_8px_24px_-8px_rgba(10,31,68,0.08)] hover:shadow-[0_4px_12px_rgba(10,31,68,0.10),0_20px_48px_-12px_rgba(10,31,68,0.18)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center text-[var(--brand-primary)] mb-4">
                  {service.icon}
                </div>
                <h3 className="font-heading text-base font-semibold text-[var(--brand-primary)] mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. Typical Matters ───────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                  Typical Matters
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-4">
                  Legal Matters We Handle
                </h2>
                <div className="w-12 h-0.5 bg-[var(--brand-accent)] mb-8" />
                <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed mb-8">
                  Our employment law team handles a broad range of matters for both employers and employees, from day-to-day HR advisory to complex tribunal litigation.
                </p>
                <ul className="space-y-3">
                  {typicalMatters.map((matter, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-[var(--brand-foreground)] leading-relaxed">{matter}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="bg-[var(--brand-primary)] rounded-2xl p-8 text-white">
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  Need Employment Law Advice?
                </h3>
                <p className="font-body text-white/70 text-sm leading-relaxed mb-8">
                  Whether you are an employer managing workforce challenges or an employee facing a workplace dispute, our team is ready to provide confidential, expert guidance.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--brand-accent)]/15 flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-white/50 uppercase tracking-wider">Phone</p>
                      <a href="tel:+233300000000" className="font-body text-sm text-white hover:text-[var(--brand-accent)] transition-colors">
                        +233 (0) 30 000 0000
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--brand-accent)]/15 flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-white/50 uppercase tracking-wider">Email</p>
                      <a href="mailto:info@mitlegal.com" className="font-body text-sm text-white hover:text-[var(--brand-accent)] transition-colors">
                        info@mitlegal.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--brand-accent)]/15 flex items-center justify-center flex-shrink-0">
                      <Clock size={16} className="text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-white/50 uppercase tracking-wider">Hours</p>
                      <p className="font-body text-sm text-white">Monday – Friday, 8:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
                >
                  Schedule a Consultation <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. Related Practice Areas ────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-3">
                Related Services
              </span>
              <h2 className="font-heading text-3xl font-bold text-[var(--brand-primary)]">
                Explore Related Practice Areas
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {relatedAreas.map((area, i) => (
              <Reveal key={area.id} delay={i * 0.1}>
                <Link
                  href={area.href}
                  className="group block bg-white rounded-xl p-6 border border-[var(--brand-border)] shadow-[0_1px_3px_rgba(10,31,68,0.06)] hover:shadow-[0_4px_20px_rgba(10,31,68,0.12)] hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-2 group-hover:text-[var(--brand-accent)] transition-colors">
                    {area.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-wider">
                    Learn More <ArrowRight size={12} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA Banner ────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--brand-primary)]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--brand-accent)]/15 text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-6">
              Get Expert Advice
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Facing a Workplace Legal Challenge?
            </h2>
            <p className="font-body text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Our employment law specialists are ready to provide confidential, strategic advice tailored to your specific situation. Contact MIT Legal Consultants today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
              >
                Request a Consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-body font-medium text-sm rounded hover:border-white/50 hover:bg-white/5 transition-all duration-200"
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
