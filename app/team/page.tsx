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
    title: "Senior Associate",
    specializations: ["Family Law", "Civil Litigation"],
    image: "https://faculty.mdanderson.org/content/dam/mdanderson/images/fis/adaeze_nwosuiheme.jpg.resize.jpg",
    bio: "Dr. Nwosu is a compassionate and tenacious advocate for families navigating complex legal challenges. With a doctorate in family law and a decade of practice, she has guided hundreds of clients through divorce, custody, and adoption proceedings with sensitivity and expertise.",
    education: ["PhD (Family Law), University of Lagos", "LLM, University of Edinburgh", "LLB, University of Ibadan"],
    linkedin: "https://linkedin.com",
    email: "a.nwosu@mitlegal.com",
    yearsExp: 10,
  },
  {
    id: "ibrahim-diallo",
    name: "Mr. Ibrahim Diallo",
    title: "Senior Associate",
    specializations: ["Legislative Drafting & Policy", "Public International Law"],
    image: "/images/attorney-ibrahim-diallo.jpg",
    bio: "Mr. Diallo has advised governments and regional bodies on legislative reform, constitutional drafting, and public policy development. His work spans francophone and anglophone Africa, bringing a unique multilingual and multicultural perspective to complex policy challenges.",
    education: ["LLM (Public Law), Sciences Po Paris", "Maîtrise en Droit, Université Cheikh Anta Diop"],
    linkedin: "https://linkedin.com",
    email: "i.diallo@mitlegal.com",
    yearsExp: 9,
  },
  {
    id: "priya-sharma",
    name: "Ms. Priya Sharma",
    title: "Associate",
    specializations: ["Corporate & Commercial Law", "Employment Law"],
    image: "/images/attorney-priya-sharma.jpg",
    bio: "Ms. Sharma focuses on corporate governance, commercial contracts, and employment compliance for technology and financial services clients. She brings a meticulous approach to transactional work and a deep understanding of regulatory frameworks across multiple jurisdictions.",
    education: ["LLM (Corporate Law), London School of Economics", "LLB (Hons), National Law School of India University"],
    linkedin: "https://linkedin.com",
    email: "p.sharma@mitlegal.com",
    yearsExp: 6,
  },
  {
    id: "chidi-okafor",
    name: "Mr. Chidi Okafor",
    title: "Associate",
    specializations: ["Civil & Criminal Litigation", "Mediation & Arbitration"],
    image: "/images/attorney-chidi-okafor.jpg",
    bio: "Mr. Okafor is a dynamic litigator with a strong track record in commercial and criminal matters. He has appeared before courts at all levels and brings energy, rigour, and creative legal thinking to every case he handles.",
    education: ["BL, Nigerian Law School", "LLB, University of Benin"],
    linkedin: "https://linkedin.com",
    email: "c.okafor@mitlegal.com",
    yearsExp: 5,
  },
  {
    id: "amina-hassan",
    name: "Ms. Amina Hassan",
    title: "Associate",
    specializations: ["Family Law", "Employment Law"],
    image: "/images/attorney-amina-hassan.jpg",
    bio: "Ms. Hassan is a dedicated advocate for individuals and families, with particular expertise in matrimonial finance, child welfare, and workplace discrimination claims. She is known for her empathetic client approach and her ability to achieve practical, lasting outcomes.",
    education: ["LLM (Family and Child Law), University of Exeter", "LLB, Makerere University"],
    linkedin: "https://linkedin.com",
    email: "a.hassan@mitlegal.com",
    yearsExp: 4,
  },
];

const stats = [
  { value: "50+", label: "Years Combined Experience" },
  { value: "8", label: "Specialist Attorneys" },
  { value: "12+", label: "Jurisdictions Served" },
  { value: "500+", label: "Cases Successfully Resolved" },
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards of legal practice, delivering work that is thorough, precise, and strategically sound.",
  },
  {
    icon: Users,
    title: "Client-Centred",
    description: "Every client receives personalised attention. We listen, understand, and tailor our counsel to your specific circumstances and goals.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Our team brings international training and cross-border experience, giving you an edge in complex multi-jurisdictional matters.",
  },
  {
    icon: BookOpen,
    title: "Integrity",
    description: "We operate with unwavering ethical standards, ensuring transparency, confidentiality, and honest advice at every stage.",
  },
];

export default function TeamPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-[var(--brand-primary)] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--brand-accent)] blur-[120px] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--brand-accent)] blur-[100px] -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4"
            >
              {t("team.eyebrow")}
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance mb-6"
            >
              {t("team.heroTitle")}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="font-body text-white/70 text-lg leading-relaxed max-w-2xl text-pretty"
            >
              {t("team.heroSubtitle")}
            </motion.p>
          </motion.div>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent" />
      </section>

      {/* Stats bar */}
      <Reveal>
        <section className="bg-[var(--brand-primary)]/5 border-b border-[var(--brand-primary)]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center"
                >
                  <p className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="font-body text-sm text-[var(--brand-primary)]/60 leading-snug">
                    {t(`team.stat${i}`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Partners & Senior Partners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Reveal>
          <div className="mb-14">
            <p className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-3">
              {t("team.partnersEyebrow")}
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] tracking-tight text-balance">
              {t("team.partnersTitle")}
            </h2>
          </div>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers
            .filter((m) => m.title === "Senior Partner" || m.title === "Partner")
            .map((member) => (
              <AttorneyCard key={member.id} member={member} t={t} featured />
            ))}
        </motion.div>
      </section>

      {/* Associates */}
      <section className="bg-[var(--brand-primary)]/3 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-14">
              <p className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-3">
                {t("team.associatesEyebrow")}
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] tracking-tight text-balance">
                {t("team.associatesTitle")}
              </h2>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {teamMembers
              .filter((m) => m.title === "Associate" || m.title === "Senior Associate")
              .map((member) => (
                <AttorneyCard key={member.id} member={member} t={t} featured={false} />
              ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-3">
              {t("team.valuesEyebrow")}
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] tracking-tight text-balance">
              {t("team.valuesTitle")}
            </h2>
            <p className="font-body text-[var(--brand-primary)]/60 text-lg mt-4 max-w-2xl mx-auto leading-relaxed text-pretty">
              {t("team.valuesSubtitle")}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <Reveal key={val.title} delay={i * 0.1}>
                <div className="bg-white border border-[var(--brand-primary)]/8 rounded-2xl p-7 shadow-[0_1px_2px_rgba(10,31,68,0.04),0_8px_24px_-8px_rgba(10,31,68,0.08)] h-full">
                  <div className="w-11 h-11 rounded-xl bg-[var(--brand-accent)]/15 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[var(--brand-accent)]" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[var(--brand-primary)] mb-2">
                    {t(`team.value${i}Title`)}
                  </h3>
                  <p className="font-body text-sm text-[var(--brand-primary)]/60 leading-relaxed">
                    {t(`team.value${i}Desc`)}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Join the team CTA */}
      <Reveal>
        <section className="bg-[var(--brand-primary)] mx-4 sm:mx-6 lg:mx-8 rounded-3xl mb-24 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--brand-accent)] blur-[100px] translate-x-1/4 -translate-y-1/4" />
          </div>
          <div className="relative max-w-4xl mx-auto px-8 py-16 text-center">
            <p className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
              {t("team.joinEyebrow")}
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance mb-5">
              {t("team.joinTitle")}
            </h2>
            <p className="font-body text-white/65 text-lg leading-relaxed max-w-xl mx-auto mb-8 text-pretty">
              {t("team.joinSubtitle")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-xl hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
            >
              {t("team.joinCta")}
              <ChevronRight size={16} />
            </Link>
          </div>
        </section>
      </Reveal>
    </main>
  );
}

interface AttorneyCardProps {
  member: TeamMember;
  t: ReturnType<typeof useTranslations>;
  featured: boolean;
}

function AttorneyCard({ member, featured }: AttorneyCardProps) {
  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className={`bg-white rounded-2xl overflow-hidden border border-[var(--brand-primary)]/8 shadow-[0_1px_2px_rgba(10,31,68,0.04),0_8px_24px_-8px_rgba(10,31,68,0.10)] flex flex-col group transition-shadow duration-300 hover:shadow-[0_4px_32px_-8px_rgba(10,31,68,0.18)]`}
    >
      {/* Photo */}
      <div className={`relative overflow-hidden bg-[var(--brand-primary)]/5 ${featured ? "h-64" : "h-52"}`}>
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent) {
              const fallback = document.createElement("div");
              fallback.className = "w-full h-full flex items-center justify-center bg-[var(--brand-primary)]/10";
              const initials = document.createElement("span");
              initials.className = "font-heading text-4xl font-bold text-[var(--brand-primary)]/30";
              initials.textContent = member.name
                .split(" ")
                .map((n) => n[0] ?? "")
                .join("")
                .slice(0, 2);
              fallback.appendChild(initials);
              parent.appendChild(fallback);
            }
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Social links on hover */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} LinkedIn`}
              className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-[var(--brand-accent)] hover:text-[var(--brand-primary)] transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Linkedin size={14} />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              aria-label={`Email ${member.name}`}
              className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-[var(--brand-accent)] hover:text-[var(--brand-primary)] transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Mail size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3">
          <span className="inline-block text-[10px] font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] bg-[var(--brand-accent)]/10 px-2.5 py-1 rounded-full mb-2">
            {member.title}
          </span>
          <h3 className="font-heading text-xl font-bold text-[var(--brand-primary)] leading-tight">
            {member.name}
          </h3>
        </div>

        {featured && (
          <p className="font-body text-sm text-[var(--brand-primary)]/60 leading-relaxed mb-4 line-clamp-3">
            {member.bio}
          </p>
        )}

        {/* Specializations */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-[var(--brand-primary)]/8">
          {member.specializations.map((spec) => (
            <span
              key={spec}
              className="text-[10px] font-body font-medium text-[var(--brand-primary)]/70 bg-[var(--brand-primary)]/5 border border-[var(--brand-primary)]/10 px-2 py-0.5 rounded-full"
            >
              {spec}
            </span>
          ))}
        </div>

        {featured && (
          <div className="mt-4 pt-4 border-t border-[var(--brand-primary)]/8">
            <p className="text-[10px] font-body font-semibold uppercase tracking-widest text-[var(--brand-primary)]/40 mb-2">
              Education
            </p>
            <ul className="space-y-1">
              {(member.education ?? []).slice(0, 2).map((edu) => (
                <li key={edu} className="font-body text-xs text-[var(--brand-primary)]/55 leading-snug">
                  {edu}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.article>
  );
}