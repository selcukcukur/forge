import { clsx, type ClassValue } from "clsx"

import { twMerge } from "tailwind-merge"

/**
 * Resolves and merges conditional class values into a tailwind compatible string
 *
 * **Parameters**
 * - `inputs` - array of class values to normalize and merge
 *
 * **Usage**
 * ```ts
 * // Resolves a single class string
 * cn("p-4") // → "p-4"

 * // Resolves multiple conditional classes
 * cn("p-2", false && "hidden", "text-center") // → "p-2 text-center"

 * // Resolves object-based conditional classes
 * cn({ "p-4": true, "hidden": false }) // → "p-4"

 * // Resolves and merges conflicting Tailwind classes
 * cn("p-2", "p-4") // → "p-4"
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  // Normalize and conditionally combine class values
  const normalized = clsx(inputs)

  // Merge conflicting tailwind classes (e.g., p-2 vs. p-4)
  return twMerge(normalized)
}
