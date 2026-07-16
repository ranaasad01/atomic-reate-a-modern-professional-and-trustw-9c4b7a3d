"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Briefcase as Linkedin, MessageCircle as Twitter, Globe as Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { navLinks, BRAND_NAME, BRAND_TAGLINE, contactInfo, socialLinks, practiceAreas } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  function getHref(href: string): string {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  }

  return (
    <footer className="bg-[var(--brand-primary)] text-white" aria-label={t("footer.ariaLabel")}>
      {/* Top CTA strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-2xl font-semibold text-white">
              {t("footer.ctaHeading")}
            </p>
            <p className="text-white/60 text-sm mt-1 font-body">
              {t("footer.ctaSubtext")}
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 px-7 py-3 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
          >
            {t("footer.ctaButton")}
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] rounded">
              <div className="w-9 h-9 rounded bg-[var(--brand-accent)] flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-bold text-[var(--brand-primary)] text-sm leading-none">
                  {t("nav.logoInitials")}
                </span>
              </div>
              <span className="font-heading text-white text-base font-semibold leading-tight">
                {t("nav.brandName")}
              </span>
            </Link>
            <p className="text-white/60 text-sm font-body leading-relaxed mb-5">
              {t("footer.brandDescription")}
            </p>
            <p className="text-[var(--brand-accent)] text-xs font-body font-semibold uppercase tracking-widest mb-4">
              {t("footer.followUs")}
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.linkedinAriaLabel")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[var(--brand-accent)] flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
              >
                <Linkedin size={16} />
              </motion.a>
              <motion.a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.twitterAriaLabel")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[var(--brand-accent)] flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
              >
                <Twitter size={16} />
              </motion.a>
              <motion.a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.facebookAriaLabel")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[var(--brand-accent)] flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
              >
                <Facebook size={16} />
              </motion.a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-heading text-base font-semibold text-white mb-5 pb-2 border-b border-white/10">
              {t("footer.practiceAreasHeading")}
            </h3>
            <ul className="space-y-2.5">
              {practiceAreas.map((area) => (
                <li key={area.id}>
                  <Link
                    href={area.href}
                    className="text-sm font-body text-white/60 hover:text-[var(--brand-accent)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--brand-accent)] rounded"
                  >
                    {t(`practiceAreas.${area.id}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-base font-semibold text-white mb-5 pb-2 border-b border-white/10">
              {t("footer.quickLinksHeading")}
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getHref(link.href)}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-body text-white/60 hover:text-[var(--brand-accent)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--brand-accent)] rounded"
                  >
                    {t(`nav.${link.label.toLowerCase().replace(/\s+/g, "").replace(/[^a-z]/g, "")}`)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm font-body text-white/60 hover:text-[var(--brand-accent)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--brand-accent)] rounded"
                >
                  {t("footer.privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm font-body text-white/60 hover:text-[var(--brand-accent)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--brand-accent)] rounded"
                >
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-base font-semibold text-white mb-5 pb-2 border-b border-white/10">
              {t("footer.contactHeading")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[var(--brand-accent)] mt-0.5 flex-shrink-0" />
                <span className="text-sm font-body text-white/60 leading-relaxed">
                  {t("footer.address")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[var(--brand-accent)] flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-sm font-body text-white/60 hover:text-[var(--brand-accent)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--brand-accent)] rounded"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[var(--brand-accent)] flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm font-body text-white/60 hover:text-[var(--brand-accent)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--brand-accent)] rounded"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="pt-1">
                <p className="text-xs font-body text-[var(--brand-accent)] font-semibold uppercase tracking-widest mb-1.5">
                  {t("footer.hoursLabel")}
                </p>
                <p className="text-sm font-body text-white/60 leading-relaxed">
                  {t("footer.hoursWeekdays")}
                </p>
                <p className="text-sm font-body text-white/60">
                  {t("footer.hoursSaturday")}
                </p>
                <p className="text-sm font-body text-white/60">
                  {t("footer.hoursSunday")}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-body text-white/40">
            {t("footer.copyright", { year: new Date().getFullYear(), brand: BRAND_NAME })}
          </p>
          <p className="text-xs font-body text-white/40">
            {t("footer.disclaimer")}
          </p>
        </div>
      </div>
    </footer>
  );
}