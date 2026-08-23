export type Project = {
  slug: string;
  title: string;
  status: 'Case study' | 'Automation' | 'Production';
  tags: string[];
  description: string;
  highlights: string[];
  metrics?: string[];
  links?: {
    repo?: string;
    demo?: string;
  };
  caseStudy: {
    problem: string;
    solution: string;
    outcome: string;
    stack: string[];
  };
};

export const PROJECTS: Project[] = [
  {
    slug: 'pppoe-platform-mikrotik',
    title: 'ISP PPPoE Platform (MikroTik)',
    status: 'Case study',
    tags: ['MikroTik', 'PPPoE', 'PCQ', 'QoS'],
    description:
      'PPPoE server design + bandwidth profiles (PCQ), queue/limits, and deployment SOP. Focused on stability, safety, and operability.',
    highlights: [
      'PPPoE profiles & rate limits (PCQ)',
      'Queue parent strategy + basic anti-abuse',
      'Sanitized config snippets + test checklist',
    ],
    caseStudy: {
      problem:
        'PPPoE operations at small/mid-size ISPs often drift into chaos: inconsistent profiles, piled-up queues, slow troubleshooting, and config changes that are hard to audit.',
      solution:
        'Built a repeatable PPPoE configuration baseline: templates, PCQ profiles, parent-queue strategy, plus a pre-release test checklist.',
      outcome:
        'Faster deployments, cleaner configs, and a shared SOP the team uses for both provisioning and troubleshooting.',
      stack: ['MikroTik RouterOS', 'PPPoE', 'PCQ', 'Queues', 'SOP/Runbook'],
    },
  },
  {
    slug: 'dual-wan-failover-pcc',
    title: 'Dual-WAN Failover & Load Balancing (PCC + Recursive)',
    status: 'Case study',
    tags: ['Routing', 'Failover', 'PCC', 'MikroTik'],
    description:
      'Multi-WAN implementation with health checks, recursive routing for failover, and PCC for traffic distribution.',
    highlights: [
      'Recursive route failover + health check',
      'PCC policy routing',
      'Before/after + test scenarios',
    ],
    caseStudy: {
      problem:
        'ISP uplinks flap. Without proper failover, customers get constant disconnects and trouble tickets pile up.',
      solution:
        'Applied recursive routing for failover + PCC for load distribution, complete with test scenarios.',
      outcome:
        'Smoother switching and fewer total-outage incidents because the backup path activates automatically.',
      stack: ['MikroTik RouterOS', 'PCC', 'Recursive Routing', 'Netwatch/Healthcheck'],
    },
  },
  {
    slug: 'monitoring-automation-skynet',
    title: 'Monitoring Automation (Skynet Ping Monitoring)',
    status: 'Production',
    tags: ['Playwright', 'Reporting', 'NOC', 'Automation'],
    description:
      'Auto-generated per-area reports (DOWN/UP excluding isolir) + last active, output as an image ready to send to WA/Telegram.',
    highlights: ['Exclude ISOLIR rows', 'Sampling to catch flapping downs', 'HTML → Image report', 'Cron refresh'],
    metrics: ['Manual reporting ~10 menit → via chat (on-demand)', 'Coverage: 28 monitoring areas', 'Ops scale: 20+ devices managed'], 
    links: { repo: 'https://github.com/tiarh' },
    caseStudy: {
      problem:
        'NOC needed fast per-area snapshots (DOWN/UP excluding isolir) for incident response. The old flow was manual: open dashboard, filter area, screenshot, send to group. Slow — and easy to miss while links flap.',
      solution:
        'Built an automated pipeline: Playwright login → scrape per-area tables → normalize (exclude ISOLIR) → render HTML → screenshot PNG → deliver to WhatsApp/Telegram. Plus a `monitoring <area>` chat command for on-demand pulls and a cron schedule for periodic reports.',
      outcome:
        'Previously ~10 minutes (open laptop → filter → screenshot → send). Now a single chat trigger away — fast and consistent. NOC gets repeatable snapshots for triage, and group communication is cleaner (same format, quick to read).',
      stack: ['Python', 'Playwright', 'HTML/CSS template', 'Cron/systemd', 'WhatsApp/Telegram'],
    },
  },
  {
    slug: 'whatsapp-ops-bot',
    title: 'WhatsApp Ops Bot (Scoped to 1 group)',
    status: 'Production',
    tags: ['WhatsApp', 'OpenClaw', 'Node.js', 'Guardrails'],
    description:
      'WhatsApp bot scoped to one group for per-area monitoring + ops chat. Allowlist, anti-loop, and a `monitoring AREA` command.',
    highlights: ['Hard allowlist group', 'Monitoring via areas.json', 'Anti-spam + timeouts', 'Scoped ops commands'],
    metrics: ['Guardrails: allowlist 1 grup + cooldown', 'Faster triage: `monitoring <area>`', 'Coverage: 28 monitoring areas'], 
    links: { repo: 'https://github.com/tiarh' },
    caseStudy: {
      problem:
        'NOC coordination over chat gets noisy: repeated monitoring requests, inconsistent formats, and the risk of a bot "going rogue" if it responds to every group. The automation needed to be safe and tightly controlled.',
      solution:
        'Built a scoped WhatsApp bot: hard allowlist for a single group, command router (`monitoring <area>`), cooldown/timeouts to prevent spam, and handlers that produce PNG reports from the monitoring pipeline. Focus on guardrails and reliability (runs 24/7).',
      outcome:
        'Monitoring requests became one-line commands with clean results. The bot stays silent outside the allowed group, and the team works faster without manual screenshots/dashboard checks.',
      stack: ['Node.js', 'OpenClaw', 'WhatsApp integration', 'Guardrails (allowlist/cooldown)', 'Playwright reports'],
    },
  },
];
