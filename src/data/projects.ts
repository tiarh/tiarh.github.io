// Single source for every project card, case-study page, CV entry and OG image.
// Public site: no IPs, hostnames, POP names, customer or staff data. Numbers are rounded.

export type Shot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  /** 720px-wide copy for cards and grid thumbnails (desktop shots only). */
  thumb?: string;
};

/** Layered flow diagram: each layer is a column (desktop) / row (mobile) of boxes. */
export type Flow = {
  layers: { label: string; nodes: string[] }[];
  note?: string;
};

export type Project = {
  slug: string;
  title: string;
  status: 'Production' | 'Shadow mode' | 'Case study';
  featured?: boolean;
  summary: string;
  role: string;
  problem: string;
  solution: string[];
  shipping?: string[];
  flow: Flow;
  scale: string[];
  outcome: string[];
  stack: string[];
  tags: string[];
  gallery?: Shot[];
  links?: { repo?: string; demo?: string };
  /** One-line version for the CV. */
  cv: { en: string; id: string };
};

const desktop = (slug: string, file: string, alt: string, caption: string, height = 1100): Shot => ({
  src: `/projects/${slug}/${file}.webp`,
  thumb: `/projects/${slug}/${file}-720.webp`,
  alt,
  caption,
  width: 1440,
  height,
});

const mobile = (slug: string, file: string, alt: string, caption: string, height: number): Shot => ({
  src: `/projects/${slug}/${file}.webp`,
  alt,
  caption,
  width: 390,
  height,
});

/** srcset for a shot: the 720px copy when there is one. */
export const shotSrcset = (s: Shot) => (s.thumb ? `${s.thumb} 720w, ${s.src} ${s.width}w` : undefined);

export const PROJECTS: Project[] = [
  {
    slug: 'skynet-ebilling',
    title: 'Skynet eBilling — ISP Billing & Operations Platform',
    status: 'Production',
    featured: true,
    summary:
      'Billing and operations platform for an FTTH ISP: customers, invoices, online payments, automatic isolate/reconnect on MikroTik, and the tools NOC uses every day.',
    role:
      'Product owner, ops lead and reviewer. I designed the features, wrote the plans, reviewed every change, and ran every deploy and network-side rollout myself.',
    problem:
      'Billing, payments and network access lived in different places. Admins marked payments by hand, then someone logged into the router to isolate or reconnect the customer. Unpaid customers stayed online, paid customers stayed isolated, and nobody had one view of who owes what and who is actually online. App changes were deployed by hand and sometimes broke things that used to work.',
    solution: [
      'Laravel + Inertia (React/TypeScript) app for customers, packages, areas, monthly invoices (PDF), receipts and a passwordless customer pay page.',
      'Online payment through a gateway (Midtrans Snap, Duitku being onboarded) with signed callbacks, idempotent payment recording, a kill switch and a manual bank-transfer fallback.',
      'Overpayments are kept as customer credit and applied automatically to the next invoice.',
      'Automatic isolate / reconnect: overdue customers move to an isolation PPPoE profile over the RouterOS API; a full payment reconnects them without an admin.',
      'Isolation portal: isolated customers land on a "please pay" page (reverse-proxy catch-all + MikroTik dst-nat and address-list; only DNS and the billing site are reachable).',
      'Router sync: PPPoE secrets are read from MikroTik as the source of truth; router-only accounts are staged for review instead of imported silently.',
      'Guard rails for destructive actions: terminate or ONU delete is refused while the session or ONU is still active; an override needs a superadmin and a written reason. Data fixes run dry-run → backup → apply → revert.',
      'Full UI redesign: light/dark tokens, new shell, dashboard KPIs, mobile pages for technicians, plain Indonesian status labels, global Ctrl-K search and an in-app FAQ with generated screenshots.',
      'Reports: revenue, collection rate, outstanding aging, revenue per area, plus WhatsApp recap commands for installs and migrations.',
    ],
    shipping: [
      'Every change goes plan → code → strict review → CI → merge → deploy → post-deploy check. Behaviour changes need an explicit "yes" before any code is written.',
      'GitHub Actions on self-hosted runners: blocking PHPUnit groups, frontend contract tests, TypeScript check, build, Playwright end-to-end tests, secret scan and screenshot workflows for visual QA.',
      'A local pre-push script runs lint, formatting, the touched tests and the build before anything reaches CI.',
      'One scripted deploy: only from a clean main, database backup first, previous image kept for rollback, and post-deploy guards that must print OK for the WhatsApp install and migration paths.',
      'A separate demo instance with its own database user and sandbox payment keys, so nothing is tested on production.',
    ],
    flow: {
      layers: [
        { label: 'Users', nodes: ['Admin / NOC', 'Customer pay page'] },
        { label: 'App', nodes: ['eBilling web (Laravel + React)', 'Queue workers + scheduler'] },
        { label: 'Data', nodes: ['MySQL', 'Redis'] },
        { label: 'Outside', nodes: ['Payment gateway', 'MikroTik routers', 'WhatsApp gateway'] },
      ],
      note: 'Workers isolate / reconnect over the RouterOS API; isolated users are redirected to the pay page; the gateway confirms payments with a signed callback.',
    },
    scale: [
      '2,000+ PPPoE subscribers billed monthly',
      '10+ MikroTik routers kept in sync',
      '500+ automated test files, 300+ in blocking CI groups',
      '20+ Playwright end-to-end specs',
    ],
    outcome: [
      'Isolation and reconnection follow payment status automatically; admins no longer log into routers for it.',
      'Overpayments are no longer lost: they show up as credit and are used on the next invoice.',
      'Deploys are one command with guards and a known rollback, shipped in batches.',
      'Data clean-ups (duplicate accounts, wrong statuses, wrong ONU serials) ran from dry-run lists with a revert path.',
      'One consistent admin UI that works on phones and uses wording staff understand.',
    ],
    stack: ['PHP 8', 'Laravel', 'Inertia.js', 'React', 'TypeScript', 'Tailwind CSS', 'MySQL', 'Redis', 'Docker', 'Traefik', 'Coolify', 'GitHub Actions', 'PHPUnit', 'Playwright', 'RouterOS API', 'Midtrans'],
    tags: ['Laravel', 'React', 'Billing', 'MikroTik', 'CI/CD'],
    gallery: [
      desktop('skynet-ebilling', 'dashboard-desktop-light', 'eBilling dashboard with monthly billing, active customers, receivables and recent payments', 'Dashboard — billing, collection and per-area summary (demo data)'),
      desktop('skynet-ebilling', 'dashboard-desktop-dark', 'The same dashboard in dark theme', 'Dark theme from the same design tokens'),
      desktop('skynet-ebilling', 'customers-desktop-light', 'Customer list with filters for package, area, status, router and billing', 'Customer directory with filters and export'),
      desktop('skynet-ebilling', 'invoice-detail-paid-desktop-light', 'Paid invoice with customer details, summary and payment history', 'Invoice detail with payment history and correction'),
      mobile('skynet-ebilling', 'public-pay-mobile-light', 'Mobile customer pay page with invoice total and payment methods', 'Customer pay page on a phone', 1528),
      mobile('skynet-ebilling', 'isolir-portal-mobile-light', 'Mobile isolation portal explaining the service is paused and how to reactivate', 'Isolation portal shown to unpaid customers', 1700),
    ],
    cv: {
      en: 'Billing & operations platform (Laravel + React): invoices, online payments, credit, automatic isolate/reconnect on MikroTik, isolation portal; shipped through CI with guarded deploys.',
      id: 'Platform billing & operasional (Laravel + React): tagihan, pembayaran online, saldo, isolir/buka isolir otomatis di MikroTik, portal isolir; rilis lewat CI dengan deploy berpengaman.',
    },
  },
  {
    slug: 'whatsapp-psb-migration',
    title: 'New Installs & Customer Migration over WhatsApp',
    status: 'Production',
    featured: true,
    summary:
      'Technicians activate new customers and migrate existing ones from a WhatsApp group: OCR on photos, PPPoE secret, ONU provisioning and ACS tag in one flow.',
    role:
      'Designed the flows and the message wording, set the safety rules, reviewed the code, and handled field issues with technicians during rollout.',
    problem:
      'A new install needed several people: the technician sent photos, an admin typed the customer in, NOC created the PPPoE secret, registered the ONU on the OLT and tagged it in the ACS. Wrong serials and ports were common and nobody knew which step a job was stuck on. Moving customers to a new OLT or router had the same problem, and finished migrations stayed "open" forever.',
    solution: [
      'Technicians post #psb with the ID card photo and the ONU label photo in a dedicated group; the bot answers with one short status per step.',
      'OCR (PaddleOCR, Tesseract fallback) reads the ONU serial and ID card; a document check refuses drafts with missing or unreadable photos and says exactly what to resend.',
      'The app creates the PPPoE secret on MikroTik, provisions the ONU on ZTE C300 or Huawei MA5608T, and tags the device in GenieACS.',
      'When the OLT is busy with another job, the draft is parked and resumed automatically instead of failing silently.',
      'Dedicated queue workers for installs, migrations and OCR with their own time limits, so a slow OCR call cannot block an install.',
      'Migration flow (#migrasi) moves a customer to a new OLT or router and removes the old ONU only when it is safe.',
      'Auto reconciliation marks a migration done when the ONU and PPPoE are both online on the target (database-only, never touches devices); unclear cases go to "needs admin check".',
      'A "Mark done" button for admins, with an evidence dialog and a required reason, for cases automation cannot prove.',
    ],
    flow: {
      layers: [
        { label: 'Field', nodes: ['Technician (WhatsApp group)'] },
        { label: 'Intake', nodes: ['WhatsApp gateway', 'OCR service'] },
        { label: 'App', nodes: ['PSB / migration workers', 'Admin panel'] },
        { label: 'Network', nodes: ['MikroTik (PPPoE)', 'OLT (ZTE / Huawei)', 'GenieACS (TR-069)'] },
      ],
      note: 'Status replies go back to the same group; admins can retry or mark a job done with a reason.',
    },
    scale: [
      'Hundreds of installs and migrations through the bot',
      '2 OLT vendors provisioned automatically',
      '500+ open migrations checked on every reconcile run',
    ],
    outcome: [
      'An install no longer needs an admin to retype data; the technician gets a clear next step in the chat.',
      'Fewer wrong serials and ports, because they are read from the device photo and checked against the OLT.',
      'OLT contention became "parked and resumed" instead of a silent stall.',
      'Migrations that are really finished close automatically, with evidence stored.',
      'Every deploy proves the install and migration WhatsApp paths still work before it is called done.',
    ],
    stack: ['Laravel queues', 'Evolution API', 'PaddleOCR', 'Tesseract', 'RouterOS API', 'ZTE C300 CLI', 'Huawei MA5608T CLI', 'GenieACS NBI', 'MySQL', 'Redis'],
    tags: ['WhatsApp', 'GPON', 'OCR', 'Provisioning'],
    gallery: [
      desktop('whatsapp-psb-migration', 'psb-wa-dashboard-desktop-light', 'Install KPI page with daily target, per-area results and draft pipeline', 'Install KPIs and draft pipeline (site names blurred)'),
      desktop('whatsapp-psb-migration', 'psb-activation-desktop-light', 'OLT activation page with bot health, usage hints and draft list with retry', 'Activation queue with bot health and retry'),
      desktop('whatsapp-psb-migration', 'migrasi-desktop-light', 'Migration summary with verified, pending, review and failed counts', 'Migration tracking and reconciliation'),
      desktop('whatsapp-psb-migration', 'olt-detail-desktop-light', 'OLT detail with ONU counts, signal quality filters and ONU table', 'OLT snapshot: ONU status, optical level, matching'),
    ],
    cv: {
      en: 'WhatsApp install & migration flow: OCR of ID card/ONU label, automatic ONU provisioning on ZTE/Huawei OLTs, GenieACS tagging, auto reconciliation.',
      id: 'Alur PSB & migrasi via WhatsApp: OCR KTP/label ONU, provisioning ONU otomatis di OLT ZTE/Huawei, tag GenieACS, rekonsiliasi otomatis.',
    },
  },
  {
    slug: 'outage-detection-rca',
    title: 'Outage Detection & Root-Cause Hints',
    status: 'Shadow mode',
    featured: true,
    summary:
      'Collects ONU, CPE and PPPoE events, works out the likely cause (fiber cut, power off, Wi-Fi, PPPoE) and sends NOC a WhatsApp digest. Runs in shadow mode first.',
    role:
      'Defined the cause list and thresholds, planned the rollout in stages, reviewed the code, and checked the results against real tickets.',
    problem:
      'The old detector only answered "is the ONU offline?", never "why". OLT and ACS data were overwritten on each poll, PPPoE was only polled, and Wi-Fi status was not real. Polling gaps looked like outages, and without a cause recorded on closed tickets, accuracy could not be measured.',
    solution: [
      'One cause list used everywhere: upstream, core router, OLT down, data not readable, PON or ODP cut, drop cable LOS, power off, dead CPE, reboot loop, weak optical level, PPPoE auth/flap, Wi-Fi down, client side, unknown.',
      'Event tables for ONU state changes, CPE events and PPPoE events, so there is history to look back on.',
      'Cause from the OLT: LOS, dying gasp and last-down cause per ONU, with OLT clock drift corrected per session.',
      'PPPoE disconnect reasons sent from the routers over syslog and mapped to customers.',
      'Wi-Fi layer from GenieACS: radio status, channel, clients and signal, refreshed by a versioned ACS provision with a check and a one-command rollback.',
      'Automatic diagnosis per customer and a "Check now" button that pulls fresh data on demand.',
      'Shadow mode: alerts are computed and logged without creating tickets; a digest goes to the NOC group and an accuracy report compares results with real ticket causes.',
    ],
    flow: {
      layers: [
        { label: 'Sources', nodes: ['OLT collectors (ZTE / Huawei)', 'GenieACS (TR-069)', 'MikroTik syslog (PPPoE)'] },
        { label: 'Store', nodes: ['Event store'] },
        { label: 'Logic', nodes: ['Detector + cause classifier'] },
        { label: 'Output', nodes: ['NOC panel + "Check now"', 'WhatsApp digest', 'Accuracy report'] },
      ],
      note: '"Check now" refreshes OLT and ACS data for one customer on demand.',
    },
    scale: [
      '1,000+ ONUs and CPEs watched',
      '3 data sources joined per customer (OLT, ACS, router)',
      'About two weeks of shadow mode before any live ticket',
    ],
    outcome: [
      'NOC sees a likely cause next to each offline customer instead of a bare "down".',
      'Wi-Fi complaints can be told apart from fiber problems before a technician is sent.',
      'Polling gaps are labelled "data not readable" instead of raising false outages.',
      'Accuracy is measured from closed tickets, so thresholds are tuned from data.',
    ],
    stack: ['Laravel', 'MySQL', 'Redis', 'ZTE / Huawei OLT CLI', 'GenieACS NBI + provisions', 'MikroTik syslog', 'WhatsApp gateway'],
    tags: ['NOC', 'GPON', 'TR-069', 'RCA'],
    gallery: [
      desktop('outage-detection-rca', 'monitoring-gangguan-desktop-light', 'Active outages grouped by ODP and PON with affected customer counts', 'Active outages grouped by ODP / PON'),
      desktop('outage-detection-rca', 'monitoring-noc-desktop-light', 'NOC view with active incidents, affected customers, P1/P2 counts and coverage', 'NOC view: incidents, coverage, mapping gaps'),
      desktop('outage-detection-rca', 'genieacs-desktop-light', 'GenieACS device list with PPPoE state, Wi-Fi clients and status', 'Wi-Fi layer from GenieACS (addresses blurred)'),
      desktop('outage-detection-rca', 'customer-detail-desktop-light', 'Customer detail with service details and MikroTik enforcement status', 'Customer detail with network enforcement state'),
    ],
    cv: {
      en: 'Outage detection with cause hints from OLT (LOS/dying gasp), GenieACS Wi-Fi data and PPPoE syslog; shadow mode with an accuracy report before going live.',
      id: 'Deteksi gangguan dengan dugaan sebab dari OLT (LOS/dying gasp), data WiFi GenieACS dan syslog PPPoE; mode bayangan dengan laporan akurasi sebelum live.',
    },
  },
  {
    slug: 'monitoring-automation-skynet',
    title: 'Network Monitoring & Report Automation',
    status: 'Production',
    summary:
      'From scripted per-area screenshots to monitoring inside eBilling: upstream and router traffic, ping, OLT optical levels, worker health and a CPU-steal-aware job gate.',
    role:
      'Built the first report pipeline myself, then planned the move to Prometheus/Grafana-backed monitoring inside eBilling and reviewed the implementation.',
    problem:
      'NOC needed fast per-area status (down/up, excluding isolated customers). The first flow was manual: open the dashboard, filter, screenshot, send to the group — about 10 minutes each time. Later the app kept its own hand-maintained target list that duplicated Grafana, and its heavy jobs slowed the server at the worst moments.',
    solution: [
      'Stage 1: Python + Playwright pipeline that logs in, scrapes per-area tables, drops isolated rows, renders an HTML report to PNG and sends it to WhatsApp/Telegram — on a schedule or on request (monitoring <area>).',
      'Stage 2: Prometheus with MikroTik and blackbox exporters, Grafana dashboards and a PPPoE exporter covering all active routers.',
      'A Network tab in eBilling: upstream panel (now / peak / p95 / capacity), router table with ping, PPPoE count, traffic, CPU, memory and uptime, with stale-data badges.',
      'OLT optical levels collected on a schedule; weak-signal ONUs listed for maintenance.',
      'Worker heartbeat: a host script checks every queue worker and reports when one stops.',
      'Admission gate: monitoring jobs wait when critical queues are busy or the VM\'s CPU steal is high, so installs and payments always go first.',
      'Retired the hand-maintained target list once the same checks lived in the blackbox exporter (backup kept).',
    ],
    flow: {
      layers: [
        { label: 'Devices', nodes: ['MikroTik routers', 'OLTs'] },
        { label: 'Collect', nodes: ['Exporters (MikroTik, blackbox, PPPoE)', 'eBilling collectors + gate'] },
        { label: 'Store', nodes: ['Prometheus + Grafana'] },
        { label: 'Show', nodes: ['Network tab', 'PNG report → WhatsApp / Telegram'] },
      ],
    },
    scale: ['About 30 monitoring areas', '10+ routers and several upstream links graphed', '1,000+ ONUs with optical levels tracked'],
    outcome: [
      'A per-area report went from about 10 minutes of manual work to one chat command.',
      'Network status lives in the app NOC already uses, with history from Prometheus.',
      'Monitoring no longer competes with installs and payments when the host is under load.',
      'One source of truth for targets instead of two.',
    ],
    stack: ['Python', 'Playwright', 'Prometheus', 'Grafana', 'blackbox_exporter', 'MikroTik exporter', 'Laravel', 'React', 'Redis'],
    tags: ['Monitoring', 'Grafana', 'Playwright', 'NOC'],
    links: { repo: 'https://github.com/tiarh' },
    gallery: [
      desktop('monitoring-automation-skynet', 'monitoring-desktop-light', 'Network tab with routers online, PPPoE online, router traffic and upstream usage chart', 'Network tab: routers, PPPoE, upstream usage (demo data)'),
      desktop('monitoring-automation-skynet', 'monitoring-router-desktop-light', 'Router page with PPPoE online, download and upload rates, uplink chart and top users', 'Per-router traffic and top users'),
      desktop('monitoring-automation-skynet', 'monitoring-router-drawer-desktop-light', 'Customer usage drawer with 30-day download and upload bars', 'Per-customer 30-day usage', 900),
      mobile('monitoring-automation-skynet', 'monitoring-mobile-light', 'Network tab on a phone', 'Same view on a phone', 844),
    ],
    cv: {
      en: 'Monitoring: Playwright PNG reports to WhatsApp/Telegram, then Prometheus/Grafana with an in-app Network tab, OLT optical levels and a CPU-steal-aware job gate.',
      id: 'Monitoring: laporan PNG via Playwright ke WhatsApp/Telegram, lalu Prometheus/Grafana dengan tab Jaringan di aplikasi, redaman OLT dan gate beban CPU.',
    },
  },
  {
    slug: 'whatsapp-ops-bot',
    title: 'WhatsApp Ops Bot (scoped to one group)',
    status: 'Production',
    summary:
      'WhatsApp bot locked to one NOC group: per-area monitoring reports on command, with an allowlist, cooldowns and timeouts so it never spams.',
    role: 'Built and run it: command design, guardrails and the link to the monitoring report pipeline.',
    problem:
      'NOC coordination over chat got noisy: the same monitoring requests again and again, in different formats. A bot that answers in every group is a risk, so the automation had to be tightly scoped.',
    solution: [
      'Hard allowlist: the bot only listens and answers in one group.',
      'Command router with monitoring <area>; areas come from a config file.',
      'Cooldowns and timeouts against spam and loops.',
      'Handlers return the PNG report from the monitoring pipeline.',
      'Runs 24/7 as a service.',
    ],
    flow: {
      layers: [
        { label: 'Chat', nodes: ['NOC WhatsApp group'] },
        { label: 'Bot', nodes: ['Allowlist + command router', 'Area config'] },
        { label: 'Report', nodes: ['Playwright renderer → PNG'] },
        { label: 'Source', nodes: ['Monitoring dashboard'] },
      ],
      note: 'The PNG goes back to the same group; every other chat is ignored.',
    },
    scale: ['1 allowed group', 'About 30 monitoring areas'],
    outcome: [
      'Monitoring requests are one-line commands with the same clean format every time.',
      'The bot stays silent outside the allowed group.',
      'No more manual screenshots from the dashboard.',
    ],
    stack: ['Node.js', 'OpenClaw', 'WhatsApp', 'Playwright', 'Allowlist / cooldown'],
    tags: ['WhatsApp', 'Automation', 'Guardrails'],
    links: { repo: 'https://github.com/tiarh' },
    cv: {
      en: 'WhatsApp ops bot scoped to one NOC group: per-area monitoring reports on command with allowlist and cooldowns.',
      id: 'Bot WhatsApp ops khusus satu grup NOC: laporan monitoring per area lewat perintah, dengan allowlist dan cooldown.',
    },
  },
  {
    slug: 'pppoe-platform-mikrotik',
    title: 'ISP PPPoE Platform on MikroTik',
    status: 'Production',
    summary:
      'PPPoE baseline for an FTTH ISP: package profiles, queue tuning, PPPoE logs to the server, and forced DNS for content filtering.',
    role: 'Designed and applied the router changes, measured before and after, and kept rollback steps for each change.',
    problem:
      'Profiles had drifted: many old packages, rate limits that did not match what was sold, and queues that added latency under load. PPPoE disconnects were only in a small router log that rolled over in minutes. Content filtering could be bypassed by setting a public DNS server.',
    solution: [
      'Package clean-up at one POP group: two packages only (100 Mbps and 200 Mbps) with matching rate limits; old profiles removed; billing prices updated without touching paid invoices.',
      'Queue tuning: interface queues switched to multi-queue (TX queue drops went to zero); per-customer queues moved from SFQ to fq_codel on a trial profile first.',
      'Router clock fixed (NTP) so logs and app data line up.',
      'PPPoE logs (connect, disconnect, auth errors) sent by syslog to the billing server, with a firewall rule limiting who can send.',
      'Forced DNS: customer port-53 traffic redirected to the ISP resolver, with an exception list and a netwatch rule that turns the redirect off if the resolver goes down.',
      'Tried blocking DoT/DoH too; rolled that part back after Android "Private DNS" users started flapping, and documented the trade-off.',
      'Every rule carries a comment tag so the whole change can be disabled in one command.',
    ],
    flow: {
      layers: [
        { label: 'Customer', nodes: ['ONU / home router'] },
        { label: 'POP router', nodes: ['PPPoE server', 'Profiles + fq_codel queues'] },
        { label: 'Policy', nodes: ['NAT: DNS redirect', 'Netwatch failover'] },
        { label: 'Servers', nodes: ['ISP DNS resolver', 'Syslog → billing server'] },
      ],
    },
    scale: ['1,000+ PPPoE sessions on the main router', 'Hundreds of DNS queries per second redirected', '2 package tiers on the cleaned-up POP group'],
    outcome: [
      'Packages, router profiles and invoices match.',
      'No TX queue drops on uplink and OLT ports after the queue change.',
      'PPPoE events are stored and searchable instead of lost after minutes.',
      'Content filtering works even when customers set a public DNS, with no single point of failure.',
    ],
    stack: ['MikroTik RouterOS 7', 'PPPoE', 'Simple queues', 'fq_codel', 'Firewall NAT/filter', 'Netwatch', 'Syslog', 'NTP'],
    tags: ['MikroTik', 'PPPoE', 'QoS', 'DNS'],
    cv: {
      en: 'PPPoE baseline on MikroTik: 100/200 Mbps package profiles, multi-queue + fq_codel tuning, PPPoE syslog, forced DNS with failover.',
      id: 'Baseline PPPoE di MikroTik: profil paket 100/200 Mbps, tuning multi-queue + fq_codel, syslog PPPoE, force-DNS dengan failover.',
    },
  },
  {
    slug: 'dual-wan-failover-pcc',
    title: 'Dual-Upstream Load Balancing & Failover (PCC + Recursive)',
    status: 'Production',
    summary:
      'PCC load balancing over two metro-Ethernet upstreams with recursive failover; fixed broken WhatsApp calls by changing how sessions are pinned.',
    role: 'Found the cause of the call problem, proposed the fix with rollback values, and verified it after it was applied.',
    problem:
      'Upstream links flap, so failover has to be automatic. After load balancing was in place, customers reported WhatsApp voice and video calls stuck on "Connecting". The PCC rule split traffic per connection, so one customer could leave through two public addresses at once, which breaks call setup.',
    solution: [
      'Recursive routes with a health check per upstream; the backup path takes over when a check fails.',
      'PCC changed from both-addresses to src-address, so all traffic from one customer stays on one upstream.',
      'UDP connection-tracking timeout raised from 10 s to 30 s so call sessions are not dropped between packets.',
      'Health-check target moved to a host that answers reliably, to avoid false failovers.',
      'Test scenarios and rollback values written down before the change.',
    ],
    flow: {
      layers: [
        { label: 'Customers', nodes: ['PPPoE subscribers'] },
        { label: 'Edge', nodes: ['Mangle: PCC by source address'] },
        { label: 'Routing', nodes: ['Table A → Upstream A', 'Table B → Upstream B'] },
        { label: 'Checks', nodes: ['Recursive health check'] },
      ],
      note: 'When an upstream check fails, its table falls back to the other upstream.',
    },
    scale: ['2 metro-Ethernet upstreams, multi-gigabit total', '1,000+ customers behind the router'],
    outcome: [
      'WhatsApp call complaints stopped after the PCC change.',
      'Failover happens automatically when an upstream drops.',
      'Fewer false failovers after changing the health-check target.',
    ],
    stack: ['MikroTik RouterOS', 'PCC', 'Mangle', 'Recursive routing', 'Connection tracking', 'Netwatch'],
    tags: ['Routing', 'Failover', 'PCC', 'MikroTik'],
    cv: {
      en: 'Dual-upstream PCC + recursive failover; fixed broken WhatsApp calls (PCC src-address, UDP timeout).',
      id: 'Load balancing PCC dua upstream + failover rekursif; memperbaiki panggilan WhatsApp macet (PCC src-address, UDP timeout).',
    },
  },
  {
    slug: 'skynet-infra-dashboard',
    title: 'ODP/ODC Deployment Tracker',
    status: 'Production',
    summary:
      'Web app that replaced a shared spreadsheet for daily ODP/ODC installation progress: per-team entries, progress against target, charts and Excel export.',
    role: 'Built and deployed it, including the data model, the Excel export format and the login model.',
    problem:
      'Daily progress of ODP and ODC installs was tracked in an Excel file passed between teams. Totals, cumulative numbers and progress against target were calculated by hand, and the file was easy to break or lose.',
    solution: [
      'Overview page with summary cards, progress bars, line charts and per-team rollups.',
      'Daily entry page with a form that fills context automatically and a table with sticky columns.',
      'Daily totals, cumulative totals, progress against target and days left are calculated, not typed.',
      'One-click Excel export with multiple sheets in the same layout as the old report.',
      'Read-only view for everyone; every write needs an admin login.',
      'Runs as one container; SQLite for small setups, MariaDB in production.',
    ],
    flow: {
      layers: [
        { label: 'Users', nodes: ['Viewer (read-only)', 'Admin (login)'] },
        { label: 'Front end', nodes: ['Vue 3 SPA'] },
        { label: 'Back end', nodes: ['Express API', 'Excel export (SheetJS)'] },
        { label: 'Data', nodes: ['SQLite / MariaDB'] },
      ],
    },
    scale: ['Several installation teams tracked per day', 'Hundreds of ODP/ODC entries'],
    outcome: [
      'One shared source for progress instead of copies of a spreadsheet.',
      'Reports export in the format management already uses.',
      'Totals always match because they are calculated.',
    ],
    stack: ['Vue 3', 'Vite', 'Tailwind CSS', 'Chart.js', 'SheetJS', 'Node.js', 'Express', 'SQLite', 'MariaDB', 'Docker'],
    tags: ['Vue', 'Express', 'Dashboard', 'FTTH'],
    gallery: [
      desktop('skynet-infra-dashboard', 'kpi-charts-desktop', 'Project KPIs with target, installed, homepass and remaining work, per-team recap and cumulative ODP / ODC charts', 'KPIs, per-team recap and cumulative charts (demo data)', 1220),
      desktop('skynet-infra-dashboard', 'daily-entry-desktop', 'Daily entry form with ODP and ODC counts per team and the daily history table', 'Daily entry per team with history table', 1398),
      desktop('skynet-infra-dashboard', 'asset-list-desktop', 'Network asset list of ODC and ODP with area, status and port usage', 'Asset list: ODC / ODP, status, port usage'),
      mobile('skynet-infra-dashboard', 'dashboard-mobile', 'Dashboard on a phone with active area, target and installed count', 'Same dashboard on a phone', 1130),
    ],
    cv: {
      en: 'ODP/ODC deployment tracker (Vue + Express) replacing a shared spreadsheet, with charts and Excel export.',
      id: 'Pelacak progres pemasangan ODP/ODC (Vue + Express) pengganti spreadsheet bersama, dengan grafik dan export Excel.',
    },
  },
];
