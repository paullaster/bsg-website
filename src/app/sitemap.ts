import type { MetadataRoute } from 'next';

import { LAST_UPDATED, SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(LAST_UPDATED),
      changeFrequency: 'monthly',
      priority: 1,
      images: [`${SITE_URL}/qsell/qsell-dashboard-overview.avif`],
    },
  ];
}
