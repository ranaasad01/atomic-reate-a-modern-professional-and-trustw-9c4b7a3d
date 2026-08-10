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
    value: "XYZ Address, XYZ Street\nXYZ City, XYZ Country",
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone Number",
    value: "+00",
  },
  {
    id: "email",
    icon: Mail,
    label: "Email Address",
    value: "xyz@xyz.com",
  },
  {
    id: "hours",
    icon: Clock,
    label: "Business Hours",
    value: "Monday \u2013 Friday\n8:00 AM \u2013 6:00 PM",
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
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="tel:+00"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[#b8922e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
            >
              <Phone size={16} />
              Call Us Now
            </a>
            <a
              href="mailto:xyz@xyz.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-body font-medium text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Mail size={16} />
              Send an Email
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── 2. CONTACT DETAILS STRIP ─────────────────────────────────────── */}
      <section className="bg-white border-b border-[var(--brand-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.id} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--brand-muted)] flex items-center justify-center">
                    <Icon size={18} className="text-[var(--brand-primary)]" />
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. FORM + SIDEBAR ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ── INQUIRY FORM ── */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="bg-white rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.10)] border border-[var(--brand-border)] p-8 md:p-10">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--brand-primary)] mb-2">
                  Send Us an Inquiry
                </h2>
                <p className="font-body text-sm text-[var(--brand-muted-foreground)] mb-8">
                  Fill in the form below and a member of our team will be in touch shortly.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-[var(--brand-primary)] mb-3">
                      Inquiry Received
                    </h3>
                    <p className="font-body text-[var(--brand-muted-foreground)] max-w-sm mb-8">
                      Thank you for reaching out. A member of our team will review your inquiry and respond within one business day.
                    </p>
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[#0d2a5e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block font-body text-xs font-semibold uppercase tracking-widest text-[var(--brand-muted-foreground)] mb-2">
                          Full Name <span className="text-[var(--brand-destructive)]">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block font-body text-xs font-semibold uppercase tracking-widest text-[var(--brand-muted-foreground)] mb-2">
                          Email Address <span className="text-[var(--brand-destructive)]">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block font-body text-xs font-semibold uppercase tracking-widest text-[var(--brand-muted-foreground)] mb-2">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+1 (555) 000-0000"
                          value={form.phone}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block font-body text-xs font-semibold uppercase tracking-widest text-[var(--brand-muted-foreground)] mb-2">
                          Subject / Practice Area <span className="text-[var(--brand-destructive)]">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="" disabled>Select a subject</option>
                          {subjectOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-body text-xs font-semibold uppercase tracking-widest text-[var(--brand-muted-foreground)] mb-2">
                        Message <span className="text-[var(--brand-destructive)]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Please describe your legal matter or inquiry..."
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <p className="font-body text-xs text-[var(--brand-muted-foreground)]">
                      By submitting this form, you agree to our{" "}
                      <Link href="/privacy-policy" className="underline hover:text-[var(--brand-primary)] transition-colors">
                        Privacy Policy
                      </Link>
                      . All communications are strictly confidential.
                    </p>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--brand-primary)] text-white font-body font-bold text-sm rounded-lg hover:bg-[#0d2a5e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
                    >
                      <Send size={16} />
                      Submit Inquiry
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* ── SIDEBAR ── */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <Reveal delay={0.1}>
              <div className="bg-[var(--brand-primary)] rounded-2xl p-7 text-white">
                <h3 className="font-heading text-xl font-bold mb-6 text-white">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon;
                    return (
                      <div key={detail.id} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mt-0.5">
                          <Icon size={15} className="text-[var(--brand-accent)]" />
                        </div>
                        <div>
                          <p className="font-body text-xs font-semibold uppercase tracking-widest text-white/50 mb-0.5">
                            {detail.label}
                          </p>
                          <p className="font-body text-sm text-white/90 leading-relaxed whitespace-pre-line">
                            {detail.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* Map Placeholder */}
            <Reveal delay={0.15}>
              <div className="rounded-2xl overflow-hidden border border-[var(--brand-border)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)]">
                <div className="bg-[var(--brand-muted)] h-52 flex flex-col items-center justify-center gap-3">
                  <MapPin size={28} className="text-[var(--brand-primary)]" />
                  <p className="font-body text-sm text-[var(--brand-muted-foreground)] text-center px-4">
                    XYZ Address, XYZ Street
                    <br />
                    XYZ City, XYZ Country
                  </p>
                  <span className="font-body text-xs text-[var(--brand-muted-foreground)] italic">
                    Map embed coming soon
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Quick CTA */}
            <Reveal delay={0.2}>
              <div className="bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/30 rounded-2xl p-6">
                <h4 className="font-heading text-lg font-bold text-[var(--brand-primary)] mb-2">
                  Need Immediate Assistance?
                </h4>
                <p className="font-body text-sm text-[var(--brand-muted-foreground)] mb-4">
                  For urgent legal matters, call us directly during business hours.
                </p>
                <a
                  href="tel:+00"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[#0d2a5e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                >
                  <Phone size={15} />
                  +00
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. BOTTOM CTA ────────────────────────────────────────────────── */}
      <section className="bg-[var(--brand-primary)] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Our Practice Areas
            </h2>
            <p className="font-body text-white/70 mb-8">
              Not sure which service you need? Browse our full range of legal expertise.
            </p>
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[#b8922e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
            >
              View All Practice Areas
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
