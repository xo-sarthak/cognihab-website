// Layout check for the built site: loads every page in the sitemap at five widths and reports any two
// pieces of visible text that overlap (a label running into a link, a heading under the header, ...).
// Run after `npm run build`:  npm run check:layout
// Uses your installed Chrome; set CHROME_PATH if it lives somewhere else.
import { createServer } from "node:http";
import { existsSync, readFileSync, statSync } from "node:fs";
import { extname, join } from "node:path";
import puppeteer from "puppeteer-core";

const OUT = "out";
const CHROME = process.env.CHROME_PATH || ["C:/Program Files/Google/Chrome/Application/chrome.exe", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", "/usr/bin/google-chrome"].find(existsSync);
const WIDTHS = [1440, 1280, 1024, 820, 390];
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".txt": "text/plain", ".xml": "application/xml", ".jpg": "image/jpeg", ".png": "image/png", ".mp4": "video/mp4", ".woff2": "font/woff2", ".pdf": "application/pdf" };

if (!existsSync(join(OUT, "index.html"))) throw new Error("Build first: npm run build");
if (!CHROME) throw new Error("Chrome not found; set CHROME_PATH");

const server = createServer((req, res) => {
  let p = join(OUT, decodeURIComponent(req.url.split("?")[0]));
  if (existsSync(p) && statSync(p).isDirectory()) p = join(p, "index.html");
  if (!existsSync(p)) return res.writeHead(404).end();
  res.writeHead(200, { "Content-Type": TYPES[extname(p)] || "application/octet-stream" }).end(readFileSync(p));
}).listen(0);
const base = `http://127.0.0.1:${server.address().port}`;
const urls = [...readFileSync(join(OUT, "sitemap.xml"), "utf8").matchAll(/<loc>https?:\/\/[^/]+([^<]*)<\/loc>/g)].map((m) => m[1]);

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage();
let problems = 0;
for (const width of WIDTHS) {
  await page.setViewport({ width, height: 900 });
  for (const u of urls) {
    await page.goto(base + u, { waitUntil: "networkidle0" });
    const hits = await page.evaluate(() => {
      const st = document.createElement("style");
      st.textContent = "*{transition:none!important;animation:none!important}";
      document.head.appendChild(st);
      document.querySelectorAll(".rt,.rv,.ph").forEach((e) => e.classList.add("in"));
      // things that overlap by design: fixed chrome, flip-card backs, hero overlay, collapsed FAQ answers
      const skip = (el) => el.closest(".q:not(.open) .a,.hdr,.menu,.ann,.asst,.asst-btn,.cur,.back,.fcb,.ov,.reads,.prog,.skip,[hidden],[aria-hidden=true]");
      const boxes = [];
      const tw = document.createTreeWalker(document.getElementById("main"), NodeFilter.SHOW_TEXT);
      for (let n; (n = tw.nextNode()); ) {
        if (!n.textContent.trim()) continue;
        const el = n.parentElement;
        if (skip(el)) continue;
        const cs = getComputedStyle(el);
        if (cs.visibility === "hidden" || +cs.opacity === 0) continue;
        const r = document.createRange();
        r.selectNodeContents(n);
        // measure the glyph band, not the full line box, so tight display headings don't count
        for (const q of r.getClientRects()) if (q.width > 2 && q.height > 2) boxes.push({ el, t: n.textContent.trim().slice(0, 40), x: q.left, y: q.top + scrollY + q.height * 0.22, w: q.width, h: q.height * 0.56 });
      }
      const out = new Set();
      for (let i = 0; i < boxes.length; i++)
        for (let j = i + 1; j < boxes.length; j++) {
          const a = boxes[i], c = boxes[j];
          if (a.el === c.el || a.el.contains(c.el) || c.el.contains(a.el)) continue;
          const ox = Math.min(a.x + a.w, c.x + c.w) - Math.max(a.x, c.x), oy = Math.min(a.y + a.h, c.y + c.h) - Math.max(a.y, c.y);
          if (ox > 4 && oy > 4) out.add(`"${a.t}" overlaps "${c.t}"`);
        }
      const horiz = document.documentElement.scrollWidth > innerWidth + 1 ? [`page is ${document.documentElement.scrollWidth}px wide (horizontal scroll)`] : [];
      return [...horiz, ...out];
    });
    if (hits.length) {
      problems += hits.length;
      console.log(`${width}px ${u}\n  ${hits.join("\n  ")}`);
    }
  }
}
await browser.close();
server.close();
console.log(problems ? `\n${problems} layout problem(s)` : `No overlapping text or horizontal scroll on ${urls.length} pages at ${WIDTHS.join(", ")}px`);
process.exit(problems ? 1 : 0);
