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
      `${BRAND_NAME} guided our company through a complex cross-border acquisition with exceptional skill. Their attention to detail and strategic thinking saved us from significant risk.`,
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
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col items-center gap-6">
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-accent)]/40 bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] text-sm font-body font-semibold tracking-widest uppercase">
                <Scale size={14} /> Premier Legal Services
              </span>
            </motion.div>

            {/* Firm Name */}
            <motion.h1 variants={fadeInUp} className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
              {BRAND_NAME}
            </motion.h1>

            {/* Tagline */}
            <motion.p variants={fadeInUp} className="font-heading text-xl sm:text-2xl text-[var(--brand-accent)] font-medium italic">
              {BRAND_TAGLINE}
            </motion.p>

            {/* Description */}
            <motion.p variants={fadeInUp} className="font-body text-white/75 text-lg max-w-2xl leading-relaxed">
              Providing comprehensive, strategic, and results-oriented legal solutions to individuals, businesses, and governments with the highest standards of professionalism and integrity.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-base rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/practice-areas"
                className="px-8 py-4 border border-white/30 text-white font-body font-semibold text-base rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                Explore Practice Areas
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-white/10 w-full max-w-2xl">
              {trustStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-3xl font-bold text-[var(--brand-accent)]">{stat.value}</div>
                  <div className="font-body text-white/60 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--brand-background)] to-transparent" />
      </section>

      {/* ─── FIRM INTRODUCTION ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <div>
                <span className="inline-block text-[var(--brand-accent)] font-body font-semibold text-xs uppercase tracking-widest mb-3">
                  About the Firm
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--brand-primary)] leading-tight mb-6">
                  A Firm Built on Expertise, Ethics, and Results
                </h2>
                <p className="font-body text-[var(--brand-muted-foreground)] text-lg leading-relaxed mb-5">
                  MIT Legal Consultants is a full-service legal consultancy dedicated to delivering practical, strategic, and results-oriented legal solutions. We serve individuals, businesses, governments, and international organizations across a broad spectrum of legal disciplines.
                </p>
                <p className="font-body text-[var(--brand-muted-foreground)] text-base leading-relaxed mb-8">
                  Our team combines deep legal expertise with a genuine commitment to client success. We approach every matter with rigor, discretion, and a focus on achieving the best possible outcome.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
                >
                  Learn More About Us <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, label: "Award-Winning Counsel", desc: "Recognized for excellence in legal practice" },
                  { icon: Shield, label: "Ethical Standards", desc: "Unwavering commitment to professional integrity" },
                  { icon: Globe, label: "Global Reach", desc: "Cross-border expertise across jurisdictions" },
                  { icon: Users, label: "Client Focus", desc: "Tailored strategies for every client" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-5 bg-[var(--brand-card)] rounded-xl border border-[var(--brand-border)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-8px_rgba(10,31,68,0.12)] transition-shadow duration-300"
                  >
                    <item.icon size={24} className="text-[var(--brand-accent)] mb-3" />
                    <p className="font-heading text-sm font-semibold text-[var(--brand-primary)] mb-1">{item.label}</p>
                    <p className="font-body text-xs text-[var(--brand-muted-foreground)] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── PRACTICE AREAS ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block text-[var(--brand-accent)] font-body font-semibold text-xs uppercase tracking-widest mb-3">
                Our Expertise
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--brand-primary)] leading-tight mb-4">
                Practice Areas
              </h2>
              <p className="font-body text-[var(--brand-muted-foreground)] text-lg max-w-2xl mx-auto leading-relaxed">
                Comprehensive legal services across seven specialized disciplines, delivered with precision and dedication.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {practiceAreas.map((area, index) => {
              const Icon = getIcon(area.icon);
              return (
                <Reveal key={area.id} delay={index * 0.05}>
                  <Link
                    href={area.href}
                    className="group flex flex-col p-6 bg-[var(--brand-card)] rounded-xl border border-[var(--brand-border)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_40px_-8px_rgba(10,31,68,0.15)] hover:border-[var(--brand-accent)]/40 transition-all duration-300 h-full"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[var(--brand-primary)]/8 flex items-center justify-center mb-4 group-hover:bg-[var(--brand-accent)]/15 transition-colors duration-300">
                      <Icon size={22} className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading text-base font-semibold text-[var(--brand-primary)] mb-2 leading-snug">
                      {area.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed flex-1">
                      {area.shortDescription}
                    </p>
                    <div className="flex items-center gap-1 mt-4 text-[var(--brand-accent)] text-xs font-body font-semibold">
                      Learn More <ArrowRight size={12} />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
            {/* View all card */}
            <Reveal delay={practiceAreas.length * 0.05}>
              <Link
                href="/practice-areas"
                className="group flex flex-col items-center justify-center p-6 bg-[var(--brand-primary)] rounded-xl border border-[var(--brand-primary)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)] hover:bg-[var(--brand-primary)]/90 transition-all duration-300 min-h-[180px]"
              >
                <ArrowRight size={28} className="text-[var(--brand-accent)] mb-3 group-hover:translate-x-1 transition-transform duration-200" />
                <p className="font-heading text-white text-base font-semibold text-center">View All Practice Areas</p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[var(--brand-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block text-[var(--brand-accent)] font-body font-semibold text-xs uppercase tracking-widest mb-3">
                Why MIT Legal
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Why Choose Us
              </h2>
              <p className="font-body text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
                We combine legal excellence with a client-first philosophy to deliver outcomes that matter.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.07}>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-[var(--brand-accent)]/30 transition-all duration-300">
                  <item.icon size={28} className="text-[var(--brand-accent)] mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="font-body text-white/65 text-sm leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block text-[var(--brand-accent)] font-body font-semibold text-xs uppercase tracking-widest mb-3">
                Client Voices
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--brand-primary)] leading-tight mb-4">
                What Our Clients Say
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.id} delay={index * 0.1}>
                <div className="flex flex-col p-7 bg-[var(--brand-card)] rounded-xl border border-[var(--brand-border)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)] h-full">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={14} className="text-[var(--brand-accent)] fill-[var(--brand-accent)]" />
                    ))}
                  </div>
                  <blockquote className="font-body text-[var(--brand-foreground)] text-sm leading-relaxed flex-1 mb-5">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="border-t border-[var(--brand-border)] pt-4">
                    <p className="font-heading text-sm font-semibold text-[var(--brand-primary)]">{testimonial.author}</p>
                    <p className="font-body text-xs text-[var(--brand-muted-foreground)] mt-0.5">{testimonial.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <span className="inline-block text-[var(--brand-accent)] font-body font-semibold text-xs uppercase tracking-widest mb-3">
                  Get in Touch
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--brand-primary)] leading-tight mb-5">
                  Ready to Discuss Your Legal Matter?
                </h2>
                <p className="font-body text-[var(--brand-muted-foreground)] text-lg leading-relaxed mb-8">
                  Our team is available to provide confidential legal advice and representation. Reach out today to schedule a consultation.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-[var(--brand-muted-foreground)] uppercase tracking-wide">Phone</p>
                      <p className="font-body text-sm font-semibold text-[var(--brand-foreground)]">+1 (555) 000-0000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-[var(--brand-muted-foreground)] uppercase tracking-wide">Email</p>
                      <p className="font-body text-sm font-semibold text-[var(--brand-foreground)]">info@mitlegalconsultants.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-[var(--brand-muted-foreground)] uppercase tracking-wide">Office</p>
                      <p className="font-body text-sm font-semibold text-[var(--brand-foreground)]">Available upon inquiry</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="bg-[var(--brand-card)] rounded-2xl border border-[var(--brand-border)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_48px_-12px_rgba(10,31,68,0.12)] p-8">
                <h3 className="font-heading text-2xl font-semibold text-[var(--brand-primary)] mb-6">Send Us a Message</h3>
                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs font-semibold text-[var(--brand-foreground)] uppercase tracking-wide mb-1.5 block">Full Name</label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-lg border border-[var(--brand-border)] bg-[var(--brand-background)] font-body text-sm text-[var(--brand-foreground)] placeholder:text-[var(--brand-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs font-semibold text-[var(--brand-foreground)] uppercase tracking-wide mb-1.5 block">Email Address</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-[var(--brand-border)] bg-[var(--brand-background)] font-body text-sm text-[var(--brand-foreground)] placeholder:text-[var(--brand-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold text-[var(--brand-foreground)] uppercase tracking-wide mb-1.5 block">Subject</label>
                    <input
                      type="text"
                      placeholder="Brief subject of your inquiry"
                      className="w-full px-4 py-3 rounded-lg border border-[var(--brand-border)] bg-[var(--brand-background)] font-body text-sm text-[var(--brand-foreground)] placeholder:text-[var(--brand-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold text-[var(--brand-foreground)] uppercase tracking-wide mb-1.5 block">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Please describe your legal matter..."
                      className="w-full px-4 py-3 rounded-lg border border-[var(--brand-border)] bg-[var(--brand-background)] font-body text-sm text-[var(--brand-foreground)] placeholder:text-[var(--brand-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
