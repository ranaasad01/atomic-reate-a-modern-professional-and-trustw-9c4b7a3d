"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Shield, Star, Eye, Globe, Quote, ArrowRight, CheckCircle } from 'lucide-react';
import { BRAND_NAME } from "@/lib/data";
import { fadeInUp, fadeIn, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";
import { useTranslations } from "next-intl";

const timelineEvents = [
  { year: "2004", title: "Firm Founded", description: "Established in Accra with a founding team of three senior attorneys committed to excellence in corporate law." },
  { year: "2009", title: "International Expansion", description: "Opened cross-border practice covering ECOWAS jurisdictions and international arbitration mandates." },
  { year: "2014", title: "Legislative Practice Launch", description: "Launched specialized legislative drafting and public policy advisory services for government clients." },
  { year: "2018", title: "Regional Recognition", description: "Recognized among West Africa's leading law firms by Chambers & Partners for corporate and commercial practice." },
  { year: "2022", title: "Digital Transformation", description: "Invested in legal technology infrastructure to deliver faster, more transparent client service." },
  { year: "2024", title: "20 Years of Trusted Counsel", description: "Celebrating two decades of proven results across seven practice areas and three continents." },
];

const values = [
  {
    id: "integrity",
    icon: Shield,
    title: "Integrity",
    description: "We hold ourselves to the highest ethical standards in every engagement. Our clients trust us with their most sensitive matters, and we honor that trust unconditionally.",
  },
  {
    id: "excellence",
    icon: Star,
    title: "Excellence",
    description: "Mediocrity has no place in our practice. We pursue the best possible outcome for every client through rigorous preparation, deep expertise, and relentless attention to detail.",
  },
  {
    id: "discretion",
    icon: Eye,
    title: "Discretion",
    description: "Confidentiality is the cornerstone of the attorney-client relationship. We safeguard our clients' information with the utmost care and professionalism at all times.",
  },
  {
    id: "global-perspective",
    icon: Globe,
    title: "Global Perspective",
    description: "Operating at the intersection of local expertise and international law, we bring a broad, cross-border perspective that gives our clients a decisive advantage.",
  },
];

const stats = [
  { value: "20+", label: "Years of Practice" },
  { value: "500+", label: "Matters Resolved" },
  { value: "7", label: "Practice Areas" },
  { value: "3", label: "Continents Served" },
];

const goldUnderlineVariants: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.4 },
  },
};

const heroTextVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function AboutPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-white">
      {/* ── 1. Hero Banner ── */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden">
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, var(--brand-accent) 0%, transparent 60%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeIn}
              className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-[0.2em] mb-5"
            >
              {t("about.hero.eyebrow")}
            </motion.p>
            <motion.h1
              variants={heroTextVariants}
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight text-balance mb-4"
            >
              {t("about.hero.title")}
            </motion.h1>
            {/* Gold underline accent */}
            <div className="relative h-1 w-24 mb-8 overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-white/20 rounded-full" />
              <motion.div
                className="absolute inset-0 bg-[var(--brand-accent)] rounded-full"
                variants={goldUnderlineVariants}
                initial="hidden"
                animate="visible"
              />
            </div>
            <motion.p
              variants={fadeInUp}
              className="font-body text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl text-pretty"
            >
              {t("about.hero.subtitle")}
            </motion.p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                custom={i}
                className="border border-white/10 rounded-xl px-5 py-4 bg-white/5 backdrop-blur-sm"
              >
                <p className="font-heading text-3xl font-bold text-[var(--brand-accent)] leading-none mb-1">
                  {stat.value}
                </p>
                <p className="font-body text-white/60 text-xs uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 2. Firm Story — Two-Column Editorial ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: Narrative text */}
            <Reveal>
              <div>
                <p className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-[0.2em] mb-4">
                  {t("about.story.eyebrow")}
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                  {t("about.story.title")}
                </h2>
                <div className="w-12 h-0.5 bg-[var(--brand-accent)] mb-8" />
                <div className="space-y-5 font-body text-[var(--brand-text)] leading-relaxed text-base">
                  <p>{t("about.story.p1")}</p>
                  <p>{t("about.story.p2")}</p>
                  <p>{t("about.story.p3")}</p>
                </div>

                {/* Mission statement box */}
                <div className="mt-10 border-l-4 border-[var(--brand-accent)] pl-6 py-2 bg-[var(--brand-primary)]/[0.03] rounded-r-xl">
                  <p className="font-heading text-lg font-semibold text-[var(--brand-primary)] leading-snug italic">
                    {t("about.story.missionQuote")}
                  </p>
                  <p className="font-body text-sm text-[var(--brand-text)]/60 mt-2 uppercase tracking-wider">
                    {t("about.story.missionLabel")}
                  </p>
                </div>

                {/* Checkmarks */}
                <ul className="mt-10 space-y-3">
                  {[
                    t("about.story.check1"),
                    t("about.story.check2"),
                    t("about.story.check3"),
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-sm text-[var(--brand-text)]">
                      <CheckCircle size={18} className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Right: Decorative Timeline */}
            <Reveal delay={0.15}>
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--brand-accent)] via-[var(--brand-accent)]/30 to-transparent" aria-hidden="true" />
                <div className="space-y-8">
                  {timelineEvents.map((event, i) => (
                    <motion.div
                      key={event.year}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.08 }}
                      className="relative pl-14"
                    >
                      {/* Dot */}
                      <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[var(--brand-primary)] border-2 border-[var(--brand-accent)] flex items-center justify-center flex-shrink-0">
                        <span className="font-heading text-[var(--brand-accent)] text-[10px] font-bold leading-none">
                          {event.year.slice(2)}
                        </span>
                      </div>
                      <div className="bg-white border border-black/5 rounded-xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_20px_-8px_rgba(10,31,68,0.08)]">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-heading text-[var(--brand-accent)] text-sm font-bold">
                            {event.year}
                          </span>
                          <span className="font-heading text-[var(--brand-primary)] text-sm font-semibold">
                            {event.title}
                          </span>
                        </div>
                        <p className="font-body text-[var(--brand-text)]/70 text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. Four-Pillar Values Grid ── */}
      <section className="py-24 md:py-32 bg-[var(--brand-primary)]/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-[0.2em] mb-4">
                {t("about.values.eyebrow")}
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-4">
                {t("about.values.title")}
              </h2>
              <p className="font-body text-[var(--brand-text)]/70 leading-relaxed">
                {t("about.values.subtitle")}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.id} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4, boxShadow: "0 12px 40px -8px rgba(10,31,68,0.18)" }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="bg-white border border-black/5 rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(10,31,68,0.08)] flex flex-col h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)] flex items-center justify-center mb-6 flex-shrink-0">
                      <Icon size={22} className="text-[var(--brand-accent)]" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[var(--brand-primary)] mb-3">
                      {value.title}
                    </h3>
                    <p className="font-body text-[var(--brand-text)]/70 text-sm leading-relaxed flex-1">
                      {value.description}
                    </p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Leadership Message ── */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image column */}
            <Reveal className="lg:col-span-4">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-[var(--brand-primary)]/5" aria-hidden="true" />
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-[0_4px_6px_rgba(0,0,0,0.04),0_20px_60px_-12px_rgba(10,31,68,0.2)]">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/075/952/683/large_2x/man-business-leadership-and-portrait-in-office-building-of-ceo-leader-and-senior-partner-in-law-black-owner-success-and-entrepreneurship-with-company-mission-and-executive-in-corporate-world-photo.jpg"
                    alt={t("about.leadership.imageAlt")}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-heading text-white text-lg font-bold leading-tight">
                      {t("about.leadership.name")}
                    </p>
                    <p className="font-body text-[var(--brand-accent)] text-sm mt-1">
                      {t("about.leadership.title")}
                    </p>
                  </div>
                </div>
                {/* Decorative accent square */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-[var(--brand-accent)]/15 -z-10" aria-hidden="true" />
              </div>
            </Reveal>

            {/* Quote column */}
            <Reveal className="lg:col-span-8" delay={0.15}>
              <div>
                <p className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-[0.2em] mb-6">
                  {t("about.leadership.eyebrow")}
                </p>

                {/* Large pull-quote */}
                <div className="relative mb-8">
                  <Quote
                    size={56}
                    className="absolute -top-4 -left-2 text-[var(--brand-accent)]/15"
                    aria-hidden="true"
                  />
                  <blockquote className="relative pl-4">
                    <p className="font-heading text-2xl sm:text-3xl font-semibold text-[var(--brand-primary)] leading-snug tracking-tight text-pretty">
                      {t("about.leadership.quote")}
                    </p>
                  </blockquote>
                </div>

                <div className="space-y-4 font-body text-[var(--brand-text)]/70 leading-relaxed text-base mb-10">
                  <p>{t("about.leadership.p1")}</p>
                  <p>{t("about.leadership.p2")}</p>
                </div>

                {/* Signature graphic */}
                <div className="flex items-center gap-5 pt-6 border-t border-black/8">
                  <div>
                    <p className="font-heading text-[var(--brand-primary)] font-bold text-lg italic leading-tight">
                      {t("about.leadership.signatureName")}
                    </p>
                    <p className="font-body text-[var(--brand-text)]/50 text-xs uppercase tracking-widest mt-1">
                      {t("about.leadership.signatureTitle")}
                    </p>
                  </div>
                  <div className="h-10 w-px bg-black/10" aria-hidden="true" />
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[var(--brand-accent)]/20 flex items-center justify-center">
                      <span className="font-heading text-[var(--brand-primary)] text-xs font-bold">
                        {t("about.leadership.initials")}
                      </span>
                    </div>
                    <p className="font-body text-[var(--brand-text)]/50 text-xs">
                      {t("about.leadership.firmLabel")}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. Gold-on-Navy CTA Strip ── */}
      <Reveal>
        <section className="bg-[var(--brand-primary)] py-20 md:py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 70% 50%, var(--brand-accent) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left max-w-xl">
                <p className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-[0.2em] mb-3">
                  {t("about.cta.eyebrow")}
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight text-balance">
                  {t("about.cta.title")}
                </h2>
                <p className="font-body text-white/60 mt-4 leading-relaxed">
                  {t("about.cta.subtitle")}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-xl hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)] shadow-[0_4px_20px_rgba(201,168,76,0.35)]"
                  >
                    {t("about.cta.primaryButton")}
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/team"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-body font-semibold text-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    {t("about.cta.secondaryButton")}
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}