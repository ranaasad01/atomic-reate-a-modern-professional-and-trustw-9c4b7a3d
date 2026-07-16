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
  "International Child Abduction",
];

const whyChooseUs = [
  {
    id: "compassion",
    icon: Heart,
    title: "Compassionate Representation",
    description:
      "We understand that family legal matters are deeply personal. Our attorneys approach every case with empathy, discretion, and genuine care for your wellbeing.",
  },
  {
    id: "expertise",
    icon: Scale,
    title: "Deep Family Law Expertise",
    description:
      "Our family law team has extensive experience across the full spectrum of family matters, from straightforward separations to complex multi-jurisdictional disputes.",
  },
  {
    id: "children",
    icon: Shield,
    title: "Child-Focused Approach",
    description:
      "In matters involving children, we always prioritize their best interests, working to achieve outcomes that protect their welfare and preserve meaningful family relationships.",
  },
  {
    id: "resolution",
    icon: CheckCircle,
    title: "Resolution-Oriented",
    description:
      "While we are prepared to litigate when necessary, we actively explore mediation and negotiated settlements to minimize conflict, cost, and emotional strain.",
  },
];

export default function FamilyLawPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-primary)]/95 to-[var(--brand-primary)]/80" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <Reveal>
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-block w-8 h-px bg-[var(--brand-accent)]" />
              <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest">
                Practice Area
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Family Law
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-white/75 text-lg sm:text-xl font-body leading-relaxed max-w-2xl mb-10">
              Compassionate, strategic legal counsel for individuals and families navigating life's most personal legal challenges — with discretion, expertise, and genuine care.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                Request a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                All Practice Areas
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 2. Overview ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block w-8 h-px bg-[var(--brand-accent)]" />
                  <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest">
                    Our Approach
                  </span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] mb-6 leading-tight">
                  Protecting What Matters Most
                </h2>
                <div className="space-y-4 text-[var(--brand-muted-foreground)] font-body leading-relaxed">
                  <p>
                    Family law matters are among the most emotionally charged and consequential legal issues a person can face. At MIT Legal Consultants, we combine rigorous legal expertise with genuine compassion to guide our clients through divorce, custody disputes, adoption, and all other family-related legal matters.
                  </p>
                  <p>
                    We understand that behind every case is a family — with real relationships, real emotions, and real futures at stake. Our attorneys take the time to understand your unique circumstances, explain your options clearly, and develop a strategy that protects your interests while minimizing unnecessary conflict.
                  </p>
                  <p>
                    Whether your matter requires negotiation, mediation, or vigorous courtroom advocacy, our family law team is prepared to stand by your side at every step.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {whyChooseUs.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      className="bg-[var(--brand-muted)] rounded-xl p-5 flex flex-col gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-[var(--brand-accent)]" />
                      </div>
                      <h3 className="font-heading text-base font-semibold text-[var(--brand-primary)] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[var(--brand-muted-foreground)] text-sm font-body leading-relaxed">
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

      {/* ── 3. Services ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="inline-block w-8 h-px bg-[var(--brand-accent)]" />
                <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest">
                  What We Do
                </span>
                <span className="inline-block w-8 h-px bg-[var(--brand-accent)]" />
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] mb-4">
                Our Family Law Services
              </h2>
              <p className="text-[var(--brand-muted-foreground)] font-body max-w-2xl mx-auto">
                Comprehensive legal support across every dimension of family law, delivered with professionalism and care.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.id} delay={index * 0.07}>
                  <div className="bg-white rounded-2xl p-7 border border-[var(--brand-border)] hover:border-[var(--brand-accent)]/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)] flex items-center justify-center mb-5 flex-shrink-0">
                      <Icon size={22} className="text-[var(--brand-accent)]" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-[var(--brand-primary)] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[var(--brand-muted-foreground)] font-body text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <ul className="mt-auto space-y-2">
                      {service.matters.map((matter) => (
                        <li key={matter} className="flex items-start gap-2 text-sm font-body text-[var(--brand-foreground)]">
                          <CheckCircle size={14} className="text-[var(--brand-accent)] mt-0.5 flex-shrink-0" />
                          <span>{matter}</span>
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

      {/* ── 4. Typical Matters ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block w-8 h-px bg-[var(--brand-accent)]" />
                  <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest">
                    Typical Matters
                  </span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] mb-6 leading-tight">
                  Legal Matters We Handle
                </h2>
                <p className="text-[var(--brand-muted-foreground)] font-body leading-relaxed mb-8">
                  Our family law practice covers the full range of personal and family legal matters. Below is a representative sample of the cases we regularly handle for our clients.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {typicalMatters.map((matter) => (
                    <div key={matter} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)] flex-shrink-0" />
                      <span className="text-sm font-body text-[var(--brand-foreground)]">{matter}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="bg-[var(--brand-primary)] rounded-2xl p-8 lg:p-10 text-white">
                <div className="w-12 h-12 rounded-xl bg-[var(--brand-accent)]/20 flex items-center justify-center mb-6">
                  <Heart size={24} className="text-[var(--brand-accent)]" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">
                  Speak With a Family Law Attorney
                </h3>
                <p className="text-white/70 font-body leading-relaxed mb-8">
                  Family legal matters require prompt, expert attention. Our attorneys are available to discuss your situation confidentially and advise you on the best path forward.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Confidential initial consultation",
                    "Clear explanation of your legal options",
                    "Compassionate, non-judgmental advice",
                    "Transparent fee arrangements",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[var(--brand-accent)] mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 font-body text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-3">
                  <a
                    href="tel:+233000000000"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors font-body text-sm"
                  >
                    <Phone size={16} className="text-[var(--brand-accent)]" />
                    +233 (0) 000 000 000
                  </a>
                  <a
                    href="mailto:info@mitlegalconsultants.com"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors font-body text-sm"
                  >
                    <Mail size={16} className="text-[var(--brand-accent)]" />
                    info@mitlegalconsultants.com
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-muted)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="inline-block w-8 h-px bg-[var(--brand-accent)]" />
              <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest">
                Get Started
              </span>
              <span className="inline-block w-8 h-px bg-[var(--brand-accent)]" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] mb-5">
              Ready to Discuss Your Family Law Matter?
            </h2>
            <p className="text-[var(--brand-muted-foreground)] font-body text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Contact MIT Legal Consultants today for a confidential consultation. Our family law attorneys are here to listen, advise, and advocate for you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-primary)] text-white font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
              >
                Schedule a Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-primary)] hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
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
