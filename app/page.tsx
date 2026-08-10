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
                Est. 2000
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight text-balance mb-6"
            >
              Delivering{" "}
              <span className="text-[var(--brand-accent)]">Justice.</span>
              <span className="block mt-1">Protecting Interests.</span>
              <span className="block mt-1">Building Futures.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="font-body text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-10 text-pretty"
            >
              MIT Legal Consultants provides strategic, results-oriented legal solutions to individuals,
              businesses, and governments — with integrity, precision, and unwavering commitment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 justify-center mb-14"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white font-body font-semibold text-sm rounded hover:border-white hover:bg-white/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore Practice Areas
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-8 justify-center"
            >
              {[
                { number: "7+", label: "Practice Areas" },
                { number: "20+", label: "Years Experience" },
                { number: "500+", label: "Clients Served" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-3xl font-bold text-[var(--brand-accent)]">
                    {stat.number}
                  </div>
                  <div className="font-body text-xs text-white/60 uppercase tracking-widest mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 2: FIRM INTRODUCTION ────────────────────────────────── */}
      <section className="py-24 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <Reveal>
              <motion.div variants={slideInLeft}>
                <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
                  About MIT Legal Consultants
                </span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                  A Firm Built on Expertise, Integrity, and Results
                </h2>
                <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed mb-4">
                  MIT Legal Consultants is a premier legal consultancy dedicated to providing comprehensive,
                  practical, and strategic legal services. We serve individuals, businesses, corporations,
                  government bodies, NGOs, and international organizations.
                </p>
                <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed mb-8">
                  Our multidisciplinary team of attorneys combines deep legal knowledge with real-world
                  experience to deliver solutions that protect your interests and advance your objectives —
                  whether in the boardroom, the courtroom, or across international borders.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[var(--brand-accent)] font-body font-semibold text-sm hover:gap-3 transition-all duration-300"
                >
                  Learn More About Our Firm
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </Reveal>

            {/* RIGHT */}
            <Reveal delay={0.15}>
              <motion.div variants={slideInRight}>
                <div className="bg-[var(--brand-primary)] rounded-2xl p-8 text-white shadow-[0_8px_40px_-12px_rgba(10,31,68,0.4)]">
                  <h3 className="font-heading text-2xl font-bold text-[var(--brand-accent)] mb-6">
                    Our Commitment to You
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Confidential & privileged legal advice",
                      "Transparent communication at every stage",
                      "Tailored strategies for your unique situation",
                      "Relentless advocacy for your rights and interests",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle
                          size={18}
                          className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5"
                        />
                        <span className="font-body text-white/85 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-white/10 pt-6">
                    <p className="font-heading italic text-white/70 text-lg">
                      &ldquo;We don&rsquo;t just practice law — we deliver outcomes.&rdquo;
                    </p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: PRACTICE AREAS HIGHLIGHTS ────────────────────────── */}
      <section className="py-24 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-4">
            <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-3">
              What We Do
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance">
              Our Practice Areas
            </h2>
            <p className="font-body text-[var(--brand-muted-foreground)] max-w-2xl mx-auto mt-4 leading-relaxed">
              From corporate transactions to international disputes, our attorneys provide expert counsel
              across a comprehensive range of legal disciplines.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {practiceAreas.map((area, index) => {
              const Icon = getIcon(area.icon);
              return (
                <Reveal key={area.id} delay={index * 0.08}>
                  <div className="bg-[var(--brand-card)] rounded-xl p-6 border border-[var(--brand-border)] hover:shadow-[0_4px_24px_-8px_rgba(10,31,68,0.18)] hover:border-[var(--brand-accent)] transition-all duration-300 group flex flex-col h-full">
                    <div className="w-12 h-12 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center mb-4 flex-shrink-0">
                      <Icon size={22} className="text-[var(--brand-accent)]" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-2">
                      {area.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed flex-1 mb-4">
                      {area.shortDescription}
                    </p>
                    <Link
                      href={area.href}
                      className="inline-flex items-center gap-1 text-[var(--brand-accent)] text-sm font-body font-semibold group-hover:gap-2 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="text-center mt-12">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
            >
              View All Practice Areas
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─── SECTION 4: WHY CHOOSE US ─────────────────────────────────────── */}
      <section className="py-24 bg-[var(--brand-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-4">
            <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-3">
              Why MIT Legal
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight text-balance">
              Why Clients Choose Us
            </h2>
            <p className="font-body text-white/60 max-w-2xl mx-auto mt-4 leading-relaxed">
              We combine legal excellence with genuine client care — delivering results that matter,
              every time.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[var(--brand-accent)] transition-all duration-300 h-full">
                    <Icon size={28} className="text-[var(--brand-accent)] mb-4" />
                    <h3 className="font-heading text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: CTA BANNER ────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-accent)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <Reveal>
              <div>
                <h2 className="font-heading text-3xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance">
                  Ready to Protect What Matters Most?
                </h2>
                <p className="font-body text-[var(--brand-primary)]/80 mt-2 leading-relaxed">
                  Speak with one of our experienced attorneys today. Confidential consultations available.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-4 flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded hover:bg-[#0d2a5e] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] font-body font-semibold text-sm rounded hover:bg-[var(--brand-primary)] hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                >
                  Learn About Our Firm
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: CONTACT STRIP ─────────────────────────────────────── */}
      <section className="py-16 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-8">
            <h2 className="font-heading text-2xl font-bold text-[var(--brand-primary)]">
              Get in Touch
            </h2>
            <p className="font-body text-[var(--brand-muted-foreground)] mt-2 text-sm">
              We are here to help. Reach out through any of the channels below.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: Phone,
                label: "Call Us",
                value: "+00",
              },
              {
                icon: Mail,
                label: "Email Us",
                value: "xyz@xyz.com",
              },
              {
                icon: MapPin,
                label: "Visit Us",
                value: "XYZ Address",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label} delay={index * 0.08}>
                  <div className="bg-[var(--brand-card)] border border-[var(--brand-border)] rounded-xl p-6 text-center flex flex-col items-center gap-3 hover:shadow-[0_4px_20px_-8px_rgba(10,31,68,0.12)] hover:border-[var(--brand-accent)] transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-[var(--brand-muted)] flex items-center justify-center">
                      <Icon size={20} className="text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--brand-muted-foreground)] mb-1">
                        {item.label}
                      </p>
                      <p className="font-body text-sm font-semibold text-[var(--brand-primary)]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
            >
              Send Us a Message
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
