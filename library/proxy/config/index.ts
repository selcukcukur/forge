import {
  WEB_HOSTNAMES,
  type ProxyConfig,
} from "@obvia/utilities/next"

import {
  webProxy
} from "@library/proxy"

/**
 * Configurations registry for domain → proxy routing
 */
export const proxyConfig: ProxyConfig[] = [
  { name: "Web", hostnames: WEB_HOSTNAMES, proxy: webProxy },
]