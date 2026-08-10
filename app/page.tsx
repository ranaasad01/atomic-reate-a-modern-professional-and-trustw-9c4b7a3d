"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Briefcase, Scale, Heart, Globe, FileText, Users, ArrowRight, CheckCircle, Award, Shield, Clock, Phone, Mail, MapPin } from 'lucide-react';
import { practiceAreas, BRAND_NAME, BRAND_TAGLINE } from "@/lib/data";
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
              className="font-body text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto mb-10 text-pretty"
            >
              MIT Legal Consultants delivers strategic, results-oriented legal services to individuals,
              businesses, and institutions. Seven practice areas. One trusted firm.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-body font-medium text-sm rounded hover:bg-white/10 hover:border-white/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore Practice Areas
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--brand-background)] to-transparent" />
      </section>

      {/* ─── FIRM INTRODUCTION ────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <Reveal>
              <div>
                <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
                  About the Firm
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--brand-primary)] leading-tight mb-6">
                  A Legacy of Legal Excellence
                </h2>
                <div className="w-16 h-1 bg-[var(--brand-accent)] mb-8" />
                <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed mb-5 text-base">
                  MIT Legal Consultants is a premier legal consultancy providing comprehensive legal services
                  to individuals, businesses, organizations, and international clients. We are committed to
                  delivering practical, strategic, and results-oriented legal solutions.
                </p>
                <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed mb-8 text-base">
                  Our attorneys combine deep subject-matter expertise with a client-first philosophy,
                  ensuring that every engagement is handled with the highest standards of professionalism,
                  integrity, and confidentiality.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-body font-semibold text-sm hover:text-[var(--brand-accent)] transition-colors duration-200 group"
                >
                  Learn More About the Firm
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </Reveal>

            {/* Right: Visual card */}
            <Reveal delay={0.15}>
              <div className="relative">
                <div className="bg-[var(--brand-primary)] rounded-2xl p-10 shadow-[0_4px_24px_rgba(10,31,68,0.18)]">
                  <div className="absolute -top-4 -left-4 w-24 h-24 rounded-xl bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/20" />
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/20" />
                  <div className="relative z-10">
                    <blockquote className="font-heading text-xl sm:text-2xl text-white leading-relaxed italic mb-6">
                      &ldquo;We do not simply practice law. We craft solutions that protect what matters most to our clients.&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--brand-accent)] flex items-center justify-center flex-shrink-0">
                        <Scale size={18} className="text-[var(--brand-primary)]" />
                      </div>
                      <div>
                        <p className="font-body font-semibold text-white text-sm">MIT Legal Consultants</p>
                        <p className="font-body text-white/50 text-xs">Trusted Counsel. Proven Results.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── PRACTICE AREAS ───────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
                Our Expertise
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--brand-primary)] leading-tight mb-4">
                Seven Areas of Legal Excellence
              </h2>
              <p className="font-body text-[var(--brand-muted-foreground)] max-w-2xl mx-auto leading-relaxed">
                From corporate transactions to international law, our practice spans the full spectrum of
                legal needs for individuals, businesses, and institutions.
              </p>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {practiceAreas.map((area, index) => {
              const Icon = getIcon(area.icon);
              return (
                <motion.div key={area.id} variants={fadeInUp}>
                  <Link
                    href={area.href}
                    className="group flex flex-col h-full bg-white rounded-xl p-6 border border-[var(--brand-border)] hover:border-[var(--brand-accent)]/40 shadow-[0_1px_3px_rgba(10,31,68,0.06),0_8px_24px_-8px_rgba(10,31,68,0.10)] hover:shadow-[0_4px_12px_rgba(10,31,68,0.10),0_20px_48px_-12px_rgba(10,31,68,0.18)] transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[var(--brand-primary)]/8 flex items-center justify-center mb-4 group-hover:bg-[var(--brand-accent)]/10 transition-colors duration-300">
                      <Icon size={22} className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-2 leading-snug group-hover:text-[var(--brand-accent)] transition-colors duration-300">
                      {area.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed flex-1">
                      {area.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-[var(--brand-accent)] text-xs font-body font-semibold">
                      Learn More
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}

            {/* View all card */}
            <motion.div key="view-all" variants={fadeInUp}>
              <Link
                href="/practice-areas"
                className="group flex flex-col items-center justify-center h-full bg-[var(--brand-primary)] rounded-xl p-6 border border-[var(--brand-primary)] hover:bg-[#0d2a5e] shadow-[0_1px_3px_rgba(10,31,68,0.12),0_8px_24px_-8px_rgba(10,31,68,0.20)] transition-all duration-300 hover:-translate-y-1 min-h-[180px]"
              >
                <div className="w-12 h-12 rounded-full border-2 border-[var(--brand-accent)]/40 flex items-center justify-center mb-4 group-hover:border-[var(--brand-accent)] transition-colors duration-300">
                  <ArrowRight size={20} className="text-[var(--brand-accent)]" />
                </div>
                <p className="font-heading text-lg font-semibold text-white text-center leading-snug">
                  View All Practice Areas
                </p>
                <p className="font-body text-white/50 text-xs mt-2 text-center">
                  Explore our full range of expertise
                </p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
                Why MIT Legal
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--brand-primary)] leading-tight mb-4">
                The Standard of Excellence
              </h2>
              <p className="font-body text-[var(--brand-muted-foreground)] max-w-2xl mx-auto leading-relaxed">
                We combine deep legal expertise with a genuine commitment to client outcomes. Here is what
                sets MIT Legal Consultants apart.
              </p>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="flex gap-5 p-6 rounded-xl border border-[var(--brand-border)] bg-[var(--brand-background)] hover:border-[var(--brand-accent)]/30 hover:shadow-[0_4px_20px_rgba(10,31,68,0.08)] transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center">
                    <Icon size={20} className="text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="relative py-24 bg-[var(--brand-primary)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-[var(--brand-accent)]/30" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--brand-accent)]/30" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 70% 50%, var(--brand-accent) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
              Get Started
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Discuss Your Legal Matter?
            </h2>
            <p className="font-body text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Our attorneys are available to provide confidential, strategic guidance tailored to your
              specific circumstances. Contact us today to schedule a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-body font-medium text-sm rounded hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                View Practice Areas
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CONTACT STRIP ────────────────────────────────────────────────── */}
      <section className="py-16 bg-[var(--brand-background)] border-t border-[var(--brand-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <Reveal>
              <a
                href="tel:+233300000000"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--brand-primary)]/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-accent)]/10 transition-colors duration-200">
                  <Phone size={20} className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-200" />
                </div>
                <div>
                  <p className="font-body text-xs text-[var(--brand-muted-foreground)] uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="font-body font-semibold text-[var(--brand-primary)] text-sm">+233 (0) 30 000 0000</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <a
                href="mailto:info@mitlegal.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--brand-primary)]/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-accent)]/10 transition-colors duration-200">
                  <Mail size={20} className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-200" />
                </div>
                <div>
                  <p className="font-body text-xs text-[var(--brand-muted-foreground)] uppercase tracking-wider mb-0.5">Email</p>
                  <p className="font-body font-semibold text-[var(--brand-primary)] text-sm">info@mitlegal.com</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--brand-primary)]/8 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[var(--brand-primary)]" />
                </div>
                <div>
                  <p className="font-body text-xs text-[var(--brand-muted-foreground)] uppercase tracking-wider mb-0.5">Office</p>
                  <p className="font-body font-semibold text-[var(--brand-primary)] text-sm">14 Legal Avenue, Suite 300, Accra</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
