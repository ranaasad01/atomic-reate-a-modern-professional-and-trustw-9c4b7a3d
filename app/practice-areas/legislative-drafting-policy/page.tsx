"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { FileText, CheckCircle, ArrowRight, BookOpen, Scale, Building2, Globe, Users, ChevronRight, Phone, Mail } from 'lucide-react';
import { BRAND_NAME, contactInfo } from "@/lib/data";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";
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
    id: "s1",
    icon: FileText,
    title: "Primary Legislation Drafting",
    description:
      "Crafting clear, enforceable Acts of Parliament and primary statutes for governments, ministries, and legislative bodies. We ensure every provision is legally sound, constitutionally compliant, and practically implementable.",
  },
  {
    id: "s2",
    icon: BookOpen,
    title: "Subsidiary Legislation & Regulations",
    description:
      "Drafting statutory instruments, executive orders, ministerial regulations, and by-laws that give operational effect to primary legislation while maintaining legal coherence across the regulatory framework.",
  },
  {
    id: "s3",
    icon: Scale,
    title: "Constitutional Law & Reform",
    description:
      "Advising on constitutional amendments, bill of rights provisions, and structural governance reforms. We bring comparative constitutional analysis and deep expertise in democratic governance principles.",
  },
  {
    id: "s4",
    icon: Building2,
    title: "Regulatory Framework Design",
    description:
      "Designing comprehensive regulatory architectures for emerging sectors including fintech, telecommunications, energy, and healthcare. We align regulatory design with international best practices and local context.",
  },
  {
    id: "s5",
    icon: Globe,
    title: "Public Policy Analysis & Advocacy",
    description:
      "Evidence-based policy research, stakeholder consultation frameworks, and policy impact assessments. We translate complex legal and socioeconomic data into actionable policy recommendations.",
  },
  {
    id: "s6",
    icon: Users,
    title: "Institutional Capacity Building",
    description:
      "Training legislative drafters, parliamentary counsel, and policy officers. We deliver workshops, toolkits, and mentorship programs that strengthen institutional drafting capacity for the long term.",
  },
];

const typicalMatters = [
  "Drafting national investment promotion legislation for a West African government",
  "Reviewing and harmonizing a country's labor law framework with ILO conventions",
  "Preparing subsidiary regulations for a newly enacted data protection act",
  "Advising a ministry on constitutional compliance of proposed healthcare reform bills",
  "Developing a comprehensive regulatory framework for the renewable energy sector",
  "Drafting anti-corruption legislation aligned with the UN Convention Against Corruption",
  "Preparing model by-laws for municipal and local government authorities",
  "Conducting legislative gap analysis for a regional economic community",
  "Drafting public procurement regulations and standard bidding documents",
  "Advising on the legal framework for a national digital identity program",
];

const whyChoosePoints = [
  {
    id: "w1",
    title: "Decades of Legislative Experience",
    body: "Our attorneys have served as parliamentary counsel, government legal advisors, and policy consultants across multiple jurisdictions in Africa and beyond.",
  },
  {
    id: "w2",
    title: "Comparative Law Expertise",
    body: "We draw on common law, civil law, and customary law traditions to craft legislation that is contextually appropriate and internationally benchmarked.",
  },
  {
    id: "w3",
    title: "Stakeholder-Centered Process",
    body: "We facilitate inclusive consultation processes, ensuring that legislation reflects the needs of affected communities, industry, and civil society.",
  },
  {
    id: "w4",
    title: "Plain Language Commitment",
    body: "We draft legislation that is accessible and unambiguous, reducing interpretive disputes and improving compliance across all levels of government and society.",
  },
];

const stats = [
  { id: "st1", value: "120+", label: "Legislative Instruments Drafted" },
  { id: "st2", value: "18", label: "Governments Advised" },
  { id: "st3", value: "30+", label: "Years Combined Experience" },
  { id: "st4", value: "12", label: "Countries Served" },
];

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Legislative Drafting & Policy", href: "/practice-areas/legislative-drafting-policy" },
];

export default function LegislativeDraftingPolicyPage() {
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
              "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,1) 40px,rgba(255,255,255,1) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,1) 40px,rgba(255,255,255,1) 41px)",
          }}
          aria-hidden="true"
        />
        {/* Radial glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, var(--brand-accent), transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
          {/* Breadcrumb */}
          <motion.nav
            aria-label={t("breadcrumb.ariaLabel")}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-white/50 text-xs font-body mb-8 flex-wrap"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {i > 0 && <ChevronRight size={12} className="text-white/30" />}
                {i < breadcrumbs.length - 1 ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-[var(--brand-accent)] transition-colors duration-200"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[var(--brand-accent)]">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>

          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={heroChild} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)]/20 border border-[var(--brand-accent)]/30 flex items-center justify-center">
                <FileText size={24} className="text-[var(--brand-accent)]" />
              </div>
              <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest">
                {t("legislativePage.practiceAreaLabel")}
              </span>
            </motion.div>

            <motion.h1
              variants={heroChild}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance mb-6"
            >
              {t("legislativePage.heroTitle")}
            </motion.h1>

            <motion.p
              variants={heroChild}
              className="font-body text-lg text-white/70 leading-relaxed mb-10 max-w-2xl text-pretty"
            >
              {t("legislativePage.heroSubtitle")}
            </motion.p>

            <motion.div variants={heroChild} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 shadow-[0_4px_20px_rgba(201,168,76,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                {t("legislativePage.heroCta")}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {t("legislativePage.heroSecondary")}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <Reveal>
        <section className="bg-[var(--brand-primary)]/5 border-y border-[var(--brand-primary)]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                  className="text-center"
                >
                  <p className="font-heading text-3xl lg:text-4xl font-bold text-[var(--brand-primary)] leading-none mb-2">
                    {stat.value}
                  </p>
                  <p className="font-body text-sm text-[var(--brand-primary)]/60">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Overview ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                {t("legislativePage.overviewLabel")}
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                {t("legislativePage.overviewTitle")}
              </h2>
              <div className="space-y-4 font-body text-[var(--brand-primary)]/70 leading-relaxed">
                <p>{t("legislativePage.overviewP1")}</p>
                <p>{t("legislativePage.overviewP2")}</p>
                <p>{t("legislativePage.overviewP3")}</p>
              </div>
            </motion.div>
          </Reveal>

          <Reveal delay={0.15}>
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,31,68,0.15)]">
                <img
                  src="https://www.espadvisor.com/wp-content/uploads/2026/05/Copy-of--1024x576.jpg"
                  alt="Legislative drafting and policy advisory session"
                  className="w-full h-80 lg:h-96 object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add(
                        "bg-[var(--brand-primary)]",
                        "flex",
                        "items-center",
                        "justify-center",
                        "h-80"
                      );
                      const placeholder = document.createElement("div");
                      placeholder.className = "text-center p-8";
                      placeholder.innerHTML = `<div class="w-16 h-16 rounded-full bg-[var(--brand-accent)]/20 flex items-center justify-center mx-auto mb-4"><svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='var(--brand-accent)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'/><polyline points='14 2 14 8 20 8'/><line x1='16' y1='13' x2='8' y2='13'/><line x1='16' y1='17' x2='8' y2='17'/><polyline points='10 9 9 9 8 9'/></svg></div>`;
                      parent.appendChild(placeholder);
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/40 to-transparent" />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-[0_4px_24px_rgba(10,31,68,0.15)] border border-[var(--brand-primary)]/8 max-w-[200px]">
                <p className="font-heading text-2xl font-bold text-[var(--brand-primary)] mb-1">
                  120+
                </p>
                <p className="font-body text-xs text-[var(--brand-primary)]/60 leading-snug">
                  {t("legislativePage.floatingCardLabel")}
                </p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-[var(--brand-primary)]/3 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                {t("legislativePage.servicesLabel")}
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-4">
                {t("legislativePage.servicesTitle")}
              </h2>
              <p className="font-body text-[var(--brand-primary)]/60 leading-relaxed">
                {t("legislativePage.servicesSubtitle")}
              </p>
            </div>
          </Reveal>

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
                  variants={fadeInUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-7 border border-[var(--brand-primary)]/8 shadow-[0_1px_2px_rgba(10,31,68,0.04),0_8px_24px_-8px_rgba(10,31,68,0.10)] hover:shadow-[0_4px_32px_rgba(10,31,68,0.14)] transition-shadow duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[var(--brand-primary)]/8 group-hover:bg-[var(--brand-accent)]/15 flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon size={22} className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--brand-primary)]/65 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Typical Matters ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-5 gap-14 items-start">
          <Reveal className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                {t("legislativePage.mattersLabel")}
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                {t("legislativePage.mattersTitle")}
              </h2>
              <p className="font-body text-[var(--brand-primary)]/65 leading-relaxed mb-8">
                {t("legislativePage.mattersBody")}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
              >
                {t("legislativePage.mattersCta")}
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          <div className="lg:col-span-3">
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-3"
            >
              {typicalMatters.map((matter, i) => (
                <motion.li
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-4 bg-white border border-[var(--brand-primary)]/8 rounded-xl px-5 py-4 shadow-[0_1px_4px_rgba(10,31,68,0.05)] hover:border-[var(--brand-accent)]/40 hover:shadow-[0_4px_16px_rgba(10,31,68,0.08)] transition-all duration-200 group"
                >
                  <CheckCircle
                    size={18}
                    className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200"
                  />
                  <span className="font-body text-sm text-[var(--brand-primary)]/75 leading-relaxed">
                    {matter}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-[var(--brand-primary)] py-20 lg:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,transparent,transparent 30px,rgba(255,255,255,1) 30px,rgba(255,255,255,1) 31px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                {t("legislativePage.whyLabel")}
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight text-balance mb-4">
                {t("legislativePage.whyTitle")}
              </h2>
              <p className="font-body text-white/60 leading-relaxed">
                {t("legislativePage.whySubtitle")}
              </p>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-2 gap-6"
          >
            {whyChoosePoints.map((point, i) => (
              <motion.div
                key={point.id}
                variants={fadeInUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--brand-accent)]/20 border border-[var(--brand-accent)]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-heading text-[var(--brand-accent)] text-sm font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-2 leading-snug">
                      {point.title}
                    </h3>
                    <p className="font-body text-sm text-white/60 leading-relaxed">
                      {point.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <Reveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="relative bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary)]/90 rounded-3xl overflow-hidden px-8 py-14 lg:px-16 lg:py-16 text-center shadow-[0_8px_48px_rgba(10,31,68,0.25)]">
            <div
              className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, var(--brand-accent), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-[var(--brand-accent)]/20 border border-[var(--brand-accent)]/30 flex items-center justify-center mx-auto mb-6">
                <FileText size={28} className="text-[var(--brand-accent)]" />
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight text-balance mb-4 max-w-2xl mx-auto">
                {t("legislativePage.ctaTitle")}
              </h2>
              <p className="font-body text-white/65 leading-relaxed mb-10 max-w-xl mx-auto">
                {t("legislativePage.ctaBody")}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-xl hover:bg-[var(--brand-accent)]/90 transition-all duration-200 shadow-[0_4px_20px_rgba(201,168,76,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
                >
                  {t("legislativePage.ctaButton")}
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={`tel:${contactInfo?.phone ?? ""}`}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-body font-medium text-sm rounded-xl hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <Phone size={15} />
                  {t("legislativePage.ctaCallButton")}
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Related Practice Areas ── */}
      <Reveal>
        <section className="border-t border-[var(--brand-primary)]/10 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h2 className="font-heading text-xl font-semibold text-[var(--brand-primary)]">
                {t("legislativePage.relatedTitle")}
              </h2>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-1.5 text-[var(--brand-accent)] font-body font-semibold text-sm hover:gap-2.5 transition-all duration-200"
              >
                {t("legislativePage.relatedViewAll")}
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Public International Law",
                  href: "/practice-areas/public-international-law",
                  desc: "Cross-border legal expertise covering treaties, international trade, and diplomatic matters.",
                },
                {
                  title: "Corporate & Commercial Law",
                  href: "/practice-areas/corporate-commercial-law",
                  desc: "Comprehensive legal support for business formation, contracts, and commercial transactions.",
                },
                {
                  title: "Employment Law",
                  href: "/practice-areas/employment-law",
                  desc: "Protecting the rights of employers and employees in workplace disputes and compliance.",
                },
              ].map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="group flex items-start gap-4 bg-white border border-[var(--brand-primary)]/8 rounded-xl p-5 hover:border-[var(--brand-accent)]/40 hover:shadow-[0_4px_20px_rgba(10,31,68,0.08)] transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-[var(--brand-primary)]/6 group-hover:bg-[var(--brand-accent)]/15 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                    <FileText size={16} className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-[var(--brand-primary)] mb-1 group-hover:text-[var(--brand-accent)] transition-colors duration-200">
                      {area.title}
                    </p>
                    <p className="font-body text-xs text-[var(--brand-primary)]/55 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}