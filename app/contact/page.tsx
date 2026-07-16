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
            Schedule a consultation or send us an inquiry. Our team will respond
            within one business day.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+233300000000"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
            >
              <Phone size={16} />
              Call Us Now
            </a>
            <a
              href="mailto:info@mitlegal.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white text-white font-body font-bold text-sm rounded-lg hover:bg-white hover:text-[var(--brand-primary)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
            >
              <Mail size={16} />
              Send an Email
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── 2. CONTACT DETAILS + FORM ────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Left: Contact Info */}
            <Reveal className="lg:col-span-2">
              <div className="bg-[var(--brand-card)] rounded-2xl shadow-sm border border-[var(--brand-border)] p-8 h-full">
                <h2 className="font-heading text-2xl font-bold text-[var(--brand-primary)] mb-2">
                  Our Office
                </h2>
                <p className="font-body text-[var(--brand-muted-foreground)] text-sm mb-8">
                  Visit us, call us, or send an email. We are here to help.
                </p>

                <div className="space-y-6 mb-8">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.id} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--brand-accent)]/10 flex items-center justify-center">
                          <Icon
                            size={18}
                            className="text-[var(--brand-accent)]"
                          />
                        </div>
                        <div>
                          <p className="font-body text-xs font-semibold uppercase tracking-wider text-[var(--brand-muted-foreground)] mb-1">
                            {item.label}
                          </p>
                          <p className="font-body text-sm text-[var(--brand-foreground)] whitespace-pre-line leading-relaxed">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Google Maps Placeholder */}
                <div className="bg-[var(--brand-muted)] h-48 rounded-lg flex flex-col items-center justify-center gap-2 border border-[var(--brand-border)]">
                  <MapPin
                    size={28}
                    className="text-[var(--brand-muted-foreground)]"
                  />
                  <p className="font-body text-sm text-[var(--brand-muted-foreground)] text-center">
                    Google Maps — Location Preview
                  </p>
                  <p className="font-body text-xs text-[var(--brand-muted-foreground)]/70 text-center px-4">
                    14 Legal Avenue, Suite 300, Accra, Ghana
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right: Inquiry Form */}
            <Reveal className="lg:col-span-3" delay={0.1}>
              <div className="bg-[var(--brand-card)] rounded-2xl shadow-sm border border-[var(--brand-border)] p-8">
                <h2 className="font-heading text-2xl font-bold text-[var(--brand-primary)] mb-2">
                  Send Us an Inquiry
                </h2>
                <p className="font-body text-[var(--brand-muted-foreground)] text-sm mb-8">
                  Complete the form below and a member of our team will be in
                  touch promptly.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[var(--brand-accent)]/10 flex items-center justify-center mb-5">
                      <CheckCircle
                        size={32}
                        className="text-[var(--brand-accent)]"
                      />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[var(--brand-primary)] mb-3">
                      Inquiry Received
                    </h3>
                    <p className="font-body text-[var(--brand-muted-foreground)] text-sm max-w-sm leading-relaxed mb-8">
                      Thank you for your inquiry. A member of our team will be
                      in touch within one business day.
                    </p>
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-primary)] text-white font-body font-semibold text-sm rounded-lg hover:bg-[var(--brand-accent)] hover:text-[var(--brand-primary)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block font-body text-xs font-semibold uppercase tracking-wider text-[var(--brand-foreground)] mb-1.5"
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
                          className="block font-body text-xs font-semibold uppercase tracking-wider text-[var(--brand-foreground)] mb-1.5"
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

                    {/* Row 2: Phone + Subject */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block font-body text-xs font-semibold uppercase tracking-wider text-[var(--brand-foreground)] mb-1.5"
                        >
                          Phone Number{" "}
                          <span className="text-[var(--brand-muted-foreground)] font-normal normal-case tracking-normal">
                            (optional)
                          </span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+233 (0) 00 000 0000"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block font-body text-xs font-semibold uppercase tracking-wider text-[var(--brand-foreground)] mb-1.5"
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

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block font-body text-xs font-semibold uppercase tracking-wider text-[var(--brand-foreground)] mb-1.5"
                      >
                        Message <span className="text-[var(--brand-destructive)]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Please describe your legal matter or inquiry..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--brand-primary)] text-white font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)] hover:text-[var(--brand-primary)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
                    >
                      <Send size={16} />
                      Submit Inquiry
                    </button>

                    <p className="font-body text-xs text-[var(--brand-muted-foreground)] text-center">
                      By submitting this form you agree to our{" "}
                      <Link
                        href="/privacy-policy"
                        className="underline hover:text-[var(--brand-primary)] transition-colors"
                      >
                        Privacy Policy
                      </Link>
                      . All communications are strictly confidential.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. BOTTOM CTA STRIP ──────────────────────────────────────────── */}
      <section className="bg-[var(--brand-primary)] py-20 px-4">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-body text-[var(--brand-accent)] text-sm font-semibold uppercase tracking-widest mb-4">
              We Are Here to Help
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-5">
              Ready to Discuss Your Legal Matter?
            </h2>
            <p className="font-body text-white/70 text-base max-w-xl mx-auto mb-10">
              Our experienced attorneys are ready to provide the strategic
              counsel you need. Reach out today for a confidential consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white text-white font-body font-bold text-sm rounded-lg hover:bg-white hover:text-[var(--brand-primary)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-primary)]"
              >
                View Practice Areas
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
