export const PROFILE = {
  name: 'Ikhtiar Hidayatullah',
  role: 'Network Engineer',
  tagline: 'ISP NOC • MikroTik • Routing • Monitoring Automation',
  location: 'Indonesia',
  headline:
    'I focus on ISP/NOC operations: routing, PPPoE, bandwidth management, monitoring, and automation. My goal: stable networks, fast troubleshooting, and tooling the whole team can use.',
  availability: 'Available for freelance',
  initials: 'IH',
  contacts: {
    telegram: { label: '@lumayancuk', href: 'https://t.me/lumayancuk' },
    whatsapp: { label: '+62 852-3441-5861', href: 'https://wa.me/6285234415861' },
    email: { label: 'ihidayatullah57@gmail.com', href: 'mailto:ihidayatullah57@gmail.com' },
    github: { label: 'tiarh', href: 'https://github.com/tiarh' },
    linkedin: { label: 'linkedin.com/in/ikhtiarh', href: 'https://www.linkedin.com/in/ikhtiarh' },
  },
} as const;

export type Profile = typeof PROFILE;
