// Next 16's static export writes per-segment prefetch data as folders (__next.vision/__PAGE__.txt),
// while the client requests flat names (__next.vision.__PAGE__.txt). Without a host rewrite those
// requests 404 and Next falls back to the full page payload. Writing the flat copies avoids that.
import { copyFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const OUT = "out";
let n = 0;
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (!statSync(p).isDirectory()) continue;
    if (name.startsWith("__next.")) flatten(p, dir);
    else walk(p);
  }
}
function flatten(segDir, parent) {
  for (const name of readdirSync(segDir)) {
    const p = join(segDir, name);
    if (statSync(p).isDirectory()) flatten(p, parent);
    else {
      copyFileSync(p, join(parent, relative(parent, p).split(sep).join(".")));
      n++;
    }
  }
}
walk(OUT);
console.log(`flatten-segments: wrote ${n} prefetch files`);
