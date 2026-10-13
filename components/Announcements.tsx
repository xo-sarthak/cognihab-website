"use client";
import { useEffect, useRef, useState } from "react";
import { SITE } from "@/content/site";

/** Scrolling news ticker above the header; dismissing it lasts for the browser session. */
export default function Announcements() {
  const items = SITE.announcements.filter(Boolean);
  const [shown, setShown] = useState(false);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hidden = false;
    try {
      hidden = sessionStorage.getItem("annHidden") === "1";
    } catch {}
    if (items.length && !hidden) setShown(true);
  }, [items.length]);

  useEffect(() => {
    document.body.classList.toggle("has-ann", shown);
    if (!shown) return;
    const t = track.current!;
    const pace = () => t.style.setProperty("--dur", Math.max(22, Math.round(t.scrollWidth / 2 / 68)) + "s");
    pace();
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) t.style.animation = "none";
    addEventListener("resize", pace);
    return () => removeEventListener("resize", pace);
  }, [shown]);

  if (!items.length) return null;
  const close = () => {
    setShown(false);
    try {
      sessionStorage.setItem("annHidden", "1");
    } catch {}
  };
  return (
    <div className="ann" id="ann" hidden={!shown}>
      <div className="ann-in">
        <span className="ann-tag">Announcements</span>
        <div className="ann-vp">
          <div className="ann-track" id="annTrack" ref={track}>
            {/* two passes, so the -50% loop is seamless */}
            {[...items, ...items].map((t, i) => (
              <div className="ann-item" key={i} aria-hidden={i >= items.length}>
                {t}
              </div>
            ))}
          </div>
        </div>
        <button className="ann-x" id="annClose" aria-label="Dismiss announcements" onClick={close}>
          ×
        </button>
      </div>
    </div>
  );
}
