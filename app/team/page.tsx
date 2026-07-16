"use client";

import { motion } from "framer-motion";
import { Briefcase as Linkedin, Mail, ChevronRight, Award, BookOpen, Users, Globe } from 'lucide-react';
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
    education: ["LLD, University of Pretoria", "LLM (International Law), Harvard Law School", "LLB, University of Ghana"],
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
    education: ["LLM (Dispute Resolution), Queen Mary University of London", "LLB (Hons), University of Nairobi"],
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
    education: ["LLM (Labour Law), University of Cape Town", "LLB, Kwame Nkrumah University of Science and Technology"],
    linkedin: "https://linkedin.com",
    email: "k.mensah@mitlegal.com",
    yearsExp: 12,
  },
  {
    id: "adaeze-nwosu",
    name: "Dr. Adaeze Nwosu",
    title: "Partner",
    specializations: ["Family Law", "Civil & Criminal Litigation"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    bio: "Dr. Nwosu is a distinguished family law practitioner and civil litigator with over 14 years of experience. She has handled complex divorce proceedings, child custody disputes, and inheritance matters with sensitivity and legal precision. Her litigation practice covers both civil and criminal matters at all court levels.",
    education: ["PhD (Family Law), University of Lagos", "LLM (Litigation), University of Ibadan", "LLB (Hons), University of Benin"],
    linkedin: "https://linkedin.com",
    email: "a.nwosu@mitlegal.com",
    yearsExp: 14,
  },
  {
    id: "samuel-boateng",
    name: "Mr. Samuel Boateng",
    title: "Senior Associate",
    specializations: ["Legislative Drafting & Public Policy", "Public International Law"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Mr. Boateng specialises in legislative drafting, regulatory frameworks, and public policy advisory. He has worked with government ministries, parliamentary committees, and international organisations to develop comprehensive legal frameworks and governance structures across multiple jurisdictions.",
    education: ["LLM (Public International Law), University of Edinburgh", "LLB, University of Ghana School of Law", "Diploma in Legislative Drafting, Commonwealth Secretariat"],
    linkedin: "https://linkedin.com",
    email: "s.boateng@mitlegal.com",
    yearsExp: 10,
  },
  {
    id: "priya-nair",
    name: "Ms. Priya Nair",
    title: "Associate",
    specializations: ["Employment Law", "Mediation & Arbitration"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "Ms. Nair is a dedicated employment law attorney and certified mediator with 8 years of experience advising both employers and employees on workplace rights, disciplinary procedures, wrongful termination claims, and labour compliance. She brings a pragmatic, solution-focused approach to every matter.",
    education: ["LLM (Employment & Labour Law), London School of Economics", "LLB (Hons), University of Mumbai"],
    linkedin: "https://linkedin.com",
    email: "p.nair@mitlegal.com",
    yearsExp: 8,
  },
];

const stats = [
  { icon: Users, value: "6+", label: "Expert Attorneys" },
  { icon: Award, value: "20+", label: "Years Combined Experience" },
  { icon: Globe, value: "7", label: "Practice Areas" },
  { icon: BookOpen, value: "15+", label: "Jurisdictions Served" },
];

export default function TeamPage() {
  const t = useTranslations();

  return (
    <main className="overflow-x-hidden">
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--brand-primary)] py-24 md:py-32 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--brand-accent) 0, var(--brand-accent) 1px, transparent 0, transparent 50%)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-accent)]/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-accent)]/15 border border-[var(--brand-accent)]/30 text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-6">
                <Users size={12} />
                Our Legal Team
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Meet Our{" "}
              <span className="text-[var(--brand-accent)]">Expert Attorneys</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-white/70 text-lg font-body leading-relaxed"
            >
              Our team of distinguished legal professionals brings decades of combined experience,
              academic excellence, and a shared commitment to delivering exceptional results for every client.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-[var(--brand-accent)] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 justify-center">
                <stat.icon size={24} className="text-[var(--brand-primary)] flex-shrink-0" />
                <div>
                  <p className="font-heading text-2xl font-bold text-[var(--brand-primary)] leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[var(--brand-primary)]/70 text-xs font-body font-semibold uppercase tracking-wide mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM GRID ────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[var(--brand-background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--brand-primary)] mb-4">
              Our Legal Professionals
            </h2>
            <p className="text-[var(--brand-muted-foreground)] font-body max-w-2xl mx-auto">
              Each member of our team is selected for their expertise, integrity, and dedication to client success.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={scaleIn}
                className="bg-[var(--brand-card)] rounded-2xl overflow-hidden shadow-sm border border-[var(--brand-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Photo */}
                <div className="relative h-64 bg-[var(--brand-muted)] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-[var(--brand-muted)]"><span class="font-heading text-5xl font-bold text-[var(--brand-primary)]/30">${member.name.split(" ").map((n: string) => n[0]).join("")}</span></div>`;
                      }
                    }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/60 via-transparent to-transparent" />
                  {/* Years badge */}
                  <div className="absolute top-4 right-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] text-xs font-body font-bold px-3 py-1 rounded-full">
                    {member.yearsExp}+ yrs
                  </div>
                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-heading text-xl font-bold text-white leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-[var(--brand-accent)] text-sm font-body font-semibold mt-0.5">
                      {member.title}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Specializations */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="px-2.5 py-1 bg-[var(--brand-muted)] text-[var(--brand-primary)] text-xs font-body font-semibold rounded-full border border-[var(--brand-border)]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-[var(--brand-muted-foreground)] text-sm font-body leading-relaxed mb-5 flex-1">
                    {member.bio}
                  </p>

                  {/* Education */}
                  <div className="mb-5">
                    <p className="text-[var(--brand-primary)] text-xs font-body font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <BookOpen size={12} />
                      Education
                    </p>
                    <ul className="space-y-1">
                      {member.education.map((edu) => (
                        <li
                          key={edu}
                          className="text-[var(--brand-muted-foreground)] text-xs font-body flex items-start gap-1.5"
                        >
                          <ChevronRight size={12} className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[var(--brand-border)]">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        className="flex items-center gap-1.5 text-xs font-body font-semibold text-[var(--brand-primary)] hover:text-[var(--brand-accent)] transition-colors duration-200"
                      >
                        <Linkedin size={14} />
                        LinkedIn
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        aria-label={`Email ${member.name}`}
                        className="flex items-center gap-1.5 text-xs font-body font-semibold text-[var(--brand-primary)] hover:text-[var(--brand-accent)] transition-colors duration-200 ml-auto"
                      >
                        <Mail size={14} />
                        {member.email}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── JOIN THE TEAM CTA ────────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--brand-primary)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, var(--brand-accent) 0, var(--brand-accent) 1px, transparent 0, transparent 50%)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-accent)]/15 border border-[var(--brand-accent)]/30 text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-6">
              <Award size={12} />
              Join Our Team
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-5">
              Are You a Legal Professional?{" "}
              <span className="text-[var(--brand-accent)]">We&apos;d Love to Hear From You.</span>
            </h2>
            <p className="text-white/70 font-body text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              MIT Legal Consultants is always looking for talented, driven attorneys who share our commitment
              to excellence, integrity, and client-centered service. Send us your profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                Get in Touch
                <ChevronRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/30 text-white font-body font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                Learn About Our Firm
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
