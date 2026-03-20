import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"

/**
 * **Geist Sans** font, with `className` and `variable` properties, meant to be attached to DOM elements via `className`
 *
 * **Weights**
 * - `100` - Thin
 * - `200` - Ultra Light
 * - `300` - Light
 * - `400` - Regular
 * - `500` - Medium
 * - `600` - Semibold
 * - `700` - Bold
 * - `800` - Black
 * - `900` - Ultra Black
 */
export const geist = Geist({
    subsets  : ["latin"],
    variable : '--font-geist',
    display  : 'swap',
})

/**
 * **Geist Mono** font, with `className` and `variable` properties, meant to be attached to DOM elements via `className`
 *
 * **Weights**
 * - `100` - Thin
 * - `200` - Ultra Light
 * - `300` - Light
 * - `400` - Regular
 * - `500` - Medium
 * - `600` - Semibold
 * - `700` - Bold
 * - `800` - Black
 * - `900` - Ultra Black
 */
export const geistMono = Geist_Mono({
    subsets  : ["latin"],
    variable : '--font-geist-mono',
    display  : 'swap',
})

/**
 * **Space Grotesk** font, with `className` and `variable` properties, meant to be attached to DOM elements via `className`
 *
 * **Weights**
 * - `100` - Thin
 * - `200` - Ultra Light
 * - `300` - Light
 * - `400` - Regular
 * - `500` - Medium
 * - `600` - Semibold
 * - `700` - Bold
 * - `800` - Black
 * - `900` - Ultra Black
 */
export const spaceGrotesk = Space_Grotesk({
    subsets  : ["latin"],
    variable : '--font-space-grotesk',
    display  : 'swap',
})
