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
      en: 'Responsible for day-to-day operation of an FTTH network, from core routing to subscriber CPEs, and for the tools the NOC uses for monitoring, provisioning and billing.',
      id: 'Bertanggung jawab atas operasional harian jaringan FTTH, dari routing inti hingga perangkat pelanggan, serta tools yang digunakan tim NOC untuk monitoring, provisioning, dan billing.',
    },
    highlights: {
      en: [
        'Operate a network of 10+ MikroTik routers, 4+ GPON OLTs (ZTE, Huawei, HiOSO) and 1,000+ TR-069-managed ONUs serving 2,000+ PPPoE subscribers.',
        'Lead incident response end to end: triage, fault isolation (upstream, router, OLT/ODP, CPE), service restoration and root-cause follow-up.',
        'Resolved network-wide WhatsApp call drops by moving PCC load balancing to per-source classification and tuning UDP timeouts; reduced latency under load with multi-queue and fq_codel.',
        'Hardened edge routers: restricted Winbox, API and SNMP to the management network, added WAN-side drop rules, closed an exposed open proxy, and enforced DNS with failover.',
        'Built network monitoring on Prometheus and Grafana, plus outage detection that suggests the likely cause from OLT alarms, ACS data and PPPoE logs, validated in shadow mode before going live.',
        'Set up daily off-site database backups and ran a full disaster-recovery drill, restoring service from backup in about 14 minutes.',
        'Automated subscriber operations: isolate and reconnect on MikroTik, a captive payment page, and WhatsApp-driven installs with automatic ONU provisioning and GenieACS tagging.',
      ],
      id: [
        'Mengoperasikan jaringan dengan 10+ router MikroTik, 4+ OLT GPON (ZTE, Huawei, HiOSO), dan 1.000+ ONU berbasis TR-069 untuk 2.000+ pelanggan PPPoE.',
        'Memimpin penanganan gangguan dari awal hingga selesai: triage, isolasi sumber masalah (upstream, router, OLT/ODP, CPE), pemulihan layanan, dan tindak lanjut akar masalah.',
        'Mengatasi gangguan panggilan WhatsApp di seluruh jaringan dengan mengubah klasifikasi load balancing PCC ke per-alamat sumber dan menyetel UDP timeout; menurunkan latensi saat beban tinggi dengan multi-queue dan fq_codel.',
        'Mengamankan router edge: membatasi akses Winbox, API, dan SNMP hanya dari jaringan manajemen, menambah aturan drop di sisi WAN, menutup open proxy yang terekspos, dan menerapkan force-DNS dengan failover.',
        'Membangun monitoring jaringan dengan Prometheus dan Grafana, serta deteksi gangguan yang memperkirakan penyebab dari alarm OLT, data ACS, dan log PPPoE; divalidasi dalam mode bayangan sebelum digunakan.',
        'Menyiapkan backup database harian ke lokasi terpisah dan menjalankan uji pemulihan bencana penuh; layanan berhasil dipulihkan dari backup dalam sekitar 14 menit.',
        'Mengotomasi operasional pelanggan: isolir dan buka isolir di MikroTik, halaman pembayaran untuk pelanggan terisolir, serta PSB melalui WhatsApp dengan provisioning ONU otomatis dan tag GenieACS.',
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
        'IP addressing, subnetting and VLSM; switch, router and access point configuration with VLANs.',
        'Static and dynamic routing: RIP, OSPF, EIGRP and BGP.',
        'Structured troubleshooting of wired and wireless LANs.',
      ],
      id: [
        'Pengalamatan IP, subnetting, dan VLSM; konfigurasi switch, router, dan access point dengan VLAN.',
        'Routing statis dan dinamis: RIP, OSPF, EIGRP, dan BGP.',
        'Troubleshooting terstruktur jaringan LAN kabel dan nirkabel.',
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
        'Installed LAN cabling and terminated connectors.',
        'Installed and configured CCTV cameras.',
        'Provided hardware and network-printer support for production and office staff.',
      ],
      id: [
        'Memasang kabel LAN dan melakukan terminasi konektor.',
        'Memasang dan mengonfigurasi kamera CCTV.',
        'Menangani dukungan perangkat keras dan printer jaringan untuk staf produksi dan kantor.',
      ],
    },
    tags: ['IT Support', 'CCTV', 'Networking'],
  },
];

export default experience;
