import type { ReactNode } from "react"

/**
 * Web shell component for the web application
 *
 * **Props**
 * - `children` - The root component of the web application
 */
export default function WebShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {children}
    </main>
  )
}
