import Link from "next/link";
import type { ComponentProps } from "react";
import { isExternal } from "@/content/site";

export function Arrow() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  );
}

/** Structured data for search engines. */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

/**
 * Internal links use next/link; paths served by the main WordPress site are plain anchors.
 * Used for menu and footer links, which are often hidden or far down the page, so they are not prefetched.
 */
export function SmartLink({ href, ...rest }: ComponentProps<"a"> & { href: string }) {
  return isExternal(href) || !href.startsWith("/") ? <a href={href} {...rest} /> : <Link href={href} prefetch={false} {...rest} />;
}
