export async function GET({ site }) {
  const base = (site?.toString() || 'https://tiarh.github.io').replace(/\/$/, '');
  const urls = [
    '/',
    '/projects',
    '/projects/pppoe-platform-mikrotik',
    '/projects/dual-wan-failover-pcc',
    '/projects/monitoring-automation-skynet',
    '/projects/whatsapp-ops-bot',
    '/blog',
    '/blog/pppoe-pcq-mikrotik',
    '/blog/dual-wan-recursive',
    '/blog/monitoring-automation-playwright',
    '/rss.xml',
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${base}${u}</loc></url>`).join('\n') +
    `\n</urlset>\n`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
