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
    bio: "Dr. Osei brings over 20 years of experience advising multinational corporations, governments, and international institutions on complex cross-border transactions and public international law matters.",
    linkedin: "https://linkedin.com",
  },
  {
    id: "attorney-2",
    name: "Ms. Fatima Al-Rashid",
    title: "Partner",
    specializations: ["Mediation & Arbitration", "Civil & Criminal Litigation"],
    image: "https://saam.academy/wp-content/uploads/2022/11/Dr.-Fatima-Alrasheed-scaled.jpeg",
    bio: "Ms. Al-Rashid is a seasoned litigator and certified mediator with 15 years of courtroom experience resolving high-stakes commercial disputes.",
    linkedin: "https://linkedin.com",
  },
  {
    id: "attorney-3",
    name: "Mr. Kwame Mensah",
    title: "Partner",
    specializations: ["Employment Law", "Corporate & Commercial Law"],
    image: "https://penniur.upenn.edu/sites/default/files/styles/people_medium/public/2024-08/R_8MufNxUttISYRFf_dr._james_mensah_0.jpg?h=87da0d5e&itok=ULX9ZXw3",
    bio: "Mr. Mensah advises leading corporations and financial institutions on employment law compliance, executive compensation, and workplace dispute resolution.",
    linkedin: "https://linkedin.com",
  },
  {
    id: "attorney-4",
    name: "Dr. Adaeze Nwosu",
    title: "Senior Associate",
    specializations: ["Family Law", "Civil Litigation"],
    image: "https://faculty.mdanderson.org/content/dam/mdanderson/images/fis/adaeze_nwosuiheme.jpg.resize.jpg",
    bio: "Dr. Nwosu is a compassionate advocate for families navigating complex legal challenges, with a doctorate in family law and a decade of practice.",
    linkedin: "https://linkedin.com",
  },
  {
    id: "attorney-5",
    name: "Mr. Ibrahim Diallo",
    title: "Senior Associate",
    specializations: ["Legislative Drafting & Policy", "Public International Law"],
    image: "/images/attorney-ibrahim-diallo.jpg",
    bio: "Mr. Diallo has advised governments and regional bodies on legislative reform, constitutional law, and public policy across West Africa.",
    linkedin: "https://linkedin.com",
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
  address: "14 Legal Avenue, Suite 300, Accra, Ghana",
  hours: "Monday – Friday: 8:00 AM – 6:00 PM",
};

export interface SocialLink {
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Facebook", href: "https://facebook.com" },
];
