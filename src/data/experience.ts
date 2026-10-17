// Bilingual so the site (EN) and both CV PDFs (EN + ID) read from one place.
export type Lang = 'en' | 'id';
type T<V = string> = Record<Lang, V>;

export type Experience = {
  title: T;
  company: T;
  period: T;
  location: T;
  description: T;
  highlights: T<string[]>;
  tags: string[];
};

const experience: Experience[] = [
  {
    title: { en: 'NOC Engineer — Network & Automation', id: 'NOC Engineer — Network & Automation' },
    company: { en: 'Skynet (FTTH ISP)', id: 'Skynet (ISP FTTH)' },
    period: { en: '2025 — Present', id: '2025 — Sekarang' },
    location: { en: 'East Java, Indonesia', id: 'Jawa Timur, Indonesia' },
    description: {
      en: 'Run day-to-day network operations for an FTTH ISP and build the internal software the team uses for billing, installs and monitoring.',
      id: 'Menjalankan operasional jaringan harian ISP FTTH dan membangun software internal untuk billing, pemasangan baru, dan monitoring.',
    },
    highlights: {
      en: [
        'Operate 10+ MikroTik routers and 4+ OLTs (ZTE, Huawei, HiOSO) serving 1,500+ PPPoE subscribers.',
        'Fixed broken WhatsApp calls by changing PCC to per-source balancing and tuning UDP timeouts; tuned queues (multi-queue, fq_codel) and router time sync.',
        'Rolled out forced DNS with failover, PPPoE syslog to the server, and a captive pay page for isolated customers.',
        'Own the billing and operations platform (Laravel + React): designed features, directed and reviewed AI coding agents, and shipped through CI with blocking tests and guarded deploys.',
        'Turned new installs and migrations into a WhatsApp flow with OCR, automatic ONU provisioning (ZTE/Huawei) and GenieACS tagging.',
        'Built outage detection with cause hints from OLT, ACS and PPPoE data, run in shadow mode with an accuracy report before going live.',
        'Security and performance hardening on routers and servers, with written rollback steps for every change.',
      ],
      id: [
        'Mengelola 10+ router MikroTik dan 4+ OLT (ZTE, Huawei, HiOSO) untuk 1.500+ pelanggan PPPoE.',
        'Memperbaiki panggilan WhatsApp yang macet dengan mengubah PCC ke per-alamat sumber dan menyetel UDP timeout; menyetel antrean (multi-queue, fq_codel) dan sinkron jam router.',
        'Menerapkan force-DNS dengan failover, syslog PPPoE ke server, dan halaman bayar untuk pelanggan terisolir.',
        'Memegang platform billing dan operasional (Laravel + React): merancang fitur, mengarahkan dan mereview AI coding agent, rilis lewat CI dengan tes wajib dan deploy berpengaman.',
        'Mengubah PSB dan migrasi pelanggan menjadi alur WhatsApp dengan OCR, provisioning ONU otomatis (ZTE/Huawei), dan tag GenieACS.',
        'Membangun deteksi gangguan dengan dugaan sebab dari data OLT, ACS, dan PPPoE; dijalankan mode bayangan dengan laporan akurasi sebelum live.',
        'Pengerasan keamanan dan performa di router dan server, dengan langkah rollback tertulis untuk setiap perubahan.',
      ],
    },
    tags: ['MikroTik', 'GPON', 'GenieACS', 'Laravel', 'CI/CD', 'NOC'],
  },
  {
    title: { en: 'Computer Network Installation Training', id: 'Pelatihan Instalasi Jaringan Komputer' },
    company: { en: 'UPT BLK Surabaya', id: 'UPT BLK Surabaya' },
    period: { en: 'Oct 2025 — Nov 2025', id: 'Okt 2025 — Nov 2025' },
    location: { en: 'Surabaya, East Java', id: 'Surabaya, Jawa Timur' },
    description: {
      en: 'Formal training in network installation and configuration.',
      id: 'Pelatihan resmi instalasi dan konfigurasi jaringan komputer.',
    },
    highlights: {
      en: [
        'Subnetting and VLSM.',
        'Switch, router and access point configuration; VLANs.',
        'Routing: static, RIP, OSPF, EIGRP, BGP.',
        'LAN and Wi-Fi troubleshooting.',
      ],
      id: [
        'Subnetting dan VLSM.',
        'Konfigurasi switch, router, dan access point; VLAN.',
        'Routing: static, RIP, OSPF, EIGRP, BGP.',
        'Troubleshooting LAN dan Wi-Fi.',
      ],
    },
    tags: ['Cisco', 'Routing', 'VLAN', 'Subnetting'],
  },
  {
    title: { en: 'Tech Team Academy (Internship)', id: 'Tech Team Academy (Magang)' },
    company: { en: 'PT. ARAI Rubber Seal Indonesia', id: 'PT. ARAI Rubber Seal Indonesia' },
    period: { en: 'Feb 2024 — Jun 2024', id: 'Feb 2024 — Jun 2024' },
    location: { en: 'Gresik, East Java', id: 'Gresik, Jawa Timur' },
    description: {
      en: 'IT support and network installation in a manufacturing plant.',
      id: 'IT support dan instalasi jaringan di lingkungan pabrik.',
    },
    highlights: {
      en: [
        'Assembled and replaced PC units; set up and fixed network printers.',
        'Installed and configured CCTV.',
        'LAN cabling and crimping.',
        'Backend work on the in-house ERP (MySQL + C#).',
      ],
      id: [
        'Merakit dan mengganti unit PC; memasang dan memperbaiki printer jaringan.',
        'Instalasi dan konfigurasi CCTV.',
        'Penarikan kabel LAN dan crimping.',
        'Pengembangan backend ERP internal (MySQL + C#).',
      ],
    },
    tags: ['IT Support', 'CCTV', 'Networking', 'MySQL', 'ERP'],
  },
];

export default experience;
