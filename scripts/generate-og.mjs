import fs from 'node:fs';
import path from 'node:path';
import { Resvg } from '@resvg/resvg-js';

const root = process.cwd();
const outDir = path.join(root, 'public', 'og');
fs.mkdirSync(outDir, { recursive: true });

// Brand tokens — keep in sync with src/styles/global.css
const C = {
  bg: '#0b0c0e',
  surface: '#131418',
  line: 'rgba(255,255,255,0.08)',
  lineStrong: 'rgba(255,255,255,0.14)',
  ink: '#eceef0',
  muted: '#a4aab1',
  faint: '#6f757c',
  accent: '#34d399',
};

const SANS = 'DejaVu Sans, sans-serif';
const MONO = 'DejaVu Sans Mono, monospace';

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
  <rect width="1200" height="630" fill="${C.bg}"/>
  <rect x="0" y="0" width="1200" height="2" fill="${C.accent}"/>

  <circle cx="112" cy="112" r="30" fill="none" stroke="${C.lineStrong}" stroke-width="1.5"/>
  <circle cx="112" cy="112" r="7" fill="${C.accent}"/>

  <text x="168" y="106" font-family="${MONO}" font-size="17" letter-spacing="4" fill="${C.faint}">IKHTIAR HIDAYATULLAH</text>
  <text x="168" y="132" font-family="${MONO}" font-size="14" letter-spacing="3" fill="${C.accent}">NOC ENGINEER &#183; NETWORK &amp; AUTOMATION</text>

  <text x="96" y="340" font-family="${SANS}" font-weight="700" font-size="72" letter-spacing="-2" fill="${C.ink}">${t}</text>
  <rect x="98" y="372" width="128" height="5" rx="2.5" fill="${C.accent}"/>

  <text x="96" y="448" font-family="${SANS}" font-size="29" fill="${C.muted}">${sub}</text>

  <line x1="96" y1="520" x2="1104" y2="520" stroke="${C.line}"/>
  <text x="96" y="558" font-family="${MONO}" font-size="20" fill="${C.faint}">tiarh.github.io</text>
</svg>`;
}

function writePng(file, svg) {
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  const pngData = resvg.render().asPng();
  fs.writeFileSync(file, pngData);
}

// minimal dataset (keep in sync with site content)
const pages = [
  { slug: 'home', title: 'Ikhtiar Hidayatullah', subtitle: 'NOC Engineer: MikroTik, GPON, TR-069 and the tools around them.' },
  { slug: 'projects', title: 'Projects', subtitle: 'Network and software work from running an FTTH ISP.' },
  { slug: 'infrastructure', title: 'Infrastructure', subtitle: 'Edge, POP links, OLTs, ACS and the server platform.' },
  { slug: 'cv', title: 'CV', subtitle: 'NOC Engineer — Network & Automation, Skynet.' },
  { slug: 'blog', title: 'Notes', subtitle: 'Technical notes: PPPoE, routing, automation.' },
  { slug: 'project-skynet-ebilling', title: 'Skynet eBilling', subtitle: 'Billing, payments and auto isolate on MikroTik.' },
  { slug: 'project-whatsapp-psb-migration', title: 'Installs over WhatsApp', subtitle: 'OCR, ONU provisioning and GenieACS in one flow.' },
  { slug: 'project-outage-detection-rca', title: 'Outage Detection', subtitle: 'Likely cause from OLT, ACS and PPPoE events.' },
  { slug: 'project-monitoring-automation-skynet', title: 'Network Monitoring', subtitle: 'Prometheus, Grafana and chat reports.' },
  { slug: 'project-whatsapp-ops-bot', title: 'WhatsApp Ops Bot', subtitle: 'Scoped ops commands with guardrails.' },
  { slug: 'project-pppoe-platform-mikrotik', title: 'PPPoE Platform', subtitle: 'Profiles, fq_codel queues and forced DNS.' },
  { slug: 'project-dual-wan-failover-pcc', title: 'PCC + Failover', subtitle: 'Two upstreams, one path per customer.' },
  { slug: 'project-skynet-infra-dashboard', title: 'ODP/ODC Tracker', subtitle: 'Daily deployment progress with Excel export.' },
  { slug: 'blog-pppoe-pcq-mikrotik', title: 'PPPoE + PCQ (MikroTik)', subtitle: 'Bandwidth fairness for ISP subscribers.' },
  { slug: 'blog-dual-wan-recursive', title: 'Dual-WAN Recursive Failover', subtitle: 'Stable failover with health checks.' },
  { slug: 'blog-monitoring-automation-playwright', title: 'Monitoring Automation', subtitle: 'PNG reports generated from a dashboard.' },
];

for (const p of pages) {
  const svg = ogSvg(p);
  writePng(path.join(outDir, `${p.slug}.png`), svg);
}

console.log(`[og] generated ${pages.length} images in ${outDir}`);
