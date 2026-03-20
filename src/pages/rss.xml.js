import rss from '@astrojs/rss';

const modules = import.meta.glob('../content/blog/*.md', { eager: true });

export async function GET(context) {
  const posts = Object.entries(modules)
    .map(([file, p]) => ({
      url: `/blog/${file.split('/').pop().replace(/\.md$/, '')}`,
      frontmatter: p.frontmatter,
    }))
    .filter((p) => !p.frontmatter?.draft)
    .sort((a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf());

  return rss({
    title: 'Ikhtiar Hidayatullah — Blog',
    description: 'Catatan teknis: MikroTik, PPPoE, routing, automation.',
    site: context.site ?? 'https://tiarh.github.io',
    items: posts.map((p) => ({
      title: p.frontmatter.title,
      pubDate: new Date(p.frontmatter.pubDate),
      description: p.frontmatter.description,
      link: p.url,
    })),
  });
}
