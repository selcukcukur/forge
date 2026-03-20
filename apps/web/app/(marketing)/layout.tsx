import type { Metadata } from "next"

// Metadata
import { createMetadata } from "@workspace/utility"

// Document
import Document from "@/interface/document"

// Layout
import WebShell from "@/interface/layout/web-shell"

/**
 * Generated metadata for the entire web application
 */
export async function generateMetadata(): Promise<Metadata> {
  // Dynamically generates seo-friendly metadata for the application
  return createMetadata()
}

/**
 * Web layout component for the entire web application
 *
 * **Props**
 * - `children` - The root component of the web application
 * - `params` - Locale segment from the URL
 */
export default async function WebRootLayout({ children, params }: LayoutProps<'/'>) {
  return (
    <Document locale="en" suppress={true}>
      <WebShell>
        {children}
      </WebShell>
    </Document>
  )
}
