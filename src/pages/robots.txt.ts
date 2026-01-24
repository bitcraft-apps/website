import type { APIRoute } from 'astro';
import { getSiteUrl } from '../consts';

export const GET: APIRoute = () => {
  const siteUrl = getSiteUrl();

  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap-index.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
