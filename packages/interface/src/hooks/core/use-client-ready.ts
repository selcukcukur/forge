"use client"

import { useSyncExternalStore } from "react"

/**
 * Hook that returns true only after the component has mounted on the client
 *
 * **Usage**
 * ```tsx
 * // Wait until the component is mounted on the client
 * const isClientReady = useClientReady()
 *
 * // Prevent rendering until after the first client-side paint
 * if (!isClientReady) {
 *   // Show a placeholder until the client is ready
 *   return <Skeleton />
 * }
 *
 * // Safe to render client-only logic here
 * return <Component />
 * ```
 */
export function useClientReady(): boolean {
  // Define a subscribe function that react will call to listen for changes
  const subscribe = (onStoreChange: () => void) => {
    const frameId = requestAnimationFrame(onStoreChange)

    // Return a cleanup function that cancels the scheduled frame if the component unmounts
    return () => cancelAnimationFrame(frameId)
  }

  // This function returns true when running on the client
  const clientValue = () => true

  // This function returns false when rendering on the server
  const serverValue = () => false

  // The result is false on the server and true after the client has mounted
  return useSyncExternalStore(subscribe, clientValue, serverValue)
}
