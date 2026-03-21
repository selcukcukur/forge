"use client"

import type { PropsWithChildren } from "react"

import { type Direction, DirectionContext } from "../hooks"

/**
 * Provides direction context (**LTR** or **RTL**) to all child elements
 *
 * **Props**
 * - `direction` — Text direction to apply (**LTR** or **RTL**)
 * - `children`  — React nodes that will inherit the direction context
 *
 * **Usage**
 * ```tsx
 * <DirectionProvider direction="rtl">
 *   <App />
 * </DirectionProvider>
 * ```
 */
export function DirectionProvider({
  direction,
  children,
}: PropsWithChildren<{ direction: Direction }>) {
  return (
    <DirectionContext.Provider value={direction}>
      {children}
    </DirectionContext.Provider>
  )
}
