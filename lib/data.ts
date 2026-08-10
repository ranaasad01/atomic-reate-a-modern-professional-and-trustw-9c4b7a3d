export const BRAND_NAME = "MIT Legal Consultants";
export const BRAND_TAGLINE = "Trusted Counsel. Proven Results.";
export const BRAND_SHORT = "MIT Legal";

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Practice Areas",
    href: "/practice-areas",
    children: [
      { label: "Corporate & Commercial Law", href: "/practice-areas/corporate-commercial-law" },
      { label: "Legislative Drafting & Policy", href: "/practice-areas/legislative-drafting-policy" },
      { label: "Mediation & Arbitration", href: "/practice-areas/mediation-arbitration" },
      { label: "Civil & Criminal Litigation", href: "/practice-areas/civil-criminal-litigation" },
      { label: "Family Law", href: "/practice-areas/family-law" },
      { label: "Public International Law", href: "/practice-areas/public-international-law" },
      { label: "Employment Law", href: "/practice-areas/employment-law" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export interface PracticeArea {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  icon: string;
  href: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    id: "corporate-commercial",
    title: "Corporate & Commercial Law",
    slug: "corporate-commercial-law",
    shortDescription:
      "Comprehensive legal support for business formation, contracts, mergers, acquisitions, and commercial transactions.",
    icon: "Briefcase",
    href: "/practice-areas/corporate-commercial-law",
  },
  {
    id: "legislative-drafting",
    title: "Legislative Drafting & Policy",
    slug: "legislative-drafting-policy",
    shortDescription:
      "Specialized drafting of legislation, regulations, and public policy frameworks for governments and institutions.",
    icon: "FileText",
    href: "/practice-areas/legislative-drafting-policy",
  },
  {
    id: "mediation-arbitration",
    title: "Mediation & Arbitration",
    slug: "mediation-arbitration",
    shortDescription:
      "Expert alternative dispute resolution services to resolve conflicts efficiently outside of court.",
    icon: "Scale",
    href: "/practice-areas/mediation-arbitration",
  },
  {
    id: "civil-criminal-litigation",
    title: "Civil & Criminal Litigation",
    slug: "civil-criminal-litigation",
    shortDescription:
      "Vigorous representation in civil disputes and criminal matters at all court levels.",
    icon: "Gavel",
    href: "/practice-areas/civil-criminal-litigation",
  },
  {
    id: "family-law",
    title: "Family Law",
    slug: "family-law",
    shortDescription:
      "Compassionate guidance through divorce, custody, adoption, and all family-related legal matters.",
    icon: "Heart",
    href: "/practice-areas/family-law",
  },
  {
    id: "public-international-law",
    title: "Public International Law",
    slug: "public-international-law",
    shortDescription:
      "Cross-border legal expertise covering treaties, international trade, and diplomatic matters.",
    icon: "Globe",
    href: "/practice-areas/public-international-law",
  },
  {
    id: "employment-law",
    title: "Employment Law",
    slug: "employment-law",
    shortDescription:
      "Protecting the rights of employers and employees in workplace disputes, contracts, and compliance.",
    icon: "Users",
    href: "/practice-areas/employment-law",
  },
];

export interface Attorney {
  id: string;
  name: string;
  title: string;
  specializations: string[];
  image: string;
  bio: string;
  linkedin?: string;
}

export const attorneys: Attorney[] = [
  {
    id: "attorney-1",
    name: "Muhammad Ibrahim Tariq",
    title: "Partner",
    specializations: ["Corporate & Commercial Law", "Legislative Drafting & Public Policy"],
    image: "",
    bio: "Muhammad Ibrahim Tariq is a dedicated legal professional with extensive experience in corporate law and legislative drafting. He advises businesses and government institutions on complex commercial transactions, regulatory compliance, and the preparation of legislation and policy frameworks.",
  },
  {
    id: "attorney-2",
    name: "Senior Associate",
    title: "Senior Associate",
    specializations: ["Mediation & Arbitration", "Civil & Criminal Litigation"],
    image: "",
    bio: "A seasoned litigator and dispute resolution specialist with a strong track record in both courtroom advocacy and alternative dispute resolution. Represents clients across a broad range of civil and criminal matters.",
  },
  {
    id: "attorney-3",
    name: "Associate Attorney",
    title: "Associate",
    specializations: ["Family Law", "Employment Law"],
    image: "",
    bio: "Provides compassionate and strategic counsel in family law and employment matters. Committed to protecting client rights and achieving fair outcomes in sensitive personal and workplace disputes.",
  },
  {
    id: "attorney-4",
    name: "International Law Counsel",
    title: "Of Counsel",
    specializations: ["Public International Law", "Cross-Border Matters"],
    image: "",
    bio: "Specializes in public international law, cross-border transactions, and international dispute resolution. Advises governments, NGOs, and multinational clients on complex multi-jurisdictional legal matters.",
  },
];
