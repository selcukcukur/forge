import type { ReactNode } from "react"
import type { Metadata } from "next"

/**
 * Root layout component for the entire application
 *
 * **Props**
 * - `children` - The root component of the application
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
