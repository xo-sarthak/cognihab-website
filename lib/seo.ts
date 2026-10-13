import type { Metadata } from "next";
import { PAGES } from "@/content/pages";
import { SITE } from "@/content/site";

/** "/vision/lazy-eye-therapy/" -> "vision/lazy-eye-therapy"; "/" -> "" */
export const pageKey = (path: string) => path.replace(/^\/|\/$/g, "");

export function pageMetadata(path: string): Metadata {
  const page = PAGES[pageKey(path)];
  if (!page) throw new Error(`No SEO entry in content/pages.ts for ${path}`);
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: "en_IN",
      url: path,
      title: page.title,
      description: page.description,
      images: [{ url: "/og-cover.jpg" }],
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: ["/og-cover.jpg"] },
  };
}

/** Pages under About Us that are not nested under /about-us/ in the URL. */
const CRUMB_PARENT: Record<string, { name: string; path: string }> = {
  patent: { name: "About Us", path: "/about-us/" },
  research: { name: "About Us", path: "/about-us/" },
  advisors: { name: "About Us", path: "/about-us/" },
};

export function breadcrumbTrail(path: string): { name: string; path: string }[] {
  const key = pageKey(path);
  if (!key) return [];
  const trail = [{ name: "Home", path: "/" }];
  if (CRUMB_PARENT[key]) trail.push(CRUMB_PARENT[key]);
  const parts = key.split("/");
  parts.forEach((_, i) => {
    const k = parts.slice(0, i + 1).join("/");
    trail.push({ name: PAGES[k].crumb, path: `/${k}/` });
  });
  return trail;
}

export const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  legalName: SITE.legalName,
  url: `${SITE.url}/`,
  logo: `${SITE.url}/media/cognihab-logo.png`,
  email: SITE.contactEmail,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "4th Floor, 401-403, Mall of Jaipur, Gandhi Path, Vaishali Nagar",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302021",
    addressCountry: "IN",
  },
  sameAs: Object.values(SITE.social),
};
