import type { PropsWithChildren } from "react"

// Typography
import { geist, geistMono, spaceGrotesk } from "@workspace/interface/fonts"

// Styling
import "@workspace/interface/globals.css"

// Utility
import { APP_LOCALE, APP_LOCALES, cn } from "@obvia/utilities/next"

/**
 * Document wrapper component for setting up root-level html attributes
 *
 * **Props**
 * - `locale` – Optional locale string
 * - `direction` – Optional text direction override `ltr` or `rtl`
 * - `suppress` – Suppresses React hydration warnings
 * - `bodyClassName` – Optional CSS classes applied to the `<body>` element for styling/layout
 * - `className` – Optional CSS classes applied to the `<html>` element for global styling/themes
 * - `children` – React children rendered inside `<body>`
 *
 * **Usage**
 * ```tsx
 * // Locale override: sets <html lang="en">
 * <Document locale="en">
 *   <Component />
 * </Document>
 *
 * // Body styling: applies "dark" class to <body>
 * <Document bodyClassName="dark">
 *   <Component />
 * </Document>
 *
 * // Root styling: applies "dark" class to <html>
 * <Document className="dark">
 *   <Component />
 * </Document>
 * ```
 */
export default function Document({
  children,
  locale,
  direction,
  suppress = false,
  bodyClassName,
  className,
}: PropsWithChildren<{
  locale?: string
  direction?: string
  suppress?: boolean
  className?: string
  bodyClassName?: string
}>) {
  // Resolve active language: use provided locale if valid, else fallback to APP_LOCALE
  const language = (locale && APP_LOCALES.has(locale)) ? locale : APP_LOCALE

  // Resolve text direction: explicit override wins, else Arabic locale → rtl, otherwise ltr
  const dir = direction || locale === "ar" ? "rtl" : "ltr"

  return (
    <html lang={language} dir={dir} className={cn(`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`, className)} suppressHydrationWarning={suppress}>
    <body className={cn(bodyClassName)}>
    {children}
    </body>
    </html>
  )
}
