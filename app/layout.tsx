import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocaleProvider from "@/components/LocaleProvider";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  formatDetection: { telephone: false, date: false, email: false, address: false },
  title: {
    default: "MIT Legal Consultants | Premier Legal Services",
    template: "%s | MIT Legal Consultants",
  },
  description:
    "MIT Legal Consultants offers expert legal services across Corporate & Commercial Law, Mediation & Arbitration, Civil & Criminal Litigation, Family Law, Public International Law, Legislative Drafting, and Employment Law.",
  keywords: [
    "legal consultants",
    "corporate law",
    "mediation",
    "arbitration",
    "litigation",
    "family law",
    "employment law",
    "international law",
    "legislative drafting",
    "MIT Legal",
  ],
  authors: [{ name: "MIT Legal Consultants" }],
  creator: "MIT Legal Consultants",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MIT Legal Consultants",
    title: "MIT Legal Consultants | Premier Legal Services",
    description:
      "Expert legal counsel across seven practice areas. Trusted by individuals, corporations, and governments.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MIT Legal Consultants | Premier Legal Services",
    description:
      "Expert legal counsel across seven practice areas. Trusted by individuals, corporations, and governments.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[var(--brand-background)] text-[var(--brand-foreground)] antialiased">
        <LocaleProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <LanguageToggle />
        </LocaleProvider>
      </body>
    </html>
  );
}