"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight, Scale, Clock, Shield, Users, FileText, Award, ChevronDown } from 'lucide-react';
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

const services = [
  {
    id: "commercial-mediation",
    title: "Commercial Mediation",
    description:
      "Structured mediation for business disputes including contract disagreements, partnership conflicts, and commercial relationship breakdowns. Our mediators facilitate productive dialogue to reach mutually beneficial outcomes.",
    matters: [
      "Contract performance disputes",
      "Supplier and vendor conflicts",
      "Joint venture disagreements",
      "Shareholder and partnership disputes",
    ],
  },
  {
    id: "international-arbitration",
    title: "International Arbitration",
    description:
      "Expert representation and arbitral services in cross-border commercial disputes under ICC, LCIA, UNCITRAL, and other leading institutional rules. We navigate complex multi-jurisdictional matters with precision.",
    matters: [
      "International trade disputes",
      "Investment treaty arbitration",
      "Cross-border contract claims",
      "Foreign enforcement proceedings",
    ],
  },
  {
    id: "domestic-arbitration",
    title: "Domestic Arbitration",
    description:
      "Efficient arbitration services for local commercial and civil disputes, providing a confidential, binding resolution process that avoids the delays and publicity of court proceedings.",
    matters: [
      "Construction and engineering disputes",
      "Real estate and property conflicts",
      "Insurance claim arbitration",
      "Professional services disputes",
    ],
  },
  {
    id: "employment-mediation",
    title: "Employment Mediation",
    description:
      "Sensitive and impartial mediation for workplace conflicts, helping employers and employees resolve grievances, discrimination claims, and termination disputes without costly litigation.",
    matters: [
      "Wrongful termination claims",
      "Workplace harassment disputes",
      "Redundancy and severance negotiations",
      "Collective bargaining facilitation",
    ],
  },
  {
    id: "family-mediation",
    title: "Family & Matrimonial Mediation",
    description:
      "Compassionate mediation for family disputes, guiding parties through emotionally charged matters with professionalism and care to preserve relationships where possible.",
    matters: [
      "Divorce and separation agreements",
      "Child custody and access arrangements",
      "Matrimonial property division",
      "Inheritance and estate disputes",
    ],
  },
  {
    id: "expert-determination",
    title: "Expert Determination",
    description:
      "Appointment of independent technical experts to resolve specific factual or valuation disputes, providing a swift and cost-effective alternative to full arbitration proceedings.",
    matters: [
      "Business and asset valuations",
      "Accountancy and financial disputes",
      "Technical and engineering assessments",
      "Intellectual property valuations",
    ],
  },
];

const whyChoosePoints = [
  {
    icon: Award,
    title: "Accredited Neutrals",
    description:
      "Our mediators and arbitrators hold accreditations from leading international bodies including the Chartered Institute of Arbitrators (CIArb) and the International Mediation Institute (IMI).",
  },
  {
    icon: Clock,
    title: "Faster Resolution",
    description:
      "ADR processes typically resolve disputes in weeks rather than years, saving clients significant time, cost, and reputational risk compared to traditional litigation.",
  },
  {
    icon: Shield,
    title: "Strictly Confidential",
    description:
      "All mediation and arbitration proceedings are conducted under strict confidentiality protocols, protecting sensitive business information and personal matters from public disclosure.",
  },
  {
    icon: Users,
    title: "Preserves Relationships",
    description:
      "Our interest-based approach focuses on underlying needs rather than entrenched positions, enabling parties to maintain commercial and personal relationships post-dispute.",
  },
  {
    icon: Scale,
    title: "Binding & Enforceable",
    description:
      "Arbitral awards are internationally enforceable under the New York Convention in over 170 countries, providing certainty and finality that mediated settlements can also achieve.",
  },
  {
    icon: FileText,
    title: "Institutional Expertise",
    description:
      "We have extensive experience administering and representing clients in proceedings under ICC, LCIA, UNCITRAL, ICSID, and domestic arbitration rules.",
  },
];

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We assess your dispute, advise on the most appropriate ADR mechanism, and outline the process, timeline, and likely costs involved.",
  },
  {
    step: "02",
    title: "Agreement to Mediate or Arbitrate",
    description:
      "We assist in drafting or reviewing the ADR agreement, selecting the appropriate institutional rules, and appointing a suitable neutral or panel.",
  },
  {
    step: "03",
    title: "Pre-Hearing Preparation",
    description:
      "Our team prepares comprehensive submissions, evidence bundles, and witness statements, ensuring your case is presented with maximum clarity and impact.",
  },
  {
    step: "04",
    title: "Mediation or Arbitration Hearing",
    description:
      "We represent you throughout the hearing, advocating your position with skill and adapting strategy in real time as proceedings develop.",
  },
  {
    step: "05",
    title: "Settlement or Award",
    description:
      "We guide you through finalising a mediated settlement agreement or receiving and enforcing an arbitral award, ensuring your rights are fully protected.",
  },
];

const stats = [
  { value: "94%", label: "Mediation Success Rate" },
  { value: "170+", label: "Countries for Award Enforcement" },
  { value: "15+", label: "Years ADR Experience" },
  { value: "300+", label: "Disputes Resolved" },
];

const faqs = [
  {
    question: "What is the difference between mediation and arbitration?",
    answer:
      "Mediation is a voluntary, non-binding process where a neutral mediator facilitates negotiation between parties to help them reach a mutually agreed settlement. Arbitration is a more formal adjudicative process where an arbitrator or panel hears evidence and arguments and issues a binding award, similar to a court judgment but private.",
  },
  {
    question: "Is an arbitral award enforceable internationally?",
    answer:
      "Yes. Under the 1958 New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards, arbitral awards are enforceable in over 170 signatory countries, making international arbitration often more practical than court litigation for cross-border disputes.",
  },
  {
    question: "How long does mediation typically take?",
    answer:
      "Many commercial mediations are resolved in a single day or over two to three days. Complex multi-party disputes may take longer. This compares favourably to court litigation, which can take years to reach a final judgment.",
  },
  {
    question: "Can we include an arbitration clause in our contracts?",
    answer:
      "Absolutely. We strongly recommend including a well-drafted dispute resolution clause in all commercial contracts. We can advise on and draft appropriate clauses specifying the seat, governing law, institutional rules, and number of arbitrators.",
  },
  {
    question: "What happens if one party refuses to participate in mediation?",
    answer:
      "Mediation is voluntary and requires the consent of all parties. However, courts increasingly expect parties to attempt ADR before litigation, and unreasonable refusal can have cost consequences. Arbitration, by contrast, is binding on parties who have agreed to it contractually.",
  },
];

export default function MediationArbitrationPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 70% 50%, var(--brand-accent) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255,255,255,0.3) 79px, rgba(255,255,255,0.3) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(255,255,255,0.3) 79px, rgba(255,255,255,0.3) 80px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={heroChild} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/20 border border-[var(--brand-accent)]/30 flex items-center justify-center">
                <Scale size={20} className="text-[var(--brand-accent)]" />
              </div>
              <span className="text-[var(--brand-accent)] text-sm font-body font-semibold uppercase tracking-widest">
                {t("mediationArbitration.hero.eyebrow")}
              </span>
            </motion.div>
            <motion.h1
              variants={heroChild}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance mb-6"
            >
              {t("mediationArbitration.hero.title")}
            </motion.h1>
            <motion.p
              variants={heroChild}
              className="font-body text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl text-pretty"
            >
              {t("mediationArbitration.hero.subtitle")}
            </motion.p>
            <motion.div variants={heroChild} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)] shadow-[0_4px_20px_rgba(201,168,76,0.35)]"
              >
                {t("mediationArbitration.hero.cta")}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                {t("mediationArbitration.hero.secondaryCta")}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <Reveal>
        <section className="bg-[var(--brand-primary)]/95 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-accent)] mb-1">
                    {stat.value}
                  </p>
                  <p className="font-body text-sm text-white/60 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Overview */}
      <Reveal>
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                  {t("mediationArbitration.overview.eyebrow")}
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                  {t("mediationArbitration.overview.title")}
                </h2>
                <p className="font-body text-[var(--brand-text)]/70 leading-relaxed mb-5 text-pretty">
                  {t("mediationArbitration.overview.body1")}
                </p>
                <p className="font-body text-[var(--brand-text)]/70 leading-relaxed mb-8 text-pretty">
                  {t("mediationArbitration.overview.body2")}
                </p>
                <ul className="space-y-3">
                  {[
                    t("mediationArbitration.overview.bullet1"),
                    t("mediationArbitration.overview.bullet2"),
                    t("mediationArbitration.overview.bullet3"),
                    t("mediationArbitration.overview.bullet4"),
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[var(--brand-accent)] mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-[var(--brand-text)]/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,31,68,0.18)] ring-1 ring-black/5">
                  <img
                    src="https://i0.wp.com/edwardsmediationacademy.com/wp-content/uploads/2023/06/Comparison_mediation_v_arbitration.png?resize=600%2C475&ssl=1"
                    alt={t("mediationArbitration.overview.imageAlt")}
                    className="w-full h-80 md:h-96 object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background = "linear-gradient(135deg, var(--brand-primary) 0%, #1a3a6e 100%)";
                        parent.style.minHeight = "320px";
                        parent.style.display = "flex";
                        parent.style.alignItems = "center";
                        parent.style.justifyContent = "center";
                      }
                    }}
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[var(--brand-accent)] rounded-xl p-5 shadow-[0_8px_24px_rgba(201,168,76,0.35)]">
                  <p className="font-heading text-2xl font-bold text-[var(--brand-primary)]">94%</p>
                  <p className="font-body text-xs text-[var(--brand-primary)]/80 font-medium mt-0.5">
                    {t("mediationArbitration.overview.statLabel")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Services */}
      <Reveal>
        <section className="py-20 md:py-28 bg-[var(--brand-surface)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                {t("mediationArbitration.services.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-4">
                {t("mediationArbitration.services.title")}
              </h2>
              <p className="font-body text-[var(--brand-text)]/60 leading-relaxed text-pretty">
                {t("mediationArbitration.services.subtitle")}
              </p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((service, i) => (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.10)] border border-black/5 hover:shadow-[0_4px_32px_rgba(10,31,68,0.14)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/8 border border-[var(--brand-primary)]/10 flex items-center justify-center mb-5">
                    <Scale size={18} className="text-[var(--brand-primary)]" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--brand-text)]/65 leading-relaxed mb-5 text-pretty">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.matters.map((matter) => (
                      <li key={matter} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)] mt-2 flex-shrink-0" />
                        <span className="font-body text-xs text-[var(--brand-text)]/70">{matter}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* Why Choose Us */}
      <Reveal>
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-16 items-start">
              <div className="lg:col-span-2">
                <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                  {t("mediationArbitration.why.eyebrow")}
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                  {t("mediationArbitration.why.title")}
                </h2>
                <p className="font-body text-[var(--brand-text)]/65 leading-relaxed mb-8 text-pretty">
                  {t("mediationArbitration.why.body")}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                >
                  {t("mediationArbitration.why.cta")}
                  <ArrowRight size={15} />
                </Link>
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="lg:col-span-3 grid sm:grid-cols-2 gap-5"
              >
                {whyChoosePoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <motion.div
                      key={point.title}
                      variants={scaleIn}
                      className="flex gap-4 p-5 rounded-xl bg-[var(--brand-surface)] border border-black/5 hover:border-[var(--brand-accent)]/30 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/15 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-[var(--brand-accent)]" />
                      </div>
                      <div>
                        <h3 className="font-heading text-sm font-semibold text-[var(--brand-primary)] mb-1.5">
                          {point.title}
                        </h3>
                        <p className="font-body text-xs text-[var(--brand-text)]/65 leading-relaxed text-pretty">
                          {point.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Process */}
      <Reveal>
        <section className="py-20 md:py-28 bg-[var(--brand-primary)] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 30% 70%, var(--brand-accent) 0%, transparent 55%)",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                {t("mediationArbitration.process.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight text-balance mb-4">
                {t("mediationArbitration.process.title")}
              </h2>
              <p className="font-body text-white/60 leading-relaxed text-pretty">
                {t("mediationArbitration.process.subtitle")}
              </p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative"
            >
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-white/10" />
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                {process.map((step, i) => (
                  <motion.div
                    key={step.step}
                    variants={fadeInUp}
                    className="relative text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[var(--brand-accent)]/15 border border-[var(--brand-accent)]/30 flex items-center justify-center mx-auto mb-5 relative z-10">
                      <span className="font-heading text-lg font-bold text-[var(--brand-accent)]">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-heading text-sm font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-xs text-white/55 leading-relaxed text-pretty">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* FAQ */}
      <Reveal>
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                {t("mediationArbitration.faq.eyebrow")}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-4">
                {t("mediationArbitration.faq.title")}
              </h2>
              <p className="font-body text-[var(--brand-text)]/60 leading-relaxed text-pretty">
                {t("mediationArbitration.faq.subtitle")}
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FaqItem key={faq.question} question={faq.question} answer={faq.answer} index={i} />
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* CTA Banner */}
      <Reveal>
        <section className="py-20 bg-[var(--brand-surface)] border-t border-black/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-accent)]/15 border border-[var(--brand-accent)]/25 mb-6">
              <Scale size={14} className="text-[var(--brand-accent)]" />
              <span className="font-body text-xs font-semibold text-[var(--brand-accent)] uppercase tracking-widest">
                {t("mediationArbitration.cta.badge")}
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-5">
              {t("mediationArbitration.cta.title")}
            </h2>
            <p className="font-body text-[var(--brand-text)]/65 leading-relaxed mb-10 max-w-2xl mx-auto text-pretty">
              {t("mediationArbitration.cta.body")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-primary)] text-white font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-300 shadow-[0_4px_20px_rgba(10,31,68,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
              >
                {t("mediationArbitration.cta.primaryButton")}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[var(--brand-primary)]/20 text-[var(--brand-primary)] font-body font-medium text-sm rounded-lg hover:bg-[var(--brand-primary)]/5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
              >
                {t("mediationArbitration.cta.secondaryButton")}
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.07 }}
      className="border border-black/8 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-[var(--brand-surface)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--brand-accent)]"
        aria-expanded={open}
      >
        <span className="font-heading text-sm font-semibold text-[var(--brand-primary)] leading-snug pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <ChevronDown size={18} className="text-[var(--brand-accent)]" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 pt-1 bg-white border-t border-black/5">
          <p className="font-body text-sm text-[var(--brand-text)]/70 leading-relaxed text-pretty">
            {answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
import React, { useState } from 'react';
