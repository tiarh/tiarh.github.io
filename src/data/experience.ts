export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Network Operations Center (NOC)',
    company: 'Skynet ISP',
    period: '2025 — sekarang',
    description:
      'Handle operasional ISP: monitoring, incident triage, routing/PPPoE, serta otomasi laporan dan tooling internal.',
    highlights: ['PPPoE ops + provisioning', 'Monitoring automation', 'Incident response'],
  },
  {
    role: 'Network Engineer (Projects)',
    company: 'ISP Infrastructure',
    period: '2020 — 2022',
    description:
      'Desain dan implementasi infrastruktur jaringan: failover, load balancing, QoS, serta dokumentasi dan SOP.',
    highlights: ['Dual-WAN failover', 'QoS/PCQ', 'Documentation & handover'],
  },
];
