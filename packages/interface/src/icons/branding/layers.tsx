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
 * <Layers />
 *
 * // Advanced
 * <Layers className="size-6" />
 * ```
 */
export function Layers({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={cn("w-auto", className)} {...props}>
      <g fill="currentColor">
        <path d="M2.424,17.977l.068-10.18c.012-1.843,1.301-3.423,3.08-3.775l9.831-1.949c2.362-.468,4.555,1.38,4.539,3.827l-.068,10.182c-.013,1.842-1.302,3.421-3.081,3.774l-9.831,1.949c-2.362,.468-4.555-1.38-4.539-3.828Z" opacity=".2"></path>
        <path d="M7.241,22.039l.068-10.182c.011-1.841,1.301-3.42,3.08-3.773l9.831-1.948c2.362-.468,4.555,1.38,4.539,3.827l-.068,10.182c-.012,1.842-1.301,3.421-3.08,3.774l-9.831,1.949c-2.362,.468-4.555-1.38-4.539-3.827v-.002Z" opacity=".5"></path>
        <path d="M12.058,26.1l.068-10.182c.012-1.843,1.301-3.421,3.08-3.774l9.831-1.949c2.362-.468,4.555,1.38,4.539,3.827l-.068,10.182c-.012,1.843-1.301,3.422-3.08,3.774l-9.831,1.949c-2.362,.468-4.555-1.38-4.539-3.827h0Z" opacity=".8"></path>
      </g>
    </svg>
  )
}
