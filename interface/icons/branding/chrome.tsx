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
 * <Chrome />
 *
 * // Advanced
 * <Chrome className="size-6" />
 * ```
 */
export function Chrome({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={cn("w-auto", className)} {...props}>
      <g fill="currentColor">
        <path d="M9.138,14.616c.645-3.199,3.476-5.616,6.862-5.616h12.106c-2.425-4.177-6.937-7-12.106-7-4.478,0-8.461,2.121-11.026,5.403l4.164,7.213Z"></path>
        <circle cx="16" cy="16" r="5.25"></circle>
        <path d="M18.236,22.627c-.703,.238-1.453,.373-2.236,.373-2.586,0-4.843-1.413-6.055-3.504l-.008,.004L3.885,9.017c-1.192,2.058-1.885,4.439-1.885,6.983,0,7.061,5.261,12.903,12.065,13.85l4.17-7.223Z"></path>
        <path d="M20.615,10.75c1.459,1.284,2.385,3.159,2.385,5.25,0,1.274-.347,2.466-.945,3.496l.008,.004-6.063,10.5c7.719,0,14-6.281,14-14,0-1.857-.371-3.627-1.031-5.25h-8.355Z"></path>
      </g>
    </svg>
  )
}
