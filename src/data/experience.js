---
export const EXPERIENCE = [
  {
    period: "2023 — Present",
    role: "Network Operations Center (NOC)",
    company: "Skynet ISP",
    location: "Malang, Indonesia",
    description: "Handle day-to-day ISP operations: PPPoE provisioning, bandwidth management, routing optimization, and incident response.",
    highlights: [
      "Reduced average incident response time by 40% through automation",
      "Built monitoring automation generating 100+ daily reports",
      "Maintained 99.5% network uptime across 28 service areas",
    ],
  },
  {
    period: "2021 — 2023",
    role: "Junior Network Engineer",
    company: "Local ISP",
    location: "Indonesia",
    description: "Started with basic MikroTik administration and gradually took on more complex routing and automation tasks.",
    highlights: [
      "Configured and maintained 50+ MikroTik routers",
      "Implemented PPPoE authentication system",
      "Created documentation and SOPs for common tasks",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    name: "MTCRE (MikroTik Certified Routing Engineer)",
    issuer: "MikroTik",
    year: "2024",
  },
  {
    name: "MTCNA (MikroTik Certified Network Associate)",
    issuer: "MikroTik", 
    year: "2023",
  },
];

export const TOOLS = [
  {
    name: "monitoring-report-generator",
    description: "Generate WhatsApp-ready monitoring reports from Skynet Ping Monitoring",
    tags: ["Python", "Playwright", "Automation"],
    github: "https://github.com/tiarh",
  },
  {
    name: "mikrotik-backup-automation",
    description: "Automated MikroTik config backup with Telegram notifications",
    tags: ["Python", "MikroTik API", "Telegram"],
    github: "https://github.com/tiarh",
  },
  {
    name: "whatsapp-ops-bot",
    description: "Scoped WhatsApp bot for NOC operations with monitoring commands",
    tags: ["Node.js", "whatsapp-web.js", "OpenClaw"],
    github: "https://github.com/tiarh",
  },
];
