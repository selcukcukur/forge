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
 * <Patreon />
 *
 * // Advanced
 * <Patreon className="size-6" />
 * ```
 */
export function Patreon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={cn("w-auto", className)} {...props}>
      <g fill="currentColor">
        <path d="M28.783,10.412c-.005-3.575-2.789-6.505-6.056-7.563-4.057-1.313-9.407-1.123-13.281,.705C4.75,5.77,3.275,10.623,3.22,15.464c-.045,3.98,.352,14.461,6.264,14.536,4.393,.056,5.047-5.605,7.08-8.331,1.446-1.94,3.308-2.487,5.6-3.055,3.939-.975,6.624-4.084,6.619-8.203Z"></path>
      </g>
    </svg>
  )
}
