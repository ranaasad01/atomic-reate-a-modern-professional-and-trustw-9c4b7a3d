"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/motion";

export default function TeamPage() {
  return (
    <main className="overflow-x-hidden">
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--brand-primary)] py-24 md:py-32 overflow-hidden">
        {/* Gold top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--brand-accent)]" />

        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--brand-accent)]/5" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[var(--brand-accent)]/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-body font-semibold uppercase tracking-widest text-[var(--brand-accent)] border border-[var(--brand-accent)]/40 rounded-full">
                Our Team
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance mb-6"
            >
              Collective Expertise,
              <span className="block text-[var(--brand-accent)] mt-1">Singular Dedication</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="font-body text-lg text-white/70 leading-relaxed max-w-2xl mx-auto text-pretty"
            >
              MIT Legal Consultants is built on a foundation of multidisciplinary legal expertise. Our team brings together seasoned professionals across seven distinct practice areas, united by a commitment to excellence and client-centered counsel.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── COMING SOON PLACEHOLDER ──────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[var(--brand-background)]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--brand-muted)] border border-[var(--brand-border)] mb-8 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[var(--brand-primary)]"
                aria-hidden="true"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--brand-primary)] tracking-tight mb-4">
              Attorney Profiles Coming Soon
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-body text-[var(--brand-muted-foreground)] text-lg leading-relaxed mb-10 text-pretty">
              Our attorney profiles are being prepared and will be available shortly. In the meantime, please contact us directly to speak with a member of our team.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded hover:bg-[#0d2a5e] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2"
            >
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
