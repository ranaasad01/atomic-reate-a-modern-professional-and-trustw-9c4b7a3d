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
                    and analytics tools. This includes your IP address, browser type and version, operating
                    system, pages visited, time spent on each page, and referring URLs. This data helps us
                    understand how visitors interact with our site and improve the user experience.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-[var(--brand-primary)] mb-2">
                    (c) Sensitive Personal Data
                  </h3>
                  <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
                    We do not intentionally collect sensitive personal data (such as health information,
                    financial account details, or biometric data) unless you explicitly provide it in the
                    context of seeking legal advice. Any such information is treated with the highest level
                    of confidentiality.
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
                We use the information we collect for the following purposes:
              </p>
              <ul className="space-y-2">
                {[
                  "To respond to your inquiries and provide the legal services you have requested.",
                  "To improve the functionality, content, and overall user experience of our website.",
                  "To send administrative communications, such as confirmations of receipt of your inquiry.",
                  "To comply with applicable legal and regulatory obligations.",
                  "To analyze website traffic and usage patterns in order to enhance our online presence.",
                  "To protect the security and integrity of our website and systems.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-[var(--brand-foreground)] leading-relaxed">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--brand-accent)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[var(--brand-border)] my-8" />

            {/* 3. Cookies & Tracking */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
                3. Cookies &amp; Tracking Technologies
              </h2>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed mb-4">
                Our website uses cookies — small text files stored on your device — to enhance your browsing
                experience. We use two categories of cookies:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="font-body text-[var(--brand-foreground)] leading-relaxed">
                  <span className="font-semibold text-[var(--brand-primary)]">Essential Cookies:</span>{" "}
                  Required for the website to function correctly. These cannot be disabled without affecting
                  core site functionality.
                </li>
                <li className="font-body text-[var(--brand-foreground)] leading-relaxed">
                  <span className="font-semibold text-[var(--brand-primary)]">Analytics Cookies (e.g., Google Analytics):</span>{" "}
                  Used to understand how visitors interact with our website, including which pages are most
                  visited and how long users spend on the site. This data is aggregated and anonymized.
                </li>
              </ul>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
                You may disable cookies at any time through your browser settings. Please note that disabling
                certain cookies may affect the functionality of some features of our website. We do{" "}
                <strong>not</strong> use advertising cookies or tracking cookies for third-party marketing purposes.
              </p>
            </div>

            <div className="border-t border-[var(--brand-border)] my-8" />

            {/* 4. Disclosure */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
                4. Disclosure of Your Information
              </h2>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your
                information only in the following limited circumstances:
              </p>
              <ul className="space-y-2">
                {[
                  "Trusted service providers who assist in the operation of our website and business, subject to strict confidentiality obligations and data processing agreements.",
                  "Law enforcement agencies, regulatory authorities, or courts when we are required to do so by applicable law or a valid legal order.",
                  "Professional advisors such as auditors, insurers, and legal counsel, where necessary for the conduct of our business.",
                  "Successor entities in the event of a merger, acquisition, or sale of all or part of our business assets, subject to equivalent privacy protections.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-[var(--brand-foreground)] leading-relaxed">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--brand-accent)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[var(--brand-border)] my-8" />

            {/* 5. Data Retention */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
                5. Data Retention
              </h2>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
                We retain personal information only for as long as is necessary to fulfill the purposes
                outlined in this Privacy Policy, or as required by applicable law, regulation, or professional
                obligations. Contact form submissions and related correspondence are retained for a period of
                up to <strong>24 months</strong> from the date of receipt, after which they are securely
                deleted or anonymized. Where we are required by law to retain information for a longer period
                (for example, for tax or regulatory compliance purposes), we will do so in accordance with
                those requirements.
              </p>
            </div>

            <div className="border-t border-[var(--brand-border)] my-8" />

            {/* 6. Your Rights */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
                6. Your Rights
              </h2>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed mb-4">
                Depending on your jurisdiction and applicable data protection law, you may have the following
                rights with respect to your personal information:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "The right to access the personal data we hold about you and to receive a copy of it.",
                  "The right to request correction of any inaccurate or incomplete personal data.",
                  "The right to request deletion of your personal data, subject to any legal retention obligations.",
                  "The right to object to or request restriction of the processing of your personal data.",
                  "The right to data portability, where processing is based on consent or contract.",
                  "The right to withdraw consent at any time, where processing is based on your consent.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-[var(--brand-foreground)] leading-relaxed">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--brand-accent)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:privacy@mitlegal.com"
                  className="text-[var(--brand-secondary)] underline underline-offset-2 hover:text-[var(--brand-accent)] transition-colors"
                >
                  privacy@mitlegal.com
                </a>
                . We will respond to your request within 30 days.
              </p>
            </div>

            <div className="border-t border-[var(--brand-border)] my-8" />

            {/* 7. Data Security */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
                7. Data Security
              </h2>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
                We implement appropriate technical and organizational security measures designed to protect
                your personal information against unauthorized access, accidental loss, alteration, disclosure,
                or destruction. These measures include secure server infrastructure, encrypted data
                transmission (SSL/TLS), access controls, and regular security reviews. However, please be
                aware that no method of transmission over the internet or method of electronic storage is
                completely secure. While we strive to use commercially acceptable means to protect your
                personal information, we cannot guarantee its absolute security.
              </p>
            </div>

            <div className="border-t border-[var(--brand-border)] my-8" />

            {/* 8. Third-Party Links */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
                8. Third-Party Links
              </h2>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
                Our website may contain links to third-party websites, resources, or services that are not
                operated or controlled by MIT Legal Consultants. This Privacy Policy applies solely to our
                website. We are not responsible for the privacy practices, content, or security of any
                third-party sites. We strongly encourage you to review the privacy policy of every website
                you visit before providing any personal information.
              </p>
            </div>

            <div className="border-t border-[var(--brand-border)] my-8" />

            {/* 9. Changes to This Policy */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
                9. Changes to This Policy
              </h2>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
                We reserve the right to update or modify this Privacy Policy at any time to reflect changes
                in our practices, legal requirements, or operational needs. Any changes will be posted on
                this page with a revised &ldquo;Last Updated&rdquo; date. We encourage you to review this
                Privacy Policy periodically to stay informed about how we are protecting your information.
                Your continued use of our website following the posting of changes constitutes your
                acceptance of the revised Privacy Policy.
              </p>
            </div>

            <div className="border-t border-[var(--brand-border)] my-8" />

            {/* 10. Contact Us */}
            <div className="mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
                10. Contact Us
              </h2>
              <p className="font-body text-[var(--brand-foreground)] leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or the way we
                handle your personal information, please contact MIT Legal Consultants at:
              </p>
              <div className="bg-[var(--brand-muted)] rounded-xl p-6 space-y-2">
                <p className="font-body text-[var(--brand-foreground)]">
                  <span className="font-semibold text-[var(--brand-primary)]">Email:</span>{" "}
                  <a
                    href="mailto:privacy@mitlegal.com"
                    className="text-[var(--brand-secondary)] underline underline-offset-2 hover:text-[var(--brand-accent)] transition-colors"
                  >
                    privacy@mitlegal.com
                  </a>
                </p>
                <p className="font-body text-[var(--brand-foreground)]">
                  <span className="font-semibold text-[var(--brand-primary)]">Address:</span>{" "}
                  14 Legal Avenue, Suite 300, Accra, Ghana
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm rounded-lg hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2"
              >
                Contact Us With Questions
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
