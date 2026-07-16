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

const stats = [
  { value: "20+", label: "Years of Practice" },
  { value: "500+", label: "Matters Resolved" },
  { value: "7", label: "Practice Areas" },
  { value: "3", label: "Continents Served" },
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeInUp}
              className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-5"
            >
              About the Firm
            </motion.p>

            <motion.div variants={heroTextVariants} className="relative inline-block mb-6">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Trusted Counsel.
                <br />
                <span className="text-[var(--brand-accent)]">Proven Results.</span>
              </h1>
              <motion.div
                variants={goldUnderlineVariants}
                className="absolute -bottom-2 left-0 h-[3px] w-full bg-[var(--brand-accent)]/40 rounded-full"
              />
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="font-body text-white/70 text-lg leading-relaxed max-w-2xl mt-8"
            >
              {BRAND_NAME} is a premier legal consultancy delivering practical, strategic, and
              results-oriented legal solutions to individuals, businesses, governments, and
              international organisations. We combine deep expertise with an unwavering commitment
              to client success.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                Our Practice Areas
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <p className="font-heading text-3xl font-bold text-[var(--brand-accent)]">{stat.value}</p>
                  <p className="font-body text-white/60 text-xs uppercase tracking-wider mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Firm Overview ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                  Who We Are
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-6">
                  A Firm Built on Expertise,
                  <br />
                  <span className="text-[var(--brand-accent)]">Integrity & Results</span>
                </h2>
                <div className="space-y-4 font-body text-[var(--brand-muted-foreground)] leading-relaxed">
                  <p>
                    {BRAND_NAME} is a full-service legal consultancy providing comprehensive legal
                    services across seven distinct practice areas. Founded on the principles of
                    integrity, excellence, and client-centered service, we have built a reputation
                    as a trusted partner for individuals, corporations, governments, and international
                    organisations.
                  </p>
                  <p>
                    Our attorneys bring deep specialization and cross-disciplinary insight to every
                    matter. Whether navigating a complex commercial transaction, resolving a
                    high-stakes dispute, or advising on legislative reform, {BRAND_NAME} delivers
                    practical, strategic counsel that achieves measurable outcomes.
                  </p>
                  <p>
                    We operate at the intersection of local expertise and international law, giving
                    our clients a decisive advantage in an increasingly complex legal landscape.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-5">
                {[
                  {
                    id: "mission",
                    label: "Our Mission",
                    text: `To deliver practical, strategic, and results-oriented legal solutions that empower our clients to achieve their objectives while upholding the highest standards of professionalism and integrity.`,
                  },
                  {
                    id: "vision",
                    label: "Our Vision",
                    text: `To be the most trusted legal consultancy in the region — recognized for our expertise, our ethics, and our unwavering commitment to client success across every practice area.`,
                  },
                  {
                    id: "approach",
                    label: "Our Approach",
                    text: `We take time to understand each client's unique circumstances, objectives, and risk profile. Every strategy we craft is tailored, evidence-based, and designed to deliver the best possible outcome.`,
                  },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="p-6 rounded-xl border border-[var(--brand-border)] bg-[var(--brand-background)] hover:border-[var(--brand-accent)]/40 transition-colors duration-200"
                  >
                    <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-2">
                      {item.label}
                    </p>
                    <p className="font-body text-[var(--brand-foreground)] text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. Core Values ── */}
      <section className="py-20 md:py-28 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              What We Stand For
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] leading-tight">
              Our Core Values
            </h2>
            <p className="font-body text-[var(--brand-muted-foreground)] mt-4 max-w-2xl mx-auto">
              These principles guide every decision, every engagement, and every relationship at {BRAND_NAME}.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.id} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-7 border border-[var(--brand-border)] hover:border-[var(--brand-accent)]/40 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/5 flex items-center justify-center mb-5">
                      <Icon size={22} className="text-[var(--brand-accent)]" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-[var(--brand-primary)] mb-3">
                      {value.title}
                    </h3>
                    <p className="font-body text-[var(--brand-muted-foreground)] text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Timeline / History ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Our Journey
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] leading-tight">
              Two Decades of Excellence
            </h2>
            <p className="font-body text-[var(--brand-muted-foreground)] mt-4 max-w-2xl mx-auto">
              From our founding to today, {BRAND_NAME} has grown into a trusted institution serving clients across multiple continents.
            </p>
          </Reveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[var(--brand-border)] md:-translate-x-px" aria-hidden="true" />

            <div className="space-y-10">
              {timelineEvents.map((event, i) => (
                <Reveal key={event.year} delay={i * 0.08}>
                  <div
                    className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content card */}
                    <div
                      className={`md:w-[calc(50%-2rem)] ml-10 md:ml-0 ${
                        i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <div className="bg-[var(--brand-background)] rounded-xl border border-[var(--brand-border)] p-6 hover:border-[var(--brand-accent)]/40 hover:shadow-md transition-all duration-200">
                        <span className="inline-block font-body text-[var(--brand-accent)] text-xs font-bold uppercase tracking-widest mb-2">
                          {event.year}
                        </span>
                        <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-2">
                          {event.title}
                        </h3>
                        <p className="font-body text-[var(--brand-muted-foreground)] text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-[var(--brand-accent)] border-2 border-white shadow md:-translate-x-1.5" aria-hidden="true" />

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Testimonial / Quote ── */}
      <section className="py-20 md:py-28 bg-[var(--brand-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <Quote size={40} className="text-[var(--brand-accent)]/40 mx-auto mb-6" aria-hidden="true" />
            <blockquote className="font-heading text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8">
              &ldquo;{BRAND_NAME} guided our company through a complex cross-border acquisition with
              exceptional skill. Their attention to detail and strategic thinking saved us from
              significant risk.&rdquo;
            </blockquote>
            <p className="font-body text-[var(--brand-accent)] font-semibold text-sm uppercase tracking-widest">
              Emmanuel Asante
            </p>
            <p className="font-body text-white/50 text-sm mt-1">CEO, Asante Holdings Ltd.</p>
          </Reveal>
        </div>
      </section>

      {/* ── 6. Why Choose MIT Legal Consultants ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Why {BRAND_NAME}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] leading-tight">
              The {BRAND_NAME} Difference
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: "track-record",
                title: "Proven Track Record",
                body: `${BRAND_NAME} has delivered measurable outcomes for individuals, corporations, and government institutions across complex legal landscapes for over two decades.`,
              },
              {
                id: "confidentiality",
                title: "Confidentiality & Integrity",
                body: `At ${BRAND_NAME}, every matter is handled with the highest ethical standards. Your information and interests are protected at every stage of the engagement.`,
              },
              {
                id: "multidisciplinary",
                title: "Multidisciplinary Team",
                body: `Our attorneys at ${BRAND_NAME} bring deep specialization across seven distinct practice areas, enabling comprehensive counsel under one roof.`,
              },
              {
                id: "cross-border",
                title: "Cross-Border Expertise",
                body: `From domestic disputes to international treaties, ${BRAND_NAME} navigates complex multi-jurisdictional matters with precision and authority.`,
              },
              {
                id: "responsive",
                title: "Responsive & Accessible",
                body: `${BRAND_NAME} understands that legal matters are time-sensitive. Our team is committed to prompt communication and timely action on every matter.`,
              },
              {
                id: "client-centered",
                title: "Client-Centered Approach",
                body: `${BRAND_NAME} takes time to understand your unique circumstances and crafts strategies tailored to your specific goals and risk profile.`,
              },
            ].map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08}>
                <div className="flex gap-4 p-6 rounded-xl border border-[var(--brand-border)] bg-[var(--brand-background)] hover:border-[var(--brand-accent)]/40 hover:shadow-md transition-all duration-200 h-full">
                  <CheckCircle size={20} className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-[var(--brand-muted-foreground)] text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA ── */}
      <section className="py-20 bg-[var(--brand-muted)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] mb-4">
              Ready to Work with {BRAND_NAME}?
            </h2>
            <p className="font-body text-[var(--brand-muted-foreground)] text-lg mb-8 max-w-xl mx-auto">
              Contact us today to schedule a confidential consultation with one of our attorneys.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-primary)] text-white font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
                aria-label={`Contact ${BRAND_NAME} to schedule a consultation`}
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-primary)] hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
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
