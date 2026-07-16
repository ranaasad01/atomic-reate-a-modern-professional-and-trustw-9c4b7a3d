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
  "Estate Administration",
  "Parenting Plan Disputes",
  "Relocation Applications",
  "Step-Parent Adoption",
  "International Adoption",
];

const relatedAreas = [
  {
    id: "mediation",
    title: "Mediation & Arbitration",
    description: "Resolve family disputes efficiently and confidentially outside of court.",
    href: "/practice-areas/mediation-arbitration",
  },
  {
    id: "civil",
    title: "Civil & Criminal Litigation",
    description: "Vigorous court representation when litigation becomes necessary.",
    href: "/practice-areas/civil-criminal-litigation",
  },
];

export default function FamilyLawPage() {
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--brand-accent)]/30 bg-[var(--brand-accent)]/10 mb-6">
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
              <p className="font-body text-white/70 text-lg leading-relaxed mb-10 max-w-2xl">
                Compassionate, strategic legal counsel for life&apos;s most personal challenges. MIT Legal Consultants
                protects your family&apos;s rights and interests with sensitivity, discretion, and unwavering
                professionalism.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
                >
                  Schedule a Consultation
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/practice-areas"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  All Practice Areas
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 2. Overview ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-4">
                  Our Approach
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] mb-6 leading-tight">
                  Protecting What Matters Most
                </h2>
                <div className="space-y-4 font-body text-[var(--brand-muted-foreground)] leading-relaxed">
                  <p>
                    Family law matters are among the most emotionally charged and personally significant legal
                    issues a person can face. At MIT Legal Consultants, we understand that behind every case
                    is a family navigating profound change — and we approach each matter with the care,
                    sensitivity, and strategic rigor it deserves.
                  </p>
                  <p>
                    Our family law attorneys combine deep legal expertise with genuine compassion, ensuring
                    that your rights are protected and your voice is heard at every stage of the process.
                    Whether you are going through a divorce, fighting for custody of your children, or
                    navigating a complex inheritance dispute, MIT Legal Consultants is by your side.
                  </p>
                  <p>
                    We are committed to achieving outcomes that serve the long-term wellbeing of you and your
                    family — through negotiation, mediation, or, when necessary, vigorous court representation.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "500+", label: "Family Matters Handled" },
                  { value: "15+", label: "Years of Family Law Practice" },
                  { value: "98%", label: "Client Satisfaction Rate" },
                  { value: "6", label: "Core Service Areas" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[var(--brand-muted)] rounded-xl p-6 text-center"
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

      {/* ── 3. Services ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-3">
                What We Handle
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] mb-4">
                Family Law Services
              </h2>
              <p className="font-body text-[var(--brand-muted-foreground)] max-w-2xl mx-auto">
                MIT Legal Consultants offers comprehensive family law services tailored to your unique
                circumstances and goals.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.id} delay={index * 0.07}>
                  <div className="bg-white rounded-2xl border border-[var(--brand-border)] p-8 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/10 flex items-center justify-center mb-5 flex-shrink-0">
                      <Icon size={24} className="text-[var(--brand-primary)]" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-[var(--brand-primary)] mb-3">
                      {service.title}
                    </h3>
                    <p className="font-body text-[var(--brand-muted-foreground)] text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <ul className="mt-auto space-y-2">
                      {service.matters.map((matter) => (
                        <li key={matter} className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-[var(--brand-accent)] mt-0.5 flex-shrink-0" />
                          <span className="font-body text-xs text-[var(--brand-foreground)]">{matter}</span>
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

      {/* ── 4. Typical Matters ───────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-3">
                Scope of Practice
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] mb-4">
                Typical Matters We Handle
              </h2>
              <p className="font-body text-[var(--brand-muted-foreground)] max-w-2xl mx-auto">
                MIT Legal Consultants regularly advises on a broad range of family law matters, including:
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {typicalMatters.map((matter) => (
                <div
                  key={matter}
                  className="flex items-center gap-2 bg-[var(--brand-muted)] rounded-lg px-4 py-3"
                >
                  <CheckCircle size={14} className="text-[var(--brand-accent)] flex-shrink-0" />
                  <span className="font-body text-sm text-[var(--brand-foreground)]">{matter}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5. Why Choose MIT Legal Consultants ──────────────────────────── */}
      <section className="py-20 px-4 bg-[var(--brand-primary)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-3">
                Why Choose Us
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                The MIT Legal Consultants Difference
              </h2>
              <p className="font-body text-white/60 max-w-2xl mx-auto">
                When your family&apos;s future is at stake, you need attorneys who combine legal excellence
                with genuine human understanding.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: "compassion",
                icon: Heart,
                title: "Compassionate Counsel",
                body: "We treat every client with empathy and respect, recognizing the emotional weight of family legal matters and providing support beyond just legal advice.",
              },
              {
                id: "confidentiality",
                icon: Shield,
                title: "Absolute Confidentiality",
                body: "Your family's private matters are handled with the strictest discretion. MIT Legal Consultants maintains rigorous confidentiality standards at every stage.",
              },
              {
                id: "strategy",
                icon: Scale,
                title: "Strategic Advocacy",
                body: "We develop tailored legal strategies that prioritize your long-term interests and the wellbeing of your children, not just short-term wins.",
              },
              {
                id: "experience",
                icon: CheckCircle,
                title: "Proven Experience",
                body: "Our family law attorneys have handled hundreds of matters across the full spectrum of family law, from amicable separations to complex contested proceedings.",
              },
              {
                id: "mediation",
                icon: Users,
                title: "Mediation-First Approach",
                body: "Where appropriate, we encourage and facilitate mediation to achieve faster, less adversarial, and more cost-effective resolutions for families.",
              },
              {
                id: "responsive",
                icon: FileText,
                title: "Responsive Communication",
                body: "We keep you informed at every step. MIT Legal Consultants is committed to prompt, clear communication so you always know where your matter stands.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.id} delay={index * 0.07}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors duration-200">
                    <div className="w-11 h-11 rounded-lg bg-[var(--brand-accent)]/15 flex items-center justify-center mb-4">
                      <Icon size={22} className="text-[var(--brand-accent)]" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="font-body text-white/60 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. Related Practice Areas ────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-3">
                Related Services
              </p>
              <h2 className="font-heading text-3xl font-bold text-[var(--brand-primary)] mb-4">
                Related Practice Areas
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {relatedAreas.map((area) => (
              <Reveal key={area.id}>
                <Link
                  href={area.href}
                  className="group block bg-white rounded-2xl border border-[var(--brand-border)] p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                >
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-2 group-hover:text-[var(--brand-accent)] transition-colors">
                    {area.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--brand-muted-foreground)] mb-4">
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="bg-[var(--brand-primary)] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,168,76,0.12) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-[var(--brand-accent)]/15 flex items-center justify-center mx-auto mb-6">
                  <Heart size={28} className="text-[var(--brand-accent)]" />
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                  Speak with a Family Law Attorney
                </h2>
                <p className="font-body text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                  MIT Legal Consultants is ready to listen, advise, and advocate for you and your family.
                  Contact us today to schedule a confidential consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
                  >
                    Schedule a Consultation
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="tel:+233300000000"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    <Phone size={16} />
                    Call Us Now
                  </a>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/50 text-sm font-body">
                  <span className="flex items-center gap-2">
                    <Phone size={14} />
                    +233 (0) 30 000 0000
                  </span>
                  <span className="hidden sm:block w-px h-4 bg-white/20" />
                  <span className="flex items-center gap-2">
                    <Mail size={14} />
                    info@mitlegal.com
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
