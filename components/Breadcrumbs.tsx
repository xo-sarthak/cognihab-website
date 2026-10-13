import Link from "next/link";
import { Fragment } from "react";
import { SITE } from "@/content/site";
import { breadcrumbTrail } from "@/lib/seo";
import { JsonLd } from "./ui";

export default function Breadcrumbs({ path }: { path: string }) {
  const trail = breadcrumbTrail(path);
  if (!trail.length) return null;
  return (
    <>
      <nav className="crumbs" aria-label="Breadcrumb">
        {trail.map((c, i) => (
          <Fragment key={c.path + i}>
            {i > 0 && <span aria-hidden="true">›</span>}
            {i === trail.length - 1 ? <span aria-current="page">{c.name}</span> : c.path ? <Link href={c.path}>{c.name}</Link> : <span>{c.name}</span>}
          </Fragment>
        ))}
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail
            .filter((c) => c.path)
            .map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: SITE.url + c.path })),
        }}
      />
    </>
  );
}
