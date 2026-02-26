import type { APIContext } from 'astro';

interface SitemapEntry {
  url: string;
  date?: Date;
  changefreq: string;
  priority: number;
}

export async function GET(context: APIContext) {
  const { site } = context;
  const siteUrl = site ?? new URL('https://athallarizky.github.io/');

  // Static pages
  const pages: SitemapEntry[] = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/about/', changefreq: 'monthly', priority: 0.8 },
  ];

  // Get all blog posts
  const { getCollection } = await import('astro:content');
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const postEntries: SitemapEntry[] = posts.map((post) => ({
    url: `/blog/${post.slug}/`,
    date: post.data.pubDate,
    changefreq: 'monthly',
    priority: 0.7,
  }));

  const allEntries = [...pages, ...postEntries];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map(
    (entry) => `  <url>
    <loc>${siteUrl}${entry.url.slice(1)}</loc>
    ${entry.date ? `<lastmod>${entry.date.toISOString()}</lastmod>` : ''}
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
