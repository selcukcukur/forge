import type { SocialAccount } from "@library/type/site"

import {
  Facebook,
  Github,
  Instagram,
  Twitter,
  YouTube,
  Linkedin,
  Rss
} from "@interface/icons"

/**
 * Company social media accounts list
 *
 * **Syntax**
 * - `name` - Social media account name
 * - `icon` - Icon component or social media icon identifier
 * - `href` - Social media account URL
 *
 * **Usage**
 * ```tsx
 * // Import social accounts from the site configuration file
 * import { socialAccounts } from "@config/site"
 *
 * // Map social accounts to React components
 * {socialAccounts.map(({ name, icon, href }) => (
 *   // Render an anchor tag with an iconified version of the account's icon'
 *   <a key={name} href={href}>
 *     // Iconify the icon component or icon name
 *     <icon />
 *   </a>
 * ))}
 * ```
 */
export const socialAccounts: SocialAccount[] = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/selcukcukur",
    slug: "@selcukcukur"
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    href: "https://x.com/selcukcukur",
    slug: "@selcukcukur"
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/selcukcukur",
    slug: "@selcukcukur"
  },
  {
    name: "YouTube",
    icon: YouTube,
    href: "https://youtube.com/@selcukcukur",
    slug: "@selcukcukur"
  },
  {
    name: "Linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/selcukcukur",
    slug: "@selcukcukur"
  },
  {
    name: "Github",
    icon: Github,
    href: "https://github.com/selcukcukur",
    slug: "@selcukcukur"
  },
  {
    name: "E-Mail",
    icon: Github,
    href: "mailto:hello@selcukcukur.me",
    slug: "hello@selcukcukur.me"
  },
  {
    name: "RSS",
    icon: Rss ,
    href: "mailto:hello@selcukcukur.me"
  }
] as const
