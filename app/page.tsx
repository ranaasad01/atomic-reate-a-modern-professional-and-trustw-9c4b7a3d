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
              MIT Legal Consultants delivers strategic, results-oriented legal counsel to individuals,
              corporations, and governments across seven specialized practice areas.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-300 shadow-[0_4px_24px_rgba(201,168,76,0.35)] hover:shadow-[0_6px_32px_rgba(201,168,76,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
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

        {/* Decorative bottom fade */}
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
                  MIT Legal Consultants is a professional legal consultancy committed to delivering practical,
                  strategic, and results-oriented legal solutions. We serve individuals, businesses,
                  organizations, and international clients with the highest standards of professionalism
                  and client confidentiality.
                </p>
                <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed mb-8 text-pretty">
                  Our multidisciplinary team brings deep expertise across seven distinct practice areas,
                  enabling us to provide comprehensive legal counsel under one roof — from corporate
                  transactions to international dispute resolution.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-body font-semibold text-sm hover:text-[var(--brand-accent)] transition-colors duration-200 group"
                >
                  Learn More About Us
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative">
                <div className="bg-[var(--brand-primary)] rounded-2xl p-10 text-white shadow-[0_8px_40px_rgba(10,31,68,0.18)]">
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { label: "Mission", text: "To deliver practical, strategic legal solutions with integrity and excellence." },
                      { label: "Vision", text: "To be the most trusted legal consultancy for clients across all sectors." },
                      { label: "Values", text: "Integrity, confidentiality, excellence, and unwavering client commitment." },
                      { label: "Approach", text: "Tailored strategies built around each client's unique goals and circumstances." },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="w-8 h-0.5 bg-[var(--brand-accent)] mb-3" />
                        <h3 className="font-heading text-[var(--brand-accent)] text-sm font-semibold uppercase tracking-widest mb-2">
                          {item.label}
                        </h3>
                        <p className="font-body text-white/70 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--brand-accent)]/10 rounded-2xl -z-10" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── PRACTICE AREAS ───────────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
                Our Expertise
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-4">
                Seven Areas of Legal Excellence
              </h2>
              <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed text-pretty">
                From corporate transactions to international law, our attorneys provide specialized
                counsel across a comprehensive range of legal disciplines.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {practiceAreas.map((area, index) => {
              const Icon = getIcon(area.icon);
              return (
                <Reveal key={area.id} delay={index * 0.07}>
                  <Link
                    href={area.href}
                    className="group block bg-[var(--brand-card)] rounded-xl p-6 border border-[var(--brand-border)] hover:border-[var(--brand-accent)]/50 hover:shadow-[0_4px_24px_rgba(10,31,68,0.12)] transition-all duration-300 h-full"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[var(--brand-primary)]/8 flex items-center justify-center mb-4 group-hover:bg-[var(--brand-accent)]/10 transition-colors duration-300">
                      <Icon size={22} className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading text-[var(--brand-primary)] text-lg font-semibold mb-2 leading-snug group-hover:text-[var(--brand-accent)] transition-colors duration-300">
                      {area.title}
                    </h3>
                    <p className="font-body text-[var(--brand-muted-foreground)] text-sm leading-relaxed mb-4">
                      {area.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-body font-semibold text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-200">
                      Learn More <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
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
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded hover:bg-[#0d2a5e] transition-all duration-300 shadow-[0_2px_12px_rgba(10,31,68,0.2)] hover:shadow-[0_4px_20px_rgba(10,31,68,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
              >
                View All Practice Areas
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--brand-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
                Why MIT Legal
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight text-balance mb-4">
                The Standard of Legal Excellence
              </h2>
              <p className="font-body text-white/65 leading-relaxed text-pretty">
                We combine deep legal expertise with a genuine commitment to client outcomes,
                delivering counsel that is both strategically sound and practically effective.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-7 hover:bg-white/8 hover:border-[var(--brand-accent)]/30 transition-all duration-300">
                    <div className="w-11 h-11 rounded-lg bg-[var(--brand-accent)]/15 flex items-center justify-center mb-5">
                      <Icon size={22} className="text-[var(--brand-accent)]" />
                    </div>
                    <h3 className="font-heading text-white text-xl font-semibold mb-3">
                      {item.title}
                    </h3>
                    <p className="font-body text-white/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
                  Get in Touch
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                  Ready to Discuss Your Legal Matter?
                </h2>
                <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed mb-8 text-pretty">
                  Our attorneys are available to provide confidential, expert guidance tailored to your
                  specific circumstances. Reach out today to schedule a consultation.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: Phone, label: "Phone", value: "+1 (555) 000-0000" },
                    { icon: Mail, label: "Email", value: "info@mitlegalconsultants.com" },
                    { icon: MapPin, label: "Office", value: "123 Legal Avenue, Suite 400" },
                  ].map((contact) => (
                    <div key={contact.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/8 flex items-center justify-center flex-shrink-0">
                        <contact.icon size={18} className="text-[var(--brand-primary)]" />
                      </div>
                      <div>
                        <p className="font-body text-xs text-[var(--brand-muted-foreground)] uppercase tracking-wider">{contact.label}</p>
                        <p className="font-body text-[var(--brand-foreground)] font-medium text-sm">{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-300 shadow-[0_4px_24px_rgba(201,168,76,0.3)] hover:shadow-[0_6px_32px_rgba(201,168,76,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
                >
                  Schedule a Consultation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="bg-[var(--brand-card)] rounded-2xl p-8 border border-[var(--brand-border)] shadow-[0_4px_32px_rgba(10,31,68,0.08)]">
                <h3 className="font-heading text-[var(--brand-primary)] text-2xl font-semibold mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-xs font-semibold text-[var(--brand-foreground)] uppercase tracking-wider mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-lg border border-[var(--brand-border)] bg-[var(--brand-background)] font-body text-sm text-[var(--brand-foreground)] placeholder:text-[var(--brand-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]/30 focus:border-[var(--brand-primary)] transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs font-semibold text-[var(--brand-foreground)] uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-[var(--brand-border)] bg-[var(--brand-background)] font-body text-sm text-[var(--brand-foreground)] placeholder:text-[var(--brand-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]/30 focus:border-[var(--brand-primary)] transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-body text-xs font-semibold text-[var(--brand-foreground)] uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-lg border border-[var(--brand-border)] bg-[var(--brand-background)] font-body text-sm text-[var(--brand-foreground)] placeholder:text-[var(--brand-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]/30 focus:border-[var(--brand-primary)] transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-semibold text-[var(--brand-foreground)] uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please describe your legal matter..."
                      className="w-full px-4 py-3 rounded-lg border border-[var(--brand-border)] bg-[var(--brand-background)] font-body text-sm text-[var(--brand-foreground)] placeholder:text-[var(--brand-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]/30 focus:border-[var(--brand-primary)] transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[var(--brand-primary)] text-white font-body font-bold text-sm rounded-lg hover:bg-[#0d2a5e] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
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
