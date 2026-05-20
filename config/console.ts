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
export const consoleCommands = [
  {
    name    : "list",
    group   : "core",
    content : [
      { name: "about", category: "info", description: "Detailed information about me" },
      { name: "experiences", category: "info", description: "Past work experiences" },
      { name: "education", category: "info", description: "Education background" },
      { name: "clear", category: "system", description: "Clear the terminal screen" },
      { name: "help", category: "system", description: "Show available commands" },
    ],
    options : [
      { name: "group", argument: true, description: "string" }
    ]
  }
] as const
