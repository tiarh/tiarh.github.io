export const PROFILE = {
  name: 'Ikhtiar Hidayatullah',
  role: 'Network Engineer · ISP NOC & Automation',
  tagline: 'NOC Engineer — MikroTik · GPON · TR-069 · Laravel/React automation',
  location: 'Pamekasan, East Java · Indonesia',
  headline: 'I keep an FTTH network running and build the tools that run it.',
  intro:
    'I work at Skynet, an FTTH ISP in East Java. Half of my work is the network: routers, OLTs, upstreams and incidents. The other half is the software around it: billing, installs over WhatsApp, monitoring and outage detection, shipped with tests and guarded deploys.',
  cv: { en: '/files/Ikhtiar_Hidayatullah_CV.pdf', id: '/files/Ikhtiar_Hidayatullah_CV_ID.pdf' },
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
