"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const contactDetails = [
  {
    id: "address",
    icon: MapPin,
    label: "Office Address",
    value: "14 Legal Avenue, Suite 300\nAccra, Ghana",
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone Number",
    value: "+233 (0) 30 000 0000",
  },
  {
    id: "email",
    icon: Mail,
    label: "Email Address",
    value: "info@mitlegal.com",
  },
  {
    id: "hours",
    icon: Clock,
    label: "Business Hours",
    value: "Monday – Friday\n8:00 AM – 6:00 PM",
  },
];

const subjectOptions = [
  "General Inquiry",
  "Corporate & Commercial Law",
  "Mediation & Arbitration",
  "Civil & Criminal Litigation",
  "Family Law",
  "Public International Law",
  "Legislative Drafting & Policy",
  "Employment Law",
  "Other",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleReset() {
    setForm(initialForm);
    setSubmitted(false);
  }

  const inputClass =
    "border border-[var(--brand-border)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] w-full font-body text-sm bg-white text-[var(--brand-foreground)] placeholder:text-[var(--brand-muted-foreground)] transition-shadow";

  return (
    <main className="bg-[var(--brand-background)] min-h-screen">
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--brand-primary)] py-28 px-4 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/[0.03] blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[var(--brand-accent)]/10 blur-3xl" />
        </div>

        <motion.div
          className="relative max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeInUp}
            className="font-body text-[var(--brand-accent)] text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Get In Touch
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Contact MIT Legal Consultants
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="font-body text-white/70 text-lg max-w-2xl mx-auto mb-10"
          >
            Schedule a consultation or send us an inquiry. Our team at MIT Legal Consultants will respond
            within one business day.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+233300000000"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[#b8922e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
            >
              <Phone size={16} />
              Call Us Now
            </a>
            <a
              href="mailto:info@mitlegal.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/30 text-white font-body font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <Mail size={16} />
              Email Us
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── 2. CONTACT GRID ──────────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* ── LEFT: Contact Details + Map ── */}
            <div className="lg:col-span-2 space-y-8">
              <Reveal>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-[var(--brand-primary)] mb-2">
                    Our Contact Details
                  </h2>
                  <div className="w-10 h-0.5 bg-[var(--brand-accent)] mb-6" />
                  <p className="font-body text-[var(--brand-muted-foreground)] text-sm leading-relaxed">
                    Reach out through any of the channels below. We are available during business hours
                    and will respond to all inquiries promptly.
                  </p>
                </div>
              </Reveal>

              <div className="space-y-5">
                {contactDetails.map((detail, i) => {
                  const Icon = detail.icon;
                  return (
                    <Reveal key={detail.id} delay={i * 0.08}>
                      <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[var(--brand-border)] shadow-[0_1px_3px_rgba(10,31,68,0.06),0_4px_12px_-4px_rgba(10,31,68,0.08)]">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center">
                          <Icon size={18} className="text-[var(--brand-accent)]" />
                        </div>
                        <div>
                          <p className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--brand-muted-foreground)] mb-1">
                            {detail.label}
                          </p>
                          <p className="font-body text-sm text-[var(--brand-foreground)] leading-relaxed whitespace-pre-line">
                            {detail.value}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <Reveal delay={0.3}>
                <div className="rounded-xl overflow-hidden border border-[var(--brand-border)] shadow-[0_1px_3px_rgba(10,31,68,0.06),0_4px_12px_-4px_rgba(10,31,68,0.08)]">
                  <div className="bg-[var(--brand-muted)] h-56 flex flex-col items-center justify-center gap-3">
                    <MapPin size={32} className="text-[var(--brand-primary)]/40" />
                    <p className="font-body text-sm text-[var(--brand-muted-foreground)] text-center px-4">
                      Interactive map coming soon.
                      <br />
                      <span className="text-xs">14 Legal Avenue, Suite 300, Accra, Ghana</span>
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ── RIGHT: Inquiry Form ── */}
            <div className="lg:col-span-3">
              <Reveal>
                <div className="bg-white rounded-2xl border border-[var(--brand-border)] shadow-[0_1px_3px_rgba(10,31,68,0.06),0_12px_40px_-12px_rgba(10,31,68,0.14)] p-8 md:p-10">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="flex flex-col items-center justify-center text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                        <CheckCircle size={32} className="text-green-600" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-[var(--brand-primary)] mb-3">
                        Inquiry Received
                      </h3>
                      <p className="font-body text-[var(--brand-muted-foreground)] text-sm leading-relaxed max-w-sm mb-8">
                        Thank you for contacting MIT Legal Consultants. A member of our team will review
                        your inquiry and respond within one business day.
                      </p>
                      <button
                        onClick={handleReset}
                        className="px-6 py-3 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[#0d2a5e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                      >
                        Send Another Inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <h2 className="font-heading text-2xl font-bold text-[var(--brand-primary)] mb-2">
                          Send Us an Inquiry
                        </h2>
                        <div className="w-10 h-0.5 bg-[var(--brand-accent)] mb-4" />
                        <p className="font-body text-[var(--brand-muted-foreground)] text-sm">
                          Complete the form below and one of our attorneys will be in touch shortly.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="name"
                              className="block font-body text-xs font-semibold uppercase tracking-widest text-[var(--brand-muted-foreground)] mb-1.5"
                            >
                              Full Name <span className="text-[var(--brand-destructive)]">*</span>
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={form.name}
                              onChange={handleChange}
                              placeholder="Your full name"
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className="block font-body text-xs font-semibold uppercase tracking-widest text-[var(--brand-muted-foreground)] mb-1.5"
                            >
                              Email Address <span className="text-[var(--brand-destructive)]">*</span>
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={form.email}
                              onChange={handleChange}
                              placeholder="your@email.com"
                              className={inputClass}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="phone"
                              className="block font-body text-xs font-semibold uppercase tracking-widest text-[var(--brand-muted-foreground)] mb-1.5"
                            >
                              Phone Number
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="+1 (000) 000-0000"
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="subject"
                              className="block font-body text-xs font-semibold uppercase tracking-widest text-[var(--brand-muted-foreground)] mb-1.5"
                            >
                              Subject <span className="text-[var(--brand-destructive)]">*</span>
                            </label>
                            <select
                              id="subject"
                              name="subject"
                              required
                              value={form.subject}
                              onChange={handleChange}
                              className={inputClass}
                            >
                              <option value="" disabled>
                                Select a practice area
                              </option>
                              {subjectOptions.map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block font-body text-xs font-semibold uppercase tracking-widest text-[var(--brand-muted-foreground)] mb-1.5"
                          >
                            Message <span className="text-[var(--brand-destructive)]">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Please describe your legal matter or inquiry..."
                            className={`${inputClass} resize-none`}
                          />
                        </div>

                        <p className="font-body text-xs text-[var(--brand-muted-foreground)]">
                          By submitting this form, you agree to our{" "}
                          <Link
                            href="/privacy-policy"
                            className="text-[var(--brand-primary)] underline underline-offset-2 hover:text-[var(--brand-accent)] transition-colors"
                          >
                            Privacy Policy
                          </Link>
                          . All communications are strictly confidential.
                        </p>

                        <button
                          type="submit"
                          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-primary)] text-white font-body font-bold text-sm rounded-lg hover:bg-[#0d2a5e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 shadow-[0_4px_14px_rgba(10,31,68,0.25)]"
                        >
                          <Send size={16} />
                          Submit Inquiry
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. BUSINESS HOURS BANNER ─────────────────────────────────────── */}
      <section className="bg-[var(--brand-primary)] py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-2">
                  Office Hours
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-1">
                  We Are Here When You Need Us
                </h3>
                <p className="font-body text-white/60 text-sm">
                  Our team is available Monday through Friday to assist with your legal needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 text-center">
                <div className="px-8 py-5 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-1">
                    Weekdays
                  </p>
                  <p className="font-heading text-white text-lg font-semibold">8:00 AM – 6:00 PM</p>
                  <p className="font-body text-white/50 text-xs mt-0.5">Monday – Friday</p>
                </div>
                <div className="px-8 py-5 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-1">
                    Weekends
                  </p>
                  <p className="font-heading text-white text-lg font-semibold">By Appointment</p>
                  <p className="font-body text-white/50 text-xs mt-0.5">Saturday – Sunday</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
