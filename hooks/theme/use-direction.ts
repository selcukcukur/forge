"use client"

import { createContext, useContext } from "react"

export type Direction = "ltr" | "rtl"

export const DirectionContext = createContext<Direction>("ltr")

/**
 * Get the current text direction (**LTR** or **RTL**) from context
 *
 * **Usage**
 * ```tsx
 * // Get direction in a component
 * const direction = useDirection()
 *
 * // Apply RTL-specific logic
 * if (direction === "rtl") {
 *   // ...
 * }
 * ```
 */
export function useDirection() {
  return useContext(DirectionContext)
}
