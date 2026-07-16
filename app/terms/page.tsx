import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | MIT Legal Consultants',
  description: 'Read the Terms and Conditions governing use of the MIT Legal Consultants website.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--brand-background)]">
      {/* ── Hero ── */}
      <section className="bg-[var(--brand-primary)] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--brand-accent)] mb-4">
            Legal
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Terms &amp; Conditions
          </h1>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto mb-4">
            Please read these terms carefully before using our website.
          </p>
          <p className="font-body text-sm text-white/60">
            Last Updated: January 2025
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-[var(--brand-card)] rounded-2xl shadow-lg p-8 md:p-12">

          {/* Introduction */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
              Introduction
            </h2>
            <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
              These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the MIT Legal Consultants website
              located at <span className="font-semibold">mitlegal.com</span>. By accessing or using our website,
              you agree to be bound by these Terms. If you do not agree, please do not use our website.
            </p>
          </div>

          <div className="border-t border-[var(--brand-border)] my-8" />

          {/* 1. Use of the Website */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
              1. Use of the Website
            </h2>
            <p className="font-body text-[var(--brand-foreground)] leading-relaxed mb-4">
              You may use this website for lawful purposes only. You agree not to:
            </p>
            <ul className="font-body text-[var(--brand-foreground)] leading-relaxed space-y-2 list-none pl-0">
              {[
                'Use the site in any way that violates applicable laws or regulations.',
                'Transmit unsolicited commercial communications.',
                'Attempt to gain unauthorized access to any part of the website or its systems.',
                "Engage in conduct that restricts or inhibits anyone's use or enjoyment of the website.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[var(--brand-border)] my-8" />

          {/* 2. No Legal Advice */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
              2. No Legal Advice
            </h2>
            <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
              The content on this website is provided for general informational purposes only and does not
              constitute legal advice. No attorney-client relationship is formed by your use of this website
              or by submitting an inquiry through our contact form. For legal advice specific to your
              situation, please consult a qualified attorney.
            </p>
          </div>

          <div className="border-t border-[var(--brand-border)] my-8" />

          {/* 3. Intellectual Property */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
              3. Intellectual Property
            </h2>
            <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
              All content on this website — including text, graphics, logos, and images — is the property of
              MIT Legal Consultants and is protected by applicable intellectual property laws. You may not
              reproduce, distribute, or create derivative works from any content on this site without our
              express written permission.
            </p>
          </div>

          <div className="border-t border-[var(--brand-border)] my-8" />

          {/* 4. Limitation of Liability */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
              4. Limitation of Liability
            </h2>
            <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
              MIT Legal Consultants makes no warranties, express or implied, regarding the accuracy,
              completeness, or suitability of the information on this website. To the fullest extent
              permitted by law, MIT Legal Consultants shall not be liable for any direct, indirect,
              incidental, or consequential damages arising from your use of, or inability to use, this
              website or its content.
            </p>
          </div>

          <div className="border-t border-[var(--brand-border)] my-8" />

          {/* 5. Third-Party Links */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
              5. Third-Party Links
            </h2>
            <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
              This website may contain links to third-party websites. MIT Legal Consultants does not
              endorse, control, or assume responsibility for the content or practices of any third-party
              sites. We encourage you to review the privacy policies and terms of any external sites you
              visit.
            </p>
          </div>

          <div className="border-t border-[var(--brand-border)] my-8" />

          {/* 6. Privacy */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
              6. Privacy
            </h2>
            <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
              Your use of this website is also governed by our{' '}
              <Link
                href="/privacy-policy"
                className="text-[var(--brand-secondary)] underline underline-offset-2 hover:text-[var(--brand-accent)] transition-colors"
              >
                Privacy Policy
              </Link>
              , which is incorporated into these Terms by reference. By using this website, you consent to
              the data practices described in the MIT Legal Consultants Privacy Policy.
            </p>
          </div>

          <div className="border-t border-[var(--brand-border)] my-8" />

          {/* 7. Governing Law */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
              7. Governing Law
            </h2>
            <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable law. Any disputes
              arising in connection with these Terms shall be subject to the exclusive jurisdiction of the
              competent courts, unless otherwise agreed in writing by MIT Legal Consultants.
            </p>
          </div>

          <div className="border-t border-[var(--brand-border)] my-8" />

          {/* 8. Changes to These Terms */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
              8. Changes to These Terms
            </h2>
            <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
              MIT Legal Consultants reserves the right to update or modify these Terms at any time without
              prior notice. Changes will be effective immediately upon posting to the website. Your continued
              use of the website after any changes constitutes your acceptance of the revised Terms.
            </p>
          </div>

          <div className="border-t border-[var(--brand-border)] my-8" />

          {/* 9. Contact Us */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
              9. Contact Us
            </h2>
            <p className="font-body text-[var(--brand-foreground)] leading-relaxed mb-4">
              If you have any questions about these Terms, please contact MIT Legal Consultants:
            </p>
            <ul className="font-body text-[var(--brand-foreground)] leading-relaxed space-y-2 list-none pl-0">
              {[
                { label: 'Email', value: 'info@mitlegal.com' },
                { label: 'Phone', value: '+233 (0) 30 000 0000' },
                { label: 'Address', value: '14 Legal Avenue, Suite 300, Accra, Ghana' },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]" />
                  <span>
                    <span className="font-semibold">{item.label}:</span> {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[var(--brand-border)] my-8" />

          {/* Back link */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-[var(--brand-secondary)] hover:text-[var(--brand-accent)] transition-colors"
            >
              &larr; Back to Home
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
