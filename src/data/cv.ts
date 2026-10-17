import type { Lang } from './experience';

// CV-only copy. Experience, projects and certificates come from their own data files.

export const CV_SUMMARY: Record<Lang, string> = {
  en: 'NOC engineer at an FTTH ISP in East Java, working on both the network and the software that runs it. Day to day I operate MikroTik routers, GPON OLTs from three vendors and 1,000+ TR-069-managed ONUs, and handle routing, PPPoE, load balancing and incident triage. I also own the company\'s billing and operations platform: I design the features, direct and review AI coding agents, and ship through CI with blocking tests and guarded deploys. I care about changes that can be measured, explained and rolled back.',
  id: 'NOC engineer di ISP FTTH di Jawa Timur, mengurus jaringan sekaligus software yang menjalankannya. Sehari-hari saya mengelola router MikroTik, OLT GPON dari tiga vendor, dan 1.000+ ONU lewat TR-069, serta menangani routing, PPPoE, load balancing, dan triage gangguan. Saya juga memegang platform billing dan operasional perusahaan: merancang fitur, mengarahkan dan mereview AI coding agent, dan merilis lewat CI dengan tes wajib dan deploy berpengaman. Saya mengutamakan perubahan yang bisa diukur, dijelaskan, dan di-rollback.',
};

export type SkillGroup = { title: Record<Lang, string>; items: Record<Lang, string> };

export const SKILLS: SkillGroup[] = [
  {
    title: { en: 'MikroTik / RouterOS', id: 'MikroTik / RouterOS' },
    items: {
      en: 'PPPoE server and profiles, simple queues, fq_codel, PCC load balancing, recursive failover, OSPF, VLAN, OpenVPN/L2TP tunnels, firewall/NAT, netwatch, syslog, RouterOS API',
      id: 'Server dan profil PPPoE, simple queue, fq_codel, load balancing PCC, failover rekursif, OSPF, VLAN, tunnel OpenVPN/L2TP, firewall/NAT, netwatch, syslog, RouterOS API',
    },
  },
  {
    title: { en: 'GPON / OLT', id: 'GPON / OLT' },
    items: {
      en: 'ZTE C300, Huawei MA5608T, HiOSO; ONU provisioning over CLI, optical levels, LOS / dying gasp, service ports, migrations between OLTs',
      id: 'ZTE C300, Huawei MA5608T, HiOSO; provisioning ONU lewat CLI, redaman optik, LOS / dying gasp, service port, migrasi antar-OLT',
    },
  },
  {
    title: { en: 'TR-069 / ACS', id: 'TR-069 / ACS' },
    items: {
      en: 'GenieACS (NBI, provisions, virtual parameters, presets), DHCP option 43, connection requests over tunnels, FiberHome CPEs',
      id: 'GenieACS (NBI, provision, virtual parameter, preset), DHCP option 43, connection request lewat tunnel, CPE FiberHome',
    },
  },
  {
    title: { en: 'Linux / servers', id: 'Linux / server' },
    items: {
      en: 'Ubuntu, Proxmox, Docker, Docker Compose, Coolify, Traefik, systemd, MySQL, Redis',
      id: 'Ubuntu, Proxmox, Docker, Docker Compose, Coolify, Traefik, systemd, MySQL, Redis',
    },
  },
  {
    title: { en: 'Monitoring', id: 'Monitoring' },
    items: {
      en: 'Prometheus, Grafana, blackbox and MikroTik exporters, alert digests',
      id: 'Prometheus, Grafana, exporter blackbox dan MikroTik, ringkasan alert',
    },
  },
  {
    title: { en: 'Web development', id: 'Pengembangan web' },
    items: {
      en: 'Laravel, PHP, Inertia.js, React, TypeScript, Tailwind CSS, Vue 3, Node.js / Express, Astro',
      id: 'Laravel, PHP, Inertia.js, React, TypeScript, Tailwind CSS, Vue 3, Node.js / Express, Astro',
    },
  },
  {
    title: { en: 'CI/CD & testing', id: 'CI/CD & testing' },
    items: {
      en: 'GitHub Actions (self-hosted runners), PHPUnit test groups, Playwright e2e, pre-push checks, scripted deploys with guards and rollback, secret scanning',
      id: 'GitHub Actions (self-hosted runner), grup tes PHPUnit, Playwright e2e, cek sebelum push, deploy terskrip dengan pengaman dan rollback, secret scanning',
    },
  },
  {
    title: { en: 'Automation', id: 'Otomasi' },
    items: {
      en: 'WhatsApp gateway (Evolution API), group-scoped bots, OCR (PaddleOCR, Tesseract), Python + Playwright reports, Midtrans / Duitku payment callbacks',
      id: 'Gateway WhatsApp (Evolution API), bot khusus grup, OCR (PaddleOCR, Tesseract), laporan Python + Playwright, callback pembayaran Midtrans / Duitku',
    },
  },
  {
    title: { en: 'Ways of working', id: 'Cara kerja' },
    items: {
      en: 'Written plans before changes, dry-run → backup → apply → revert for data fixes, runbooks, directing and reviewing AI coding agents',
      id: 'Rencana tertulis sebelum perubahan, dry-run → backup → apply → revert untuk perbaikan data, runbook, mengarahkan dan mereview AI coding agent',
    },
  },
];

export const EDUCATION = {
  degree: { en: 'B.Sc. Informatics Engineering — GPA 3.70 / 4.00', id: 'S1 Teknik Informatika — IPK 3,70 / 4,00' },
  school: 'Universitas Trunojoyo Madura',
  period: { en: 'Jul 2020 — Oct 2025', id: 'Jul 2020 — Okt 2025' },
};

export const CV_LABELS: Record<Lang, Record<string, string>> = {
  en: {
    summary: 'Summary',
    experience: 'Experience',
    projects: 'Selected projects',
    skills: 'Skills',
    education: 'Education',
    certificates: 'Certificates',
    download: 'Download PDF',
    other: 'Bahasa Indonesia',
    updated: 'Updated',
  },
  id: {
    summary: 'Ringkasan',
    experience: 'Pengalaman',
    projects: 'Proyek pilihan',
    skills: 'Keahlian',
    education: 'Pendidikan',
    certificates: 'Sertifikat',
    download: 'Unduh PDF',
    other: 'English',
    updated: 'Diperbarui',
  },
};
