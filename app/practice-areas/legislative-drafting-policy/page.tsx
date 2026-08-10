"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { FileText, CheckCircle, ArrowRight, BookOpen, Scale, Building2, Globe, Users, ChevronRight, Phone, Mail } from 'lucide-react';
import { BRAND_NAME, contactInfo } from "@/lib/data";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";
import { useTranslations } from "next-intl";

const heroVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const heroChild: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const services = [
  {
    id: "s1",
    icon: FileText,
    title: "Primary Legislation Drafting",
    description:
      "Crafting clear, enforceable Acts of Parliament and primary statutes for governments, ministries, and legislative bodies. We ensure every provision is legally sound, constitutionally compliant, and practically implementable.",
  },
  {
    id: "s2",
    icon: BookOpen,
    title: "Subsidiary Legislation & Regulations",
    description:
      "Drafting statutory instruments, executive orders, ministerial regulations, and by-laws that give operational effect to primary legislation while maintaining legal coherence across the regulatory framework.",
  },
  {
    id: "s3",
    icon: Scale,
    title: "Constitutional Law & Reform",
    description:
      "Advising on constitutional amendments, bill of rights provisions, and structural governance reforms. We bring comparative constitutional analysis and deep expertise in democratic governance principles.",
  },
  {
    id: "s4",
    icon: Building2,
    title: "Regulatory Framework Design",
    description:
      "Designing comprehensive regulatory architectures for emerging sectors including fintech, telecommunications, energy, and healthcare. We align regulatory design with international best practices and local context.",
  },
  {
    id: "s5",
    icon: Globe,
    title: "Public Policy Analysis & Advocacy",
    description:
      "Evidence-based policy research, stakeholder consultation frameworks, and policy impact assessments. We translate complex legal and socioeconomic data into actionable policy recommendations.",
  },
  {
    id: "s6",
    icon: Users,
    title: "Institutional Capacity Building",
    description:
      "Training legislative drafters, parliamentary counsel, and policy officers. We deliver workshops, toolkits, and mentorship programs that strengthen institutional drafting capacity for the long term.",
  },
];

const typicalMatters = [
  "Drafting national investment promotion legislation for a West African government",
  "Reviewing and harmonizing a country's labor law framework with ILO conventions",
  "Preparing subsidiary regulations for a newly enacted data protection act",
  "Advising a ministry on constitutional compliance of proposed healthcare reform bills",
  "Developing a comprehensive regulatory framework for the renewable energy sector",
  "Drafting anti-corruption legislation aligned with the UN Convention Against Corruption",
  "Preparing model by-laws for municipal and local government authorities",
  "Conducting legislative gap analysis for a regional economic community",
  "Drafting public procurement regulations and standard bidding documents",
  "Advising on the legal framework for a national digital identity program",
];

const whyChoosePoints = [
  {
    id: "w1",
    title: "Decades of Legislative Experience",
    body: `Our attorneys at ${BRAND_NAME} have served as parliamentary counsel, government legal advisors, and policy consultants across multiple jurisdictions in Africa and beyond.`,
  },
  {
    id: "w2",
    title: "Comparative Law Expertise",
    body: "We draw on common law, civil law, and customary law traditions to craft legislation that is coherent, enforceable, and contextually appropriate for each jurisdiction.",
  },
  {
    id: "w3",
    title: "End-to-End Policy Support",
    body: "From initial policy conception through stakeholder consultation, drafting, parliamentary passage, and post-enactment review, we provide seamless support at every stage of the legislative cycle.",
  },
  {
    id: "w4",
    title: "International Standards Alignment",
    body: "We ensure that all legislation and policy frameworks we draft are aligned with applicable international conventions, regional treaty obligations, and global best practices.",
  },
];

const relatedAreas = [
  {
    id: "r1",
    title: "Public International Law",
    href: "/practice-areas/public-international-law",
    description: "Cross-border treaties, trade, and international legal compliance.",
  },
  {
    id: "r2",
    title: "Corporate & Commercial Law",
    href: "/practice-areas/corporate-commercial-law",
    description: "Business formation, contracts, and commercial transactions.",
  },
];

export default function LegislativeDraftingPolicyPage() {
  const t = useTranslations();

  return (
    <main className="bg-white min-h-screen">
      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 70% 50%, var(--brand-accent) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--brand-accent)]" aria-hidden="true" />

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-3xl">
            <motion.div variants={heroChild}>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-1.5 text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-6 hover:opacity-80 transition-opacity"
              >
                <ChevronRight size={14} className="rotate-180" />
                Practice Areas
              </Link>
            </motion.div>

            <motion.h1
              variants={heroChild}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Legislative Drafting
              <span className="block text-[var(--brand-accent)]">& Public Policy</span>
            </motion.h1>

            <motion.p
              variants={heroChild}
              className="font-body text-white/70 text-lg leading-relaxed max-w-2xl mb-10"
            >
              Crafting clear, enforceable legislation and evidence-based policy frameworks for governments,
              parliaments, regulatory bodies, and international institutions.
            </motion.p>

            <motion.div variants={heroChild} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
              >
                Request a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-body font-medium text-sm rounded hover:border-white/60 hover:bg-white/5 transition-all duration-200"
              >
                All Practice Areas
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── 2. Overview ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-5">
                  Practice Overview
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-6">
                  Shaping Law. Informing Policy. Building Institutions.
                </h2>
                <div className="space-y-4 font-body text-[var(--brand-muted-foreground)] leading-relaxed">
                  <p>
                    Effective governance begins with well-crafted law. At {BRAND_NAME}, our Legislative
                    Drafting and Public Policy practice provides governments, parliaments, regulatory
                    agencies, and international organisations with the legal expertise needed to translate
                    policy intent into clear, enforceable, and constitutionally sound legislation.
                  </p>
                  <p>
                    Our attorneys have served as parliamentary counsel, government legal advisors, and
                    policy consultants across multiple jurisdictions. We understand the political,
                    institutional, and technical dimensions of the legislative process, and we bring that
                    holistic perspective to every mandate.
                  </p>
                  <p>
                    From drafting a single statutory instrument to designing an entire regulatory
                    architecture for an emerging sector, we deliver work of the highest technical quality
                    — on time, within scope, and aligned with international standards.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="bg-[var(--brand-muted)] rounded-2xl p-8 border border-[var(--brand-border)]">
                <h3 className="font-heading text-xl font-semibold text-[var(--brand-primary)] mb-6">
                  Why Sound Legislation Matters
                </h3>
                <ul className="space-y-4">
                  {[
                    "Clear laws reduce disputes and lower the cost of doing business",
                    "Well-designed regulation attracts foreign investment and builds market confidence",
                    "Constitutionally compliant legislation withstands judicial challenge",
                    "Evidence-based policy produces measurable development outcomes",
                    "Strong institutions require robust legal and regulatory foundations",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5"
                      />
                      <span className="font-body text-[var(--brand-foreground)] text-sm leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. Services Grid ─────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                Our Services
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight">
                Areas of Expertise
              </h2>
            </div>
          </Reveal>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-7 border border-[var(--brand-border)] shadow-[0_1px_3px_rgba(10,31,68,0.06),0_8px_24px_-8px_rgba(10,31,68,0.10)] hover:shadow-[0_4px_12px_rgba(10,31,68,0.10),0_20px_48px_-12px_rgba(10,31,68,0.18)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--brand-primary)]/8 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[var(--brand-accent)]" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-[var(--brand-muted-foreground)] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 4. Typical Matters ───────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-5">
                  Typical Matters
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-4">
                  Matters We Handle
                </h2>
                <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed mb-8">
                  Our legislative drafting and public policy team has advised on a wide range of mandates
                  across Africa and internationally, including:
                </p>
                <ul className="space-y-3">
                  {typicalMatters.map((matter, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)] flex-shrink-0 mt-2" />
                      <span className="font-body text-[var(--brand-foreground)] text-sm leading-relaxed">
                        {matter}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-5">
                <div className="bg-[var(--brand-primary)] rounded-2xl p-8 text-white">
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    Why Choose {BRAND_NAME}?
                  </h3>
                  <ul className="space-y-5">
                    {whyChoosePoints.map((point) => (
                      <li key={point.id}>
                        <p className="font-body font-semibold text-[var(--brand-accent)] text-sm mb-1">
                          {point.title}
                        </p>
                        <p className="font-body text-white/70 text-sm leading-relaxed">
                          {point.body}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. Related Areas ─────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-[var(--brand-primary)] mb-8">
              Related Practice Areas
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {relatedAreas.map((area) => (
              <Reveal key={area.id}>
                <Link
                  href={area.href}
                  className="group flex items-center justify-between p-6 bg-white rounded-xl border border-[var(--brand-border)] hover:border-[var(--brand-primary)]/30 hover:shadow-[0_4px_12px_rgba(10,31,68,0.10)] transition-all duration-300"
                >
                  <div>
                    <p className="font-heading text-base font-semibold text-[var(--brand-primary)] mb-1">
                      {area.title}
                    </p>
                    <p className="font-body text-[var(--brand-muted-foreground)] text-sm">
                      {area.description}
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-[var(--brand-accent)] flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA ───────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--brand-primary)]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-accent)]/20 text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-5">
              Get Started
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              Need Legislative Drafting or Policy Advisory?
            </h2>
            <p className="font-body text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Our team is ready to assist governments, institutions, and organisations with expert
              legislative drafting and public policy counsel. Contact us to discuss your mandate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-body font-medium text-sm rounded hover:border-white/60 hover:bg-white/5 transition-all duration-200"
              >
                View All Practice Areas
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
