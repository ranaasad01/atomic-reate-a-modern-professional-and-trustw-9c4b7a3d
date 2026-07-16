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
    id: "academic",
    icon: BookOpen,
    title: "Academic Rigour",
    description:
      "Several of our practitioners hold advanced degrees from internationally recognised institutions and have published extensively in peer-reviewed journals of international law.",
  },
  {
    id: "government",
    icon: Landmark,
    title: "Government Experience",
    description:
      "We have advised ministries of foreign affairs, justice, and trade, giving us an insider perspective on how states approach international legal obligations.",
  },
  {
    id: "multilingual",
    icon: Users,
    title: "Multilingual Capability",
    description:
      "Our team works fluently across English, French, Arabic, and Portuguese, enabling seamless engagement with counterparts in diverse legal and diplomatic environments.",
  },
];

const stats = [
  { id: "s1", value: "30+", label: "Countries Served" },
  { id: "s2", value: "50+", label: "Treaties Advised On" },
  { id: "s3", value: "15+", label: "Years of Practice" },
  { id: "s4", value: "100%", label: "Client Confidentiality" },
];

export default function PublicInternationalLawPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, var(--brand-accent) 0%, transparent 60%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <motion.nav variants={heroChild} aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-xs font-body mb-8">
              <Link href="/" className="hover:text-[var(--brand-accent)] transition-colors duration-200">
                {t("breadcrumb.home")}
              </Link>
              <ChevronRight size={12} />
              <Link href="/practice-areas" className="hover:text-[var(--brand-accent)] transition-colors duration-200">
                {t("breadcrumb.practiceAreas")}
              </Link>
              <ChevronRight size={12} />
              <span className="text-white/80">{t("publicIntlLaw.breadcrumb")}</span>
            </motion.nav>

            {/* Eyebrow */}
            <motion.div variants={heroChild} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/20 border border-[var(--brand-accent)]/30 flex items-center justify-center">
                <Globe size={20} className="text-[var(--brand-accent)]" />
              </div>
              <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest">
                {t("publicIntlLaw.eyebrow")}
              </span>
            </motion.div>

            <motion.h1
              variants={heroChild}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance mb-6"
            >
              {t("publicIntlLaw.heroTitle")}
            </motion.h1>

            <motion.p
              variants={heroChild}
              className="font-body text-lg text-white/70 leading-relaxed max-w-2xl mb-10 text-pretty"
            >
              {t("publicIntlLaw.heroSubtitle")}
            </motion.p>

            <motion.div variants={heroChild} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 shadow-[0_4px_16px_rgba(201,168,76,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                {t("publicIntlLaw.heroCta")}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                {t("publicIntlLaw.heroSecondary")}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent" aria-hidden="true" />
      </section>

      {/* ── Stats Bar ── */}
      <Reveal>
        <section className="bg-[var(--brand-primary)]/95 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  variants={fadeInUp}
                  className="text-center lg:px-8"
                >
                  <p className="font-heading text-3xl font-bold text-[var(--brand-accent)]">{stat.value}</p>
                  <p className="font-body text-xs text-white/60 mt-1 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* ── Overview ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                  {t("publicIntlLaw.overviewEyebrow")}
                </span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                  {t("publicIntlLaw.overviewTitle")}
                </h2>
                <div className="space-y-4 font-body text-[var(--brand-text)]/70 leading-relaxed text-pretty">
                  <p>{t("publicIntlLaw.overviewP1")}</p>
                  <p>{t("publicIntlLaw.overviewP2")}</p>
                  <p>{t("publicIntlLaw.overviewP3")}</p>
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-[var(--brand-accent)]" />
                  <span className="font-body text-sm text-[var(--brand-primary)] font-semibold">
                    {t("publicIntlLaw.overviewTagline")}
                  </span>
                </div>
              </motion.div>
            </Reveal>

            <Reveal delay={0.15}>
              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(10,31,68,0.18)]">
                  <img
                    src="https://www.un.org/ola/sites/www.un.org.ola/files/styles/slideshow/public/images/img_5982.jpg?itok=YYatfpfI"
                    alt="International law counsel session"
                    className="w-full h-80 lg:h-96 object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background = "linear-gradient(135deg, var(--brand-primary) 0%, #1a3a6b 100%)";
                        parent.style.minHeight = "384px";
                        parent.style.display = "flex";
                        parent.style.alignItems = "center";
                        parent.style.justifyContent = "center";
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/40 to-transparent" />
                </div>
                {/* Floating accent card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-[0_4px_24px_rgba(10,31,68,0.15)] border border-black/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--brand-accent)]/15 flex items-center justify-center">
                      <Globe size={18} className="text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-bold text-[var(--brand-primary)]">{t("publicIntlLaw.floatingCardTitle")}</p>
                      <p className="font-body text-xs text-[var(--brand-text)]/60">{t("publicIntlLaw.floatingCardSub")}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Areas of Expertise ── */}
      <section className="py-24 lg:py-32 bg-[var(--brand-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                {t("publicIntlLaw.expertiseEyebrow")}
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-4">
                {t("publicIntlLaw.expertiseTitle")}
              </h2>
              <p className="font-body text-[var(--brand-text)]/65 leading-relaxed text-pretty">
                {t("publicIntlLaw.expertiseSubtitle")}
              </p>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {expertise.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.id} delay={i * 0.07}>
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="bg-white rounded-2xl p-7 border border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_32px_rgba(10,31,68,0.14)] transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/8 flex items-center justify-center mb-5 group-hover:bg-[var(--brand-accent)]/15 transition-colors duration-300">
                      <Icon size={22} className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[var(--brand-primary)] mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--brand-text)]/65 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </Reveal>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Typical Matters ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <Reveal className="lg:col-span-2">
              <div className="lg:sticky lg:top-28">
                <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                  {t("publicIntlLaw.mattersEyebrow")}
                </span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-6">
                  {t("publicIntlLaw.mattersTitle")}
                </h2>
                <p className="font-body text-[var(--brand-text)]/65 leading-relaxed text-pretty mb-8">
                  {t("publicIntlLaw.mattersSubtitle")}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                >
                  {t("publicIntlLaw.mattersCta")}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>

            <div className="lg:col-span-3">
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="space-y-3"
              >
                {typicalMatters.map((matter, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <motion.li
                      variants={fadeInUp}
                      className="flex items-start gap-4 p-5 rounded-xl border border-black/5 bg-[var(--brand-surface)] hover:border-[var(--brand-accent)]/30 hover:bg-[var(--brand-accent)]/5 transition-all duration-200 group"
                    >
                      <CheckCircle
                        size={18}
                        className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200"
                      />
                      <span className="font-body text-sm text-[var(--brand-text)]/75 leading-relaxed">
                        {matter}
                      </span>
                    </motion.li>
                  </Reveal>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 lg:py-32 bg-[var(--brand-primary)] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 30%, var(--brand-accent) 0%, transparent 55%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
                {t("publicIntlLaw.whyEyebrow")}
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight text-balance mb-4">
                {t("publicIntlLaw.whyTitle")}
              </h2>
              <p className="font-body text-white/60 leading-relaxed text-pretty">
                {t("publicIntlLaw.whySubtitle")}
              </p>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-2 gap-6"
          >
            {whyChoose.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.id} delay={i * 0.08}>
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    className="flex gap-5 p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-[var(--brand-accent)]/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)]/15 border border-[var(--brand-accent)]/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="font-body text-sm text-white/60 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Related Practice Areas ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <span className="inline-block text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-3">
                  {t("publicIntlLaw.relatedEyebrow")}
                </span>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight">
                  {t("publicIntlLaw.relatedTitle")}
                </h2>
              </div>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 text-sm font-body font-semibold text-[var(--brand-primary)] hover:text-[var(--brand-accent)] transition-colors duration-200 flex-shrink-0"
              >
                {t("publicIntlLaw.relatedViewAll")}
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {[
              {
                id: "corp",
                title: "Corporate & Commercial Law",
                href: "/practice-areas/corporate-commercial-law",
                icon: FileText,
                desc: "Business formation, contracts, mergers, and commercial transactions.",
              },
              {
                id: "leg",
                title: "Legislative Drafting & Policy",
                href: "/practice-areas/legislative-drafting-policy",
                icon: Landmark,
                desc: "Drafting legislation, regulations, and public policy frameworks.",
              },
              {
                id: "med",
                title: "Mediation & Arbitration",
                href: "/practice-areas/mediation-arbitration",
                icon: Scale,
                desc: "Expert alternative dispute resolution outside of court.",
              },
            ].map((area, i) => {
              const Icon = area.icon;
              return (
                <Reveal key={area.id} delay={i * 0.08}>
                  <motion.div whileHover={{ y: -3, transition: { duration: 0.2 } }}>
                    <Link
                      href={area.href}
                      className="block p-6 rounded-2xl border border-black/5 bg-[var(--brand-surface)] hover:border-[var(--brand-accent)]/30 hover:shadow-[0_4px_24px_rgba(10,31,68,0.1)] transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/8 flex items-center justify-center mb-4 group-hover:bg-[var(--brand-accent)]/15 transition-colors duration-300">
                        <Icon size={18} className="text-[var(--brand-primary)] group-hover:text-[var(--brand-accent)] transition-colors duration-300" />
                      </div>
                      <h3 className="font-heading text-base font-bold text-[var(--brand-primary)] mb-2 leading-snug">
                        {area.title}
                      </h3>
                      <p className="font-body text-sm text-[var(--brand-text)]/60 leading-relaxed mb-4">
                        {area.desc}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-[var(--brand-accent)] group-hover:gap-2.5 transition-all duration-200">
                        {t("publicIntlLaw.relatedLearnMore")}
                        <ArrowRight size={13} />
                      </span>
                    </Link>
                  </motion.div>
                </Reveal>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <Reveal>
        <section className="py-20 bg-[var(--brand-surface)] border-t border-black/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-[var(--brand-accent)]/15 border border-[var(--brand-accent)]/20 flex items-center justify-center mx-auto mb-6">
              <Globe size={26} className="text-[var(--brand-accent)]" />
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[var(--brand-primary)] leading-tight tracking-tight text-balance mb-4">
              {t("publicIntlLaw.ctaTitle")}
            </h2>
            <p className="font-body text-[var(--brand-text)]/65 leading-relaxed text-pretty max-w-2xl mx-auto mb-10">
              {t("publicIntlLaw.ctaSubtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-primary)] text-white font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-200 shadow-[0_4px_16px_rgba(10,31,68,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                >
                  {t("publicIntlLaw.ctaButton")}
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-primary)] hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                >
                  {t("publicIntlLaw.ctaTeamButton")}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}