import type { NextRequest } from "next/server"

import { APP_LOCALE, APP_LOCALES, HOSTNAMES } from "@obvia/utilities/next"

export interface RequestContext {
  /** Workspace slug if applicable (on app subdomain) */
  workspace?: string
  /** Locale code if detected from the first path segment */
  locale?: string
  /** The normalized domain name extracted from the request */
  domain: string
  /** Flag indicating whether the workspace slug was derived from a subdomain */
  subdomain: boolean
  /** The pathname portion of the URL (locale/workspace removed) */
  path: string
  /** The full path including locale and query string */
  fullPath: string
  /** Query parameters represented as an object */
  query: Record<string, string>
  /** Raw query string including the leading "?" if present */
  queryRaw: string
}

/**
 * Parse a next.js request into structured metadata
 *
 * **Parameter**
 * - `request` - The next request object provided by next.js proxy or route handlers
 *
 * **Usage**
 * ```ts
 * // Parse the incoming request
 * const {
 *   response,
 *   locale,
 *   workspace,
 *   domain,
 *   path,
 *   fullPath,
 *   query,
 *   queryRaw
 * } = parse(request)
 *
 * // Normalized domain (selcukcukur.me)
 * console.log(domain)
 *
 * // Full path only (/tr/selcukcukur/dashboard?query=value)
 * console.log(fullPath)
 *
 * // Locale only (tr)
 * console.log(locale)
 *
 * // Workspace only (selcukcukur)
 * console.log(workspace)
 *
 * // Pathname only (/dashboard)
 * console.log(path)
 *
 * // Query parameters as an object "{ last_workspace: "selcukcukur" }"
 * console.log(query)
 *
 * // Raw query string "?last_workspace=selcukcukur"
 * console.log(queryRaw)
 * ```
 */
export function parse(request: NextRequest): RequestContext {
  // Normalize domain
  const domain = (request.headers.get("host") ?? "")
    .replace(/^www\./, "")
    .toLowerCase()

  // Resolve effective URL
  const url = new URL(request.nextUrl.toString())

  // Parse segments (locale, workspace, pathname, subdomain)
  const { locale, workspace, pathname, subdomain } = parseSegment(url.pathname, domain)

  // Parse query parameters
  const { query, queryRaw } = parseQuery(url)

  // Construct full path including locale, workspace, and query string
  const fullPath = !subdomain
    ? `${url.pathname}${queryRaw}`
    : `/${workspace}${pathname}${queryRaw}`

  return {
    locale    : locale,
    workspace : workspace,
    domain    : domain,
    subdomain : subdomain,
    path      : pathname,
    fullPath  : fullPath,
    query     : query,
    queryRaw  : queryRaw
  } as RequestContext
}

/**
 * Parse URL segments into locale, workspace, normalized pathname, and subdomain flag
 *
 * **Parameters**
 * - `path`    - The raw pathname string from the URL (e.g., "/tr/selcukcukur/dashboard")
 * - `domain`  - The normalized domain string (e.g., "app.selcukcukur.me" or "team1.selcukcukur.me")
 *
 * **Usage**
 * ```ts
 * // Parse target request segment
 * const { locale, workspace, pathname, subdomain } =
 *   parseSegment("/tr/selcukcukur/dashboard", "app.selcukcukur.me")
 *
 * // Locale only (tr)
 * console.log(locale)
 *
 * // Workspace (selcukcukur)
 * console.log(workspace)
 *
 * // Path (/dashboard)
 * console.log(pathname)
 *
 * // Subdomain flag (false in this case, true if workspace came from subdomain)
 * console.log(subdomain)
 * ```
 */
function parseSegment(path: string, domain: string): {
  locale: string
  workspace: string
  pathname: string
  subdomain: boolean
} {
  // Split the incoming path into segments (remove empty parts)
  const segments = path.split("/").filter(Boolean)

  // Default locale is the application-wide locale
  let locale = APP_LOCALE

  // Workspace slug, initially empty
  let workspace = ""

  // Pathname starts as the original path
  let pathname = path

  // Flag to indicate whether the workspace was derived from a subdomain
  let subdomain = false

  // If the first segment matches one of the supported locales, treat it as a locale
  if (segments.length > 0 && segments[0] && APP_LOCALES.has(segments[0])) {
    // Override the default locale with the detected one
    locale = segments[0]

    if (domain.startsWith("app.")) {
      // On app.* subdomains, the second segment is always the workspace slug
      workspace = segments[1] ?? ""

      // Remove locale and workspace from the pathname
      pathname = "/" + segments.slice(2).join("/")
    } else {
      if (! HOSTNAMES.has(domain)) {
        // Extract subdomain parts (e.g., team1.sirket.io → ["team1","sirket","io"])
        const sub = domain.split(".")

        // Use the first part of the domain as workspace slug if available
        workspace = sub[0] && sub[0] !== "www" ? sub[0] : ""

        // Mark that the workspace came from a subdomain
        subdomain = true
      }

      // On non-app domains, only remove the locale from the pathname
      pathname = "/" + segments.slice(1).join("/")
    }

    // Handle the case where pathname becomes empty after slicing
    if (pathname === "/") pathname = "/"
  }

  // Return parsed values: locale, workspace slug, cleaned pathname, and subdomain flag
  return { locale, workspace, pathname, subdomain }
}

/**
 * Parse query parameters from a URL into structured metadata
 *
 * **Parameter**
 * - `url` - The resolved URL object containing search parameters
 *
 * **Usage**
 * ```ts
 * // Create a new URL instance
 * const { query, queryRaw } = parseQuery(
 *   new URL("https://selcukcukur.me/?query=value")
 * )
 *
 * // Query object ({ query: "value" })
 * console.log(query)
 *
 * // Query raw "?query=value"
 * console.log(queryRaw)
 * ```
 */
export function parseQuery(url: URL): {
  query: Record<string, string>
  queryRaw: string
} {
  // Convert search parameters to a raw string (without leading "?")
  const parameters = url.searchParams.toString()

  // Transform search parameters into a key-value object
  const query = Object.fromEntries(url.searchParams)

  // Add leading "?" if parameters exist, otherwise return an empty string
  const queryRaw = parameters.length > 0 ? `?${parameters}` : ""

  // Return both structured and raw query representations
  return { query, queryRaw }
}
