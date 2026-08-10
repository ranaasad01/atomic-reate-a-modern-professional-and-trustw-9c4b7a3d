"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Scale } from 'lucide-react';
import { navLinks, BRAND_NAME, type NavLink } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--brand-primary)] shadow-[0_2px_20px_rgba(10,31,68,0.35)]"
          : "bg-[var(--brand-primary)]"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] rounded"
            aria-label="MIT Legal Consultants - Home"
          >
            <div className="w-9 h-9 rounded bg-[var(--brand-accent)] flex items-center justify-center flex-shrink-0">
              <span className="font-heading font-bold text-[var(--brand-primary)] text-sm leading-none">
                MIT
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-white text-lg font-semibold leading-tight tracking-tight">
                MIT Legal Consultants
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() =>
                  link.children ? setOpenDropdown(link.href) : setOpenDropdown(null)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.children ? (
                  <>
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded text-sm font-body font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] ${
                        isActive(link.href)
                          ? "text-[var(--brand-accent)]"
                          : "text-white/85 hover:text-white"
                      }`}
                      aria-expanded={openDropdown === link.href}
                      aria-haspopup="true"
                    >
                      {link.label}
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
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-[var(--brand-border)] overflow-hidden z-50"
                        >
                          <div className="py-2">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-body transition-colors duration-150 ${
                                  isActive(child.href)
                                    ? "bg-[var(--brand-muted)] text-[var(--brand-primary)] font-semibold"
                                    : "text-[var(--brand-foreground)] hover:bg-[var(--brand-muted)] hover:text-[var(--brand-primary)]"
                                }`}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)] flex-shrink-0" />
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-3 py-2 rounded text-sm font-body font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] ${
                      isActive(link.href)
                        ? "text-[var(--brand-accent)]"
                        : "text-white/85 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="ml-3 px-5 py-2.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)] whitespace-nowrap"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-[var(--brand-primary)] border-t border-white/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.children ? (
                    <>
                      <button
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-sm font-body font-medium transition-colors ${
                          isActive(link.href)
                            ? "text-[var(--brand-accent)]"
                            : "text-white/85"
                        }`}
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === link.href ? null : link.href
                          )
                        }
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            mobileExpanded === link.href ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.href && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 flex flex-col gap-0.5 mt-1"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`flex items-center gap-2 px-3 py-2 rounded text-sm font-body transition-colors ${
                                  isActive(child.href)
                                    ? "text-[var(--brand-accent)] font-semibold"
                                    : "text-white/70 hover:text-white"
                                }`}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)] flex-shrink-0" />
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-3 py-2.5 rounded text-sm font-body font-medium transition-colors ${
                        isActive(link.href)
                          ? "text-[var(--brand-accent)]"
                          : "text-white/85 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-white/10 mt-2">
                <Link
                  href="/contact"
                  className="block w-full text-center px-5 py-3 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200"
                >
                  Get Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
