export type Certificate = {
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  url?: string;
};

export const CERTIFICATES: Certificate[] = [
  {
    title: 'Pemasangan Jaringan Komputer — UPT BLK Surabaya',
    issuer: 'UPT Balai Latihan Kerja Surabaya',
    date: 'Okt 2025',
    credentialId: '25005.09.035.02.2025',
  },
  {
    title: 'Network Penetration Testing',
    issuer: 'Cyber Academy Indonesia',
    date: 'Agu 2024',
    credentialId: 'NTPT0109243207',
  },
] as const;
