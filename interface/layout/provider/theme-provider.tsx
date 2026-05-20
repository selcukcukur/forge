"use client"

import type { ComponentProps } from "react"

import {
  ThemeProvider as Primitive,
} from "next-themes"

/**
 * Provides theme context to all child elements
 *
 * **Props**
 * - `themes`   — List of all available theme names
 * - `fallback` — Default theme to apply when no system or user preference is set
 * - `children` — React nodes that will inherit the theme context
 *
 * **Usage**
 * ```tsx
 * // Basic usage with default light/dark themes
 * <ThemeProvider fallback="light">
 *   {children}
 * </ThemeProvider>
 *
 * // Custom themes
 * <ThemeProvider themes={["corporate", "retro"]} fallback="corporate">
 *   {children}
 * </ThemeProvider>
 * ```
 */
export function ThemeProvider({
  themes = ["light", "dark"],
  fallback = "light",
  ...props
}: ComponentProps<typeof Primitive> & { fallback?: string }) {
  return (
    <Primitive
      themes={themes}
      attribute="class"
      defaultTheme={fallback}
      disableTransitionOnChange={true}
      enableColorScheme={true}
      enableSystem={true}
      {...props}
    />
  )
}
