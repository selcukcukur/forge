import { ComponentProps } from "react"
import { NavigationMenu as Primitive } from "radix-ui"

import { cn } from "@obvia/utilities"

/**
 * Provides the root container for a Radix navigation menu, handling layout and optional viewport rendering
 *
 * **Props**
 * - `delayDuration` - The delay duration for the viewport animation, in milliseconds
 * - `className` - Optional class names to extend or override list styles
 * - `children` - The content of the menu, normally a navigation menu list
 * - `viewport` - Whether to render the viewport
 * - `props` - All other props are spread to the root element
 */
export function NavigationMenu({
  className,
  children,
  delayDuration = 0,
  viewport = true,
  ...props
}: ComponentProps<typeof Primitive.Root> & {
  viewport?: boolean
}) {
  return (
    <Primitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      delayDuration={delayDuration}
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </Primitive.Root>
  )
}

/**
 * Arranges navigation menu items in a horizontal flex list with spacing and alignment
 *
 * **Props**
 * - `className` - Optional class names to extend or override list styles
 * - `props` - All other props are spread to the root element
 */
export function NavigationMenuList({
  className,
  ...props
}: ComponentProps<typeof Primitive.List>) {
  return (
    <Primitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      )}
      {...props}
    />
  )
}

/**
 * Represents a single item within the navigation menu, serving as a container for triggers or links
 *
 * **Props**
 * - `className` - Optional class names to extend or override list styles
 * - `props` - All other props are spread to the root element
 */
export function NavigationMenuItem({
  className,
  ...props
}: ComponentProps<typeof Primitive.Item>) {
  return (
    <Primitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

/**
 * Acts as the clickable trigger for opening and closing a navigation menu item, with icon rotation
 *
 * **Props**
 * - `trigger` - The visible label or content inside the trigger
 * - `className` - Optional class names to extend or override trigger styles
 * - `children` - The visible label or content inside the trigger
 * - `props` - All other props are spread to the root element
 */
export function NavigationMenuTrigger({
  trigger,
  className,
  children,
  ...props
}: ComponentProps<typeof Primitive.Trigger> & {
  trigger?: boolean
}) {
  return trigger ? (
    <Primitive.Trigger
      data-slot="navigation-menu-trigger"
      className={className}
      {...props}
    >
      {children}
    </Primitive.Trigger>
  ) : (
    children
  )
}

/**
 * Renders animated dropdown content in a Radix Navigation Menu, with motion states and conditional viewport styling
 *
 * **Props**
 * - `className` - Optional class names to extend or override list styles
 * - `props` - All other props are spread to the root element
 */
export function NavigationMenuContent({
  className,
  ...props
}: ComponentProps<typeof Primitive.Content>) {
  return (
    <Primitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "data-[motion=from-start]:animate-enter-from-left data-[motion=from-end]:animate-enter-from-right data-[motion=to-start]:animate-exit-to-left data-[motion=to-end]:animate-exit-to-right absolute left-0 top-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the dropdown viewport below the navigation menu with animations and Radix‑controlled responsive sizing
 *
 * **Props**
 * - `className` - Optional class names to extend or override list styles
 * - `props` - All other props are spread to the root element
 */
export function NavigationMenuViewport({
  className,
  ...props
}: ComponentProps<typeof Primitive.Viewport>) {
  return (
    <div className={cn("absolute top-full left-0 isolate z-50 flex justify-center")}>
      <Primitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          // Base
          "relative flex origin-top-center justify-start overflow-hidden rounded-[20px]",

          // Style & Border
          "bg-white dark:bg-black border border-neutral-200 dark:border-white/15",

          // Animations
          "data-[state=closed]:animate-scale-out-content data-[state=open]:animate-scale-in-content transition-[width,height]",

          // Sizing
          "h-(--radix-navigation-menu-viewport-height) w-(--radix-navigation-menu-viewport-width)",
          className
        )}
        {...props}
      />
    </div>
  )
}

/**
 * Applies Tailwind styles for navigation links with active, hover, and focus states, plus SVG sizing/color
 *
 * **Props**
 * - `className` - Optional class names to extend or override list styles
 * - `props` - All other props are spread to the root element
 */
export function NavigationMenuLink({
  className,
  ...props
}: ComponentProps<typeof Primitive.Link>) {
  return (
    <Primitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

/**
 * Displays a chevron svg icon that rotates on open/close state for navigation menu items
 *
 * **Props**
 * - `className` - Optional class names to extend or override list styles
 * - `props` - All other props are spread to the root element
 */
export function NavigationMenuChevron({
  className,
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="none" className={cn(className)} viewBox="0 0 9 9" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.278 3.389 4.5 6.167 1.722 3.389"
        className="transition-transform duration-150 transform-view origin-center [vector-effect:non-scaling-stroke] group-data-[state=open]/item:-scale-y-100"
      />
    </svg>
  )
}
