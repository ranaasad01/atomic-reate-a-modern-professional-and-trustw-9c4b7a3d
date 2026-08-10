"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, Briefcase as Linkedin, MessageCircle as Twitter, Globe as Facebook } from 'lucide-react';

const practiceAreaLinks = [
  { label: "Corporate & Commercial Law", href: "/practice-areas/corporate-commercial-law" },
  { label: "Mediation & Arbitration", href: "/practice-areas/mediation-arbitration" },
  { label: "Civil & Criminal Litigation", href: "/practice-areas/civil-criminal-litigation" },
  { label: "Family Law", href: "/practice-areas/family-law" },
  { label: "Public International Law", href: "/practice-areas/public-international-law" },
  { label: "Legislative Drafting & Policy", href: "/practice-areas/legislative-drafting-policy" },
  { label: "Employment Law", href: "/practice-areas/employment-law" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="font-heading text-[var(--brand-accent)] uppercase tracking-widest text-xs font-semibold mb-2">
        {children}
      </h3>
      <div className="w-8 h-0.5 bg-[var(--brand-accent)]" />
    </div>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--brand-primary)] text-white" aria-label="Site footer">
      {/* ── TOP CTA STRIP ─────────────────────────────────────────────── */}
      <div className="border-b-2 border-[var(--brand-accent)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-2xl md:text-3xl font-semibold text-white leading-snug">
              Ready to Discuss Your Legal Matter?
            </p>
            <p className="text-white/60 text-sm mt-2 font-body max-w-xl">
              Our attorneys are available to provide confidential guidance tailored to your needs.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 px-7 py-3 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded hover:bg-[#b8922e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)] whitespace-nowrap"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>

      {/* ── MAIN FOOTER GRID ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND COLUMN */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-3 mb-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] rounded"
              aria-label="MIT Legal Consultants — Home"
            >
              <div className="w-9 h-9 rounded bg-[var(--brand-accent)] flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-bold text-[var(--brand-primary)] text-sm leading-none">
                  MIT
                </span>
              </div>
              <span className="font-heading text-white text-base font-semibold leading-tight">
                MIT Legal Consultants
              </span>
            </Link>

            <p className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-3">
              Trusted Counsel. Proven Results.
            </p>

            <p className="text-white/55 text-sm font-body leading-relaxed mb-6">
              A premier legal consultancy delivering strategic, results-oriented legal solutions to individuals,
              businesses, and governments worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Facebook, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded border border-white/20 flex items-center justify-center text-white/50 hover:text-[var(--brand-accent)] hover:border-[var(--brand-accent)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* PRACTICE AREAS COLUMN */}
          <div className="lg:col-span-1">
            <ColumnHeading>Practice Areas</ColumnHeading>
            <ul className="space-y-2.5">
              {practiceAreaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[var(--brand-accent)] text-sm font-body transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--brand-accent)] rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS COLUMN */}
          <div className="lg:col-span-1">
            <ColumnHeading>Quick Links</ColumnHeading>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[var(--brand-accent)] text-sm font-body transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--brand-accent)] rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT COLUMN */}
          <div className="lg:col-span-1">
            <ColumnHeading>Contact Us</ColumnHeading>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[var(--brand-accent)] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm font-body leading-relaxed">
                  XYZ Address, XYZ Street, XYZ City, XYZ Country
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[var(--brand-accent)] flex-shrink-0" />
                <a
                  href="tel:+00"
                  className="text-white/60 hover:text-[var(--brand-accent)] text-sm font-body transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--brand-accent)] rounded"
                >
                  +00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[var(--brand-accent)] flex-shrink-0" />
                <a
                  href="mailto:xyz@xyz.com"
                  className="text-white/60 hover:text-[var(--brand-accent)] text-sm font-body transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--brand-accent)] rounded"
                >
                  xyz@xyz.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ────────────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs font-body">
            &copy; {year} MIT Legal Consultants. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-white/40 hover:text-white/70 text-xs font-body transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--brand-accent)] rounded"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20 text-xs">|</span>
            <Link
              href="/terms"
              className="text-white/40 hover:text-white/70 text-xs font-body transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--brand-accent)] rounded"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
