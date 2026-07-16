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
  { label: "Our Team", href: "/team" },
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
    name: "Dr. Amara Osei",
    title: "Senior Partner",
    specializations: ["Corporate & Commercial Law", "Public International Law"],
    image: "https://www.myschoolacademy.org/_ipx/_/images/tech-entrepreneur.png",
    bio: "Dr. Osei brings over 20 years of experience advising multinational corporations and government bodies on complex cross-border transactions and international legal frameworks.",
    linkedin: "#",
  },
  {
    id: "attorney-2",
    name: "Adv. Priya Naidoo",
    title: "Partner",
    specializations: ["Civil & Criminal Litigation", "Employment Law"],
    image: "/images/attorney-priya-naidoo.jpg",
    bio: "Adv. Naidoo is a seasoned litigator with a track record of success in high-stakes civil and criminal matters, and a deep commitment to employment rights.",
    linkedin: "#",
  },
  {
    id: "attorney-3",
    name: "Mr. James Kariuki",
    title: "Partner",
    specializations: ["Mediation & Arbitration", "Family Law"],
    image: "/images/attorney-james-kariuki.jpg",
    bio: "Mr. Kariuki is a certified mediator and arbitrator who has resolved hundreds of commercial and family disputes with sensitivity and precision.",
    linkedin: "#",
  },
  {
    id: "attorney-4",
    name: "Ms. Fatima Al-Hassan",
    title: "Associate",
    specializations: ["Legislative Drafting & Policy", "Public International Law"],
    image: "/images/attorney-fatima-al-hassan.jpg",
    bio: "Ms. Al-Hassan specializes in legislative drafting and has contributed to landmark policy reforms across multiple jurisdictions.",
    linkedin: "#",
  },
];

export const contactInfo = {
  phone: "+1 (555) 234-5678",
  email: "info@mitlegalconsultants.com",
  address: "14 Justice Avenue, Suite 800, Nairobi, Kenya",
  hours: {
    weekdays: "Monday to Friday: 8:00 AM – 6:00 PM",
    saturday: "Saturday: 9:00 AM – 1:00 PM",
    sunday: "Sunday: Closed",
  },
};

export const socialLinks = {
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  facebook: "https://facebook.com",
};