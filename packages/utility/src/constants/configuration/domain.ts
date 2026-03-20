import { APP_ENV, APP_HOST } from "@workspace/utility"

/**
 * The domain name of the **web**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string used for routing, client-server communication, and environment-specific configuration
 *
 * **Value**
 * - `protocol://[domain]` - for production environment
 * - `protocol://preview.[domain]` - for preview environment
 * - `protocol://selcukcukur.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Build a link to a custom web page
 * const webCustomHref = new URL("/onboarding/step", WEB_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", WEB_DOMAIN)
 *
 * // Logging the current environment domain
 * console.log("Current web domain:", WEB_DOMAIN)
 * ```
 */
export const WEB_DOMAIN =
  APP_ENV === "production"
    ? `https://${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://preview.${APP_HOST}`
      : `https://${APP_HOST}`

/**
 * Collection of all application domain constants, dynamically resolved based on the current environment.
 *
 * **Syntax**
 * - `string[]` – An array of valid domain strings used for routing, client-server communication, and environment-specific configuration.
 *
 * **Value**
 * - `protocol://[*]` – for production environment
 * - `protocol://*-preview.[*]` – for preview environment
 * - `protocol://*` – for development environment
 *
 * **Usage**
 * ```ts
 * // Checking if the current host is allowed to access the application
 * const currentHost = window.location.origin
 *
 * // If the current host is allowed, proceed with the rest of the logic
 * if (DOMAINS.includes(currentHost)) {
 *   // The current host is allowed, so we can proceed with the rest of the logic
 *   console.log("Valid domain:", currentHost)
 * } else {
 *   // The current host is not allowed, so we should redirect the user to a valid domain
 *   console.warn("Invalid domain:", currentHost)
 * }
 *
 * // API request validation: ensure the target URL starts with an allowed domain
 * function isAllowedDomain(url: string) {
 *   // Check if the URL starts with one of the allowed domains
 *   return DOMAINS.some(domain => url.startsWith(domain))
 * }
 *
 * // Checking if a given URL is allowed to access the application
 * console.log(isAllowedDomain("https://selcukcukur.me")) // true
 *
 * // Environment-based redirect: choose the correct domain depending on environment
 * const redirectDomain =
 *   process.env.NODE_ENV === "production"
 *     ? "https://selcukcukur.me"
 *     : "https://selcukcukur.dev"
 *
 * // Redirect the user to the correct domain
 * window.location.href = redirectDomain
 *
 * // Checking if a given preview domain is valid
 * const previewDomain = "https://preview.selcukcukur.me"
 *
 * // Check if the preview domain is valid
 * if (DOMAINS.includes(previewDomain)) {
 *   // The preview domain is valid, so we can proceed with the rest of the logic
 *   console.log("Preview domain is valid:", previewDomain)
 * }
 * ```
 */
export const DOMAINS: readonly Domain[] = [
  WEB_DOMAIN
] as const

/**
 * The type of all application domain constants
 */
export type Domain = typeof WEB_DOMAIN
