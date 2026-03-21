import type { ReactNode } from "react"

/**
 * Type definition for social media account
 */
export type SocialAccount = {
  // Account target (e.g. "Facebook")
  name?: string
  // Icon component or icon name (e.g. "ph:facebook-logo-duotone")
  icon?: ReactNode | string
  // Social media account URL
  href?: string
}
