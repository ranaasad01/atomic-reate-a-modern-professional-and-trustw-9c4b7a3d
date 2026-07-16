import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | MIT Legal Consultants",
  description:
    "Read the MIT Legal Consultants Privacy Policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[var(--brand-background)] min-h-screen">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--brand-primary)] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="font-body text-[var(--brand-accent)] text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            aria-label="Category: Legal"
          >
            Legal
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="font-body text-white/60 text-sm">
            Last Updated: January 2025
          </p>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[var(--brand-card)] rounded-2xl shadow-lg p-8 md:p-12">

            {/* Introduction */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
                Introduction
              </h2>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
                MIT Legal Consultants (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy and
                handling your personal information with transparency and care. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you visit our website
                mitlegal.com. Please read this policy carefully. If you disagree with its terms, please
                discontinue use of the site.
              </p>
            </div>

            <div className="border-t border-[var(--brand-border)] my-8" />

            {/* 1. Information We Collect */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
                1. Information We Collect
              </h2>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed mb-4">
                We collect information in the following ways:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-2">
                    (a) Information You Provide Directly
                  </h3>
                  <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
                    When you complete our contact or inquiry form, we collect personal information including
                    your full name, email address, phone number, subject of inquiry, and the content of your
                    message. This information is provided voluntarily and is used solely to respond to your
                    inquiry and provide the legal services you request.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-2">
                    (b) Automatically Collected Information
                  </h3>
                  <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
                    When you visit our website, certain information is collected automatically through cookies
                    and analytics tools. This includes your IP address, browser type, operating system,
                    referring URLs, pages visited, and time spent on the site. This data is used in aggregate
                    form to improve website performance and user experience.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-2">
                    (c) Cookies
                  </h3>
                  <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
                    MIT Legal Consultants uses cookies to enhance your browsing experience. Cookies are small
                    data files stored on your device. You may disable cookies through your browser settings;
                    however, doing so may affect the functionality of certain parts of our website.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[var(--brand-border)] my-8" />

            {/* 2. How We Use Your Information */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
                2. How We Use Your Information
              </h2>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed mb-4">
                MIT Legal Consultants uses the information we collect for the following purposes:
              </p>
              <ul className="space-y-2">
                {[
                  "To respond to your inquiries and provide legal services.",
                  "To communicate with you about your matter or request.",
                  "To improve our website, services, and client experience.",
                  "To comply with applicable legal and regulatory obligations.",
                  "To send administrative communications such as confirmations and updates.",
                  "To protect the security and integrity of our website and systems.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-[var(--brand-foreground)] leading-relaxed">
                    <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[var(--brand-border)] my-8" />

            {/* 3. Disclosure of Your Information */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
                3. Disclosure of Your Information
              </h2>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed mb-4">
                MIT Legal Consultants does not sell, trade, or rent your personal information to third
                parties. We may share your information only in the following limited circumstances:
              </p>
              <ul className="space-y-2">
                {[
                  "With trusted service providers who assist in operating our website and delivering our services, subject to strict confidentiality obligations.",
                  "When required by law, court order, or governmental authority.",
                  "To protect the rights, property, or safety of MIT Legal Consultants, our clients, or others.",
                  "In connection with a merger, acquisition, or sale of all or part of our business, subject to appropriate confidentiality protections.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-[var(--brand-foreground)] leading-relaxed">
                    <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[var(--brand-border)] my-8" />

            {/* 4. Attorney-Client Privilege & Confidentiality */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
                4. Attorney-Client Privilege &amp; Confidentiality
              </h2>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
                All communications between clients and MIT Legal Consultants are protected by attorney-client
                privilege and professional confidentiality obligations. We maintain strict internal protocols
                to ensure that client information is accessible only to authorized personnel directly involved
                in your matter. Our confidentiality obligations extend beyond the termination of any
                engagement.
              </p>
            </div>

            <div className="border-t border-[var(--brand-border)] my-8" />

            {/* 5. Data Security */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
                5. Data Security
              </h2>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
                MIT Legal Consultants implements appropriate technical and organizational measures to protect
                your personal information against unauthorized access, alteration, disclosure, or destruction.
                These measures include secure server infrastructure, encrypted data transmission (SSL/TLS),
                access controls, and regular security reviews. While we strive to use commercially acceptable
                means to protect your information, no method of transmission over the internet is 100% secure,
                and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="border-t border-[var(--brand-border)] my-8" />

            {/* 6. Data Retention */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
                6. Data Retention
              </h2>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
                We retain personal information for as long as necessary to fulfil the purposes for which it
                was collected, including satisfying any legal, accounting, or reporting requirements. Client
                matter files are retained in accordance with applicable professional conduct rules and
                statutory limitation periods. When information is no longer required, it is securely deleted
                or anonymized.
              </p>
            </div>

            <div className="border-t border-[var(--brand-border)] my-8" />

            {/* 7. Your Rights */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
                7. Your Rights
              </h2>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed mb-4">
                Depending on your jurisdiction, you may have the following rights regarding your personal
                information:
              </p>
              <ul className="space-y-2">
                {[
                  "The right to access the personal information we hold about you.",
                  "The right to request correction of inaccurate or incomplete information.",
                  "The right to request deletion of your personal information, subject to legal obligations.",
                  "The right to object to or restrict certain processing of your information.",
                  "The right to data portability where technically feasible.",
                  "The right to withdraw consent where processing is based on consent.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-[var(--brand-foreground)] leading-relaxed">
                    <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed mt-4">
                To exercise any of these rights, please contact MIT Legal Consultants using the details
                provided in the Contact section below.
              </p>
            </div>

            <div className="border-t border-[var(--brand-border)] my-8" />

            {/* 8. Third-Party Links */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
                8. Third-Party Links
              </h2>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
                Our website may contain links to third-party websites. MIT Legal Consultants is not
                responsible for the privacy practices or content of those external sites. We encourage you to
                review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div className="border-t border-[var(--brand-border)] my-8" />

            {/* 9. Children's Privacy */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
                9. Children&apos;s Privacy
              </h2>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
                The MIT Legal Consultants website is not directed at children under the age of 18. We do not
                knowingly collect personal information from minors. If you believe we have inadvertently
                collected information from a child, please contact us immediately so we can take appropriate
                action.
              </p>
            </div>

            <div className="border-t border-[var(--brand-border)] my-8" />

            {/* 10. Changes to This Policy */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
                10. Changes to This Policy
              </h2>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
                MIT Legal Consultants reserves the right to update this Privacy Policy at any time. Changes
                will be posted on this page with a revised &ldquo;Last Updated&rdquo; date. We encourage you to review
                this policy periodically to stay informed about how we protect your information. Continued use
                of our website following any changes constitutes your acceptance of the updated policy.
              </p>
            </div>

            <div className="border-t border-[var(--brand-border)] my-8" />

            {/* 11. Contact Us */}
            <div className="mb-2">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
                11. Contact Us
              </h2>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or the handling
                of your personal information, please contact MIT Legal Consultants:
              </p>
              <div className="bg-[var(--brand-muted)] rounded-xl p-6 space-y-2">
                <p className="font-body text-[var(--brand-foreground)] font-semibold">MIT Legal Consultants</p>
                <p className="font-body text-[var(--brand-muted-foreground)] text-sm">14 Legal Avenue, Suite 300, Accra, Ghana</p>
                <p className="font-body text-[var(--brand-muted-foreground)] text-sm">
                  Email:{" "}
                  <a
                    href="mailto:info@mitlegal.com"
                    className="text-[var(--brand-primary)] underline hover:text-[var(--brand-accent)] transition-colors"
                  >
                    info@mitlegal.com
                  </a>
                </p>
                <p className="font-body text-[var(--brand-muted-foreground)] text-sm">Phone: +233 (0) 30 000 0000</p>
              </div>
            </div>

            <div className="border-t border-[var(--brand-border)] my-8" />

            {/* Footer nav */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <p className="font-body text-[var(--brand-muted-foreground)] text-sm">
                &copy; {new Date().getFullYear()} MIT Legal Consultants. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/terms"
                  className="font-body text-sm text-[var(--brand-primary)] underline hover:text-[var(--brand-accent)] transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
                <Link
                  href="/contact"
                  className="font-body text-sm text-[var(--brand-primary)] underline hover:text-[var(--brand-accent)] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
