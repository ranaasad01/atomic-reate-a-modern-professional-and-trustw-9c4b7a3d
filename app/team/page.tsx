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
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Meet Our{" "}
              <span className="text-[var(--brand-accent)]">Legal Team</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/70 text-lg md:text-xl font-body max-w-3xl mx-auto leading-relaxed">
              Our attorneys combine deep legal expertise with a genuine commitment to client success.
              Each member of our team brings specialized knowledge and a results-driven approach
              to every matter we handle.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── TEAM GRID ────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] mb-4">
                Attorneys &amp; Consultants
              </h2>
              <p className="text-[var(--brand-muted-foreground)] font-body max-w-2xl mx-auto">
                Dedicated professionals committed to delivering exceptional legal counsel
                across all practice areas.
              </p>
            </div>
          </Reveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={scaleIn}
                className="bg-[var(--brand-card)] rounded-2xl border border-[var(--brand-border)] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-br from-[var(--brand-primary)] to-[#1a3a6e] p-8 text-center">
                  {/* SVG Avatar with initials */}
                  <div className="w-24 h-24 rounded-full bg-[var(--brand-primary)] flex items-center justify-center mx-auto mb-4 border-4 border-[var(--brand-accent)]">
                    <span className="font-heading text-white text-2xl font-bold">{getInitials(member.name)}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[var(--brand-accent)] text-sm font-body font-semibold uppercase tracking-wider">
                    {member.title}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Specializations */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="px-3 py-1 bg-[var(--brand-muted)] text-[var(--brand-primary)] text-xs font-body font-semibold rounded-full border border-[var(--brand-border)]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-[var(--brand-muted-foreground)] text-sm font-body leading-relaxed mb-5">
                    {member.bio}
                  </p>

                  {/* Education */}
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen size={14} className="text-[var(--brand-accent)]" />
                      <span className="text-[var(--brand-primary)] text-xs font-body font-bold uppercase tracking-wider">
                        Education
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {member.education.map((edu) => (
                        <li
                          key={edu}
                          className="text-[var(--brand-muted-foreground)] text-xs font-body flex items-start gap-2"
                        >
                          <ChevronRight size={12} className="text-[var(--brand-accent)] mt-0.5 flex-shrink-0" />
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Years of Experience */}
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--brand-border)]">
                    <span className="text-[var(--brand-muted-foreground)] text-xs font-body">
                      <span className="font-bold text-[var(--brand-primary)]">{member.yearsExp}+</span> years experience
                    </span>

                    {/* Contact links */}
                    <div className="flex items-center gap-2">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} LinkedIn`}
                          className="w-8 h-8 rounded-lg bg-[var(--brand-muted)] hover:bg-[var(--brand-primary)] hover:text-white text-[var(--brand-primary)] flex items-center justify-center transition-colors duration-200"
                        >
                          <Linkedin size={14} />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          aria-label={`Email ${member.name}`}
                          className="w-8 h-8 rounded-lg bg-[var(--brand-muted)] hover:bg-[var(--brand-accent)] hover:text-white text-[var(--brand-primary)] flex items-center justify-center transition-colors duration-200"
                        >
                          <Mail size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── JOIN OUR TEAM CTA ────────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-muted)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/30 mb-6">
              <span className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest">
                Careers
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] mb-4">
              Join Our Growing Team
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[var(--brand-muted-foreground)] font-body text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              MIT Legal Consultants is always looking for talented, driven legal professionals
              who share our commitment to excellence, integrity, and client service.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-primary)] text-white font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-all duration-200 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
              >
                Get in Touch
                <ChevronRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg border-2 border-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
              >
                About the Firm
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
