import type { ReactNode } from "react"

import { Header } from "@interface/layout/section/header/header"
import {Footer} from "@interface/layout/section/footer/footer";

/**
 * Web shell component for the web application
 *
 * **Props**
 * - `children` - The root component of the web application
 */
export default function WebShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-hidden lines">
      <div className="relative z-10">

        <div className="w-full">
          {children}
        </div>
        <Footer />

      </div>
    </main>
  )
}
