"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Briefcase, Scale, Heart, Globe, FileText, Users, ArrowRight, CheckCircle, Star, Award, Shield, Clock, Phone, Mail, MapPin } from 'lucide-react';
import { practiceAreas, BRAND_NAME, BRAND_TAGLINE, attorneys } from "@/lib/data";
import { fadeInUp, fadeIn, staggerContainer, slideInLeft, slideInRight, scaleIn } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";
import { useTranslations } from "next-intl";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Briefcase,
  Scale,
  Heart,
  Globe,
  FileText,
  Users,
};

// Gavel icon workaround — lucide-react may not export Gavel; use Scale as fallback
const GavelIcon = Scale;

function getIcon(name: string) {
  if (name === "Gavel") return GavelIcon;
  return iconMap[name] ?? Briefcase;
}

const trustStats = [
  { value: "20+", label: "Years of Excellence" },
  { value: "500+", label: "Cases Successfully Resolved" },
  { value: "7", label: "Practice Areas" },
  { value: "98%", label: "Client Satisfaction Rate" },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Two decades of delivering measurable outcomes for individuals, corporations, and government institutions across complex legal landscapes.",
  },
  {
    icon: Shield,
    title: "Confidentiality & Integrity",
    description:
      "Every matter is handled with the highest ethical standards. Your information and interests are protected at every stage.",
  },
  {
    icon: Users,
    title: "Multidisciplinary Team",
    description:
      "Our attorneys bring deep specialization across seven distinct practice areas, enabling comprehensive counsel under one roof.",
  },
  {
    icon: Globe,
    title: "Cross-Border Expertise",
    description:
      "From domestic disputes to international treaties, we navigate complex multi-jurisdictional matters with precision and authority.",
  },
  {
    icon: Clock,
    title: "Responsive & Accessible",
    description:
      "We understand that legal matters are time-sensitive. Our team is committed to prompt communication and timely action.",
  },
  {
    icon: CheckCircle,
    title: "Client-Centered Approach",
    description:
      "We take time to understand your unique circumstances and craft strategies tailored to your specific goals and risk profile.",
  },
];

const testimonials = [
  {
    id: "t1",
    quote:
      "MIT Legal Consultants guided our company through a complex cross-border acquisition with exceptional skill. Their attention to detail and strategic thinking saved us from significant risk.",
    author: "Emmanuel Asante",
    role: "CEO, Asante Holdings Ltd.",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "The family law team handled our matter with genuine compassion and professionalism. They made an incredibly difficult process as smooth as possible.",
    author: "Abena Mensah",
    role: "Private Client",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Their legislative drafting expertise is unmatched. The policy framework they developed for our ministry was thorough, legally sound, and practically implementable.",
    author: "Hon. Kwame Darko",
    role: "Deputy Minister, Ministry of Justice",
    rating: 5,
  },
];

const heroVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const heroChild: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="overflow-x-hidden">
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-[92vh] flex items-center bg-[var(--brand-primary)] overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://courtscribes.com/wp-content/uploads/2023/06/AdobeStock_607639727.jpeg"
            alt={t("hero.imageAlt")}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-primary)]/90 to-[var(--brand-primary)]/60" />
        </div>

        {/* Decorative accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--brand-accent)] z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="max-w-xl"
            >
              <motion.div variants={heroChild}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-accent)]/40 bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-6">
                  {t("hero.eyebrow")}
                </span>
              </motion.div>

              <motion.h1
                variants={heroChild}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance mb-6"
              >
                {t("hero.headline1")}{" "}
                <span className="text-[var(--brand-accent)]">
                  {t("hero.headline2")}
                </span>
                {t("hero.headline3")}
              </motion.h1>

              <motion.p
                variants={heroChild}
                className="font-body text-white/70 text-lg leading-relaxed mb-10 text-pretty"
              >
                {t("hero.subtext")}
              </motion.p>

              <motion.div
                variants={heroChild}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-300 shadow-[0_4px_24px_rgba(201,168,76,0.35)] hover:shadow-[0_6px_32px_rgba(201,168,76,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
                >
                  {t("hero.ctaPrimary")}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/practice-areas"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-body font-medium text-sm rounded-lg hover:border-white/60 hover:bg-white/5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  {t("hero.ctaSecondary")}
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: stat cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {trustStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-[var(--brand-accent)]/40 transition-all duration-300"
                >
                  <p className="font-heading text-3xl font-bold text-[var(--brand-accent)] mb-1">
                    {stat.value}
                  </p>
                  <p className="font-body text-white/60 text-sm leading-snug">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* ─── FIRM INTRODUCTION ────────────────────────────────────────────── */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <Reveal>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,31,68,0.15)]">
                  <img
                    src="https://workzones.com/wp-content/uploads/sites/27/2026/06/Gemini_Generated_Image_vsr0vkvsr0vkvsr0-2.png"
                    alt={t("about.imageAlt")}
                    className="w-full h-[480px] object-cover"
                  />
                </div>
                {/* Floating accent card */}
                <div className="absolute -bottom-6 -right-6 bg-[var(--brand-primary)] rounded-2xl p-6 shadow-[0_8px_32px_rgba(10,31,68,0.3)]">
                  <p className="font-heading text-3xl font-bold text-[var(--brand-accent)]">
                    20+
                  </p>
                  <p className="font-body text-white/70 text-sm mt-1">
                    {t("about.yearsLabel")}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Copy side */}
            <Reveal delay={0.15}>
              <div>
                <span className="inline-block text-[var(--brand-accent)] font-body font-semibold text-xs uppercase tracking-widest mb-4">
                  {t("about.eyebrow")}
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                  {t("about.heading")}
                </h2>
                <p className="font-body text-[var(--brand-text)]/70 text-base leading-relaxed mb-5 text-pretty">
                  {t("about.para1")}
                </p>
                <p className="font-body text-[var(--brand-text)]/70 text-base leading-relaxed mb-8 text-pretty">
                  {t("about.para2")}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    t("about.pillar1"),
                    t("about.pillar2"),
                    t("about.pillar3"),
                    t("about.pillar4"),
                  ].map((pillar) => (
                    <div key={pillar} className="flex items-center gap-2">
                      <CheckCircle
                        size={16}
                        className="text-[var(--brand-accent)] flex-shrink-0"
                      />
                      <span className="font-body text-sm text-[var(--brand-text)]/80">
                        {pillar}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                >
                  {t("about.cta")}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── PRACTICE AREAS ───────────────────────────────────────────────── */}
      <section
        id="practice-areas"
        className="py-24 md:py-32 bg-[var(--brand-surface)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-[var(--brand-accent)] font-body font-semibold text-xs uppercase tracking-widest mb-4">
                {t("practiceAreas.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-4">
                {t("practiceAreas.heading")}
              </h2>
              <p className="font-body text-[var(--brand-text)]/60 text-base leading-relaxed text-pretty">
                {t("practiceAreas.subtext")}
              </p>
            </div>
          </Reveal>

          {/* Bento-style asymmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, i) => {
              const Icon = getIcon(area.icon);
              const isFeatured = i === 0;
              return (
                <Reveal key={area.id} delay={i * 0.07}>
                  <Link
                    href={area.href}
                    className={`group block rounded-2xl border border-[var(--brand-primary)]/8 bg-white p-8 hover:border-[var(--brand-accent)]/50 hover:shadow-[0_8px_40px_rgba(10,31,68,0.12)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] ${
                      isFeatured ? "md:col-span-2 lg:col-span-1" : ""
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/8 flex items-center justify-center mb-5 group-hover:bg-[var(--brand-accent)]/15 transition-colors duration-300">
                      <Icon
                        size={22}
                        className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-300"
                      />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-3 leading-snug">
                      {area.title}
                    </h3>
                    <p className="font-body text-[var(--brand-text)]/60 text-sm leading-relaxed mb-5">
                      {area.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[var(--brand-accent)] font-body font-semibold text-xs uppercase tracking-wide group-hover:gap-2.5 transition-all duration-200">
                      {t("practiceAreas.learnMore")}
                      <ArrowRight size={13} />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2}>
            <div className="text-center mt-12">
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] font-body font-semibold text-sm rounded-lg hover:bg-[var(--brand-primary)] hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
              >
                {t("practiceAreas.viewAll")}
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section id="why-us" className="py-24 md:py-32 bg-[var(--brand-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-[var(--brand-accent)] font-body font-semibold text-xs uppercase tracking-widest mb-4">
                {t("whyUs.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight text-balance mb-4">
                {t("whyUs.heading")}
              </h2>
              <p className="font-body text-white/60 text-base leading-relaxed text-pretty">
                {t("whyUs.subtext")}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[var(--brand-accent)]/40 hover:bg-white/8 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[var(--brand-accent)]/15 flex items-center justify-center mb-5">
                      <Icon size={20} className="text-[var(--brand-accent)]" />
                    </div>
                    <h3 className="font-heading text-base font-semibold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="font-body text-white/55 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section id="testimonials" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-[var(--brand-accent)] font-body font-semibold text-xs uppercase tracking-widest mb-4">
                {t("testimonials.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-4">
                {t("testimonials.heading")}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-[var(--brand-surface)] border border-[var(--brand-primary)]/8 rounded-2xl p-8 flex flex-col hover:shadow-[0_8px_40px_rgba(10,31,68,0.1)] transition-all duration-300"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: item.rating }).map((_, si) => (
                      <Star
                        key={si}
                        size={14}
                        className="text-[var(--brand-accent)] fill-[var(--brand-accent)]"
                      />
                    ))}
                  </div>
                  <blockquote className="font-body text-[var(--brand-text)]/70 text-sm leading-relaxed flex-1 mb-6 italic">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 pt-5 border-t border-[var(--brand-primary)]/8">
                    <div className="w-10 h-10 rounded-full bg-[var(--brand-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-heading font-bold text-[var(--brand-primary)] text-sm">
                        {item.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-[var(--brand-primary)] text-sm">
                        {item.author}
                      </p>
                      <p className="font-body text-[var(--brand-text)]/50 text-xs">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM PREVIEW ─────────────────────────────────────────────────── */}
      <section id="team" className="py-24 md:py-32 bg-[var(--brand-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <span className="inline-block text-[var(--brand-accent)] font-body font-semibold text-xs uppercase tracking-widest mb-4">
                  {t("team.eyebrow")}
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                  {t("team.heading")}
                </h2>
                <p className="font-body text-[var(--brand-text)]/65 text-base leading-relaxed mb-8 text-pretty">
                  {t("team.para")}
                </p>
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                >
                  {t("team.cta")}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-5">
              {attorneys.slice(0, 4).map((attorney, i) => (
                <Reveal key={attorney.id} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="bg-white rounded-2xl overflow-hidden border border-[var(--brand-primary)]/8 shadow-[0_2px_12px_rgba(10,31,68,0.06)] hover:shadow-[0_8px_32px_rgba(10,31,68,0.12)] transition-all duration-300"
                  >
                    <div className="h-44 overflow-hidden bg-[var(--brand-primary)]/5">
                      <img
                        src={attorney.image}
                        alt={attorney.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            "https://a.storyblok.com/f/228452/1300x867/2c39324e68/1300x867-attorney-lawyer-email-signature.png";
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-heading font-semibold text-[var(--brand-primary)] text-sm leading-snug">
                        {attorney.name}
                      </p>
                      <p className="font-body text-[var(--brand-accent)] text-xs mt-0.5">
                        {attorney.title}
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA STRIP ────────────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-[var(--brand-accent)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="text-center lg:text-left">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-3">
                  {t("ctaStrip.heading")}
                </h2>
                <p className="font-body text-[var(--brand-primary)]/70 text-base leading-relaxed max-w-xl text-pretty">
                  {t("ctaStrip.subtext")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-primary)] text-white font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-300 shadow-[0_4px_20px_rgba(10,31,68,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                >
                  {t("ctaStrip.ctaPrimary")}
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="tel:+233000000000"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[var(--brand-primary)]/30 text-[var(--brand-primary)] font-body font-semibold text-sm rounded-lg hover:border-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                >
                  <Phone size={15} />
                  {t("ctaStrip.ctaPhone")}
                </a>
              </div>
            </div>
          </Reveal>

          {/* Quick contact info row */}
          <Reveal delay={0.1}>
            <div className="mt-12 pt-10 border-t border-[var(--brand-primary)]/15 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: Phone,
                  label: t("ctaStrip.phoneLabel"),
                  value: t("ctaStrip.phoneValue"),
                },
                {
                  icon: Mail,
                  label: t("ctaStrip.emailLabel"),
                  value: t("ctaStrip.emailValue"),
                },
                {
                  icon: MapPin,
                  label: t("ctaStrip.addressLabel"),
                  value: t("ctaStrip.addressValue"),
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-[var(--brand-primary)]" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold text-[var(--brand-primary)]/60 uppercase tracking-wide mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-body text-[var(--brand-primary)] text-sm font-medium">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}