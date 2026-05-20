import {
  type NextFetchEvent,
  type NextRequest,
  NextResponse
} from "next/server"

import { APP_LOCALE, HOSTNAMES, parseRequest, resolveProxy } from "@obvia/utilities/next"
import { proxyConfig } from "@library/proxy/config"

/** Proxy configuration */
export const config = {
  /**
   * Path matcher configuration
   *
   * **Paths**
   * - `/api/*` → exclude server endpoints
   * - `/_next/*` → exclude next.js internals
   * - `/_proxy/*` → exclude third‑party paths
   * - `favicon.ico` → exclude favicon
   * - `sitemap.xml` → exclude sitemap
   * - `robots.txt` → exclude robots file
   */
  matcher : ["/((?!api/|_next/|_proxy/|favicon.ico|sitemap.xml|robots.txt|manifest.webmanifest).*)"]
}

/**
 * Root middleware for handling all incoming requests
 *
 * **Parameters**
 * - `request` — Next.js incoming request object (used for request inspection and manipulation)
 * - `event` — Next.js fetch event (used for background tasks and async handling)
 *
 * **Usage**
 * ```ts
 * export async function sryliusProxy(request, event, context) {
 *   // Internally rewrite the request to serve content from `/srylius.com{fullPath}`
 *   return NextResponse.rewrite(new URL(`/srylius.com{fullPath}`, request.url))
 * }
 * ```
 */
export default async function proxy(request: NextRequest, event: NextFetchEvent) {
  // Parse the incoming request to extract host, path, and subdomain information
  const context = await parseRequest<NextRequest, NextResponse>(request, {
    defaultLocale     : APP_LOCALE,
    supportedLocales  : new Set([]),
    hostnames         : HOSTNAMES
  })

  // Resolve middleware based on parsed request metadata
  return resolveProxy(request, event, context, proxyConfig)
}