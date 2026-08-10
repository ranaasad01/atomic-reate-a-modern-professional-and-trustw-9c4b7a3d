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

            <p className="text-white/60 text-sm font-body leading-relaxed mb-6">
              A professional legal consultancy delivering practical, strategic, and results-oriented legal solutions with the highest standards of integrity and client confidentiality.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[var(--brand-accent)] hover:border-[var(--brand-accent)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[var(--brand-accent)] hover:border-[var(--brand-accent)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
              >
                <Twitter size={15} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[var(--brand-accent)] hover:border-[var(--brand-accent)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
              >
                <Facebook size={15} />
              </a>
            </div>
          </div>

          {/* PRACTICE AREAS COLUMN */}
          <div>
            <ColumnHeading>Practice Areas</ColumnHeading>
            <ul className="space-y-2.5">
              {practiceAreaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[var(--brand-accent)] transition-colors duration-150 text-sm font-body leading-snug"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS COLUMN */}
          <div>
            <ColumnHeading>Quick Links</ColumnHeading>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[var(--brand-accent)] transition-colors duration-150 text-sm font-body leading-snug"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT COLUMN */}
          <div>
            <ColumnHeading>Contact Us</ColumnHeading>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <Phone className="text-[var(--brand-accent)] w-4 h-4 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+15550000000"
                  className="text-white/70 hover:text-[var(--brand-accent)] transition-colors duration-150 text-sm font-body"
                >
                  +1 (555) 000-0000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-[var(--brand-accent)] w-4 h-4 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@mitlegal.com"
                  className="text-white/70 hover:text-[var(--brand-accent)] transition-colors duration-150 text-sm font-body break-all"
                >
                  info@mitlegal.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-[var(--brand-accent)] w-4 h-4 flex-shrink-0 mt-0.5" />
                <address className="not-italic text-white/70 text-sm font-body leading-relaxed">
                  123 Legal Avenue, Suite 100<br />
                  City, State 00000
                </address>
              </li>
            </ul>

            <div className="border-t border-white/10 pt-4">
              <p className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-2">
                Business Hours
              </p>
              <p className="text-white/60 text-sm font-body">Mon &ndash; Fri: 8:00 AM &ndash; 6:00 PM</p>
              <p className="text-white/60 text-sm font-body">Sat: By Appointment Only</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ────────────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs font-body">
            &copy; {year} MIT Legal Consultants. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-white/50 hover:text-white transition-colors duration-150 text-xs font-body"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/50 hover:text-white transition-colors duration-150 text-xs font-body"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
