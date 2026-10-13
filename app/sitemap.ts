import type { MetadataRoute } from "next";
import { PAGES } from "@/content/pages";
import { SITE } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(PAGES).map((k) => ({
    url: `${SITE.url}/${k ? k + "/" : ""}`,
    changeFrequency: "monthly",
    priority: k === "" ? 1 : k.includes("/") ? 0.6 : 0.8,
  }));
}
