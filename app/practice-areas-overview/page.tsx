"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Briefcase, Scale, Gavel, Heart, Globe, FileText, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { practiceAreas, BRAND_NAME } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";
import { useTranslations } from "next-intl";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Briefcase,
  Scale,
  Gavel,
  Heart,
  Globe,
  FileText,
  Users,
};

const hoverCard: Variants = {
  rest: { y: 0, boxShadow: "0 1px 3px rgba(10,31,68,0.08), 0 8px 24px -8px rgba(10,31,68,0.12)" },
  hover: { y: -6, boxShadow: "0 4px 12px rgba(10,31,68,0.12), 0 20px 40px -12px rgba(10,31,68,0.22)" },
};

const accentLine: Variants = {
  rest: { scaleX: 0 },
  hover: { scaleX: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

const stats = [
  { value: "20+", label: "Years of Combined Experience" },
  { value: "7", label: "Practice Areas" },
  { value: "500+", label: "Matters Successfully Resolved" },
  { value: "98%", label: "Client Satisfaction Rate" },
];

const whyChooseItems = [
  {
    title: "Multidisciplinary Expertise",
    description: "Our attorneys bring deep knowledge across seven distinct practice areas, enabling holistic counsel for complex, cross-cutting matters.",
  },
  {
    title: "Client-Centered Approach",
    description: "We take time to understand your unique circumstances and objectives, tailoring our strategy to deliver outcomes aligned with your goals.",
  },
  {
    title: "Proven Track Record",
    description: "Decades of successful representation across courts, arbitration panels, and regulatory bodies speak to our consistent excellence.",
  },
  {
    title: "Transparent Communication",
    description: "You receive clear, jargon-free updates at every stage. No surprises — just honest, timely counsel you can rely on.",
  },
  {
    title: "International Reach",
    description: "With expertise in cross-border and international law, we serve clients navigating multi-jurisdictional challenges with confidence.",
  },
  {
    title: "Ethical Standards",
    description: "Integrity is the foundation of everything we do. We uphold the highest professional and ethical standards in every engagement.",
  },
];

const testimonials = [
  {
    quote: "MIT Legal Consultants guided our company through a complex cross-border acquisition with precision and clarity. Their corporate team is exceptional.",
    author: "Kwame Asante",
    role: "CEO, Asante Holdings Ltd.",
    rating: 5,
  },
  {
    quote: "The mediation team resolved a long-standing commercial dispute in weeks. Their professionalism and command of the process was remarkable.",
    author: "Fatima Al-Rashid",
    role: "Director, Gulf Trade Partners",
    rating: 5,
  },
  {
    quote: "Navigating family law proceedings is never easy, but the compassion and expertise of the MIT Legal team made all the difference for our family.",
    author: "Ama Boateng",
    role: "Private Client",
    rating: 5,
  },
];

export default function PracticeAreasOverviewPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, var(--brand-accent) 0%, transparent 60%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255,255,255,0.5) 79px, rgba(255,255,255,0.5) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(255,255,255,0.5) 79px, rgba(255,255,255,0.5) 80px)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-[0.2em] mb-4"
            >
              {t("practiceAreasOverview.eyebrow")}
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance mb-6"
            >
              {t("practiceAreasOverview.heroTitle")}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="font-body text-white/70 text-lg leading-relaxed max-w-2xl mb-10"
            >
              {t("practiceAreasOverview.heroSubtitle")}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                {t("practiceAreasOverview.heroCta")}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                {t("practiceAreasOverview.heroSecondary")}
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
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="text-center lg:px-8"
                >
                  <p className="font-heading text-3xl font-bold text-[var(--brand-accent)]">
                    {stat.value}
                  </p>
                  <p className="font-body text-white/60 text-xs mt-1 leading-snug">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <Reveal>
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-[0.2em] mb-4">
                  {t("practiceAreasOverview.introEyebrow")}
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                  {t("practiceAreasOverview.introTitle")}
                </h2>
                <p className="font-body text-[var(--brand-text)]/70 text-base leading-relaxed mb-5">
                  {t("practiceAreasOverview.introParagraph1")}
                </p>
                <p className="font-body text-[var(--brand-text)]/70 text-base leading-relaxed mb-8">
                  {t("practiceAreasOverview.introParagraph2")}
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-body font-semibold text-sm hover:text-[var(--brand-accent)] transition-colors duration-200 group"
                >
                  {t("practiceAreasOverview.introLink")}
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(10,31,68,0.1),0_20px_48px_-12px_rgba(10,31,68,0.2)]">
                  <img
                    src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/123/2026/02/Brattle-720x480-1-480x320-center-middle.png?v=352692"
                    alt="MIT Legal Consultants team in consultation"
                    className="w-full h-80 object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/40 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[var(--brand-accent)] rounded-xl px-6 py-4 shadow-lg">
                  <p className="font-heading text-2xl font-bold text-[var(--brand-primary)]">20+</p>
                  <p className="font-body text-[var(--brand-primary)]/80 text-xs font-medium">
                    {t("practiceAreasOverview.introStatLabel")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Practice Areas Grid ── */}
      <Reveal>
        <section className="py-20 md:py-28 bg-[var(--brand-primary)]/[0.03]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-[0.2em] mb-4">
                {t("practiceAreasOverview.areasEyebrow")}
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-4">
                {t("practiceAreasOverview.areasTitle")}
              </h2>
              <p className="font-body text-[var(--brand-text)]/60 text-base leading-relaxed">
                {t("practiceAreasOverview.areasSubtitle")}
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {(practiceAreas ?? []).map((area, i) => {
                const IconComponent = iconMap[area.icon] ?? Briefcase;
                const isLast = i === practiceAreas.length - 1;
                return (
                  <motion.div
                    key={area.id}
                    variants={scaleIn}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className={`group relative bg-white rounded-2xl border border-[var(--brand-primary)]/8 overflow-hidden cursor-pointer ${
                      isLast ? "md:col-span-2 lg:col-span-1" : ""
                    }`}
                    style={{ boxShadow: "0 1px 3px rgba(10,31,68,0.06), 0 8px 24px -8px rgba(10,31,68,0.10)" }}
                  >
                    <motion.div
                      variants={hoverCard}
                      className="h-full"
                    >
                      <Link
                        href={area.href ?? `/practice-areas/${area.slug}`}
                        className="block p-8 h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-inset rounded-2xl"
                        aria-label={`${t("practiceAreasOverview.cardAriaPrefix")} ${area.title}`}
                      >
                        {/* Accent line top */}
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--brand-accent)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" aria-hidden="true" />

                        <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/8 flex items-center justify-center mb-5 group-hover:bg-[var(--brand-accent)]/15 transition-colors duration-300">
                          <IconComponent
                            size={22}
                            className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-300"
                          />
                        </div>

                        <h3 className="font-heading text-lg font-bold text-[var(--brand-primary)] leading-snug mb-3 group-hover:text-[var(--brand-accent)] transition-colors duration-300">
                          {area.title}
                        </h3>
                        <p className="font-body text-[var(--brand-text)]/60 text-sm leading-relaxed mb-6">
                          {area.shortDescription}
                        </p>

                        <span className="inline-flex items-center gap-1.5 text-[var(--brand-primary)] font-body font-semibold text-xs group-hover:text-[var(--brand-accent)] transition-colors duration-200">
                          {t("practiceAreasOverview.cardLearnMore")}
                          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </span>
                      </Link>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* ── Why Choose Us ── */}
      <Reveal>
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-16 items-start">
              <div className="lg:col-span-2">
                <p className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-[0.2em] mb-4">
                  {t("practiceAreasOverview.whyEyebrow")}
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                  {t("practiceAreasOverview.whyTitle")}
                </h2>
                <p className="font-body text-[var(--brand-text)]/60 text-base leading-relaxed mb-8">
                  {t("practiceAreasOverview.whySubtitle")}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-primary)] text-white font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                >
                  {t("practiceAreasOverview.whyCta")}
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
                {whyChooseItems.map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.07}>
                    <div className="flex gap-4 p-5 rounded-xl border border-[var(--brand-primary)]/8 bg-[var(--brand-primary)]/[0.02] hover:border-[var(--brand-accent)]/30 hover:bg-[var(--brand-accent)]/[0.03] transition-all duration-200">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--brand-accent)]/15 flex items-center justify-center mt-0.5">
                        <CheckCircle size={15} className="text-[var(--brand-accent)]" />
                      </div>
                      <div>
                        <h3 className="font-heading text-sm font-bold text-[var(--brand-primary)] mb-1.5">
                          {item.title}
                        </h3>
                        <p className="font-body text-[var(--brand-text)]/60 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Testimonials ── */}
      <Reveal>
        <section className="py-20 md:py-28 bg-[var(--brand-primary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-[0.2em] mb-4">
                {t("practiceAreasOverview.testimonialsEyebrow")}
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight text-balance">
                {t("practiceAreasOverview.testimonialsTitle")}
              </h2>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid md:grid-cols-3 gap-6"
            >
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={testimonial.author}
                  variants={fadeInUp}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors duration-200"
                >
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: testimonial.rating }).map((_, si) => (
                      <Star key={si} size={14} className="text-[var(--brand-accent)] fill-[var(--brand-accent)]" />
                    ))}
                  </div>
                  <blockquote className="font-body text-white/80 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="border-t border-white/10 pt-5">
                    <p className="font-heading text-white font-semibold text-sm">
                      {testimonial.author}
                    </p>
                    <p className="font-body text-white/50 text-xs mt-0.5">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* ── CTA Banner ── */}
      <Reveal>
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-[var(--brand-primary)] rounded-3xl overflow-hidden px-8 py-16 md:px-16 text-center">
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 70% 50%, var(--brand-accent) 0%, transparent 55%)",
                }}
                aria-hidden="true"
              />
              <div className="relative">
                <p className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-[0.2em] mb-4">
                  {t("practiceAreasOverview.ctaBannerEyebrow")}
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight text-balance mb-4 max-w-2xl mx-auto">
                  {t("practiceAreasOverview.ctaBannerTitle")}
                </h2>
                <p className="font-body text-white/60 text-base leading-relaxed max-w-xl mx-auto mb-10">
                  {t("practiceAreasOverview.ctaBannerSubtitle")}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
                  >
                    {t("practiceAreasOverview.ctaBannerPrimary")}
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/team"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    {t("practiceAreasOverview.ctaBannerSecondary")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}