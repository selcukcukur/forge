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
 * <Slack />
 *
 * // Advanced
 * <Slack className="size-6" />
 * ```
 */
export function Slack({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={cn("w-auto", className)} {...props}>
      <g className="nc-icon-wrapper" fill="currentColor"><path d="M8.463,19.43c0,1.503-1.228,2.731-2.731,2.731s-2.731-1.228-2.731-2.731,1.228-2.731,2.731-2.731h2.731v2.731Z"></path>
        <path d="M9.839,19.43c0-1.503,1.228-2.731,2.731-2.731s2.731,1.228,2.731,2.731v6.839c0,1.503-1.228,2.731-2.731,2.731s-2.731-1.228-2.731-2.731c0,0,0-6.839,0-6.839Z"></path>
        <path d="M12.57,8.463c-1.503,0-2.731-1.228-2.731-2.731s1.228-2.731,2.731-2.731,2.731,1.228,2.731,2.731v2.731h-2.731Z"></path>
        <path d="M12.57,9.839c1.503,0,2.731,1.228,2.731,2.731s-1.228,2.731-2.731,2.731H5.731c-1.503,0-2.731-1.228-2.731-2.731s1.228-2.731,2.731-2.731c0,0,6.839,0,6.839,0Z"></path>
        <path d="M23.537,12.57c0-1.503,1.228-2.731,2.731-2.731s2.731,1.228,2.731,2.731-1.228,2.731-2.731,2.731h-2.731v-2.731Z"></path>
        <path d="M22.161,12.57c0,1.503-1.228,2.731-2.731,2.731s-2.731-1.228-2.731-2.731V5.731c0-1.503,1.228-2.731,2.731-2.731s2.731,1.228,2.731,2.731v6.839Z"></path>
        <path d="M19.43,23.537c1.503,0,2.731,1.228,2.731,2.731s-1.228,2.731-2.731,2.731-2.731-1.228-2.731-2.731v-2.731h2.731Z"></path>
        <path d="M19.43,22.161c-1.503,0-2.731-1.228-2.731-2.731s1.228-2.731,2.731-2.731h6.839c1.503,0,2.731,1.228,2.731,2.731s-1.228,2.731-2.731,2.731h-6.839Z"></path>
      </g>
    </svg>
  )
}
