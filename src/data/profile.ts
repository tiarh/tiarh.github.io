export const PROFILE = {
  name: 'Ikhtiar Hidayatullah',
  role: 'Network Engineer',
  tagline: 'ISP NOC • MikroTik • Routing • Monitoring Automation',
  location: 'Indonesia',
  headline:
    'Saya fokus di operasi ISP/NOC: routing, PPPoE, bandwidth management, monitoring, dan otomatisasi. Tujuan saya: jaringan stabil, troubleshooting cepat, dan tooling yang bisa dipakai tim.',
  availability: 'Available for freelance',
  initials: 'IH',
  contacts: {
    telegram: { label: '@lumayancuk', href: 'https://t.me/lumayancuk' },
    whatsapp: { label: '+62 852-3441-5861', href: 'https://wa.me/6285234415861' },
    email: { label: 'ihidayatullah57@gmail.com', href: 'mailto:ihidayatullah57@gmail.com' },
    github: { label: 'tiarh', href: 'https://github.com/tiarh' },
  },
} as const;

export type Profile = typeof PROFILE;
