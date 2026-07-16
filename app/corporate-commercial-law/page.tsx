"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Briefcase, CheckCircle, ArrowRight, Building2, FileSignature, TrendingUp, Shield, Users, Globe, ChevronRight } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight, scaleIn } from "@/lib/motion";
import { useTranslations } from "next-intl";

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

const services = [
  {
    id: "business-formation",
    icon: Building2,
    title: "Business Formation & Structuring",
    description:
      "We advise on the optimal legal structure for your enterprise — whether a limited liability company, partnership, corporation, or joint venture — ensuring compliance with local and international regulations from day one.",
    matters: [
      "Company incorporation and registration",
      "Shareholder agreements and governance frameworks",
      "Joint venture structuring",
      "Franchise and licensing arrangements",
    ],
  },
  {
    id: "mergers-acquisitions",
    icon: TrendingUp,
    title: "Mergers & Acquisitions",
    description:
      "Our M&A team guides clients through every phase of a transaction — from initial due diligence and valuation to negotiation, regulatory clearance, and post-merger integration.",
    matters: [
      "Buy-side and sell-side advisory",
      "Due diligence coordination",
      "Transaction structuring and tax optimization",
      "Regulatory filings and competition clearance",
    ],
  },
  {
    id: "contracts",
    icon: FileSignature,
    title: "Commercial Contracts & Agreements",
    description:
      "We draft, review, and negotiate a full spectrum of commercial agreements, protecting your interests while enabling business relationships to thrive.",
    matters: [
      "Supply and distribution agreements",
      "Service level agreements (SLAs)",
      "Technology and IP licensing contracts",
      "Non-disclosure and confidentiality agreements",
    ],
  },
  {
    id: "corporate-governance",
    icon: Shield,
    title: "Corporate Governance & Compliance",
    description:
      "Sound governance is the foundation of sustainable business. We help boards, executives, and shareholders establish robust governance structures and maintain regulatory compliance.",
    matters: [
      "Board composition and committee charters",
      "Regulatory compliance audits",
      "Anti-bribery and anti-corruption frameworks",
      "ESG policy development",
    ],
  },
  {
    id: "banking-finance",
    icon: Globe,
    title: "Banking, Finance & Capital Markets",
    description:
      "From project finance to securities offerings, our team advises lenders, borrowers, and investors on complex financial transactions across domestic and cross-border markets.",
    matters: [
      "Loan facility agreements and syndicated lending",
      "Bond issuances and capital market transactions",
      "Project and infrastructure finance",
      "Debt restructuring and refinancing",
    ],
  },
  {
    id: "employment-corporate",
    icon: Users,
    title: "Corporate Employment & Executive Matters",
    description:
      "We advise companies on senior executive appointments, compensation structures, and workforce matters that intersect with corporate strategy.",
    matters: [
      "Executive service agreements",
      "Equity and incentive compensation plans",
      "TUPE and business transfer obligations",
      "Workforce restructuring in M&A contexts",
    ],
  },
];

const whyPoints = [
  {
    id: "experience",
    title: "20+ Years of Corporate Practice",
    body: "Our partners have advised multinationals, government-linked entities, and fast-growing SMEs across Africa, Europe, and beyond.",
  },
  {
    id: "multijurisdictional",
    title: "Multi-Jurisdictional Reach",
    body: "We maintain active relationships with correspondent firms in over 30 jurisdictions, enabling seamless cross-border transaction support.",
  },
  {
    id: "commercial",
    title: "Commercially Minded Counsel",
    body: "We understand that legal advice must serve business objectives. Our recommendations are practical, proportionate, and commercially astute.",
  },
  {
    id: "responsive",
    title: "Responsive & Accessible",
    body: "Transactions move fast. Our team is available when you need us, providing timely advice without compromising on quality.",
  },
];

const stats = [
  { id: "transactions", value: "350+", label: "Transactions Closed" },
  { id: "clients", value: "180+", label: "Corporate Clients Served" },
  { id: "jurisdictions", value: "30+", label: "Jurisdictions Covered" },
  { id: "years", value: "20+", label: "Years of Practice" },
];

const typicalMatters = [
  "Acquisition of a majority stake in a regional telecommunications company",
  "Drafting and negotiating a multi-party joint venture agreement for a real estate development project",
  "Advising a fintech startup on its Series B funding round and investor agreements",
  "Structuring a cross-border distribution network across five African markets",
  "Conducting legal due diligence for a private equity fund's portfolio acquisition",
  "Advising a listed company on board restructuring and shareholder dispute resolution",
  "Negotiating a long-term supply agreement between a manufacturer and a government entity",
  "Assisting a foreign investor with market entry structuring and regulatory approvals",
];

export default function CorporateCommercialLawPage() {
  const t = useTranslations();

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 70% 50%, var(--brand-accent) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255,255,255,0.3) 79px, rgba(255,255,255,0.3) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(255,255,255,0.3) 79px, rgba(255,255,255,0.3) 80px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={heroChild} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/20 border border-[var(--brand-accent)]/30 flex items-center justify-center">
                <Briefcase size={20} className="text-[var(--brand-accent)]" />
              </div>
              <span className="text-[var(--brand-accent)] text-sm font-body font-semibold uppercase tracking-widest">
                {t("corporateCommercial.hero.eyebrow")}
              </span>
            </motion.div>
            <motion.h1
              variants={heroChild}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance mb-6"
            >
              {t("corporateCommercial.hero.title")}
            </motion.h1>
            <motion.p
              variants={heroChild}
              className="font-body text-white/70 text-lg leading-relaxed mb-10 max-w-2xl text-pretty"
            >
              {t("corporateCommercial.hero.subtitle")}
            </motion.p>
            <motion.div variants={heroChild} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)] shadow-[0_4px_16px_rgba(201,168,76,0.35)]"
              >
                {t("corporateCommercial.hero.cta")}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                {t("corporateCommercial.hero.secondaryCta")}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <Reveal>
        <section className="bg-[var(--brand-primary)]/5 border-b border-[var(--brand-primary)]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <p className="font-heading text-3xl lg:text-4xl font-bold text-[var(--brand-primary)] leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="font-body text-sm text-[var(--brand-primary)]/60 font-medium">
                    {t(`corporateCommercial.stats.${stat.id}`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* Overview */}
      <Reveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-bold uppercase tracking-widest mb-4">
                {t("corporateCommercial.overview.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                {t("corporateCommercial.overview.title")}
              </h2>
              <p className="font-body text-[var(--brand-primary)]/70 text-base leading-relaxed mb-5 text-pretty">
                {t("corporateCommercial.overview.body1")}
              </p>
              <p className="font-body text-[var(--brand-primary)]/70 text-base leading-relaxed mb-8 text-pretty">
                {t("corporateCommercial.overview.body2")}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-body font-semibold text-sm hover:text-[var(--brand-accent)] transition-colors duration-200 group"
              >
                {t("corporateCommercial.overview.link")}
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
            </motion.div>
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,31,68,0.15)]">
                <img
                  src="https://www.mcneelylaw.com/wp-content/uploads/2023/09/AdobeStock_275650286-scaled.jpggeo.jpg"
                  alt={t("corporateCommercial.overview.imageAlt")}
                  className="w-full h-80 lg:h-96 object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add(
                        "bg-gradient-to-br",
                        "from-[var(--brand-primary)]",
                        "to-[var(--brand-primary)]/80",
                        "flex",
                        "items-center",
                        "justify-center",
                        "h-96"
                      );
                      const icon = document.createElement("div");
                      icon.innerHTML = `<svg width="64" height="64" fill="none" stroke="rgba(201,168,76,0.5)" stroke-width="1.5" viewBox="0 0 24 24"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`;
                      parent.appendChild(icon);
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/20 -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[var(--brand-primary)]/5 border border-[var(--brand-primary)]/10 -z-10" />
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* Services */}
      <Reveal>
        <section className="bg-[var(--brand-primary)]/3 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-bold uppercase tracking-widest mb-4">
                {t("corporateCommercial.services.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-4">
                {t("corporateCommercial.services.title")}
              </h2>
              <p className="font-body text-[var(--brand-primary)]/60 text-base leading-relaxed text-pretty">
                {t("corporateCommercial.services.subtitle")}
              </p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    variants={scaleIn}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="bg-white rounded-2xl p-7 shadow-[0_1px_3px_rgba(10,31,68,0.06),0_8px_24px_-8px_rgba(10,31,68,0.1)] border border-[var(--brand-primary)]/5 flex flex-col"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/20 flex items-center justify-center mb-5 flex-shrink-0">
                      <Icon size={20} className="text-[var(--brand-accent)]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[var(--brand-primary)] mb-3 leading-snug">
                      {t(`corporateCommercial.services.items.${service.id}.title`)}
                    </h3>
                    <p className="font-body text-sm text-[var(--brand-primary)]/60 leading-relaxed mb-5 flex-1">
                      {t(`corporateCommercial.services.items.${service.id}.description`)}
                    </p>
                    <ul className="space-y-2">
                      {service.matters.map((matter, mi) => (
                        <li key={mi} className="flex items-start gap-2">
                          <CheckCircle
                            size={14}
                            className="text-[var(--brand-accent)] mt-0.5 flex-shrink-0"
                          />
                          <span className="font-body text-xs text-[var(--brand-primary)]/70 leading-relaxed">
                            {t(`corporateCommercial.services.items.${service.id}.matters.${mi}`)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* Typical Matters */}
      <Reveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-bold uppercase tracking-widest mb-4">
                {t("corporateCommercial.matters.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-5">
                {t("corporateCommercial.matters.title")}
              </h2>
              <p className="font-body text-[var(--brand-primary)]/60 text-base leading-relaxed mb-8 text-pretty">
                {t("corporateCommercial.matters.body")}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
              >
                {t("corporateCommercial.matters.cta")}
                <ArrowRight size={15} />
              </Link>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="lg:col-span-3 space-y-3"
            >
              {typicalMatters.map((matter, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[var(--brand-primary)]/3 border border-[var(--brand-primary)]/8 hover:border-[var(--brand-accent)]/30 hover:bg-[var(--brand-accent)]/5 transition-all duration-200"
                >
                  <div className="w-6 h-6 rounded-full bg-[var(--brand-accent)]/15 border border-[var(--brand-accent)]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-body text-xs font-bold text-[var(--brand-accent)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="font-body text-sm text-[var(--brand-primary)]/80 leading-relaxed">
                    {t(`corporateCommercial.matters.items.${i}`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* Why Choose Us */}
      <Reveal>
        <section className="bg-[var(--brand-primary)] py-20 lg:py-28 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 30% 70%, var(--brand-accent) 0%, transparent 55%)",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-bold uppercase tracking-widest mb-4">
                {t("corporateCommercial.why.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight text-balance mb-4">
                {t("corporateCommercial.why.title")}
              </h2>
              <p className="font-body text-white/60 text-base leading-relaxed text-pretty">
                {t("corporateCommercial.why.subtitle")}
              </p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {whyPoints.map((point) => (
                <motion.div
                  key={point.id}
                  variants={fadeInUp}
                  className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-[var(--brand-accent)]/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[var(--brand-accent)]/20 border border-[var(--brand-accent)]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={16} className="text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-white mb-2 leading-snug">
                        {t(`corporateCommercial.why.points.${point.id}.title`)}
                      </h3>
                      <p className="font-body text-sm text-white/60 leading-relaxed">
                        {t(`corporateCommercial.why.points.${point.id}.body`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <Reveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="rounded-3xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary)]/90 p-10 lg:p-16 relative overflow-hidden shadow-[0_8px_48px_rgba(10,31,68,0.2)]">
            <div
              className="absolute top-0 right-0 w-96 h-96 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, var(--brand-accent) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-bold uppercase tracking-widest mb-4">
                  {t("corporateCommercial.cta.eyebrow")}
                </span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight text-balance mb-4">
                  {t("corporateCommercial.cta.title")}
                </h2>
                <p className="font-body text-white/65 text-base leading-relaxed text-pretty">
                  {t("corporateCommercial.cta.body")}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-xl hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)] shadow-[0_4px_20px_rgba(201,168,76,0.4)]"
                >
                  {t("corporateCommercial.cta.primaryButton")}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/practice-areas"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-body font-medium text-sm rounded-xl hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  {t("corporateCommercial.cta.secondaryButton")}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}