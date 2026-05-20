import type { MetadataRoute } from "next"

import { headers } from "next/headers"

/**
 * Produces a static sitemap entry for the current domain
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Read incoming request headers (Next.js server context)
  const headersList = await headers()

  // Extract the "host" header from the request (e.g. "selcukcukur.me" or "selcukcukur.me")
  let domain = headersList.get('host') as string

  // Default sitemap entry → root domain only
  return [
    { url: `https://${domain}`,  lastModified: new Date() }
  ]
}
