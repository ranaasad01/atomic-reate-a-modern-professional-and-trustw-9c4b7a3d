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
              Meet the Team at{" "}
              <span className="text-[var(--brand-accent)]">MIT Legal Consultants</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-body text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
              Our team combines deep legal expertise with a commitment to client-centred service,
              delivering practical, results-oriented counsel across every practice area.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── TEAM GRID ────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-3">
                Legal Professionals
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] mb-4">
                Our Attorneys &amp; Consultants
              </h2>
              <p className="font-body text-[var(--brand-muted-foreground)] max-w-2xl mx-auto">
                MIT Legal Consultants is built on a foundation of exceptional talent. Each member of our
                team brings specialized expertise and an unwavering dedication to client success.
              </p>
            </div>
          </Reveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={scaleIn}
                className="bg-[var(--brand-card)] rounded-2xl shadow-sm border border-[var(--brand-border)] overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-8">
                  {/* Avatar + Name Row */}
                  <div className="flex items-start gap-5 mb-6">
                    {/* Avatar */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[var(--brand-primary)] flex items-center justify-center">
                      <span className="font-heading text-xl font-bold text-[var(--brand-accent)]">
                        {getInitials(member.name)}
                      </span>
                    </div>

                    {/* Name & Title */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-xl font-bold text-[var(--brand-primary)] leading-tight">
                        {member.name}
                      </h3>
                      <p className="font-body text-[var(--brand-accent)] text-sm font-semibold mt-0.5">
                        {member.title}
                      </p>
                      <p className="font-body text-[var(--brand-muted-foreground)] text-xs mt-1">
                        {member.yearsExp}+ years experience
                      </p>
                    </div>
                  </div>

                  {/* Specializations */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {member.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="inline-block px-3 py-1 rounded-full bg-[var(--brand-muted)] text-[var(--brand-primary)] text-xs font-body font-medium"
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
                      <BookOpen size={14} className="text-[var(--brand-accent)]" />
                      <span className="font-body text-xs font-semibold text-[var(--brand-primary)] uppercase tracking-wider">
                        Education
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {member.education.map((edu) => (
                        <li key={edu} className="font-body text-sm text-[var(--brand-muted-foreground)] flex items-start gap-2">
                          <ChevronRight size={14} className="mt-0.5 flex-shrink-0 text-[var(--brand-accent)]" />
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[var(--brand-border)]">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-[var(--brand-primary)] hover:text-[var(--brand-accent)] transition-colors"
                        aria-label={`Email ${member.name}`}
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
                        className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-[var(--brand-primary)] hover:text-[var(--brand-accent)] transition-colors ml-auto"
                        aria-label={`LinkedIn profile of ${member.name}`}
                      >
                        <Linkedin size={14} />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── JOIN THE TEAM CTA ─────────────────────────────────────────────── */}
      <section className="py-16 bg-[var(--brand-muted)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] mb-4">
              Join MIT Legal Consultants
            </h2>
            <p className="font-body text-[var(--brand-muted-foreground)] text-lg mb-8 max-w-2xl mx-auto">
              We are always looking for talented legal professionals who share our commitment to
              excellence, integrity, and client-centred service.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
            >
              Get In Touch
              <ChevronRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─── CONSULT CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-4">
              Ready to Work With Us?
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
              Schedule a Consultation with MIT Legal Consultants
            </h2>
            <p className="font-body text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Our team is ready to provide the expert legal counsel you need. Contact us today to
              discuss your matter in confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                Request a Consultation
                <ChevronRight size={16} />
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/30 text-white font-body font-semibold text-sm rounded-lg hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                View Practice Areas
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
