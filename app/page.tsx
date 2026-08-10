"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Briefcase, Scale, Heart, Globe, FileText, Users, ArrowRight, CheckCircle, Award, Shield, Clock, Phone, Mail, MapPin } from 'lucide-react';
import { practiceAreas, BRAND_NAME, BRAND_TAGLINE } from "@/lib/data";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  slideInLeft,
  slideInRight,
  scaleIn,
} from "@/lib/motion";
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

const GavelIcon = Scale;

function getIcon(name: string): React.ComponentType<{ size?: number; className?: string }> {
  if (name === "Gavel") return GavelIcon;
  return iconMap[name] ?? Briefcase;
}

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

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="overflow-x-hidden">
      {/* ─── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[var(--brand-primary)]">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)] via-[#0d2a5e] to-[#0A1F44] opacity-95" />
        {/* Gold accent top bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--brand-accent)]" />
        {/* Decorative circles */}
        <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full border border-[var(--brand-accent)]/10 opacity-40" />
        <div className="absolute bottom-[-40px] right-[-40px] w-[260px] h-[260px] rounded-full border border-[var(--brand-accent)]/15 opacity-30" />
        <div className="absolute top-[-60px] left-[-60px] w-[320px] h-[320px] rounded-full border border-white/5 opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            {/* Label */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] border border-[var(--brand-accent)]/40 rounded-full">
                Trusted Legal Counsel
                <span className="w-1 h-1 rounded-full bg-[var(--brand-accent)] inline-block" />
                Est. 2004
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight text-balance mb-6"
            >
              Strategic Legal Counsel
              <span className="block text-[var(--brand-accent)] mt-2">You Can Rely On</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="font-body text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto text-pretty mb-10"
            >
              MIT Legal Consultants delivers practical, results-oriented legal solutions across seven specialized practice areas — serving individuals, corporations, and governments with integrity and precision.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)] flex items-center gap-2 group"
              >
                Schedule a Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/practice-areas"
                className="px-8 py-3.5 border border-white/30 text-white font-body font-medium text-sm rounded hover:border-white/60 hover:bg-white/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                Explore Practice Areas
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeInUp}
              className="mt-14 flex flex-wrap items-center justify-center gap-6 text-white/40 text-xs font-body uppercase tracking-widest"
            >
              <span className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[var(--brand-accent)]" />
                Corporate Law
              </span>
              <span className="w-px h-4 bg-white/20" />
              <span className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[var(--brand-accent)]" />
                International Law
              </span>
              <span className="w-px h-4 bg-white/20" />
              <span className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[var(--brand-accent)]" />
                Dispute Resolution
              </span>
              <span className="w-px h-4 bg-white/20" />
              <span className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[var(--brand-accent)]" />
                Legislative Drafting
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--brand-background)] to-transparent" />
      </section>

      {/* ─── SECTION 2: FIRM INTRODUCTION ────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <Reveal>
                <span className="inline-block px-3 py-1 text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] border border-[var(--brand-accent)]/30 rounded-full mb-5">
                  About the Firm
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                  A Firm Built on Expertise, Ethics, and Results
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed text-pretty mb-5">
                  MIT Legal Consultants is a professional legal consultancy providing comprehensive legal services to individuals, businesses, organizations, and international clients. We are committed to delivering practical, strategic, and results-oriented legal solutions.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed text-pretty mb-8">
                  Our attorneys combine deep subject-matter expertise with a thorough understanding of the commercial, regulatory, and human dimensions of every matter — ensuring counsel that is both legally sound and strategically astute.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded hover:bg-[#0d2a5e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] group"
                  >
                    Learn About the Firm
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--brand-border)] text-[var(--brand-primary)] font-body font-semibold text-sm rounded hover:border-[var(--brand-primary)] hover:bg-[var(--brand-muted)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                  >
                    Contact Us
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right: Values panel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { title: "Our Mission", body: "To provide accessible, high-quality legal services that empower clients to navigate complex legal challenges with confidence and clarity." },
                { title: "Our Vision", body: "To be the most trusted legal consultancy in the region, recognized for excellence, integrity, and transformative client outcomes." },
                { title: "Core Values", body: "Integrity, professionalism, confidentiality, and a relentless commitment to achieving the best possible result for every client." },
                { title: "Our Approach", body: "We combine rigorous legal analysis with practical business sense, delivering solutions that are both legally robust and commercially viable." },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="p-6 bg-[var(--brand-card)] border border-[var(--brand-border)] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] hover:border-[var(--brand-accent)]/40 transition-all duration-300">
                    <div className="w-1 h-6 bg-[var(--brand-accent)] rounded-full mb-3" />
                    <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-2">{item.title}</h3>
                    <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: PRACTICE AREAS ───────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[var(--brand-primary)] relative overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)] via-[#0d2a5e] to-[var(--brand-primary)] opacity-80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-[var(--brand-accent)]/30" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--brand-accent)]/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Reveal>
              <span className="inline-block px-3 py-1 text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] border border-[var(--brand-accent)]/40 rounded-full mb-5">
                Practice Areas
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight text-balance mb-4">
                Comprehensive Legal Services
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-body text-white/60 max-w-2xl mx-auto leading-relaxed text-pretty">
                Seven specialized practice areas, one unified commitment to excellence. Whatever your legal need, our team has the expertise to guide you.
              </p>
            </Reveal>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {practiceAreas.map((area, i) => {
              const Icon = getIcon(area.icon);
              return (
                <Reveal key={area.id} delay={i * 0.07}>
                  <Link
                    href={area.href}
                    className="group flex flex-col h-full p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[var(--brand-accent)]/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[var(--brand-accent)]/15 border border-[var(--brand-accent)]/30 flex items-center justify-center mb-4 group-hover:bg-[var(--brand-accent)]/25 transition-colors duration-300">
                      <Icon size={20} className="text-[var(--brand-accent)]" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-2 leading-snug group-hover:text-[var(--brand-accent)] transition-colors duration-200">
                      {area.title}
                    </h3>
                    <p className="font-body text-sm text-white/55 leading-relaxed flex-1 mb-4">
                      {area.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-[var(--brand-accent)] uppercase tracking-wide group-hover:gap-2.5 transition-all duration-200">
                      Learn More <ArrowRight size={12} />
                    </span>
                  </Link>
                </Reveal>
              );
            })}

            {/* View all card */}
            <Reveal delay={practiceAreas.length * 0.07}>
              <Link
                href="/practice-areas"
                className="group flex flex-col items-center justify-center h-full p-6 border-2 border-dashed border-[var(--brand-accent)]/30 rounded-xl hover:border-[var(--brand-accent)]/60 hover:bg-[var(--brand-accent)]/5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] min-h-[200px]"
              >
                <div className="w-11 h-11 rounded-full border border-[var(--brand-accent)]/40 flex items-center justify-center mb-3 group-hover:border-[var(--brand-accent)] transition-colors duration-300">
                  <ArrowRight size={18} className="text-[var(--brand-accent)]" />
                </div>
                <span className="font-heading text-base font-semibold text-white/70 group-hover:text-white transition-colors duration-200 text-center">
                  View All Practice Areas
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WHY CHOOSE US ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <Reveal>
              <span className="inline-block px-3 py-1 text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] border border-[var(--brand-accent)]/30 rounded-full mb-5">
                Why MIT Legal
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-4">
                The Standard of Legal Excellence
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed text-pretty">
                Choosing the right legal partner is one of the most consequential decisions you can make. Here is why clients trust MIT Legal Consultants.
              </p>
            </Reveal>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="group p-7 bg-[var(--brand-card)] border border-[var(--brand-border)] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] hover:border-[var(--brand-accent)]/40 transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-[var(--brand-muted)] flex items-center justify-center mb-5 group-hover:bg-[var(--brand-accent)]/10 transition-colors duration-300">
                      <Icon size={22} className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-[var(--brand-primary)] mb-3">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: CONTACT / CTA STRIP ──────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-primary)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-[var(--brand-accent)]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)] via-[#0d2a5e] to-[var(--brand-primary)] opacity-60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <Reveal>
                <span className="inline-block px-3 py-1 text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] border border-[var(--brand-accent)]/40 rounded-full mb-5">
                  Get in Touch
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight text-balance mb-4">
                  Ready to Discuss Your Legal Matter?
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="font-body text-white/60 leading-relaxed text-pretty mb-8">
                  Our attorneys are available for confidential consultations. Reach out today and let us help you navigate your legal challenges with clarity and confidence.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] group"
                >
                  Schedule a Consultation
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Reveal>
            </div>

            {/* Right: Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+1 (555) 000-0000",
                  href: "tel:+15550000000",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@mitlegal.com",
                  href: "mailto:info@mitlegal.com",
                },
                {
                  icon: MapPin,
                  label: "Office",
                  value: "Available on Request",
                  href: "/contact",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.label} delay={i * 0.1}>
                    <a
                      href={item.href}
                      className="flex flex-col items-center text-center p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[var(--brand-accent)]/40 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/15 border border-[var(--brand-accent)]/30 flex items-center justify-center mb-3 group-hover:bg-[var(--brand-accent)]/25 transition-colors duration-300">
                        <Icon size={18} className="text-[var(--brand-accent)]" />
                      </div>
                      <span className="font-body text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">
                        {item.label}
                      </span>
                      <span className="font-body text-sm text-white/80 font-medium">
                        {item.value}
                      </span>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
