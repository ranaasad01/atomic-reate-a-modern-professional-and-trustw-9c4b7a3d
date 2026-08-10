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
    id: "experience",
    icon: BookOpen,
    title: "Deep Doctrinal Knowledge",
    description:
      "We combine rigorous academic grounding in public international law with practical experience advising states, international organisations, and multinational enterprises.",
  },
  {
    id: "discretion",
    icon: Shield,
    title: "Sovereign Sensitivity",
    description:
      "We understand the political and diplomatic dimensions of international legal matters and provide counsel that is legally precise and diplomatically astute.",
  },
  {
    id: "multijurisdictional",
    icon: Landmark,
    title: "Multi-Jurisdictional Reach",
    description:
      "Our team is equipped to advise on matters governed by multiple legal systems simultaneously, coordinating seamlessly across common law, civil law, and customary international law frameworks.",
  },
];

const relatedAreas = [
  {
    id: "mediation",
    title: "Mediation & Arbitration",
    href: "/practice-areas/mediation-arbitration",
    description: "Expert ADR services for cross-border and commercial disputes.",
  },
  {
    id: "corporate",
    title: "Corporate & Commercial Law",
    href: "/practice-areas/corporate-commercial-law",
    description: "Business formation, contracts, and commercial transactions.",
  },
  {
    id: "legislative",
    title: "Legislative Drafting & Policy",
    href: "/practice-areas/legislative-drafting-policy",
    description: "Drafting legislation and regulatory frameworks for governments.",
  },
];

export default function PublicInternationalLawPage() {
  const t = useTranslations();

  return (
    <main className="bg-white min-h-screen">
      {/* ── 1. Hero ────────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 70% 50%, var(--brand-accent) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, #ffffff 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--brand-accent)]" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
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
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              Public International Law
              <span className="block text-[var(--brand-accent)] mt-1">& Cross-Border Matters</span>
            </motion.h1>

            <motion.p
              variants={heroChild}
              className="font-body text-white/70 text-lg leading-relaxed max-w-2xl mb-10"
            >
              Navigating the complex intersection of international law, diplomacy, and cross-border
              commerce. We advise states, international organisations, and multinational enterprises
              on their most consequential international legal challenges.
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
          </motion.div>
        </div>
      </section>

      {/* ── 2. Overview ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-muted)] text-[var(--brand-primary)] text-xs font-body font-semibold uppercase tracking-widest mb-5">
                  Practice Overview
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-6">
                  A Trusted Advisor at the Intersection of Law and Diplomacy
                </h2>
                <div className="space-y-4 font-body text-[var(--brand-muted-foreground)] leading-relaxed">
                  <p>
                    Public international law governs the relationships between states, international
                    organisations, and increasingly, private actors operating across borders. At MIT
                    Legal Consultants, our international law practice brings together attorneys with
                    deep expertise in treaty law, international trade, human rights, and cross-border
                    dispute resolution.
                  </p>
                  <p>
                    We advise governments on treaty obligations and constitutional compliance, assist
                    multinational corporations in navigating foreign investment regimes, and represent
                    clients before international courts and arbitral tribunals. Our work spans the full
                    spectrum of public international law, from the negotiation of bilateral investment
                    treaties to the enforcement of international arbitral awards.
                  </p>
                  <p>
                    In an increasingly interconnected world, the ability to understand and apply
                    international legal frameworks is not a luxury — it is a strategic necessity. Our
                    team provides the clarity, precision, and cross-border perspective that complex
                    international matters demand.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {whyChoose.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      className="bg-[var(--brand-muted)] rounded-xl p-5 border border-[var(--brand-border)]"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center mb-3">
                        <Icon size={18} className="text-[var(--brand-accent)]" />
                      </div>
                      <h3 className="font-heading text-base font-semibold text-[var(--brand-primary)] mb-1.5">
                        {item.title}
                      </h3>
                      <p className="font-body text-xs text-[var(--brand-muted-foreground)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. Expertise Tiles ───────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                Areas of Expertise
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight">
                What We Do
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
            {expertise.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-6 border border-[var(--brand-border)] shadow-[0_1px_3px_rgba(10,31,68,0.06),0_8px_24px_-8px_rgba(10,31,68,0.10)] hover:shadow-[0_4px_12px_rgba(10,31,68,0.10),0_20px_48px_-12px_rgba(10,31,68,0.18)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[var(--brand-accent)]" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-2">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-muted)] text-[var(--brand-primary)] text-xs font-body font-semibold uppercase tracking-widest mb-5">
                  Typical Matters
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-tight mb-4">
                  Representative Work
                </h2>
                <p className="font-body text-[var(--brand-muted-foreground)] leading-relaxed">
                  Our international law team has advised on a broad range of high-stakes matters
                  across multiple jurisdictions and international forums. The following examples
                  illustrate the scope and complexity of our work.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="space-y-3">
                {typicalMatters.map((matter, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-lg bg-[var(--brand-muted)] border border-[var(--brand-border)]"
                  >
                    <CheckCircle
                      size={16}
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

      {/* ── 5. Related Practice Areas ────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-[var(--brand-primary)] mb-8">
              Related Practice Areas
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {relatedAreas.map((area) => (
              <Reveal key={area.id}>
                <Link
                  href={area.href}
                  className="group block bg-white rounded-xl p-6 border border-[var(--brand-border)] shadow-[0_1px_3px_rgba(10,31,68,0.06)] hover:shadow-[0_4px_16px_rgba(10,31,68,0.12)] hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="font-heading text-base font-semibold text-[var(--brand-primary)] mb-2 group-hover:text-[var(--brand-accent)] transition-colors">
                    {area.title}
                  </h3>
                  <p className="font-body text-xs text-[var(--brand-muted-foreground)] leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[var(--brand-accent)] text-xs font-body font-semibold">
                    Learn More <ArrowRight size={12} />
                  </span>
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--brand-accent)]/20 text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-6">
              Get Expert Counsel
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Navigating International Law Requires Precision
            </h2>
            <p className="font-body text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you are a government, international organisation, or multinational enterprise,
              our team is ready to provide the strategic international legal counsel your matter demands.
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
