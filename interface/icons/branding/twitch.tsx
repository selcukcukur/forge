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
 * <Twitch />
 *
 * // Advanced
 * <Twitch className="size-6" />
 * ```
 */
export function Twitch({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={cn("w-auto", className)} {...props}>
      <g className="nc-icon-wrapper" fill="currentColor">
        <path d="M8.5,2L3.143,7.357V26.643h6.429v5.357l5.357-5.357h4.286l9.643-9.643V2H8.5ZM26.714,15.929l-4.286,4.286h-4.286l-3.75,3.75v-3.75h-4.821V4.143H26.714V15.929Z"></path>
        <path d="M21.357 7.893H23.5V14.322H21.357z"></path>
        <path d="M15.464 7.893H17.607V14.322H15.464z"></path>
      </g>
    </svg>
  )
}
