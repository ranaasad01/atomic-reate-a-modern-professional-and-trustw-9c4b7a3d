"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Briefcase, Scale, Heart, Globe, FileText, Users, ArrowRight, CheckCircle, Award, Shield, Clock, Phone, Mail, MapPin } from 'lucide-react';
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

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="overflow-x-hidden">
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[var(--brand-primary)]">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)] via-[#0d2a5e] to-[#0A1F44] opacity-95" />
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--brand-accent)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] border border-[var(--brand-accent)]/40 rounded-full">
                Trusted Legal Counsel
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight text-balance mb-6"
            >
              Expert Legal Solutions
              <span className="block text-[var(--brand-accent)] mt-2">You Can Rely On</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="font-body text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-10 text-pretty"
            >
              MIT Legal Consultants delivers strategic, results-oriented legal services to individuals,
              corporations, and governments. Seven practice areas. One trusted firm.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,76,0.35)] hover:shadow-[0_6px_28px_rgba(201,168,76,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-body font-medium text-sm rounded hover:bg-white/10 hover:border-white/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                Explore Practice Areas
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--brand-background)] to-transparent" />
      </section>

      {/* ─── TRUST STATS ──────────────────────────────────────────────────── */}
      <section className="bg-[var(--brand-primary)] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {trustStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                className="text-center"
              >
                <div className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-accent)] mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-white/60 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FIRM INTRODUCTION ────────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
                  About the Firm
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                  A Firm Built on Expertise, Integrity, and Results
                </h2>
                <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed mb-5 text-pretty">
                  MIT Legal Consultants is a professional legal consultancy providing comprehensive legal
                  services to individuals, businesses, organizations, and international clients. We are
                  committed to delivering practical, strategic, and results-oriented legal solutions.
                </p>
                <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed mb-8 text-pretty">
                  Our team of experienced attorneys combines deep subject-matter expertise with a
                  client-first philosophy, ensuring that every matter receives the attention, diligence,
                  and advocacy it deserves.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-body font-semibold text-sm text-[var(--brand-primary)] border-b-2 border-[var(--brand-accent)] pb-0.5 hover:text-[var(--brand-accent)] transition-colors duration-200"
                >
                  Learn More About Us
                  <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Mission", text: "To deliver practical, strategic, and results-oriented legal solutions while maintaining the highest standards of professionalism and integrity." },
                  { label: "Vision", text: "To be the most trusted legal consultancy in the region, recognized for excellence, innovation, and unwavering commitment to client success." },
                  { label: "Integrity", text: "We uphold the highest ethical standards in every client relationship and legal matter we handle." },
                  { label: "Excellence", text: "We pursue the best possible outcomes through rigorous preparation, deep expertise, and strategic thinking." },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-[var(--brand-card)] border border-[var(--brand-border)] rounded-xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(10,31,68,0.1)] transition-shadow duration-300"
                  >
                    <div className="w-1 h-6 bg-[var(--brand-accent)] rounded-full mb-3" />
                    <h3 className="font-heading text-base font-semibold text-[var(--brand-primary)] mb-2">
                      {item.label}
                    </h3>
                    <p className="font-body text-xs text-[var(--brand-muted-foreground)] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── PRACTICE AREAS ───────────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
              Our Expertise
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance">
              Seven Practice Areas. One Trusted Firm.
            </h2>
            <p className="font-body text-[var(--brand-muted-foreground)] mt-4 max-w-2xl mx-auto leading-relaxed">
              From corporate transactions to international law, our attorneys provide authoritative
              counsel across the full spectrum of legal disciplines.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {practiceAreas.map((area, index) => {
              const Icon = getIcon(area.icon);
              const isLast = index === practiceAreas.length - 1;
              return (
                <motion.div
                  key={area.id}
                  variants={fadeInUp}
                  className={isLast ? "sm:col-span-2 lg:col-span-1 xl:col-span-2" : ""}
                >
                  <Link
                    href={area.href}
                    className="group flex flex-col h-full bg-[var(--brand-card)] border border-[var(--brand-border)] rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_24px_rgba(10,31,68,0.14)] hover:border-[var(--brand-accent)]/40 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[var(--brand-primary)]/8 flex items-center justify-center mb-4 group-hover:bg-[var(--brand-accent)]/10 transition-colors duration-300">
                      <Icon size={22} className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading text-base font-semibold text-[var(--brand-primary)] mb-2 leading-snug">
                      {area.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed flex-1">
                      {area.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-body font-semibold text-[var(--brand-accent)] group-hover:gap-2 transition-all duration-200">
                      Learn More <ArrowRight size={13} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <Reveal className="text-center mt-10">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 px-7 py-3 border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] font-body font-semibold text-sm rounded hover:bg-[var(--brand-primary)] hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
            >
              View All Practice Areas
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--brand-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
              Why MIT Legal
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight text-balance">
              The Standard of Legal Excellence
            </h2>
            <p className="font-body text-white/60 mt-4 max-w-2xl mx-auto leading-relaxed">
              We combine deep legal expertise with a genuine commitment to client outcomes.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-[var(--brand-accent)]/30 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-[var(--brand-accent)]/15 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[var(--brand-accent)]" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── ATTORNEYS PREVIEW ────────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
              Our Team
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance">
              Meet Our Attorneys
            </h2>
            <p className="font-body text-[var(--brand-muted-foreground)] mt-4 max-w-2xl mx-auto leading-relaxed">
              Our legal team brings together decades of combined experience across diverse practice areas.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {attorneys.slice(0, 3).map((attorney) => (
              <motion.div
                key={attorney.id}
                variants={fadeInUp}
                className="bg-[var(--brand-card)] border border-[var(--brand-border)] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_24px_rgba(10,31,68,0.12)] transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-[var(--brand-primary)] to-[#0d2a5e] flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[var(--brand-accent)]/20 border-2 border-[var(--brand-accent)]/40 flex items-center justify-center">
                    <Users size={32} className="text-[var(--brand-accent)]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-0.5">
                    {attorney.name}
                  </h3>
                  <p className="font-body text-xs font-semibold text-[var(--brand-accent)] uppercase tracking-wide mb-3">
                    {attorney.title}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {attorney.specializations.slice(0, 2).map((spec) => (
                      <span
                        key={spec}
                        className="inline-block px-2.5 py-1 bg-[var(--brand-muted)] text-[var(--brand-primary)] text-xs font-body rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CONTACT CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--brand-primary)] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,31,68,0.25)]">
            <div className="relative px-8 py-16 sm:px-16 sm:py-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brand-accent)]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--brand-accent)]/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10 max-w-3xl">
                <Reveal>
                  <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
                    Get in Touch
                  </span>
                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight text-balance mb-6">
                    Ready to Discuss Your Legal Matter?
                  </h2>
                  <p className="font-body text-white/65 leading-relaxed mb-8 max-w-xl text-pretty">
                    Our attorneys are available to provide confidential, strategic guidance tailored to
                    your specific needs. Contact us today to schedule a consultation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,76,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
                    >
                      Schedule a Consultation
                      <ArrowRight size={16} />
                    </Link>
                    <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                      <a
                        href="tel:+1234567890"
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white font-body text-sm transition-colors duration-200"
                      >
                        <Phone size={15} className="text-[var(--brand-accent)]" />
                        +1 (234) 567-890
                      </a>
                      <a
                        href="mailto:info@mitlegal.com"
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white font-body text-sm transition-colors duration-200"
                      >
                        <Mail size={15} className="text-[var(--brand-accent)]" />
                        info@mitlegal.com
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
