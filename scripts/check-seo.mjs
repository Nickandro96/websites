import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";

const sitemap = await readFile("dist/sitemap.xml", "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (match) => new URL(match[1]),
);
assert.equal(urls.length, 16, "All public pages must appear in the sitemap");
const titles = new Set();
for (const url of urls) {
  assert.equal(url.origin, "https://www.n3-conseil.com");
  assert.equal(url.hash, "");
  const file =
    url.pathname === "/" ? "dist/index.html" : `dist${url.pathname}.html`;
  const html = await readFile(file, "utf8");
  assert.match(html, /<html lang="fr">/);
  assert.equal(
    [...html.matchAll(/<h1\b/g)].length,
    1,
    `${url.pathname}: one H1`,
  );
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert.ok(title && !titles.has(title), `${url.pathname}: unique title`);
  titles.add(title);
  assert.match(html, /<meta name="description" content="[^"]+"/);
  assert.ok(html.includes(`<link rel="canonical" href="${url.href}"`));
  assert.match(html, /<meta name="robots" content="index, follow"/);
  assert.doesNotMatch(html, /href="#\//);
  const data = html.match(
    /<script type="application\/ld\+json">(.*?)<\/script>/s,
  )?.[1];
  assert.equal(JSON.parse(data)["@type"], "Organization");
  for (const match of html.matchAll(/<a\b[^>]*\bhref="(\/(?!\/)[^"]*)"/g)) {
    const route = new URL(match[1], url).pathname;
    await access(route === "/" ? "dist/index.html" : `dist${route}.html`);
  }
}
const missing = await readFile("dist/404.html", "utf8");
assert.match(missing, /noindex, follow/);
assert.doesNotMatch(missing, /rel="canonical"/);
assert.match(
  await readFile("dist/robots.txt", "utf8"),
  /Sitemap: https:\/\/www.n3-conseil.com\/sitemap.xml/,
);
console.log(
  "SEO checks passed: 16 public pages, internal links, metadata, structured data, sitemap, robots and 404.",
);
