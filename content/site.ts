/** Site-wide settings: contact details, form routing and the announcement ticker. */
export const SITE = {
  url: "https://cognihab.com",
  name: "CogniHab",
  legalName: "CogniHab Healthcare Solutions Private Limited",
  phone: "+91 74260 60606",
  whatsapp: "917426060606",
  email: "namaste@cognihab.com", // where form submissions go
  contactEmail: "info@cognihab.com", // the public address shown on the site
  formEndpoint: "",
  netlifyForms: true,
  relayEndpoint: "https://formsubmit.co/ajax/namaste@cognihab.com",
  // rotating announcement ticker; add or remove lines freely
  announcements: [
    "CogniHab has tied up with Meta for the creation of the body rehabilitation suite.",
    "CogniHab has collaborated with AIIMS for lazy eye research.",
    "CogniHab has been granted a patent by the Indian Patent Office for lazy eye treatment using virtual reality.",
    "CogniHab has been declared winner of the hackathon by the Young Indian Ophthalmology Council.",
  ],
  social: {
    facebook: "https://www.facebook.com/Cognihab",
    x: "https://x.com/Cognihab",
    instagram: "https://www.instagram.com/Cognihab",
    linkedin: "https://www.linkedin.com/company/cognihab",
    youtube: "https://www.youtube.com/channel/UCIncaGUch635BdT-LirNPyA",
  },
};

export type NavLink = { href: string; label: string };
export type NavGroup = { label: string; href?: string; nav?: string; items: NavLink[] };

export const REHAB: NavLink[] = [
  { href: "/rehabilitation/stroke-neurological-rehabilitation/", label: "Stroke & Neurological Rehabilitation" },
  { href: "/rehabilitation/orthopaedic-post-surgical-recovery/", label: "Orthopaedic & Post-Surgical Recovery" },
  { href: "/rehabilitation/spinal-injury-rehabilitation/", label: "Spinal Injury Rehabilitation" },
  { href: "/rehabilitation/senior-care-fall-prevention/", label: "Senior Care & Fall Prevention" },
  { href: "/rehabilitation/sports-rehabilitation-fitness/", label: "Sports Rehabilitation & Fitness" },
];
export const VISION: NavLink[] = [
  { href: "/vision/lazy-eye-therapy/", label: "Lazy Eye Therapy" },
  { href: "/vision/vision-screening/", label: "Vision Screening for Clinics & Workplaces" },
  { href: "/vision/school-community-screening/", label: "School & Community Screening" },
];
export const WELLBEING: NavLink[] = [
  { href: "/well-being/workplace-wellbeing/", label: "Workplace Well-being" },
  { href: "/well-being/care-settings/", label: "Well-being in Care Settings" },
  { href: "/well-being/at-home/", label: "VR Meditation at Home" },
];
export const ABOUT: NavLink[] = [
  { href: "/about-us/", label: "About CogniHab" },
  { href: "/research/", label: "Research" },
  { href: "/advisors/", label: "Clinical Advisors" },
  { href: "/patent/", label: "Patent" },
];
export const RESOURCES: NavLink[] = [
  { href: "/blog/", label: "Blogs" },
  { href: "/case-studies/", label: "Case Studies" },
];

export const NAV: NavGroup[] = [
  { label: "Rehabilitation", href: "/rehabilitation/", nav: "rehabilitation", items: REHAB },
  { label: "Vision", href: "/vision/", nav: "vision", items: VISION },
  { label: "Well-being", href: "/well-being/", nav: "well-being", items: WELLBEING },
  { label: "About Us", href: "/about-us/", nav: "about-us", items: ABOUT },
  { label: "Resources", items: RESOURCES },
];

/** Paths served by the main WordPress site rather than this app. */
export const EXTERNAL_PATHS = ["/blog/", "/case-studies/", "/terms-and-conditions/", "/privacy-policy/", "/returns-policy/", "/qr-code/"];
export const isExternal = (href: string) => EXTERNAL_PATHS.some((p) => href.startsWith(p));

/** Which top-level nav item a path belongs to. */
export function navSection(pathname: string): string {
  const top = pathname.split("/").filter(Boolean)[0] ?? "home";
  return ["research", "advisors", "patent"].includes(top) ? "about-us" : top;
}
