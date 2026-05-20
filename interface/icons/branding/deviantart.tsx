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
 * <Deviantart />
 *
 * // Advanced
 * <Deviantart className="size-6" />
 * ```
 */
export function Deviantart({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={cn("w-auto", className)} {...props}>
      <g fill="currentColor">
        <path d="M24.403,2h-4.82l-.514,.511-2.452,4.68-.716,.413H7.597v6.995h4.437l.462,.462-4.899,9.351v5.588h0l4.823-.002,.516-.513,2.457-4.682,.701-.405h8.309v-6.991h-4.45l-.45-.45,4.901-9.356"></path>
      </g>
    </svg>
  )
}
