import fs from 'node:fs';
import path from 'node:path';
import { Resvg } from '@resvg/resvg-js';

const root = process.cwd();
const outDir = path.join(root, 'public', 'og');
fs.mkdirSync(outDir, { recursive: true });

function escapeXml(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function ogSvg({ title, subtitle }) {
  const t = escapeXml(title);
  const sub = escapeXml(subtitle);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="100%" stop-color="#0b1220"/>
    </linearGradient>
    <linearGradient id="acc" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#22d3ee"/>
      <stop offset="100%" stop-color="#a78bfa"/>
    </linearGradient>
    <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="60"/>
    </filter>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>

  <circle cx="300" cy="120" r="180" fill="#22d3ee" opacity="0.18" filter="url(#blur)"/>
  <circle cx="940" cy="520" r="220" fill="#a78bfa" opacity="0.16" filter="url(#blur)"/>

  <rect x="70" y="80" width="1060" height="470" rx="28" fill="#0b1220" opacity="0.55" stroke="#1f2937"/>

  <text x="120" y="200" font-family="Inter, ui-sans-serif, system-ui" font-size="56" font-weight="700" fill="#e2e8f0">${t}</text>
  <rect x="120" y="230" width="520" height="8" rx="4" fill="url(#acc)"/>
  <text x="120" y="310" font-family="Inter, ui-sans-serif, system-ui" font-size="28" font-weight="500" fill="#94a3b8">${sub}</text>

  <text x="120" y="520" font-family="Inter, ui-sans-serif, system-ui" font-size="22" fill="#64748b">tiarh.github.io</text>
</svg>`;
}

function writePng(file, svg) {
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  const pngData = resvg.render().asPng();
  fs.writeFileSync(file, pngData);
}

// minimal dataset (keep in sync with site content)
const pages = [
  { slug: 'home', title: 'Ikhtiar Hidayatullah', subtitle: 'Network Engineer • ISP NOC • MikroTik' },
  { slug: 'projects', title: 'Projects', subtitle: 'Case study & automation untuk NOC/ISP' },
  { slug: 'blog', title: 'Blog', subtitle: 'Catatan teknis: PPPoE, routing, automation' },
  { slug: 'project-monitoring-automation-skynet', title: 'Monitoring Automation', subtitle: 'Playwright reporting → WA/Telegram' },
  { slug: 'project-whatsapp-ops-bot', title: 'WhatsApp Ops Bot', subtitle: 'Scoped to 1 group • Guardrails' },
  { slug: 'blog-pppoe-pcq-mikrotik', title: 'PPPoE + PCQ (MikroTik)', subtitle: 'Bandwidth fairness untuk pelanggan ISP' },
  { slug: 'blog-dual-wan-recursive', title: 'Dual-WAN Recursive Failover', subtitle: 'Failover stabil + health-check' },
  { slug: 'blog-monitoring-automation-playwright', title: 'Monitoring Automation', subtitle: 'Generate report PNG dari dashboard' },
];

for (const p of pages) {
  const svg = ogSvg(p);
  writePng(path.join(outDir, `${p.slug}.png`), svg);
}

console.log(`[og] generated ${pages.length} images in ${outDir}`);
