"use client";
import Link from "next/link";
import { useState } from "react";
import { USE_CASES, type Programme } from "@/content/useCases";
import { Arrow } from "./ui";

/** Flip cards on the programme pages: photo and title on the front, the details and a link to the use-case page on the back. */
export default function UseCaseCards({ programme }: { programme: Programme }) {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  return (
    <>
      {USE_CASES[programme].map((u) => (
        <article
          key={u.slug}
          id={`uc-${u.slug}`}
          className={flipped[u.slug] ? `${u.cls} flip` : u.cls}
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) return;
            setFlipped((f) => ({ ...f, [u.slug]: !f[u.slug] }));
          }}
        >
          <div className="fcin">
            <div className="fcf">
              <div className={u.imCls}>
                <img src={u.img} alt={u.alt} loading="lazy" decoding="async" />
              </div>
              <div className="fcap">
                <h3>{u.title}</h3>
                <p>{u.subtitle}</p>
                <button className="flipbtn light" type="button">See more details</button>
              </div>
            </div>
            <div className="fcb">
              <div className="fcbh">
                <h3>{u.title}</h3>
                <button className="flipbtn" type="button">Back</button>
              </div>
              <h4>What it does</h4>
              <p>{u.does}</p>
              <h4>What it addresses</h4>
              <p>{u.addresses.join(" · ")}</p>
              <h4>Who buys it</h4>
              <p>{u.buys}</p>
              <h4>What is needed</h4>
              <p>{u.needed}</p>
              <Link className="lnk ucmore" href={`/${programme}/${u.slug}/`}>
                Read the full use case <Arrow />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
