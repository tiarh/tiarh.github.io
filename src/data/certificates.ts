export type Certificate = {
  title: { en: string; id: string };
  issuer: string;
  date?: { en: string; id: string };
  credentialId?: string;
  url?: string;
};

export const CERTIFICATES: Certificate[] = [
  {
    title: { en: 'Computer Network Installation', id: 'Pemasangan Jaringan Komputer' },
    issuer: 'UPT BLK Surabaya',
    date: { en: 'Oct 2025', id: 'Okt 2025' },
    credentialId: '25005.09.035.02.2025',
  },
  {
    title: { en: 'Network Penetration Testing', id: 'Network Penetration Testing' },
    issuer: 'Cyber Academy Indonesia',
    date: { en: 'Aug 2024', id: 'Agu 2024' },
    credentialId: 'NTPT0109243207',
  },
  {
    title: { en: 'Fundamentals of DevOps', id: 'Fundamentals of DevOps' },
    issuer: 'Dicoding Indonesia',
    date: { en: 'Sep 2023', id: 'Sep 2023' },
  },
] as const;
