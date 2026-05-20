import type { SVGProps } from "react"

import { cn } from "@obvia/utilities"

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
 * <Tumblr />
 *
 * // Advanced
 * <Tumblr className="size-6" />
 * ```
 */
export function Tumblr({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={cn("w-auto", className)} {...props}>
      <g fill="currentColor">
        <path d="M18.5,30c-4.211,0-7.349-2.166-7.349-7.349V14.35h-3.827v-4.495c4.211-1.094,5.972-4.717,6.175-7.856h4.373v7.127h5.102v5.224h-5.102v7.228c0,2.166,1.094,2.915,2.834,2.915h2.47v5.507h-4.677Z"></path>
      </g>
    </svg>
  )
}
