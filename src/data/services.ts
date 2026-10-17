export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    title: 'ISP / NOC Operations',
    description: 'Day-to-day operations that keep an FTTH network stable, with incidents handled fast and written down.',
    bullets: ['Troubleshooting & triage', 'Runbooks with rollback', 'Incident follow-up'],
  },
  {
    title: 'MikroTik Routing & Failover',
    description: 'Routing, PCC load balancing and recursive failover that stay safe to change.',
    bullets: ['PCC by source address', 'Recursive failover', 'OSPF / VLAN / tunnels'],
  },
  {
    title: 'PPPoE, Queues & DNS',
    description: 'PPPoE profiles that match what is sold, queues that do not add latency, forced DNS with failover.',
    bullets: ['Package profiles', 'multi-queue / fq_codel', 'Forced DNS + netwatch'],
  },
  {
    title: 'GPON & TR-069',
    description: 'ONU provisioning on ZTE / Huawei OLTs and CPE management through GenieACS.',
    bullets: ['OLT CLI automation', 'GenieACS provisions', 'Optical level checks'],
  },
  {
    title: 'ISP Billing & Ops Software',
    description: 'Laravel + React tools for billing, payments, isolation, installs over WhatsApp and outage detection.',
    bullets: ['Payment gateway callbacks', 'Auto isolate / reconnect', 'WhatsApp workflows'],
  },
  {
    title: 'Monitoring & CI/CD',
    description: 'Prometheus / Grafana monitoring, chat reports, and CI with guarded, scripted deploys.',
    bullets: ['Grafana + exporters', 'GitHub Actions', 'Docker / Coolify / Traefik'],
  },
];
