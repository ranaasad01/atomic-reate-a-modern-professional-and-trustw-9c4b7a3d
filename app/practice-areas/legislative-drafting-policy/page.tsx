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
    body: "We draw on common law, civil law, and customary law traditions to craft legislation that is contextually appropriate, internationally benchmarked, and domestically enforceable.",
  },
  {
    id: "w3",
    title: "End-to-End Policy Support",
    body: `${BRAND_NAME} supports clients from initial policy conception through stakeholder consultation, drafting, parliamentary scrutiny, and post-enactment review — providing continuity at every stage.`,
  },
  {
    id: "w4",
    title: "Confidential & Politically Neutral",
    body: "We maintain strict confidentiality and political neutrality in all government engagements, ensuring our advice is grounded in legal principle rather than political expediency.",
  },
];

const relatedAreas = [
  {
    id: "r1",
    title: "Public International Law",
    href: "/practice-areas/public-international-law",
    description: "Cross-border treaties, international trade, and diplomatic matters.",
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
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(201,168,76,0.10) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 10% 80%, rgba(255,255,255,0.04) 0%, transparent 60%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--brand-accent) 1px, transparent 1px), linear-gradient(90deg, var(--brand-accent) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <motion.nav
              variants={heroChild}
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-white/50 text-xs font-body mb-8"
            >
              <Link href="/" className="hover:text-white/80 transition-colors">
                Home
              </Link>
              <ChevronRight size={12} />
              <Link
                href="/practice-areas"
                className="hover:text-white/80 transition-colors"
              >
                Practice Areas
              </Link>
              <ChevronRight size={12} />
              <span className="text-[var(--brand-accent)]">Legislative Drafting & Policy</span>
            </motion.nav>

            <motion.p
              variants={heroChild}
              className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            >
              Practice Area
            </motion.p>

            <motion.h1
              variants={heroChild}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Legislative Drafting{" "}
              <span className="text-[var(--brand-accent)]">&amp; Public Policy</span>
            </motion.h1>

            <motion.p
              variants={heroChild}
              className="font-body text-white/70 text-lg leading-relaxed mb-10 max-w-2xl"
            >
              Crafting clear, enforceable laws and policy frameworks that shape governance, protect rights, and drive sustainable development — for governments, institutions, and international organisations.
            </motion.p>

            <motion.div
              variants={heroChild}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                Request a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                All Practice Areas
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Overview ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                  Overview
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-6">
                  Shaping Law &amp; Policy with Precision
                </h2>
                <div className="space-y-4 font-body text-[var(--brand-muted-foreground)] leading-relaxed">
                  <p>
                    {BRAND_NAME} provides specialist legislative drafting and public policy advisory services to governments, ministries, parliaments, regulatory bodies, international organisations, and NGOs. Our work sits at the intersection of law, governance, and public administration.
                  </p>
                  <p>
                    Effective legislation is the foundation of good governance. Poorly drafted laws create ambiguity, invite litigation, and undermine the very objectives they seek to achieve. {BRAND_NAME} brings the technical precision, comparative legal knowledge, and policy insight needed to produce legislation that is clear, coherent, and constitutionally sound.
                  </p>
                  <p>
                    From drafting a single statutory instrument to designing an entire regulatory framework for a new industry, our team delivers end-to-end legislative support tailored to the specific legal, political, and institutional context of each client.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "50+", label: "Legislative Instruments Drafted" },
                  { value: "15+", label: "Jurisdictions Served" },
                  { value: "20+", label: "Years of Policy Experience" },
                  { value: "100%", label: "Constitutionally Compliant" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[var(--brand-muted)] rounded-2xl p-6 text-center"
                  >
                    <p className="font-heading text-3xl font-bold text-[var(--brand-primary)] mb-1">
                      {stat.value}
                    </p>
                    <p className="font-body text-xs text-[var(--brand-muted-foreground)] leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. Services ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Our Services
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] leading-tight">
                Legislative &amp; Policy Services
              </h2>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[var(--brand-border)]/40"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/8 flex items-center justify-center mb-5 text-[var(--brand-primary)]">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 4. Typical Matters ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                  Experience
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-6">
                  Typical Matters We Handle
                </h2>
                <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed mb-8">
                  {BRAND_NAME} has advised on a wide range of legislative and policy mandates across Africa and internationally. The following examples illustrate the breadth and depth of our experience.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                >
                  Discuss Your Matter
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="space-y-3">
                {typicalMatters.map((matter) => (
                  <li
                    key={matter}
                    className="flex items-start gap-3 font-body text-sm text-[var(--brand-foreground)] leading-relaxed"
                  >
                    <CheckCircle
                      size={16}
                      className="flex-shrink-0 mt-0.5 text-[var(--brand-accent)]"
                    />
                    {matter}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. Why Choose MIT Legal Consultants ──────────────────────────── */}
      <section className="py-20 md:py-28 bg-[var(--brand-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Why {BRAND_NAME}
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
                Why Choose {BRAND_NAME} for Legislative Work?
              </h2>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {whyChoosePoints.map((point) => (
              <motion.div
                key={point.id}
                variants={fadeInUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors duration-300"
              >
                <h3 className="font-heading text-lg font-semibold text-[var(--brand-accent)] mb-3">
                  {point.title}
                </h3>
                <p className="font-body text-sm text-white/70 leading-relaxed">
                  {point.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. Related Practice Areas ────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Explore More
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--brand-primary)]">
                Related Practice Areas
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {relatedAreas.map((area) => (
              <Reveal key={area.id}>
                <Link
                  href={area.href}
                  className="group block bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-[var(--brand-border)]/40 transition-all duration-300"
                >
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-2 group-hover:text-[var(--brand-accent)] transition-colors">
                    {area.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[var(--brand-accent)] text-sm font-body font-semibold">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA ───────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Get Started
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-5">
              Ready to Work with {BRAND_NAME}?
            </h2>
            <p className="font-body text-[var(--brand-muted-foreground)] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you need a single regulation drafted or a comprehensive legislative reform program, {BRAND_NAME} has the expertise to deliver. Contact us today to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-primary)] text-white font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
              >
                Request a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-primary)] hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
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
