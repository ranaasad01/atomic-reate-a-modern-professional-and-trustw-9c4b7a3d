import Link from "next/link";
import { Heart, Home, FileText, Shield, CheckCircle, ArrowRight, Scale, Users, Phone, Mail } from 'lucide-react';
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Family Law | MIT Legal Consultants",
  description:
    "MIT Legal Consultants provides compassionate and strategic family law services including divorce, child custody, adoption, guardianship, prenuptial agreements, domestic violence protection, and inheritance disputes.",
};

const services = [
  {
    id: "divorce",
    icon: Scale,
    title: "Divorce & Separation",
    description:
      "We guide clients through contested and uncontested divorce proceedings with clarity and discretion, protecting your financial interests and emotional wellbeing throughout the process.",
    matters: [
      "Contested and uncontested divorce",
      "Legal separation agreements",
      "Division of matrimonial property",
      "Spousal maintenance and alimony",
      "Post-divorce modifications",
    ],
  },
  {
    id: "custody",
    icon: Users,
    title: "Child Custody & Support",
    description:
      "Our attorneys prioritize the best interests of children while advocating firmly for your parental rights. We handle all aspects of custody arrangements and child support determinations.",
    matters: [
      "Sole and joint custody arrangements",
      "Parenting plans and visitation schedules",
      "Child support calculations and enforcement",
      "Relocation disputes",
      "Custody modification applications",
    ],
  },
  {
    id: "adoption",
    icon: Heart,
    title: "Adoption & Guardianship",
    description:
      "We assist families through domestic and international adoption processes, ensuring every legal requirement is met so you can focus on welcoming a new member into your family.",
    matters: [
      "Domestic infant and child adoption",
      "Step-parent and relative adoption",
      "International adoption compliance",
      "Legal guardianship applications",
      "Termination of parental rights",
    ],
  },
  {
    id: "prenuptial",
    icon: FileText,
    title: "Prenuptial & Postnuptial Agreements",
    description:
      "Protect your assets and define financial expectations before or during marriage with carefully drafted agreements that stand up to legal scrutiny.",
    matters: [
      "Prenuptial agreement drafting and review",
      "Postnuptial agreement negotiation",
      "Asset protection planning",
      "Business interest protection",
      "Inheritance and estate provisions",
    ],
  },
  {
    id: "domestic",
    icon: Shield,
    title: "Domestic Violence & Protection Orders",
    description:
      "We provide urgent, compassionate legal support to victims of domestic violence, helping secure protection orders and navigate the legal system safely.",
    matters: [
      "Emergency protection order applications",
      "Restraining and non-molestation orders",
      "Safety planning and legal strategy",
      "Representation at protection order hearings",
      "Coordination with support services",
    ],
  },
  {
    id: "inheritance",
    icon: Home,
    title: "Inheritance & Estate Disputes",
    description:
      "Our team handles contested wills, intestate succession disputes, and estate administration conflicts with sensitivity and legal rigor, protecting your family's rightful interests.",
    matters: [
      "Contested wills and probate disputes",
      "Intestate succession claims",
      "Estate administration disputes",
      "Family provision claims",
      "Executor and trustee disputes",
    ],
  },
];

const typicalMatters = [
  "Divorce Proceedings",
  "Child Custody Disputes",
  "Child Support Orders",
  "Adoption Applications",
  "Guardianship Orders",
  "Prenuptial Agreements",
  "Domestic Violence Protection",
  "Restraining Orders",
  "Spousal Maintenance",
  "Property Division",
  "Inheritance Disputes",
  "Contested Wills",
  "Intestate Succession",
  "Parenting Plan Disputes",
  "Relocation Applications",
  "Step-Parent Adoption",
  "International Adoption",
  "Family Mediation",
];

export default function FamilyLawPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ── 1. Hero ── */}
      <section className="bg-[var(--brand-primary)] pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--brand-accent)]/5" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/[0.03]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--brand-accent)]/20 text-[var(--brand-accent)] text-xs font-body font-semibold tracking-widest uppercase mb-6">
              Practice Area
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Family Law
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/70 text-lg font-body leading-relaxed max-w-2xl mx-auto mb-10">
              Compassionate, strategic legal counsel through life's most personal and sensitive legal
              challenges. We protect your family's rights and future with discretion and expertise.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/30 text-white font-body font-medium text-sm rounded hover:bg-white/10 transition-all duration-200"
              >
                All Practice Areas
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 2. Overview ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest">
                  Our Approach
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] mt-3 mb-6 leading-tight">
                  Sensitive Counsel for Complex Family Matters
                </h2>
                <div className="space-y-4 text-[var(--brand-muted-foreground)] font-body leading-relaxed">
                  <p>
                    Family law matters are among the most emotionally charged and personally significant legal
                    challenges anyone can face. At MIT Legal Consultants, we combine legal expertise with genuine
                    empathy, ensuring that every client feels heard, supported, and confidently represented.
                  </p>
                  <p>
                    Our family law attorneys bring deep experience across divorce proceedings, child custody
                    disputes, adoption, domestic violence protection, and estate-related family conflicts. We
                    approach each matter with the sensitivity it deserves while maintaining the strategic rigor
                    necessary to protect your rights and achieve the best possible outcome.
                  </p>
                  <p>
                    Whether your matter requires negotiation, mediation, or courtroom advocacy, we are prepared
                    to guide you through every step with clarity, professionalism, and unwavering commitment to
                    your family's wellbeing.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="bg-[var(--brand-muted)] rounded-2xl p-8 border border-[var(--brand-border)]">
                <h3 className="font-heading text-xl font-semibold text-[var(--brand-primary)] mb-6">
                  Why Clients Trust Us
                </h3>
                <ul className="space-y-4">
                  {[
                    "Compassionate attorneys who listen and understand your situation",
                    "Strategic advocacy focused on your family's long-term wellbeing",
                    "Strict confidentiality throughout every stage of your matter",
                    "Experience across contested and uncontested family proceedings",
                    "Clear, honest communication about your options and likely outcomes",
                    "Sensitive handling of matters involving children and vulnerable parties",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5"
                      />
                      <span className="text-[var(--brand-foreground)] font-body text-sm leading-relaxed">
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

      {/* ── 3. Services ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest">
                What We Handle
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] mt-3 mb-4">
                Family Law Services
              </h2>
              <p className="text-[var(--brand-muted-foreground)] font-body max-w-2xl mx-auto">
                Comprehensive legal support across every dimension of family law, delivered with care and
                professional excellence.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.id} delay={idx * 0.07}>
                  <div className="bg-white rounded-2xl p-7 border border-[var(--brand-border)] shadow-[0_1px_3px_rgba(10,31,68,0.06),0_8px_24px_-8px_rgba(10,31,68,0.10)] hover:shadow-[0_4px_12px_rgba(10,31,68,0.10),0_20px_48px_-12px_rgba(10,31,68,0.18)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center mb-5 flex-shrink-0">
                      <Icon size={22} className="text-[var(--brand-primary)]" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[var(--brand-muted-foreground)] font-body text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mt-auto">
                      {service.matters.map((matter) => (
                        <li key={matter} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)] flex-shrink-0" />
                          <span className="text-[var(--brand-foreground)] font-body text-xs">{matter}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Typical Matters ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest">
                Scope of Practice
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] mt-3 mb-4">
                Typical Matters We Handle
              </h2>
              <p className="text-[var(--brand-muted-foreground)] font-body max-w-2xl mx-auto">
                A representative overview of the family law matters our attorneys manage on behalf of clients.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {typicalMatters.map((matter) => (
                <div
                  key={matter}
                  className="flex items-center gap-2.5 bg-[var(--brand-muted)] rounded-lg px-4 py-3 border border-[var(--brand-border)]"
                >
                  <CheckCircle size={15} className="text-[var(--brand-accent)] flex-shrink-0" />
                  <span className="text-[var(--brand-foreground)] font-body text-sm">{matter}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--brand-primary)]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--brand-accent)]/20 mb-6">
              <Heart size={26} className="text-[var(--brand-accent)]" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Speak with a Family Law Attorney
            </h2>
            <p className="text-white/70 font-body text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Family legal matters require prompt, sensitive, and expert attention. Contact MIT Legal
              Consultants today for a confidential consultation with one of our family law specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/30 text-white font-body font-medium text-sm rounded hover:bg-white/10 transition-all duration-200"
              >
                View All Practice Areas
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-white/10">
              <a
                href="tel:+233300000000"
                className="flex items-center gap-2 text-white/70 hover:text-white font-body text-sm transition-colors"
              >
                <Phone size={16} className="text-[var(--brand-accent)]" />
                +233 (0) 30 000 0000
              </a>
              <a
                href="mailto:info@mitlegal.com"
                className="flex items-center gap-2 text-white/70 hover:text-white font-body text-sm transition-colors"
              >
                <Mail size={16} className="text-[var(--brand-accent)]" />
                info@mitlegal.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
