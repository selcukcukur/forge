import type { Metadata } from "next"

// Metadata
import { createMetadata } from "@obvia/utilities/next"

// Document
import Document from "document"

// Provider
import { RootProviders } from "provider"

// Layout
import WebShell from "web-shell"

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
export default async function WebRootLayout({ children, params }: LayoutProps<'/selcukcukur.me'>) {
  return (
    <Document locale="en" suppress={true} bodyClassName="font-sans antialiased">
      <RootProviders locale="en">
        <WebShell>{children}</WebShell>
      </RootProviders>
    </Document>
  )
}
