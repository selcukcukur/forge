import type { SVGProps } from "react"

import { cn } from "@workspace/utility"

/**
 * Render an icon component with customizable sizing and styling
 *
 * **Props**
 * - `className` – Optional css class styles for sizing/styling
 * - `props` – All other native svg props are forwarded
 *
 * **Usage**
 * ```tsx
 * // Basic
 * <Rss />
 *
 * // Advanced
 * <Rss className="size-6" />
 * ```
 */
export function Rss({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={cn("w-auto", className)} {...props}>
      <g fill="currentColor">
        <circle cx="6.566" cy="25.434" r="3.566"></circle>
        <path d="M20.234,29h-5.051c0-6.728-5.454-12.183-12.183-12.183h0v-5.051c9.518,0,17.234,7.716,17.234,17.234Z"></path>
        <path d="M23.8,29c0-11.488-9.312-20.8-20.8-20.8V3c14.359,0,26,11.641,26,26h-5.2Z"></path>
      </g>
    </svg>
  )
}
