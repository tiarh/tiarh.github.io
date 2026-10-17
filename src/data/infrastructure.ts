import type { Flow } from './projects';

// Generic on purpose: no addresses, site names, upstream brands or device identities.

export type DeviceGroup = {
  title: string;
  icon: string;
  items: { name: string; note: string }[];
};

export const INFRA_COUNTS = [
  { value: '10+', label: 'MikroTik routers' },
  { value: '10+', label: 'POPs' },
  { value: '4+', label: 'OLTs, 3 vendors' },
  { value: '1,000+', label: 'ONUs on TR-069' },
] as const;

export const TOPOLOGY: Flow = {
  layers: [
    { label: 'Upstream', nodes: ['Upstream A (metro-Ethernet)', 'Upstream B (metro-Ethernet)'] },
    { label: 'Core', nodes: ['Core edge router (carrier DC)', 'Main POP router'] },
    { label: 'POP links', nodes: ['Direct metro links', 'VLAN + OSPF', 'Tunnels over local ISPs'] },
    { label: 'Access', nodes: ['POP routers (PPPoE)', 'OLTs (ZTE / Huawei / HiOSO)'] },
    { label: 'Customers', nodes: ['ONUs (FiberHome, TR-069)'] },
  ],
  note: 'The NOC office reaches every POP over the same links. The server cluster (billing, ACS, WhatsApp gateway, monitoring) talks to routers over API, syslog and metrics, and ONUs inform the ACS over TR-069.',
};

export const DEVICE_GROUPS: DeviceGroup[] = [
  {
    title: 'Edge / core routing',
    icon: 'ph-globe-hemisphere-east',
    items: [
      { name: 'Core edge router (MikroTik CCR, carrier data center)', note: 'Terminates the upstream links and the metro links to POPs. I read and document routing and tunnels before every change.' },
      { name: 'Main POP router (MikroTik x86, RouterOS 7)', note: 'PPPoE for 1,000+ sessions, PCC over two upstreams, NAT and DNS redirect. I tuned queues, PCC, NTP and conntrack, with rollback notes for each change.' },
    ],
  },
  {
    title: 'POP connectivity',
    icon: 'ph-share-network',
    items: [
      { name: 'Direct metro-Ethernet links', note: 'Dedicated circuits from the edge to several POPs; I mapped which POP rides which link.' },
      { name: 'VLAN + OSPF to nearby POPs', note: 'L2 extension from the main POP with OSPF; documented and checked the routes back to the office.' },
      { name: 'Tunnels over local ISPs (OpenVPN / L2TP)', note: 'For remote POPs. Fixed return routes and no-NAT rules so billing, ACS and remote access work over them.' },
    ],
  },
  {
    title: 'POP router features',
    icon: 'ph-router',
    items: [
      { name: 'PPPoE servers, profiles and queues', note: 'Package profiles (100 / 200 Mbps), rate limits, multi-queue and an fq_codel trial.' },
      { name: 'Isolation (address-list + HTTP redirect)', note: 'Sends unpaid customers to the pay page, driven by the billing app.' },
      { name: 'Forced DNS with failover', note: 'Port-53 redirect, exception list, netwatch turns it off if the resolver fails.' },
      { name: 'PPPoE syslog to the server', note: 'Connect / disconnect / auth events feed outage detection.' },
      { name: 'Load balancing and failover', note: 'PCC by source address + recursive routes keep one customer on one upstream.' },
    ],
  },
  {
    title: 'OLTs',
    icon: 'ph-circuitry',
    items: [
      { name: 'ZTE C300', note: 'ONU provisioning and optical reads from the billing app over CLI; OLT clock drift handled in software.' },
      { name: 'Huawei MA5608T', note: 'Automated provisioning, rename / delete with service-port clean-up, a session lock shared with installs.' },
      { name: 'HiOSO (legacy)', note: 'Customers migrated off it; leftover records cleaned up.' },
    ],
  },
  {
    title: 'ONU / CPE & TR-069',
    icon: 'ph-wifi-high',
    items: [
      { name: 'FiberHome ONUs (HG6045F3 / HG6145F3 / HG6145D2)', note: '1,000+ devices managed through GenieACS.' },
      { name: 'GenieACS', note: 'DHCP option 43 for inform, routes and no-NAT for connection requests on tunnel sites, versioned provisions for Wi-Fi and optical data with a check and rollback.' },
    ],
  },
  {
    title: 'Servers & platform',
    icon: 'ph-hard-drives',
    items: [
      { name: 'Proxmox host with several VMs', note: 'Billing app, ACS, WhatsApp gateway, monitoring and a demo instance.' },
      { name: 'Docker + Coolify + Traefik', note: 'App, workers, scheduler, syslog listener and reverse proxy; I run deploys and post-deploy checks.' },
      { name: 'MySQL + Redis', note: 'App database and queues; backup before every deploy and every data fix.' },
      { name: 'Prometheus + Grafana', note: 'Router, upstream and PPPoE metrics.' },
      { name: 'WhatsApp gateway (Evolution API)', note: 'Install, migration, report and NOC groups.' },
      { name: 'OCR service (PaddleOCR)', note: 'Reads ID card and ONU label photos, with its own worker and CPU / memory limits.' },
      { name: 'Self-hosted GitHub Actions runners', note: 'CI for the billing platform.' },
    ],
  },
];
