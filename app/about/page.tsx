"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Shield, Star, Eye, Globe, Quote, ArrowRight, CheckCircle } from 'lucide-react';
import { BRAND_NAME } from "@/lib/data";
import { fadeInUp, fadeIn, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";
import { useTranslations } from "next-intl";

const timelineEvents = [
  { year: "2004", title: "Firm Founded", description: "MIT Legal Consultants was established with a founding team of senior attorneys committed to excellence in corporate and commercial law." },
  { year: "2009", title: "International Expansion", description: "MIT Legal Consultants opened a cross-border practice covering ECOWAS jurisdictions and international arbitration mandates." },
  { year: "2014", title: "Legislative Practice Launch", description: "MIT Legal Consultants launched specialized legislative drafting and public policy advisory services for government clients." },
  { year: "2018", title: "Regional Recognition", description: "MIT Legal Consultants was recognized among the region's leading law firms for corporate and commercial practice excellence." },
  { year: "2022", title: "Digital Transformation", description: "MIT Legal Consultants invested in legal technology infrastructure to deliver faster, more transparent client service." },
  { year: "2024", title: "20 Years of Trusted Counsel", description: "MIT Legal Consultants celebrates two decades of proven results across seven practice areas and multiple continents." },
];

const values = [
  {
    id: "integrity",
    icon: Shield,
    title: "Integrity",
    description: "We hold ourselves to the highest ethical standards in every engagement. Our clients trust us with their most sensitive matters, and we honor that trust unconditionally.",
  },
  {
    id: "excellence",
    icon: Star,
    title: "Excellence",
    description: "Mediocrity has no place in our practice. We pursue the best possible outcome for every client through rigorous preparation, deep expertise, and relentless attention to detail.",
  },
  {
    id: "discretion",
    icon: Eye,
    title: "Discretion",
    description: "Confidentiality is the cornerstone of the attorney-client relationship. We safeguard our clients' information with the utmost care and professionalism at all times.",
  },
  {
    id: "global-perspective",
    icon: Globe,
    title: "Global Perspective",
    description: "Operating at the intersection of local expertise and international law, we bring a broad, cross-border perspective that gives our clients a decisive advantage.",
  },
];

const goldUnderlineVariants: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.4 },
  },
};

const heroTextVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function AboutPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-white">
      {/* ── 1. Hero Banner ── */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden">
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
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
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.span
              variants={heroTextVariants}
              className="inline-block px-4 py-1.5 mb-6 text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] border border-[var(--brand-accent)]/40 rounded-full"
            >
              About the Firm
            </motion.span>

            <motion.h1
              variants={heroTextVariants}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              Two Decades of{" "}
              <span className="relative inline-block">
                Trusted Counsel
                <motion.span
                  variants={goldUnderlineVariants}
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--brand-accent)] block"
                />
              </span>
            </motion.h1>

            <motion.p
              variants={heroTextVariants}
              className="font-body text-white/70 text-lg leading-relaxed max-w-2xl"
            >
              MIT Legal Consultants has built its reputation on a simple principle: every client deserves
              strategic, results-oriented legal counsel delivered with integrity, discretion, and an
              unwavering commitment to excellence.
            </motion.p>
          </motion.div>
        </div>

        {/* Gold bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--brand-accent)] to-transparent" />
      </section>

      {/* ── 2. Firm Overview ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <Reveal>
              <div>
                <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
                  Who We Are
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-6">
                  A Premier Legal Consultancy Built on Principle
                </h2>
                <div className="space-y-4 font-body text-[var(--brand-muted-foreground)] leading-relaxed">
                  <p>
                    Founded in 2004, MIT Legal Consultants has grown from a boutique corporate law practice
                    into a full-service legal consultancy serving individuals, businesses, governments, and
                    international organizations across multiple jurisdictions.
                  </p>
                  <p>
                    Our team of experienced attorneys brings deep specialization across seven distinct
                    practice areas, enabling us to provide comprehensive, integrated legal solutions under
                    one roof. We combine rigorous legal analysis with practical commercial insight to deliver
                    advice that is not only legally sound but strategically effective.
                  </p>
                  <p>
                    From complex cross-border transactions to sensitive family matters, from legislative
                    drafting to courtroom advocacy, MIT Legal Consultants is the trusted partner that
                    clients return to — and refer others to — because we consistently deliver results.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right: Mission / Vision cards */}
            <div className="space-y-6">
              <Reveal delay={0.1}>
                <div className="bg-[var(--brand-primary)] rounded-2xl p-8 border border-[var(--brand-primary)]/10 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(10,31,68,0.18)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--brand-accent)]/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={16} className="text-[var(--brand-accent)]" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-white">Our Mission</h3>
                  </div>
                  <p className="font-body text-white/70 leading-relaxed">
                    To deliver practical, strategic, and results-oriented legal solutions while maintaining
                    the highest standards of professionalism, integrity, and client confidentiality.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-[var(--brand-muted)] rounded-2xl p-8 border border-[var(--brand-border)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(10,31,68,0.08)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--brand-accent)]/20 flex items-center justify-center flex-shrink-0">
                      <Globe size={16} className="text-[var(--brand-accent)]" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-[var(--brand-primary)]">Our Vision</h3>
                  </div>
                  <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed">
                    To be the most trusted and respected legal consultancy in the region, recognized for
                    our expertise, our ethics, and our enduring commitment to client success.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Core Values ── */}
      <section className="py-20 md:py-28 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
                What We Stand For
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight">
                Our Core Values
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.id} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-7 h-full border border-[var(--brand-border)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(10,31,68,0.10)] hover:shadow-[0_4px_12px_rgba(10,31,68,0.10),0_20px_48px_-12px_rgba(10,31,68,0.18)] transition-shadow duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/8 flex items-center justify-center mb-5">
                      <Icon size={22} className="text-[var(--brand-accent)]" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-3">
                      {value.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Timeline ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
                Our Journey
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight">
                Two Decades of Growth
              </h2>
            </div>
          </Reveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[var(--brand-border)] md:-translate-x-px" aria-hidden="true" />

            <div className="space-y-10">
              {timelineEvents.map((event, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <Reveal key={event.year} delay={index * 0.08}>
                    <div
                      className={`relative flex items-start gap-6 md:gap-0 ${
                        isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Content */}
                      <div
                        className={`flex-1 pl-14 md:pl-0 ${
                          isLeft
                            ? "md:pr-12 md:text-right"
                            : "md:pl-12 md:text-left"
                        }`}
                      >
                        <div
                          className={`inline-block bg-[var(--brand-muted)] rounded-2xl p-6 border border-[var(--brand-border)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(10,31,68,0.08)] ${
                            isLeft ? "md:ml-auto" : ""
                          } max-w-sm w-full`}
                        >
                          <span className="inline-block text-xs font-body font-bold uppercase tracking-widest text-[var(--brand-accent)] mb-2">
                            {event.year}
                          </span>
                          <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-2">
                            {event.title}
                          </h3>
                          <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>

                      {/* Dot */}
                      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 w-3 h-3 rounded-full bg-[var(--brand-accent)] border-2 border-white shadow-sm flex-shrink-0" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Professional Approach ── */}
      <section className="py-20 md:py-28 bg-[var(--brand-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
                  Our Approach
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                  How We Work With Our Clients
                </h2>
                <div className="space-y-4 font-body text-white/70 leading-relaxed">
                  <p>
                    We begin every engagement by listening. Before we advise, we take time to understand
                    your specific circumstances, objectives, and risk tolerance. This client-first approach
                    ensures that the strategies we develop are genuinely tailored to your needs.
                  </p>
                  <p>
                    Our attorneys combine deep legal expertise with practical commercial awareness. We do
                    not provide advice in a vacuum — we consider the real-world implications of every
                    recommendation and ensure our clients are fully informed at every stage.
                  </p>
                  <p>
                    We are committed to transparency in our communication and our billing. You will always
                    know where your matter stands, what the next steps are, and what to expect.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-4">
                {[
                  { title: "Initial Consultation", body: "We assess your matter, clarify your objectives, and outline the legal landscape relevant to your situation." },
                  { title: "Strategic Planning", body: "We develop a tailored legal strategy aligned with your goals, timeline, and budget." },
                  { title: "Execution & Advocacy", body: "Our attorneys execute the agreed strategy with precision, keeping you informed at every milestone." },
                  { title: "Resolution & Follow-Through", body: "We see every matter through to resolution and remain available for ongoing advisory support." },
                ].map((step, i) => (
                  <div
                    key={step.title}
                    className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 rounded-full bg-[var(--brand-accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[var(--brand-accent)] text-xs font-bold font-body">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-semibold text-white mb-1">{step.title}</h4>
                      <p className="font-body text-sm text-white/60 leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/20 mb-6">
              <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest">
                Ready to Get Started?
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-5">
              Speak With Our Legal Team Today
            </h2>
            <p className="font-body text-[var(--brand-muted-foreground)] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you need immediate legal assistance or want to explore how MIT Legal Consultants can
              support your long-term objectives, we are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[#0d2a5e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[var(--brand-border)] text-[var(--brand-primary)] font-body font-semibold text-sm rounded-lg hover:border-[var(--brand-primary)] hover:bg-[var(--brand-muted)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
              >
                Explore Practice Areas
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
