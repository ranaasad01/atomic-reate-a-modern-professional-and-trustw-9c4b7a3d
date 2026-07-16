"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from 'lucide-react';
import { navLinks, BRAND_NAME, type NavLink } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

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

  function getHref(link: NavLink): string {
    if (link.href.startsWith("#")) {
      return pathname === "/" ? link.href : "/" + link.href;
    }
    return link.href;
  }

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--brand-primary)] shadow-[0_2px_20px_rgba(10,31,68,0.25)]"
          : "bg-[var(--brand-primary)]"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label={t("nav.ariaLabel")}
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] rounded"
            aria-label={t("nav.logoAriaLabel")}
          >
            <div className="w-9 h-9 rounded bg-[var(--brand-accent)] flex items-center justify-center flex-shrink-0">
              <span className="font-heading font-bold text-[var(--brand-primary)] text-sm leading-none">
                {t("nav.logoInitials")}
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-white text-lg font-semibold leading-tight tracking-tight">
                {t("nav.brandName")}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {link.children ? (
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-body font-medium rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] ${
                      isActive(link.href)
                        ? "text-[var(--brand-accent)]"
                        : "text-white/80 hover:text-white"
                    }`}
                    onMouseEnter={() => setOpenDropdown(link.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.href ? null : link.href
                      )
                    }
                    aria-expanded={openDropdown === link.href}
                    aria-haspopup="true"
                  >
                    {t(`nav.${link.label.toLowerCase().replace(/\s+/g, "").replace(/[^a-z]/g, "")}`)}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        openDropdown === link.href ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={getHref(link)}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2 text-sm font-body font-medium rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] ${
                      isActive(link.href)
                        ? "text-[var(--brand-accent)]"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {t(`nav.${link.label.toLowerCase().replace(/\s+/g, "").replace(/[^a-z]/g, "")}`)}
                  </Link>
                )}

                {/* Dropdown */}
                {link.children && (
                  <div
                    onMouseEnter={() => setOpenDropdown(link.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <AnimatePresence>
                      {openDropdown === link.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-[0_8px_32px_rgba(10,31,68,0.15)] border border-[var(--brand-border)] overflow-hidden"
                          role="menu"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              className={`block px-4 py-3 text-sm font-body transition-colors duration-150 border-b border-[var(--brand-border)] last:border-0 ${
                                isActive(child.href)
                                  ? "text-[var(--brand-accent)] bg-[var(--brand-muted)]"
                                  : "text-[var(--brand-foreground)] hover:bg-[var(--brand-muted)] hover:text-[var(--brand-primary)]"
                              }`}
                            >
                              {t(`nav.${child.label.toLowerCase().replace(/\s+/g, "").replace(/[^a-z]/g, "")}`)}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="ml-3 px-5 py-2.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] text-sm font-body font-bold rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
            >
              {t("nav.cta")}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden overflow-hidden bg-[var(--brand-primary)] border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.children ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-body font-medium text-white/80 rounded hover:bg-white/10 transition-colors"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === link.href ? null : link.href
                          )
                        }
                      >
                        {t(`nav.${link.label.toLowerCase().replace(/\s+/g, "").replace(/[^a-z]/g, "")}`)}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            openDropdown === link.href ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.href && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 mt-1 space-y-1"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block px-3 py-2 text-sm font-body text-white/70 hover:text-white hover:bg-white/10 rounded transition-colors"
                              >
                                {t(`nav.${child.label.toLowerCase().replace(/\s+/g, "").replace(/[^a-z]/g, "")}`)}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={getHref(link)}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block px-3 py-2.5 text-sm font-body font-medium rounded transition-colors ${
                        isActive(link.href)
                          ? "text-[var(--brand-accent)] bg-white/10"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {t(`nav.${link.label.toLowerCase().replace(/\s+/g, "").replace(/[^a-z]/g, "")}`)}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="block w-full text-center px-5 py-3 bg-[var(--brand-accent)] text-[var(--brand-primary)] text-sm font-body font-bold rounded-lg hover:bg-[var(--brand-accent)]/90 transition-colors"
                >
                  {t("nav.cta")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}