import type { ReactNode } from "react"
import type { Metadata } from "next"

// Metadata
import { createMetadata } from "@workspace/utility"

/**
 * Generated metadata for the entire application
 */
export async function generateMetadata(): Promise<Metadata> {
  // Dynamically generates seo-friendly metadata for the application
  return createMetadata()
}

/**
 * Root layout component for the entire application
 *
 * **Props**
 * - `children` - The root component of the application
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
