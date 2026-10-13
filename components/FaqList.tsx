import type { Faq } from "@/content/faqs";
import FaqAccordion from "./FaqAccordion";
import { JsonLd } from "./ui";

const text = (html: string) =>
  html
    .replace(/<[^>]+>/g, "")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

/** The accordion plus FAQPage structured data for the same questions. */
export default function FaqList({ items }: { items: Faq[] }) {
  return (
    <>
      <FaqAccordion items={items} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((f) => ({ "@type": "Question", name: text(f.q), acceptedAnswer: { "@type": "Answer", text: text(f.a) } })),
        }}
      />
    </>
  );
}
