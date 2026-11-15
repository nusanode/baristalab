import { readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = process.cwd();
const templatePath = path.join(projectRoot, "dist", "index.html");
const serverEntry = path.join(projectRoot, "dist-ssr", "entry-server.js");
const { render } = await import(pathToFileURL(serverEntry).href);
const template = await readFile(templatePath, "utf8");

const routes = [
  "/",
  "/kursus-barista",
  "/kelas-latte-art",
  "/lokasi",
  "/pelatihan-barista",
  "/sertifikasi-barista",
  "/kursus-barista-jakarta",
  "/kursus-barista-jakarta-timur",
  "/kursus-barista-tangerang",
  "/kursus-barista-bekasi",
  "/kursus-barista-depok",
  "/kursus-barista-bogor",
];

const escapeAttribute = (value) => String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
const replaceTag = (html, pattern, replacement) => html.replace(pattern, replacement);

for (const route of routes) {
  const page = render(route);
  if (!page.html.trim()) throw new Error(`No server-rendered markup for ${route}`);
  if (!page.html.match(/<h1[\s>]/i)) throw new Error(`Missing primary heading in prerendered route ${route}`);
  let html = template;
  html = replaceTag(html, /<title>[\s\S]*?<\/title>/i, `<title>${escapeAttribute(page.title)}</title>`);
  html = replaceTag(html, /<meta\s+name="description"[^>]*>/i, `<meta name="description" content="${escapeAttribute(page.description)}" />`);
  html = replaceTag(html, /<link\s+rel="canonical"[^>]*>/i, `<link rel="canonical" href="${escapeAttribute(page.canonical)}" />`);
  html = replaceTag(html, /<meta\s+property="og:url"[^>]*>/i, `<meta property="og:url" content="${escapeAttribute(page.canonical)}" />`);
  html = replaceTag(html, /<meta\s+property="og:title"[^>]*>/i, `<meta property="og:title" content="${escapeAttribute(page.title)}" />`);
  html = replaceTag(html, /<meta\s+property="og:description"[^>]*>/i, `<meta property="og:description" content="${escapeAttribute(page.description)}" />`);
  html = replaceTag(html, /<meta\s+name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${escapeAttribute(page.title)}" />`);
  html = replaceTag(html, /<meta\s+name="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${escapeAttribute(page.description)}" />`);
  const schema = `<script id="prerendered-route-schema" type="application/ld+json">${JSON.stringify(page.structuredData).replaceAll("<", "\\u003c")}</script>`;
  
  if (route === "/") {
    const heroImage = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085";
    const heroWidths = [480, 768, 1200];
    const heroSrcSet = heroWidths
      .map((width) => `${heroImage}?auto=format&fit=crop&w=${width}&q=50 ${width}w`)
      .join(", ");
    const heroPreload = `<link rel="preload" as="image" href="${escapeAttribute(`${heroImage}?auto=format&fit=crop&w=1200&q=50`)}" imagesrcset="${escapeAttribute(heroSrcSet)}" imagesizes="100vw" fetchpriority="high" />`;
    html = html.replace("</head>", `${heroPreload}\n  </head>`);
  }

  html = html.replace("</head>", `${schema}\n  </head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${page.html}</div>`);

  const outputDir = route === "/" ? path.join(projectRoot, "dist") : path.join(projectRoot, "dist", route.slice(1));
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "index.html"), html, "utf8");
  const checks = [escapeAttribute(page.title), escapeAttribute(page.description), page.canonical, 'id="root"', 'application/ld+json'];
  if (checks.some((value) => !html.includes(value))) throw new Error(`Prerender validation failed for ${route}`);
  console.log(`Prerendered and checked ${route}`);
}
