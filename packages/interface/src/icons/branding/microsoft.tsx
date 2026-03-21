import type { SVGProps } from "react"

import { cn } from "@workspace/utility"

export function Microsoft({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={cn("w-auto", className)}{...props}>
      <g fill="currentColor">
        <path d="M3,3H15.381V15.381H3V3Z"></path>
        <path d="M16.619,3h12.381V15.381h-12.381V3Z"></path>
        <path d="M3,16.619H15.381v12.381H3v-12.381Z"></path>
        <path d="M16.619,16.619h12.381v12.381h-12.381v-12.381Z"></path>
      </g>
    </svg>
  )
}
