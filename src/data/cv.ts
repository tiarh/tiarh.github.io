import type { Lang } from './experience';

// CV-only copy. Experience, projects and certificates come from their own data files.

export const CV_SUMMARY: Record<Lang, string> = {
  en: 'NOC engineer at an FTTH ISP in East Java, responsible for a network serving 2,000+ PPPoE subscribers: MikroTik routing and PPPoE, GPON OLTs from three vendors, and 1,000+ ONUs managed over TR-069. I monitor the network, lead incident triage and service restoration, and harden routers and servers. I also build the automation the NOC depends on, including monitoring, outage detection and subscriber provisioning. Every production change I make is planned, backed up and reversible.',
  id: 'NOC engineer di ISP FTTH di Jawa Timur, bertanggung jawab atas jaringan yang melayani 2.000+ pelanggan PPPoE: routing dan PPPoE MikroTik, OLT GPON dari tiga vendor, serta 1.000+ ONU yang dikelola melalui TR-069. Saya memantau jaringan, memimpin penanganan dan pemulihan gangguan, serta mengamankan router dan server. Saya juga membangun otomasi yang menjadi andalan tim NOC, meliputi monitoring, deteksi gangguan, dan provisioning pelanggan. Setiap perubahan di lingkungan produksi saya lakukan dengan perencanaan, backup, dan langkah rollback.',
};

export type SkillGroup = { title: Record<Lang, string>; items: Record<Lang, string> };

export const SKILLS: SkillGroup[] = [
  {
    title: { en: 'Routing & switching', id: 'Routing & switching' },
    items: {
      en: 'OSPF, static and recursive routing, BGP fundamentals, PCC load balancing, dual-upstream failover, VLAN, subnetting / VLSM',
      id: 'OSPF, routing statis dan rekursif, dasar BGP, load balancing PCC, failover dua upstream, VLAN, subnetting / VLSM',
    },
  },
  {
    title: { en: 'MikroTik / RouterOS', id: 'MikroTik / RouterOS' },
    items: {
      en: 'PPPoE server and profiles, simple queues, fq_codel, firewall / NAT, OpenVPN and L2TP tunnels, netwatch, syslog, RouterOS API',
      id: 'Server dan profil PPPoE, simple queue, fq_codel, firewall / NAT, tunnel OpenVPN dan L2TP, netwatch, syslog, RouterOS API',
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
    title: { en: 'Monitoring & incidents', id: 'Monitoring & gangguan' },
    items: {
      en: 'Prometheus, Grafana, blackbox and MikroTik exporters, alerting, syslog analysis, outage triage and root-cause write-ups',
      id: 'Prometheus, Grafana, exporter blackbox dan MikroTik, alerting, analisis syslog, triage gangguan dan laporan akar masalah',
    },
  },
  {
    title: { en: 'Network security', id: 'Keamanan jaringan' },
    items: {
      en: 'Management-plane lockdown, firewall policy, DNS control, closing exposed services, off-site backups and recovery drills',
      id: 'Pembatasan akses manajemen, kebijakan firewall, kontrol DNS, penutupan layanan yang terbuka, backup off-site dan uji pemulihan',
    },
  },
  {
    title: { en: 'Linux / servers', id: 'Linux / server' },
    items: {
      en: 'Ubuntu, Proxmox, Docker, Docker Compose, Traefik, systemd, MySQL, Redis',
      id: 'Ubuntu, Proxmox, Docker, Docker Compose, Traefik, systemd, MySQL, Redis',
    },
  },
  {
    title: { en: 'Automation', id: 'Otomasi' },
    items: {
      en: 'Python, Bash, Playwright, Laravel / PHP, React / TypeScript, GitHub Actions CI, WhatsApp gateway (Evolution API), OCR',
      id: 'Python, Bash, Playwright, Laravel / PHP, React / TypeScript, GitHub Actions CI, gateway WhatsApp (Evolution API), OCR',
    },
  },
  {
    title: { en: 'Change management', id: 'Manajemen perubahan' },
    items: {
      en: 'Written plans, dry-run → backup → apply → rollback, runbooks, peer review before production changes',
      id: 'Rencana tertulis, dry-run → backup → apply → rollback, runbook, review sebelum perubahan produksi',
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
