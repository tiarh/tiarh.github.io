import type { Lang } from './experience';

// CV-only copy. Experience, projects and certificates come from their own data files.

export const CV_SUMMARY: Record<Lang, string> = {
  en: 'Network engineer with NOC experience at an FTTH ISP in East Java, where I was responsible for a network serving 2,000+ PPPoE subscribers: MikroTik routing and PPPoE, GPON OLTs from three vendors, and 1,000+ ONUs managed over TR-069. I monitored the network, led incident triage and service restoration, and hardened routers and servers. I also built the automation the NOC depended on, including monitoring, outage detection and subscriber provisioning. Every production change I make is planned, backed up and reversible.',
  id: 'Network engineer dengan pengalaman NOC di sebuah ISP FTTH di Jawa Timur. Di sana saya bertanggung jawab atas jaringan yang melayani 2.000+ pelanggan PPPoE: routing dan PPPoE MikroTik, OLT GPON dari tiga vendor, serta 1.000+ ONU yang dikelola melalui TR-069. Saya memantau jaringan, memimpin penanganan dan pemulihan gangguan, serta mengamankan router dan server. Saya juga membangun otomasi yang diandalkan tim NOC, meliputi monitoring, deteksi gangguan, dan provisioning pelanggan. Setiap perubahan di lingkungan produksi saya lakukan dengan perencanaan, backup, dan langkah rollback.',
};

export type SkillGroup = { title: Record<Lang, string>; items: Record<Lang, string> };

export const SKILLS: SkillGroup[] = [
  {
    title: { en: 'Routing & switching', id: 'Routing & switching' },
    items: {
      en: 'OSPF, BGP, static & recursive routing, PCC load balancing, failover, VLAN, VLSM',
      id: 'OSPF, BGP, routing statis & rekursif, load balancing PCC, failover, VLAN, VLSM',
    },
  },
  {
    title: { en: 'MikroTik / RouterOS', id: 'MikroTik / RouterOS' },
    items: {
      en: 'PPPoE, queues, fq_codel, firewall / NAT, OpenVPN, L2TP, netwatch, RouterOS API',
      id: 'PPPoE, queue, fq_codel, firewall / NAT, OpenVPN, L2TP, netwatch, RouterOS API',
    },
  },
  {
    title: { en: 'GPON / OLT', id: 'GPON / OLT' },
    items: {
      en: 'ZTE C300, Huawei MA5608T, HiOSO, ONU provisioning, optical levels, OLT migration',
      id: 'ZTE C300, Huawei MA5608T, HiOSO, provisioning ONU, redaman optik, migrasi OLT',
    },
  },
  {
    title: { en: 'TR-069 / ACS', id: 'TR-069 / ACS' },
    items: {
      en: 'GenieACS, provisions & presets, DHCP option 43, FiberHome CPE',
      id: 'GenieACS, provision & preset, DHCP option 43, CPE FiberHome',
    },
  },
  {
    title: { en: 'Monitoring & incidents', id: 'Monitoring & gangguan' },
    items: {
      en: 'Prometheus, Grafana, alerting, syslog, incident triage, root-cause analysis',
      id: 'Prometheus, Grafana, alerting, syslog, triage gangguan, analisis akar masalah',
    },
  },
  {
    title: { en: 'Network security', id: 'Keamanan jaringan' },
    items: {
      en: 'Firewall hardening, management access control, DNS control, off-site backups, DR drills',
      id: 'Hardening firewall, pembatasan akses manajemen, kontrol DNS, backup off-site, uji DR',
    },
  },
  {
    title: { en: 'Linux / servers', id: 'Linux / server' },
    items: {
      en: 'Ubuntu, Proxmox, Docker, Traefik, systemd, MySQL, Redis',
      id: 'Ubuntu, Proxmox, Docker, Traefik, systemd, MySQL, Redis',
    },
  },
  {
    title: { en: 'Automation', id: 'Otomasi' },
    items: {
      en: 'Python, Bash, Playwright, Laravel, React / TypeScript, GitHub Actions',
      id: 'Python, Bash, Playwright, Laravel, React / TypeScript, GitHub Actions',
    },
  },
  {
    title: { en: 'Change management', id: 'Manajemen perubahan' },
    items: {
      en: 'Runbooks, dry-run, backup & rollback, peer review',
      id: 'Runbook, dry-run, backup & rollback, peer review',
    },
  },
];

export const EDUCATION = {
  degree: { en: 'Informatics Engineering (S.Kom.) — GPA 3.70 / 4.00', id: 'S1 Teknik Informatika (S.Kom.) — IPK 3,70 / 4,00' },
  school: 'Universitas Trunojoyo Madura',
  period: { en: 'Jul 2020 - Oct 2025', id: 'Jul 2020 - Okt 2025' },
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
