import type { MetadataRoute } from "next"

import { headers } from "next/headers"

/**
 * Dynamically builds crawl rules and sitemap URL based on current domain
 */
export default async function robots(): Promise<MetadataRoute.Robots> {
  // Get request headers to determine the current host/domain
  const headersList = await headers()

  // Extract the current request's host header as a string (e.g. "sirket.io")
  const domain = headersList.get('host') as string

  return {
    // Allow all user agents (search engine bots) to crawl the entire site
    rules   : [{  userAgent: "*", allow: "/" }],

    // Dynamically set sitemap URL based on current domain
    sitemap : `https://${domain}/sitemap.xml`,
  }
}
