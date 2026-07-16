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
        className="relative min-h-[92vh] flex items-center justify-center bg-[var(--brand-primary)] overflow-hidden"
        aria-label={`${BRAND_NAME} — Hero`}
      >
        {/* Decorative background layers */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,168,76,0.12) 0%, transparent 65%), radial-gradient(ellipse 60% 80% at 10% 80%, rgba(255,255,255,0.04) 0%, transparent 60%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.6) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — copy */}
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <motion.div variants={heroChild} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/25 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)] animate-pulse" />
                <span className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest">
                  {BRAND_NAME}
                </span>
              </motion.div>

              <motion.h1
                variants={heroChild}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
              >
                Trusted Counsel.
                <br />
                <span className="text-[var(--brand-accent)]">Proven Results.</span>
              </motion.h1>

              <motion.p
                variants={heroChild}
                className="font-body text-white/70 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
              >
                {BRAND_NAME} delivers strategic, results-oriented legal solutions
                across seven practice areas — serving individuals, corporations,
                governments, and international clients with the highest standards
                of professionalism and integrity.
              </motion.p>

              <motion.div
                variants={heroChild}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 shadow-lg shadow-[var(--brand-accent)]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
                >
                  Schedule a Consultation
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/practice-areas"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Explore Practice Areas
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — trust stats */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="hidden lg:grid grid-cols-2 gap-5"
            >
              {trustStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  className="bg-white/[0.06] border border-white/10 rounded-2xl p-7 text-center backdrop-blur-sm hover:bg-white/[0.09] transition-colors duration-300"
                >
                  <p className="font-heading text-4xl font-bold text-[var(--brand-accent)] mb-2">
                    {stat.value}
                  </p>
                  <p className="font-body text-white/60 text-sm leading-snug">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--brand-background))",
          }}
        />
      </section>

      {/* ─── FIRM INTRODUCTION ────────────────────────────────────────────── */}
      <section
        id="about"
        className="py-24 md:py-32 bg-[var(--brand-background)]"
        aria-labelledby="intro-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <Reveal>
              <div>
                <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-4">
                  About the Firm
                </p>
                <h2
                  id="intro-heading"
                  className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--brand-primary)] leading-tight mb-6"
                >
                  A Legacy of Legal Excellence
                </h2>
                <p className="font-body text-[var(--brand-muted-foreground)] text-lg leading-relaxed mb-5">
                  {BRAND_NAME} is a premier legal consultancy providing comprehensive
                  legal services to individuals, businesses, organizations, and
                  international clients. Founded on the principles of integrity,
                  excellence, and client-centered service, we have built a reputation
                  as trusted advisors across the most complex legal landscapes.
                </p>
                <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed mb-8">
                  Our multidisciplinary team of attorneys brings deep specialization
                  across seven distinct practice areas, enabling us to deliver
                  practical, strategic, and results-oriented legal solutions under
                  one roof — from corporate transactions and international arbitration
                  to family matters and legislative drafting.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-primary)] text-white font-body font-medium text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                  >
                    Learn About {BRAND_NAME}
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/team"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--brand-border)] text-[var(--brand-primary)] font-body font-medium text-sm rounded-lg hover:bg-[var(--brand-muted)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                  >
                    Meet Our Team
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Right — stats grid (mobile visible) */}
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-5">
                {trustStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[var(--brand-card)] border border-[var(--brand-border)] rounded-2xl p-7 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <p className="font-heading text-4xl font-bold text-[var(--brand-primary)] mb-2">
                      {stat.value}
                    </p>
                    <p className="font-body text-[var(--brand-muted-foreground)] text-sm leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── PRACTICE AREAS ───────────────────────────────────────────────── */}
      <section
        id="practice-areas"
        className="py-24 md:py-32 bg-white"
        aria-labelledby="pa-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-4">
                Our Expertise
              </p>
              <h2
                id="pa-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--brand-primary)] leading-tight mb-5"
              >
                Seven Practice Areas.
                <br />
                One Trusted Firm.
              </h2>
              <p className="font-body text-[var(--brand-muted-foreground)] text-lg leading-relaxed">
                {BRAND_NAME} offers comprehensive legal counsel across a full
                spectrum of practice areas, ensuring every client need is met
                with specialist expertise.
              </p>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {practiceAreas.map((area) => {
              const Icon = getIcon(area.icon);
              return (
                <motion.div key={area.id} variants={fadeInUp}>
                  <Link
                    href={area.href}
                    className="group flex flex-col h-full bg-[var(--brand-card)] border border-[var(--brand-border)] rounded-2xl p-7 hover:border-[var(--brand-accent)]/40 hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                    aria-label={`Learn about ${area.title} at ${BRAND_NAME}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-muted)] flex items-center justify-center mb-5 group-hover:bg-[var(--brand-accent)]/10 transition-colors duration-300">
                      <Icon size={22} className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-3 leading-snug group-hover:text-[var(--brand-accent)] transition-colors duration-300">
                      {area.title}
                    </h3>
                    <p className="font-body text-[var(--brand-muted-foreground)] text-sm leading-relaxed flex-1 mb-5">
                      {area.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[var(--brand-accent)] font-body font-semibold text-xs uppercase tracking-wide group-hover:gap-2.5 transition-all duration-200">
                      Learn More <ArrowRight size={13} />
                    </span>
                  </Link>
                </motion.div>
              );
            })}

            {/* View all card */}
            <motion.div variants={fadeInUp}>
              <Link
                href="/practice-areas"
                className="group flex flex-col items-center justify-center h-full bg-[var(--brand-primary)] rounded-2xl p-7 hover:bg-[var(--brand-primary)]/90 transition-all duration-300 min-h-[220px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
                aria-label={`View all practice areas at ${BRAND_NAME}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)]/15 flex items-center justify-center mb-4 group-hover:bg-[var(--brand-accent)]/25 transition-colors duration-300">
                  <ArrowRight size={22} className="text-[var(--brand-accent)]" />
                </div>
                <p className="font-heading text-white text-lg font-semibold text-center mb-2">
                  View All Practice Areas
                </p>
                <p className="font-body text-white/50 text-sm text-center">
                  Explore the full scope of {BRAND_NAME}&apos;s legal expertise
                </p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section
        id="why-us"
        className="py-24 md:py-32 bg-[var(--brand-primary)] relative overflow-hidden"
        aria-labelledby="why-heading"
      >
        {/* Decorative */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, var(--brand-accent) 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-4">
                Why {BRAND_NAME}
              </p>
              <h2
                id="why-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
              >
                The {BRAND_NAME} Difference
              </h2>
              <p className="font-body text-white/60 text-lg leading-relaxed">
                We combine deep legal expertise with a genuine commitment to
                client outcomes — delivering counsel that is not only legally
                sound but strategically aligned with your goals.
              </p>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-[var(--brand-accent)]/30 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[var(--brand-accent)]/10 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[var(--brand-accent)]" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-white/55 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section
        id="testimonials"
        className="py-24 md:py-32 bg-[var(--brand-background)]"
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-4">
                Client Testimonials
              </p>
              <h2
                id="testimonials-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--brand-primary)] leading-tight"
              >
                What Our Clients Say
              </h2>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-3 gap-7"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
                className="bg-[var(--brand-card)] border border-[var(--brand-border)] rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-[var(--brand-accent)] fill-[var(--brand-accent)]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="font-body text-[var(--brand-foreground)] text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-5 border-t border-[var(--brand-border)]">
                  <div className="w-10 h-10 rounded-full bg-[var(--brand-primary)] flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-white text-sm font-bold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-[var(--brand-primary)] text-sm">
                      {testimonial.author}
                    </p>
                    <p className="font-body text-[var(--brand-muted-foreground)] text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TEAM PREVIEW ─────────────────────────────────────────────────── */}
      <section
        id="team"
        className="py-24 md:py-32 bg-white"
        aria-labelledby="team-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-4">
                Our Attorneys
              </p>
              <h2
                id="team-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--brand-primary)] leading-tight mb-5"
              >
                Meet the {BRAND_NAME} Team
              </h2>
              <p className="font-body text-[var(--brand-muted-foreground)] text-lg leading-relaxed">
                Our attorneys combine academic excellence with practical expertise
                to deliver outstanding results for every client.
              </p>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-12"
          >
            {attorneys.slice(0, 4).map((attorney) => (
              <motion.div
                key={attorney.id}
                variants={scaleIn}
                className="bg-[var(--brand-card)] border border-[var(--brand-border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                {/* Avatar */}
                <div className="bg-[var(--brand-primary)] h-48 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[var(--brand-accent)]/20 border-2 border-[var(--brand-accent)]/40 flex items-center justify-center">
                    <span className="font-heading text-3xl font-bold text-[var(--brand-accent)]">
                      {attorney.name
                        .split(" ")
                        .filter((_, i, arr) => i === 0 || i === arr.length - 1)
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-1">
                    {attorney.name}
                  </h3>
                  <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-wide mb-3">
                    {attorney.title}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {attorney.specializations.slice(0, 2).map((spec) => (
                      <span
                        key={spec}
                        className="font-body text-[10px] px-2 py-1 bg-[var(--brand-muted)] text-[var(--brand-muted-foreground)] rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <Reveal>
            <div className="text-center">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-primary)] text-white font-body font-medium text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                aria-label={`View all attorneys at ${BRAND_NAME}`}
              >
                View All Attorneys
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────────────────── */}
      <section
        className="py-24 md:py-32 bg-[var(--brand-accent)] relative overflow-hidden"
        aria-labelledby="cta-heading"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, #ffffff 0%, transparent 60%), radial-gradient(circle at 70% 50%, #ffffff 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="font-body text-[var(--brand-primary)]/70 text-xs font-semibold uppercase tracking-widest mb-4">
              Get Started Today
            </p>
            <h2
              id="cta-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--brand-primary)] leading-tight mb-6"
            >
              Ready to Speak with {BRAND_NAME}?
            </h2>
            <p className="font-body text-[var(--brand-primary)]/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you need immediate legal advice or want to explore how we
              can support your long-term objectives, our team is ready to help.
              Contact us today for a confidential consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-primary)] text-white font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-200 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                aria-label={`Contact ${BRAND_NAME} for a consultation`}
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[var(--brand-primary)]/30 text-[var(--brand-primary)] font-body font-medium text-sm rounded-lg hover:bg-[var(--brand-primary)]/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
              >
                View Practice Areas
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CONTACT STRIP ────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-16 bg-[var(--brand-primary)]"
        aria-label={`Contact ${BRAND_NAME}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-8 text-center"
          >
            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)]/10 flex items-center justify-center">
                <Phone size={20} className="text-[var(--brand-accent)]" />
              </div>
              <p className="font-body text-white/50 text-xs uppercase tracking-widest">Call Us</p>
              <a
                href="tel:+233300000000"
                className="font-heading text-white text-lg font-semibold hover:text-[var(--brand-accent)] transition-colors duration-200"
                aria-label={`Call ${BRAND_NAME}`}
              >
                +233 (0) 30 000 0000
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)]/10 flex items-center justify-center">
                <Mail size={20} className="text-[var(--brand-accent)]" />
              </div>
              <p className="font-body text-white/50 text-xs uppercase tracking-widest">Email Us</p>
              <a
                href="mailto:info@mitlegal.com"
                className="font-heading text-white text-lg font-semibold hover:text-[var(--brand-accent)] transition-colors duration-200"
                aria-label={`Email ${BRAND_NAME}`}
              >
                info@mitlegal.com
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)]/10 flex items-center justify-center">
                <MapPin size={20} className="text-[var(--brand-accent)]" />
              </div>
              <p className="font-body text-white/50 text-xs uppercase tracking-widest">Visit Us</p>
              <p className="font-heading text-white text-lg font-semibold text-center">
                14 Legal Avenue, Suite 300
                <br />
                Accra, Ghana
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
