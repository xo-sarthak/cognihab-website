"use client";
import { useRef, useState } from "react";
import type { Faq } from "@/content/faqs";

/** One question open at a time; the answer height animates from 0 to its content height. */
export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const answers = useRef<(HTMLDivElement | null)[]>([]);
  return (
    <>
      {items.map((f, i) => (
        <div className={open === i ? "q open" : "q"} key={i}>
          <button aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
            <span dangerouslySetInnerHTML={{ __html: f.q }} />
            <i></i>
          </button>
          <div
            className="a"
            ref={(el) => {
              answers.current[i] = el;
            }}
            style={{ maxHeight: open === i ? `${answers.current[i]?.scrollHeight ?? 600}px` : "0px" }}
          >
            <p dangerouslySetInnerHTML={{ __html: f.a }} />
          </div>
        </div>
      ))}
    </>
  );
}
