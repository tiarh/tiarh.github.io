export type Project = {
  slug: string;
  title: string;
  status: 'Case study' | 'Automation' | 'Production';
  tags: string[];
  description: string;
  highlights: string[];
  links?: {
    repo?: string;
    demo?: string;
  };
  caseStudy: {
    problem: string;
    solution: string;
    outcome: string;
    stack: string[];
  };
};

export const PROJECTS: Project[] = [
  {
    slug: 'pppoe-platform-mikrotik',
    title: 'ISP PPPoE Platform (MikroTik)',
    status: 'Case study',
    tags: ['MikroTik', 'PPPoE', 'PCQ', 'QoS'],
    description:
      'Desain PPPoE server + profile bandwidth (PCQ), queue/limits, dan SOP deployment. Fokus stabil, aman, dan mudah dioperasikan.',
    highlights: [
      'PPPoE profiles & rate limits (PCQ)',
      'Queue parent strategy + basic anti-abuse',
      'Sanitized config snippets + test checklist',
    ],
    caseStudy: {
      problem:
        'Operasional PPPoE di ISP kecil-menengah sering “rawan chaos”: profile tidak konsisten, queue numpuk, troubleshooting lama, dan perubahan konfigurasi sulit di-audit.',
      solution:
        'Membuat baseline konfigurasi PPPoE yang repeatable: template, profile PCQ, parent-queue strategy, serta checklist test sebelum rilis.',
      outcome:
        'Deployment lebih cepat, konfigurasi lebih rapi, dan tim punya SOP yang sama untuk provisioning & troubleshooting.',
      stack: ['MikroTik RouterOS', 'PPPoE', 'PCQ', 'Queues', 'SOP/Runbook'],
    },
  },
  {
    slug: 'dual-wan-failover-pcc',
    title: 'Dual-WAN Failover & Load Balancing (PCC + Recursive)',
    status: 'Case study',
    tags: ['Routing', 'Failover', 'PCC', 'MikroTik'],
    description:
      'Implementasi multi-WAN dengan health-check, recursive routing untuk failover, dan PCC untuk distribusi trafik.',
    highlights: [
      'Recursive route failover + health check',
      'PCC policy routing',
      'Before/after + test scenarios',
    ],
    caseStudy: {
      problem:
        'Koneksi ISP sering flapping. Tanpa failover yang benar, pelanggan mengalami putus-nyambung dan tiket gangguan membludak.',
      solution:
        'Menerapkan recursive routing untuk failover + PCC untuk load distribution, lengkap dengan skenario uji.',
      outcome:
        'Switching lebih halus dan insiden downtime total berkurang karena jalur cadangan aktif otomatis.',
      stack: ['MikroTik RouterOS', 'PCC', 'Recursive Routing', 'Netwatch/Healthcheck'],
    },
  },
  {
    slug: 'monitoring-automation-skynet',
    title: 'Monitoring Automation (Skynet Ping Monitoring)',
    status: 'Production',
    tags: ['Playwright', 'Reporting', 'NOC', 'Automation'],
    description:
      'Auto-generate report per area (DOWN/UP non‑isolir) + last active, output gambar siap kirim ke WA/Telegram.',
    highlights: ['Exclude ISOLIR rows', 'Sampling to catch flapping downs', 'HTML → Image report', 'Cron refresh'],
    links: { repo: 'https://github.com/tiarh' },
    caseStudy: {
      problem:
        'NOC butuh snapshot cepat (DOWN/UP non-isolir) per area. Manual screenshot dashboard memakan waktu dan rawan miss saat flapping.',
      solution:
        'Pipeline Playwright: login dashboard → scrape table → render HTML report → screenshot PNG → kirim otomatis ke WA/Telegram.',
      outcome:
        'Waktu bikin laporan turun drastis, dan report bisa di-trigger lewat chat (monitoring AREA).',
      stack: ['Python', 'Playwright', 'HTML template', 'Cron/systemd', 'WhatsApp/Telegram'],
    },
  },
  {
    slug: 'whatsapp-ops-bot',
    title: 'WhatsApp Ops Bot (Scoped to 1 group)',
    status: 'Production',
    tags: ['WhatsApp', 'OpenClaw', 'Node.js', 'Guardrails'],
    description:
      'Bot WA khusus 1 grup untuk monitoring per area + chat ops. Ada allowlist, anti-loop, dan command monitoring AREA.',
    highlights: ['Hard allowlist group', 'Monitoring via areas.json', 'Anti-spam + timeouts', 'Scoped ops commands'],
    links: { repo: 'https://github.com/tiarh' },
    caseStudy: {
      problem:
        'Channel operasional ramai. Butuh bot yang aman: tidak spam, hanya respon di grup tertentu, dan bisa jalan 24/7.',
      solution:
        'Bot dengan hard allowlist group + cooldown, serta command parser untuk monitoring area dan respon template.',
      outcome:
        'Alur kerja NOC lebih rapi: request monitoring tinggal ketik, tidak perlu login dashboard manual.',
      stack: ['Node.js', 'whatsapp-web.js', 'OpenClaw', 'Playwright reports'],
    },
  },
];
