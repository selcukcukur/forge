"use client"

import type { PropsWithChildren } from "react"
import { Analytics } from "@vercel/analytics/next"

import {
  DirectionProvider,
  ThemeProvider
} from "@workspace/interface"

/**
 * Composes all core application providers into a single root wrapper
 *
 * **Props**
 * - `locale` - Current locale identifier (`tr`, `en`, `de`, `fr`, `ru`, `ar`)
 * - `direction` - Text direction to apply (`ltr` or `rtl`)
 * - `children` - React nodes that will inherit all provider contexts
 *
 * **Usage**
 * ```tsx
 * // Basic root setup
 * <RootProviders locale="tr" direction="ltr">
 *   {children}
 * </RootProviders>
 *
 * // Example with RTL layout
 * <RootProviders locale="ar" direction="rtl">
 *   {children}
 * </RootProviders>
 * ```
 */
export function RootProviders({
  locale = "en",
  direction = "ltr",
  children
}: PropsWithChildren<{
  locale: string,
  direction?: "ltr" | "rtl"
}>) {
  return (
    <DirectionProvider direction={direction}>
      <ThemeProvider>
        {children}

        <Analytics />
      </ThemeProvider>
    </DirectionProvider>
  )
}
