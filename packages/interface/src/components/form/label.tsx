"use client"

import type { ComponentProps } from "react"
import { Label as LabelPrimitive } from "radix-ui"

import { cn } from "@obvia/utilities"

/**
 * Provides a styled label element with consistent typography and disabled state handling
 *
 * **Props**
 * - `className` — Optional class names to extend or override default styles
 * - `props` — Any additional props supported by a <label> element
 */
export function Label({
  className,
  ...props
}: ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  )
}
