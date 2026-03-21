import type { JSX } from "react"

/**
 * Type definition for social media account
 */
export type SocialAccount = {
  // Account target (e.g. "Facebook")
  name?: string
  // Icon component or icon name (e.g. "ph:facebook-logo-duotone")
  icon?: JSX | string
  // Social media account URL
  href?: string
}
