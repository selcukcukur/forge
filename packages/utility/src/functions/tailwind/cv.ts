import { cva, type VariantProps } from "class-variance-authority"

/**
 * A lightweight wrapper around CVA for centralized variant creation
 *
 * **Parameters**
 * - `base` – Base class string applied to all variants
 * - `config` - Variant configuration object
 *    - `variants` - Variant definitions grouped by keys (e.g. size, intent)
 *    - `defaultVariants` - Optional default values for each variant group
 *    - `compoundVariants` - Optional compound rules for variant combinations
 *
 * **Usage**
 * ```tsx
 * // Basic variant
 * const badge = cv("inline-block", {
 *   variants: {
 *     tone: {
 *       info: "text-blue-600",
 *       danger: "text-red-600"
 *     }
 *   }
 * })
 *
 * // With defaultVariants
 * const button = cv("inline-flex items-center", {
 *   variants: {
 *     size: {
 *       sm: "px-2 py-1 text-sm",
 *       md: "px-4 py-2 text-base"
 *     }
 *   },
 *   defaultVariants: {
 *     size: "md"
 *   }
 * })
 *
 * // With compoundVariants
 * const alert = cv("p-4 rounded-md", {
 *   variants: {
 *     tone: {
 *       warning: "bg-yellow-100",
 *       danger: "bg-red-100"
 *     },
 *     emphasis: {
 *       strong: "font-bold",
 *       weak: "opacity-70"
 *     },
 *     rounded: {
 *       sm: "rounded-sm",
 *       md: "rounded-md"
 *     }
 *   },
 *   compoundVariants: [
 *     {
 *       variants: { tone: "danger", emphasis: "strong", rounded: "sm" },
 *       class: "text-red-700 border border-red-300"
 *     },
 *     {
 *       variants: { tone: "warning", emphasis: "weak", rounded: "md"  },
 *       class: "text-yellow-700"
 *     }
 *   ]
 * })
 * ```
 */
export const cv: typeof cva = (base, config) => cva(base, config)

/**
 * Extracts the variant type from a function signature
 *
 * **Usage**
 * ```ts
 * // Import the button component
 * import { Button } from "@sirketio/interface"
 *
 * // Button component variant type
 * type ButtonVariants = VariantOf<typeof Button>
 * ```
 */
export type VariantOf<T extends (...args: Parameters<T>) => ReturnType<T>> = VariantProps<T>
