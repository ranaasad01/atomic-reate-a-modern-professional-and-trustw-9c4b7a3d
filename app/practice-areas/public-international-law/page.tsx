"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Globe, Shield, FileText, Users, ArrowRight, CheckCircle, Scale, Landmark, BookOpen, Handshake, AlertCircle, ChevronRight } from 'lucide-react';
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight, scaleIn } from "@/lib/motion";

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

const expertise = [
  {
    id: "treaties",
    icon: FileText,
    title: "Treaty Negotiation & Drafting",
    description:
      "We advise governments, intergovernmental organisations, and private entities on the negotiation, interpretation, and drafting of bilateral and multilateral treaties, ensuring compliance with the Vienna Convention on the Law of Treaties.",
  },
  {
    id: "trade",
    icon: Globe,
    title: "International Trade & Investment",
    description:
      "Our team navigates the complex landscape of WTO rules, free trade agreements, and bilateral investment treaties, protecting client interests in cross-border commercial transactions and investor-state disputes.",
  },
  {
    id: "human-rights",
    icon: Shield,
    title: "Human Rights & Humanitarian Law",
    description:
      "We provide counsel on international human rights instruments, advise on compliance with international humanitarian law, and represent clients before regional human rights bodies.",
  },
  {
    id: "dispute",
    icon: Scale,
    title: "International Dispute Resolution",
    description:
      "From the International Court of Justice to ICSID arbitration and WTO dispute settlement panels, we represent clients in the full spectrum of international adjudicatory forums.",
  },
  {
    id: "diplomatic",
    icon: Handshake,
    title: "Diplomatic & Consular Law",
    description:
      "We advise on the privileges and immunities of diplomatic missions, consular posts, and international organisations, as well as matters of state immunity and sovereign debt.",
  },
  {
    id: "sanctions",
    icon: AlertCircle,
    title: "Sanctions & Export Controls",
    description:
      "Our practitioners guide clients through the intricate web of UN, EU, and US sanctions regimes, ensuring cross-border operations remain fully compliant with evolving international restrictions.",
  },
];

const typicalMatters = [
  "Advising a West African government on the renegotiation of a bilateral investment treaty with a European partner state",
  "Representing a multinational corporation in an ICSID arbitration arising from expropriation of assets",
  "Drafting a regional free trade agreement framework for an economic community of nations",
  "Counselling an NGO on compliance with international humanitarian law in conflict-affected territories",
  "Advising a state-owned enterprise on WTO anti-dumping and countervailing duty proceedings",
  "Providing legal opinions on the jurisdictional reach of international criminal tribunals",
  "Assisting a foreign embassy with diplomatic immunity claims in domestic court proceedings",
  "Structuring cross-border joint ventures to comply with multiple jurisdictions' foreign investment laws",
  "Advising on the legal status and obligations arising from accession to international conventions",
  "Representing a government in boundary delimitation negotiations and related arbitral proceedings",
];

const whyChoose = [
  {
    id: "network",
    icon: Globe,
    title: "Global Network",
    description:
      "Our attorneys maintain active relationships with leading international law firms, intergovernmental organisations, and diplomatic missions across five continents.",
  },
  {
    id: "expertise",
    icon: BookOpen,
    title: "Deep Doctrinal Expertise",
    description:
      "MIT Legal Consultants combines academic rigour with practical experience, drawing on advanced qualifications in public international law and decades of advisory work.",
  },
  {
    id: "multilingual",
    icon: Users,
    title: "Multilingual Capability",
    description:
      "We operate across English, French, and Arabic-speaking jurisdictions, enabling seamless engagement with diverse international counterparts and institutions.",
  },
  {
    id: "track-record",
    icon: CheckCircle,
    title: "Proven Track Record",
    description:
      "MIT Legal Consultants has successfully advised on high-profile international mandates, from treaty negotiations to complex investor-state arbitrations, delivering results that matter.",
  },
];

const relatedAreas = [
  {
    id: "mediation",
    title: "Mediation & Arbitration",
    description: "Expert ADR services for cross-border and domestic disputes.",
    href: "/practice-areas/mediation-arbitration",
  },
  {
    id: "legislative",
    title: "Legislative Drafting & Policy",
    description: "Drafting laws and policy frameworks for governments and institutions.",
    href: "/practice-areas/legislative-drafting-policy",
  },
  {
    id: "corporate",
    title: "Corporate & Commercial Law",
    description: "Business formation, contracts, and cross-border transactions.",
    href: "/practice-areas/corporate-commercial-law",
  },
];

export default function PublicInternationalLawPage() {
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

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
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
            <Link href="/practice-areas" className="hover:text-white/80 transition-colors">
              Practice Areas
            </Link>
            <ChevronRight size={12} />
            <span className="text-[var(--brand-accent)]">Public International Law</span>
          </motion.nav>

          <div className="max-w-3xl">
            <motion.div variants={heroChild} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)]/15 border border-[var(--brand-accent)]/30 flex items-center justify-center">
                <Globe size={24} className="text-[var(--brand-accent)]" />
              </div>
              <span className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest">
                Practice Area
              </span>
            </motion.div>

            <motion.h1
              variants={heroChild}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Public International Law
              <span className="block text-[var(--brand-accent)] mt-1">&amp; Cross-Border Matters</span>
            </motion.h1>

            <motion.p
              variants={heroChild}
              className="font-body text-white/70 text-lg leading-relaxed mb-10 max-w-2xl"
            >
              Navigating the complex intersection of international law, cross-border transactions, and
              diplomatic relations. MIT Legal Consultants delivers authoritative counsel to governments,
              corporations, and international organisations.
            </motion.p>

            <motion.div variants={heroChild} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                Request a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                All Practice Areas
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── 2. Overview ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-4">
                  Overview
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-6">
                  Authoritative Counsel at the Intersection of Law and Diplomacy
                </h2>
                <div className="space-y-4 font-body text-[var(--brand-muted-foreground)] leading-relaxed">
                  <p>
                    Public international law governs the relationships between states, international
                    organisations, and increasingly, private actors operating across borders. At
                    MIT Legal Consultants, our international law practice brings together attorneys
                    with advanced expertise in treaty law, international trade, human rights, and
                    cross-border dispute resolution.
                  </p>
                  <p>
                    We advise sovereign governments, state-owned enterprises, multinational corporations,
                    NGOs, and international organisations on the full spectrum of international legal
                    matters — from treaty negotiation and compliance to investor-state arbitration and
                    sanctions advisory.
                  </p>
                  <p>
                    Our cross-border practice is built on a deep understanding of both the formal
                    architecture of international law and the practical realities of operating in
                    multiple jurisdictions simultaneously. MIT Legal Consultants provides the strategic
                    clarity and legal precision that complex international mandates demand.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Countries Advised", value: "30+" },
                  { label: "International Arbitrations", value: "50+" },
                  { label: "Treaties Reviewed", value: "100+" },
                  { label: "Years of Practice", value: "20+" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[var(--brand-muted)] rounded-2xl p-6 text-center"
                  >
                    <p className="font-heading text-3xl font-bold text-[var(--brand-primary)] mb-1">
                      {stat.value}
                    </p>
                    <p className="font-body text-xs text-[var(--brand-muted-foreground)] uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. Expertise Areas ───────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-3">
                Areas of Expertise
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] leading-tight">
                Our International Law Capabilities
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
            {expertise.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-[var(--brand-border)] hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/8 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[var(--brand-primary)]" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--brand-muted-foreground)] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 4. Typical Matters ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-4">
                  Typical Matters
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-6">
                  Representative International Law Engagements
                </h2>
                <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed">
                  MIT Legal Consultants has advised on a wide range of complex international legal
                  matters. The following examples illustrate the breadth and depth of our international
                  law practice.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="space-y-3">
                {typicalMatters.map((matter, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[var(--brand-muted)] border border-[var(--brand-border)]"
                  >
                    <CheckCircle
                      size={18}
                      className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5"
                    />
                    <span className="font-body text-sm text-[var(--brand-foreground)] leading-relaxed">
                      {matter}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. Why Choose MIT Legal Consultants ──────────────────────────── */}
      <section className="py-20 bg-[var(--brand-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-3">
                Why MIT Legal Consultants
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
                Your Trusted Partner in International Law
              </h2>
            </div>
          </Reveal>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {whyChoose.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  variants={scaleIn}
                  className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[var(--brand-accent)]/15 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[var(--brand-accent)]" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-3">
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

      {/* ── 6. Related Practice Areas ────────────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-xl mx-auto mb-12">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-3">
                Related Services
              </p>
              <h2 className="font-heading text-3xl font-bold text-[var(--brand-primary)]">
                Explore Related Practice Areas
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {relatedAreas.map((area) => (
              <Reveal key={area.id}>
                <Link
                  href={area.href}
                  className="group block bg-white rounded-2xl p-7 border border-[var(--brand-border)] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="bg-[var(--brand-primary)] rounded-3xl p-12 md:p-16 relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 60% at 80% 20%, rgba(201,168,76,0.12) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-4">
                  Get Expert Counsel
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
                  Need International Legal Advice?
                </h2>
                <p className="font-body text-white/70 text-base leading-relaxed mb-8 max-w-xl mx-auto">
                  Whether you are a government, corporation, or international organisation, MIT Legal
                  Consultants is ready to provide the authoritative international law counsel your
                  matter demands.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
                  >
                    Schedule a Consultation
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/practice-areas"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    View All Practice Areas
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
