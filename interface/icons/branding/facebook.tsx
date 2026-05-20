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
 * <Facebook />
 *
 * // Advanced
 * <Facebook className="size-6" />
 * ```
 */
export function Facebook({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={cn("w-auto", className)} {...props}>
      <g fill="currentColor">
        <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
      </g>
    </svg>
  )
}
