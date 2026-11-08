export type Certificate = {
  title: string;
  issuer: string;
  date?: { en: string; id: string };
  credentialId?: string;
  url?: string;
};

export const CERTIFICATES: Certificate[] = [
  {
    title: 'Pemasangan Jaringan Komputer — UPT BLK Surabaya',
    issuer: 'UPT Balai Latihan Kerja Surabaya',
    date: { en: 'Oct 2025', id: 'Okt 2025' },
    credentialId: '25005.09.035.02.2025',
  },
  {
    title: 'Network Penetration Testing',
    issuer: 'Cyber Academy Indonesia',
    date: { en: 'Aug 2024', id: 'Agu 2024' },
    credentialId: 'NTPT0109243207',
  },
  {
    title: 'Fundamentals of DevOps',
    issuer: 'Dicoding Indonesia',
    date: { en: 'Sep 2023', id: 'Sep 2023' },
  },
] as const;
