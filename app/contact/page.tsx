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
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-colors duration-200"
            >
              <Phone size={16} />
              Call Us Now
            </a>
            <a
              href="mailto:info@mitlegal.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white font-body font-semibold text-sm rounded-lg hover:bg-white/20 transition-colors duration-200 border border-white/20"
            >
              <Mail size={16} />
              Email Us
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── 2. CONTACT DETAILS + FORM ────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* ── Left: Contact Details ── */}
            <div className="lg:col-span-2 space-y-6">
              <Reveal>
                <div>
                  <h2 className="font-heading text-3xl font-bold text-[var(--brand-primary)] mb-2">
                    Our Contact Information
                  </h2>
                  <p className="font-body text-[var(--brand-muted-foreground)] text-sm leading-relaxed">
                    Reach out to MIT Legal Consultants directly or use the inquiry form. We look forward to
                    hearing from you.
                  </p>
                </div>
              </Reveal>

              <div className="space-y-4">
                {contactDetails.map((detail, index) => (
                  <Reveal key={detail.id} delay={index * 0.08}>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-[var(--brand-border)] shadow-sm">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--brand-primary)]/5 flex items-center justify-center">
                        <detail.icon size={18} className="text-[var(--brand-accent)]" />
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
                ))}
              </div>

              {/* Map placeholder */}
              <Reveal delay={0.35}>
                <div className="rounded-xl overflow-hidden border border-[var(--brand-border)] shadow-sm">
                  <div className="bg-[var(--brand-muted)] h-56 flex flex-col items-center justify-center gap-3">
                    <MapPin size={32} className="text-[var(--brand-accent)]" />
                    <p className="font-body text-sm text-[var(--brand-muted-foreground)] text-center px-4">
                      Google Maps embed will appear here.
                      <br />
                      <span className="text-xs">14 Legal Avenue, Suite 300, Accra, Ghana</span>
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ── Right: Inquiry Form ── */}
            <div className="lg:col-span-3">
              <Reveal>
                <div className="bg-white rounded-2xl border border-[var(--brand-border)] shadow-lg p-8 md:p-10">
                  {submitted ? (
                    /* ── Success State ── */
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center justify-center text-center py-12 gap-5"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                        <CheckCircle size={32} className="text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-[var(--brand-primary)] mb-2">
                          Inquiry Received
                        </h3>
                        <p className="font-body text-[var(--brand-muted-foreground)] text-sm leading-relaxed max-w-sm">
                          Thank you for contacting MIT Legal Consultants. A member of our team will review
                          your inquiry and respond within one business day.
                        </p>
                      </div>
                      <button
                        onClick={handleReset}
                        className="mt-2 px-6 py-2.5 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-colors duration-200"
                      >
                        Submit Another Inquiry
                      </button>
                    </motion.div>
                  ) : (
                    /* ── Form ── */
                    <>
                      <div className="mb-8">
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--brand-primary)] mb-2">
                          Send Us an Inquiry
                        </h2>
                        <p className="font-body text-[var(--brand-muted-foreground)] text-sm">
                          Complete the form below and a member of the MIT Legal Consultants team will be in touch shortly.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} noValidate className="space-y-5">
                        {/* Name + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="flex flex-col gap-1.5">
                            <label
                              htmlFor="name"
                              className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--brand-foreground)]"
                            >
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
                          <div className="flex flex-col gap-1.5">
                            <label
                              htmlFor="email"
                              className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--brand-foreground)]"
                            >
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

                        {/* Phone + Subject */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="flex flex-col gap-1.5">
                            <label
                              htmlFor="phone"
                              className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--brand-foreground)]"
                            >
                              Phone Number
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              autoComplete="tel"
                              placeholder="+233 (0) 00 000 0000"
                              value={form.phone}
                              onChange={handleChange}
                              className={inputClass}
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label
                              htmlFor="subject"
                              className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--brand-foreground)]"
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

                        {/* Message */}
                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="message"
                            className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--brand-foreground)]"
                          >
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

                        {/* Disclaimer */}
                        <p className="font-body text-xs text-[var(--brand-muted-foreground)] leading-relaxed">
                          By submitting this form, you acknowledge that your inquiry does not create an
                          attorney-client relationship. MIT Legal Consultants will treat your information
                          with strict confidentiality in accordance with our{" "}
                          <Link
                            href="/privacy-policy"
                            className="text-[var(--brand-primary)] underline underline-offset-2 hover:text-[var(--brand-accent)] transition-colors"
                          >
                            Privacy Policy
                          </Link>
                          .
                        </p>

                        {/* Submit */}
                        <button
                          type="submit"
                          className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-primary)] text-white font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-primary)]/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
                        >
                          <Send size={16} />
                          Submit Inquiry to MIT Legal Consultants
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

      {/* ── 3. BOTTOM CTA ────────────────────────────────────────────────── */}
      <section className="bg-[var(--brand-primary)] py-16 px-4">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Need Immediate Legal Assistance?
            </h2>
            <p className="font-body text-white/70 text-base mb-8 leading-relaxed">
              MIT Legal Consultants is ready to help. Call us directly or visit our office during business
              hours for urgent matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+233300000000"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-colors duration-200"
              >
                <Phone size={16} />
                +233 (0) 30 000 0000
              </a>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white font-body font-semibold text-sm rounded-lg hover:bg-white/20 transition-colors duration-200 border border-white/20"
              >
                Explore Practice Areas
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
