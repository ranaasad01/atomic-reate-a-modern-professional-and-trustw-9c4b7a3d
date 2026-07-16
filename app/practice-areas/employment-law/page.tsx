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
      "Advising and representing employees who have made protected disclosures, and helping employers establish robust whistleblowing frameworks that comply with statutory obligations.",
  },
  {
    id: "investigations",
    icon: <Users size={22} />,
    title: "Workplace Investigations",
    description:
      "Conducting independent, thorough investigations into allegations of misconduct, harassment, fraud, or policy violations, with detailed findings reports and recommended remedial actions.",
  },
];

const typicalMatters = [
  "Drafting bespoke employment contracts and executive service agreements",
  "Advising on lawful termination procedures and redundancy processes",
  "Representing employees in unfair and wrongful dismissal tribunal claims",
  "Defending employers against discrimination and harassment complaints",
  "Advising on collective bargaining agreements and trade union relations",
  "Conducting workplace investigations into misconduct and grievances",
  "Advising on TUPE transfers and employment implications of business sales",
  "Negotiating settlement agreements and compromise agreements",
  "Advising on minimum wage compliance and working time regulations",
  "Representing clients in appeals against employment tribunal decisions",
  "Advising on data protection obligations in the employment context",
  "Drafting and reviewing non-compete and non-solicitation clauses",
];

const statsData = [
  { id: "s1", icon: Award, value: "500+", label: "Employment Matters Handled" },
  { id: "s2", icon: CheckCircle, value: "95%", label: "Favourable Outcomes" },
  { id: "s3", icon: Clock, value: "48hrs", label: "Average Initial Response" },
  { id: "s4", icon: Users, value: "Both", label: "Employers & Employees" },
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
    description: "Efficient, confidential dispute resolution outside the courtroom.",
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
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function EmploymentLawPage() {
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            className="max-w-3xl"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Breadcrumb */}
            <motion.nav
              variants={heroChild}
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-white/50 text-xs font-body mb-6"
            >
              <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
              <ChevronRightIcon />
              <Link href="/practice-areas" className="hover:text-white/80 transition-colors">Practice Areas</Link>
              <ChevronRightIcon />
              <span className="text-[var(--brand-accent)]">{heroData.title}</span>
            </motion.nav>

            {/* Eyebrow */}
            <motion.p
              variants={heroChild}
              className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            >
              {heroData.eyebrow}
            </motion.p>

            {/* Title */}
            <motion.h1
              variants={heroChild}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              {heroData.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={heroChild}
              className="font-body text-white/70 text-lg leading-relaxed max-w-2xl mb-10"
            >
              {heroData.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={heroChild}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/30 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                All Practice Areas
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Stats Bar ─────────────────────────────────────────────────── */}
      <section className="bg-[var(--brand-primary)]/95 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map((stat) => (
              <div key={stat.id} className="text-center">
                <p className="font-heading text-3xl font-bold text-[var(--brand-accent)] mb-1">{stat.value}</p>
                <p className="font-body text-white/60 text-xs uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Overview ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                  Overview
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-6">
                  Comprehensive Employment Law Counsel
                </h2>
                <div className="space-y-4">
                  {overviewParagraphs.map((para, idx) => (
                    <p key={idx} className="font-body text-[var(--brand-muted-foreground)] leading-relaxed">
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
                    alt="Employment Law — MIT Legal Consultants"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-[var(--brand-primary)]/10" />
                </div>
                {/* Accent card */}
                <div className="absolute -bottom-6 -left-6 bg-[var(--brand-accent)] text-[var(--brand-primary)] rounded-xl p-5 shadow-xl">
                  <p className="font-heading text-2xl font-bold">7+</p>
                  <p className="font-body text-xs font-semibold uppercase tracking-wider mt-0.5">Years Specialising</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. Services ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Our Services
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight">
                Areas of Employment Law Expertise
              </h2>
            </div>
          </Reveal>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm border border-[var(--brand-border)] hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center text-[var(--brand-primary)] mb-4">
                  {service.icon}
                </div>
                <h3 className="font-heading text-base font-semibold text-[var(--brand-primary)] mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="font-body text-[var(--brand-muted-foreground)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. Typical Matters ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                  Typical Matters
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-4">
                  Employment Matters We Handle
                </h2>
                <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed mb-8">
                  MIT Legal Consultants handles the full range of employment law matters for both employers and employees, from day-to-day HR advisory to complex multi-party tribunal proceedings.
                </p>
                <ul className="space-y-3">
                  {typicalMatters.map((matter) => (
                    <li key={matter} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />
                      <span className="font-body text-[var(--brand-foreground)] text-sm leading-relaxed">{matter}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="bg-[var(--brand-primary)] rounded-2xl p-8 text-white">
                <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                  Our Approach
                </p>
                <h3 className="font-heading text-2xl font-bold mb-6 leading-tight">
                  Practical, Results-Driven Employment Advice
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      id: "a1",
                      title: "Early Assessment",
                      body: "We assess the merits and risks of your matter at the outset, giving you a clear picture of your legal position and realistic expectations.",
                    },
                    {
                      id: "a2",
                      title: "Strategic Counsel",
                      body: "We develop a tailored strategy — whether that means negotiating a settlement, pursuing tribunal proceedings, or implementing preventive HR policies.",
                    },
                    {
                      id: "a3",
                      title: "Commercial Awareness",
                      body: "We understand that employment matters have business implications. Our advice balances legal compliance with commercial pragmatism.",
                    },
                    {
                      id: "a4",
                      title: "Ongoing Support",
                      body: "Beyond individual matters, we serve as trusted advisors to businesses, providing proactive guidance to prevent disputes before they arise.",
                    },
                  ].map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-[var(--brand-accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle size={14} className="text-[var(--brand-accent)]" />
                      </div>
                      <div>
                        <p className="font-heading text-base font-semibold text-white mb-1">{item.title}</p>
                        <p className="font-body text-white/70 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6. Related Practice Areas ────────────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Related Services
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight">
                Related Practice Areas
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {relatedAreas.map((area) => (
              <Reveal key={area.id}>
                <Link
                  href={area.href}
                  className="group block bg-white rounded-xl p-6 border border-[var(--brand-border)] hover:border-[var(--brand-primary)]/30 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-2 group-hover:text-[var(--brand-accent)] transition-colors">
                    {area.title}
                  </h3>
                  <p className="font-body text-[var(--brand-muted-foreground)] text-sm leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[var(--brand-accent)] text-sm font-body font-semibold">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Get Expert Advice
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Speak with an Employment Law Specialist
            </h2>
            <p className="font-body text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you are an employer managing workforce challenges or an employee facing a workplace dispute, MIT Legal Consultants is here to help. Contact us today for a confidential consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+233300000000"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/30 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                <Phone size={16} />
                Call Us Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}

// ─── Inline SVG helper ───────────────────────────────────────────────────────
function ChevronRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
