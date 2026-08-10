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
  bio: string;
  education: string[];
  linkedin?: string;
  email?: string;
  yearsExp: number;
}

function getInitials(name: string): string {
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const teamMembers: TeamMember[] = [
  {
    id: 'muhammad-ibrahim-tariq',
    name: 'Muhammad Ibrahim Tariq',
    title: 'Partner',
    specializations: ['Corporate & Commercial Law', 'Legislative Drafting & Public Policy'],
    bio: 'Muhammad Ibrahim Tariq is a dedicated legal professional with extensive experience in corporate law and legislative drafting. He provides strategic counsel to businesses and institutions navigating complex legal and regulatory environments.',
    education: ['LLB, Faculty of Law'],
    email: 'ibrahim.tariq@mitlegal.com',
    yearsExp: 10,
  },
  {
    id: 'safi-ullah-khan',
    name: 'Safi Ullah Khan',
    title: 'Partner',
    specializations: ['Civil & Criminal Litigation', 'Employment Law'],
    bio: 'Safi Ullah Khan is a seasoned litigator with a strong track record in civil and criminal matters. He is committed to vigorous client advocacy and achieving results through meticulous case preparation and courtroom expertise.',
    education: ['LLB, Faculty of Law'],
    email: 'safi.khan@mitlegal.com',
    yearsExp: 10,
  },
  {
    id: 'ambreen-khalid',
    name: 'Ambreen Khalid',
    title: 'Partner',
    specializations: ['Family Law', 'Mediation & Arbitration'],
    bio: 'Ambreen Khalid brings compassion and expertise to family law and dispute resolution. She guides clients through sensitive legal matters with professionalism, ensuring their rights and interests are protected at every stage.',
    education: ['LLB, Faculty of Law'],
    email: 'ambreen.khalid@mitlegal.com',
    yearsExp: 8,
  },
  {
    id: 'hassan-masood',
    name: 'Hassan Masood',
    title: 'IT Consultant',
    specializations: ['Legal Technology', 'Digital Infrastructure'],
    bio: 'Hassan Masood supports MIT Legal Consultants with cutting-edge technology solutions, ensuring the firm operates with modern digital infrastructure, cybersecurity best practices, and efficient systems for client service delivery.',
    education: ['BSc Computer Science'],
    email: 'hassan.masood@mitlegal.com',
    yearsExp: 6,
  },
];

export default function TeamPage() {
  const t = useTranslations();

  return (
    <main className="overflow-x-hidden">
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--brand-primary)] py-24 md:py-32 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--brand-accent)]/5" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[var(--brand-accent)]/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/20 mb-6">
              <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest">
                Our People
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Meet Our Team
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-body text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              MIT Legal Consultants is built on the expertise, dedication, and integrity of our attorneys
              and professional staff. Each member of our team brings specialized knowledge and a shared
              commitment to exceptional client service.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── TEAM GRID ────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] mb-4">
                Attorneys &amp; Professional Staff
              </h2>
              <p className="font-body text-[var(--brand-muted-foreground)] text-base max-w-xl mx-auto">
                Our team combines deep legal expertise with a client-first philosophy, delivering
                strategic counsel across seven distinct practice areas.
              </p>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={fadeInUp}
                className="bg-[var(--brand-card)] rounded-2xl border border-[var(--brand-border)] shadow-[0_1px_3px_rgba(10,31,68,0.06),0_8px_24px_-8px_rgba(10,31,68,0.10)] overflow-hidden group hover:shadow-[0_4px_12px_rgba(10,31,68,0.10),0_20px_48px_-12px_rgba(10,31,68,0.18)] transition-all duration-300"
              >
                {/* Card top accent bar */}
                <div className="h-1 bg-[var(--brand-accent)]" />

                <div className="p-8">
                  {/* Avatar + name row */}
                  <div className="flex items-start gap-5 mb-6">
                    {/* Initials avatar */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[var(--brand-primary)] flex items-center justify-center shadow-md">
                      <span className="font-heading text-xl font-bold text-[var(--brand-accent)]">
                        {getInitials(member.name)}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-xl font-bold text-[var(--brand-primary)] leading-tight mb-1">
                        {member.name}
                      </h3>
                      <p className="font-body text-[var(--brand-accent)] text-sm font-semibold uppercase tracking-wide">
                        {member.title}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="font-body text-[var(--brand-muted-foreground)] text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Specializations */}
                  <div className="mb-6">
                    <p className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--brand-primary)] mb-3">
                      Practice Areas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.specializations.map((spec) => (
                        <span
                          key={spec}
                          className="inline-block px-3 py-1 rounded-full bg-[var(--brand-muted)] text-[var(--brand-primary)] text-xs font-body font-medium border border-[var(--brand-border)]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  {member.education.length > 0 && (
                    <div className="mb-6">
                      <p className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--brand-primary)] mb-3">
                        Education
                      </p>
                      <ul className="space-y-1">
                        {member.education.map((edu) => (
                          <li key={edu} className="flex items-center gap-2 text-sm font-body text-[var(--brand-muted-foreground)]">
                            <BookOpen size={13} className="text-[var(--brand-accent)] flex-shrink-0" />
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Contact row */}
                  {member.email && (
                    <div className="pt-5 border-t border-[var(--brand-border)] flex items-center justify-between">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 text-sm font-body text-[var(--brand-primary)] hover:text-[var(--brand-accent)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] rounded"
                      >
                        <Mail size={14} />
                        {member.email}
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── JOIN THE TEAM CTA ────────────────────────────────────────────── */}
      <section className="bg-[var(--brand-muted)] py-16 md:py-20 border-t border-[var(--brand-border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] mb-4">
              Interested in Joining Our Team?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body text-[var(--brand-muted-foreground)] text-base leading-relaxed max-w-xl mx-auto mb-8">
              MIT Legal Consultants welcomes applications from talented legal professionals who share our
              commitment to excellence, integrity, and client service.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[#0d2a5e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
            >
              Get In Touch
              <ChevronRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
