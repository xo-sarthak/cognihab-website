"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { SITE } from "@/content/site";

/*
 * The site's motion and small DOM behaviours, ported from the original hand-written script.
 * Everything runs per route and is torn down on navigation: listeners use an AbortSignal,
 * animation loops and observers are stopped in the cleanup.
 */

const $ = (s: string, c: ParentNode = document): any => c.querySelector(s);
const $$ = (s: string, c: ParentNode = document): any[] => [...c.querySelectorAll(s)];

/* hero keyframes, tracked from hero_scrub.mp4: [t, leftHandX, leftHandY, rightHandX, rightHandY, shoulderAngle]
   Replacing the video means re-tracking these. */
const K: number[][] = [[0.0,1037,1078,1512,1078,8.9],[0.125,1024,1078,1521,1078,10.1],[0.25,1003,1078,1538,1078,12.1],[0.375,975,1078,1560,1078,14.7],[0.5,942,1078,1587,1078,17.7],[0.625,905,1078,1618,1078,20.9],[0.75,865,1078,1654,1078,24.2],[0.875,827,1078,1689,1078,27.3],[1.0,791,1078,1722,1078,30.0],[1.125,760,1078,1754,1078,32.3],[1.25,731,1074,1782,1078,34.4],[1.375,707,1064,1805,1074,36.5],[1.5,685,1049,1827,1065,38.7],[1.625,662,1029,1850,1048,41.1],[1.75,640,1005,1872,1028,43.7],[1.875,621,986,1891,1004,45.9],[2.0,605,969,1905,981,47.8],[2.125,592,955,1914,959,49.4],[2.25,580,942,1918,933,50.8],[2.375,570,928,1918,903,52.2],[2.5,560,913,1918,873,53.7],[2.625,551,899,1918,846,55.0],[2.75,544,889,1918,826,56.0],[2.875,544,885,1918,826,56.3],[3.0,547,888,1918,837,56.3],[3.125,552,895,1918,852,56.3],[3.25,556,900,1918,863,56.3],[3.375,557,898,1918,862,56.3],[3.5,553,889,1918,845,56.3],[3.625,546,868,1918,815,57.3],[3.75,536,838,1918,777,59.9],[3.875,525,802,1918,735,63.0],[4.0,515,764,1918,695,66.4],[4.125,506,723,1918,656,69.8],[4.25,499,681,1918,617,73.5],[4.375,494,640,1918,568,77.1],[4.5,492,602,1918,522,80.4],[4.625,493,566,1918,480,83.7],[4.75,496,531,1918,442,86.7],[4.875,502,500,1918,410,89.5],[5.0,509,470,1916,391,92.3],[5.125,517,440,1910,368,95.1],[5.25,527,407,1897,338,98.4],[5.375,541,373,1880,307,101.7],[5.5,555,340,1857,272,105.2],[5.625,572,306,1832,237,108.8],[5.75,593,273,1804,204,112.5],[5.875,616,242,1778,175,116.2],[6.0,640,212,1749,146,120.1],[6.125,667,183,1718,119,124.1],[6.25,700,152,1683,91,128.7],[6.375,734,124,1648,67,133.3],[6.5,768,98,1613,46,137.8],[6.625,796,79,1584,31,141.5],[6.75,818,64,1563,20,144.3]];
const SH_L = [1128, 495],
  SH_R = [1452, 495];

/** Old single-page links (/#rehabilitation, /#vision/patent) now have their own URLs. */
const LEGACY: Record<string, string> = { "use-cases": "rehabilitation", "use-cases/body": "rehabilitation", "use-cases/vision": "vision", "use-cases/mind": "well-being" };
const TOP_PAGES = ["rehabilitation", "vision", "well-being", "about-us", "patent", "research", "advisors", "contact"];

export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const ac = new AbortController();
    const signal = ac.signal;
    const on = (t: EventTarget, ev: string, fn: any, opts: AddEventListenerOptions = {}) => t.addEventListener(ev, fn, { ...opts, signal });
    const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mob = () => innerWidth <= 760;
    const isHome = pathname === "/";
    let raf = 0;
    const timers: number[] = [];

    if (isHome && location.hash) {
      const h = location.hash.replace(/^#\/?/, "");
      const [top, ...rest] = (LEGACY[h] || h).split("/");
      if (TOP_PAGES.includes(top)) {
        location.replace(top === "vision" && rest[0] === "patent" ? "/patent/" : `/${top}/${rest.length ? "#" + rest.join("/") : ""}`);
        return;
      }
    }

    /* ---- reveal observer ---- */
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    $$(".view.on .rt, .view.on .rv, .view.on .ph").forEach((el) => !el.classList.contains("in") && io.observe(el));

    /* ---- counters ---- */
    let counted = false;
    function counters() {
      const box = $("#nums");
      if (!box || counted) return;
      if (box.getBoundingClientRect().top < innerHeight * 0.85) {
        counted = true;
        $$("b[data-n]", box).forEach((b) => {
          const n = +b.dataset.n,
            t0 = performance.now(),
            d = rm ? 1 : 1600;
          (function tick(t: number) {
            const p = Math.min(1, (t - t0) / d),
              e = 1 - Math.pow(1 - p, 4);
            b.firstChild.nodeValue = Math.round(n * e).toLocaleString("en-US");
            if (p < 1 && !signal.aborted) requestAnimationFrame(tick);
          })(t0);
        });
      }
    }

    /* ---- hero scrub + range-of-motion overlay ---- */
    const hero = $("#hero"),
      v = $("#heroScrub");
    let heroTick = () => {};
    if (hero && v) {
      const reads = $$("#reads div"),
        grid = $("#heroGrid"),
        romRead = $("#romRead");
      const prog = $("#prog"),
        progArc = $("#progArc"),
        progPct = $("#progPct"),
        progLab = $("#progLab"),
        stage = $("#stage");
      const hL = $("#hL"), hR = $("#hR"), lnL = $("#lnL"), lnR = $("#lnR"), arcL = $("#arcL"), labA = $("#labA"), lab = $("#lab");
      let done = false, lastPoseT = -1, dur = 0, cur = 0;
      const pose = (t: number) => {
        const f = Math.max(0, Math.min(K.length - 1.001, t * 8)), i = Math.floor(f), u = f - i, a = K[i], b = K[Math.min(K.length - 1, i + 1)];
        const m: number[] = [];
        for (let j = 1; j < 6; j++) m.push(a[j] + (b[j] - a[j]) * u);
        return m;
      };
      const drawPose = (t: number) => {
        if (Math.abs(t - lastPoseT) < 0.004) return;
        lastPoseT = t;
        const [lx, ly, rx, ry, ang] = pose(t);
        hL.setAttribute("cx", lx); hL.setAttribute("cy", ly); hR.setAttribute("cx", rx); hR.setAttribute("cy", ry);
        lnL.setAttribute("x1", SH_L[0]); lnL.setAttribute("y1", SH_L[1]); lnL.setAttribute("x2", lx); lnL.setAttribute("y2", ly);
        lnR.setAttribute("x1", SH_R[0]); lnR.setAttribute("y1", SH_R[1]); lnR.setAttribute("x2", rx); lnR.setAttribute("y2", ry);
        const r = 120, rad = (ang * Math.PI) / 180, ex = SH_L[0] - r * Math.sin(rad), ey = SH_L[1] + r * Math.cos(rad);
        arcL.setAttribute("d", `M${SH_L[0]} ${SH_L[1]} L${SH_L[0]} ${SH_L[1] + r} A${r} ${r} 0 ${ang > 180 ? 1 : 0} 1 ${ex.toFixed(1)} ${ey.toFixed(1)} Z`);
        const mid = ((ang / 2) * Math.PI) / 180, lr = r + 150, px = SH_L[0] - lr * Math.sin(mid), py = SH_L[1] + lr * Math.cos(mid);
        lab.setAttribute("transform", `translate(${px.toFixed(1)} ${py.toFixed(1)})`);
        const txt = Math.round(ang) + "°";
        labA.textContent = txt;
        romRead.textContent = txt;
      };
      const meta = () => {
        if (dur) return;
        dur = v.duration || 0;
        if (dur) v.currentTime = 0.01;
      };
      if (v.readyState >= 1) meta();
      else {
        on(v, "loadedmetadata", meta);
        on(v, "durationchange", meta);
      }
      if (rm) {
        v.loop = true;
        v.autoplay = true;
        v.play().catch(() => {});
      }
      const heroProg = () => {
        const z = hero.offsetHeight - innerHeight;
        return z <= 0 ? 0 : Math.min(1, Math.max(0, (scrollY - hero.offsetTop) / z));
      };
      heroTick = () => {
        const p = heroProg();
        if (!rm && dur) {
          const t = (mob() ? 0.5 + 0.5 * p : p) * (dur - 0.06);
          cur += (t - cur) * 0.16;
          if (!v.seeking && Math.abs(v.currentTime - cur) > 0.03) v.currentTime = cur;
        }
        drawPose(v.currentTime);
        const pp = mob() ? 0.5 + 0.5 * p : p;
        progArc.style.strokeDashoffset = (175.9 * (1 - pp)).toFixed(1);
        progPct.textContent = Math.round(pp * 100) + "%";
        prog.classList.toggle("idle", p < 0.02);
        if (p >= 0.985 && !done) {
          done = true; prog.classList.add("done"); stage.classList.add("done"); progLab.textContent = "Range of motion recorded";
        } else if (p < 0.9 && done) {
          done = false; prog.classList.remove("done"); stage.classList.remove("done"); progLab.textContent = "Scroll to raise the arms";
        } else if (!done && p >= 0.02) progLab.textContent = "Raising · keep scrolling";
        grid.classList.toggle("on", p > 0.02);
        lab.style.opacity = p > 0.02 ? 1 : 0;
        reads.forEach((r) => r.classList.toggle("on", p >= +r.dataset.at));
      };
    }

    /* ---- horizontal ride ---- */
    const hs = $("#how"), tr = $("#track"), panels = tr ? $$(".panel", tr) : [];
    let rcur = 0, rtgt = 0;
    const rideCalc = () => {
      if (!hs) return;
      if (mob() || rm) return panels.forEach((p) => p.classList.add("on"));
      const max = hs.offsetHeight - innerHeight;
      const p = Math.min(1, Math.max(0, (scrollY - hs.offsetTop) / max));
      rtgt = p * (tr.scrollWidth - innerWidth);
      const pos = rtgt / innerWidth;
      panels.forEach((pn, i) => i - pos < 0.7 && pn.classList.add("on"));
    };
    const rideTick = () => {
      if (!tr) return;
      if (mob() || rm) {
        tr.style.transform = "";
        return;
      }
      rcur += (rtgt - rcur) * 0.11;
      tr.style.transform = `translate3d(${-rcur}px,0,0)`;
    };

    /* ---- chapter titles fade once the plate scene arrives ---- */
    const chs = $$(".ch");
    const chapters = () => chs.forEach((c) => c.classList.toggle("past", c.getBoundingClientRect().top < -innerHeight * 0.6));

    /* ---- option cards: cursor spotlight ---- */
    $$(".opt").forEach((o) =>
      on(o, "mousemove", (e: MouseEvent) => {
        const r = o.getBoundingClientRect();
        o.style.setProperty("--mx", e.clientX - r.left + "px");
        o.style.setProperty("--my", e.clientY - r.top + "px");
      }),
    );

    /* ---- flip plates on the home programme chapters ---- */
    $$("[data-flip]").forEach((b) => on(b, "click", () => document.getElementById(b.dataset.flip)?.classList.toggle("flip")));

    /* ---- session tabs ---- */
    $$(".sess .tabs button").forEach((b) =>
      on(b, "click", () => {
        $$(".sess .tabs button").forEach((x) => x.setAttribute("aria-selected", String(x === b)));
        $$(".sess .pane").forEach((p) => p.classList.toggle("on", p.dataset.pane === b.dataset.tab));
        $$(".sess .pane.on .rt").forEach((el) => el.classList.add("in"));
      }),
    );

    /* ---- programme hero drift ---- */
    const pgDrift = () => {
      const im = $(".view.on .pgimg");
      if (!im) return;
      const y = Math.min(scrollY, innerHeight);
      im.style.transform = `scale(1.06) translateY(${(y * 0.18).toFixed(1)}px)`;
    };

    /* ---- main loop ---- */
    const onScroll = () => {
      if (isHome) {
        rideCalc();
        counters();
        chapters();
      } else pgDrift();
    };
    on(window, "scroll", onScroll, { passive: true });
    on(window, "resize", rideCalc, { passive: true });
    if (hero || tr) {
      const loop = () => {
        heroTick();
        rideTick();
        raf = requestAnimationFrame(loop);
      };
      loop();
    }
    onScroll();

    /* ---- research: capture, then hand over the paper ---- */
    const pf = $("#paperForm");
    if (pf) {
      const wrap = $("#rformWrap"), doneBox = $("#rdone"), box = $("#rmsg");
      const say = (t: string, c: string) => {
        box.textContent = t;
        box.className = "fmsg " + c;
      };
      on(pf, "submit", async (e: Event) => {
        e.preventDefault();
        const bad = $$("[required]", pf).find((i) => !i.value.trim() || (i.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.value)));
        if (bad) {
          bad.focus();
          say(bad.type === "email" ? "Enter a valid email address so we can send the paper." : "Fill in the required fields.", "err");
          return;
        }
        const d = Object.fromEntries(new FormData(pf).entries()) as Record<string, string>;
        $("button[type=submit]", pf).disabled = true;
        if (SITE.netlifyForms) {
          try { await fetch(location.pathname, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ ...d, "form-name": "research" }).toString() }); } catch {}
        }
        if (SITE.relayEndpoint) {
          try { await fetch(SITE.relayEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ ...d, _subject: "Paper download — " + (d.organisation || d.name), _template: "table", _captcha: "false" }) }); } catch {}
        }
        /* the paper is open access, so never hold it back on a failed POST */
        wrap.hidden = true;
        doneBox.hidden = false;
        timers.push(window.setTimeout(() => $("#rdl")?.click(), 350));
        doneBox.scrollIntoView({ block: "nearest", behavior: "smooth" });
      });
    }

    /* ---- film player ---- */
    const wv = $("#walkVideo"), pl = $("#player"), pb = $("#playBtn");
    if (wv && pb) {
      on(pb, "click", () => {
        pl.classList.add("playing");
        wv.play().catch(() => {});
      });
      on(wv, "play", () => {
        pl.classList.add("playing");
        wv.controls = true;
      });
      on(wv, "ended", () => {
        pl.classList.remove("playing");
        wv.controls = false;
      });
    }

    /* ---- magnetic buttons ---- */
    if (matchMedia("(pointer:fine)").matches && !rm) {
      $$(".btn").forEach((b) => {
        on(b, "mousemove", (e: MouseEvent) => {
          const r = b.getBoundingClientRect();
          b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px,${(e.clientY - r.top - r.height / 2) * 0.28}px)`;
        });
        on(b, "mouseleave", () => (b.style.transform = ""));
      });
    }

    /* ---- contact ---- */
    const wa = $("#waLink"), tel = $("#telLink"), mail = $("#mailLink");
    if (wa && SITE.whatsapp) {
      wa.hidden = false;
      wa.href = "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent("Hello CogniHab, I would like to get in touch.");
    }
    if (tel && SITE.phone) {
      tel.hidden = false;
      tel.href = "tel:" + SITE.phone.replace(/[^\d+]/g, "");
      $("#telText").textContent = SITE.phone;
    }
    if (mail && SITE.contactEmail) {
      mail.hidden = false;
      mail.href = "mailto:" + SITE.contactEmail;
      $("#mailText").textContent = SITE.contactEmail;
    }
    const area = $("#fArea");
    if (area) {
      /* /contact/?programme=vision pre-selects the enquiry */
      const q = new URLSearchParams(location.search), pr = q.get("programme") || "";
      const m: Record<string, string> = { rehabilitation: "Rehabilitation", vision: "Vision care", "well-being": "Well-being" };
      if (m[pr]) area.value = m[pr];
      else if (q.get("topic") === "collaborate") area.value = "Something else";
      if (!mob()) timers.push(window.setTimeout(() => $("#fName")?.focus({ preventScroll: true }), 500));
    }
    const form = $("#demoForm"), fmsg = $("#fmsg");
    if (form) {
      const msg = (t: string, cls: string) => {
        fmsg.textContent = t;
        fmsg.className = "fmsg " + cls;
      };
      on(form, "submit", async (e: Event) => {
        e.preventDefault();
        const bad = $$("[required]", form).find((i) => !i.value.trim() || (i.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.value)));
        if (bad) {
          bad.focus();
          msg(bad.type === "email" ? "Enter a valid email address so we can reply." : "Fill in the required fields so we can route your enquiry to the right team.", "err");
          return;
        }
        const d = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
        const body = `Website enquiry\n\nName: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email}\nEnquiry: ${d.area}\n\n${d.message || ""}`;
        const btn = $("button[type=submit]", form);
        btn.disabled = true;
        try {
          let sent = false;
          if (SITE.formEndpoint) {
            const r = await fetch(SITE.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ ...d, subject: "Website enquiry — " + d.organisation }) });
            if (!r.ok) throw new Error("send");
            sent = true;
          } else if (SITE.netlifyForms) {
            try {
              const r = await fetch(location.pathname, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ ...d, "form-name": "demo" }).toString() });
              sent = r.ok;
            } catch { sent = false; }
          }
          if (!sent && SITE.relayEndpoint) {
            try {
              const r = await fetch(SITE.relayEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ ...d, _subject: "Website enquiry — " + d.organisation, _template: "table", _captcha: "false" }) });
              sent = r.ok;
            } catch { sent = false; }
          }
          if (sent) {
            form.reset();
            msg("Message sent. We reply within two working days.", "ok");
          } else if (SITE.email) {
            location.href = "mailto:" + SITE.email + "?subject=" + encodeURIComponent("Website enquiry — " + d.organisation) + "&body=" + encodeURIComponent(body);
            msg("Your email app has opened with the message filled in. Send it and we reply within two working days.", "ok");
          } else throw new Error("noroute");
        } catch {
          msg(SITE.whatsapp || SITE.phone ? "The message could not be sent. Use WhatsApp or call us instead." : "The message could not be sent right now. Please try again shortly.", "err");
        } finally {
          btn.disabled = false;
        }
      });
    }

    return () => {
      ac.abort();
      io.disconnect();
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      if (wv && !wv.paused) wv.pause();
    };
  }, [pathname]);

  /* ---- cursor (persists across routes) ---- */
  useEffect(() => {
    const c = $(".cur");
    if (!c || !matchMedia("(pointer:fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ac = new AbortController(), o = { signal: ac.signal };
    let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my, shown = false, raf = 0;
    addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      if (!shown) { shown = true; c.style.opacity = 1; }
    }, o);
    addEventListener("mouseleave", () => { c.style.opacity = 0; shown = false; }, o);
    addEventListener("mousedown", () => c.classList.add("dn"), o);
    addEventListener("mouseup", () => c.classList.remove("dn"), o);
    document.addEventListener("mouseover", (e) => c.classList.toggle("hov", !!(e.target as Element).closest?.("a,button,input,select,textarea,.row2")), o);
    const cl = () => {
      cx += (mx - cx) * 0.18; cy += (my - cy) * 0.18;
      c.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(cl);
    };
    cl();
    return () => { ac.abort(); cancelAnimationFrame(raf); };
  }, []);

  return null;
}
