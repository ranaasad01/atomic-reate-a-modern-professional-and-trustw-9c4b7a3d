import Link from 'next/link';

export const metadata = {
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
                'Engage in conduct that restricts or inhibits anyone\'s use or enjoyment of the website.',
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
              All content on this website &mdash; including text, graphics, logos, images, and software &mdash;
              is the property of MIT Legal Consultants and is protected by applicable intellectual property
              laws. You may not reproduce, distribute, or create derivative works without our express written
              permission.
            </p>
          </div>

          <div className="border-t border-[var(--brand-border)] my-8" />

          {/* 4. Disclaimer of Warranties */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
              4. Disclaimer of Warranties
            </h2>
            <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
              This website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any
              kind, either express or implied, including but not limited to implied warranties of
              merchantability, fitness for a particular purpose, or non-infringement. We do not warrant
              that the website will be uninterrupted, error-free, or free of viruses.
            </p>
          </div>

          <div className="border-t border-[var(--brand-border)] my-8" />

          {/* 5. Limitation of Liability */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
              5. Limitation of Liability
            </h2>
            <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
              To the fullest extent permitted by law, MIT Legal Consultants shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from your use of,
              or inability to use, this website or its content, even if we have been advised of the
              possibility of such damages.
            </p>
          </div>

          <div className="border-t border-[var(--brand-border)] my-8" />

          {/* 6. Third-Party Links */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
              6. Third-Party Links
            </h2>
            <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
              Our website may contain links to third-party websites for your convenience. These links do
              not constitute an endorsement of those sites. We have no control over their content and
              accept no responsibility for them or for any loss or damage that may arise from your use
              of them.
            </p>
          </div>

          <div className="border-t border-[var(--brand-border)] my-8" />

          {/* 7. Privacy */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
              7. Privacy
            </h2>
            <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
              Your use of this website is also governed by our{' '}
              <Link
                href="/privacy-policy"
                className="text-[var(--brand-secondary)] underline underline-offset-2 hover:text-[var(--brand-accent)] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              , which is incorporated into these Terms by reference. Please review our Privacy Policy to
              understand our practices.
            </p>
          </div>

          <div className="border-t border-[var(--brand-border)] my-8" />

          {/* 8. Governing Law */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
              8. Governing Law
            </h2>
            <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of Ghana, without
              regard to its conflict of law provisions. Any disputes arising under these Terms shall be
              subject to the exclusive jurisdiction of the courts of Ghana.
            </p>
          </div>

          <div className="border-t border-[var(--brand-border)] my-8" />

          {/* 9. Changes to These Terms */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
              9. Changes to These Terms
            </h2>
            <p className="font-body text-[var(--brand-foreground)] leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately
              upon posting to the website. Your continued use of the website after any changes constitutes
              your acceptance of the new Terms.
            </p>
          </div>

          <div className="border-t border-[var(--brand-border)] my-8" />

          {/* 10. Contact Us */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[var(--brand-primary)] mb-4">
              10. Contact Us
            </h2>
            <p className="font-body text-[var(--brand-foreground)] leading-relaxed mb-3">
              If you have questions about these Terms, please contact us at:
            </p>
            <ul className="font-body text-[var(--brand-foreground)] leading-relaxed space-y-1 list-none pl-0">
              <li>
                <span className="font-semibold">Email:</span>{' '}
                <a
                  href="mailto:legal@mitlegal.com"
                  className="text-[var(--brand-secondary)] underline underline-offset-2 hover:text-[var(--brand-accent)] transition-colors duration-200"
                >
                  legal@mitlegal.com
                </a>
              </li>
              <li>
                <span className="font-semibold">Address:</span> 14 Legal Avenue, Suite 300, Accra, Ghana
              </li>
            </ul>
          </div>

          <div className="border-t border-[var(--brand-border)] my-8" />

          {/* Bottom CTA links */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/privacy-policy"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-[var(--brand-primary)] text-[var(--brand-primary)] font-body font-semibold text-sm hover:bg-[var(--brand-primary)] hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-ring)] focus-visible:ring-offset-2"
            >
              View Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--brand-accent)] text-[var(--brand-primary)] font-body font-bold text-sm hover:bg-[var(--brand-accent)]/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
