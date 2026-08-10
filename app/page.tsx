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
              businesses, and governments. Seven practice areas. One trusted firm.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,76,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-body font-medium text-sm rounded hover:border-white/60 hover:bg-white/5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                Explore Practice Areas
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 pt-10 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg mx-auto"
            >
              {[
                { value: "7", label: "Practice Areas" },
                { value: "20+", label: "Years Experience" },
                { value: "100%", label: "Client Confidentiality" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-3xl font-bold text-[var(--brand-accent)]">{stat.value}</p>
                  <p className="font-body text-xs text-white/60 mt-1 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--brand-background)] to-transparent" />
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
                  MIT Legal Consultants is a full-service legal consultancy committed to delivering practical,
                  strategic, and results-oriented legal solutions. We serve individuals, corporations, NGOs,
                  and government bodies across a broad spectrum of legal disciplines.
                </p>
                <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed mb-8 text-pretty">
                  Our attorneys combine deep subject-matter expertise with a client-first philosophy, ensuring
                  every engagement is handled with the highest standards of professionalism and confidentiality.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-body font-semibold text-sm border-b-2 border-[var(--brand-accent)] pb-0.5 hover:text-[var(--brand-accent)] transition-colors duration-200"
                >
                  Learn More About Us
                  <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, label: "Proven Excellence", desc: "Decades of successful outcomes across complex legal matters." },
                  { icon: Shield, label: "Ethical Practice", desc: "Unwavering commitment to integrity and client confidentiality." },
                  { icon: Globe, label: "Global Reach", desc: "Cross-border expertise spanning multiple jurisdictions." },
                  { icon: Users, label: "Expert Team", desc: "Specialized attorneys across seven distinct practice areas." },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-[var(--brand-card)] border border-[var(--brand-border)] rounded-xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(10,31,68,0.15)] transition-shadow duration-300"
                  >
                    <item.icon size={22} className="text-[var(--brand-accent)] mb-3" />
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
      <section className="py-24 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
              What We Do
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance">
              Our Practice Areas
            </h2>
            <p className="font-body text-[var(--brand-muted-foreground)] mt-4 max-w-2xl mx-auto leading-relaxed text-pretty">
              Comprehensive legal expertise across seven specialized disciplines, tailored to meet the
              diverse needs of our clients.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {practiceAreas.map((area, index) => {
              const Icon = getIcon(area.icon);
              return (
                <Reveal key={area.id} delay={index * 0.05}>
                  <Link
                    href={area.href}
                    className="group flex flex-col h-full bg-[var(--brand-card)] border border-[var(--brand-border)] rounded-xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-8px_rgba(10,31,68,0.18)] hover:border-[var(--brand-accent)]/40 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[var(--brand-primary)]/8 flex items-center justify-center mb-4 group-hover:bg-[var(--brand-accent)]/10 transition-colors duration-300">
                      <Icon size={20} className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading text-base font-semibold text-[var(--brand-primary)] mb-2 leading-snug">
                      {area.title}
                    </h3>
                    <p className="font-body text-xs text-[var(--brand-muted-foreground)] leading-relaxed flex-1">
                      {area.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-[var(--brand-accent)] text-xs font-body font-semibold group-hover:gap-2 transition-all duration-200">
                      Learn More <ArrowRight size={12} />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="text-center mt-10">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 px-7 py-3 border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] font-body font-semibold text-sm rounded hover:bg-[var(--brand-primary)] hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
            >
              View All Practice Areas
              <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--brand-primary)] relative overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1E40AF 0%, transparent 50%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
              Why MIT Legal
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight text-balance">
              Why Clients Choose Us
            </h2>
            <p className="font-body text-white/60 mt-4 max-w-2xl mx-auto leading-relaxed text-pretty">
              We combine legal excellence with a genuine commitment to our clients' success.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.07}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-[var(--brand-accent)]/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/15 flex items-center justify-center mb-4">
                    <item.icon size={20} className="text-[var(--brand-accent)]" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-white/60 leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM TEASER ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <Reveal className="lg:col-span-2">
              <div>
                <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
                  Our Attorneys
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-5">
                  Meet the Legal Minds Behind MIT
                </h2>
                <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed mb-8 text-pretty">
                  Our team of experienced attorneys brings specialized expertise across every practice area,
                  ensuring you receive counsel from the right expert for your matter.
                </p>
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded hover:bg-[#0d2a5e] transition-all duration-300 shadow-[0_4px_16px_rgba(10,31,68,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                >
                  Meet Our Team
                  <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-3">
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { initials: "MT", name: "M. Ibrahim Tariq", role: "Partner" },
                  { initials: "SA", name: "Senior Associate", role: "Corporate Law" },
                  { initials: "JD", name: "Legal Counsel", role: "Litigation" },
                ].map((member) => (
                  <div
                    key={member.initials}
                    className="bg-[var(--brand-card)] border border-[var(--brand-border)] rounded-xl p-5 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(10,31,68,0.15)] transition-shadow duration-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-[var(--brand-primary)] flex items-center justify-center mx-auto mb-3">
                      <span className="font-heading text-lg font-bold text-[var(--brand-accent)]">{member.initials}</span>
                    </div>
                    <p className="font-heading text-sm font-semibold text-[var(--brand-primary)]">{member.name}</p>
                    <p className="font-body text-xs text-[var(--brand-muted-foreground)] mt-0.5">{member.role}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CONTACT / CTA SECTION ────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: CTA copy */}
            <Reveal>
              <div>
                <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
                  Get in Touch
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-5">
                  Ready to Discuss Your Legal Matter?
                </h2>
                <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed mb-8 text-pretty">
                  Our attorneys are available to provide confidential, expert guidance tailored to your
                  specific circumstances. Reach out today to schedule a consultation.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center flex-shrink-0">
                      <Phone size={15} className="text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-[var(--brand-muted-foreground)] uppercase tracking-wide">Phone</p>
                      <a href="tel:+00" className="font-body text-sm font-semibold text-[var(--brand-primary)] hover:text-[var(--brand-accent)] transition-colors duration-200">
                        +00
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center flex-shrink-0">
                      <Mail size={15} className="text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-[var(--brand-muted-foreground)] uppercase tracking-wide">Email</p>
                      <a href="mailto:xyz@xyz.com" className="font-body text-sm font-semibold text-[var(--brand-primary)] hover:text-[var(--brand-accent)] transition-colors duration-200">
                        xyz@xyz.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center flex-shrink-0">
                      <MapPin size={15} className="text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-[var(--brand-muted-foreground)] uppercase tracking-wide">Office</p>
                      <p className="font-body text-sm font-semibold text-[var(--brand-primary)]">
                        XYZ Address
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-8 px-7 py-3 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-300 shadow-[0_4px_16px_rgba(201,168,76,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
                >
                  Contact Us Today
                  <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>

            {/* Right: Quick inquiry form */}
            <Reveal delay={0.1}>
              <div className="bg-[var(--brand-card)] border border-[var(--brand-border)] rounded-2xl p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_32px_-8px_rgba(10,31,68,0.12)]">
                <h3 className="font-heading text-xl font-semibold text-[var(--brand-primary)] mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-xs font-semibold text-[var(--brand-foreground)] uppercase tracking-wide mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 text-sm font-body border border-[var(--brand-border)] rounded-lg bg-[var(--brand-background)] text-[var(--brand-foreground)] placeholder:text-[var(--brand-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]/30 focus:border-[var(--brand-primary)] transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs font-semibold text-[var(--brand-foreground)] uppercase tracking-wide mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 text-sm font-body border border-[var(--brand-border)] rounded-lg bg-[var(--brand-background)] text-[var(--brand-foreground)] placeholder:text-[var(--brand-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]/30 focus:border-[var(--brand-primary)] transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-body text-xs font-semibold text-[var(--brand-foreground)] uppercase tracking-wide mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      className="w-full px-4 py-2.5 text-sm font-body border border-[var(--brand-border)] rounded-lg bg-[var(--brand-background)] text-[var(--brand-foreground)] placeholder:text-[var(--brand-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]/30 focus:border-[var(--brand-primary)] transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-semibold text-[var(--brand-foreground)] uppercase tracking-wide mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your legal matter..."
                      className="w-full px-4 py-2.5 text-sm font-body border border-[var(--brand-border)] rounded-lg bg-[var(--brand-background)] text-[var(--brand-foreground)] placeholder:text-[var(--brand-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]/30 focus:border-[var(--brand-primary)] transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[var(--brand-primary)] text-white font-body font-bold text-sm rounded-lg hover:bg-[#0d2a5e] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
                  >
                    Send Message
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
