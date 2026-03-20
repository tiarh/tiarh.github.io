export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    title: 'ISP / NOC Operations',
    description: 'Operational support untuk jaga jaringan tetap stabil dan respons gangguan lebih cepat.',
    bullets: ['Troubleshooting & triage', 'Runbook/SOP', 'Incident follow-up'],
  },
  {
    title: 'MikroTik Routing & Failover',
    description: 'Design routing, recursive failover, dan policy routing yang aman dan mudah dirawat.',
    bullets: ['Recursive routing', 'PCC basics', 'Health-check strategy'],
  },
  {
    title: 'PPPoE + QoS / PCQ',
    description: 'Profile PPPoE, bandwidth fairness, dan queue strategy untuk pelanggan ISP.',
    bullets: ['PCQ profiles', 'Queue strategy', 'Provisioning checklist'],
  },
  {
    title: 'Monitoring & Reporting Automation',
    description: 'Otomatisasi laporan monitoring (PNG) dan trigger via chat untuk tim ops.',
    bullets: ['Playwright reporting', 'HTML → Image', 'WA/Telegram delivery'],
  },
  {
    title: 'Linux Server Admin',
    description: 'Setup server untuk tooling internal, cron jobs, dan hardening dasar.',
    bullets: ['systemd/cron', 'basic security', 'logs & uptime'],
  },
  {
    title: 'IT Support & On-site',
    description: 'Setup perangkat kantor: printer/network, kabel LAN, CCTV, dan support harian.',
    bullets: ['CCTV setup', 'Printer sharing', 'LAN cabling'],
  },
] as const;
