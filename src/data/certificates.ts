export type Certificate = {
  title: string;
  issuer: string;
  date?: string;
  url?: string;
};

// NOTE: Isi detail sertifikatnya nanti (dari LinkedIn / file sertifikat).
export const CERTIFICATES: Certificate[] = [
  // contoh:
  // {
  //   title: 'Fundamentals of DevOps',
  //   issuer: 'Dicoding Indonesia',
  //   date: 'Sep 2023',
  //   url: 'https://www.linkedin.com/...'
  // },
] as const;
