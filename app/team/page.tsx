"use client";

import { motion } from "framer-motion";
import { Mail, ChevronRight, BookOpen, Briefcase as Linkedin } from 'lucide-react';
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/motion";
import { useTranslations } from "next-intl";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  specializations: string[];
  image: string;
  bio: string;
  education: string[];
  linkedin?: string;
  email?: string;
  yearsExp: number;
}

const teamMembers: TeamMember[] = [
  {
    id: "amara-osei",
    name: "Dr. Amara Osei",
    title: "Senior Partner",
    specializations: ["Corporate & Commercial Law", "Public International Law"],
    image: "https://www.myschoolacademy.org/_ipx/_/images/tech-entrepreneur.png",
    bio: "Dr. Osei brings over 20 years of experience advising multinational corporations, governments, and international institutions on complex cross-border transactions and public international law matters. He has represented clients before international arbitral tribunals and regional courts.",
    education: [
      "LLD, University of Pretoria",
      "LLM (International Law), Harvard Law School",
      "LLB, University of Ghana",
    ],
    linkedin: "https://linkedin.com",
    email: "a.osei@mitlegal.com",
    yearsExp: 20,
  },
  {
    id: "fatima-al-rashid",
    name: "Ms. Fatima Al-Rashid",
    title: "Partner",
    specializations: ["Mediation & Arbitration", "Civil & Criminal Litigation"],
    image: "https://saam.academy/wp-content/uploads/2022/11/Dr.-Fatima-Alrasheed-scaled.jpeg",
    bio: "Ms. Al-Rashid is a seasoned litigator and certified mediator with 15 years of courtroom experience. She has successfully resolved high-stakes commercial disputes through both litigation and alternative dispute resolution, earning a reputation for strategic precision and client advocacy.",
    education: [
      "LLM (Dispute Resolution), Queen Mary University of London",
      "LLB (Hons), University of Nairobi",
    ],
    linkedin: "https://linkedin.com",
    email: "f.alrashid@mitlegal.com",
    yearsExp: 15,
  },
  {
    id: "kwame-mensah",
    name: "Mr. Kwame Mensah",
    title: "Partner",
    specializations: ["Employment Law", "Corporate & Commercial Law"],
    image: "https://penniur.upenn.edu/sites/default/files/styles/people_medium/public/2024-08/R_8MufNxUttISYRFf_dr._james_mensah_0.jpg?h=87da0d5e&itok=ULX9ZXw3",
    bio: "Mr. Mensah advises leading corporations and financial institutions on employment law compliance, executive compensation, and workplace dispute resolution. His corporate practice spans mergers, acquisitions, and joint ventures across Sub-Saharan Africa.",
    education: [
      "LLM (Labour Law), University of Cape Town",
      "LLB, Kwame Nkrumah University of Science and Technology",
    ],
    linkedin: "https://linkedin.com",
    email: "k.mensah@mitlegal.com",
    yearsExp: 12,
  },
  {
    id: "adaeze-nwosu",
    name: "Dr. Adaeze Nwosu",
    title: "Senior Associate",
    specializations: ["Family Law", "Civil & Criminal Litigation"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    bio: "Dr. Nwosu is a dedicated family law practitioner with a decade of experience handling sensitive family matters including divorce, child custody, adoption, and domestic violence cases. She is known for her empathetic approach and tenacious courtroom advocacy.",
    education: [
      "PhD (Family Law), University of Lagos",
      "LLM, University of Ibadan",
      "LLB, University of Benin",
    ],
    linkedin: "https://linkedin.com",
    email: "a.nwosu@mitlegal.com",
    yearsExp: 10,
  },
  {
    id: "samuel-boateng",
    name: "Mr. Samuel Boateng",
    title: "Associate",
    specializations: ["Legislative Drafting & Public Policy", "Public International Law"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Mr. Boateng specializes in legislative drafting, regulatory frameworks, and public policy advisory. He has worked with government ministries, parliamentary committees, and international organizations to develop legislation and governance frameworks across multiple jurisdictions.",
    education: [
      "LLM (Public Law), University of Edinburgh",
      "LLB, University of Ghana School of Law",
    ],
    linkedin: "https://linkedin.com",
    email: "s.boateng@mitlegal.com",
    yearsExp: 7,
  },
  {
    id: "priya-sharma",
    name: "Ms. Priya Sharma",
    title: "Associate",
    specializations: ["Employment Law", "Mediation & Arbitration"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "Ms. Sharma advises employers and employees on all aspects of employment law, from contract drafting and workplace investigations to wrongful termination claims and labor tribunal representation. She is also a trained mediator specializing in workplace dispute resolution.",
    education: [
      "LLM (Employment Law), London School of Economics",
      "LLB (Hons), University of Delhi",
    ],
    linkedin: "https://linkedin.com",
    email: "p.sharma@mitlegal.com",
    yearsExp: 6,
  },
];

export default function TeamPage() {
  const t = useTranslations();

  return (
    <main className="overflow-x-hidden">
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--brand-primary)] py-24 md:py-32">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-sm font-body mb-8">
            <Link href="/" className="hover:text-[var(--brand-accent)] transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-[var(--brand-accent)]">Our Team</span>
          </nav>

          {/* Gold accent line */}
          <div className="w-16 h-1 bg-[var(--brand-accent)] rounded-full mb-6" aria-hidden="true" />

          <motion.h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Our Legal Team
          </motion.h1>
          <motion.p
            className="font-body text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            A collective of distinguished legal minds united by a commitment to excellence, integrity, and client-centered advocacy across every practice area.
          </motion.p>
        </div>
      </section>

      {/* ─── TEAM OVERVIEW ────────────────────────────────────────────────── */}
      <section className="py-16 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-body text-[var(--brand-muted-foreground)] text-lg leading-relaxed">
                MIT Legal Consultants is home to a team of highly qualified attorneys with deep expertise across seven distinct practice areas. Our professionals bring together decades of combined experience in domestic and international law, dispute resolution, legislative advisory, and corporate counsel — delivering comprehensive, results-driven legal services to every client we serve.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── ATTORNEY CARDS GRID ──────────────────────────────────────────── */}
      <section className="py-16 bg-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="w-12 h-1 bg-[var(--brand-accent)] rounded-full mx-auto mb-4" aria-hidden="true" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] mb-3">
                Meet Our Attorneys
              </h2>
              <p className="font-body text-[var(--brand-muted-foreground)] max-w-xl mx-auto">
                Each member of our team brings specialized knowledge and a proven track record of delivering exceptional legal outcomes.
              </p>
            </div>
          </Reveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {teamMembers.map((member) => (
              <motion.article
                key={member.id}
                variants={scaleIn}
                className="bg-[var(--brand-card)] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Profile image */}
                <div className="relative w-full aspect-square overflow-hidden bg-[var(--brand-muted)]">
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0A1F44&color=C9A84C&size=400`;
                    }}
                  />
                  {/* Years badge */}
                  <div className="absolute top-4 right-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] text-xs font-body font-bold px-3 py-1.5 rounded-full shadow">
                    {member.yearsExp}+ yrs
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Name & title */}
                  <div className="mb-4">
                    <h3 className="font-heading text-xl font-bold text-[var(--brand-primary)] leading-tight">
                      {member.name}
                    </h3>
                    <p className="font-body text-[var(--brand-accent)] text-sm font-semibold mt-0.5">
                      {member.title}
                    </p>
                  </div>

                  {/* Specialization tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="inline-block bg-[var(--brand-muted)] text-[var(--brand-primary)] text-xs font-body font-medium px-3 py-1 rounded-full border border-[var(--brand-border)]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="font-body text-[var(--brand-muted-foreground)] text-sm leading-relaxed mb-5">
                    {member.bio}
                  </p>

                  {/* Education */}
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen size={14} className="text-[var(--brand-accent)] flex-shrink-0" />
                      <span className="font-body text-xs font-semibold text-[var(--brand-primary)] uppercase tracking-wider">
                        Education
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {member.education.map((edu) => (
                        <li
                          key={edu}
                          className="font-body text-xs text-[var(--brand-muted-foreground)] leading-snug pl-4 relative before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--brand-accent)]"
                        >
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Contact links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[var(--brand-border)]">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        aria-label={`Email ${member.name}`}
                        className="flex items-center gap-1.5 text-xs font-body text-[var(--brand-muted-foreground)] hover:text-[var(--brand-accent)] transition-colors"
                      >
                        <Mail size={14} />
                        <span>{member.email}</span>
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn profile of ${member.name}`}
                        className="ml-auto flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--brand-muted)] hover:bg-[var(--brand-accent)] hover:text-[var(--brand-primary)] text-[var(--brand-muted-foreground)] transition-colors"
                      >
                        <Linkedin size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── JOIN OUR TEAM CTA ────────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <div className="w-12 h-1 bg-[var(--brand-accent)] rounded-full mx-auto mb-6" aria-hidden="true" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Join Our Team
              </h2>
              <p className="font-body text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                We are always looking for talented, driven legal professionals who share our commitment to excellence and client service. If you are passionate about the law and want to grow with a forward-thinking firm, we would love to hear from you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                Get in Touch
                <ChevronRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
