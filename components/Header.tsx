"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV, navSection } from "@/content/site";
import { Arrow, SmartLink } from "./ui";

/** Fixed pill header with dropdowns, hide-on-scroll, and the full-screen mobile menu. */
export default function Header() {
  const pathname = usePathname();
  const section = navSection(pathname);
  const [open, setOpen] = useState(false);
  const hdr = useRef<HTMLElement>(null);

  // close the menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const el = hdr.current;
      if (!el) return;
      const y = scrollY;
      el.classList.toggle("scrolled", y > 40);
      const hero = document.getElementById("hero");
      const inHero = !!hero && y < hero.offsetHeight - innerHeight + 240;
      const down = y - lastY > 8,
        up = lastY - y > 4;
      if (up || inHero || document.body.classList.contains("menu-open")) el.classList.remove("hide");
      else if (down) el.classList.add("hide");
      lastY = y;
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="hdr" id="hdr" ref={hdr}>
        <Link className="logo" href="/" aria-label="CogniHab home">
          <img id="logoImg" src="/media/cognihab-logo.png" alt="CogniHab" width={160} height={34} />
        </Link>
        <nav aria-label="Primary">
          {NAV.map((g) => (
            <div className="dd" key={g.label}>
              {g.href ? (
                <Link prefetch={false} href={g.href} data-nav={g.nav} className={g.nav === section ? "on" : undefined}>
                  {g.label}
                </Link>
              ) : (
                <span className="ddh" tabIndex={0}>
                  {g.label}
                </span>
              )}
              <div className="ddm">
                {g.items.map((i) => (
                  <SmartLink key={i.href} href={i.href}>
                    {i.label}
                  </SmartLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="cta">
          <Link className="btn p" href="/contact/">
            Contact Us <Arrow />
          </Link>
          <button className="burger" id="burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <div className={open ? "menu open" : "menu"} id="menu" aria-hidden={!open}>
        <div className="eb w">CogniHab · VR healthcare</div>
        <div className="mgrid">
          {NAV.map((g) => (
            <div className="mg" key={g.label}>
              {g.href ? <Link prefetch={false} href={g.href}>{g.label}</Link> : <span>{g.label}</span>}
              <div className="sub">
                {(g.label === "About Us" ? g.items.slice(1) : g.items).map((i) => (
                  <SmartLink key={i.href} href={i.href}>
                    {i.label}
                  </SmartLink>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Link className="mcta" href="/contact/">
          Contact Us
        </Link>
      </div>
    </>
  );
}
