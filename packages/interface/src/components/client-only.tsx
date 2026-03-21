"use client"

import type { ReactNode, PropsWithChildren } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { useClientReady } from "@workspace/interface"

// Define the props for the client only component
type ClientOnlyProps = PropsWithChildren<{
  // Optional fallback content to render while the client is loading
  fallback?: ReactNode
  // Optional duration of the fade-in animation (in seconds)
  fadeInDuration?: number
  // Optional class names for the wrapper element
  className?: string
}>

/**
 * Client-only component that renders its children only on the client side
 *
 * **Props**
 * - `fallback` — Optional fallback content to render while the client is loading
 * - `fadeInDuration` — Optional duration of the fade-in animation (in seconds)
 * - `className` — Optional class names for the wrapper element
 * - `children` - The content to render on the client
 *
 * **Usage**
 * ```tsx
 * // Basic usage
 * <ClientOnly fallback={<Skeleton />} />
 *
 * // With custom fade-in duration
 * <ClientOnly fallback={<Skeleton />} fadeInDuration={0.5} />
 *
 * // With custom class names
 * <ClientOnly fallback={<Skeleton />} className="px-4" />
 * ```
 */
export function ClientOnly({
  fallback,
  fadeInDuration = 0.5,
  className,
  children,
}: ClientOnlyProps) {
  // Use your custom hook to detect client readiness
  const isClientReady = useClientReady()

  // Decide whether to use motion.div or plain div
  const Component = fadeInDuration && fadeInDuration > 0 ? motion.div : "div"

  return (
    // Animate presence is a framer motion wrapper that enables enter/exit animations
    <AnimatePresence>
      {isClientReady ? (
        // If the client is ready, render the animated component
        <Component
          // Spread animation props only if fadeInDuration > 0
          {...(fadeInDuration && fadeInDuration > 0
            ? {
              // Start fully transparent
              initial: { opacity: 0 },
              // Animate to fully visible
              animate: { opacity: 1 },
              // Control the duration of the fade-in
              transition: { duration: fadeInDuration },
            }
            : {})
          }
          // Apply any custom className passed in
          className={className}
        >
          {/* Render the children inside the component */}
          {children}
        </Component>
      // If the client is not ready, render the fallback (or nothing)
      ) : fallback || null }
    </AnimatePresence>
  )
}
