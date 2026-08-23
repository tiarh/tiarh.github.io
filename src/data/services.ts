export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    title: 'ISP / NOC Operations',
    description: 'Operational support to keep the network stable and respond to incidents faster.',
    bullets: ['Troubleshooting & triage', 'Runbooks/SOPs', 'Incident follow-up'],
  },
  {
    title: 'MikroTik Routing & Failover',
    description: 'Routing design, recursive failover, and policy routing that stay safe and maintainable.',
    bullets: ['Recursive routing', 'PCC basics', 'Health-check strategy'],
  },
  {
    title: 'PPPoE + QoS / PCQ',
    description: 'PPPoE profiles, bandwidth fairness, and queue strategy for ISP subscribers.',
    bullets: ['PCQ profiles', 'Queue strategy', 'Provisioning checklist'],
  },
  {
    title: 'Monitoring & Reporting Automation',
    description: 'Automated monitoring reports (PNG) and chat-triggered delivery for ops teams.',
    bullets: ['Playwright reporting', 'HTML → Image', 'WA/Telegram delivery'],
  },
  {
    title: 'Linux Server Admin',
    description: 'Server setup for internal tooling, cron jobs, and baseline hardening.',
    bullets: ['systemd/cron', 'basic security', 'logs & uptime'],
  },
  {
    title: 'IT Support & On-site',
    description: 'Office device setup: printer/network, LAN cabling, CCTV, and daily support.',
    bullets: ['CCTV setup', 'Printer sharing', 'LAN cabling'],
  },
] as const;
