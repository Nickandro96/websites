import React from "react";
import { renderToString } from "react-dom/server";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import App from "../client/src/App";
import { notFoundSeo, organization, seoPages, siteUrl } from "../client/src/lib/seo";

const output = path.resolve("dist");
const template = await readFile(path.join(output, "index.html"), "utf8");
const escape = (value: string) => value.replace(/[&<>"']/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[char]!);

for (const pathname of [...Object.keys(seoPages), "/404"]) {
  const page = seoPages[pathname] ?? notFoundSeo;
  const canonical = `${siteUrl}${pathname}`;
  const metadata = `
    <meta name="description" content="${escape(page.description)}" />
    <meta name="robots" content="${pathname === "/404" ? "noindex, follow" : "index, follow"}" />
    ${pathname === "/404" ? "" : `<link rel="canonical" href="${canonical}" />`}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="N3 Conseil" />
    <meta property="og:locale" content="fr_FR" />
    <meta property="og:title" content="${escape(page.title)}" />
    <meta property="og:description" content="${escape(page.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${escape(page.title)}" />
    <meta name="twitter:description" content="${escape(page.description)}" />
    <script type="application/ld+json">${JSON.stringify(organization).replace(/</g, "\\u003c")}</script>`;
  const html = template
    .replace(/<title>.*?<\/title>/s, `<title>${escape(page.title)}</title>`)
    .replace("</head>", `${metadata}\n</head>`)
    .replace('<div id="root"></div>', () => `<div id="root">${renderToString(<App ssrPath={pathname} />)}</div>`);
  const filename = path.join(output, pathname === "/" ? "index.html" : `${pathname.slice(1)}.html`);
  await mkdir(path.dirname(filename), { recursive: true });
  await writeFile(filename, html);
}

const urls = Object.keys(seoPages).map(route => `  <url><loc>${siteUrl}${route}</loc></url>`).join("\n");
await writeFile(path.join(output, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
await writeFile(path.join(output, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
console.log(`Prerendered ${Object.keys(seoPages).length} pages and a 404 page.`);
