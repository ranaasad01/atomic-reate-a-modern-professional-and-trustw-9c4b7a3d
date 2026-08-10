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
      { label: "Mediation & Arbitration", href: "/practice-areas/mediation-arbitration" },
      { label: "Civil & Criminal Litigation", href: "/practice-areas/civil-criminal-litigation" },
      { label: "Family Law", href: "/practice-areas/family-law" },
      { label: "Public International Law", href: "/practice-areas/public-international-law" },
      { label: "Legislative Drafting & Policy", href: "/practice-areas/legislative-drafting-policy" },
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
    id: "legislative-drafting",
    title: "Legislative Drafting & Policy",
    slug: "legislative-drafting-policy",
    shortDescription:
      "Specialized drafting of legislation, regulations, and public policy frameworks for governments and institutions.",
    icon: "FileText",
    href: "/practice-areas/legislative-drafting-policy",
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
    bio: "Muhammad Ibrahim Tariq is a dedicated legal professional with extensive experience in corporate law and legislative drafting. He provides strategic counsel to businesses and institutions navigating complex legal and regulatory environments.",
  },
  {
    id: "attorney-2",
    name: "Safi Ullah Khan",
    title: "Partner",
    specializations: ["Civil & Criminal Litigation", "Employment Law"],
    image: "",
    bio: "Safi Ullah Khan is a seasoned litigator with a strong track record in civil and criminal matters. He is committed to vigorous client advocacy and achieving results through meticulous case preparation and courtroom expertise.",
  },
  {
    id: "attorney-3",
    name: "Ambreen Khalid",
    title: "Partner",
    specializations: ["Family Law", "Mediation & Arbitration"],
    image: "",
    bio: "Ambreen Khalid brings compassion and expertise to family law and dispute resolution. She guides clients through sensitive legal matters with professionalism, ensuring their rights and interests are protected at every stage.",
  },
];

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string;
}

export const contactInfo: ContactInfo = {
  phone: "+1 (555) 000-0000",
  email: "info@mitlegal.com",
  address: "123 Legal Avenue, Suite 400, City, Country",
  hours: "Monday to Friday, 9:00 AM – 6:00 PM",
};

export interface SocialLinks {
  linkedin: string;
  twitter: string;
  facebook: string;
}

export const socialLinks: SocialLinks = {
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  facebook: "https://facebook.com",
};
