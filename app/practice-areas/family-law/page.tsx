"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Home, FileText, Shield, CheckCircle, ArrowRight, Scale, Users, Phone, Mail } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight, scaleIn } from "@/lib/motion";

export const metadata = {
  title: "Family Law | MIT Legal Consultants",
  description:
    "MIT Legal Consultants provides compassionate and strategic family law services including divorce, child custody, adoption, guardianship, prenuptial agreements, domestic violence protection, and inheritance disputes.",
};

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
    icon: Users,
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
      "Coordination with support services",
    ],
  },
  {
    id: "inheritance",
    icon: Home,
    title: "Inheritance & Estate Disputes",
    description:
      "Our team handles contested wills, intestate succession disputes, and estate administration conflicts with sensitivity and legal rigor, protecting your family's rightful interests.",
    matters: [
      "Contested wills and probate disputes",
      "Intestate succession claims",
      "Estate administration disputes",
      "Family provision claims",
      "Executor and trustee disputes",
    ],
  },
];

const typicalMatters = [
  "Divorce Proceedings",
  "Child Custody Disputes",
  "Child Support Orders",
  "Adoption Applications",
  "Guardianship Orders",
  "Prenuptial Agreements",
  "Domestic Violence Protection",
  "Inheritance Disputes",
  "Matrimonial Property Division",
  "Spousal Maintenance",
  "Parenting Plans",
  "Family Mediation",
];

const whyChooseItems = [
  "Confidential & Compassionate Counsel",
  "Experienced Family Law Attorneys",
  "Child-Focused Approach in Custody Matters",
  "Efficient Dispute Resolution Strategies",
  "Comprehensive Family Legal Services",
];

export default function FamilyLawPage() {
  return (
    <main className="overflow-x-hidden">
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--brand-primary)] pt-32 pb-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--brand-accent) 0, var(--brand-accent) 1px, transparent 0, transparent 50%)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-white/50 text-sm font-body mb-8"
          >
            <Link href="/" className="hover:text-[var(--brand-accent)] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/practice-areas" className="hover:text-[var(--brand-accent)] transition-colors">
              Practice Areas
            </Link>
            <span>/</span>
            <span className="text-[var(--brand-accent)]">Family Law</span>
          </motion.nav>

          {/* Gold accent line */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="w-16 h-1 bg-[var(--brand-accent)] rounded mb-6"
          />

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight"
          >
            Family Law
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="font-body text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed"
          >
            Compassionate, strategic legal support for families navigating life's most sensitive
            and complex personal matters — from divorce and custody to adoption and inheritance.
          </motion.p>
        </div>
      </section>

      {/* ─── OVERVIEW ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Left column */}
            <Reveal>
              <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="w-12 h-1 bg-[var(--brand-accent)] rounded mb-6" />
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] mb-6 leading-tight">
                  Protecting What Matters Most
                </h2>
                <div className="space-y-4 font-body text-[var(--brand-muted-foreground)] leading-relaxed">
                  <p>
                    Family legal matters are among the most emotionally charged and consequential issues a person
                    can face. At MIT Legal Consultants, our family law team combines deep legal expertise with
                    genuine compassion to guide you through divorce, child custody, adoption, and all other
                    family-related legal challenges.
                  </p>
                  <p>
                    We understand that every family is unique. Whether you are navigating a contested divorce,
                    seeking to protect your parental rights, formalizing a prenuptial agreement, or resolving an
                    inheritance dispute, our attorneys craft tailored strategies that prioritize your interests
                    and the wellbeing of your loved ones.
                  </p>
                  <p>
                    From domestic matters to cross-border family issues, we provide discreet, results-oriented
                    counsel that helps you move forward with confidence and clarity.
                  </p>
                </div>
              </motion.div>
            </Reveal>

            {/* Right column — Why Choose card */}
            <Reveal delay={0.15}>
              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[var(--brand-card)] border border-[var(--brand-border)] rounded-2xl p-8 shadow-lg"
              >
                <h3 className="font-heading text-xl font-bold text-[var(--brand-primary)] mb-6">
                  Why Choose Our Family Law Team
                </h3>
                <ul className="space-y-4">
                  {whyChooseItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5"
                      />
                      <span className="font-body text-[var(--brand-foreground)] text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-[var(--brand-border)]">
                  <p className="font-body text-sm text-[var(--brand-muted-foreground)] mb-4">
                    Ready to discuss your family law matter?
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[var(--brand-secondary)] transition-colors duration-200"
                  >
                    Schedule a Consultation
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ────────────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="w-12 h-1 bg-[var(--brand-accent)] rounded mx-auto mb-5" />
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] mb-4">
                Our Family Law Services
              </h2>
              <p className="font-body text-[var(--brand-muted-foreground)] max-w-2xl mx-auto leading-relaxed">
                We offer a full spectrum of family law services, providing expert guidance at every stage
                of your legal journey.
              </p>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={scaleIn}
                  className="bg-[var(--brand-card)] border border-[var(--brand-border)] rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center mb-5 flex-shrink-0">
                    <Icon size={24} className="text-[var(--brand-primary)]" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[var(--brand-primary)] mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <p className="font-body text-xs font-semibold text-[var(--brand-accent)] uppercase tracking-wider mb-3">
                      Typical Matters
                    </p>
                    <ul className="space-y-2">
                      {service.matters.map((matter) => (
                        <li key={matter} className="flex items-start gap-2">
                          <CheckCircle
                            size={14}
                            className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5"
                          />
                          <span className="font-body text-xs text-[var(--brand-foreground)] leading-relaxed">
                            {matter}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── TYPICAL MATTERS TAGS ─────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <div className="w-12 h-1 bg-[var(--brand-accent)] rounded mx-auto mb-5" />
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] mb-4">
                Typical Matters We Handle
              </h2>
              <p className="font-body text-[var(--brand-muted-foreground)] max-w-xl mx-auto">
                Our family law practice covers a broad range of personal and domestic legal matters.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {typicalMatters.map((matter) => (
                <span
                  key={matter}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--brand-card)] border border-[var(--brand-border)] rounded-full font-body text-sm text-[var(--brand-foreground)] shadow-sm hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)] transition-colors duration-200"
                >
                  <CheckCircle size={14} className="text-[var(--brand-accent)]" />
                  {matter}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="w-12 h-1 bg-[var(--brand-accent)] rounded mx-auto mb-6" />
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-5">
              Speak With a Family Law Attorney
            </h2>
            <p className="font-body text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Family matters require sensitive, expert legal guidance. Contact us today for a confidential
              consultation with one of our experienced family law attorneys.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 shadow-lg"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-body font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                View All Practice Areas
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Contact quick links */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 text-sm font-body">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 hover:text-[var(--brand-accent)] transition-colors"
              >
                <Phone size={16} />
                +1 (234) 567-890
              </a>
              <a
                href="mailto:info@mitlegal.com"
                className="flex items-center gap-2 hover:text-[var(--brand-accent)] transition-colors"
              >
                <Mail size={16} />
                info@mitlegal.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
