// Prints /cv (EN) and /cv/id (ID) from the built site into the PDFs under public/files.
// Usage: npm run build && npm run cv   (then rebuild so dist/ has the new PDFs)
// Uses the locally installed Chrome through playwright-core; no browser download.
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { chromium } from 'playwright-core';

const root = process.cwd();
const dist = path.join(root, 'dist');
const outDir = path.join(root, 'public', 'files');

const targets = [
  { route: '/cv/', file: 'Ikhtiar_Hidayatullah_CV.pdf' },
  { route: '/cv/id/', file: 'Ikhtiar_Hidayatullah_CV_ID.pdf' },
];

const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png' };

if (!fs.existsSync(dist)) {
  console.error('[cv] dist/ not found — run `npm run build` first');
  process.exit(1);
}

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  let file = path.join(dist, p);
  if (!file.startsWith(dist)) return res.writeHead(403).end();
  if (!fs.existsSync(file) && fs.existsSync(`${file}.html`)) file = `${file}.html`;
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    const idx = path.join(file, 'index.html');
    if (!fs.existsSync(idx)) return res.writeHead(404).end();
    file = idx;
  }
  res.writeHead(200, { 'content-type': types[path.extname(file)] ?? 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
});

await new Promise((r) => server.listen(0, 'localhost', r));
const base = `http://localhost:${server.address().port}`;

const browser = await chromium.launch({ channel: 'chrome' });
try {
  for (const t of targets) {
    const page = await browser.newPage();
    await page.goto(base + t.route, { waitUntil: 'networkidle' });
    await page.emulateMedia({ media: 'print' });
    await page.pdf({ path: path.join(outDir, t.file), format: 'A4', printBackground: true, preferCSSPageSize: true });
    console.log(`[cv] ${t.route} → public/files/${t.file}`);
    await page.close();
  }
} finally {
  await browser.close();
  server.close();
}
