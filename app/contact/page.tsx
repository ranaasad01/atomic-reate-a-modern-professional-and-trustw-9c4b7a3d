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
      {/* \u2500\u2500 1. HERO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */}
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
              href="tel:+00"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[#b8922e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
            >
              <Phone size={16} />
              Call Us Now
            </a>
            <a
              href="mailto:xyz@xyz.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/30 text-white font-body font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Mail size={16} />
              Send an Email
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* \u2500\u2500 2. CONTACT DETAILS + FORM \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* LEFT: Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <Reveal>
              <div>
                <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-2">
                  Our Details
                </p>
                <h2 className="font-heading text-3xl font-bold text-[var(--brand-primary)] mb-4">
                  Reach Out to Us
                </h2>
                <p className="font-body text-[var(--brand-muted-foreground)] text-sm leading-relaxed">
                  We are here to assist you with any legal matter. Contact us through any of the channels
                  below or fill in the inquiry form and we will get back to you promptly.
                </p>
              </div>
            </Reveal>

            <div className="space-y-4">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                return (
                  <Reveal key={detail.id}>
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-[var(--brand-border)] shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center">
                        <Icon size={18} className="text-[var(--brand-accent)]" />
                      </div>
                      <div>
                        <p className="font-body text-xs font-semibold uppercase tracking-wider text-[var(--brand-muted-foreground)] mb-1">
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
          </div>

          {/* RIGHT: Inquiry Form */}
          <div className="lg:col-span-3">
            <Reveal>
              <div className="bg-white rounded-2xl border border-[var(--brand-border)] shadow-[0_4px_24px_rgba(10,31,68,0.08)] p-8 md:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-[var(--brand-primary)] mb-3">
                      Inquiry Received
                    </h3>
                    <p className="font-body text-[var(--brand-muted-foreground)] text-sm max-w-sm mb-8">
                      Thank you for reaching out to MIT Legal Consultants. A member of our team will
                      review your inquiry and respond within one business day.
                    </p>
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[#0d2a5e] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="font-heading text-2xl font-bold text-[var(--brand-primary)] mb-2">
                        Send Us an Inquiry
                      </h2>
                      <p className="font-body text-[var(--brand-muted-foreground)] text-sm">
                        All fields marked with an asterisk (*) are required.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block font-body text-xs font-semibold uppercase tracking-wider text-[var(--brand-foreground)] mb-1.5"
                          >
                            Full Name *
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Your full name"
                            value={form.name}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block font-body text-xs font-semibold uppercase tracking-wider text-[var(--brand-foreground)] mb-1.5"
                          >
                            Email Address *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="your@email.com"
                            value={form.email}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block font-body text-xs font-semibold uppercase tracking-wider text-[var(--brand-foreground)] mb-1.5"
                          >
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+00 000 000 0000"
                            value={form.phone}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="subject"
                            className="block font-body text-xs font-semibold uppercase tracking-wider text-[var(--brand-foreground)] mb-1.5"
                          >
                            Subject *
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
                              Select a subject
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
                          className="block font-body text-xs font-semibold uppercase tracking-wider text-[var(--brand-foreground)] mb-1.5"
                        >
                          Message *
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

                      <p className="font-body text-xs text-[var(--brand-muted-foreground)] leading-relaxed">
                        By submitting this form, you agree to our{" "}
                        <Link
                          href="/privacy-policy"
                          className="text-[var(--brand-primary)] underline underline-offset-2 hover:text-[var(--brand-accent)] transition-colors"
                        >
                          Privacy Policy
                        </Link>
                        . Your information is kept strictly confidential.
                      </p>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-primary)] text-white font-body font-bold text-sm rounded-lg hover:bg-[#0d2a5e] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
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
      </section>

      {/* \u2500\u2500 3. MAP PLACEHOLDER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Reveal>
          <div className="rounded-2xl overflow-hidden border border-[var(--brand-border)] shadow-[0_4px_24px_rgba(10,31,68,0.08)] bg-[var(--brand-muted)] h-72 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={36} className="text-[var(--brand-primary)] mx-auto mb-3 opacity-40" />
              <p className="font-body text-[var(--brand-muted-foreground)] text-sm">
                Google Maps embed will appear here
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* \u2500\u2500 4. BOTTOM CTA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */}
      <section className="bg-[var(--brand-primary)] py-16 px-4">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-widest mb-3">
              Confidential Consultation
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Your Legal Matter Deserves Expert Attention
            </h2>
            <p className="font-body text-white/65 text-base mb-8 max-w-xl mx-auto">
              Whether you are an individual, a business, or a government body, MIT Legal Consultants
              is equipped to provide the strategic counsel you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+00"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[#b8922e] transition-all duration-200"
              >
                <Phone size={16} />
                Call +00
              </a>
              <a
                href="mailto:xyz@xyz.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/30 text-white font-body font-semibold text-sm rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                <Mail size={16} />
                xyz@xyz.com
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
