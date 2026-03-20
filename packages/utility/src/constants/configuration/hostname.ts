import { APP_HOST } from "@workspace/utility"

/**
 * A set of allowed hostnames for **web** access, used for domain validation
 *
 * **Syntax**
 * - `Set<string>` – A collection of valid hostnames that the application may recognize or respond to
 *
 * **Value**
 * - `[domain]` - for production environment
 * - `preview.[domain]` - for preview environment
 * - `selcukcukur.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Check if the request originated from a valid hostname
 * if (WEB_HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return webProxy(request)
 * }
 * ```
 */
export const WEB_HOSTNAMES = new Set([
    `${APP_HOST}`,
    `preview.${APP_HOST}`
])

/**
 * A set of allowed hostnames for access, used for domain validation
 *
 * **Syntax**
 * - `Set<string>` – A collection of valid hostnames that the application may recognize or respond to
 *
 * **Value**
 * - `[domain]` - for production environment
 * - `preview.[domain]` - for preview environment
 * - `*.selcukcukur.dev` - for development environment
 *
 * **Usage**
 * ```ts
 * // Check if the request originated from a valid hostname
 * if (HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return webProxy(request)
 * }
 * ```
 */
export const HOSTNAMES = new Set([
    ...WEB_HOSTNAMES
])
